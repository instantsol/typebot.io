import { createAction, option } from '@typebot.io/forge'
import { auth } from '../auth'

// Deprecated: 'Queue join' was renamed to 'Fila'
export const deprecatedQueueJoin = createAction({
  auth,
  name: 'Queue join' as const,
  options: option.object({}),
  run: {
    server: async () => {},
  },
})

// Deprecated: 'Check time' was renamed to 'Horário'
export const deprecatedCheckTime = createAction({
  auth,
  name: 'Check time' as const,
  options: option.object({}),
  run: {
    server: async () => {},
  },
})

// Deprecated: 'Oportunidade' was removed
export const deprecatedOportunidade = createAction({
  auth,
  name: 'Oportunidade' as const,
  options: option.object({}),
  run: {
    server: async () => {},
  },
})
