import { FetcherDefinition, AuthDefinition } from '@typebot.io/forge'

type Enterprise = {
  id: number | string
  name: string
}

export const fetchEnterprises: FetcherDefinition<AuthDefinition, any> = {
  id: 'fetchEnterprises',
  dependencies: [],
  fetch: async ({ credentials }) => {
    const { baseUrl, kwikToken } = credentials || {}
    if (!baseUrl || !kwikToken) return []

    const apiUrl = `${baseUrl}/api/api/public/v1/enterprises/`
    try {
      const apiResponse = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Token ${kwikToken}`,
        },
      })

      if (apiResponse.status < 300 && apiResponse.status >= 200) {
        const data: Enterprise[] = await apiResponse.json()
        return data.map((item: Enterprise) => ({
          label: item.name,
          value: String(item.id),
        }))
      } else {
        console.log(`${apiUrl} ERROR:`, apiResponse.status, apiResponse.statusText)
      }
    } catch (e) {
      console.log('fetchEnterprises error', e)
    }

    return []
  },
}
