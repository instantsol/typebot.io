import type { Theme } from '@typebot.io/schemas'
import {
  BackgroundType,
  defaultBackgroundColor,
} from '@typebot.io/schemas/features/typebot/theme/constants'

export const parseThemeTemplate = (theme: Theme): Theme => {
  const background =
    theme.chat?.background ??
    (theme.chat?.isChatWebThemeEnabled
      ? undefined
      : theme.general?.background ?? {
          type: BackgroundType.COLOR,
          content: defaultBackgroundColor,
        })
  return {
    ...theme,
    chat: {
      ...theme.chat,
      isChatWebThemeEnabled: true,
      background: background ? { ...background } : undefined,
    },
  }
}
