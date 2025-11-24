import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { baseOptions } from '../baseOptions'
import { fetchTags } from '../fetchers/fetchTags'
import { auth } from '../auth'

export const tag = createAction({
  name: 'Etiquetar',
  baseOptions,
  options: option.object({
    tag: option.string.layout({
      label: 'Etiqueta',
      fetcher: 'fetchTags'
    }),
  }),
  run: {
    server: async ({
      options: { tag },
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
      const url = `${baseUrl}/ivci/webhook/tag_chat?tag=${tag}&page_id=${id_chatbot}&sender_id=${id_cliente}`
      const response = await fetch(url, { method: 'POST' })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
      } else {
        console.error(
          `Error calling tag chat [${tag}] -> ${response.status}: ${response.statusText}`
        )
      }
    },
    web: {
      displayEmbedBubble: {
        parseUrl: ({}) => '',
        waitForEvent: {
          parseFunction: () => {
            return {
              args: {},
              content: ``,
            }
          },
        },
        parseInitFunction: ({ options, variables, credentials }) => {
          return {
            args: {},
            content: ``,
          }
        },
      },
    },
  },
  fetchers: [fetchTags],
})
