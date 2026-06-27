import type { ReactElement, ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  Building2,
  Check,
  FileText,
  LockKeyhole,
  MessageSquareText,
  Route,
  Timer,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HeroBrandPanel } from "./hero-brand-panel";
import { navItems } from "./nav";
import { Reveal } from "./reveal";
import { SiteHeader } from "./site-header";

const appLaunchHref = "/coming-soon";

const productPillars: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Trusted notes",
    description:
      "Students share PDF and image notes that can be searched, downloaded, and rated inside the right scope.",
    icon: FileText,
  },
  {
    title: "University communities",
    description:
      "Verified members join one university space mapped through a curated college email domain allowlist.",
    icon: Building2,
  },
  {
    title: "Live study rooms",
    description:
      "Temporary video, audio, timer, chat, and participant spaces for public or university-scoped study.",
    icon: Video,
  },
  {
    title: "Personalized roadmaps",
    description:
      "Saved study plans are generated from plan-eligible notes and kept as stable snapshots.",
    icon: Route,
  },
];

const noteRows = [
  {
    title: "Data Structures - Unit 1-5",
    subject: "Data Structures",
    scope: "University",
    rating: "4.8",
  },
  {
    title: "Operating Systems - Full Notes",
    subject: "Operating Systems",
    scope: "Public",
    rating: "4.7",
  },
  {
    title: "DBMS Important Topics",
    subject: "DBMS",
    scope: "University",
    rating: "4.9",
  },
  {
    title: "Engineering Mathematics - III",
    subject: "Mathematics",
    scope: "Public",
    rating: "4.6",
  },
];

const communityRows = [
  {
    name: "VIT Vellore",
    type: "University community",
    status: "Verified member",
  },
  {
    name: "Public community",
    type: "Open to students",
    status: "Available",
  },
  {
    name: "University access request",
    type: "Missing domain review",
    status: "Admin reviewed",
  },
];

const roomRows = [
  {
    title: "DBMS SQL Practice",
    subject: "DBMS",
    time: "Today, 6:00 PM",
  },
  {
    title: "CN Numericals",
    subject: "Networks",
    time: "Today, 7:30 PM",
  },
  {
    title: "OS Concepts Deep Dive",
    subject: "Operating Systems",
    time: "Tomorrow, 11:00 AM",
  },
];

const roadmapSteps = [
  {
    title: "Foundations",
    detail: "Source notes selected",
    state: "complete",
  },
  {
    title: "Core topics",
    detail: "Checklist in progress",
    state: "complete",
  },
  {
    title: "Practicals",
    detail: "Exam-style revision",
    state: "active",
  },
  {
    title: "Electives",
    detail: "Access-gated sources",
    state: "upcoming",
  },
  {
    title: "Placement prep",
    detail: "Private progress",
    state: "upcoming",
  },
];

const planRows = [
  {
    feature: "Note access",
    free: "Public notes plus current university notes",
    pro: "Same access, with expanded upload and storage limits",
  },
  {
    feature: "Study roadmaps",
    free: "Personal notes plus public notes",
    pro: "Community-powered roadmaps with eligible university notes",
  },
  {
    feature: "Roadmap generations",
    free: "Limited by configurable quota",
    pro: "Unlimited subject to fair-use limits",
  },
  {
    feature: "Study rooms",
    free: "Create and join scoped rooms",
    pro: "Longer duration, higher capacity, and enhanced host controls",
  },
  {
    feature: "Experience",
    free: "Core study workflow",
    pro: "AI extras, priority features, and ad-free use",
  },
];

const principles: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  motion: "lock" | "clock" | "bookmark";
}> = [
  {
    title: "Scope before virality",
    description:
      "Notes live in public or university spaces. Links and invites never bypass that scope.",
    icon: LockKeyhole,
    motion: "lock",
  },
  {
    title: "Privacy-minded study rooms",
    description:
      "Rooms are temporary live spaces. Moderation events persist, not recordings or full chat archives.",
    icon: Timer,
    motion: "clock",
  },
  {
    title: "Roadmaps stay stable",
    description:
      "Generated roadmaps are saved snapshots so a plan does not shift underneath a student.",
    icon: Bookmark,
    motion: "bookmark",
  },
];

