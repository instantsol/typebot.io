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
    responseMapping: option.saveResponseArray(['Identificador do Cliente', 'Data e Hora', 'Adicional Chave1', 'Adicional Valor1', 'Adicionar Chave2', 'Adicional Valor2', 'Unique ID', 'Plataforma']).layout({
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
          else if (r.item === 'Adicional Chave1')
            variables.set(r.variableId, res.Chat?.custom_field2_title)
          else if (r.item === 'Adicional Valor1')
            variables.set(r.variableId, res.Chat?.custom_field2_value)
          else if (r.item === 'Adicional Chave2')
            variables.set(r.variableId, res.Chat?.custom_field3_title)
          else if (r.item === 'Adicional Valor2')
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
