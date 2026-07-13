import {
  ContinueChatResponse,
  Group,
  InputBlock,
  RuntimeOptions,
  SessionState,
  SetVariableHistoryItem,
} from '@typebot.io/schemas'
import { isEmpty, isNotEmpty } from '@typebot.io/lib'
import {
  isBubbleBlock,
  isInputBlock,
  isIntegrationBlock,
  isLogicBlock,
} from '@typebot.io/schemas/helpers'
import { getNextGroup } from './getNextGroup'
import { executeLogic } from './executeLogic'
import { executeIntegration } from './executeIntegration'
import { computePaymentInputRuntimeOptions } from './blocks/inputs/payment/computePaymentInputRuntimeOptions'
import { injectVariableValuesInButtonsInputBlock } from './blocks/inputs/buttons/injectVariableValuesInButtonsInputBlock'
import { injectVariableValuesInPictureChoiceBlock } from './blocks/inputs/pictureChoice/injectVariableValuesInPictureChoiceBlock'
import { getPrefilledInputValue } from './getPrefilledValue'
import { parseDateInput } from './blocks/inputs/date/parseDateInput'
import { deepParseVariables } from '@typebot.io/variables/deepParseVariables'
import { InputBlockType } from '@typebot.io/schemas/features/blocks/inputs/constants'
import { VisitedEdge } from '@typebot.io/prisma'
import { env } from '@typebot.io/env'
import { TRPCError } from '@trpc/server'
import { ExecuteIntegrationResponse, ExecuteLogicResponse } from './types'
import { createId } from '@paralleldrive/cuid2'
import {
  BubbleBlockWithDefinedContent,
  parseBubbleBlock,
} from './parseBubbleBlock'
import { BubbleBlockType } from '@typebot.io/schemas/features/blocks/bubbles/constants'
import { ERROR_LOOP_LIMIT_PER_MINUTE } from './logs/errorLoopGuard'
import { RUNTIME_TIMEOUT_FORCED_STOP_MESSAGE } from './logs/runtimeTimeoutGuard'

const CURRENT_RUN_WEBHOOK_TIMEOUT_LIMIT = 10
const CONSECUTIVE_ERROR_LIMIT = 10
const WEBHOOK_TIMEOUT_DESCRIPTION_PREFIX = 'Webhook request timed out.'
const WEBHOOK_TIMEOUT_LOOP_FORCED_STOP_MESSAGE =
  'Bot stopped automatically: webhook timeout loop detected'
const CONSECUTIVE_ERROR_LOOP_FORCED_STOP_MESSAGE =
  'Bot stopped automatically: consecutive error loop detected'

type ContextProps = {
  version: 1 | 2
  state: SessionState
  currentReply?: ContinueChatResponse
  currentLastBubbleId?: string
  firstBubbleWasStreamed?: boolean
  visitedEdges: VisitedEdge[]
  setVariableHistory: SetVariableHistoryItem[]
  startTime?: number
  textBubbleContentFormat: 'richText' | 'markdown'
}

export const executeGroup = async (
  group: Group,
  {
    version,
    state,
    visitedEdges,
    setVariableHistory,
    currentReply,
    currentLastBubbleId,
    firstBubbleWasStreamed,
    startTime,
    textBubbleContentFormat,
  }: ContextProps
): Promise<
  ContinueChatResponse & {
    newSessionState: SessionState
    setVariableHistory: SetVariableHistoryItem[]
    visitedEdges: VisitedEdge[]
  }
