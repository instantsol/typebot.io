import { ThemeTemplate } from '@typebot.io/schemas'
import { dequal } from 'dequal'
import { parseThemeTemplate } from './parseThemeTemplate'

export const areThemesEqual = (
  selectedTemplate: ThemeTemplate['theme'],
  currentTheme: ThemeTemplate['theme']
) => {
  const current = JSON.parse(JSON.stringify(currentTheme))
  return (
    dequal(JSON.parse(JSON.stringify(selectedTemplate)), current) ||
    dequal(
      JSON.parse(JSON.stringify(parseThemeTemplate(selectedTemplate))),
      current
    )
  )
}
