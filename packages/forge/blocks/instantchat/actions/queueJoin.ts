import { createAction, option } from '@typebot.io/forge'
// import { baseOptions } from '../baseOptions'
// import { defaultBaseUrl } from '../constants'

export const queueJoin = createAction({
  name: 'Queue join',
  options: option.object({
    cuResponse: option.string.layout({
      label: 'CuSResponse',
      inputType: 'variableDropdown',
    }),
  }),
  getSetVariableIds: ({ cuResponse }) => (cuResponse ? [cuResponse] : []),

  run: {
    server: async ({ options: { cuResponse }, variables }) => {
      console.log('DELETEME: cuResponse', cuResponse)
      console.log('DELETEME: variables', variables)
    },
    web: {
      displayEmbedBubble: {
        waitForEvent: {
          getSaveVariableId: ({ cuResponse }) => cuResponse,
          parseFunction: () => {
            return {
              args: {},
              content: `
              console.log("Buitton from Wait event ?? ", button);
              button.addEventListener('click', () => continueFlow('CU'));
              
              `,
            }
          },
        },
        parseInitFunction: ({ options }) => {
          return {
            args: {},
            content: `
            console.log('DELETEME: oi', typebotElement);
            const fragment = document.createDocumentFragment();
            const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "VAITOMARNOCU2";
            //window.document.head.appendChild(document.createElement('h1')).textContent = 'VAITOMARNOCU';
            typebotElement.appendChild(document.createElement('h1')).textContent = 'VAITOMARNOCU';
            window.document.body.appendChild(li)
            const tau = function() {
              alert('tau');
            }
            button = document.createElement('button');

            // Set the text content of the button to "send"
            button.textContent = 'send';

            // Add a click event listener to the button that calls the tau() function
            typebotElement.appendChild(button)

            // Append the button to the body of the document

            console.log('DELETEME: Tau', button);

            
            `,
          }
        },
      },
    },
  },
})
