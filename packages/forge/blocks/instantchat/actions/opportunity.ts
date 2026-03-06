import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { baseOptions } from '../baseOptions'
import { fetchJourneys } from '../fetchers/fetchJourneys'
import { fetchColumns } from '../fetchers/fetchColumns'
import { fetchSellers } from '../fetchers/fetchSellers'
import { fetchJourneyTags } from '../fetchers/fetchJourneyTags'
import { fetchEnterprises } from '../fetchers/fetchEnterprises'
import { auth } from '../auth'

export const opportunity = createAction({
  name: 'Oportunidade',
  baseOptions,
  options: option.object({
    journey: option.string.layout({
      label: 'Jornada',
      fetcher: 'fetchJourneys',
    }),
    column: option.string.layout({
      label: 'Estágio',
      fetcher: 'fetchColumns',
    }),
    title: option.string.layout({
      label: 'Título',
      withVariableButton: true,
    }),
    description: option.string.layout({
      label: 'Descrição',
      withVariableButton: true,
    }),
    value: option.string.layout({
      label: 'Valor',
      withVariableButton: true,
      placeholder: 'Ex: 100,00',
    }),
    currency: option.string.layout({
      label: 'Moeda',
      defaultValue: 'BRL',
    }),
    seller: option.string.layout({
      label: 'Vendedor',
      fetcher: 'fetchSellers',
    }),
    otherContacts: option.string.layout({
      label: 'Outros Contatos',
      withVariableButton: true,
    }),
    contact: option.string.layout({
      label: 'Contato (ID)',
      withVariableButton: true,
      moreInfoTooltip: 'Digite o ID numérico do contato ou use uma variável. O sistema não tentará resolver nomes.',
    }),
    enterprise: option.string.layout({
      label: 'Empresa (ID)',
      fetcher: 'fetchEnterprises',
      moreInfoTooltip: 'Informe o ID da empresa ou use uma variável. Somente valores numéricos são aceitos.',
    }),
    tag: option.string.layout({
      label: 'Marcador',
      fetcher: 'fetchJourneyTags',
    }),
  }),
  run: {
    server: async ({
      options: { journey, column, title, description, currency, value, seller, otherContacts, tag, contact, enterprise },
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
      let parsedValue: number | null = null
      if (value !== undefined && value !== null && value !== '') {
        const normalized =
          typeof value === 'string'
            ? value.replace(/\./g, '').replace(',', '.')
            : value
        const num = Number(normalized)
        if (Number.isNaN(num)) {
          throw new Error('Valor inválido')
        }
        parsedValue = num
      }
      const url = `${baseUrl}/ivci/webhook/create_opportunity?page_id=${id_chatbot}&sender_id=${id_cliente}`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          journey       : journey,
          column        : column,
          title         : title,
          description   : description,
          currency      : currency,
          value         : parsedValue,
          seller        : seller,
          otherContacts : otherContacts,
          contact       : contact,
          enterprise      : enterprise,
          tag           : tag,
        })
      })
      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
      } else {
        console.error(
          `Error calling create opportunity [${journey}] -> ${response.status}: ${response.statusText}`
        )
      }
    },
  },
  fetchers: [fetchJourneys, fetchColumns, fetchJourneyTags, fetchSellers, fetchEnterprises],
})
