import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { baseOptions } from '../baseOptions'
import { fetchFlows } from '../fetchers/fetchFlows'
import { auth } from '../auth'

export const flows = createAction({
  name: 'Meta Flows',
  baseOptions,
  options: option.object({
    flows: option.string.layout({
      label: 'Meta Flows',
      fetcher: 'fetchFlows'
    }),
    header: option.string.layout({
      label: 'Cabeçalho',
      withVariableButton: true,
      defaultValue: 'Cabeçalho',
    }),
    content: option.string.layout({
      label: 'Conteúdo',
      withVariableButton: true,
      defaultValue: 'Conteúdo',
    }),
    cta: option.string.layout({
      label: 'Texto do Botão',
      withVariableButton: true,
      defaultValue: 'Abrir',
    }),
    api: option.boolean.layout({
      label: 'Gerenciado via API?',
      moreInfoTooltip:
        'Indica se o flows escolhido é gerenciado via API, ou somente navegação.',
      defaultValue: true,
    }),
  }),
  run: {
    server: async ({
      options: { flows, header = "Cabeçalho", content = "Conteúdo", cta = "Abrir", api = true },
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

      const url = `${baseUrl}/ivci/webhook/flows?flows_id=${flows}&page_id=${id_chatbot}&sender_id=${id_cliente}`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ header, content, cta, api }),
      })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
      } else {
        console.error(
          `Error calling flows [${flows}] -> ${response.status}: ${response.statusText}`
        )
      }
    },
    web: {
      displayEmbedBubble: {
        parseUrl: ({}) => '',
        waitForEvent: {
          getSaveVariableId: () => undefined,
          parseFunction: () => {
            return {
              args: {},
              content: `
                
              `,
            }
          },
        },
        parseInitFunction: ({ options, variables, credentials }) => {
          return {
            args: {},
            content: `
              
            `,
          }
        },
      },
    },
  },
  fetchers: [fetchFlows],
})
