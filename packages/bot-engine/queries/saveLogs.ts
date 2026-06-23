import prisma from '@typebot.io/lib/prisma'
import { Log } from '@typebot.io/schemas'
import { saveLog } from '../logs/saveLog'

export const saveLogs = async (logs: Omit<Log, 'id' | 'createdAt'>[]) => {
  const errorLogs = logs.filter((log) => log.status === 'error')
  const otherLogs = logs.filter((log) => log.status !== 'error')

  const [createdOtherLogs, ...createdErrorLogs] = await Promise.all([
    otherLogs.length
      ? prisma.log.createMany({ data: otherLogs })
      : Promise.resolve({ count: 0 }),
    ...errorLogs.map((log) =>
      saveLog({
        resultId: log.resultId,
        status: 'error',
        message: log.description,
        formattedDetails: log.details ?? null,
      })
    ),
  ])

  return {
    count: createdOtherLogs.count + createdErrorLogs.filter(Boolean).length,
  }
}
