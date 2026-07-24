import type { Metadata } from "next";
import type { ReactElement } from "react";
import { AuthShell } from "@/components/auth/auth-shell";

export const metadata: Metadata = {
  title: "Create account | ClassVault",
  description: "Create your ClassVault account with Google or email and password.",
};

type SignupPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function SignupPage({ searchParams }: SignupPageProps): Promise<ReactElement> {
  const params = await searchParams;
  const rawError = params.error;
  const error = Array.isArray(rawError) ? rawError[0] : rawError;
  const pageMessage =
    error === "oauth-start"
      ? {
          tone: "error" as const,
          text: "Google signup could not be started. Please try again.",
        }
      : undefined;

  return (
    <AuthShell
      mode="signup"
      nextPath="/onboarding"
      pageMessage={pageMessage}
    />
  );
}
