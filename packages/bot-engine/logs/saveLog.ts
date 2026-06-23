import prisma from '@typebot.io/lib/prisma'
import { formatLogDetails } from './helpers/formatLogDetails'

const notifyTypebotErrorLog = (log: {
  id: string
  createdAt: Date
  resultId: string
  status: string
  description: string
  details: string | null
}) => {
  fetch('http://ivci:9000/webhook/typebot_error_log', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      logId: log.id,
      createdAt: log.createdAt.toISOString(),
      resultId: log.resultId,
      status: log.status,
      description: log.description,
      details: log.details,
    }),
  }).catch((err) => {
    console.warn('Failed to notify Kwik CI about Typebot error log:', err)
  })
}

type Props = {
  status: 'error' | 'success' | 'info'
  resultId: string | undefined
  message: string
  details?: unknown
  formattedDetails?: string | null
}

export const saveLog = async ({
  status,
  resultId,
  message,
  details,
  formattedDetails,
}: Props) => {
  if (!resultId || resultId === 'undefined') return
  const log = await prisma.log.create({
    data: {
      resultId,
      status,
      description: message,
      details: formattedDetails ?? (formatLogDetails(details) as string | null),
    },
  })

  if (status === 'error') notifyTypebotErrorLog(log)

  return log
}
