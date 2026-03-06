import { createAction, option } from '@typebot.io/forge'
import { auth } from '../auth'

export const getContact = createAction({
  auth,
  name: 'Obter Contato',
  options: option.object({
    responseMapping: option
      .saveResponseArray([
        'Nome',
        'Empresa',
        'Telefone',
        'Email',
        'CNPJ',
        'IdCrm',
        'Aniversário',
        'IdEnterprise',
        'CPF',
      ] as const)
      .layout({
        accordion: 'Salvar resultado',
      }),
  }),
  run: {
    server: async ({
      options: { responseMapping },
      variables,
      credentials,
    }) => {
      const { baseUrl, kwikToken } = credentials
      const id_cliente = variables
        .list()
        .find((v) => v.name === 'is_clientid')?.value

      const platform = variables
        .list()
        .find((v) => v.name === 'is_platform')?.value
      const url = `${baseUrl}/api/api/public/v1/contacts/retrieve/${platform}@@@${id_cliente}/`
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Token ${kwikToken}`,
          'Content-Type': 'application/json',
        },
      })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
        responseMapping?.forEach((r) => {
          if (!r.variableId) return
          const item = r.item
          switch (item) {
            case 'Nome':
              variables.set(r.variableId, res.name)
              break
            case 'Empresa':
              variables.set(r.variableId, res.enterprise_name)
              break
            case 'Telefone':
              variables.set(r.variableId, res.telephone)
              break
            case 'Email':
              variables.set(r.variableId, res.email)
              break
            case 'CNPJ':
              variables.set(r.variableId, res.enterprise_cnpj)
              break
            case 'IdCrm':
              variables.set(r.variableId, res.crm_id)
              break
            case 'Aniversário':
              variables.set(r.variableId, res.birthday)
              break
            case 'IdEnterprise':
              variables.set(r.variableId, res.enterprise_id)
              break
            case 'CPF':
              variables.set(r.variableId, res.cpf)
              break
            default:
              break
          }
        })
      }
    },
  },
})
