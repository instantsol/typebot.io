import { FetcherDefinition, AuthDefinition } from '@typebot.io/forge'

type Journey = {
  id: number | string
  name: string
}

export const fetchJourneys: FetcherDefinition<AuthDefinition, any> = {
  id: 'fetchJourneys',
  dependencies: ['baseUrl', 'kwikToken'],
  fetch: async ({ credentials, options }) => {
    const { baseUrl, kwikToken } = credentials || {}

    if (! baseUrl || ! kwikToken)
      return []

    const apiUrl = `${baseUrl}/api/api/public/v1/journeys/`
    const apiResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Token ${kwikToken}`,
      },
    })

    if (apiResponse.status < 300 && apiResponse.status >= 200) {
      const data: Journey[] = await apiResponse.json()
      return data.map((item: Journey) => ({
        label: item.name,
        value: String(item.id),
      }))
    } else
      console.log(`${apiUrl} ERROR:`, apiResponse.status, apiResponse.statusText)

    return []
  },
}
