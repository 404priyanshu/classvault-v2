import type { Metadata } from "next";
import type { ReactElement } from "react";
import { AuthShell } from "@/components/auth/auth-shell";
import { getSafeNextPath } from "@/lib/auth/redirects";

export const metadata: Metadata = {
  title: "Sign in | ClassVault",
  description: "Sign in to your ClassVault account.",
};

type LoginPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function getFirstValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function LoginPage({ searchParams }: LoginPageProps): Promise<ReactElement> {
  const params = await searchParams;
  const error = getFirstValue(params.error);
  const notice = getFirstValue(params.notice);
  const nextPath = getSafeNextPath(getFirstValue(params.next) ?? null, "/dashboard");
  const pageMessage = error
    ? {
        tone: "error" as const,
        text:
          error === "oauth-start"
            ? "Google sign-in could not be started. Please try again."
            : "That sign-in link is invalid or has expired. Please try again.",
      }
    : notice === "signed-out"
      ? { tone: "success" as const, text: "You’ve been signed out securely." }
      : undefined;

  return <AuthShell mode="login" nextPath={nextPath} pageMessage={pageMessage} />;
}
