import { createAction, option } from '@typebot.io/forge'
import { VariableStore } from '@typebot.io/forge'
import { fetchAgents } from '../fetchers/fetchAgents'
import { fetchQueues } from '../fetchers/fetchQueues'

const orderTplParams = function (variables: VariableStore) {
  let params: string[] = []
  variables
    .list()
    .filter((v) => v.name.startsWith('TPL_'))
    .forEach((v) => {
      const [_, idx] = v.name.split('_')
      if (Number.isNaN(Number(idx))) return
      params[Number(idx)] = v.value as string
    })
  console.log('DELETEME: Ordered stuff', params)
  return params.filter((p) => p)
}

export const KWIKAPI_TOKEN = '@kwikapi-token'
export const KWIKAPI_ADMIN_TOKEN = '@kwikapi-admin-token'

export const SESSION = ''
export const getToken = () => sessionStorage.getItem(KWIKAPI_TOKEN)
export const getAdminToken = () => sessionStorage.getItem(KWIKAPI_ADMIN_TOKEN)

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
      fetcher: 'fetchAgents',
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
      const tplVars = orderTplParams(variables)
      console.log('DELETEME: Got tpl vars', tplVars)
      const url = `${baseUrl}/api/api/whatsapp/medianotification/`
      let formData = new FormData()
      // TODO: We need the token
      // const token =
      //   window.location.pathname === '/metrics' ? getAdminToken() : getToken()
      // console.log('DELETEME: Token', token)

      formData.append('body', 'PAR1')
      formData.append('body', 'PAR2')
      if (queue) formData.append('queue_name', queue)
      if (from) formData.append('from', from)
      if (to) formData.append('to', to)
      if (template) formData.append('template', template)
      if (agent) formData.append('agent', agent)

      const response = await fetch(url, { method: 'POST', body: formData })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
        console.log(res)
      }
    },
  },
  fetchers: [fetchQueues, fetchAgents],
})
