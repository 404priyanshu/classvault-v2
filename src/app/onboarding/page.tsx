import type { Metadata } from "next";
import type { ReactElement } from "react";
import { OnboardingFlow } from "@/components/onboarding/onboarding-flow";

export const metadata: Metadata = {
  title: "Set up your ClassVault",
  description:
    "Tell ClassVault what and where you study so your notes, rooms, and roadmaps start in the right place.",
};

export default function OnboardingPage(): ReactElement {
  return <OnboardingFlow />;
}
