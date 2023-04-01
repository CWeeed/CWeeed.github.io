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
    text: "You wake up under a canopy. Getting up, you find yourself standing in the president's garden among the grass. Looking at the leaves, you can see light filtering through the tree by the warm afternoon sun. The President's garden is a beautiful arrangement of flowers, trees and grassland situated next to The Quad in UCC's main campus. The garden was closed by high walls, only allowing use by the president until the 1960's. Now, it's an open space for anyone to enjoy. You head to the hub. The Hub is bustling with activity as always. People walk past, going to classes and meeting with friends. The clubs and societies hub is the nexus of the best of what college represents. People from every club and society in every position moves about with purpose and bright outlooks. Heading out, you go to the Boole Library next. The Boole Library is much quieter once you enter, having many students working on assignments. The Boole Library is one of the most central parts of the college, a huge labyrinth of study spaces and learning. Among the services here are printing, book loans, bookable study spaces, production studios, computers and UCC's very own nap pod! Going up the stairs, you pass each floor; Boole Library - Floor 1. This floor holds the information related to science, engineering and food science. Come here to look for academic texts on the fields of science. Boole Library - Floor 2. This floor covers business, social sciences and law. Grab a book here to learn about the different aspects of society. Boole Library - Floor 3. This floor is home to the arts, humanities and multi-media information. Come here to study about the beautiful parts of life. You retrieve a book that you have been interested in reading and check it out. Heading out, you feel hungry, so you walk towards the student centre. Arriving at the Student Centre, the cafe is open, and there's commotion upstairs, from the new bar, and an event in Devere Hall. Áras na Mac Léinn is a building at the heart of the campus, providing vital services to the students of UCC. You can get something to eat, check your balance at the Bank of Ireland UCC branch, get some UCC merch or get a drink at the new bar. At the café, there's always food available to snack on during the day at a good price. Upstairs, there's music playing at the new bar at all hours, and a Co-Op Society Town Hall is starting in Devere Hall.Devere Hall is a large common room designed for a large number of uses. One of those uses is hosting a town Hall event for the UCC Co-Op society, which is currently taking place. The new bar, titled 'Club Áras', serves as a meeting place for an uncountable number of students, serving hot food and cold drinks until late weekdays. Deciding against either option, you leave the student centre and go to the Kane building. Standing in front of the main reception, you see several hallways leading away from you to far corners of the huge building. The Kane building, previously called the science building, is full of labs, equipment and esteemed scientists.",
    options: [
    {
      text: 'Restart',
      nextText: -1
    }
    ]
},
{
    id: 3,  //Beginning
    text: 'Welcome to \'A walk around UCC\', a small game that lets you explore around the main campus of University College Cork and learn about the college and its history.\nYou wake up, and find yourself staring up at a tree\'s branches.',
    options: [
      {
        text: 'Get up',
        nextText: 5
      },
      {
        text: 'Exit',
        nextText: 0
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
    text: "The President's garden is a beautiful arrangement of flowers, trees and grassland situated next to The Quad in UCC's main campus. The garden was closed by high walls, only allowing use by the president until the 1960's. Now, it's an open space for anyone to enjoy.",
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
    text: 'The Hub is a new multi-purpose building, designed to be used for academic, extra-curricular, and social activities. There are classrooms, lecture theatres, seated areas and the Clubs and Societies Hub is also located here.',
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
        setState: { food: true },
        nextText: 31,
      },
      {
        text: "Get a drink",
        setState: {food: true},
        nextText: 32,
      },
      {
        text: "Go to the till",
        requiredState: (currentState) => currentState.food,
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
    text: "Upstairs, there's music playing at the new bar at all hours, and a Co-Op Society Town Hall is starting in Devere Hall",
    options: [
      {
        text: "Go to the new bar",
        nextText: 35
      },
      {
        text: "Go to the Town Hall",
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
    options: [
      {
      text: "Go back",
      nextText: 8,
      },
      ]
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
        setState: { booleBook: true},
        nextText: 39,
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
    options: [
      {
      text: "Go back",
      nextText: 9,
      },
      ]
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
        text: "Learn about the Boole Library",
        nextText: 40
      },
      {
        text: "Take a book",
        setState: {booleBook: true},
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
        text: "Learn about the Boole Library",
        nextText: 42
      },
      {
        text: "Take a book out",
        setState: {booleBook: true},
        nextText: 43
      },
      ]
  },
  {
    id: 22, //Kane building Observation
    text: "The Kane building, previously called the science building, is full of labs, equipment and esteemed scientists.",
    options: [
      {
      text: "Go back",
      nextText: 10,
      },
      ]
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
    options: [
      {
      text: "Go back",
      nextText: 11,
      },
      ]
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
        requiredState: (currentState) => currentState.booleBook,
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
    options: [
      {
      text: "Go back",
      nextText: 12,
      },
      ]
  },
  {
    id: 31, //Get food
    text: "You pick up a tasty looking sandwich",
    options: [
      {
      text: "Yum",
      nextText: 14,
      },
      ]
  },
  {
    id: 32, //Get drink
    text: "You grab a nice drink",
    options: [
      {
      text: "Yum",
      nextText: 14,
      },
      ]
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
        nextText: 64,
      },
      ]
  },
  {
    id: 34, //Cafe look
    text: "Sandwiches, wraps and pastries sit in fridges and on counters, waiting to be picked up. A line is present along the side of the cafe, leading to a till where people are purchasing their food.",
    options: [
      {
        text: "Go back",
        nextText:14,
      },
      ]
  },
  {
    id: 35, //Go to new bar
    text: "Club Áras serves as a meeting place for an uncountable number of students, serving hot food and cold drinks until late weekdays.",
    options: [
      {
      text: "Sit down at a table",
      nextText: 52,
      },
      {
      text: "Go to the bar",
      nextText: 53,
      },
      {
      text: "Leave the New Bar",
      nextText: 15,
      },
      {
      text: "Look around",
      nextText: 54,
      },
    ]
  },
  {
    id: 36, //Go to devere hall
    text: "Devere Hall is a large common room designed for a large number of uses. One of those uses is hosting a Town Hall event for the UCC Co-Op society, which is currently taking place.",
    options: [
      {
      text: "Attend the Co-Op Society event",
      nextText: 55,
      },
      {
      text: "Look around at the Hall",
      nextText: 56,
      },
      {
      text: "Leave Devere Hall",
      nextText: 15,
      },
    ]
  },
  {
    id: 37, //Upstairs look
    text: "The Student centre features truly massive windows, which allow students on the second floor to see far from the building.",
    options: [
      {
      text: "Cool",
      nextText: 15,
      },
    ]
  },
  {
    id: 38, //Boole f1 look
    text: "Boole library, named after the mathematician, philosopher and logician George Boole, is home to UCC's largest store of information.",
    options: [
      {
      text: "Nice",
      nextText: 17,
      },
    ]
  },
  {
    id: 39, //Boole f1 take book
    text: "You check out a book for one of your classes.",
    options: [
      {
      text: "Neat",
      nextText: 17,
      },
      ]
  },
  {
    id: 40, //Boole f2 look
    text: "The main building of Boole Library was built in 1983, after having been dubbed The Boole Library a year before.",
    options: [
      {
      text: "Interesting",
      nextText: 20,
      },
      ]
  },
  {
    id: 41, //Boole f2 take book
    text: "You take a book that looks interesting",
    options: [
      {
      text: "Perfect",
      nextText: 20,
      },
      ]
  },
  {
    id: 42, //Boole f3 look
    text: "The Post-Graduate Research Library of Boole Library was built in 2008 to assist students in further study.",
    options: [
      {
      text: "Fascinating",
      nextText: 21,
      },
      ]
  },
  {
    id: 43, //Boole f3 take book
    text: "You retrieve a book that you have been interested in reading and check it out.",
    options: [
      {
      text: "Awesome",
      nextText: 21,
      },
      ]
  },
  {
    id: 44, //Kane building science
    text: "You do science so good that they say you never need to do science ever again. You are escorted out of the lab. Congratulations! You got the Science Ending. You can play again or leave a reply to let me know what you thought.",
    options: [
      {
      text: "Restart",
      nextText: -1,
      },
      {
      text: "Leave a reply",
      nextText: 64,
      },
      ]
  },
  {
    id: 45, //Kane building lab look
    text: "The Kane building was originally called the science building, and was only renamed in 1997 after the first president of Queen's College Cork, Sir Robert Kane.",
    options: [
      {
      text: "Hats off to you rob",
      nextText: 10,
      },
      ]
  },
  {
    id: 46, //Kane lockers open
    text: "You open your locker and see your spare change of clothes for exercise.",
    options: [
      {
      text: "Change clothes",
      nextText: 57,
      },
      {
      text: "Close your locker",
      nextText: 24,
      },
      ]
  },
  {
    id: 47, //Kane building lockers look
    text: "The lockers are a secure place to store things that you cannot easily carry with you from day to day. A locker must be obtained by applying online.",
    options: [
      {
      text: "Understandable",
      nextText: 24,
      },
      ]
  },
  {
    id: 48, //s&c events: dodgeball
    text: "The dodgeball tournament is tough, but you're tougher. There were highs and there were lows, to the point where you thought you would be beaten. The teams were assigned randomly, but by the end, you lead your team to victory and earned their trust and made lifetime friends.",
    options: [
      {
      text: "Hooray",
      nextText: 58,
      },
      ]
  },
  {
    id: 49, //s&c events: scifi
    text: "A huge crowd gathers outside of Boole 6 to watch the scifi screening of Rick and Morty. You remembered to bring your reusable cup and enjoy free tea before the event starts.",
    options: [
      {
      text: "I tried to put the rick and morty copy-paste here, but it filled the screen",
      nextText: 59,
      },
      ]
  },
  {
    id: 50, //Hub lounge work
    text: "You put your headphones on and finish your next assignment.",
    options: [
      {
      text: "Watch the confetti on canvas",
      nextText: 60,
      },
      ]
  },
  {
    id: 51, //Hub lounge read
    text: "You take the time to read one of the books you have with you.",
    options: [
      {
      text: "Turn the pages",
      nextText: 66,
      },
      ]
  },
  {
    id: 52, //New bar sit
    text: "You sit down in one of the booths of the new bar, and pass some time chatting to friends and eating good food.",
    options: [
      {
      text: "Order some drinks",
      nextText: 61,
      },
      ]
  },
  {
    id: 53, //New bar go to bar
    text: "You approach a bartender and order one of your favourite drinks: a strawberry daiquiri.",
    options: [
      {
      text: "Delicious",
      nextText: 61,
      },
      ]
  },
  {
    id: 54, //New bar look
    text: "The New Bar, along with the Nom Nom Bistro, serve as a licensed bar inside the UCC premises. It is named the New Bar after the Old Bar was converted into a quiet space for students with autism to rest in, called the Quiet Zone.",
    options: [
      {
      text: "Cool",
      nextText: 35,
      },
      ]
  },
  {
    id: 55, //Devere hall attend event
    text: "Joining the Town Hall, several topics are presented. Each topic is addressed and each person who wants to speak on that topic is given the time to. You speak once when the topic moves to the student housing Co-Op. As the Town Hall concludes, you find a renewed sense of community",
    options: [
      {
      text: "Awesome",
      nextText: 62,
      },
      ]
  },
  {
    id: 56, //Devere hall look
    text: "Looking through the wide double doors, you see a high roof and a huge expanse of floor, taken up partially with collapsable tables and chairs. The modularity of the hall serves it well, and its use in events and conventions make it one of the most popular venues.",
    options: [
      {
      text: "Ooh",
      nextText: 36,
      },
      ]
  },
  {
    id: 57, //Locker clothes
    text: "Taking out your spare change of clothes, you change into a tracksuit for exercise.",
    options: [
      {
      text: "We go gym",
      nextText: 63,
      },
      ]
  },
  {
    id: 58, //Dodgeball ending
    text: "Having become the champion of the UCC Dodgeball club, you are famed for the rest of your time in UCC and are remembered in the annals of history. Congratulations! You got the Dodgeball ending. You can play again, or leave a reply to let me know what you think.",
    options: [
      {
      text: "Restart",
      nextText: -1,
      },
      {
        text: "Leave a reply",
        nextText: 64,
      },
      ]
  },
  {
    id: 59, //scifi ending
    text: "After laughing yourself to tears, the screening ends, and you leave the lecture theatre. Congratulations! You got the Sci-Fi ending. You can play again or leave a reply to let me know what you think.",
    options: [
      {
      text: "Restart",
      nextText: -1,
      },
      {
        text: "Leave a reply",
        nextText: 64,
      },
      ]
  },
  {
    id: 60, //Hub ending
    text: "After a while, you look up and see that the sky has gone dark. You pack your things and leave the hub, happy with the work you did there.",
    options: [
      {
      text: "Restart",
      nextText: -1,
      },
      {
        text: "Leave a reply",
        nextText: 64,
      },
      ]
  },
  {
    id: 61, //New bar ending
    text: "As the hours pass, it's time for you to head home. You fall into your bed and have a good night's rest, not knowing the headache you'll have the next morning. Congratulations! You got the New Bar Ending. You can play again or leave a reply and let me know what you think.",
    options: [
      {
      text: "Restart",
      nextText: -1,
      },
      {
        text: "Leave a reply",
        nextText: 64,
      },
      ]
  },
  {
    id: 62, //Devere hall ending
    text: "Congratulations! You got the Co-Op ending. You can play again or leave a reply to let me know what you thought.",
    options: [
      {
      text: "Restart",
      nextText: -1,
      },
      {
        text: "Leave a reply",
        nextText: 64,
      },
      ]
  },
  {
    id: 63, //Locker ending
    text: "It's an eight minute walk to the Mardyke Arena, where you pump iron and run on the treadmill all day. Congratulations! You got the Gym ending. You can play again or leave a reply and let me know what you thought.",
    options: [
      {
      text: "Restart",
      nextText: -1,
      },
      {
        text: "Leave a reply",
        nextText: 64,
      },
      ]
  },
  {
    id: 64, //Leave a reply
    text: "Thanks for sending feedback. You can go to t-h-e-reef.org/dhgame to leave a message. Have a good day!",
    options: [
      {
      text: "Restart",
      nextText: -1,
      },
      ]
  },
  {
    id: 65, //Join club/soc
    text: "Congratulations, you're a member! You'll be updated on all the newest events, and can enjoy everything ucc has to offer!",
    options: [
    {
      text: "Hooray!",
      nextText: 11,
    },
    {
      id: 66, //Secret ending
      text: "You got the secret ending, congratulations! You can play again, or leave a reply to let me know what you thought.\nThanks for playing!",
      options: [
      {
        text: "Leave reply",
        nextText: 64,
      },
      {
        text: "Restart",
        nextText: -1,
      },
      ]
    },
    ]
  }
  ]

startGame()