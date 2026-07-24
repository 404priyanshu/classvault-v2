import { z } from "zod";

export const studyStages = [
  "First year",
  "Second year",
  "Third year",
  "Fourth year or later",
  "Postgraduate",
] as const;

export const studyApproaches = [
  {
    value: "exam-revision",
    label: "Exam revision",
    description: "Prioritize high-weight topics and quick recall.",
  },
  {
    value: "concept-mastery",
    label: "Concept mastery",
    description: "Build a deeper understanding, one topic at a time.",
  },
  {
    value: "balanced",
    label: "A bit of both",
    description: "Mix clear explanations with exam-ready practice.",
  },
] as const;

export const primaryGoals = [
  { value: "find-notes", label: "Find trusted notes" },
  { value: "build-roadmap", label: "Build a study roadmap" },
  { value: "study-together", label: "Study with classmates" },
  { value: "share-notes", label: "Share my notes" },
] as const;

const collegeEmailSchema = z
  .string()
  .trim()
  .max(254, "Email must be 254 characters or fewer.")
  .refine(
    (email) => email.length === 0 || z.email().safeParse(email).success,
    "Enter a valid college email or leave this blank.",
  );

export const onboardingDataSchema = z.object({
  displayName: z
    .string()
    .trim()
    .min(2, "Use at least 2 characters.")
    .max(40, "Keep your display name under 40 characters."),
  studyStage: z.enum(studyStages, {
    error: "Choose where you are in your studies.",
  }),
  universityName: z
    .string()
    .trim()
    .min(2, "Enter your university name.")
    .max(120, "Keep the university name under 120 characters."),
  collegeEmail: collegeEmailSchema,
  subjects: z
    .array(
      z
        .string()
        .trim()
        .min(2, "Subject names need at least 2 characters.")
        .max(40, "Keep each subject under 40 characters."),
    )
    .min(1, "Add at least one subject.")
    .max(6, "Choose up to 6 subjects for now."),
  primaryGoal: z.enum(
    primaryGoals.map((goal) => goal.value) as [
      (typeof primaryGoals)[number]["value"],
      ...(typeof primaryGoals)[number]["value"][],
    ],
    { error: "Choose what you want to do first." },
  ),
  studyApproach: z.enum(
    studyApproaches.map((approach) => approach.value) as [
      (typeof studyApproaches)[number]["value"],
      ...(typeof studyApproaches)[number]["value"][],
    ],
    { error: "Choose a study approach." },
  ),
});

export type OnboardingData = z.infer<typeof onboardingDataSchema>;

export const onboardingDefaultValues: OnboardingData = {
  displayName: "",
  studyStage: "First year",
  universityName: "",
  collegeEmail: "",
  subjects: [],
  primaryGoal: "find-notes",
  studyApproach: "balanced",
};
