import { option, AuthDefinition } from '@typebot.io/forge'

export const auth = {
  type: 'encryptedCredentials',
  name: 'InstantChat account',
  schema: option.object({
    apiKey: option.string.layout({
      label: 'API key',
      isRequired: true,
      input: 'password',
      helperText: 'You can generate an API key [here](<INSERT_URL>).',
    }),
  }),
} satisfies AuthDefinition
