import { createAction, option } from '@typebot.io/forge'
import { fetchUsers } from '../fetchers/fetchUsers'
import { auth } from '../auth'

export const event = createAction({
  auth,
  name: 'Criar Evento',
  options: option.object({
    calendar: option.enum(['KWIK', 'GOOGLE_CALENDAR', 'MICROSOFT_CALENDAR']).layout({
      label: 'Calendário',
      defaultValue: 'KWIK',
    }),
    title: option.string.layout({
      label: 'Título',
      withVariableButton: true,
    }),
    description: option.string.layout({
      label: 'Descrição',
      withVariableButton: true,
      isRequired: false,
    }),
    start: option.string.layout({
      label: 'Início',
      withVariableButton: true,
      placeholder: 'AAAA-MM-DDTHH:mm:ss',
    }),
    end: option.string.layout({
      label: 'Fim',
      withVariableButton: true,
      placeholder: 'AAAA-MM-DDTHH:mm:ss',
    }),
    user: option.string.layout({
      label: 'Usuário',
      fetcher: 'fetchUsers',
      moreInfoTooltip:
        'Para calendário KWIK, define para quem a tarefa é criada. Para Google/Microsoft, define de quem é o calendário conectado (é necessário também informar o e-mail conectado abaixo).',
    }),
    email: option.string.layout({
      label: 'E-mail do calendário conectado',
      withVariableButton: true,
      isRequired: false,
      moreInfoTooltip:
        'Obrigatório para Google Calendar / Microsoft Calendar. Deve ser o e-mail que o usuário selecionado já conectou pela Agenda (Conectar Agenda Google/Microsoft).',
    }),
    location: option.string.layout({
      label: 'Local',
      withVariableButton: true,
      isRequired: false,
      accordion: 'Google/Microsoft',
      moreInfoTooltip: 'Usado apenas para Google Calendar / Microsoft Calendar.',
    }),
    attendees: option.string.layout({
      label: 'Convidados (e-mails separados por vírgula)',
      withVariableButton: true,
      isRequired: false,
      accordion: 'Google/Microsoft',
      moreInfoTooltip: 'Usado apenas para Google Calendar / Microsoft Calendar.',
    }),
    isRecurrent: option.enum(['UNIQUE', 'WEEKLY', 'MONTHLY', 'YEARLY', 'WEEKDAYS']).layout({
      label: 'Recorrência',
      defaultValue: 'UNIQUE',
      accordion: 'KWIK',
    }),
    contact: option.string.layout({
      label: 'Contato (ID)',
      withVariableButton: true,
      isRequired: false,
      accordion: 'KWIK',
    }),
    contactEnterprise: option.string.layout({
      label: 'Empresa do contato (ID)',
      withVariableButton: true,
      isRequired: false,
      accordion: 'KWIK',
    }),
    contactGroup: option.string.layout({
      label: 'Segmento (ID)',
      withVariableButton: true,
      isRequired: false,
      accordion: 'KWIK',
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
        calendar,
        title,
        description,
        start,
        end,
        user,
        email,
        location,
        attendees,
        isRecurrent,
        contact,
        contactEnterprise,
        contactGroup,
        responseMapping,
      },
      variables,
      credentials,
    }) => {
      const { baseUrl, kwikToken } = credentials

      const body: Record<string, unknown> = {
        calendar,
        title,
        description,
        start,
        end,
      }

      if (calendar === 'KWIK') {
        if (user) body.target = user
        if (contact) body.contact = contact
        if (contactEnterprise) body.contact_enterprise = contactEnterprise
        if (contactGroup) body.contact_group = contactGroup
        if (isRecurrent) body.is_recurrent = isRecurrent
      } else {
        body.user_id = user
        body.email = email
        if (location) body.location = location
        if (attendees)
          body.attendees = attendees
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)
      }

      const url = `${baseUrl}/api/api/public/v1/events/`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Token ${kwikToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (response.status < 300 && response.status >= 200) {
        const res = await response.json()
        const created = Array.isArray(res) ? res[0] : res
        responseMapping?.forEach((r) => {
          if (!r.variableId) return
          variables.set(r.variableId, created?.id)
        })
      } else {
        console.error(
          `Error calling create event [${calendar}] -> ${response.status}: ${response.statusText}`
        )
      }
    },
  },
  fetchers: [fetchUsers],
})
