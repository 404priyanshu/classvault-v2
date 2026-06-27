import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Check,
  Clock3,
  GraduationCap,
  Mail,
  ShieldCheck,
} from "lucide-react";

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
    <span className="flex items-center gap-3 font-display text-sm font-semibold tracking-[0.08em] text-[var(--text)] uppercase">
      <span className="grid size-9 place-items-center border border-[var(--text)] bg-white">
        <GraduationCap
          aria-hidden="true"
          className="size-4 text-[var(--accent)]"
        />
      </span>
      ClassVault
    </span>
  );
}

function StatusTag({ children }: { children: string }): ReactElement {
  return (
    <span className="inline-flex items-center gap-2 border border-[var(--border)] bg-white px-3 py-1.5 font-mono text-xs text-[var(--muted)]">
      <span aria-hidden="true" className="size-1.5 bg-[var(--accent)]" />
      {children}
    </span>
  );
}

export default function ComingSoonPage(): ReactElement {
  return (
    <main className="min-h-screen bg-white text-[var(--text)]">
      <header className="border-b border-[var(--border)] bg-white/94">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-12">
          <BrandMark />
          <Link
            className="pressable focus-ring hidden items-center gap-2 border border-[var(--text)] bg-white px-4 py-2.5 font-display text-sm font-semibold text-[var(--text)] transition-colors duration-150 ease-[var(--ease-out)] hover:border-[var(--accent)] hover:text-[var(--accent)] sm:inline-flex"
            href="/"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to landing
          </Link>
        </div>
      </header>

      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="hero-rise max-w-4xl">
            <StatusTag>Private build in progress</StatusTag>
            <h1 className="mt-8 max-w-3xl font-display text-[clamp(3.25rem,10vw,8.75rem)] leading-[0.86] font-semibold tracking-normal text-[var(--text)]">
              Coming soon
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
              ClassVault is not open to students yet. We are finishing the study
              platform before turning on access for notes, study rooms,
              university communities, and roadmaps.
            </p>
          </div>

          <div className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {launchNotes.map((note) => (
              <div
                key={note}
                className="flex min-h-24 items-start gap-3 border border-[var(--border)] bg-white p-4"
              >
                <Check
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                />
                <span className="text-sm leading-6 text-[var(--muted)]">
                  {note}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="pressable focus-ring flex h-[52px] items-center justify-center gap-2 bg-[var(--accent)] px-6 font-display text-[15px] font-semibold text-white transition-colors duration-150 ease-[var(--ease-out)] hover:bg-[#c90000]"
              href="mailto:hello@classvault.in?subject=ClassVault%20launch%20updates"
            >
              Notify me
              <Bell aria-hidden="true" className="size-4" />
            </a>
            <a
              className="pressable focus-ring flex h-[52px] items-center justify-center gap-2 border border-[var(--text)] bg-white px-6 font-display text-[15px] font-semibold text-[var(--text)] transition-colors duration-150 ease-[var(--ease-out)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              href="mailto:hello@classvault.in"
            >
              Contact the team
              <Mail aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--section-tint)]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 lg:px-12 lg:py-20">
          <aside className="space-y-5">
            <span className="inline-flex flex-col gap-2.5">
              <span className="font-mono text-xs tracking-[0.14em] text-[var(--accent)]">
                [ Launch ]
              </span>
              <span
                aria-hidden="true"
                className="h-0.5 w-7 bg-[var(--accent)]"
              />
            </span>
            <div className="space-y-3">
              <h2 className="font-display text-3xl leading-tight font-semibold text-[var(--text)] sm:text-4xl">
                What we are finishing
              </h2>
              <p className="text-sm leading-7 text-[var(--muted)]">
                Access is paused until the student experience is ready end to
                end.
              </p>
            </div>
          </aside>

          <div className="grid gap-4 md:grid-cols-3">
            {readinessItems.map((item) => (
              <article
                key={item.title}
                className="group flex min-h-72 flex-col justify-between border border-[var(--border)] bg-white p-6 transition-colors duration-200 ease-[var(--ease-out)] hover:border-[var(--accent)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <Clock3
                      aria-hidden="true"
                      className="size-5 text-[var(--accent)]"
                    />
                    <span className="font-mono text-[11px] tracking-[0.14em] text-[var(--light)] uppercase">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl leading-tight font-semibold text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 border-t border-[var(--border)] pt-4 font-mono text-xs text-[var(--muted)]">
                  <ShieldCheck
                    aria-hidden="true"
                    className="size-4 text-[var(--accent)]"
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