> => {
  let newStartTime = startTime
  const messages: ContinueChatResponse['messages'] =
    currentReply?.messages ?? []
  let clientSideActions: ContinueChatResponse['clientSideActions'] =
    currentReply?.clientSideActions
  let logs: ContinueChatResponse['logs'] = currentReply?.logs
  let nextEdgeId = null
  let lastBubbleBlockId: string | undefined = currentLastBubbleId

  let newSessionState = state

  let isNextEdgeOffDefaultPath = false
  let index = -1
  for (const block of group.blocks) {
    if (
      newStartTime &&
      env.CHAT_API_TIMEOUT &&
      Date.now() - newStartTime > env.CHAT_API_TIMEOUT
    ) {
      return stopCurrentRun({
        messages,
        newSessionState,
        clientSideActions,
        logs,
        visitedEdges,
        setVariableHistory,
        description: RUNTIME_TIMEOUT_FORCED_STOP_MESSAGE,
        details: {
          reason:
            'Forced stop because the Typebot runtime reached a timeout before the flow could finish.',
          runtimeTimeoutMs: env.CHAT_API_TIMEOUT,
        },
      })
    }

    index++
    nextEdgeId = block.outgoingEdgeId

    if (isBubbleBlock(block)) {
      if (!block.content || (firstBubbleWasStreamed && index === 0)) continue
      const message = parseBubbleBlock(block as BubbleBlockWithDefinedContent, {
        version,
        variables: newSessionState.typebotsQueue[0].typebot.variables,
        typebotVersion: newSessionState.typebotsQueue[0].typebot.version,
        textBubbleContentFormat,
      })
      messages.push(message)
      if (
        message.type === BubbleBlockType.EMBED &&
        message.content.waitForEvent?.isEnabled
      ) {
        return {
          messages,
          newSessionState: {
            ...newSessionState,
            currentBlockId: block.id,
          },
          clientSideActions,
          logs,
          visitedEdges,
          setVariableHistory,
        }
      }

      lastBubbleBlockId = block.id
      continue
    }

    if (isInputBlock(block))
      return {
        messages,
        input: await parseInput(newSessionState)(block),
        newSessionState: {
          ...newSessionState,
          currentBlockId: block.id,
        },
        clientSideActions,
        logs,
        visitedEdges,
        setVariableHistory,
      }

    if (isIntegrationBlock(block) && messages.length > 0 && lastBubbleBlockId) {
      if (hasExceededConsecutiveErrorLimit(newSessionState))
        return stopCurrentRun({
          messages,
          newSessionState,
          clientSideActions,
          logs,
          visitedEdges,
          setVariableHistory,
          description: CONSECUTIVE_ERROR_LOOP_FORCED_STOP_MESSAGE,
          details: {
            reason: `Forced stop because ${CONSECUTIVE_ERROR_LIMIT} consecutive error logs were recorded in this session.`,
            consecutiveErrorCount:
              newSessionState.errorLoopMetadata?.consecutiveErrorCount ?? 0,
            limit: CONSECUTIVE_ERROR_LIMIT,
          },
        })

      return yieldMessagesBeforeIntegration({
        messages,
        newSessionState,
        clientSideActions,
        logs,
        visitedEdges,
        setVariableHistory,
        lastBubbleBlockId,
      })
    }

    const executionResponse = (
      isLogicBlock(block)
        ? await executeLogic(newSessionState)(block)
        : isIntegrationBlock(block)
        ? await executeIntegration(newSessionState)(block)
        : null
    ) as ExecuteLogicResponse | ExecuteIntegrationResponse | null

    if (!executionResponse) continue
    if (
      executionResponse.newSetVariableHistory &&
      executionResponse.newSetVariableHistory?.length > 0
    ) {
      if (!newSessionState.typebotsQueue[0].resultId)
        newSessionState = {
          ...newSessionState,
          previewMetadata: {
            ...newSessionState.previewMetadata,
            setVariableHistory: (
              newSessionState.previewMetadata?.setVariableHistory ?? []
            ).concat(
              executionResponse.newSetVariableHistory.map((item) => ({
                blockId: item.blockId,
                variableId: item.variableId,
                value: item.value,
              }))
            ),
          },
        }
      else setVariableHistory.push(...executionResponse.newSetVariableHistory)
    }

    if (
      'startTimeShouldBeUpdated' in executionResponse &&
      executionResponse.startTimeShouldBeUpdated
    )
      newStartTime = Date.now()
    if (executionResponse.newSessionState)
      newSessionState = executionResponse.newSessionState
    if (executionResponse.logs) {
      logs = [...(logs ?? []), ...executionResponse.logs]
      newSessionState = updateConsecutiveErrorCount(
        newSessionState,
        executionResponse.logs
      )
      if (hasExceededCurrentRunWebhookTimeoutLimit(logs))
        return stopCurrentRun({
          messages,
          newSessionState,
          clientSideActions,
          logs,
          visitedEdges,
          setVariableHistory,
          description: WEBHOOK_TIMEOUT_LOOP_FORCED_STOP_MESSAGE,
          details: {
            reason: `Forced stop because a webhook timed out ${CURRENT_RUN_WEBHOOK_TIMEOUT_LIMIT} times in the same run.`,
            timeoutCount: getCurrentRunWebhookTimeoutCount(logs),
            limit: CURRENT_RUN_WEBHOOK_TIMEOUT_LIMIT,
          },
        })
      if (hasExceededCurrentRunErrorLimit(logs))
        return {
          messages,
          newSessionState,
          clientSideActions,
          logs,
          visitedEdges,
          setVariableHistory,
        }
    }
    if (
      'clientSideActions' in executionResponse &&
      executionResponse.clientSideActions
    ) {
      clientSideActions = [
        ...(clientSideActions ?? []),
        ...executionResponse.clientSideActions.map((action) => ({
          ...action,
          lastBubbleBlockId,
        })),
      ]
      if (
        'customEmbedBubble' in executionResponse &&
        executionResponse.customEmbedBubble
      ) {
        messages.push({
          id: createId(),
          ...executionResponse.customEmbedBubble,
        })
      }
      if (
        executionResponse.clientSideActions?.find(
          (action) => action.expectsDedicatedReply
        ) ||
        ('customEmbedBubble' in executionResponse &&
          executionResponse.customEmbedBubble)
      ) {
        return {
          messages,
          newSessionState: {
            ...newSessionState,
            currentBlockId: block.id,
          },
          clientSideActions,
          logs,
          visitedEdges,
          setVariableHistory,
        }
      }
    }

    if (executionResponse.outgoingEdgeId) {
      isNextEdgeOffDefaultPath =
        block.outgoingEdgeId !== executionResponse.outgoingEdgeId
      nextEdgeId = executionResponse.outgoingEdgeId
      break
    }
  }

  if (!nextEdgeId && newSessionState.typebotsQueue.length === 1)
    return {
      messages,
      newSessionState,
      clientSideActions,
      logs,
      visitedEdges,
      setVariableHistory,
    }

  const nextGroup = await getNextGroup({
    state: newSessionState,
    edgeId: nextEdgeId ?? undefined,
    isOffDefaultPath: isNextEdgeOffDefaultPath,
  })

  newSessionState = nextGroup.newSessionState

  if (nextGroup.visitedEdge) visitedEdges.push(nextGroup.visitedEdge)

  if (!nextGroup.group) {
    return {
      messages,
      newSessionState,
      clientSideActions,
      logs,
      visitedEdges,
      setVariableHistory,
    }
  }

  return executeGroup(nextGroup.group, {
    version,
    state: newSessionState,
    visitedEdges,
    setVariableHistory,
    currentReply: {
      messages,
      clientSideActions,
      logs,
    },
    currentLastBubbleId: lastBubbleBlockId,
    startTime: newStartTime,
    textBubbleContentFormat,
  })
}

