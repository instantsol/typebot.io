import { ConditionBlock, SessionState } from '@typebot.io/schemas'
import { ExecuteLogicResponse } from '../../../types'
import { executeCondition } from '@typebot.io/logic/executeCondition'

export const executeConditionBlock = (
  state: SessionState,
  block: ConditionBlock
): ExecuteLogicResponse => {
  const { edges, variables } = state.typebotsQueue[0].typebot
  const passedCondition = block.items.find(
    (item) =>
      item.content && executeCondition({ variables, condition: item.content })
  )
  const defaultOutgoingEdgeId =
    block.outgoingEdgeId ??
    edges.find(
      (edge) =>
        'blockId' in edge.from &&
        edge.from.blockId === block.id &&
        !edge.from.itemId
    )?.id

  return {
    outgoingEdgeId: passedCondition
      ? passedCondition.outgoingEdgeId
      : defaultOutgoingEdgeId,
  }
}
