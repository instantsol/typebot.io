import { option, AuthDefinition } from '@typebot.io/forge'
import { baseAuthOptions } from './baseOptions'

export const auth = {
  type: 'encryptedCredentials',
  name: 'InstantAIO account',
  schema: baseAuthOptions,
} satisfies AuthDefinition
