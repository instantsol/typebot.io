import { FetcherDefinition, AuthDefinition } from '@typebot.io/forge'

type AiAgent = {
  id: number | string
  name: string
}

export const fetchAiAgents: FetcherDefinition<AuthDefinition, any> = {
  id: 'fetchAiAgents',
  dependencies: ['baseUrl', 'kwikToken'],
  fetch: async ({ credentials, options }) => {
    const { baseUrl, kwikToken } = credentials || {}
    const apiUrl = `${baseUrl}/api/api/public/v1/ai_agents/`
    const apiResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Token ${kwikToken}`,
      },
    })

    if (apiResponse.status < 300 && apiResponse.status >= 200) {
      const data: AiAgent[] = await apiResponse.json()
      return data.map((item: AiAgent) => ({
        label: item.name,
        value: String(item.id),
      }))
    } else
      console.log(`${apiUrl} ERROR:`, apiResponse.status, apiResponse.statusText)

    return []
  },
}
