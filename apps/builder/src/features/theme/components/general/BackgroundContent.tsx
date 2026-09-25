import { ImageUploadContent } from '@/components/ImageUploadContent'
import { useTypebot } from '@/features/editor/providers/TypebotProvider'
import {
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  Image,
  Button,
  Portal,
} from '@chakra-ui/react'
import { isNotEmpty } from '@typebot.io/lib'
import { Background } from '@typebot.io/schemas'
import React from 'react'
import { ColorPicker } from '../../../../components/ColorPicker'
import {
  BackgroundType,
  defaultBackgroundColor,
  defaultBackgroundType,
} from '@typebot.io/schemas/features/typebot/theme/constants'
import { useTranslate } from '@tolgee/react'

type BackgroundContentProps = {
  background?: Background
  fileName?: string
  onBackgroundContentChange: (content: string) => void
}

export const BackgroundContent = ({
  background,
  fileName = 'background',
  onBackgroundContentChange,
}: BackgroundContentProps) => {
  const { t } = useTranslate()
  const { typebot } = useTypebot()
  const handleContentChange = (content: string) =>
    onBackgroundContentChange(content)

  if ((background?.type ?? defaultBackgroundType) === BackgroundType.IMAGE) {
    if (!typebot) return null
    return (
      <Popover isLazy placement="top">
        <PopoverTrigger>
          {isNotEmpty(background?.content) ? (
            <Button
              variant="unstyled"
              h="auto"
              aria-label={t('theme.sideMenu.background.replace')}
            >
              <Image
                src={background?.content}
                alt={t('theme.sideMenu.global.background.image.alt')}
                cursor="pointer"
                _hover={{ filter: 'brightness(.9)' }}
                transition="filter 200ms"
                rounded="md"
                maxH="200px"
                objectFit="cover"
              />
              <Text fontSize="sm">
                {t('theme.sideMenu.background.replace')}
              </Text>
            </Button>
          ) : (
            <Button>
              {t('theme.sideMenu.global.background.image.button')}
            </Button>
          )}
        </PopoverTrigger>
        <Portal>
          <PopoverContent p="4" w="500px" maxW="calc(100vw - 32px)">
            <ImageUploadContent
              key={typebot.id}
              uploadFileProps={{
                workspaceId: typebot.workspaceId,
                typebotId: typebot.id,
                fileName,
              }}
              defaultUrl={background?.content}
              onSubmit={handleContentChange}
              excludedTabs={['giphy', 'icon']}
              initialTab="upload"
            />
          </PopoverContent>
        </Portal>
      </Popover>
    )
  }
  if ((background?.type ?? defaultBackgroundType) === BackgroundType.COLOR) {
    return (
      <Flex justify="space-between" align="center">
        <Text>{t('theme.sideMenu.global.background.color')}</Text>
        <ColorPicker
          value={background?.content ?? defaultBackgroundColor}
          onColorChange={handleContentChange}
        />
      </Flex>
    )
  }
  return null
}
