import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { baseOptions } from '../baseOptions'

export const queueJoin = createAction({
  name: 'Queue join',
  baseOptions,
  options: option.object({
    queue: option.string.layout({
      label: 'Queue ID',
      fetcher: 'fetchQueues',
      moreInfoTooltip:
        'Informe o código da fila ou escolha a variável que contém essa informação.',
    }),
    // responseMapping: option.saveResponseArray(['Message'] as const).layout({
    //   accordion: 'Save response',
    queueVar: option.string.layout({
      accordion: 'Avançado',
      label: 'Queue Var',
      isRequired: false,
      withVariableButton: true,
    }),
    // }),
    responseMapping: option.string.layout({
      label: 'Save response',
      inputType: 'variableDropdown',
    }),
  }),
  getSetVariableIds: ({ responseMapping }) =>
    responseMapping ? [responseMapping] : [],
  // responseMapping?.map((r) => r.variableId).filter(isDefined) ?? [],
  run: {
    server: async ({
      options: { queue, queueVar, responseMapping },
      variables,
      credentials,
    }) => {
      const { baseUrl } = credentials
      const id_chatbot = variables
        .list()
        .find((v) => v.name === 'id_chatbot')?.value
      const id_cliente = variables
        .list()
        .find((v) => v.name === 'id_cliente')?.value
      const queueId = queueVar ? queueVar : queue
      console.log('Going to call queue ', queueId)
      const url = `${baseUrl}/ivci/webhook/queue_join?queue=${queueId}&page_id=${id_chatbot}&sender_id=${id_cliente}`
      const response = await fetch(url, { method: 'POST' })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
      }
    },
    web: {
      displayEmbedBubble: {
        waitForEvent: {
          getSaveVariableId: ({ responseMapping }) => responseMapping,
          parseFunction: () => {
            return {
              args: {},
              content: `
              window.addEventListener('message', function (event) {
                if (event && 'kwikEvent' in event.data && event.data.kwikEvent === 'close-chat'){
                  continueFlow('Chat encerrado pelo operador');
                }
            })
              `,
            }
          },
        },
        parseInitFunction: ({ options, variables, credentials }) => {
          const { baseUrl } = credentials
          const hash = variables
            .list()
            .find((v) => v.name === 'id_atendimento')?.value
          const url = `${baseUrl}/builder_chat/${hash}/`
          return {
            args: {},
            content: `
              typebotElement.style.overflow = 'hidden';
              const iframe = document.createElement('iframe');
              iframe.src = '${url}';
              iframe.style.height = '500px';
              iframe.style.width = '100%';
              typebotElement.appendChild(iframe); 
            `,
          }
        },
      },
    },
  },
  fetchers: [
    {
      id: 'fetchQueues',
      dependencies: ['baseUrl', 'accountcode', 'wsKey'],
      fetch: async ({ credentials, options }) => {
        const { baseUrl, accountcode, wsKey } = credentials
        if (baseUrl && accountcode && wsKey) {
          const body = {
            QueueList: {
              key: wsKey,
              accountcode: accountcode,
              media: 'c',
            },
          }
          const response = await fetch(`${baseUrl}/ivws/instantrest`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          })
          if (response.status < 300 && response.status >= 200) {
            const res = await response.json()
            if (res.QueueListResult0 == 0) {
              return res.QueueListResult2
            }
          }
        }
        return []
      },
    },
  ],
})
