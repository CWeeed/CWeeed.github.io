const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
{
    id:1, //Game start!
    text: "What mode would you like?",
    options: [
    {
      text: "Game",
      nextText: 3
    },
    {
      text: "Text",
      nextText: 2
    }
    ]
},
{
    id: 2,  //Text
    text: "You wake up under a canopy. Getting up, you find yourself standing in the president's garden among the grass. Looking at the leaves, you can see light filtering through the tree by the warm afternoon sun.",
    options: [
    {
      text: 'Restart',
      nextText: -1
    }
    ]
},
{
    id: 3,  //Beginning
    text: 'You wake up under a canopy. What would you like to do?',
    options: [
      {
        text: 'Get up',
        nextText: 5
      },
      {
        text: 'Look at the leaves',
        nextText: 4
      }
    ]
}
  ,{
    id: 4,  //Observation of beginning
    text: 'Looking at the leaves, you can see light filtering through the tree by the warm afternoon sun. It looks like the end of summer, and the green leaves are beginning to turn brown.',
    options: [
      {
        text: 'Go back',
        nextText: 3
      },
    ]
  },
  {
    id: 5,  //President's garden
    text: "You find yourself in the President's garden in UCC, among the various plants that reside there.",
    options: [
      {
        text: 'Look around',
        nextText: 6
      },
      {
        text: 'Head to the Hub',
        nextText: 7
      },
      {
        text: 'Head to the Student Centre',
        nextText: 8
      },
      {
        text: 'Head to the Boole Library',
        nextText: 9
      },
      {
        text: 'Head to the Kane building',
        nextText: 10
      }
    ]
  },
  {
    id: 6,  //Observing Pres' garden
    text: "The President's garden is still full of colour, even after hints of the autumn season appear, and the windy and rainy weather that accompanies late summer in Ireland.",
    options: [
      {
        text: 'Go back',
        nextText: 5
      },
    ]
  },
  {
    id: 7,  //The Hub
    text: 'The hub is bustling with activity as always. People walk past, going to classes and meeting with friends.',
    options: [
      {
        text: 'Go to the Clubs and Societies Hub',
        nextText: 11
      },
      {
        text: "Walk up to the Global Lounge",
        nextText: 12
      },
      {
        text: "Watch the people passing by",
        nextText: 13
      }
    ]
  },
  {
    id: 8,  //Student Centre
    text: "Arriving at the Student Centre, the cafe is open, and there's commotion upstairs, from the new bar, and an event in Devere Hall.",
    options: [
      {
        text: 'Wait in line at the cafe',
        nextText: 14
      },
      {
        text: "Go upstairs",
        nextText: 15
      },
      {
        text: "Go back outside",
        nextText: 5
      }
    ]
  },
  {
    id: 9,  //Boole Library
    text: 'You go to class and get educated.',
    options: [
      {
        text: 'Go to the Hub',
        nextText: 16
      }
    ]
  },
  {
    id: 10, //Kane Building
    text: '',
    options: [
      {
        text: '',
        nextText: 17
      },
      {
        text: '',
        nextText: 18
      },
      {
        text: '',
        nextText: 19
      },
      {
        text: '',
        nextText: 20
      }
    ]
  },
  {
    id: 11,
    text: '',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: '',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 13,
    text: '',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    text: '',
    options: [
      {
        text: '',
        nextText: -1
      }
    ]
  }
  ,{
    id:15,

  }
  ,
]

startGame()