const faqs = [
  {
    question: "Is ClassVault only for Indian college students?",
    answer:
      "Yes. The product language and verification model are built around Indian college students and their university communities.",
  },
  {
    question: "Do students need a college email to use everything?",
    answer:
      "Students can use the public community without university verification. University communities require college email verification through an approved domain.",
  },
  {
    question: "Can students download notes?",
    answer:
      "Yes. Any student with access to a note's scope can view and download it. Scope is the control, not a per-note download toggle.",
  },
  {
    question: "What does Pro unlock?",
    answer:
      "Pro expands limits, adds community-powered roadmaps using eligible university notes, supports stronger study-room entitlements, and includes AI extras and an ad-free experience.",
  },
];

function SectionMarker({ value }: { value: string }): ReactElement {
  return (
    <span className="inline-flex flex-col gap-2.5">
      <span className="font-mono text-xs tracking-[0.14em] text-[var(--accent)]">
        [ {value} ]
      </span>
      <span aria-hidden="true" className="h-0.5 w-7 bg-[var(--accent)]" />
    </span>
  );
}

function SectionShell({
  id,
  marker,
  title,
  description,
  cta,
  children,
  tone = "white",
}: {
  id: string;
  marker: string;
  title: string;
  description: string;
  cta?: string;
  children: ReactNode;
  tone?: "white" | "tint";
}): ReactElement {
  return (
    <section
      id={id}
      className={`border-t border-[var(--border)] ${
        tone === "tint" ? "bg-[var(--section-tint)]" : "bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 lg:px-12 lg:py-24">
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <SectionMarker value={marker} />
          <div className="space-y-4">
            <h2 className="max-w-[14rem] text-2xl leading-tight font-semibold tracking-[-0.01em] text-[var(--text)] sm:text-3xl">
              {title}
            </h2>
            <p className="max-w-xs text-sm leading-7 text-[var(--muted)]">
              {description}
            </p>
          </div>
          {cta ? (
            <Link
              className="group pressable focus-ring link-underline inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
              href={appLaunchHref}
            >
              {cta}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1"
              />
            </Link>
          ) : null}
        </aside>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}

function FeatureGrid(): ReactElement {
  const iconClassMap = {
    "Trusted notes": "icon-file",
    "University communities": "icon-building",
    "Live study rooms": "icon-video",
    "Personalized roadmaps": "icon-route",
  };

  return (
    <div className="grid border border-[var(--border)] bg-white sm:grid-cols-2 lg:grid-cols-4">
      {productPillars.map((pillar) => {
        const Icon = pillar.icon;
        const iconClass =
          iconClassMap[pillar.title as keyof typeof iconClassMap] || "";

        return (
          <article
            key={pillar.title}
            className="row-hover min-h-64 border-b border-[var(--border)] p-7 last:border-b-0 sm:even:border-l sm:even:border-l-[var(--border)] lg:border-b-0 lg:border-l lg:first:border-l-0"
          >
            <Icon
              aria-hidden="true"
              className={`feature-icon mb-10 size-9 text-[var(--accent)] ${iconClass}`}
              strokeWidth={1.7}
            />
            <h3 className="text-base leading-6 font-semibold text-[var(--text)]">
              {pillar.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {pillar.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}

function NotesAndCommunities(): ReactElement {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
      <div className="border border-[var(--border)] bg-white">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
          <h3 className="text-sm font-semibold text-[var(--text)]">
            Top notes
          </h3>
          <Link
            className="group pressable focus-ring link-underline inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent)]"
            href={appLaunchHref}
          >
            View all
            <ArrowRight
              aria-hidden="true"
              className="size-3.5 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="font-mono text-[11px] tracking-[0.08em] text-[var(--light)] uppercase">
              <tr>
                <th className="border-b border-[var(--border)] px-5 py-3 font-medium">
                  Title
                </th>
                <th className="border-b border-[var(--border)] px-5 py-3 font-medium">
                  Subject
                </th>
                <th className="border-b border-[var(--border)] px-5 py-3 font-medium">
                  Scope
                </th>
                <th className="border-b border-[var(--border)] px-5 py-3 text-right font-medium">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {noteRows.map((note) => (
                <tr
                  key={note.title}
                  className="row-hover border-b border-[var(--border)] last:border-b-0"
                >
                  <td className="px-5 py-4 font-medium text-[var(--text)]">
                    {note.title}
                  </td>
                  <td className="px-5 py-4 text-[var(--muted)]">
                    {note.subject}
                  </td>
                  <td className="px-5 py-4">
                    <span className="border border-[var(--border)] px-2 py-1 font-mono text-[11px] text-[var(--muted)]">
                      {note.scope}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right font-semibold text-[var(--accent)]">
                    {note.rating} ★
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div id="communities" className="border border-[var(--border)] bg-white">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
          <h3 className="text-sm font-semibold text-[var(--text)]">
            Community access
          </h3>
          <Building2
            aria-hidden="true"
            className="size-4 text-[var(--accent)]"
          />
        </div>
        <div className="divide-y divide-[var(--border)]">
          {communityRows.map((row) => (
            <div
              key={row.name}
              className="row-hover grid gap-2 px-5 py-4 sm:grid-cols-[1fr_auto]"
            >
              <div>
                <p className="font-medium text-[var(--text)]">{row.name}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{row.type}</p>
              </div>
              <p className="self-center font-mono text-[11px] tracking-[0.08em] text-[var(--light)] uppercase">
                {row.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StudyRooms(): ReactElement {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="overflow-hidden border border-zinc-800 bg-zinc-950 text-white">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="font-mono text-[11px] text-[var(--accent)]">LIVE</p>
            <h3 className="mt-2 text-lg font-semibold">
              DSA Problem Solving
            </h3>
          </div>
          <p className="font-mono text-sm">00:42:17</p>
        </div>
        <div className="grid gap-6 p-5 md:grid-cols-[minmax(0,1fr)_180px]">
          <pre className="overflow-hidden border border-white/10 bg-black p-5 font-mono text-xs leading-7 text-zinc-300">
            <code>{`# Question: two sum
given nums and target

def solve(nums, target):
    seen = {}
    for index, value in enumerate(nums):
        missing = target - value
        if missing in seen:
            return [seen[missing], index]
        seen[value] = index`}</code>
          </pre>
          <div className="space-y-4">
            <div className="border border-white/10 p-4">
              <p className="font-mono text-[11px] tracking-[0.1em] text-zinc-500 uppercase">
                Participants
              </p>
              <p className="mt-3 text-3xl font-semibold">24</p>
            </div>
            <div className="border border-white/10 p-4">
              <p className="font-mono text-[11px] tracking-[0.1em] text-zinc-500 uppercase">
                Room scope
              </p>
              <p className="mt-3 text-sm text-zinc-300">
                Public or university-scoped. Links do not bypass access.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-sm text-zinc-300">
          <span className="inline-flex items-center gap-2">
            <MessageSquareText aria-hidden="true" className="size-4" />
            Timer, chat, video, audio
          </span>
          <Link
            className="pressable focus-ring inline-flex items-center gap-2 bg-[var(--accent)] px-4 py-2 font-semibold text-white"
            href={appLaunchHref}
          >
            Join room
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>

      <div className="border border-[var(--border)] bg-white">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
          <h3 className="text-sm font-semibold text-[var(--text)]">
            Upcoming rooms
          </h3>
          <Timer aria-hidden="true" className="size-4 text-[var(--accent)]" />
        </div>
        <div className="divide-y divide-[var(--border)]">
          {roomRows.map((room) => (
            <div key={room.title} className="row-hover px-5 py-4">
              <p className="font-medium text-[var(--text)]">{room.title}</p>
              <div className="mt-2 flex items-center justify-between gap-3 text-sm text-[var(--muted)]">
                <span>{room.subject}</span>
                <span className="text-right">{room.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RoadmapPanel(): ReactElement {
  return (
    <div className="border border-[var(--border)] bg-white p-5 sm:p-7">
      <div className="grid gap-4 border-b border-[var(--border)] pb-5 md:grid-cols-4">
        {[
          ["Goal", "End-sem mastery"],
          ["Mode", "Exam-style revision"],
          ["Source", "Plan-eligible notes"],
          ["Progress", "42% complete"],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="font-mono text-[11px] tracking-[0.1em] text-[var(--light)] uppercase">
              {label}
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--text)]">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {roadmapSteps.map((step, index) => (
          <div key={step.title} className="relative">
            {index < roadmapSteps.length - 1 ? (
              <span
                aria-hidden="true"
                className={`absolute top-5 left-6 hidden h-px w-[calc(100%+1rem)] md:block ${
                  step.state === "upcoming"
                    ? "bg-zinc-200"
                    : "bg-[var(--accent)]"
                }`}
              />
            ) : null}
            <div className="relative z-10 flex gap-4 md:block">
              <span
                className={`grid size-10 shrink-0 place-items-center border bg-white ${
                  step.state === "upcoming"
                    ? "border-zinc-300 text-zinc-300"
                    : "border-[var(--accent)] text-[var(--accent)]"
                } ${step.state === "complete" ? "bg-[var(--accent)] text-white" : ""}`}
              >
                {step.state === "complete" ? (
                  <Check aria-hidden="true" className="size-5" />
                ) : (
                  index + 1
                )}
              </span>
              <div className="md:mt-4">
                <h3 className="text-sm font-semibold text-[var(--text)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {step.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border border-[var(--border)] bg-[var(--section-tint)] p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.1em] text-[var(--accent)] uppercase">
              Next up
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--text)]">
              Operating Systems - Process Scheduling
            </p>
          </div>
          <Link
            className="pressable focus-ring inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
            href={appLaunchHref}
          >
            Start
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function PlanComparison(): ReactElement {
  return (
    <div className="overflow-x-auto border border-[var(--border)] bg-white">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-[var(--section-tint)]">
            <th className="border-r border-b border-[var(--border)] px-5 py-4 font-mono text-[11px] tracking-[0.1em] text-[var(--light)] uppercase">
              Feature
            </th>
            <th className="border-r border-b border-[var(--border)] px-5 py-4 font-mono text-[11px] tracking-[0.1em] text-[var(--light)] uppercase">
              Free tier
            </th>
            <th className="border-b border-[var(--border)] px-5 py-4 font-mono text-[11px] tracking-[0.1em] text-[var(--light)] uppercase">
              Pro tier
            </th>
          </tr>
        </thead>
        <tbody>
          {planRows.map((row) => (
            <tr
              key={row.feature}
              className="border-b border-[var(--border)] last:border-b-0"
            >
              <th className="border-r border-[var(--border)] px-5 py-4 font-medium text-[var(--text)]">
                {row.feature}
              </th>
              <td className="border-r border-[var(--border)] px-5 py-4 leading-7 text-[var(--muted)]">
                {row.free}
              </td>
              <td className="px-5 py-4 leading-7 text-[var(--text)]">
                {row.pro}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Principles(): ReactElement {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {principles.map((principle) => {
        const Icon = principle.icon;

        return (
          <article
            key={principle.title}
            className="icon-card card-lift border border-[var(--border)] bg-white p-6"
          >
            <Icon
              aria-hidden="true"
              className={`icon-${principle.motion} size-7 text-[var(--accent)]`}
              strokeWidth={1.8}
            />
            <h3 className="mt-8 text-base font-semibold text-[var(--text)]">
              {principle.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {principle.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}

function FAQ(): ReactElement {
  return (
    <div className="divide-y divide-[var(--border)] border border-[var(--border)] bg-white">
      {faqs.map((faq) => (
        <details key={faq.question} name="faq" className="group">
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-sm font-semibold text-[var(--text)] transition-colors duration-150 ease-[var(--ease-out)] hover:text-[var(--accent)]">
            {faq.question}
            <span className="text-xl font-light text-[var(--accent)] transition-transform duration-150 ease-[var(--ease-out)] group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="faq-panel">
            <p className="max-w-3xl px-5 pb-5 text-sm leading-7 text-[var(--muted)]">
              {faq.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

function Home(): ReactElement {
  return (
    <main
      id="top"
      className="min-h-screen bg-white pb-20 text-[var(--text)] sm:pb-0"
    >
      <SiteHeader />

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 pt-16 pb-16 sm:px-8 sm:pt-20 lg:grid-cols-[520px_minmax(0,1fr)] lg:gap-[140px] lg:px-12 lg:pt-[103px] lg:pb-[84px]">
          <div className="hero-rise flex flex-col lg:pt-[60px]">
            <h1 className="font-display text-[56px] leading-[0.98] font-medium tracking-[-0.065em] text-[var(--text)] sm:text-[72px] lg:text-[76px]">
              ClassVault
            </h1>
            <p className="mt-4 max-w-xl font-display text-[20px] leading-tight font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-[21px]">
              One place for notes, rooms, and roadmaps
            </p>
            <p className="mt-8 max-w-[550px] font-display text-[17px] leading-[1.72] font-normal tracking-[-0.015em] text-[#777e8e] sm:text-[18px]">
              Trusted notes, university-specific communities, live study rooms,
              and personalized roadmaps for Indian college students. Study with
              the right people and keep your exam plan moving.
            </p>
            <div className="mt-9 hidden flex-col gap-3 sm:flex sm:flex-row">
              <Link
                className="pressable focus-ring inline-flex h-[46px] items-center justify-center border border-[var(--accent)] bg-[var(--accent)] px-6 font-display text-[14px] font-semibold tracking-[-0.025em] text-white transition-colors duration-150 ease-[ease] hover:border-[#b80500] hover:bg-[#b80500]"
                href={appLaunchHref}
              >
                Start Using ClassVault
              </Link>
              <a
                className="pressable focus-ring inline-flex h-[46px] items-center justify-center border border-[#d6dae2] bg-white px-6 font-display text-[14px] font-semibold tracking-[-0.025em] text-[var(--text)]"
                href="#notes"
              >
                See the study workflow
              </a>
            </div>

            <p className="mt-4 max-w-[540px] font-display text-[14px] leading-[1.65] tracking-[-0.01em] text-[#a4acba] sm:text-[15px]">
              Free tier available. University spaces require verified college
              email access.
            </p>
          </div>

          <HeroBrandPanel />
        </div>
      </section>

      <SectionShell
        id="product"
        marker="01"
        title="All your study needs. One place."
        description="ClassVault connects the study surfaces that usually live in separate chats, folders, calls, and last-minute checklists."
        tone="tint"
      >
        <FeatureGrid />
      </SectionShell>

      <SectionShell
        id="notes"
        marker="02"
        title="Notes and communities with clear scope."
        description="Browse rated notes from public spaces or your verified university community, with trust signals attached to the material itself."
        cta="Explore notes"
      >
        <NotesAndCommunities />
      </SectionShell>

      <SectionShell
        id="rooms"
        marker="03"
        title="Live study rooms that disappear when study ends."
        description="Rooms keep collaboration lightweight: video, audio, timer, chat, participants, and scoped access."
        cta="Join a room"
        tone="tint"
      >
        <StudyRooms />
      </SectionShell>

      <SectionShell
        id="roadmaps"
        marker="04"
        title="Roadmaps generated from eligible notes."
        description="Students choose a topic and study mode. ClassVault turns plan-eligible notes into a structured snapshot with progress."
        cta="Create your roadmap"
      >
        <RoadmapPanel />
      </SectionShell>

      <SectionShell
        id="plans"
        marker="05"
        title="Free to start. Pro to go further."
        description="Free students keep the core workflow. Pro expands limits and unlocks community-powered study planning."
        tone="tint"
      >
        <PlanComparison />
      </SectionShell>

      <SectionShell
        id="principles"
        marker="06"
        title="Built around student trust."
        description="The MVP favors clear boundaries, predictable access, and privacy over noisy social mechanics."
      >
        <Principles />
      </SectionShell>

      <SectionShell
        id="faq"
        marker="07"
        title="Frequently asked questions."
        description="Short answers for the decisions that matter before a student joins a community or starts a roadmap."
        tone="tint"
      >
        <FAQ />
      </SectionShell>

      <section id="final" className="border-t border-[var(--border)] bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-12">
          <div>
            <SectionMarker value="08" />
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-[var(--text)]">
              Ready to study smarter?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              Join ClassVault and bring notes, rooms, communities, and study
              roadmaps into one focused workspace.
            </p>
          </div>
          <div className="flex flex-col gap-3 self-center sm:flex-row">
            <Link
              className="pressable focus-ring inline-flex items-center justify-center border border-[var(--accent)] bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-white"
              href={appLaunchHref}
            >
              Start for free
            </Link>
            <Link
              className="pressable focus-ring inline-flex items-center justify-center border border-[var(--accent)] bg-white px-8 py-3 text-sm font-semibold text-[var(--accent)]"
              href={appLaunchHref}
            >
              Explore notes
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] bg-[var(--section-tint)]">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-10 text-sm text-[var(--muted)] sm:px-8 lg:grid-cols-[1fr_auto] lg:px-12">
          <div>
            <div className="flex items-center gap-3 font-semibold text-[var(--accent)]">
              <span className="grid size-8 place-items-center border border-[var(--border)] bg-white text-[11px] text-[var(--text)]">
                CV
              </span>
              ClassVault
            </div>
            <p className="mt-4 max-w-md leading-7">
              Study together. Share better material. Keep the plan visible.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 font-mono text-xs sm:grid-cols-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="pressable focus-ring transition-colors duration-150 ease-[var(--ease-out)] hover:text-[var(--accent)]"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-[55] border-t border-[var(--border)] bg-white/95 px-4 pt-3.5 pb-[calc(0.875rem+env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
        <Link
          href={appLaunchHref}
          className="pressable focus-ring flex h-[50px] items-center justify-center rounded-[10px] bg-[var(--text)] font-display text-[15px] font-semibold tracking-[-0.02em] text-white"
        >
          Start Using ClassVault
        </Link>
      </div>
    </main>
  );
}

export default Home;
