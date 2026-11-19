import { createId } from '@paralleldrive/cuid2'
import { SessionState, Edge } from '@typebot.io/schemas'

export const addEdgeToTypebot = (
  state: SessionState,
  edge: Edge
): SessionState => ({
  ...state,
  typebotsQueue: state.typebotsQueue.map((typebot, index) =>
    index === 0
      ? {
          ...typebot,
          typebot: {
            ...typebot.typebot,
            edges: [...typebot.typebot.edges, edge],
          },
        }
      : typebot
  ),
})

export const createPortalEdge = ({ to }: Pick<Edge, 'to'>) => ({
  id: 'virtual-' + createId(),
  from: { blockId: '', groupId: '' },
  to,
})

// Reuses an existing portal edge with the same target instead of appending a
// new one on every jump. Without this, a flow that loops through a Jump block
// adds an edge to the session state on each lap, so the state (and every
// ChatSession write) grows without bound.
export const getOrAddPortalEdge = (
  state: SessionState,
  to: Edge['to']
): { edgeId: string; newSessionState: SessionState } => {
  const existingPortalEdge = state.typebotsQueue[0].typebot.edges.find(
    (edge) =>
      edge.id.startsWith('virtual-') &&
      edge.to.groupId === to.groupId &&
      edge.to.blockId === to.blockId
  )
  if (existingPortalEdge)
    return { edgeId: existingPortalEdge.id, newSessionState: state }
  const portalEdge = createPortalEdge({ to })
  return {
    edgeId: portalEdge.id,
    newSessionState: addEdgeToTypebot(state, portalEdge),
  }
}
