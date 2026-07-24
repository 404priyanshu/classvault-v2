"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { OnboardingSaveResult } from "@/lib/onboarding-action-state";
import { onboardingDataSchema } from "@/lib/onboarding";
import { createProfileInsert } from "@/lib/profile";
import { createClient } from "@/lib/supabase/server";

export async function saveOnboardingProfile(
  input: unknown,
): Promise<OnboardingSaveResult> {
  const result = onboardingDataSchema.safeParse(input);
  if (!result.success) {
    return {
      success: false,
      message: "Some setup details are invalid. Review the form and try again.",
    };
  }

  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) redirect("/login?next=%2Fonboarding");

  const { error } = await supabase
    .from("profiles")
    .upsert(createProfileInsert(user.id, result.data), { onConflict: "user_id" });

  if (error) {
    console.error("Unable to save onboarding profile", {
      code: error.code,
      details: error.details,
    });
    return {
      success: false,
      message: "We couldn’t save your profile. Please try again in a moment.",
    };
  }

  revalidatePath("/dashboard");
  revalidatePath("/onboarding");
  redirect("/dashboard");
}
