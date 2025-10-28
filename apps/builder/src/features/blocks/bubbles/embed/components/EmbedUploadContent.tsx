import { useState } from 'react'
import { TextInput, NumberInput, Textarea } from '@/components/inputs'
import { Stack, Text } from '@chakra-ui/react'
import { EmbedBubbleBlock, Variable } from '@typebot.io/schemas'
import { sanitizeUrl } from '@typebot.io/lib'
import { useTranslate } from '@tolgee/react'
import { defaultEmbedBubbleContent } from '@typebot.io/schemas/features/blocks/bubbles/embed/constants'
import { SwitchWithRelatedSettings } from '@/components/SwitchWithRelatedSettings'
import { VariableSearchInput } from '@/components/inputs/VariableSearchInput'
import { UploadFileContent } from '@/components/ImageUploadContent/ImageUploadContent'
import { FilePathUploadProps } from '@/features/upload/api/generateUploadUrl'

type Props = {
  uploadFileProps: FilePathUploadProps
  content: EmbedBubbleBlock['content']
  onSubmit: (content: EmbedBubbleBlock['content']) => void
}

export const EmbedUploadContent = ({
  uploadFileProps,
  content,
  onSubmit,
}: Props) => {
  const { t } = useTranslate()
  const [key, setKey] = useState(0)
  const handleUrlChange = (url: string) => {
    const iframeUrl = sanitizeUrl(
      url.trim().startsWith('<iframe') ? extractUrlFromIframe(url) : url
    )
    onSubmit({ ...content, url: iframeUrl })
  }

  const handleHeightChange = (
    height?: NonNullable<EmbedBubbleBlock['content']>['height']
  ) => height && onSubmit({ ...content, height })

  const updateWaitEventName = (name: string) =>
    onSubmit({ ...content, waitForEvent: { ...content?.waitForEvent, name } })

  const updateWaitForEventEnabled = (isEnabled: boolean) =>
    onSubmit({
      ...content,
      waitForEvent: { ...content?.waitForEvent, isEnabled },
    })

  const updateSaveDataInVariableId = (variable?: Pick<Variable, 'id'>) =>
    onSubmit({
      ...content,
      waitForEvent: {
        ...content?.waitForEvent,
        saveDataInVariableId: variable?.id,
      },
    })

  const updateLinkButton = (isEnabled: boolean) =>
    onSubmit({ ...content, link: { ...content?.link, isEnabled } })

  const updateLinkText = (text: string) =>
    onSubmit({ ...content, link: { ...content?.link, text } })

  const updateFileNameAndUrl = (url?: string, text?: string) => {
    onSubmit({
      ...content,
      url: url || content?.url || '',
      filename: text || content?.filename || '',
    })
    setKey(Math.random())
  }

  const updateFileName = (text: string) =>
    onSubmit({ ...content, filename: text })

  const updateLinkName = (name: string) =>
    onSubmit({ ...content, link: { ...content?.link, name } })

  const updateLinkUrl = (url: string) =>
    onSubmit({ ...content, link: { ...content?.link, url } })

  return (
    <Stack p="2" spacing={6}>
      <Stack>
        <SwitchWithRelatedSettings
          label={t('blocks.inputs.settings.link.enabled.label')}
          initialValue={content?.link?.isEnabled ?? false}
          onCheckChange={updateLinkButton}
        >
          <Textarea
            width="full"
            placeholder={t('blocks.inputs.settings.link.text.label')}
            defaultValue={content?.link?.text}
            onChange={updateLinkText}
          />
          <TextInput
            direction="row"
            label={t('blocks.inputs.settings.link.name.label')}
            defaultValue={content?.link?.name}
            onChange={updateLinkName}
          />
          <TextInput
            direction="row"
            label={t('blocks.inputs.settings.link.url.label')}
            defaultValue={content?.link?.url}
            onChange={updateLinkUrl}
          />
        </SwitchWithRelatedSettings>
      </Stack>

      {!content?.link?.isEnabled && (
        <>
          <Stack>
            <TextInput
              key={`content-url-${key}`}
              placeholder={t(
                'editor.blocks.bubbles.embed.settings.worksWith.placeholder'
              )}
              defaultValue={content?.url ?? ''}
              onChange={handleUrlChange}
            />
            <Text fontSize="sm" color="gray.400" textAlign="center">
              {t('editor.blocks.bubbles.embed.settings.worksWith.text')}
            </Text>
            <UploadFileContent
              uploadFileProps={uploadFileProps}
              onNewUrl={updateFileNameAndUrl}
              replaceType={'all'}
              replaceText={t('editor.header.uploadTab.uploadButtonFile.label')}
            />

            <TextInput
              key={`content-filename-${key}`}
              width="full"
              label={t('editor.blocks.bubbles.embed.settings.fileName.text')}
              defaultValue={content?.filename ?? ''}
              onChange={updateFileName}
            />
          </Stack>
          <NumberInput
            label="Height:"
            defaultValue={content?.height ?? defaultEmbedBubbleContent.height}
            onValueChange={handleHeightChange}
            suffix={t('editor.blocks.bubbles.embed.settings.numberInput.unit')}
            direction="row"
          />
          <SwitchWithRelatedSettings
            label="Wait for event?"
            initialValue={content?.waitForEvent?.isEnabled ?? false}
            onCheckChange={updateWaitForEventEnabled}
          >
            <TextInput
              direction="row"
              label="Name:"
              defaultValue={content?.waitForEvent?.name}
              onChange={updateWaitEventName}
            />
            <VariableSearchInput
              onSelectVariable={updateSaveDataInVariableId}
              initialVariableId={content?.waitForEvent?.saveDataInVariableId}
              label="Save data in variable"
            />
          </SwitchWithRelatedSettings>
        </>
      )}
    </Stack>
  )
}

const extractUrlFromIframe = (iframe: string) =>
  [...iframe.matchAll(/src="([^"]+)"/g)][0][1]
