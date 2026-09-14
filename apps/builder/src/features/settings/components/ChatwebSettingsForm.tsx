import { Stack } from '@chakra-ui/react'
import { Settings } from '@typebot.io/schemas'
import React from 'react'
import { Textarea } from '@/components/inputs'
import { SwitchWithRelatedSettings } from '@/components/SwitchWithRelatedSettings'

type Props = {
  chatweb: Settings['chatweb']
  onUpdate: (chatweb: Settings['chatweb']) => void
}

export const ChatwebSettingsForm = ({ chatweb, onUpdate }: Props) => {
  const updateIsEnabled = (isEnabled: boolean) =>
    onUpdate({ ...chatweb, isEnabled })

  const updateMessage = (message: string) =>
    onUpdate({ ...chatweb, message })

  return (
    <Stack spacing={6}>
      <SwitchWithRelatedSettings
        label={'Redirect WhatsApp to chatweb'}
        moreInfoContent="When enabled, conversations that start on WhatsApp for this bot are redirected here (chatweb) instead of continuing on WhatsApp. Only takes effect when the enterprise-wide setting is off."
        initialValue={chatweb?.isEnabled ?? false}
        onCheckChange={updateIsEnabled}
      >
        <Textarea
          defaultValue={chatweb?.message ?? ''}
          onChange={updateMessage}
          label="Redirect message:"
        />
      </SwitchWithRelatedSettings>
    </Stack>
  )
}
