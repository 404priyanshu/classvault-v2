"use client";

import { useActionState, useState } from "react";
import type { ReactElement } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  EnvelopeSimple,
  Eye,
  EyeSlash,
  LockKey,
  WarningCircle,
} from "@phosphor-icons/react";
import { signInWithPassword, signUpWithPassword } from "@/app/auth/actions";
import { initialAuthActionState } from "@/lib/auth/action-state";

type AuthMode = "login" | "signup";

type AuthFormProps = {
  mode: AuthMode;
  nextPath: string;
  pageMessage?: {
    tone: "error" | "success";
    text: string;
  };
};

function FieldError({ id, messages }: { id: string; messages?: string[] }): ReactElement | null {
  if (!messages?.length) return null;
  return (
    <p id={id} className="mt-2 text-sm font-semibold text-[#ffb4aa]" role="alert">
      {messages[0]}
    </p>
  );
}

function StatusMessage({
  tone,
  children,
}: {
  tone: "error" | "success";
  children: string;
}): ReactElement {
  const Icon = tone === "success" ? CheckCircle : WarningCircle;
  return (
    <div
      className={`flex gap-3 rounded-xl border px-4 py-3 text-sm leading-6 ${
        tone === "success"
          ? "border-[#c7ff72]/25 bg-[#c7ff72]/10 text-[#dfffb0]"
          : "border-[#ff776d]/25 bg-[#ff776d]/10 text-[#ffd2cd]"
      }`}
      role={tone === "error" ? "alert" : "status"}
    >
      <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0" weight="fill" />
      <p>{children}</p>
    </div>
  );
}

export function AuthForm({ mode, nextPath, pageMessage }: AuthFormProps): ReactElement {
  const isSignup = mode === "signup";
  const action = isSignup ? signUpWithPassword : signInWithPassword;
  const [state, formAction, isPending] = useActionState(
    action,
    initialAuthActionState,
  );
  const [passwordVisible, setPasswordVisible] = useState(false);
  const googleSearchParams = new URLSearchParams({ next: nextPath, mode });
  const googleAuthPath = `/auth/google?${googleSearchParams.toString()}`;

  return (
    <div className="w-full max-w-md">
      <p className="text-xs font-bold tracking-[0.16em] text-[#c7ff72] uppercase">
        {isSignup ? "Create your account" : "Welcome back"}
      </p>
      <h1 className="vault-display mt-4 text-[clamp(2.5rem,7vw,4rem)] leading-[0.98] tracking-[-0.04em] text-white">
        {isSignup ? "Start studying with signal." : "Return to your study flow."}
      </h1>
      <p className="mt-5 text-[15px] leading-7 text-white/58">
        {isSignup
          ? "One account for trusted notes, focused rooms, and roadmaps grounded in your material."
          : "Sign in to continue with your notes, study rooms, and personal roadmap."}
      </p>

      <div className="mt-8 space-y-4">
        {pageMessage ? (
          <StatusMessage tone={pageMessage.tone}>{pageMessage.text}</StatusMessage>
        ) : null}
        {state.message ? (
          <StatusMessage tone={state.status === "success" ? "success" : "error"}>
            {state.message}
          </StatusMessage>
        ) : null}
      </div>

      <div className="mt-7">
        <a
          href={googleAuthPath}
          className="vault-focus flex h-12 w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white px-5 text-sm font-bold text-[#101528] transition hover:bg-white/90"
        >
          <span
            aria-hidden="true"
            className="grid size-5 place-items-center rounded-full text-base font-black text-[#4285f4]"
          >
            G
          </span>
          Continue with Google
        </a>
      </div>

      <div className="my-7 flex items-center gap-4" aria-hidden="true">
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-[11px] font-bold tracking-[0.14em] text-white/35 uppercase">
          or use email
        </span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <form action={formAction} noValidate className="space-y-5">
        <input type="hidden" name="next" value={nextPath} />
        <div>
          <label htmlFor={`${mode}-email`} className="text-sm font-semibold text-white/82">
            Email address
          </label>
          <div className="relative mt-2">
            <EnvelopeSimple
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-white/38"
            />
            <input
              id={`${mode}-email`}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              aria-invalid={Boolean(state.fieldErrors?.email)}
              aria-describedby={state.fieldErrors?.email ? `${mode}-email-error` : undefined}
              placeholder="you@example.com"
              className="vault-focus h-12 w-full rounded-xl border border-white/12 bg-white/[0.055] pr-4 pl-12 text-[15px] text-white outline-none transition placeholder:text-white/25 hover:border-white/20 focus:border-[#c7ff72]/55 focus:bg-white/[0.075]"
            />
          </div>
          <FieldError id={`${mode}-email-error`} messages={state.fieldErrors?.email} />
        </div>

        <div>
          <label htmlFor={`${mode}-password`} className="text-sm font-semibold text-white/82">
            Password
          </label>
          <div className="relative mt-2">
            <LockKey
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-white/38"
            />
            <input
              id={`${mode}-password`}
              name="password"
              type={passwordVisible ? "text" : "password"}
              autoComplete={isSignup ? "new-password" : "current-password"}
              required
              minLength={isSignup ? 8 : undefined}
              maxLength={72}
              aria-invalid={Boolean(state.fieldErrors?.password)}
              aria-describedby={
                state.fieldErrors?.password
                  ? `${mode}-password-error`
                  : isSignup
                    ? `${mode}-password-help`
                    : undefined
              }
              placeholder={isSignup ? "At least 8 characters" : "Your password"}
              className="vault-focus h-12 w-full rounded-xl border border-white/12 bg-white/[0.055] pr-12 pl-12 text-[15px] text-white outline-none transition placeholder:text-white/25 hover:border-white/20 focus:border-[#c7ff72]/55 focus:bg-white/[0.075]"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible((isVisible) => !isVisible)}
              className="vault-focus absolute top-1/2 right-2 grid size-9 -translate-y-1/2 place-items-center rounded-full text-white/38 transition hover:bg-white/5 hover:text-white"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
              aria-pressed={passwordVisible}
            >
              {passwordVisible ? (
                <EyeSlash aria-hidden="true" className="size-5" />
              ) : (
                <Eye aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>
          {isSignup && !state.fieldErrors?.password ? (
            <p id={`${mode}-password-help`} className="mt-2 text-xs leading-5 text-white/38">
              Use at least 8 characters. A password manager is recommended.
            </p>
          ) : null}
          <FieldError id={`${mode}-password-error`} messages={state.fieldErrors?.password} />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="vault-focus group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#c7ff72] px-5 text-sm font-black text-[#101528] transition hover:bg-[#d8ff9d] disabled:cursor-wait disabled:opacity-65"
        >
          {isPending ? "Please wait…" : isSignup ? "Create account" : "Sign in"}
          {!isPending ? (
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
              weight="bold"
            />
          ) : null}
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-white/48">
        {isSignup ? "Already have an account?" : "New to ClassVault?"}{" "}
        <Link
          href={isSignup ? "/login" : "/signup"}
          className="vault-focus rounded font-bold text-[#c7ff72] hover:text-[#d8ff9d]"
        >
          {isSignup ? "Sign in" : "Create one"}
        </Link>
      </p>
    </div>
  );
}
