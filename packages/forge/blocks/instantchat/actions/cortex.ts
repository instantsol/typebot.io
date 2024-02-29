import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { baseOptions } from '../baseOptions'

export const cortex = createAction({
  name: 'Cortex',
  baseOptions,
  options: option.object({
    knowledgeBase: option.string.layout({
      label: 'Base de Conhecimento',
      fetcher: 'fetchKBs',
    }),
    cortexUser: option.string.layout({
      label: 'Usuário Cortex',
      fetcher: 'fetchCortexUsers',
    }),
    initialMessage: option.string.layout({
      label: 'MensagemInicial',
      defaultValue:
        'Me diga o que você deseja. A qualquer momento, para sair digite #fim, ou #atendimento para ser transferido para um humano.',
    }),
    endCmd: option.string.layout({
      label: 'Comando de fim',
      defaultValue: '#fim',
    }),
    agentCmd: option.string.layout({
      label: 'Comando de atendimento',
      defaultValue: '#atendimento',
    }),
    retries: option.number.layout({
      label: 'Tentativas',
      defaultValue: 3,
    }),

    responseMapping: option.string.layout({
      label: 'Salvar resultado',
      inputType: 'variableDropdown',
    }),
  }),
  getSetVariableIds: ({ responseMapping }) =>
    responseMapping ? [responseMapping] : [],
  run: {
    server: async ({
      credentials,
      options: {
        knowledgeBase,
        cortexUser,
        initialMessage,
        endCmd,
        agentCmd,
        retries,
      },
      variables,
    }) => {
      let { cortexToken, baseUrl } = credentials
      console.log('DELETEME: Cortex server run !')

      const id_chatbot = variables
        .list()
        .find((v) => v.name === 'id_chatbot')?.value

      const id_cliente = variables
        .list()
        .find((v) => v.name === 'id_cliente')?.value

      const accountcode = variables
        .list()
        .find((v) => v.name === 'accountcode')?.value

      let result = false

      if (
        knowledgeBase &&
        baseUrl &&
        cortexToken &&
        id_chatbot &&
        id_cliente &&
        initialMessage
      ) {
        const params = new URLSearchParams({
          page_id: id_chatbot.toString(),
          user_id: id_cliente.toString(),
          knowledge_base: knowledgeBase.toString(),
          // username: cortexUser.email,
          initial_message: initialMessage.toString(),
        })
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

        if (baseUrl.endsWith('/')) {
          baseUrl = baseUrl.slice(0, -1)
        }
        const url = `${baseUrl}/ivci/webhook/cortex?${params.toString()}`
        console.log('DELETEME: Cortex URL ', url)

        const response = await fetch(url, { method: 'POST' })
        if (response.status < 300 && response.status >= 200) {
          const res = await response.json()
          result = res.Checktime
          console.log('DELETEME: Got cortex result ', res)
          // responseMapping?.forEach((r) => {
          //   if (!r.variableId) return
          //   if (!r.item || r.item === 'Resultado') {
          //     variables.set(r.variableId, result)
          //   }
          // })
        } else {
          console.log('DELETEME: Got cortex response ', response.status)
          console.log('DELETEME: Got cortex response ', response.statusText)
          try {
            const res = await response.json()
            console.log('DELETEME: Got cortex response ', res.detail)
          } catch (e) {}
        }
      } else {
        console.log('DELETEME: Missing stuffs')
        console.log(
          `knowledgeBase: ${knowledgeBase} baseUrl: ${baseUrl} cortexToken: ${cortexToken}  id_chatbot: ${id_chatbot} id_cliente: ${id_cliente} accountcode: ${accountcode}`
        )
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
  fetchers: [
    {
      id: 'fetchKBs',
      dependencies: ['cortexToken', 'cortexUrl', 'cortexAccountID'],
      fetch: async ({ credentials, options }) => {
        let { cortexAccountID, cortexToken, cortexUrl } = credentials
        if (cortexUrl && cortexToken && cortexAccountID) {
          const queryParams = {
            limit: '20',
            page: '1',
            accountcodeId: cortexAccountID,
            activeVersions: 'true',
            disabledKbs: 'false',
            orderBy: 'name',
          }

          // Convert queryParams to URL search params
          const urlParams = new URLSearchParams(queryParams).toString()

          if (cortexUrl.endsWith('/')) {
            cortexUrl = cortexUrl.slice(0, -1)
          }

          const response = await fetch(
            `${cortexUrl}/ai/knowledge_bases/?${urlParams}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${cortexToken}`,
              },
            }
          )
          if (response.status < 300 && response.status >= 200) {
            const res = await response.json()
            console.log(res.KnowledgeBases)
            const ret = res.KnowledgeBases.map((kb: any) => {
              return {
                label: kb.parsed_name,
                value: kb.id,
              }
            })
            console.log(ret)
            return ret
          }
        }
        return []
      },
    },
    {
      id: 'fetchCortexUsers',
      dependencies: ['cortexToken', 'cortexUrl', 'cortexAccountID'],
      fetch: async ({ credentials, options }) => {
        let { cortexAccountID, cortexToken, cortexUrl } = credentials
        if (cortexUrl && cortexToken && cortexAccountID) {
          const queryParams = {
            limit: '20',
            page: '1',
            accountcodeId: cortexAccountID,
          }

          const urlParams = new URLSearchParams(queryParams).toString()
          if (cortexUrl.endsWith('/')) {
            cortexUrl = cortexUrl.slice(0, -1)
          }

          const response = await fetch(`${cortexUrl}/users/?${urlParams}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${cortexToken}`,
            },
          })

          if (response.status < 300 && response.status >= 200) {
            const res = await response.json()
            const ret = res.Users.map((user: any) => {
              return {
                label: user.name,
                value: JSON.stringify({
                  id: user.id,
                  email: user.email,
                }),
              }
            })
            return ret
          }
        }
        return []
      },
    },
  ],
})
