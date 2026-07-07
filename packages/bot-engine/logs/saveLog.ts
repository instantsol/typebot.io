import prisma from '@typebot.io/lib/prisma'
import { formatLogDetails } from './helpers/formatLogDetails'

const notifyTypebotErrorLog = async (log: {
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

  if (status === 'error') {
    try {
      const parsed = log.details ? JSON.parse(log.details) : null
      if (parsed?.response?.statusCode === 404) return log
    } catch {}
    notifyTypebotErrorLog(log).catch(() => {})
  }

  return log
}
