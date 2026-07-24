import type { Metadata } from "next";
import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Bell, Check, Clock3, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "ClassVault | Coming Soon",
  description:
    "ClassVault is preparing its study platform for notes, university communities, live study rooms, and roadmaps.",
};

const launchNotes = [
  "Verified university communities",
  "Shared notes with scoped access",
  "Live study rooms and saved roadmaps",
];

const readinessItems = [
  {
    title: "Core study workspace",
    description:
      "The notes, rooms, and roadmap surfaces are being tightened into one reliable student workflow.",
    status: "In progress",
  },
  {
    title: "Access and moderation",
    description:
      "University scopes, safe sharing, and moderation paths are being checked before public access.",
    status: "Under review",
  },
  {
    title: "Launch communication",
    description:
      "Early students will get a clear path in once the first production-ready release is open.",
    status: "Queued",
  },
];

function BrandMark(): ReactElement {
  return (
    <Link
      href="/"
      className="focus-ring flex items-center gap-3"
      aria-label="ClassVault home"
    >
      <span className="relative size-9 overflow-hidden rounded-[8px] border border-[var(--border)] bg-white">
        <Image
          src="/icon.svg"
          alt=""
          fill
          priority
          sizes="36px"
          className="object-contain p-1"
        />
      </span>
      <span className="font-display text-[21px] leading-none text-[var(--ink)]">
        ClassVault
      </span>
    </Link>
  );
}

function StatusTag({ children }: { children: string }): ReactElement {
  return (
    <span className="inline-flex items-center gap-2 rounded-[7px] border border-[var(--border)] bg-[var(--paper)] px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] text-[var(--ink-muted)] uppercase">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--crimson)]" />
      {children}
    </span>
  );
}

export default function ComingSoonPage(): ReactElement {
  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="border-b border-[var(--field-line)]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-12">
          <BrandMark />
          <Link
            className="pressable focus-ring hidden items-center gap-2 rounded-[8px] border-[1.5px] border-[var(--border-strong)] px-4 py-2.5 text-sm font-semibold text-[var(--ink)] transition-colors duration-150 ease-[var(--ease-out)] hover:border-[var(--ink)] sm:inline-flex"
            href="/"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to landing
          </Link>
        </div>
      </header>

      <section className="border-b border-[var(--field-line)]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="hero-rise max-w-4xl">
            <StatusTag>Private build in progress</StatusTag>
            <h1 className="font-display mt-8 max-w-3xl text-[clamp(3rem,9vw,6rem)] leading-[0.98] text-[var(--ink)]">
              Coming soon
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--ink-muted)] sm:text-xl sm:leading-9">
              ClassVault is not open to students yet. We are finishing the
              study platform before turning on access for notes, study rooms,
              university communities, and roadmaps.
            </p>
          </div>

          <div className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {launchNotes.map((note) => (
              <div
                key={note}
                className="card flex min-h-24 items-start gap-3 p-4"
              >
                <Check
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-[var(--crimson-deep)]"
                  strokeWidth={3}
                />
                <span className="text-sm leading-6 text-[var(--ink-muted)]">
                  {note}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="btn btn-crimson pressable focus-ring cta-link"
              href="mailto:hello@classvault.in?subject=ClassVault%20launch%20updates"
            >
              Notify me
              <Bell aria-hidden="true" className="size-4" />
            </a>
            <a
              className="btn btn-outline-ink pressable focus-ring"
              href="mailto:hello@classvault.in"
            >
              Contact the team
              <Mail aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--paper-soft)]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 lg:px-12 lg:py-20">
          <aside className="space-y-5">
            <span className="inline-flex flex-col gap-2.5">
              <span className="text-[12px] font-bold tracking-[0.14em] text-[var(--crimson-deep)] uppercase">
                Launch
              </span>
              <span
                aria-hidden="true"
                className="h-0.5 w-7 bg-[var(--crimson)]"
              />
            </span>
            <div className="space-y-3">
              <h2 className="font-display text-3xl leading-tight text-[var(--ink)] sm:text-4xl">
                What we are finishing
              </h2>
              <p className="text-sm leading-7 text-[var(--ink-muted)]">
                Access is paused until the student experience is ready end to
                end.
              </p>
            </div>
          </aside>

          <div className="grid gap-4 md:grid-cols-3">
            {readinessItems.map((item) => (
              <article
                key={item.title}
                className="card flex min-h-72 flex-col justify-between p-6 transition-colors duration-200 ease-[var(--ease-out)] hover:border-[var(--crimson)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <Clock3
                      aria-hidden="true"
                      className="size-5 text-[var(--crimson-deep)]"
                    />
                    <span className="text-[11px] font-bold tracking-[0.12em] text-[var(--ink-muted)] uppercase">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="font-display mt-8 text-2xl leading-tight text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 border-t border-[var(--field-line)] pt-4 text-xs font-semibold text-[var(--ink-muted)]">
                  <ShieldCheck
                    aria-hidden="true"
                    className="size-4 text-[var(--crimson-deep)]"
                  />
                  Release gate
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
