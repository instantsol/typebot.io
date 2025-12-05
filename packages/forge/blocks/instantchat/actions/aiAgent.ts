import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { baseOptions } from '../baseOptions'
import { fetchAiAgents } from '../fetchers/fetchAiAgents'
import { auth } from '../auth'

export const aiAgent = createAction({
  name: 'Agente de IA',
  baseOptions,
  options: option.object({
    aiAgent: option.string.layout({
      label: 'Agente de IA',
      fetcher: 'fetchAiAgents'
    }),
    startMessage: option.string.layout({
      label: 'Mensagem Inicial',
      withVariableButton: true,
      defaultValue: "Se apresente, cumprimente e ofereça assitência."
    }),
  }),
  run: {
    server: async ({
      options: { aiAgent, startMessage },
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
      const message = startMessage ? startMessage : "Se apresente, cumprimente e ofereça assitência."
      const url = `${baseUrl}/ivci/webhook/ai_agent_join?agent=${aiAgent}&page_id=${id_chatbot}&sender_id=${id_cliente}`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message
        })
      })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
      } else {
        console.error(
          `Error calling AI agent join [${aiAgent}] -> ${response.status}: ${response.statusText}`
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
  fetchers: [fetchAiAgents],
})