const hasExceededCurrentRunErrorLimit = (logs: ContinueChatResponse['logs']) =>
  (logs?.filter((log) => log.status === 'error').length ?? 0) >
  ERROR_LOOP_LIMIT_PER_MINUTE

const hasExceededCurrentRunWebhookTimeoutLimit = (
  logs: ContinueChatResponse['logs']
) => getCurrentRunWebhookTimeoutCount(logs) >= CURRENT_RUN_WEBHOOK_TIMEOUT_LIMIT

const getCurrentRunWebhookTimeoutCount = (logs: ContinueChatResponse['logs']) =>
  logs?.filter(
    (log) =>
      log.status === 'error' &&
      log.description.startsWith(WEBHOOK_TIMEOUT_DESCRIPTION_PREFIX)
  ).length ?? 0

const hasExceededConsecutiveErrorLimit = (state: SessionState) =>
  (state.errorLoopMetadata?.consecutiveErrorCount ?? 0) >=
  CONSECUTIVE_ERROR_LIMIT

const updateConsecutiveErrorCount = (
  state: SessionState,
  logs: ContinueChatResponse['logs']
): SessionState => {
  if (!logs || logs.length === 0) return state

  const consecutiveErrorCount = logs.reduce(
    (count, log) =>
      log.status === 'error' ? count + 1 : log.status === 'success' ? 0 : count,
    state.errorLoopMetadata?.consecutiveErrorCount ?? 0
  )

  return {
    ...state,
    errorLoopMetadata:
      consecutiveErrorCount > 0 ? { consecutiveErrorCount } : undefined,
  }
}

