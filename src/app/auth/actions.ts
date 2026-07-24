"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import type { AuthActionState } from "@/lib/auth/action-state";
import { getAuthCallbackPath, getSafeNextPath } from "@/lib/auth/redirects";
import { getSiteOrigin } from "@/lib/auth/site-url";
import { createClient } from "@/lib/supabase/server";

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .pipe(z.email("Enter a valid email address."));

const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Enter your password."),
});

const signupSchema = z.object({
  email: emailSchema,
  password: z
    .string()
    .min(8, "Use at least 8 characters.")
    .max(72, "Use no more than 72 characters."),
});

function getStringValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

async function getRequestOrigin(): Promise<string> {
  const requestHeaders = await headers();
  return getSiteOrigin(requestHeaders.get("origin"));
}

function getFieldErrors(error: z.ZodError): AuthActionState["fieldErrors"] {
  return {
    email: error.issues
      .filter((issue) => issue.path[0] === "email")
      .map((issue) => issue.message),
    password: error.issues
      .filter((issue) => issue.path[0] === "password")
      .map((issue) => issue.message),
  };
}

function getSignupErrorMessage(code: string | undefined): string {
  if (code === "over_email_send_rate_limit") {
    return "Too many confirmation emails were requested. Please wait and try again.";
  }
  if (code === "weak_password") {
    return "Choose a stronger password with a mix of letters, numbers, and symbols.";
  }
  return "We couldn’t create your account. Please try again.";
}

export async function signUpWithPassword(
  _previousState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const result = signupSchema.safeParse({
    email: getStringValue(formData, "email"),
    password: getStringValue(formData, "password"),
  });

  if (!result.success) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors: getFieldErrors(result.error),
    };
  }

  const supabase = await createClient();
  const origin = await getRequestOrigin();
  const callbackPath = getAuthCallbackPath("/onboarding");
  const { data, error } = await supabase.auth.signUp({
    ...result.data,
    options: { emailRedirectTo: `${origin}${callbackPath}` },
  });

  if (error) {
    return { status: "error", message: getSignupErrorMessage(error.code) };
  }

  if (data.session) redirect("/onboarding");

  return {
    status: "success",
    message:
      "Check your inbox for a confirmation link. You can finish setting up ClassVault after confirming your email.",
  };
}

export async function signInWithPassword(
  _previousState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const result = loginSchema.safeParse({
    email: getStringValue(formData, "email"),
    password: getStringValue(formData, "password"),
  });

  if (!result.success) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors: getFieldErrors(result.error),
    };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(result.data);

  if (error) {
    return {
      status: "error",
      message: "The email or password is incorrect. Please try again.",
    };
  }

  redirect(getSafeNextPath(getStringValue(formData, "next"), "/dashboard"));
}

export async function signOut(): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("Unable to sign out. Please try again.");
  redirect("/login?notice=signed-out");
}
