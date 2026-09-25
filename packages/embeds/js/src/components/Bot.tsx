import { LiteBadge } from './LiteBadge'
import {
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  Show,
} from 'solid-js'
import { isDefined, isNotDefined, isNotEmpty } from '@typebot.io/lib'
import { startChatQuery } from '@/queries/startChatQuery'
import { ConversationContainer } from './ConversationContainer'
import { setIsMobile } from '@/utils/isMobileSignal'
import { BotContext, OutgoingLog } from '@/types'
import { ErrorMessage } from './ErrorMessage'
import {
  getExistingResultIdFromStorage,
  getInitialChatReplyFromStorage,
  setInitialChatReplyInStorage,
  setResultInStorage,
  wipeExistingChatStateInStorage,
} from '@/utils/storage'
import { setCssVariablesValue } from '@/utils/setCssVariablesValue'
import { getChatWebTheme } from '@typebot.io/theme/getChatWebTheme'
import immutableCss from '../assets/immutable.css'
import {
  Font,
  InputBlock,
  StartChatResponse,
  StartFrom,
} from '@typebot.io/schemas'
import { clsx } from 'clsx'
import { HTTPError } from 'ky'
import { injectFont } from '@/utils/injectFont'
import { ProgressBar } from './ProgressBar'
import { Portal } from 'solid-js/web'
import { defaultSettings } from '@typebot.io/schemas/features/typebot/settings/constants'
import { persist } from '@/utils/persist'
import { setBotContainerHeight } from '@/utils/botContainerHeightSignal'
import {
  defaultFontFamily,
  defaultFontType,
  defaultProgressBarPosition,
} from '@typebot.io/schemas/features/typebot/theme/constants'
import { CorsError } from '@/utils/CorsError'
import { Toaster, Toast } from '@ark-ui/solid'
import { CloseIcon } from './icons/CloseIcon'
import { toaster } from '@/utils/toaster'

export type BotProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typebot: string | any
  isPreview?: boolean
  resultId?: string
  prefilledVariables?: Record<string, unknown>
  apiHost?: string
  font?: Font
  progressBarRef?: HTMLDivElement
  startFrom?: StartFrom
  sessionId?: string
  onNewInputBlock?: (inputBlock: InputBlock) => void
  onAnswer?: (answer: { message: string; blockId: string }) => void
  onInit?: () => void
  onEnd?: () => void
  onNewLogs?: (logs: OutgoingLog[]) => void
  onChatStatePersisted?: (isEnabled: boolean) => void
}

