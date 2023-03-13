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
      },
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
    text: 'The Hub is bustling with activity as always. People walk past, going to classes and meeting with friends.',
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
      },
      {
        text: "Go back outside",
        nextText: 5
      },
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
      },
      {
        text: "Look around",
        nextText: 16
      },
    ]
  },
  {
    id: 9,  //Boole Library
    text: 'The Boole Library is much quieter once you enter, having many students working on assignments.',
    options: [
      {
        text: 'Go upstairs',
        nextText: 17
      },
      {
        text: "Take the elevator",
        nextText: 18
      },
      {
        text: "Look around",
        nextText: 19
      },
      {
        text: "Go outside",
        nextText: 5
      },
    ]
  },
  {
    id: 10, //Kane Building
    text: 'Standing in front of the main reception, you see several hallways leading away from you to far corners of the huge building.',
    options: [
      {
        text: 'Look around',
        nextText: 22
      },
      {
        text: 'Go outside',
        nextText: 5
      },
      {
        text: 'Head to the labs',
        nextText: 23
      },
      {
        text: 'Go to the lockers',
        nextText: 24
      }
    ]
  },
  {
    id: 11, //C&S Hub
    text: 'The Clubs and Societies Hub is kept busy by the endless movement of staff and committee members.',
    options: [
      {
        text: 'Join a club',
        nextText: 25
      },
      {
        text: "Join a society",
        nextText: 26
      },
      {
        text: "Look around",
        nextText: 27
      },
      {
        text: "Look at the events",
        nextText: 28
      },
      {
        text: "Leave the clubs and socs hub",
        nextText: 7
      },
    ]
  },
  {
    id: 12,
    text: 'The Global lounge is a place of relaxation and concentration, offering comfortable seats to get work done or chat with friends.',
    options: [
      {
        text: 'Sit down',
        nextText: 29
      },
      {
        text: "Look around",
        nextText: 30
      },
      {
        text: "Leave the Global Lounge",
        nextText: 7
      },
      {
        text: "Go outside",
        nextText: 5
      },
    ]
  },
  {
    id: 13, //Hub description
    text: 'The Hub is a multi-purpose building, designed to be used for academic, extra-curricular, and social activities. There are classrooms, lecture theatres, seated areas and the Clubs and Societies Hub is also located here.',
    options: [
      {
        text: 'Go back',
        nextText: 7
      }
    ]
  },
  {
    id: 14, //Cafe
    text: "There's always food available to snack on during the day at a good price.",
    options: [
      {
        text: 'Get some food',
        nextText: 31
      },
      {
        text: "Get a drink",
        nextText: 32
      },
      {
        text: "Go to the till",
        nextText: 33
      },
      {
        text: "Leave the queue",
        nextText: 8
      },
      {
        text: "Look around",
        nextText: 34
      },
    ]
  }
  ,{
    id:15, //Upstairs
    text: "Upstairs, there's music playing at the new bar at all hours, and a Co-Op Society Town hall is starting in Devere Hall",
    options: [
      {
        text: "Go to the new bar",
        nextText: 35
      },
      {
        text: "Go to the town hall",
        nextText: 36
      },
      {
        text: "Look around",
        nextText: 54
      },
      {
        text: "Go downstairs",
        nextText: 8
      },
      ]
  },
  {
    id: 16, // Student Centre observation
    text: "Áras na Mac Léinn is a building at the heart of the campus, providing vital services to the students of UCC. You can get something to eat, check your balance at the Bank of Ireland UCC branch, get some UCC merch or get a drink at the new bar",
    nextText: 8
  },
  {
    id: 17, //Boole Library Floor 1 - Science, Engineering & Food Science
    text: "Boole Library - Floor 1. This floor holds the information related to science, engineering and food science. Come here to look for academic texts on the fields of science.",
    options: [
      {
        text: "Go up the stairs",
        nextText: 20
      },
      {
        text: "Go down the stairs",
        nextText: 9
      },
      {
        text: "Get in the elevator",
        nextText: 18
      },
      {
        text: "Look around",
        nextText: 38
      },
      {
        text: "Take a book",
        nextText: 39
      },
      ]
  },
  {
  id: 18, //Boole Library Elevator
  text: "You can go wherever you want when you're here, as long as the place you want to go is one of the floors in the Boole library",
  options: [
    {
        text: "Ground Floor",
        nextText: 9
      },
      {
        text: "Floor 1",
        nextText: 17
      },
      {
        text: "Floor 2",
        nextText: 20
      },
      {
        text: "Floor 3",
        nextText: 21
      },
    ]
  },
  {
    id: 19, //Boole library look
    text: "The Boole Library is one of the most central parts of the college, a huge labyrinth of study spaces and learning. Among the services here are printing, book loans, bookable study spaces, production studios, computers and UCC's very own nap pod!",
    nextText: 9
  },
  {
    id: 20, //Boole library Floor 2 - Business, Social Sciences, Law
    text: "Boole Library - Floor 2. This floor covers business, social sciences and law. Grab a book here to learn about the different aspects of society.",
    options: [
      {
        text: "Head to floor 3",
        nextText: 21
      },
      {
        text: "Go down to floor 1",
        nextText: 17
      },
      {
        text: "Call an elevator",
        nextText: 18
      },
      {
        text: "Look around",
        nextText: 40
      },
      {
        text: "Take a book",
        nextText: 41
      },
      ]
  },
  {
    id: 21, //Boole Library Floor 3 - Arts, Humanities, Multi-Media
    text: "Boole Library - Floor 3. This floor is home to the arts, humanities and multi-media information. Come here to study about the beautiful parts of life.",
    options: [
      {
        text: "Go downstairs",
        nextText: 20
      },
      {
        text: "Get into an elevator",
        nextText: 18
      },
      {
        text: "Take a look around",
        nextText: 42
      },
      {
        text: "Take a book out",
        nextText: 43
      },
      ]
  },
  {
    id: 22, //Kane building Observation
    text: "Long corridors stretch out in front of you, with parallel doors on either side opening into laboratories full of esteemed scientists and students.",
    nextText: 10
  },
  {
    id: 23, //Labs
    text: "In the labs, theories are being proven and science is being done",
    options: [
      {
        text: "Do some science",
        nextText: 44
      },
      {
        text: "Look around",
        nextText: 45
      },
      {
        text: "Leave the lab",
        nextText: 10
      },
      ]
  },
  {
    id: 24, //Lockers
    text: "The lockers of the Kane building hold many busy student's bulky necessities",
    options: [
      {
        text: "Open your locker",
        nextText: 46
      },
      {
        text: "Look at the lockers",
        nextText: 47
      },
      {
        text: "Leave the locker area",
        nextText: 10
      },
      ]
  },
  {
    id: 25, //Join club
    text: "You look at the options available to you, and think of what would be the best one for you",
    options: [
      {
        text: "Join the Dodgeball club",
        nextText: 11
      },
      {
        text: "Join the cycling club",
        nextText: 11
      },
      {
        text: "Join the ultimate frisbee club",
        nextText: 11
      },
      ]
  },
  {
    id: 26, //Join Society
    text: "",
    options: [
      {
        text: "Join WARPS",
        nextText: 11
      },
      {
        text: "Join netsoc",
        nextText: 11
      },
      {
        text: "Join Doctors without borders",
        nextText: 11
      },
      ]
  },
  {
    id: 27, //Clubs and socs look
    text: "The clubs and societies hub is the nexus of the best of what college represents. People from every club and society in every position moves about with purpose and bright outlooks.",
    nextText: 11
  },
  {
    id: 28, //Look at events
    text: "There are several events available posted on the electronic notice board. A couple of events are happening soon and do not have pre signups listed.",
    options: [
      {
        text: "Go to the dodgeball tournament",
        nextText: 48
      },
      {
        text: "Go to the scifi screening",
        nextText: 49
      },
      {
        text: "Stop looking at the events board",
        nextText: 11
      },
      ]
  },
  {
    id: 29, //Sit in Global Lounge
    text: "The air is temperate, and the not-so-quiet buzz of the hub is at a level where it's not drowning out everything.",
    options: [
      {
        text: "Do work",
        nextText: 50
      },
      {
        text: "Read a book",
        nextText: 51
      },
      {
        text: "Stand up",
        nextText: 12
      },
      ]
  },
  {
    id: 30, //Global lounge look
    text: "The Global lounge is a place to relax between classes or even on its own.",
    nextText: 12
  },
  {
    id: 31, //Get food
    text: "You pick up a tasty looking sandwich",
    nextText: 14
  },
  {
    id: 32, //Get drink
    text: "You grab a nice drink",
    nextText: 14
  },
  {
    id: 33, //purchase
    text:"You bought food! Congratulations, if you would like to continue, you can restart, or if you'd like to, you can leave feedback on the game. Thanks for playing =]",
    options: [
      {
        text: "Restart",
        nextText: -1
      },
      {
        text: "Leave a reply",
        // window.open('http://www.google.com','_blank')
      },
      ]
  },
  ]

startGame()