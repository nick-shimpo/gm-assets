window.GM_SCREEN_DATA = {
  meta: {
    campaignTitle: "Another Bug Hunt",
    sessionTitle: "Next Session"
  },

  truths: [
    { title: "Everything is changing" },
    { title: "No rescue is coming" },
    { title: "This will spread" }
  ],

  perils: [
    {
      id: "cure-is-lost",
      name: "The cure is lost",
      status: "Active",
      currentOmenIndex: 1,
      omens: [
        { text: "[Triggered] The cure has a name" },
        { text: "Signs of the cure" },
        { text: "[Undefined]" }
      ]
    },
    {
      id: "hinton-ascends",
      name: "Hinton ascends",
      status: "Active",
      currentOmenIndex: 1,
      omens: [
        { text: "[Triggered] He wasn’t where he was supposed to be" },
        { text: "He speaks their language" },
        { text: "[Undefined]" }
      ]
    },
    {
      id: "world-breathes-in",
      name: "The world breathes in",
      status: "Active",
      currentOmenIndex: 0,
      omens: [
        { text: "The wildlife came in" },
        { text: "Skin remembers" },
        { text: "The whispers start" }
      ]
    },
    {
      id: "dropship-leaves",
      name: "The dropship leaves without them",
      status: "Active",
      currentOmenIndex: 0,
      omens: [
        { text: "They’re doing math" },
        { text: "They’re spinning up" },
        { text: "Last call" }
      ]
    },
    {
      id: "tower-falls-silent",
      name: "The tower falls silent",
      status: "Active",
      currentOmenIndex: 0,
      omens: [
        { text: "Something wearing the wrong shape is sighted moving toward the control tower" },
        { text: "[Undefined]" },
        { text: "[Undefined]" }
      ]
    }
  ],

  entities: [
    { id: "carcinids", name: "Carcinids", descriptor: "alien swarm", want: "reproduce", thinksWith: "hunger" },
    { id: "the-mother", name: "The Mother", descriptor: "transformation engine", want: "transform", thinksWith: "instinct" },
    { id: "hinton", name: "Hinton", descriptor: "rogue android", want: "ascend", thinksWith: "curiosity" },
    { id: "shore", name: "Shore", descriptor: "sleeper android", want: "retrieve Hinton’s logic core", thinksWith: "programming" },
    { id: "mass", name: "Mass", descriptor: "company suit", want: "retrieve assets", thinksWith: "his ledger", location: "orbital company ship" },
    { id: "valdez", name: "Valdez", descriptor: "marine sergeant", want: "protect her people", thinksWith: "duty" },
    { id: "edom", name: "Dr. Edom", descriptor: "colony researcher", want: "understand", thinksWith: "wonder", status: "dead" },
    { id: "brookman", name: "Brookman", descriptor: "medic", want: "escape", thinksWith: "fear" },
    { id: "weaver", name: "Weaver", descriptor: "infected commando", want: "hide his secret", thinksWith: "desperation" }
  ],

  locations: [
    { id: "hangar", name: "Hangar" },
    { id: "stairwells", name: "Stairwells" },
    { id: "reactor", name: "Reactor" },
    { id: "lab", name: "Lab" },
    { id: "control-tower", name: "Control tower" },
    { id: "alien-ship", name: "Alien ship in the mountain" },
    { id: "dropship", name: "Dropship" }
  ],

  roster: {
    characters: [
      { id: "pc-bud", name: "Bud", type: "PC", role: "teamster" },
      { id: "pc-rick", name: "Rick", type: "PC", role: "marine" },
      { id: "pc-tandy", name: "Tandy", type: "PC", role: "scientist" },
      { id: "pc-willis", name: "Willis", type: "PC", role: "teamster" },
      { id: "npc-valdez", name: "Valdez", type: "NPC" },
      { id: "npc-hinton", name: "Hinton", type: "NPC" },
      { id: "npc-shore", name: "Shore", type: "NPC" },
      { id: "npc-mass", name: "Mass", type: "NPC" },
      { id: "npc-brookman", name: "Brookman", type: "NPC" },
      { id: "npc-weaver", name: "Weaver", type: "NPC" },
      { id: "npc-edom", name: "Dr. Edom", type: "NPC", status: "dead" }
    ],
    groups: [
      { id: "alpha", name: "Alpha" },
      { id: "bravo", name: "Bravo" }
    ]
  }
};
