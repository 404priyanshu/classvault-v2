// Illustrative product vignettes. Numbers inside mock UI are sample data,
// clearly presented as product previews — never page-level claims.

export const noteRows = [
  {
    entry: "042",
    title: "Operating Systems — Unit 3",
    subject: "Operating Systems",
    scope: "VIT Vellore",
    rating: 5,
    label: "4.9",
  },
  {
    entry: "043",
    title: "Data Structures — Complete Notes",
    subject: "Data Structures",
    scope: "Public",
    rating: 5,
    label: "4.8",
  },
  {
    entry: "044",
    title: "DBMS — Exam Revision Pack",
    subject: "DBMS",
    scope: "VIT Vellore",
    rating: 4,
    label: "4.7",
  },
] as const;

export const trustMechanics = [
  {
    step: "1",
    title: "Every note is scoped before it's seen",
    description:
      "A note belongs to the public community or to one verified university — never both, never ambiguous. You always know where material came from before you open it.",
  },
  {
    step: "2",
    title: "Classmates rate what they actually used",
    description:
      "Ratings come from students with real access to the note's community — one to five stars, revisable, tied to the file itself.",
  },
  {
    step: "3",
    title: "Rankings resist gaming",
    description:
      "A note with three perfect ratings doesn't outrank one trusted by a whole class. Weighting considers count and recency, not just the average.",
  },
  {
    step: "4",
    title: "Universities are verified, not self-declared",
    description:
      "Joining a university community requires proving control of a college email on that institution's allowlisted domain. No screenshots, no honor system.",
  },
] as const;

export const roadmapSteps = [
  { title: "Core concepts", detail: "Processes, threads, and states", done: true },
  { title: "Scheduling", detail: "Algorithms and solved examples", done: true },
  { title: "Memory", detail: "Paging, segmentation, and practice", done: false },
  { title: "Exam revision", detail: "High-weight questions and recall", done: false },
] as const;

export const planRows = [
  {
    feature: "Find and download notes",
    free: "Public + your university",
    pro: "Public + your university",
  },
  {
    feature: "Create study roadmaps",
    free: "Limited generations",
    pro: "Unlimited, fair-use",
  },
  {
    feature: "Host study rooms",
    free: "Core room controls",
    pro: "Longer rooms + host tools",
  },
  {
    feature: "Uploads and storage",
    free: "Essential limits",
    pro: "Expanded limits",
  },
] as const;

export const faqs = [
  {
    question: "Who is ClassVault for?",
    answer:
      "Indian college students who want better study material, focused peer sessions, and a clearer exam plan — without another noisy social feed.",
  },
  {
    question: "Do I need a college email?",
    answer:
      "Not for the public community. A verified college email is only required for university-specific notes, conversations, and study rooms.",
  },
  {
    question: "What if my university isn't covered?",
    answer:
      "Request it. Send your university's name, website, and official email domain — we review and add institutions to the verified list before launch and after.",
  },
  {
    question: "Can I download the notes I find?",
    answer:
      "Yes. If you can access a note's public or university scope, you can view and download the original PDF or image file.",
  },
  {
    question: "What will Pro add?",
    answer:
      "Pro expands uploads and storage, unlocks community-powered roadmaps, and gives study-room hosts longer sessions and stronger controls. University access itself is never paid.",
  },
] as const;
