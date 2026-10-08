import { Answer, BotContext, ChatChunk as ChatChunkType } from '@/types'
import { isMobile } from '@/utils/isMobileSignal'
import { ContinueChatResponse, Settings, Theme } from '@typebot.io/schemas'
import { createSignal, For, onMount, Show } from 'solid-js'
import { HostBubble } from '../bubbles/HostBubble'
import { InputChatBlock } from '../InputChatBlock'
import { AvatarSideContainer } from './AvatarSideContainer'
import { StreamingBubble } from '../bubbles/StreamingBubble'
import { GuestBubble } from '../bubbles/GuestBubble'
import { defaultSettings } from '@typebot.io/schemas/features/typebot/settings/constants'
import {
  defaultGuestAvatarIsEnabled,
  defaultHostAvatarIsEnabled,
} from '@typebot.io/schemas/features/typebot/theme/constants'

type Props = Pick<ContinueChatResponse, 'messages' | 'input'> & {
  theme: Theme
  settings: Settings
  index: number
  context: BotContext
  hasError: boolean
  hideAvatar: boolean
  streamingMessageId: ChatChunkType['streamingMessageId']
  isTransitionDisabled?: boolean
  onNewBubbleDisplayed: (blockId: string) => Promise<void>
  onScrollToBottom: (ref?: HTMLDivElement, offset?: number) => void
  onSubmit: (answer?: string, attachments?: Answer['attachments']) => void
  onSkip: () => void
  onAllBubblesDisplayed: () => void
}

