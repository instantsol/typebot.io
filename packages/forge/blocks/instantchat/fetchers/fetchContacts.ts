import { FetcherDefinition, AuthDefinition } from '@typebot.io/forge'

type Contact = {
  id: number | string
  name: string
}

export const fetchContacts: FetcherDefinition<AuthDefinition, any> = {
  id: 'fetchContacts',
  dependencies: [],
  fetch: async ({ credentials }) => {
    const { baseUrl, kwikToken } = credentials || {}
    if (!baseUrl || !kwikToken) return []

    const apiUrl = `${baseUrl}/api/api/public/v1/contacts/`
    try {
      const apiResponse = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: `Token ${kwikToken}`,
        },
      })

      if (apiResponse.status < 300 && apiResponse.status >= 200) {
        const data: Contact[] = await apiResponse.json()
        return data.map((item: Contact) => ({
          label: item.name,
          value: String(item.id),
        }))
      } else {
        console.log(`${apiUrl} ERROR:`, apiResponse.status, apiResponse.statusText)
      }
    } catch (e) {
      console.log('fetchContacts error', e)
    }

    return []
  },
}
