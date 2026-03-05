import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { baseOptions } from '../baseOptions'
import { fetchGroups } from '../fetchers/fetchGroups'
import { auth } from '../auth'

export const groups = createAction({
  name: 'Segmentar',
  baseOptions,
  options: option.object({
  search: option.string.layout({
    label: 'Busca',
    isHidden: true
  }),
    group: option.string.layout({
      label: 'Segmento',
      fetcher: 'fetchGroups',
    }),
  }),
  run: {
    server: async ({
      options: { group },
      variables,
      credentials,
    }) => {
      const { baseUrl } = credentials
      const id_chatbot = variables
        .list()
        .find((v) => v.name === 'is_chatbotid')?.value
      const id_cliente = variables
        .list()
        .find((v) => v.name === 'is_clientid')?.value
      const url = `${baseUrl}/ivci/webhook/group_chat?group=${group}&page_id=${id_chatbot}&sender_id=${id_cliente}`
      const response = await fetch(url, { method: 'POST' })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
      } else {
        console.error(
          `Error calling group chat [${group}] -> ${response.status}: ${response.statusText}`
        )
      }
    },
  },
  fetchers: [fetchGroups],
})
