import { executeCondition } from '@typebot.io/logic/executeCondition'
import { ChoiceInputBlock, Variable, SessionState } from '@typebot.io/schemas'

const getEdgeData = (
  state: SessionState,
  outgoingEdgeId: string | undefined
) => {
  if (!outgoingEdgeId) return undefined

  const edge = state.typebotsQueue[0].typebot.edges.find(
    (edge) => edge.id === outgoingEdgeId
  )

  if (!edge) return undefined

  const group = state.typebotsQueue[0].typebot.groups.find(
    (group) => group.id === edge.to.groupId
  )
  if (!group) return undefined

  const firstBlock = group.blocks[0]
  if (firstBlock.type === 'Redirect') {
    return firstBlock.options?.url
  }

  return undefined
}

export const filterChoiceItems =
  (variables: Variable[]) =>
  (block: ChoiceInputBlock, state: SessionState): ChoiceInputBlock => {
    const filteredItems = block.items
      .filter((item, index) => {
        if (
          item.displayCondition?.isEnabled &&
          item.displayCondition?.condition
        )
          return executeCondition({
            variables,
            condition: item.displayCondition.condition,
          })

        return true
      })
      .map((item, index) => ({
        ...item,
        redirectUrl: getEdgeData(state, item.outgoingEdgeId),
      }))
    return {
      ...block,
      items: filteredItems,
    }
  }
