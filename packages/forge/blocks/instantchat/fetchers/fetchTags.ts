import { FetcherDefinition, AuthDefinition } from '@typebot.io/forge'

type tag = {
  id: number | string
  name: string
}

export const fetchTags: FetcherDefinition<AuthDefinition, any> = {
  id: 'fetchTags',
  dependencies: ['baseUrl', 'kwikToken'],
  fetch: async ({ credentials, options }) => {
    const { baseUrl, kwikToken } = credentials || {}
    const apiUrl = `${baseUrl}/api/api/public/v1/tags/`
    const apiResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Token ${kwikToken}`,
      },
    })

    if (apiResponse.status < 300 && apiResponse.status >= 200) {
      const data: tag[] = await apiResponse.json()
      return data.map((item: tag) => ({
        label: item.name,
        value: String(item.id),
      }))
    } else
      console.log(`${apiUrl} ERROR:`, apiResponse.status, apiResponse.statusText)

    return []
  },
}
