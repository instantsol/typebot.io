import type { ChatTheme } from '@typebot.io/schemas'
import {
  defaultGuestBubblesBackgroundColor,
  defaultGuestBubblesColor,
  defaultHostBubblesBackgroundColor,
  defaultHostBubblesColor,
} from '@typebot.io/schemas/features/typebot/theme/constants'

export const getChatWebTheme = (chat: ChatTheme = {}): ChatTheme => {
  if (!chat.isChatWebThemeEnabled) return { isChatWebThemeEnabled: false }
  return {
    isChatWebThemeEnabled: true,
    background: chat.background && {
      type: chat.background.type,
      content: chat.background.content,
      opacity: chat.background.opacity,
    },
    hostBubbles: {
      backgroundColor:
        chat.hostBubbles?.backgroundColor ?? defaultHostBubblesBackgroundColor,
      color: chat.hostBubbles?.color ?? defaultHostBubblesColor,
    },
    guestBubbles: {
      backgroundColor:
        chat.guestBubbles?.backgroundColor ??
        defaultGuestBubblesBackgroundColor,
      color: chat.guestBubbles?.color ?? defaultGuestBubblesColor,
    },
  }
}
