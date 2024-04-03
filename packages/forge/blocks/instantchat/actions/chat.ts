import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { baseOptions } from '../baseOptions'

export const chat = createAction({
  name: 'Atendimento',
  baseOptions,
  options: option.object({
    uniqueId: option.string.layout({
      label: 'Unique ID',
      moreInfoTooltip:
        'Informe o protocolo do atendimento do qual deseja informações.',
    }),
    responseMapping: option.saveResponseArray(['Identificador do Cliente', 'Data e Hora', 'Unique ID', 'Plataforma', 'Dado Adicional 1 (chave)', 'Dado Adicional 1 (valor)', 'Dado Adicional 2 (chave)', 'Dado Adicional 2 (valor)']).layout({
      accordion: 'Salvar dados',
    }),
  }),
  getSetVariableIds: ({ responseMapping }) =>
    responseMapping ? [responseMapping] : [],
  run: {
    server: async ({
      options: { uniqueId, responseMapping },
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
      const url = `${baseUrl}/ivci/webhook/get_chat?unique_id=${uniqueId}&page_id=${id_chatbot}&sender_id=${id_cliente}`
      const response = await fetch(url, { method: 'POST' })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
        responseMapping.forEach((r) => {
          if (!r.item || r.item === 'Identificador do Cliente')
            variables.set(r.variableId, res.Chat?.nick)
          else if (r.item === 'Data e Hora')
            variables.set(r.variableId, res.Chat?.time)
          else if (r.item === 'Dado Adicional 1 (chave)')
            variables.set(r.variableId, res.Chat?.custom_field2_title)
          else if (r.item === 'Dado Adicional 1 (valor)')
            variables.set(r.variableId, res.Chat?.custom_field2_value)
          else if (r.item === 'Dado Adicional 2 (chave)')
            variables.set(r.variableId, res.Chat?.custom_field3_title)
          else if (r.item === 'Dado Adicional 2 (valor)')
            variables.set(r.variableId, res.Chat?.custom_field3_value)
          else if (r.item === 'Unique ID')
            variables.set(r.variableId, res.Chat?.uniqueid)
          else if (r.item === 'Plataforma')
            variables.set(r.variableId, res.Chat?.platform)
        })
      }
    }
  }
})
