import { createAction, option } from '@typebot.io/forge'

export const wppNotify = createAction({
  name: 'WhatsApp Notify',
  options: option.object({
    from: option.string.layout({
      label: 'From',
      isRequired: true,
    }),
    to: option.string.layout({
      label: 'To',
      isRequired: true,
    }),
    queue: option.string.layout({
      label: 'Queue ID',
      fetcher: 'fetchQueues',
      moreInfoTooltip:
        'Informe o código da fila ou escolha a variável que contém essa informação.',
    }),
    template: option.string.layout({
      label: 'Template',
      isRequired: true,
    }),
    agent: option.string.layout({
      label: 'Agent',
      isRequired: true,
    }),
  }),
  run: {
    server: async ({
      options: { from, to, queue, template, agent },
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
      const url = `${baseUrl}/api/api/whatsapp/medianotification/`
      const response = await fetch(url, { method: 'POST' })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
        responseMapping?.forEach((r) => {
          if (!r.variableId) return
          const item = r.item ?? 'Message'
          if (item === 'Message') variables.set(r.variableId, res.Message)
        })
      }
    },
  },
})
