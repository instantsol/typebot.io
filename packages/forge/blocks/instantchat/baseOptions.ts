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

export const baseOptions = option.object({
  botAccountcode: option.string.layout({
    label: 'Conta',
    placeholder: '123456',
    defaultValue: 'hmpft',
    accordion: 'Caralhas ',
  }),
})
