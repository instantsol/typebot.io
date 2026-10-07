import { isEmpty } from '@typebot.io/lib'
import { Show } from 'solid-js'
import { replaceEmojiShortcodes } from '@/utils/emojiDict'

export type PlateTextProps = {
  text: string
  isUniqueChild: boolean
  bold?: boolean
  italic?: boolean
  underline?: boolean
}

const computeClassNames = (
  bold: boolean | undefined,
  italic: boolean | undefined,
  underline: boolean | undefined
) => {
  let className = ''
  if (bold) className += 'slate-bold'
  if (italic) className += ' slate-italic'
  if (underline) className += ' slate-underline'
  return className
}

export const PlateText = (props: PlateTextProps) => (
  <span class={computeClassNames(props.bold, props.italic, props.underline)}>
    {replaceEmojiShortcodes(props.text)}
    <Show when={props.isUniqueChild && isEmpty(props.text)}>
      <br />
    </Show>
  </span>
)
