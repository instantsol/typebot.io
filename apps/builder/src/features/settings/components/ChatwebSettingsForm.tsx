import { Stack } from '@chakra-ui/react'
import { Settings } from '@typebot.io/schemas'
import React from 'react'
import { TextInput } from '@/components/inputs'
import { SwitchWithLabel } from '@/components/inputs/SwitchWithLabel'
import { SwitchWithRelatedSettings } from '@/components/SwitchWithRelatedSettings'

type Props = {
  chatweb: Settings['chatweb']
  onUpdate: (chatweb: Settings['chatweb']) => void
}

export const ChatwebSettingsForm = ({ chatweb, onUpdate }: Props) => {
  const updateIsEnabled = (isEnabled: boolean) =>
    onUpdate({ ...chatweb, isEnabled })

  const updateWithButton = (withButton: boolean) =>
    onUpdate({ ...chatweb, withButton })

  const updateSubtitle = (subtitle: string) =>
    onUpdate({ ...chatweb, subtitle })

  const updateButtonLabel = (buttonLabel: string) =>
    onUpdate({ ...chatweb, buttonLabel })

  return (
    <Stack spacing={6}>
      <SwitchWithRelatedSettings
        label={'Redirect WhatsApp to chatweb'}
        moreInfoContent="When enabled, conversations that start on WhatsApp for this bot are redirected here (chatweb) instead of continuing on WhatsApp. Only takes effect when the enterprise-wide setting is off. The redirect is delivered as a WhatsApp button message; any of these fields left blank falls back to the enterprise-wide default."
        initialValue={chatweb?.isEnabled ?? false}
        onCheckChange={updateIsEnabled}
      >
        <Stack spacing={4}>
          <SwitchWithLabel
            label="Use WhatsApp button"
            initialValue={chatweb?.withButton ?? false}
            onCheckChange={updateWithButton}
            moreInfoContent="When enabled, the redirect is sent as a clickable WhatsApp button."
          />
          <TextInput
            defaultValue={chatweb?.subtitle ?? ''}
            onChange={updateSubtitle}
            label="Button message subtitle:"
            helperText="Main message text. WhatsApp limit: 1024 characters."
          />
          <TextInput
            defaultValue={chatweb?.buttonLabel ?? ''}
            onChange={updateButtonLabel}
            label="Button label:"
            helperText="Text shown on the button itself. WhatsApp limit: 20 characters."
          />
        </Stack>
      </SwitchWithRelatedSettings>
    </Stack>
  )
}
