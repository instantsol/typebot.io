import { createHash } from 'crypto'
import prisma from '@typebot.io/lib/prisma'
import type { Log, Prisma } from '@typebot.io/prisma'
import { formatLogDetails } from './helpers/formatLogDetails'

export const ERROR_LOOP_LIMIT_PER_MINUTE = 50
export const ERROR_LOOP_WINDOW_MS = 60 * 1000
export const ERROR_LOOP_FORCED_STOP_MESSAGE =
  'Bot stopped automatically: error loop detected'

const ERROR_LOOP_FORCED_STOP_ID_PREFIX = 'error_loop_stop_'

type EnforceErrorLoopLimitResponse =
  | { status: 'ok' }
  | { status: 'alreadyStopped'; stopLog: Log }
  | { status: 'stopped'; stopLog: Log }

type Props = {
  resultId: string | undefined
  sessionId?: string
}

export const enforceErrorLoopLimit = async ({
  resultId,
  sessionId,
}: Props): Promise<EnforceErrorLoopLimitResponse> => {
  if (!resultId || resultId === 'undefined') return { status: 'ok' }

  const existingStopLog = await findForcedStopLog(resultId)
  if (existingStopLog) {
    await stopResultAndDeleteSessions({ resultId, sessionId })
    return { status: 'alreadyStopped', stopLog: existingStopLog }
  }

  const errorCount = await prisma.log.count({
    where: {
      resultId,
      status: 'error',
      createdAt: {
        gte: new Date(Date.now() - ERROR_LOOP_WINDOW_MS),
      },
    },
  })

  if (errorCount <= ERROR_LOOP_LIMIT_PER_MINUTE) return { status: 'ok' }

  const stopLogResult = await createForcedStopLog({ resultId, errorCount })
  await stopResultAndDeleteSessions({ resultId, sessionId })

  return stopLogResult
    ? {
        status: stopLogResult.wasCreated ? 'stopped' : 'alreadyStopped',
        stopLog: stopLogResult.log,
      }
    : { status: 'ok' }
}

export const isResultStoppedByErrorLoop = async (resultId: string) =>
  Boolean(await findForcedStopLog(resultId))

const findForcedStopLog = (resultId: string) =>
  prisma.log.findUnique({
    where: {
      id: getForcedStopLogId(resultId),
    },
  })

const createForcedStopLog = async ({
  resultId,
  errorCount,
}: {
  resultId: string
  errorCount: number
}): Promise<{ log: Log; wasCreated: boolean } | null> => {
  const id = getForcedStopLogId(resultId)
  try {
    return {
      log: await prisma.log.create({
        data: {
          id,
          resultId,
          status: 'error',
          description: ERROR_LOOP_FORCED_STOP_MESSAGE,
          details: formatLogDetails({
            reason: `Forced stop by error loop. More than ${ERROR_LOOP_LIMIT_PER_MINUTE} error logs were recorded in 60 seconds for the same resultId.`,
            resultId,
            errorCountLastMinute: errorCount,
            limitPerMinute: ERROR_LOOP_LIMIT_PER_MINUTE,
            windowSeconds: ERROR_LOOP_WINDOW_MS / 1000,
          }),
        },
      }),
      wasCreated: true,
    }
  } catch (error) {
    if ((error as Prisma.PrismaClientKnownRequestError).code === 'P2002') {
      const log = await findForcedStopLog(resultId)
      return log ? { log, wasCreated: false } : null
    }
    throw error
  }
}

const stopResultAndDeleteSessions = async ({
  resultId,
  sessionId,
}: {
  resultId: string
  sessionId?: string
}) => {
  const result = await prisma.result.findUnique({
    where: { id: resultId },
    select: { lastChatSessionId: true },
  })

  const sessionIds = Array.from(
    new Set([sessionId, result?.lastChatSessionId].filter(Boolean))
  ) as string[]

  await prisma.$transaction([
    prisma.result.updateMany({
      where: { id: resultId },
      data: { isCompleted: true },
    }),
    ...sessionIds.map((id) =>
      prisma.chatSession.deleteMany({
        where: { id },
      })
    ),
  ])
}

const getForcedStopLogId = (resultId: string) =>
  `${ERROR_LOOP_FORCED_STOP_ID_PREFIX}${createHash('sha256')
    .update(resultId)
    .digest('hex')
    .slice(0, 32)}`
