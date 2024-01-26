import { createAction, option } from '@typebot.io/forge'
import { isDefined } from '@typebot.io/lib'
// import { baseOptions } from '../baseOptions'
// import { defaultBaseUrl } from '../constants'

export const queueJoin = createAction({
  name: 'Queue join',
  options: option.object({
    queue: option.string.layout({
      label: 'Queue ID',
      moreInfoTooltip:
        'Informe o código da fila ou escolha a variável que contém essa informação.',
    }),
    page_id: option.string.layout({
      label: 'Page ID',
      defaultValue: '{{page_id}}',
    }),
    sender_id: option.string.layout({
      label: 'Sender ID',
      defaultValue: '{{sender_id}}',
    }),
    responseMapping: option
      .saveResponseArray(['Message'] as const)
      .layout({
        accordion: 'Save response',
    }),
  }),
  getSetVariableIds: ({ responseMapping }) =>
    responseMapping?.map((r) => r.variableId).filter(isDefined) ?? [],

  run: {
    server: async ({ options: { queue, page_id, sender_id, responseMapping }, variables, credentials }) => {
      console.log('DELETEME: queue', queue)
      console.log('DELETEME: page_id', page_id)
      console.log('DELETEME: sender_id', sender_id)
      console.log('DELETEME: cuResponse', responseMapping)
      console.log('DELETEME: variables', variables)
      console.log('DELETEME: credentials', credentials)
    },
    web: {
      displayEmbedBubble: {
        waitForEvent: {
          getSaveVariableId: ({ responseMapping }) => responseMapping,
          parseFunction: () => {
            return {
              args: {},
              content: `
              // console.log("Buitton from Wait event ?? ", button);
              // button.addEventListener('click', () => continueFlow('CU'));
              // window.document.addEventListener('endChat', (e) => {
              // window.addEventListener('endChat', (e) => {
              window.addEventListener('message', function (event) {
                  console.log("DELETEME: endChat ", event);
                  continueFlow('cu');
              })
              
              `,
            }
          },
        },
        parseInitFunction: ({ options }) => {
          return {
            args: {},
            //             content: `
            //             console.log('DELETEME: oi', typebotElement);
            //             const fragment = document.createDocumentFragment();
            //             const li = fragment
            //   .appendChild(document.createElement("section"))
            //   .appendChild(document.createElement("ul"))
            //   .appendChild(document.createElement("li"));
            // li.textContent = "VAITOMARNOCU2";
            //             //window.document.head.appendChild(document.createElement('h1')).textContent = 'VAITOMARNOCU';
            //             typebotElement.appendChild(document.createElement('h1')).textContent = 'VAITOMARNOCU';
            //             window.document.body.appendChild(li)
            //             const tau = function() {
            //               alert('tau');
            //             }
            //             button = document.createElement('button');

            //             // Set the text content of the button to "send"
            //             button.textContent = 'send';

            //             // Add a click event listener to the button that calls the tau() function
            //             typebotElement.appendChild(button)

            //             // Append the button to the body of the document

            //             console.log('DELETEME: Tau', button);

            //             `,
            content: `
            const iframe = document.createElement('iframe');
            iframe.src = 'https://dev02.instantsandbox.net/builder_chat/348f1e52649e9a9b53371f06a289c1829320b3da/';
            typebotElement.appendChild(iframe); 
            `,
          }
        },
      },
    },
  },
})
