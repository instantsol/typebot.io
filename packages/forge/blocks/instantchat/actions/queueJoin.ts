import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { defaultInstantchatOptions } from '../constants'

export const queueJoin = createAction({
  name: 'Queue join',
  options: option.object({
    queue: option.string.layout({
      label: 'Queue ID',
      moreInfoTooltip:
        'Informe o código da fila ou escolha a variável que contém essa informação.',
    }),
    responseMapping: option
      .saveResponseArray(['Message'] as const)
      .layout({
        accordion: 'Save response',
    }),
  }),
  getSetVariableIds: ({ responseMapping }) =>
    responseMapping?.map((r) => r.variableId).filter(isDefined) ?? [],
  run: {
    server: async ({ options: { queue, responseMapping }, variables, credentials }) => {
      const id_chatbot = variables.list().find((v) => v.name === 'id_chatbot')?.value
      const id_cliente = variables.list().find((v) => v.name === 'id_cliente')?.value
      const url = `${credentials.baseUrl}/queue_join?queue=${queue}&page_id=${id_chatbot}&sender_id=${id_cliente}`
      await fetch(url, { method: 'POST', })
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
                    continueFlow('Chat encerrado pelo operador');
                })
              `,
            }
          },
        },
        parseInitFunction: ({ options, variables }) => {
          const hash = variables.list().find((v) => v.name === 'id_atendimento')?.value
          const url = `${defaultInstantchatOptions.baseBuilderChatUrl}/${hash}/`
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
})