export const Bot = (props: BotProps & { class?: string }) => {
  const [initialChatReply, setInitialChatReply] = createSignal<
    StartChatResponse | undefined
  >()
  const [customCss, setCustomCss] = createSignal('')
  const [isInitialized, setIsInitialized] = createSignal(false)
  const [error, setError] = createSignal<Error | undefined>()

  const initializeBot = async () => {
    if (props.font) injectFont(props.font)
    setIsInitialized(true)
    const urlParams = new URLSearchParams(location.search)
    props.onInit?.()
    const prefilledVariables: { [key: string]: string } = {}
    urlParams.forEach((value, key) => {
      prefilledVariables[key] = value
    })
    const typebotIdFromProps =
      typeof props.typebot === 'string' ? props.typebot : undefined
    const isPreview =
      typeof props.typebot !== 'string' || (props.isPreview ?? false)
    const resultIdInStorage = getExistingResultIdFromStorage(typebotIdFromProps)
    const { data, error } = await startChatQuery({
      stripeRedirectStatus: urlParams.get('redirect_status') ?? undefined,
      typebot: props.typebot,
      apiHost: props.apiHost,
      isPreview,
      resultId: isNotEmpty(props.resultId) ? props.resultId : resultIdInStorage,
      prefilledVariables: {
        ...prefilledVariables,
        ...props.prefilledVariables,
      },
      startFrom: props.startFrom,
      sessionId: props.sessionId,
    })
    if (error instanceof HTTPError) {
      if (isPreview) {
        return setError(
          new Error(`An error occurred while loading the bot.`, {
            cause: {
              status: error.response.status,
              body: await error.response.json(),
            },
          })
        )
      }
      if (error.response.status === 400 || error.response.status === 403)
        return setError(new Error('This bot is now closed.'))
      if (error.response.status === 404)
        return setError(new Error("The bot you're looking for doesn't exist."))
      return setError(
        new Error(
          `Error! Couldn't initiate the chat. (${error.response.statusText})`
        )
      )
    }

    if (error instanceof CorsError) {
      return setError(new Error(error.message))
    }

    if (!data) {
      if (error) {
        console.error(error)
        if (isPreview) {
          return setError(
            new Error(`Error! Could not reach server. Check your connection.`, {
              cause: error,
            })
          )
        }
      }
      return setError(
        new Error('Error! Could not reach server. Check your connection.')
      )
    }

    if (
      data.resultId &&
      typebotIdFromProps &&
      (data.typebot.settings.general?.rememberUser?.isEnabled ??
        defaultSettings.general.rememberUser.isEnabled)
    ) {
      if (resultIdInStorage && resultIdInStorage !== data.resultId)
        wipeExistingChatStateInStorage(data.typebot.id)
      const storage =
        data.typebot.settings.general?.rememberUser?.storage ??
        defaultSettings.general.rememberUser.storage
      setResultInStorage(storage)(typebotIdFromProps, data.resultId)
      const initialChatInStorage = getInitialChatReplyFromStorage(
        data.typebot.id
      )
      if (initialChatInStorage) {
        setInitialChatReply(initialChatInStorage)
      } else {
        setInitialChatReply(data)
        setInitialChatReplyInStorage(data, {
          typebotId: data.typebot.id,
          storage,
        })
      }
      props.onChatStatePersisted?.(true)
    } else {
      wipeExistingChatStateInStorage(data.typebot.id)
      setInitialChatReply(data)
      if (data.input?.id && props.onNewInputBlock)
        props.onNewInputBlock(data.input)
      if (data.logs) props.onNewLogs?.(data.logs)
      props.onChatStatePersisted?.(false)
    }

    setCustomCss(data.typebot.theme.customCss ?? '')
  }

  createEffect(() => {
    if (isNotDefined(props.typebot) || isInitialized()) return
    initializeBot().then()
  })

  createEffect(() => {
    if (isNotDefined(props.typebot) || typeof props.typebot === 'string') return
    setCustomCss(props.typebot.theme.customCss ?? '')
    if (
      props.typebot.theme.general?.progressBar?.isEnabled &&
      initialChatReply() &&
      !initialChatReply()?.typebot.theme.general?.progressBar?.isEnabled
    ) {
      setIsInitialized(false)
      initializeBot().then()
    }
  })

  onCleanup(() => {
    setIsInitialized(false)
  })

  return (
    <>
      <style>{customCss()}</style>
      <style>{immutableCss}</style>
      <Show when={error()} keyed>
        {(error) => <ErrorMessage error={error} />}
      </Show>
      <Show when={initialChatReply()} keyed>
        {(initialChatReply) => (
          <BotContent
            class={props.class}
            initialChatReply={{
              ...initialChatReply,
              typebot: {
                ...initialChatReply.typebot,
                settings:
                  typeof props.typebot === 'string'
                    ? initialChatReply.typebot?.settings
                    : props.typebot?.settings,
                theme:
                  typeof props.typebot === 'string'
                    ? initialChatReply.typebot?.theme
                    : props.typebot?.theme,
              },
            }}
            context={{
              apiHost: props.apiHost,
              isPreview:
                typeof props.typebot !== 'string' || (props.isPreview ?? false),
              resultId: initialChatReply.resultId,
              sessionId: initialChatReply.sessionId,
              typebot: initialChatReply.typebot,
              storage:
                initialChatReply.typebot.settings.general?.rememberUser
                  ?.isEnabled &&
                !(
                  typeof props.typebot !== 'string' ||
                  (props.isPreview ?? false)
                )
                  ? initialChatReply.typebot.settings.general?.rememberUser
                      ?.storage ?? defaultSettings.general.rememberUser.storage
                  : undefined,
            }}
            progressBarRef={props.progressBarRef}
            onNewInputBlock={props.onNewInputBlock}
            onNewLogs={props.onNewLogs}
            onAnswer={props.onAnswer}
            onEnd={props.onEnd}
          />
        )}
      </Show>
    </>
  )
}

type BotContentProps = {
  initialChatReply: StartChatResponse
  context: BotContext
  class?: string
  progressBarRef?: HTMLDivElement
  onNewInputBlock?: (inputBlock: InputBlock) => void
  onAnswer?: (answer: { message: string; blockId: string }) => void
  onEnd?: () => void
  onNewLogs?: (logs: OutgoingLog[]) => void
}

