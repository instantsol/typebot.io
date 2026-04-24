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
      fetcher: 'fetchAiAgents',
    }),
    startMessage: option.string.layout({
      label: 'Mensagem Inicial',
      withVariableButton: true,
      defaultValue: 'Se apresente, cumprimente e ofereça assitência.',
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
      const message = startMessage
        ? startMessage
        : 'Se apresente, cumprimente e ofereça assitência.'
      const url = `${baseUrl}/ivci/webhook/ai_agent_join?agent=${aiAgent}&page_id=${id_chatbot}&sender_id=${id_cliente}`

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
        }),
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
          getSaveVariableId: () => undefined,
          parseFunction: () => {
            return {
              args: {},
              content: `
                function showNotification() {
                  function createNotification() {
                    const notification = new Notification("Nova mensagem!", {
                      'body': "Você recebeu uma nova mensagem."
                    });
                  }

                  if (!("Notification" in window)) {
                      console.error("This browser do not suport notifications.");
                      return;
                  }

                  if (Notification.permission !== 'granted') {
                      console.log("solicitando permissão")
                      Notification.requestPermission().then((permission) => {
                          if (permission === 'granted') {
                            createNotification();
                          }
                      });
                  } else {
                      createNotification();
                  }
                }

                function onMessage(event) {
                  if (event?.data?.kwikEvent === 'close-chat') {
                    continueFlow('Chat encerrado pelo operador');
                    window.removeEventListener('message', onMessage);
                  }

                  if (event?.data?.webchatEvent === 'show-notification') {
                    showNotification();
                  }
                }

                window.addEventListener('message', onMessage);
              `,
            }
          },
        },
        parseInitFunction: ({ options, variables, credentials }) => {
          const { baseUrl } = credentials
          const hash = variables
            .list()
            .find((v) => v.name === 'is_contactid')?.value
          const url = `${baseUrl}/builder_chat/${hash}/`
          return {
            args: {},
            content: `
              typebotElement.style.overflow = 'hidden';
              const iframe = document.createElement('iframe');
              iframe.src = '${url}';
              iframe.style.height = '500px';
              iframe.style.width = '100%';
              iframe.allow='microphone'
              typebotElement.appendChild(iframe); 
            `,
          }
        },
      },
    },
  },
  fetchers: [fetchAiAgents],
})
