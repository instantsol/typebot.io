import { createAction, option } from '@typebot.io/forge'
import { auth } from '../auth'

export const updateContact = createAction({
  auth,
  name: 'Atualizar Contato',
  options: option.object({
    internal_code: option.string.layout({
      label: 'Código Interno (KID)',
    }),
    name: option.string.layout({
      label: 'Nome',
    }),
    telephone: option.string.layout({
      label: 'Telefone',
    }),
    email: option.string.layout({
      label: 'E-mail',
    }),
    enterprise_name: option.string.layout({
      label: 'Empresa',
    }),
    cpf: option.string.layout({
      label: 'CPF',
    }),
    customer_code: option.string.layout({
      label: 'Código',
    }),
    automation_mode: option.boolean.layout({
      label: 'Modo Automação',
      moreInfoTooltip:
        'Não utiliza o canal relativo a este atendimento para decidir nada.',
      defaultValue: false,
    }),
    responseMapping: option
      .saveResponseArray(['Identificador'] as const)
      .layout({
        accordion: 'Salvar resultado',
      }),
  }),
  run: {
    server: async ({
      options: {
        internal_code,
        name,
        telephone,
        email,
        enterprise_name,
        cpf,
        customer_code,
        automation_mode,
        responseMapping,
      },
      variables,
      credentials,
    }) => {
      const { baseUrl } = credentials
      const response = await fetch(`${baseUrl}/ivci/webhook/update_contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          platform: variables.list().find((v) => v.name === 'is_platform')
            ?.value,
          client_id: variables.list().find((v) => v.name === 'is_clientid')
            ?.value,
          accountcode: variables.list().find((v) => v.name === 'is_accountcode')
            ?.value,
          unique_id: variables.list().find((v) => v.name === 'is_uniqueid')
            ?.value,
          internal_code: internal_code,
          name: name,
          telephone: telephone,
          email: email,
          enterprise_name: enterprise_name,
          cpf: cpf,
          customer_code: customer_code,
          automation_mode: automation_mode,
        }),
      })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
        responseMapping?.forEach((r) => {
          if (!r.variableId) return
          variables.set(r.variableId, res.id)
        })
      }
    },
  },
})
