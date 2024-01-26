import { option } from '@typebot.io/forge'
import { defaultInstantchatOptions } from './constants'

export const baseAuthOptions = option.object({
  baseUrl: option.string.layout({
    accordion: 'Customize provider',
    label: 'Base URL',
    defaultValue: defaultInstantchatOptions.baseKwikUrl,
    withVariableButton: false,
    isRequired: true,
  }),
})
