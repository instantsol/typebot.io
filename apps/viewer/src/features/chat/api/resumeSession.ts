import { publicProcedure } from '@/helpers/server/trpc'
import { startChatResponseSchema } from '@typebot.io/schemas/features/chat/schema'
import { z } from 'zod'
import { resumeSession as resumeSessionFn } from '@typebot.io/bot-engine/apiHandlers/resumeSession'

// chatweb-session-resume (kwik-ci): given an existing sessionId, returns the
// session's current position (the block it's already waiting on a reply
// for) without executing anything — the counterpart to continueChat that
// never advances the flow, only describes where it already is. See
// /usr/local/src/kwik-ci/openspec/changes/chatweb-session-resume.
export const resumeSession = publicProcedure
  .meta({
    openapi: {
      method: 'GET',
      path: '/v1/sessions/{sessionId}/resume',
      summary: 'Resume chat session',
      description:
        "Returns the session's current position without executing any block. Use this instead of startChat to resume an existing session without replaying the flow.",
    },
  })
  .input(
    z.object({
      sessionId: z
        .string()
        .describe(
          'The session ID you got from the [startChat](./start-chat) response.'
        ),
    })
  )
  .output(startChatResponseSchema)
  .query(async ({ input: { sessionId } }) => resumeSessionFn({ sessionId }))
