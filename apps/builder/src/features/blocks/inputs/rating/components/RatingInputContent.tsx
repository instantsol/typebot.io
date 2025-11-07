import { WithVariableContent } from '@/features/graph/components/nodes/block/WithVariableContent'
import { Text } from '@chakra-ui/react'
import { useTranslate } from '@tolgee/react'
import { RatingInputBlock } from '@typebot.io/schemas'
import { defaultRatingInputOptions } from '@typebot.io/schemas/features/blocks/inputs/rating/constants'

type Props = {
  variableId?: string
  block: RatingInputBlock
}

export const RatingInputContent = ({ variableId, block }: Props) => {
  const { t } = useTranslate()

  return variableId ? (
    <WithVariableContent variableId={variableId} />
  ) : (
    <Text noOfLines={4} pr="6" sx={{ whiteSpace: 'break-spaces' }}>
      {(block.options?.text || '').length > 0 ? (
        block.options?.text
      ) : (
        <>
          {t('blocks.inputs.rating.from.label')}{' '}
          {block.options?.buttonType === 'Icons'
            ? 1
            : block.options?.startsAt ??
              defaultRatingInputOptions.startsAt}{' '}
          {t('blocks.inputs.rating.to.label')}{' '}
          {block.options?.length ?? defaultRatingInputOptions.length}
        </>
      )}
    </Text>
  )
}
