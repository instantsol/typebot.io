import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
import { baseOptions } from '../baseOptions'
import { auth } from '../auth'

export const checkTime = createAction({
  name: 'Check time',
  baseOptions,
  options: option.object({
    checktime: option.string.layout({
      label: 'Check time',
      moreInfoTooltip:
        'Informe o nome do ckecktime ou escolha a variável que contém essa informação.',
    }),
    responseMapping: option.saveResponseArray(['Resultado']).layout({
      accordion: 'Salvar resultado',
    }),
  }),
  getSetVariableIds: ({ responseMapping }) =>
    responseMapping?.map((r) => r.variableId).filter(isDefined) ?? [],
  run: {
    server: async ({
      credentials,
      options: { botAccountcode, checktime, responseMapping },
      variables,
    }) => {
      const { baseUrl } = credentials
      variables.list().forEach((v) => console.log('DELETEME: v', v))
      console.log('DELETEME: Account ?? ', botAccountcode)
      console.log('DELETEME: Checktim ?? ', checktime)

      const accountcode = variables
        .list()
        .find((v) => v.name === 'accountcode')?.value

      let result = false
      if (accountcode && checktime) {
        const params = new URLSearchParams({
          accountcode: accountcode.toString(),
          checktime: checktime,
        })
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

        const url = `${baseUrl}/webhook/checktime?${params.toString()}`
        const response = await fetch(url, { method: 'POST' })
        if (response.status < 300 && response.status >= 200) {
          const res = await response.json()
          result = res.Checktime
        }
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
