import { FetcherDefinition, AuthDefinition } from '@typebot.io/forge'

type Tag = {
  id: number | string
  name: string
}

export const fetchJourneyTags: FetcherDefinition<AuthDefinition, any> = {
  id: 'fetchJourneyTags',
  dependencies: ["journey", "column"],
  fetch: async ({ credentials, options }) => {
    const { baseUrl, kwikToken } = credentials || {}
    const journey = options?.journey
    const column = options?.column
    
    if (! baseUrl || ! kwikToken || ! journey || ! column)
      return []

    const apiUrl = `${baseUrl}/api/api/public/v1/journeys/${journey}/tags/`
    const apiResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Token ${kwikToken}`,
      },
    })

    if (apiResponse.status < 300 && apiResponse.status >= 200) {
      const data: Tag[] = await apiResponse.json()
      return data.map((item: Tag) => ({
        label: item.name,
        value: String(item.id),
      }))
    } else
      console.log(`${apiUrl} ERROR:`, apiResponse.status, apiResponse.statusText)

    return []
  },
}
