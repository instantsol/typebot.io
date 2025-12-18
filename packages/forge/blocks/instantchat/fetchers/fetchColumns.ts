import { FetcherDefinition, AuthDefinition } from '@typebot.io/forge'

type Column = {
  id: number | string
  title: string
}

export const fetchColumns: FetcherDefinition<AuthDefinition, any> = {
  id: 'fetchColumns',
  dependencies: ["journey"],
  fetch: async ({ credentials, options }) => {
    const { baseUrl, kwikToken } = credentials || {}
    const journey = options?.journey
    
    if (! baseUrl || ! kwikToken || ! journey)
      return []

    const apiUrl = `${baseUrl}/api/api/public/v1/journeys/${journey}/columns/`
    const apiResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Token ${kwikToken}`,
      },
    })

    if (apiResponse.status < 300 && apiResponse.status >= 200) {
      const data: Column[] = await apiResponse.json()
      return data.map((item: Column) => ({
        label: item.title,
        value: String(item.id),
      }))
    } else
      console.log(`${apiUrl} ERROR:`, apiResponse.status, apiResponse.statusText)

    return []
  },
}
