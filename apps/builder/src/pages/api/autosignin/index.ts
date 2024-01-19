import NextAuthApiAutomaticHandler from './subauth'
import { NextApiRequest, NextApiResponse } from 'next'
import { getAuthOptions } from '../auth/[...nextauth]'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('inicio')
  let restricted: 'rate-limited' | undefined
  console.log('chave: ', req.headers.customkey)
  const ret = await NextAuthApiAutomaticHandler(
    req,
    res,
    getAuthOptions({ restricted })
  )
  return ret
}

export default handler
