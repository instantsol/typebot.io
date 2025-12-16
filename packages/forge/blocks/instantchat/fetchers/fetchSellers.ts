import { FetcherDefinition, AuthDefinition } from '@typebot.io/forge'

type Seller = {
  id: number | string
  name: string
}

export const fetchSellers: FetcherDefinition<AuthDefinition, any> = {
  id: 'fetchSellers',
  dependencies: ["journey", "column"],
  fetch: async ({ credentials, options }) => {
    const { baseUrl, kwikToken } = credentials || {}
    const journey = options?.journey
    const column = options?.column
    
    if (! baseUrl || ! kwikToken || ! journey || ! column)
      return []

    const apiUrl = `${baseUrl}/api/api/public/v1/journeys/${journey}/users/`
    const apiResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Token ${kwikToken}`,
      },
    })

    if (apiResponse.status < 300 && apiResponse.status >= 200) {
      const data: Seller[] = await apiResponse.json()
      return data.map((item: Seller) => ({
        label: item.name,
        value: String(item.id),
      }))
    } else
      console.log(`${apiUrl} ERROR:`, apiResponse.status, apiResponse.statusText)

    return []
  },
}
