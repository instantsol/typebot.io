import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { baseOptions } from '../baseOptions'

export const agent = createAction({
  name: 'Operador',
  baseOptions,
  options: option.object({
    responseMapping: option.saveResponseArray(['Nome', 'Fila', 'Email']).layout({
      accordion: 'Salvar dados',
    }),
  }),
  getSetVariableIds: ({ responseMapping }) =>
    responseMapping ? [responseMapping] : [],
  run: {
    server: async ({
      options: { responseMapping },
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
      const url = `${baseUrl}/ivci/webhook/get_agent?page_id=${id_chatbot}&sender_id=${id_cliente}`
      const response = await fetch(url, { method: 'POST' })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
        responseMapping.forEach((r) => {
          if (!r.item || r.item === 'Nome')
            variables.set(r.variableId, res.Agent?.name)
          else if (r.item === 'Fila')
            variables.set(r.variableId, res.Agent?.queue)
          else if (r.item === 'Email')
            variables.set(r.variableId, res.Agent?.email)
        })
      }
    }
  }
})
