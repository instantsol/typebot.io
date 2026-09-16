import { Standard } from '@typebot.io/nextjs'
import { useRouter } from 'next/router'
import { SEO } from './Seo'
import { Typebot } from '@typebot.io/schemas/features/typebot/typebot'
import { BackgroundType } from '@typebot.io/schemas/features/typebot/theme/constants'
import { defaultSettings } from '@typebot.io/schemas/features/typebot/settings/constants'
import { Font } from '@typebot.io/schemas'
import { useMemo } from 'react'

export type TypebotV3PageProps = {
  url: string
  name: string
  publicId: string | null
  font: Font | null
  isHideQueryParamsEnabled: boolean | null
  background: NonNullable<Typebot['theme']['general']>['background']
  metadata: Typebot['settings']['metadata']
}

export const TypebotPageV3 = ({
  font,
  publicId,
  name,
  url,
  isHideQueryParamsEnabled,
  metadata,
  background,
}: TypebotV3PageProps) => {
  const { asPath, push } = useRouter()

  const clearQueryParamsIfNecessary = () => {
    const hasQueryParams = asPath.includes('?')
    if (
      !hasQueryParams ||
      !(
        isHideQueryParamsEnabled ??
        defaultSettings.general.isHideQueryParamsEnabled
      )
    )
      return
    // chatweb_token must survive in the visible URL even when this bot hides
    // query params — it's the only way WhatsApp's in-app browser "open in
    // browser" action (which reopens the browser's current address, not the
    // originally-tapped link) can resume the same session externally.
    const [path, search] = asPath.split('?')
    const chatwebToken = new URLSearchParams(search).get('chatweb_token')
    push(
      chatwebToken
        ? `${path}?chatweb_token=${encodeURIComponent(chatwebToken)}`
        : path,
      undefined,
      { shallow: true }
    )
  }

  const apiOrigin = useMemo(() => new URL(url).origin, [url])

  return (
    <div
      style={{
        height: '100vh',
        // Set background color to avoid SSR flash
        backgroundColor:
          background?.type === BackgroundType.COLOR
            ? background?.content
            : background?.type === BackgroundType.NONE
            ? undefined
            : '#fff',
      }}
    >
      <SEO url={url} typebotName={name} metadata={metadata} />
      <Standard
        typebot={publicId}
        onInit={clearQueryParamsIfNecessary}
        font={font ?? undefined}
        apiHost={apiOrigin}
      />
    </div>
  )
}
