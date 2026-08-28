import { FetcherDefinition, AuthDefinition } from '@typebot.io/forge'

type EnterpriseUser = {
  id: number | string
  first_name: string
  last_name: string
  username: string
}

export const fetchUsers: FetcherDefinition<AuthDefinition, any> = {
  id: 'fetchUsers',
  dependencies: [],
  fetch: async ({ credentials }) => {
    const { baseUrl, kwikToken } = credentials || {}
    if (!baseUrl || !kwikToken) return []

    const apiUrl = `${baseUrl}/api/api/public/v1/user_emails/`
    try {
      const apiResponse = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Token ${kwikToken}`,
        },
      })

      if (apiResponse.status < 300 && apiResponse.status >= 200) {
        const data: EnterpriseUser[] = await apiResponse.json()
        return data.map((item) => ({
          label: `${item.first_name} ${item.last_name}`.trim() || item.username,
          value: String(item.id),
        }))
      } else {
        console.log(
          `${apiUrl} ERROR:`,
          apiResponse.status,
          apiResponse.statusText
        )
      }
    } catch (e) {
      console.log('fetchUsers error', e)
    }

    return []
  },
}
