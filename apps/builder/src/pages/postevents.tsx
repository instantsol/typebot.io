function shouldGetData() {
  const urlParams = new URLSearchParams(window.location.search)
  const getData = urlParams.get('getData')
  if (getData) return true
  return false
}

const loadData = async () => {
  const res = await fetch('/api/v1/workspaces')
  const data = await res.json()
  const promises = await Promise.all(
    data.workspaces.map((each: any) =>
      fetch(`/api/v1/typebots/?workspaceId=${each.id}`)
    )
  )
  const typebots = await Promise.all(promises.map((each) => each.json()))
  const response: any = []
  typebots.map((each) => response.push(...each.typebots))
  return response
}

const InitializePostEvents = async () => {
  if (shouldGetData()) {
    const data = await loadData()
    top?.postMessage(JSON.stringify(data), '*')
  }
}

export default InitializePostEvents
