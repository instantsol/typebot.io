import { createBlock } from '@typebot.io/forge'
import { InstantchatLogo } from './logo'
import { auth } from './auth'
// import { queueJoin } from './actions/queueJoin'
import { checkTime } from './actions/checkTime'

export const instantchat = createBlock({
  id: 'instantchat' as const,
  name: 'InstantChat',
  tags: [],
  LightLogo: InstantchatLogo,
  auth,
  // actions: [queueJoin, checkTime],
  actions: [checkTime],
})
