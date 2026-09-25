import { RadioButtons } from '@/components/inputs/RadioButtons'
import {
  Button,
  Stack,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'
import { Background } from '@typebot.io/schemas'
import React from 'react'
import { BackgroundContent } from './BackgroundContent'
import {
  BackgroundType,
  defaultBackgroundType,
} from '@typebot.io/schemas/features/typebot/theme/constants'
import { useTranslate } from '@tolgee/react'

type Props = {
  background?: Background
  fileName?: string
  onBackgroundChange: (newBackground: Background) => void
}

export const BackgroundSelector = ({
  background,
  fileName,
  onBackgroundChange,
}: Props) => {
  const { t } = useTranslate()

  const handleBackgroundTypeChange = (type: BackgroundType) =>
    onBackgroundChange({ ...background, type, content: undefined })

  const handleBackgroundContentChange = (content: string) =>
    onBackgroundChange({ ...background, content })

  return (
    <Stack spacing={4}>
      <RadioButtons
        options={[
          {
            label: t('theme.sideMenu.global.background.color.select'),
            value: BackgroundType.COLOR,
          },
          {
            label: t('theme.sideMenu.global.background.image.select'),
            value: BackgroundType.IMAGE,
          },
          {
            label: t('theme.sideMenu.global.background.none.select'),
            value: BackgroundType.NONE,
          },
        ]}
        value={background?.type ?? defaultBackgroundType}
        onSelect={handleBackgroundTypeChange}
      />
      <BackgroundContent
        background={background}
        fileName={fileName}
        onBackgroundContentChange={handleBackgroundContentChange}
      />
      {background?.type === BackgroundType.IMAGE && background.content && (
        <>
          <Text>
            {t('theme.sideMenu.background.opacity')}:{' '}
            {Math.round((background.opacity ?? 1) * 100)}%
          </Text>
          <Slider
            aria-label={t('theme.sideMenu.background.opacity')}
            value={Math.round((background.opacity ?? 1) * 100)}
            min={0}
            max={100}
            onChange={(value) =>
              onBackgroundChange({ ...background, opacity: value / 100 })
            }
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Button
            size="sm"
            variant="outline"
            onClick={() => onBackgroundChange({ type: BackgroundType.NONE })}
          >
            {t('theme.sideMenu.background.remove')}
          </Button>
        </>
      )}
    </Stack>
  )
}
