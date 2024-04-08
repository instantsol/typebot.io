import { createBlock } from '@typebot.io/forge'
import { InstantchatLogo } from './logo'
import { auth } from './auth'
import { queueJoin } from './actions/queueJoin'
import { checkTime } from './actions/checkTime'
import { cortex } from './actions/cortex'
import { chat } from './actions/chat'
import { wppNotify } from './actions/wppNotify'

export const instantchat = createBlock({
  id: 'instantchat' as const,
  name: 'InstantAIO',
  tags: [],
  LightLogo: InstantchatLogo,
  auth,
  actions: [queueJoin, checkTime, cortex, chat, wppNotify],
})
