import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'

export const queueJoin = createAction({
  name: 'Queue join',
  options: option.object({
    queue: option.string.layout({
      label: 'Queue ID',
      moreInfoTooltip:
        'Informe o código da fila ou escolha a variável que contém essa informação.',
    }),
    // responseMapping: option.saveResponseArray(['Message'] as const).layout({
    //   accordion: 'Save response',
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
      options: { queue, responseMapping },
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
      const url = `${baseUrl}/ivci/webhook/queue_join?queue=${queue}&page_id=${id_chatbot}&sender_id=${id_cliente}`
      console.log('DELETEME: QueueJoin URL ', url)
      const response = await fetch(url, { method: 'POST' })
      console.log('DELETEME: Reponse queuejoin ', response.status)
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
        console.log('DELETEME: Got queueJoin result ', res)
        // variables.set(responseMapping, res)
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
          console.log(
            'DELETEME: ParseInitiFunction queueJoin',
            options,
            variables,
            credentials
          )

          const hash = variables
            .list()
            .find((v) => v.name === 'id_atendimento')?.value
          const url = `${baseUrl}/builder_chat/${hash}/`
          console.log('DELETEME: Load URL ', url)
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
