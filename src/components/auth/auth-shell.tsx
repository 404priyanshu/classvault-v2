import type { ReactElement } from "react";
import Link from "next/link";
import { BookOpenText, ShieldCheck, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { AuthForm } from "@/components/auth/auth-form";

type AuthShellProps = {
  mode: "login" | "signup";
  nextPath: string;
  pageMessage?: {
    tone: "error" | "success";
    text: string;
  };
};

const signals = [
  { icon: ShieldCheck, text: "Account identity stays private" },
  { icon: BookOpenText, text: "Notes remain separated by access scope" },
  { icon: Sparkle, text: "Roadmaps link back to source material" },
] as const;

export function AuthShell({ mode, nextPath, pageMessage }: AuthShellProps): ReactElement {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-[#0b1022] text-white">
      <div aria-hidden="true" className="vault-ambient vault-ambient-one absolute -top-72 -left-48 size-[42rem] rounded-full" />
      <div aria-hidden="true" className="vault-ambient vault-ambient-two absolute -right-64 -bottom-72 size-[46rem] rounded-full" />
      <div aria-hidden="true" className="dash-noise" />

      <div className="relative mx-auto grid min-h-dvh w-full max-w-[1320px] lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="hidden border-r border-white/8 px-12 py-10 lg:flex lg:flex-col xl:px-16">
          <Link
            href="/"
            className="vault-focus flex w-fit items-center gap-2.5 rounded-full text-white"
            aria-label="ClassVault home"
          >
            <span className="vault-logo-mark grid size-9 place-items-center rounded-full text-sm font-black">
              C
            </span>
            <span className="text-base font-semibold tracking-[-0.02em]">ClassVault</span>
          </Link>

          <div className="my-auto max-w-lg py-16">
            <p className="text-xs font-bold tracking-[0.16em] text-[#b3a8ff] uppercase">
              A calmer study workspace
            </p>
            <p className="vault-display mt-5 text-[clamp(3rem,5vw,5.5rem)] leading-[0.91] tracking-[-0.05em]">
              Trust the material. Then do the work.
            </p>
            <ul className="mt-12 space-y-5">
              {signals.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm font-semibold text-white/58">
                  <span className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#c7ff72]">
                    <Icon aria-hidden="true" className="size-[18px]" weight="duotone" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs leading-5 text-white/30">
            Gmail is supported through Google sign-in. College email verification remains separate from your ClassVault account.
          </p>
        </aside>

        <section className="flex min-h-dvh flex-col px-5 py-6 sm:px-10 sm:py-8 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between lg:justify-end">
            <Link
              href="/"
              className="vault-focus flex items-center gap-2.5 rounded-full text-white lg:hidden"
              aria-label="ClassVault home"
            >
              <span className="vault-logo-mark grid size-8 place-items-center rounded-full text-xs font-black">
                C
              </span>
              <span className="text-sm font-semibold tracking-[-0.02em]">ClassVault</span>
            </Link>
            <Link
              href="/"
              className="vault-focus rounded-full px-3 py-2 text-sm font-semibold text-white/48 transition hover:text-white"
            >
              Back home
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center py-12 sm:py-16">
            <AuthForm mode={mode} nextPath={nextPath} pageMessage={pageMessage} />
          </div>

          <p className="text-center text-xs leading-5 text-white/28">
            By continuing, you agree to use ClassVault responsibly and respect community access boundaries.
          </p>
        </section>
      </div>
    </main>
  );
}
