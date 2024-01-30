import { option, AuthDefinition } from '@typebot.io/forge'
import { baseAuthOptions } from './baseOptions'

export const auth = {
  type: 'encryptedCredentials',
  name: 'InstantChat account',
  schema: baseAuthOptions,
} satisfies AuthDefinition
