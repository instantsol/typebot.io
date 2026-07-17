import prisma from '@typebot.io/lib/prisma'
import { formatLogDetails } from './helpers/formatLogDetails'
import {
  enforceErrorLoopLimit,
  isResultStoppedByErrorLoop,
} from './errorLoopGuard'

export const notifyTypebotErrorLog = async (log: {
  id: string
  createdAt: Date
  resultId: string
  status: string
  description: string
  details: string | null
}) => {
  let typebotId: string | null = null
  let typebotName: string | null = null
  try {
    const result = await prisma.result.findUnique({
      where: { id: log.resultId },
      select: { typebot: { select: { id: true, name: true } } },
    })
    typebotId = result?.typebot?.id ?? null
    typebotName = result?.typebot?.name ?? null
  } catch (err) {
    console.warn('Failed to fetch typebot info for error log:', err)
  }

  fetch('http://ivci:9000/webhook/typebot_error_log', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      logId: log.id,
      createdAt: log.createdAt.toISOString(),
      resultId: log.resultId,
      typebotId,
      typebotName,
      status: log.status,
      description: log.description,
      details: log.details,
    }),
  }).catch((err: unknown) => {
    console.warn('Failed to notify Kwik CI about Typebot error log:', err)
  })
}

type Props = {
  status: 'error' | 'success' | 'info'
  resultId: string | undefined
  sessionId?: string
  message: string
  details?: unknown
  formattedDetails?: string | null
}

export const saveLog = async ({
  status,
  resultId,
  sessionId,
  message,
  details,
  formattedDetails,
}: Props) => {
  if (!resultId || resultId === 'undefined') return
  if (status === 'error' && (await isResultStoppedByErrorLoop(resultId))) {
    await enforceErrorLoopLimit({ resultId, sessionId })
    return
  }

  const log = await prisma.log.create({
    data: {
      resultId,
      status,
      description: message,
      details: formattedDetails ?? (formatLogDetails(details) as string | null),
    },
  })

  if (status === 'error') {
    const shouldSkipNotification = shouldSkipErrorLogNotification(log)
    const enforcement = await enforceErrorLoopLimit({ resultId, sessionId })
    if (enforcement.status === 'stopped') {
      notifyTypebotErrorLog(enforcement.stopLog).catch(() => {})
      return log
    }
    if (enforcement.status === 'alreadyStopped') return log
    if (shouldSkipNotification) return log

    notifyTypebotErrorLog(log).catch(() => {})
  }

  return log
}

const shouldSkipErrorLogNotification = (log: { details: string | null }) => {
  if (!log.details) return false

  try {
    const parsed = JSON.parse(log.details)
    if (parsed?.response?.statusCode === 404) return true
  } catch {}

  return false
}
