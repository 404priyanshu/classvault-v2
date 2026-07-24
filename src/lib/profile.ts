import { onboardingDataSchema } from "@/lib/onboarding";
import type { OnboardingData } from "@/lib/onboarding";
import type { ProfileInsert, ProfileRow } from "@/lib/supabase/database.types";

export type StudentProfile = OnboardingData & {
  userId: string;
};

export const profileSelectColumns =
  "user_id, display_name, study_stage, university_name, college_email, subjects, primary_goal, study_approach, onboarding_completed_at, created_at, updated_at";

export function mapProfileRow(row: ProfileRow): StudentProfile {
  const profile = onboardingDataSchema.parse({
    displayName: row.display_name,
    studyStage: row.study_stage,
    universityName: row.university_name,
    collegeEmail: row.college_email ?? "",
    subjects: row.subjects,
    primaryGoal: row.primary_goal,
    studyApproach: row.study_approach,
  });

  return { userId: row.user_id, ...profile };
}

export function createProfileInsert(
  userId: string,
  onboardingData: OnboardingData,
): ProfileInsert {
  const profile = onboardingDataSchema.parse(onboardingData);

  return {
    user_id: userId,
    display_name: profile.displayName,
    study_stage: profile.studyStage,
    university_name: profile.universityName,
    college_email: profile.collegeEmail || null,
    subjects: profile.subjects,
    primary_goal: profile.primaryGoal,
    study_approach: profile.studyApproach,
    onboarding_completed_at: new Date().toISOString(),
  };
}
