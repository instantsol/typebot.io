import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { baseOptions } from '../baseOptions'

export const flowsResponse = createAction({
  name: 'Retorno Flows',
  baseOptions,
  options: option.object({
    responseMapping: option.saveResponseArray(['Resultado']).layout({
      accordion: 'Salvar resultado',
    }),
  }),
  getSetVariableIds: ({ responseMapping }) =>
    responseMapping?.map((r) => r.variableId).filter(isDefined) ?? [],
  run: {
    server: async ({
      options: { responseMapping },
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

      const url = `${baseUrl}/ivci/webhook/flows?page_id=${id_chatbot}&sender_id=${id_cliente}`
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })

      let result = false
      if (response.status < 300 && response.status >= 200) {
        result = await response.json()
      } else {
        console.error(
          `Error retrieving flows response -> ${response.status}: ${response.statusText}`
        )
      }

      responseMapping?.forEach((r) => {
        if (!r.variableId) return
        if (!r.item || r.item === 'Resultado') {
          variables.set(r.variableId, result)
        }
      })
    },
  },
})