const BotContent = (props: BotContentProps) => {
  const [progressValue, setProgressValue] = persist(
    createSignal<number | undefined>(props.initialChatReply.progress),
    {
      storage: props.context.storage,
      key: `typebot-${props.context.typebot.id}-progressValue`,
    }
  )
  let botContainer: HTMLDivElement | undefined

  const chatWebFrames = new Map<
    HTMLIFrameElement,
    {
      onLoad: () => void
      bubble: Element | null
    }
  >()
  const chatWebTheme = createMemo(() =>
    getChatWebTheme(props.initialChatReply.typebot.theme.chat)
  )

  const getChatWebUrl = (iframe: HTMLIFrameElement) => {
    try {
      const url = new URL(iframe.src, window.location.href)
      if (
        ['http:', 'https:'].includes(url.protocol) &&
        url.pathname.startsWith('/builder_chat/')
      )
        return url
    } catch {
      return undefined
    }
  }

  const sendChatWebTheme = (
    iframe: HTMLIFrameElement,
    expectedOrigin?: string
  ) => {
    const url = getChatWebUrl(iframe)
    if (!url || (expectedOrigin && url.origin !== expectedOrigin)) return
    iframe.contentWindow?.postMessage(
      {
        kwikEvent: 'chatweb-theme',
        chat: chatWebTheme(),
      },
      url.origin
    )
  }

  const syncChatWebFrames = (resendTheme = false) => {
    if (!botContainer) return
    const frames = new Set(
      Array.from(botContainer.querySelectorAll('iframe')).filter((iframe) =>
        getChatWebUrl(iframe)
      )
    )
    const enabled = chatWebTheme().isChatWebThemeEnabled
    botContainer.classList.toggle(
      'typebot-chatweb-active',
      enabled && frames.size > 0
    )
    chatWebFrames.forEach(({ onLoad, bubble }, iframe) => {
      if (frames.has(iframe)) return
      iframe.removeEventListener('load', onLoad)
      bubble?.classList.remove('typebot-chatweb-embed')
      chatWebFrames.delete(iframe)
    })
    frames.forEach((iframe) => {
      const bubble = iframe.closest('.typebot-host-bubble')
      const registered = chatWebFrames.get(iframe)
      if (registered && registered.bubble !== bubble) {
        registered.bubble?.classList.remove('typebot-chatweb-embed')
        registered.bubble = bubble
      }
      bubble?.classList.toggle('typebot-chatweb-embed', enabled)
      if (registered) {
        if (resendTheme) registered.onLoad()
        return
      }
      const onLoad = () => sendChatWebTheme(iframe)
      chatWebFrames.set(iframe, { onLoad, bubble })
      iframe.addEventListener('load', onLoad)
      onLoad()
    })
  }

  const handleChatWebThemeRequest = (event: MessageEvent) => {
    if (event.data?.kwikEvent !== 'request-chatweb-theme') return
    for (const iframe of chatWebFrames.keys()) {
      if (iframe.contentWindow !== event.source) continue
      sendChatWebTheme(iframe, event.origin)
      break
    }
  }

  const chatWebObserver = new MutationObserver((mutations) => {
    const framesChanged = mutations.some((mutation) =>
      mutation.type === 'attributes'
        ? mutation.target instanceof HTMLIFrameElement
        : [...mutation.addedNodes, ...mutation.removedNodes].some(
            (node) =>
              node instanceof Element &&
              (node.matches('iframe') || node.querySelector('iframe'))
          )
    )
    if (framesChanged) syncChatWebFrames()
  })

  const resizeObserver = new ResizeObserver((entries) => {
    return setIsMobile(entries[0].target.clientWidth < 400)
  })

  onMount(() => {
    if (!botContainer) return
    window.addEventListener('message', handleChatWebThemeRequest)
    chatWebObserver.observe(botContainer, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src'],
    })
    syncChatWebFrames()
    resizeObserver.observe(botContainer)
    setBotContainerHeight(`${botContainer.clientHeight}px`)
  })

  createEffect(() => {
    injectFont(
      props.initialChatReply.typebot.theme.general?.font ?? {
        type: defaultFontType,
        family: defaultFontFamily,
      }
    )
    if (!botContainer) return
    setCssVariablesValue(
      props.initialChatReply.typebot.theme,
      botContainer,
      props.context.isPreview
    )
  })

  createEffect(() => {
    chatWebTheme()
    syncChatWebFrames(true)
  })

  onCleanup(() => {
    window.removeEventListener('message', handleChatWebThemeRequest)
    chatWebObserver.disconnect()
    chatWebFrames.forEach(({ onLoad }, iframe) =>
      iframe.removeEventListener('load', onLoad)
    )
    chatWebFrames.clear()
    if (!botContainer) return
    resizeObserver.unobserve(botContainer)
  })

  return (
    <div
      ref={botContainer}
      class={clsx(
        'relative flex w-full h-full text-base overflow-hidden flex-col justify-center items-center typebot-container',
        props.class
      )}
    >
      <Show
        when={
          isDefined(progressValue()) &&
          props.initialChatReply.typebot.theme.general?.progressBar?.isEnabled
        }
      >
        <Show
          when={
            props.progressBarRef &&
            (props.initialChatReply.typebot.theme.general?.progressBar
              ?.position ?? defaultProgressBarPosition) === 'fixed'
          }
          fallback={<ProgressBar value={progressValue() as number} />}
        >
          <Portal mount={props.progressBarRef}>
            <ProgressBar value={progressValue() as number} />
          </Portal>
        </Show>
      </Show>
      <ConversationContainer
        context={props.context}
        initialChatReply={props.initialChatReply}
        onNewInputBlock={props.onNewInputBlock}
        onAnswer={props.onAnswer}
        onEnd={props.onEnd}
        onNewLogs={props.onNewLogs}
        onProgressUpdate={setProgressValue}
      />
      <Show
        when={
          props.initialChatReply.typebot.settings.general?.isBrandingEnabled
        }
      >
        <LiteBadge botContainer={botContainer} />
      </Show>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root>
            <Toast.Title>{toast().title}</Toast.Title>
            <Toast.Description>{toast().description}</Toast.Description>
            <Toast.CloseTrigger class="absolute right-2 top-2">
              <CloseIcon class="w-4 h-4" />
            </Toast.CloseTrigger>
          </Toast.Root>
        )}
      </Toaster>
    </div>
  )
}