const stopCurrentRun = ({
  messages,
  newSessionState,
  clientSideActions,
  logs,
  visitedEdges,
  setVariableHistory,
  description,
  details,
}: {
  messages: ContinueChatResponse['messages']
  newSessionState: SessionState
  clientSideActions: ContinueChatResponse['clientSideActions']
  logs: ContinueChatResponse['logs']
  visitedEdges: VisitedEdge[]
  setVariableHistory: SetVariableHistoryItem[]
  description: string
  details: unknown
}) => ({
  messages,
  newSessionState,
  clientSideActions,
  logs: [
    ...(logs ?? []),
    {
      status: 'error' as const,
      description,
      details,
    },
  ],
  visitedEdges,
  setVariableHistory,
})

const yieldMessagesBeforeIntegration = ({
  messages,
  newSessionState,
  clientSideActions,
  logs,
  visitedEdges,
  setVariableHistory,
  lastBubbleBlockId,
}: {
  messages: ContinueChatResponse['messages']
  newSessionState: SessionState
  clientSideActions: ContinueChatResponse['clientSideActions']
  logs: ContinueChatResponse['logs']
  visitedEdges: VisitedEdge[]
  setVariableHistory: SetVariableHistoryItem[]
  lastBubbleBlockId: string
}) => ({
  messages,
  newSessionState: {
    ...newSessionState,
    currentBlockId: lastBubbleBlockId,
  },
  clientSideActions: [
    ...(clientSideActions ?? []),
    {
      type: 'wait' as const,
      wait: { secondsToWaitFor: 0 },
      expectsDedicatedReply: true,
      lastBubbleBlockId,
    },
  ],
  logs,
  visitedEdges,
  setVariableHistory,
})

const computeRuntimeOptions =
  (state: SessionState) =>
  (block: InputBlock): Promise<RuntimeOptions> | undefined => {
    switch (block.type) {
      case InputBlockType.PAYMENT: {
        return computePaymentInputRuntimeOptions(state)(block.options)
      }
    }
  }

export const parseInput =
  (state: SessionState) =>
  async (block: InputBlock): Promise<ContinueChatResponse['input']> => {
    switch (block.type) {
      case InputBlockType.CHOICE: {
        return injectVariableValuesInButtonsInputBlock(state)(block)
      }
      case InputBlockType.PICTURE_CHOICE: {
        return injectVariableValuesInPictureChoiceBlock(
          state.typebotsQueue[0].typebot.variables
        )(block)
      }
      case InputBlockType.NUMBER: {
        const parsedBlock = deepParseVariables(
          state.typebotsQueue[0].typebot.variables
        )({
          ...block,
          prefilledValue: getPrefilledInputValue(
            state.typebotsQueue[0].typebot.variables
          )(block),
        })
        return {
          ...parsedBlock,
          options: {
            ...parsedBlock.options,
            min: isNotEmpty(parsedBlock.options?.min as string)
              ? Number(parsedBlock.options?.min)
              : undefined,
            max: isNotEmpty(parsedBlock.options?.max as string)
              ? Number(parsedBlock.options?.max)
              : undefined,
            step: isNotEmpty(parsedBlock.options?.step as string)
              ? Number(parsedBlock.options?.step)
              : undefined,
          },
        }
      }
      case InputBlockType.DATE: {
        return parseDateInput(state)(block)
      }
      case InputBlockType.RATING: {
        const parsedBlock = deepParseVariables(
          state.typebotsQueue[0].typebot.variables
        )({
          ...block,
          prefilledValue: getPrefilledInputValue(
            state.typebotsQueue[0].typebot.variables
          )(block),
        })
        return {
          ...parsedBlock,
          options: {
            ...parsedBlock.options,
            startsAt: isNotEmpty(parsedBlock.options?.startsAt as string)
              ? Number(parsedBlock.options?.startsAt)
              : undefined,
          },
        }
      }
      default: {
        return deepParseVariables(state.typebotsQueue[0].typebot.variables)({
          ...block,
          runtimeOptions: await computeRuntimeOptions(state)(block),
          prefilledValue: getPrefilledInputValue(
            state.typebotsQueue[0].typebot.variables
          )(block),
        })
      }
    }
  }