export const ChatChunk = (props: Props) => {
  let inputRef: HTMLDivElement | undefined

  const [displayedMessageIndex, setDisplayedMessageIndex] = createSignal(
    props.isTransitionDisabled ? props.messages.length : 0
  )

  const [lastBubble, setLastBubble] = createSignal<HTMLDivElement>()

  /**
   * Detect our custom historical guest message.
   *
   * Backend format:
   *
   * {
   *   id: "...",
   *   type: "guest",
   *   answer: {
   *     text: "...",
   *     attachments: []
   *   }
   * }
   */
  const getHistoricalGuestAnswer = (message: unknown): Answer | undefined => {
    if (
      typeof message === 'object' &&
      message !== null &&
      'type' in message &&
      (message as { type?: unknown }).type === 'guest' &&
      'answer' in message
    ) {
      const answer = (message as { answer?: unknown }).answer

      if (typeof answer === 'object' && answer !== null && 'text' in answer) {
        return answer as Answer
      }
    }

    return undefined
  }

  /**
   * Historical messages are rendered immediately.
   *
   * We don't want the historical transcript to participate in
   * Typebot's normal bubble transition mechanism.
   */
  const hasHistoricalMessages = () =>
    props.messages.some(
      (message) => getHistoricalGuestAnswer(message) !== undefined
    )

  const displayNextMessage = async (bubbleRef?: HTMLDivElement) => {
    if (
      (props.settings.typingEmulation?.delayBetweenBubbles ??
        defaultSettings.typingEmulation.delayBetweenBubbles) > 0 &&
      displayedMessageIndex() < props.messages.length - 1
    ) {
      await new Promise((resolve) =>
        setTimeout(
          resolve,
          (props.settings.typingEmulation?.delayBetweenBubbles ??
            defaultSettings.typingEmulation.delayBetweenBubbles) * 1000
        )
      )
    }

    const lastBubbleBlockId = props.messages[displayedMessageIndex()].id

    await props.onNewBubbleDisplayed(lastBubbleBlockId)

    const nextIndex =
      displayedMessageIndex() === props.messages.length
        ? displayedMessageIndex()
        : displayedMessageIndex() + 1

    setDisplayedMessageIndex(nextIndex)

    props.onScrollToBottom(bubbleRef)

    if (nextIndex === props.messages.length) {
      setLastBubble(bubbleRef)
      props.onAllBubblesDisplayed()
    }
  }

  onMount(() => {
    if (props.streamingMessageId) return

    /**
     * If this is restored history, show the complete transcript
     * immediately instead of waiting for HostBubble transitions.
     */
    if (hasHistoricalMessages()) {
      setDisplayedMessageIndex(props.messages.length)
    } else if (props.messages.length === 0) {
      props.onAllBubblesDisplayed()
    }

    props.onScrollToBottom(inputRef, 50)
  })

  return (
    <div class="flex flex-col w-full min-w-0 gap-2 typebot-chat-chunk">
      <Show when={props.messages.length > 0}>
        <div class={'flex' + (isMobile() ? ' gap-1' : ' gap-2')}>
          <Show
            when={
              (props.theme.chat?.hostAvatar?.isEnabled ??
                defaultHostAvatarIsEnabled) &&
              props.messages.length > 0
            }
          >
            <AvatarSideContainer
              hostAvatarSrc={props.theme.chat?.hostAvatar?.url}
              hideAvatar={props.hideAvatar}
              isTransitionDisabled={
                props.isTransitionDisabled || hasHistoricalMessages()
              }
            />
          </Show>

          <div
            class="flex flex-col flex-1 gap-2"
            style={{
              'max-width':
                props.theme.chat?.guestAvatar?.isEnabled ??
                defaultGuestAvatarIsEnabled
                  ? isMobile()
                    ? 'calc(100% - 60px)'
                    : 'calc(100% - 48px - 48px)'
                  : '100%',
            }}
          >
            <For each={props.messages.slice(0, displayedMessageIndex() + 1)}>
              {(message, idx) => {
                const guestAnswer = getHistoricalGuestAnswer(message)

                return (
                  <Show
                    when={guestAnswer}
                    fallback={
                      <HostBubble
                        message={message}
                        typingEmulation={props.settings.typingEmulation}
                        isTypingSkipped={
                          (props.settings.typingEmulation
                            ?.isDisabledOnFirstMessage ??
                            defaultSettings.typingEmulation
                              .isDisabledOnFirstMessage) &&
                          props.index === 0 &&
                          idx() === 0
                        }
                        onTransitionEnd={
                          props.isTransitionDisabled || hasHistoricalMessages()
                            ? undefined
                            : displayNextMessage
                        }
                        onCompleted={props.onSubmit}
                      />
                    }
                  >
                    <GuestBubble
                      message={guestAnswer!}
                      showAvatar={
                        props.theme.chat?.guestAvatar?.isEnabled ??
                        defaultGuestAvatarIsEnabled
                      }
                      avatarSrc={props.theme.chat?.guestAvatar?.url}
                      hasHostAvatar={
                        props.theme.chat?.hostAvatar?.isEnabled ??
                        defaultHostAvatarIsEnabled
                      }
                    />
                  </Show>
                )
              }}
            </For>
          </div>
        </div>
      </Show>

      {props.input && displayedMessageIndex() === props.messages.length && (
        <InputChatBlock
          ref={inputRef}
          block={props.input}
          chunkIndex={props.index}
          hasHostAvatar={
            props.theme.chat?.hostAvatar?.isEnabled ??
            defaultHostAvatarIsEnabled
          }
          guestAvatar={props.theme.chat?.guestAvatar}
          context={props.context}
          isInputPrefillEnabled={
            props.settings.general?.isInputPrefillEnabled ??
            defaultSettings.general.isInputPrefillEnabled
          }
          hasError={props.hasError}
          onTransitionEnd={() => props.onScrollToBottom(lastBubble())}
          onSubmit={props.onSubmit}
          onSkip={props.onSkip}
        />
      )}

      <Show when={props.streamingMessageId} keyed>
        {(streamingMessageId) => (
          <div class={'flex' + (isMobile() ? ' gap-1' : ' gap-2')}>
            <Show
              when={
                props.theme.chat?.hostAvatar?.isEnabled ??
                defaultHostAvatarIsEnabled
              }
            >
              <AvatarSideContainer
                hostAvatarSrc={props.theme.chat?.hostAvatar?.url}
                hideAvatar={props.hideAvatar}
              />
            </Show>

            <div
              class="flex flex-col flex-1 gap-2"
              style={{
                'max-width':
                  props.theme.chat?.guestAvatar?.isEnabled ??
                  defaultGuestAvatarIsEnabled
                    ? isMobile()
                      ? 'calc(100% - 60px)'
                      : 'calc(100% - 48px - 48px)'
                    : '100%',
              }}
            >
              <StreamingBubble
                streamingMessageId={streamingMessageId}
                context={props.context}
              />
            </div>
          </div>
        )}
      </Show>
    </div>
  )
}
