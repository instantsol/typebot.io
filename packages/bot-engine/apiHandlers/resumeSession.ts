import { TRPCError } from '@trpc/server'
import { isDefined } from '@typebot.io/lib/utils'
import { isInputBlock } from '@typebot.io/schemas/helpers'
import { Block, StartChatResponse, Theme } from '@typebot.io/schemas'
import { Settings } from '@typebot.io/schemas/features/typebot/settings'
import prisma from '@typebot.io/lib/prisma'
import { getSession } from '../queries/getSession'
import { parseInput } from '../executeGroup'
import { parseDynamicTheme } from '../parseDynamicTheme'
import { sanitizeAndParseTheme } from '../startSession'
import { deepParseVariables } from '@typebot.io/variables/deepParseVariables'

type Props = {
  sessionId: string
}

// chatweb-session-resume (kwik-ci): restores a session's current position
// (the block it's currently waiting on a reply for) from persisted
// ChatSession.state, without executing any block. This is the "no replay"
// counterpart to continueChat: continueChat advances the flow by processing
// a new message, this only ever describes where the flow already is.
//
// parseInput is a pure function of (state, block) — it maps a block's own
// static definition + current variable values into the response's `input`
// shape, the same way executeGroup/continueBotFlow already do when they
// first reach that block. Reusing it here means no new block-rendering
// logic, and guarantees this can never re-run a webhook, Set Variable, or
// any other side-effecting block: only the single already-reached input
// block (if any) is touched, purely for its static shape.
export const resumeSession = async ({
  sessionId,
}: Props): Promise<StartChatResponse> => {
  const session = await getSession(sessionId)

  if (!session)
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'Session not found.',
    })

  const isSessionExpired =
    isDefined(session.state.expiryTimeout) &&
    session.updatedAt.getTime() + session.state.expiryTimeout < Date.now()

  if (isSessionExpired)
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'Session expired. You need to start a new session.',
    })

  const state = session.state
  const typebotInSession = state.typebotsQueue[0].typebot

  const publicTypebot = await prisma.publicTypebot.findUnique({
    where: { typebotId: typebotInSession.id },
    select: { theme: true, settings: true },
  })

  if (!publicTypebot)
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'Typebot not found.',
    })

  const currentBlock = state.currentBlockId
    ? (typebotInSession.groups
        .flatMap<Block>((group) => group.blocks)
        .find((block) => block.id === state.currentBlockId) as
        | Block
        | undefined)
    : undefined

  const input =
    currentBlock && isInputBlock(currentBlock)
      ? await parseInput(state)(currentBlock)
      : undefined

  return {
    sessionId,
    typebot: {
      id: typebotInSession.id,
      theme: sanitizeAndParseTheme(publicTypebot.theme as Theme, {
        variables: typebotInSession.variables,
      }),
      settings: deepParseVariables(typebotInSession.variables)(
        publicTypebot.settings as Settings
      ),
    },
    messages: [],
    input,
    dynamicTheme: parseDynamicTheme(state),
  }
}
