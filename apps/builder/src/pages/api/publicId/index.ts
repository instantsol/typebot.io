import { NextApiRequest, NextApiResponse } from 'next'
import { checkPermission } from '../autosignin/subauth'
import prisma from '@typebot.io/lib/prisma'

async function TypeBot(key: string) {
  const Bots = await prisma.typebot.findFirst({
    where: {
      publicId: key,
    },
  })
  return Bots
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { ...query } = req.query
  const publicId: string = query?.publicId ? query.publicId.toString() : ''
  try {
    const customkey: string = req.headers.customkey
      ? req.headers.customkey.toString()
      : ''

    if (!customkey || (await checkPermission(customkey)) === false) {
      return res.status(407).json({ botid: null })
    }
  } catch (err) {
    return res.status(407).json({ botid: null })
  }

  const bots = await TypeBot(publicId)
  if (bots) {
    res.status(200).json({ bots: bots.id })
  }
}

export default handler
