import { createHash } from 'crypto'
import { TRPCError } from '@trpc/server'
import { env } from '@typebot.io/env'
import prisma from '@typebot.io/lib/prisma'
import type { Log, Prisma } from '@typebot.io/prisma'
import type { TypebotInSession } from '@typebot.io/schemas'
import { upsertResult } from '../queries/upsertResult'
import { stopResultAndDeleteSessions } from './errorLoopGuard'
import { formatLogDetails } from './helpers/formatLogDetails'
import { notifyTypebotErrorLog } from './saveLog'

export const RUNTIME_TIMEOUT_FORCED_STOP_MESSAGE =
  'Bot stopped automatically: runtime timeout reached'

const RUNTIME_TIMEOUT_FORCED_STOP_ID_PREFIX = 'runtime_timeout_stop_'

type Props = {
  error: unknown
  resultId: string | undefined
  sessionId?: string
  typebot?: TypebotInSession
  hasStarted?: boolean
}

export const isRuntimeTimeoutError = (error: unknown): error is TRPCError =>
  error instanceof TRPCError && error.code === 'TIMEOUT'

export const stopResultOnRuntimeTimeout = async ({
  error,
  resultId,
  sessionId,
  typebot,
  hasStarted = false,
}: Props) => {
  if (!isRuntimeTimeoutError(error) || !resultId || resultId === 'undefined')
    return false

  if (typebot)
    await upsertResult({
      resultId,
      typebot,
      hasStarted,
      isCompleted: true,
      lastChatSessionId: sessionId,
    })

  const stopLogResult = await createRuntimeTimeoutStopLog({
    resultId,
    sessionId,
    errorMessage: error.message,
  })
  await stopResultAndDeleteSessions({ resultId, sessionId })

  if (stopLogResult?.wasCreated)
    notifyTypebotErrorLog(stopLogResult.log).catch(() => {})

  return true
}

export const isResultStoppedByRuntimeTimeout = async (resultId: string) =>
  Boolean(await findRuntimeTimeoutStopLog(resultId))

const findRuntimeTimeoutStopLog = (resultId: string) =>
  prisma.log.findUnique({
    where: {
      id: getRuntimeTimeoutStopLogId(resultId),
    },
  })

const createRuntimeTimeoutStopLog = async ({
  resultId,
  sessionId,
  errorMessage,
}: {
  resultId: string
  sessionId?: string
  errorMessage: string
}): Promise<{ log: Log; wasCreated: boolean } | null> => {
  const id = getRuntimeTimeoutStopLogId(resultId)
  try {
    return {
      log: await prisma.log.create({
        data: {
          id,
          resultId,
          status: 'error',
          description: RUNTIME_TIMEOUT_FORCED_STOP_MESSAGE,
          details: formatLogDetails({
            reason:
              'Forced stop because the Typebot runtime reached a timeout before the flow could save its state.',
            resultId,
            sessionId,
            runtimeTimeoutMs: env.CHAT_API_TIMEOUT ?? null,
            errorMessage,
          }),
        },
      }),
      wasCreated: true,
    }
  } catch (error) {
    const code = (error as Prisma.PrismaClientKnownRequestError).code
    if (code === 'P2002') {
      const log = await findRuntimeTimeoutStopLog(resultId)
      return log ? { log, wasCreated: false } : null
    }
    if (code === 'P2003') return null
    throw error
  }
}

const getRuntimeTimeoutStopLogId = (resultId: string) =>
  `${RUNTIME_TIMEOUT_FORCED_STOP_ID_PREFIX}${createHash('sha256')
    .update(resultId)
    .digest('hex')
    .slice(0, 32)}`
