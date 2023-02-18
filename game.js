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
    id:1, 
    text: "What mode would you like?",
    options: [
    {
      text: "Game",
      nextText: 2
    },
    {
      text: "Text",
      nextText: 13
    }
    ]
},
  {
    id: 2,
    text: 'You wake up under a canopy. What would you like to do?',
    options: [
      {
        text: 'Get up',
        nextText: 3
      },
      {
        text: 'Look at the leaves',
        nextText: 12
      }
    ]
  }
  ,{
    id: 3,
    text: "You find yourself in the President's garden in UCC, among the various plants that reside there.",
    options: [
      {
        text: 'Head to the Hub',
        nextText: 4
      },
      {
        text: 'Check what classes you have',
        nextText: 5
      },
      {
        text: 'Go home',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'The Hub is bustling with activity. ',
    options: [
      {
        text: 'Explore the castle',
        nextText: 4
      },
      {
        text: 'Find a room to sleep at in the town',
        nextText: 5
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    text: 'You see that there is a class about to start',
    options: [
      {
        text: 'Go to class',
        nextText: 7
      }
      ,{
        text: "Skip class",
        nextText: 8
      }
    ]
  },
  {
    id: 6,
    text: 'You go home and have a nice nap.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'You go to class and get educated.',
    options: [
      {
        text: 'Go to the Hub',
        nextText: 4
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
  ,{
    id:12,
    text: 'Looking at the leaves, you can see light filtering through the tree by the warm afternoon sun. It looks like the end of summer, and the green leaves are beginning to turn brown.',
    nextText: -1
  }
  ,{
    id: 13,
    text: "You wake up under a canopy. Getting up, you find yourself standing in the president's garden among the grass. Looking at the leaves, you can see light filtering through the tree by the warm afternoon sun."
  }
]

startGame()