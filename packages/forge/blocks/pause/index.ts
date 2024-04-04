import { createBlock } from '@typebot.io/forge'
import { PauseLogo } from './logo'
import { pauseAction } from './actions/pause'

export const pause = createBlock({
  id: 'pause',
  name: 'Pause',
  tags: [],
  LightLogo: PauseLogo,
  actions: [pauseAction],
})
