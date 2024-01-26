import { option } from '@typebot.io/forge'
import { baseAuthOptions } from './baseOptions.ts'

export const auth = {
  type: 'encryptedCredentials',
  name: 'InstantChat account',
  schema: baseAuthOptions,
}
