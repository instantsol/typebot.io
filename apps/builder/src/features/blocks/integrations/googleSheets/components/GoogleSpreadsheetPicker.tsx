import { FileIcon } from '@/components/icons'
import { trpc } from '@/lib/trpc'
import { Button, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import { env } from '@typebot.io/env'
import React, { useEffect, useState } from 'react'
import { GoogleSheetsLogo } from './GoogleSheetsLogo'
import { isDefined } from '@typebot.io/lib'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any

type Props = {
  spreadsheetId?: string
  credentialsId: string
  workspaceId: string
  onSpreadsheetIdSelect: (spreadsheetId: string) => void
}

export const GoogleSpreadsheetPicker = ({
  spreadsheetId,
  workspaceId,
  credentialsId,
  onSpreadsheetIdSelect,
}: Props) => {
  const [isPickerInitialized, setIsPickerInitialized] = useState(false)

  const { data } = trpc.sheets.getAccessToken.useQuery({
    workspaceId,
    credentialsId,
  })
  const { data: spreadsheetData, status } =
    trpc.sheets.getSpreadsheetName.useQuery(
      {
        workspaceId,
        credentialsId,
        spreadsheetId: spreadsheetId as string,
      },
      { enabled: !!spreadsheetId }
    )

  useEffect(() => {
    loadScript('gapi', 'https://apis.google.com/js/api.js', () => {
      window.gapi.load('picker', () => {
        setIsPickerInitialized(true)
      })
    })
  }, [])

  const loadScript = (
    id: string,
    src: string,
    callback: { (): void; (): void; (): void }
  ) => {
    const existingScript = document.getElementById(id)
    if (existingScript) {
      callback()
      return
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'

    script.onload = function () {
      callback()
    }

    script.src = src
    document.head.appendChild(script)
  }

  const createPicker = () => {
    if (!data) return
    if (!isPickerInitialized) throw new Error('Google Picker not inited')

    try {
      // Your selected code goes here
      const picker = new window.google.picker.PickerBuilder()
        .addView(window.google.picker.ViewId.SPREADSHEETS)
        .setOAuthToken(data.accessToken)
        .setDeveloperKey(env.NEXT_PUBLIC_GOOGLE_API_KEY)
        .setCallback(pickerCallback)
        .setOrigin(env.NEXT_PUBLIC_INSTALLATION_URL)
        .build()

      picker.setVisible(true)
    } catch (error) {
      const errorMessage = (error as Error).message
      alert(errorMessage)
    }
  }

  const pickerCallback = (data: { action: string; docs: { id: string }[] }) => {
    if (data.action !== 'picked') return
    const spreadsheetId = data.docs[0]?.id
    if (!spreadsheetId) return
    onSpreadsheetIdSelect(spreadsheetId)
  }

  if (spreadsheetData && spreadsheetData.name !== '')
    return (
      <Flex justifyContent="space-between">
        <HStack spacing={2}>
          <GoogleSheetsLogo />
          <Text fontWeight="semibold">{spreadsheetData.name}</Text>
        </HStack>
        <IconButton
          size="sm"
          icon={<FileIcon />}
          onClick={createPicker}
          isLoading={!isPickerInitialized}
          aria-label={'Pick another spreadsheet'}
        />
      </Flex>
    )
  return (
    <Button
      onClick={createPicker}
      isLoading={
        !isPickerInitialized ||
        (isDefined(spreadsheetId) && status === 'loading')
      }
    >
      Pick a spreadsheet
    </Button>
  )
}
