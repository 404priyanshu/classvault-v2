export const capabilityLabels = [
  "Rated notes",
  "PDF search",
  "Verified universities",
  "Live study rooms",
  "Personal roadmaps",
  "Scoped communities",
] as const;

export const featureCards = [
  {
    id: "notes",
    title: "Know which note is worth opening.",
    description:
      "Search titles, subjects, and the text inside PDFs and images. Ratings and scope stay visible before every download.",
    detail: "Full-text search · 1–5 star ratings",
  },
  {
    id: "universities",
    title: "Your university, properly verified.",
    description:
      "College-email verification opens a private institution-wide space for notes, conversations, and study rooms.",
    detail: "One institution · one verified membership",
  },
  {
    id: "rooms",
    title: "Turn revision into a room.",
    description:
      "Video, audio, chat, a shared timer, and participant controls for focused sessions that end when the studying does.",
    detail: "Temporary by design",
  },
  {
    id: "roadmaps",
    title: "Move from material to momentum.",
    description:
      "Generate a phased plan with tasks, checklists, progress, and links back to the notes that shaped it.",
    detail: "Personalized · source-linked",
  },
] as const;

export const platformPanels = [
  {
    id: "discover",
    title: "Discover",
    shortTitle: "Search every page",
    description:
      "Find useful material across titles, tags, and extracted file text without searching an unscoped global pile.",
    image: "notes",
  },
  {
    id: "verify",
    title: "Verify",
    shortTitle: "Trust the source",
    description:
      "See whether a note is public or belongs to your verified university, then use weighted ratings to judge it.",
    image: "verify",
  },
  {
    id: "study",
    title: "Study",
    shortTitle: "Open a live room",
    description:
      "Bring classmates into a focused room with video, audio, chat, participant controls, and a synced timer.",
    image: "room",
  },
  {
    id: "plan",
    title: "Plan",
    shortTitle: "Build a roadmap",
    description:
      "Turn plan-eligible notes into an in-depth study path or exam revision sequence, with every source attached.",
    image: "roadmap",
  },
] as const;

export const studyFlow = [
  {
    title: "Find the signal",
    description:
      "Search the material itself, compare weighted ratings, and keep public and university notes in the right scope.",
    meta: "Search · scope · ratings",
  },
  {
    title: "Study in company",
    description:
      "Start a temporary room, invite classmates who have access, and keep the session moving with a shared timer.",
    meta: "Video · audio · chat · timer",
  },
  {
    title: "Leave with a route",
    description:
      "Generate a phased roadmap with estimated tasks, progress checkboxes, and source-note links you can revisit.",
    meta: "Phases · tasks · sources",
  },
] as const;

export const productPrinciples = [
  {
    quote: "I should know why a note is worth opening before I download it.",
    detail:
      "Ratings, rating volume, university scope, and subject context stay beside the result.",
    marker: "Trust before download",
  },
  {
    quote: "My university space should feel private without becoming another noisy feed.",
    detail:
      "Verification gates the institution, while lightweight conversations keep the focus on academic help.",
    marker: "Community without noise",
  },
  {
    quote: "A generated plan should show the material it learned from.",
    detail:
      "Roadmap phases retain source-note links and respect access rules when a plan is shared.",
    marker: "Personalization with sources",
  },
] as const;

export const planRows = [
  {
    feature: "Notes and communities",
    free: "Public and verified university access",
    pro: "Public and verified university access",
  },
  {
    feature: "Study roadmaps",
    free: "Limited generations from personal and public notes",
    pro: "Unlimited generations with university-note context",
  },
  {
    feature: "Study rooms",
    free: "Core rooms and host controls",
    pro: "Longer rooms, more capacity, advanced controls",
  },
  {
    feature: "Uploads and storage",
    free: "Essential limits",
    pro: "Expanded limits",
  },
] as const;
