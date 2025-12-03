import { createAction, option } from "@typebot.io/forge"
import { baseOptions } from "../baseOptions"

export const watcher = createAction({
  name: "Watcher",
  baseOptions,
  options: option.object({}),
  getSetVariableIds: ({}) => [],
  run: {
    web: {
      displayEmbedBubble: {
        parseUrl: ({}) => "",
        waitForEvent: {
          getSaveVariableId: ({}) => "",
          parseFunction: () => {
            return {
              args: {},
              content: `
                continueFlow()
              `,
            }
          },
        },
        parseInitFunction: ({ options, variables, credentials }) => {
          const { baseUrl } = credentials
          const hash = variables
            .list()
            .find((v) => v.name === "is_contactid")?.value
          const domain = new URL(baseUrl).hostname
          const socketURL = `wss://${domain}/chat/ws/chat/${hash}/`
          const iframeURL = `https://${domain}/builder_chat/${hash}/`
          return {
            args: {},
            content: `
              const replaceLastElementWith = (element) => {
                const typebot = document.querySelector("typebot-standard")
                const container = typebot.shadowRoot
                const chunks = container.querySelectorAll(".typebot-chat-chunk")
                const lastElement = chunks[chunks.length-1]
                lastElement.innerHTML = ""
                lastElement.appendChild(element)
              }

              const removeFirstElement = () => {
                const typebot = document.querySelector("typebot-standard")
                const container = typebot.shadowRoot
                const chunks = container.querySelectorAll(".typebot-chat-chunk")
                const firstElement = chunks[0]
                firstElement.style.display = "none"
              }

              const getHangupMessage = () => {
                const div = document.createElement("div")
                div.innerHTML = "Chat encerrado pela operação."
                return div
              }

              const getChatFrame = (iframeURL) => {
                const iframe = document.createElement("iframe")
                iframe.src = iframeURL
                iframe.style.height = "500px"
                iframe.style.width = "100%"
                iframe.allow = "microphone" 
                return iframe
              }

              const connectWebSocket = () => {
                const socketURL = "${socketURL}"
                const iframeURL = "${iframeURL}"
                
                const socket = new WebSocket(socketURL)

                let keepAlive = null

                socket.onopen = (event) => {
                  keepAlive = setInterval(() => {
                    socket.send(JSON.stringify({
                      user: "0",
                      message: "PING"
                    }))
                  }, 20000)
                }

                socket.onmessage = (event) => {
                  const data = JSON.parse(event.data)

                  if (data.user == 0 && data.message == "PONG") {
                    return
                  }

                  switch (data.user) {
                    case -5:
                      const hangupMessage = getHangupMessage()
                      replaceLastElementWith(hangupMessage)
                      break
                    case -4:
                      const chatFrame = getChatFrame(iframeURL)
                      replaceLastElementWith(chatFrame)
                      break
                    default:
                      console.log("Unknown event")
                      break
                  }
                  socket.close()
                }

                socket.onclose = (event) => {
                  clearInterval(keepAlive)
                }
              }
              
              connectWebSocket()  
              removeFirstElement()
            `,
          }
        },
      },
    },
  },
})
