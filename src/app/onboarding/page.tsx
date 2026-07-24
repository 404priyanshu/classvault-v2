import type { Metadata } from "next";
import type { ReactElement } from "react";
import { redirect } from "next/navigation";
import { OnboardingFlow } from "@/components/onboarding/onboarding-flow";
import { profileSelectColumns } from "@/lib/profile";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Set up your ClassVault",
  description:
    "Tell ClassVault what and where you study so your notes, rooms, and roadmaps start in the right place.",
};

export default async function OnboardingPage(): Promise<ReactElement> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login?next=%2Fonboarding");

  const { data: profile, error } = await supabase
    .from("profiles")
    .select(profileSelectColumns)
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) throw new Error("Unable to load your onboarding status.");
  if (profile) redirect("/dashboard");

  return <OnboardingFlow />;
}
