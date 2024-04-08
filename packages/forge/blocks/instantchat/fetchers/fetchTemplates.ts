import { FetcherDefinition, AuthDefinition } from '@typebot.io/forge'

export const fetchTemplates: FetcherDefinition<AuthDefinition, any> = {
  id: 'fetchTemplates',
  dependencies: ['baseUrl', 'accountcode', 'wsKey'],
  fetch: async ({ credentials, options }) => {
    const { baseUrl, accountcode, wsKey } = credentials
    return []
  },
}
