import { FetcherDefinition, AuthDefinition } from '@typebot.io/forge'

type group = {
  id: number | string
  name: string
}

export const fetchGroups: FetcherDefinition<AuthDefinition, any> = {
  id: 'fetchGroups',
  dependencies: ['search', 'group_id'],
  fetch: async ({ credentials, options }) => {
    const { baseUrl, kwikToken } = credentials || {}
    const { search, group_id, group } = options || {}

    const apiUrl = `${baseUrl}/api/api/public/v1/groups/?search=${search || ''}&group=${group_id || 0}`
    const apiResponse = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Token ${kwikToken}`,
      },
    })

    if (apiResponse.status < 300 && apiResponse.status >= 200) {
      const data: group[] = await apiResponse.json()
      return data.map((item: group) => ({
        label: item.name,
        value: String(item.id),
      }))
    } else
      console.log(`${apiUrl} ERROR:`, apiResponse.status, apiResponse.statusText)

    return []
  },
}
