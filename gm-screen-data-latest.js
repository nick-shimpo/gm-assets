/* =========================================================
   GM SCREEN — SESSION DATA
   ---------------------------------------------------------
   This file is loaded by GM Screen v2.html via:
       <script src="./gm-screen-data-latest.js"></script>

   To update for a new session, edit ONLY this file.
   Save and refresh the HTML — it will redraw itself.

   To wipe per-session state (omen positions, roster grouping,
   spotlight, notes), click "Reset session state" in the
   top right of the page.

   Field reference:

   meta:
     campaignTitle  string  — shown in the header
     sessionTitle   string  — used to namespace localStorage so
                              different sessions don't clobber state

   truths[]:
     title  string

   perils[]:
     id                string — stable id, used for storage
     name              string
     status?           string — small status badge
     currentOmenIndex  number — zero-based. Omens before this are
                                "past", at = "current", after = "future".
     omens[]:
       text   string  — Wrap in brackets like "[Triggered]" or
                        "[Undefined]" to render as a muted placeholder.
       note?  string  — small mono note shown next to the omen

   entities[]:
     id           string
     name         string
     descriptor   string  — italic subtitle ("alien swarm")
     want         string
     thinksWith   string
     status?      string  — small badge (e.g. "dead")
     location?    string  — short label shown in the head
     tags?        string[]

   locations[]:
     id      string
     name    string
     tags?   string[]
     notes?  string  — shown as title-tooltip on hover

   roster:
     characters[]:
       id      string
       name    string
       type    "PC" | "NPC"
       role?   string
       status? string
     groups[]:
       id     string
       name   string

   Optional fields may be omitted. Stable IDs let localStorage
   state (omen positions, spotlight, roster grouping, notes)
   carry across reloads.
   ========================================================= */

window.GM_SCREEN_DATA = {
  meta: {
    campaignTitle: "Another Bug Hunt",
    sessionTitle: "Session 01"
  },

  truths: [
    { title: "Everything is changing" },
    { title: "You will die here" },
    { title: "This will spread" }
  ],

  perils: [
    {
      id: "cure-is-lost",
      name: "The cure is lost",
      status: "Active",
      currentOmenIndex: 0,
      omens: [
        { text: "The cure has a name" },
        { text: "Signs of the cure" },
        { text: "[Undefined]" }
      ]
    },
    {
      id: "mimic-is-born",
      name: "The mimic is born",
      status: "Active",
      currentOmenIndex: 2,
      omens: [
        { text: "[Triggered]" },
        { text: "[Triggered]" },
        { text: "The radiation returns" }
      ]
    },
    {
      id: "hangar-falls",
      name: "The hangar falls",
      status: "Active",
      currentOmenIndex: 2,
      omens: [
        { text: "[Triggered]" },
        { text: "[Triggered]" },
        { text: "We’re out of time" }
      ]
    },
    {
      id: "hinton-ascends",
      name: "Hinton ascends",
      status: "Active",
      currentOmenIndex: 0,
      omens: [
        { text: "He wasn’t where he was supposed to be" },
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
    }
  ],

  entities: [
    {
      id: "carcinids",
      name: "Carcinids",
      descriptor: "alien swarm",
      want: "reproduce",
      thinksWith: "hunger"
    },
    {
      id: "the-mother",
      name: "The Mother",
      descriptor: "transformation engine",
      want: "transform",
      thinksWith: "instinct"
    },
    {
      id: "hinton",
      name: "Hinton",
      descriptor: "rogue android",
      want: "ascend",
      thinksWith: "curiosity"
    },
    {
      id: "shore",
      name: "Shore",
      descriptor: "sleeper android",
      want: "retrieve Hinton’s logic core",
      thinksWith: "programming"
    },
    {
      id: "maas",
      name: "Maas",
      descriptor: "company suit",
      want: "retrieve assets",
      thinksWith: "his ledger",
      location: "orbital company ship"
    },
    {
      id: "valdez",
      name: "Valdez",
      descriptor: "marine sergeant",
      want: "protect her people",
      thinksWith: "duty"
    },
    {
      id: "edom",
      name: "Dr. Edom",
      descriptor: "colony researcher",
      want: "understand",
      thinksWith: "wonder",
      status: "dead"
    },
    {
      id: "brookman",
      name: "Brookman",
      descriptor: "medic",
      want: "escape",
      thinksWith: "fear"
    },
    {
      id: "weaver",
      name: "Weaver",
      descriptor: "infected commando",
      want: "hide his secret",
      thinksWith: "desperation"
    }
  ],

  locations: [
    { id: "hangar",     name: "Hangar" },
    { id: "stairwells", name: "Stairwells" },
    { id: "reactor",    name: "Reactor" },
    { id: "lab",        name: "Lab" },
    { id: "alien-ship", name: "Alien ship in the mountain" },
    { id: "dropship",   name: "Dropship" }
  ],

  roster: {
    characters: [
      { id: "pc-bud",       name: "Bud",     type: "PC",  role: "teamster" },
      { id: "pc-rick",      name: "Rick",    type: "PC",  role: "marine" },
      { id: "pc-tandy",     name: "Tandy",   type: "PC",  role: "scientist" },
      { id: "pc-willis",    name: "Willis",  type: "PC",  role: "teamster" },
      { id: "npc-valdez",   name: "Valdez",   type: "NPC" },
      { id: "npc-hinton",   name: "Hinton",   type: "NPC" },
      { id: "npc-shore",    name: "Shore",    type: "NPC" },
      { id: "npc-maas",     name: "Maas",     type: "NPC" },
      { id: "npc-brookman", name: "Brookman", type: "NPC" },
      { id: "npc-weaver",   name: "Weaver",   type: "NPC" },
      { id: "npc-edom",     name: "Dr. Edom", type: "NPC", status: "dead" }
    ],
    groups: [
      { id: "alpha", name: "Alpha" },
      { id: "bravo", name: "Bravo" }
    ]
  }
};
