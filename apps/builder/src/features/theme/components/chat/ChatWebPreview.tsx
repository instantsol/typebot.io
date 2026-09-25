import { Box, Stack, Text } from '@chakra-ui/react'
import { ChatTheme, GeneralTheme } from '@typebot.io/schemas'
import {
  BackgroundType,
  defaultBackgroundColor,
} from '@typebot.io/schemas/features/typebot/theme/constants'
import { getChatWebTheme } from '@typebot.io/theme/getChatWebTheme'
import { useTranslate } from '@tolgee/react'

export const ChatWebPreview = ({
  chatTheme,
  generalBackground,
}: {
  chatTheme: ChatTheme | undefined
  generalBackground: GeneralTheme['background']
}) => {
  const { t } = useTranslate()
  const resolvedTheme = getChatWebTheme(chatTheme)
  const background = resolvedTheme.background
  const bubbles = [
    {
      theme: resolvedTheme.hostBubbles,
      background: '#21446c',
      text: t('theme.sideMenu.chat.preview.operator'),
    },
    {
      theme: resolvedTheme.guestBubbles,
      background: '#5399db',
      text: t('theme.sideMenu.chat.preview.customer'),
    },
  ]

  return (
    <Stack spacing={2}>
      <Text fontSize="sm">{t('theme.sideMenu.chat.preview.title')}</Text>
      <Box
        position="relative"
        isolation="isolate"
        p={4}
        rounded="md"
        overflow="hidden"
        bg={
          generalBackground?.type === BackgroundType.COLOR
            ? generalBackground.content ?? defaultBackgroundColor
            : defaultBackgroundColor
        }
      >
        {generalBackground?.type === BackgroundType.IMAGE &&
          generalBackground.content && (
            <Box
              position="absolute"
              inset={0}
              zIndex={-1}
              pointerEvents="none"
              backgroundImage={`url(${JSON.stringify(
                generalBackground.content
              )})`}
              backgroundSize="cover"
              backgroundPosition="center"
              opacity={generalBackground.opacity ?? 1}
            />
          )}
        <Stack
          position="relative"
          isolation="isolate"
          bg={
            background?.type === BackgroundType.COLOR
              ? background.content ?? defaultBackgroundColor
              : '#f5f5f5'
          }
          p={3}
          spacing={3}
          rounded="md"
          overflow="hidden"
        >
          {background?.type === BackgroundType.IMAGE && background.content && (
            <Box
              position="absolute"
              inset={0}
              zIndex={-1}
              pointerEvents="none"
              backgroundImage={`url(${JSON.stringify(background.content)})`}
              backgroundSize="cover"
              backgroundPosition="center"
              opacity={background.opacity ?? 1}
            />
          )}
          {bubbles.map((bubble, index) => (
            <Box
              key={index}
              alignSelf={index === 0 ? 'flex-start' : 'flex-end'}
              maxW="85%"
              bg={bubble.theme?.backgroundColor ?? bubble.background}
              color={bubble.theme?.color ?? '#FFFFFF'}
              p={2}
              rounded="md"
              fontSize="sm"
            >
              {bubble.text}
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  )
}
