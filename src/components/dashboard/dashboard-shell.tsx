"use client";

import { useMemo, useState } from "react";
import type { ReactElement } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  BookOpenText,
  CaretDown,
  Check,
  Clock,
  FilePdf,
  GraduationCap,
  List,
  MagnifyingGlass,
  NotePencil,
  Plus,
  ShieldCheck,
  SignOut,
  Star,
  UploadSimple,
  X,
} from "@phosphor-icons/react";
import { signOut } from "@/app/auth/actions";
import {
  dashboardNotes,
  dashboardRooms,
  roadmapTasks,
} from "@/components/dashboard/dashboard-data";
import type { OnboardingData } from "@/lib/onboarding";
import type { StudentProfile } from "@/lib/profile";

const navigationItems = [
  { label: "Home", href: "#dashboard-home" },
  { label: "Notes", href: "#notes" },
  { label: "Study rooms", href: "#study-rooms" },
  { label: "Roadmap", href: "#roadmap" },
] as const;

const goalDescriptions: Record<OnboardingData["primaryGoal"], string> = {
  "find-notes": "Start with notes matched to the subjects you chose.",
  "build-roadmap": "Your next roadmap task is ready when you are.",
  "study-together": "Find a focused room or continue your own study plan.",
  "share-notes": "Pick up your study plan or add something useful for classmates.",
};

type DashboardProfile = {
  displayName: string;
  universityName: string;
  collegeEmail: string;
  subjects: string[];
  welcomeMessage: string;
};

function createDashboardProfile(profile: StudentProfile): DashboardProfile {
  return {
    displayName: profile.displayName,
    universityName: profile.universityName,
    collegeEmail: profile.collegeEmail,
    subjects: profile.subjects,
    welcomeMessage: goalDescriptions[profile.primaryGoal],
  };
}

function getInitials(displayName: string): string {
  const initials = displayName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.at(0)?.toLocaleUpperCase())
    .join("");

  return initials || "ST";
}

function Brand(): ReactElement {
  return (
    <Link
      href="/"
      className="vault-focus flex shrink-0 items-center gap-2.5 rounded-full text-white"
      aria-label="ClassVault home"
    >
      <span className="vault-logo-mark grid size-8 place-items-center rounded-full text-sm font-black">
        C
      </span>
      <span className="text-[15px] font-semibold tracking-[-0.02em]">
        ClassVault
      </span>
    </Link>
  );
}

function Avatar({ initials }: { initials: string }): ReactElement {
  return (
    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#c7ff72] text-[11px] font-black tracking-[0.03em] text-[#101528]">
      {initials}
    </span>
  );
}

function SearchField({
  query,
  onQueryChange,
  className = "",
}: {
  query: string;
  onQueryChange: (value: string) => void;
  className?: string;
}): ReactElement {
  return (
    <label
      className={`flex h-10 items-center gap-3 rounded-full border border-white/12 bg-white/5 px-4 transition focus-within:border-[#c7ff72]/50 focus-within:bg-white/8 ${className}`}
    >
      <MagnifyingGlass
        aria-hidden="true"
        className="size-[18px] shrink-0 text-white/45"
      />
      <span className="sr-only">Search notes</span>
      <input
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Search notes, subjects, and files"
        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/40"
      />
      <kbd className="hidden rounded-md border border-white/12 bg-white/5 px-1.5 py-0.5 text-[10px] font-semibold text-white/45 lg:block">
        ⌘ K
      </kbd>
    </label>
  );
}

function DashboardNav({
  profile,
  accountEmail,
  query,
  onQueryChange,
}: {
  profile: DashboardProfile;
  accountEmail: string;
  query: string;
  onQueryChange: (value: string) => void;
}): ReactElement {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const initials = getInitials(profile.displayName);

  const closeNavigation = (): void => setNavigationOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Dashboard navigation"
        className="vault-nav mx-auto flex max-w-[1320px] items-center gap-3 rounded-full px-4 py-3 sm:px-5"
      >
        <Brand />

        <div className="hidden items-center gap-6 lg:flex xl:gap-7">
          {navigationItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={index === 0 ? "page" : undefined}
              className="vault-nav-link vault-focus rounded-sm text-sm text-white/70"
            >
              {item.label}
            </a>
          ))}
        </div>

        <SearchField
          query={query}
          onQueryChange={onQueryChange}
          className="hidden flex-1 md:flex"
        />

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <div className="relative">
            <button
              type="button"
              onClick={() => setNotificationsOpen((isOpen) => !isOpen)}
              className="vault-focus relative grid size-10 place-items-center rounded-full text-white/60 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Notifications, one unread"
              aria-expanded={notificationsOpen}
            >
              <Bell aria-hidden="true" className="size-5" />
              <span className="absolute top-2 right-2 size-2 rounded-full border-2 border-[#0d1329] bg-[#c7ff72]" />
            </button>
            {notificationsOpen ? (
              <div className="dash-glass absolute top-12 right-0 w-[min(21rem,calc(100vw-2rem))] rounded-2xl p-5">
                <p className="text-sm font-semibold text-white">Notifications</p>
                <div className="mt-3 border-l-2 border-[#c7ff72] pl-3">
                  <p className="text-sm font-semibold text-white">
                    Your study workspace is ready.
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Start with a roadmap task or browse notes for your subjects.
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setAccountOpen((isOpen) => !isOpen)}
              className="vault-focus flex items-center gap-2 rounded-full p-1.5 transition-colors hover:bg-white/5"
              aria-label="Open account menu"
              aria-expanded={accountOpen}
            >
              <Avatar initials={initials} />
              <CaretDown
                aria-hidden="true"
                className={`size-4 text-white/50 transition-transform ${accountOpen ? "rotate-180" : ""}`}
              />
            </button>
            {accountOpen ? (
              <div className="dash-glass absolute top-12 right-0 w-56 rounded-2xl p-2">
                <div className="border-b border-white/8 px-3 py-2.5">
                  <p className="truncate text-sm font-semibold text-white">
                    {profile.displayName}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-white/42">
                    {accountEmail}
                  </p>
                </div>
                <form action={signOut} className="mt-1">
                  <button
                    type="submit"
                    className="vault-focus flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-white/65 transition hover:bg-white/5 hover:text-white"
                  >
                    <SignOut aria-hidden="true" className="size-[18px]" />
                    Sign out
                  </button>
                </form>
              </div>
            ) : null}
          </div>

          <button
            type="button"
            aria-expanded={navigationOpen}
            aria-controls="dashboard-mobile-navigation"
            aria-label={navigationOpen ? "Close navigation" : "Open navigation"}
            className="vault-focus grid size-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
            onClick={() => setNavigationOpen((current) => !current)}
          >
            {navigationOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <List aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </nav>

      {navigationOpen ? (
        <nav
          id="dashboard-mobile-navigation"
          aria-label="Mobile navigation"
          className="vault-mobile-nav mx-auto mt-2 max-w-[1320px] rounded-[1.5rem] p-3 lg:hidden"
        >
          {navigationItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={index === 0 ? "page" : undefined}
              className={`vault-focus block rounded-xl px-4 py-3 text-base font-medium ${
                index === 0 ? "text-white" : "text-white/80"
              }`}
              onClick={closeNavigation}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 space-y-1 border-t border-white/10 pt-3">
            <a
              href="#university-verification"
              onClick={closeNavigation}
              className="vault-focus flex items-start gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
            >
              <GraduationCap
                aria-hidden="true"
                className="mt-0.5 size-[19px] shrink-0 text-[#c7ff72]"
              />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-white">
                  {profile.universityName}
                </span>
                <span className="mt-0.5 block text-xs text-white/45">
                  {profile.collegeEmail ? "Verification pending" : "Not verified"}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-3 px-4 py-3">
              <Avatar initials={initials} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-white">
                  {profile.displayName}
                </span>
                <span className="block truncate text-xs text-white/45">
                  {accountEmail}
                </span>
              </span>
            </div>
            <form action={signOut}>
              <button
                type="submit"
                className="vault-focus flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                <SignOut aria-hidden="true" className="size-[19px]" />
                Sign out
              </button>
            </form>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function RoadmapPanel({
  completedTaskIds,
  onToggleTask,
}: {
  completedTaskIds: Set<string>;
  onToggleTask: (taskId: string) => void;
}): ReactElement {
  const progress = Math.round((completedTaskIds.size / roadmapTasks.length) * 100);

  return (
    <section
      id="roadmap"
      className="scroll-mt-28 overflow-hidden rounded-[1.75rem] bg-[#c7ff72] text-[#101528]"
      aria-labelledby="roadmap-heading"
    >
      <div className="px-6 pt-6 sm:px-8 sm:pt-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] text-[#101528]/55 uppercase">
              Continue studying
            </p>
            <h2
              id="roadmap-heading"
              className="vault-display mt-2 text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.05] tracking-[-0.03em]"
            >
              Operating Systems exam revision
            </h2>
            <p className="mt-2 text-sm font-medium text-[#101528]/60">
              Phase 2 of 4 · Process management
            </p>
          </div>
          <div className="sm:text-right">
            <p className="vault-display text-4xl tracking-[-0.03em] tabular-nums">
              {progress}%
            </p>
            <p className="mt-1 text-xs font-semibold text-[#101528]/55">
              phase complete
            </p>
          </div>
        </div>
        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[#101528]/12">
          <div
            className="h-full rounded-full bg-[#101528] transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <ul className="mt-6 divide-y divide-[#101528]/10 border-t border-[#101528]/10 px-6 sm:px-8">
        {roadmapTasks.map((task, index) => {
          const isComplete = completedTaskIds.has(task.id);
          const isCurrent = !isComplete && index === 1;

          return (
            <li key={task.id}>
              <button
                type="button"
                onClick={() => onToggleTask(task.id)}
                aria-pressed={isComplete}
                className="vault-focus group flex w-full items-center gap-3.5 rounded-lg py-4 text-left"
              >
                <span
                  className={`grid size-6 shrink-0 place-items-center rounded-full border-[1.5px] transition-colors ${
                    isComplete
                      ? "border-[#101528] bg-[#101528] text-[#c7ff72]"
                      : isCurrent
                        ? "border-[#101528] text-[#101528]"
                        : "border-[#101528]/30 text-transparent group-hover:border-[#101528]/70"
                  }`}
                >
                  {isComplete ? (
                    <Check aria-hidden="true" className="size-3.5" weight="bold" />
                  ) : isCurrent ? (
                    <span className="size-2 rounded-full bg-current" />
                  ) : null}
                </span>
                <span
                  className={`min-w-0 flex-1 text-sm font-semibold sm:text-[15px] ${
                    isComplete
                      ? "text-[#101528]/45 line-through decoration-[#101528]/30"
                      : ""
                  }`}
                >
                  {task.title}
                </span>
                {task.duration ? (
                  <span className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[#101528]/55 tabular-nums">
                    <Clock aria-hidden="true" className="size-4" />
                    {task.duration}
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col gap-3 border-t border-[#101528]/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <button
          type="button"
          onClick={() => onToggleTask("cpu-scheduling")}
          className="vault-focus group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#101528] px-5 text-sm font-bold text-white transition-colors hover:bg-[#6254e7]"
        >
          Continue roadmap
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </button>
        <a
          href="#roadmap"
          className="vault-focus rounded text-center text-sm font-bold text-[#101528]/65 transition-colors hover:text-[#101528] sm:text-left"
        >
          View all phases
        </a>
      </div>
    </section>
  );
}

function NotesSection({ query }: { query: string }): ReactElement {
  const filteredNotes = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return dashboardNotes;

    return dashboardNotes.filter((note) =>
      [note.title, note.scope, note.subject, note.fileType]
        .join(" ")
        .toLocaleLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <section id="notes" className="scroll-mt-28" aria-labelledby="notes-heading">
      <div className="flex items-end justify-between gap-4">
        <h2
          id="notes-heading"
          className="vault-display text-[clamp(1.5rem,2.2vw,1.9rem)] tracking-[-0.02em] text-white"
        >
          Notes for your subjects
        </h2>
        <a
          href="#notes"
          className="vault-focus shrink-0 rounded text-sm font-semibold text-[#c7ff72] transition-colors hover:text-[#d8ff9d]"
        >
          Browse all notes
        </a>
      </div>

      <div className="dash-glass mt-4 overflow-hidden rounded-[1.5rem]">
        {filteredNotes.length > 0 ? (
          <ul className="divide-y divide-white/8">
            {filteredNotes.map((note) => (
              <li key={note.id}>
                <a
                  href="#notes"
                  className="vault-focus group grid gap-3 px-5 py-4 transition-colors hover:bg-white/5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:px-6"
                >
                  <span className="flex min-w-0 items-start gap-3.5 sm:items-center">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#6254e7]/30 bg-[#6254e7]/15 text-[#b3a8ff]">
                      <FilePdf aria-hidden="true" className="size-5" weight="duotone" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-white transition-colors group-hover:text-[#c7ff72]">
                        {note.title}
                      </span>
                      <span className="mt-1 block truncate text-xs text-white/45">
                        {note.scope} · {note.subject}
                      </span>
                    </span>
                  </span>
                  <span className="flex items-center gap-4 pl-[54px] sm:pl-0">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-white tabular-nums">
                      <Star
                        aria-hidden="true"
                        className="size-3.5 text-[#c7ff72]"
                        weight="fill"
                      />
                      {note.rating.toFixed(1)}
                      <span className="font-normal text-white/40 tabular-nums">
                        ({note.ratingCount})
                      </span>
                    </span>
                    <span className="rounded-md border border-white/12 px-1.5 py-0.5 text-[10px] font-bold tracking-[0.08em] text-white/50 uppercase">
                      {note.fileType}
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 text-[#c7ff72] transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="px-4 py-12 text-center">
            <p className="text-sm font-semibold text-white">No matching notes</p>
            <p className="mt-1 text-sm text-white/45">
              Try a subject, university, or file type.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function VerificationPanel({ profile }: { profile: DashboardProfile }): ReactElement {
  return (
    <section
      id="university-verification"
      className="scroll-mt-28 rounded-[1.5rem] bg-[#6254e7] p-6 text-white"
      aria-labelledby="verification-heading"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/20 bg-white/10">
          <ShieldCheck aria-hidden="true" className="size-5" weight="duotone" />
        </span>
        <span className="truncate text-xs font-semibold text-white/60">
          {profile.universityName}
        </span>
      </div>
      <h2
        id="verification-heading"
        className="vault-display mt-5 text-[1.5rem] leading-tight tracking-[-0.02em]"
      >
        Verify your university email
      </h2>
      <p className="mt-2.5 text-sm leading-6 text-white/65">
        Unlock university-only notes, conversations, and study rooms.
      </p>
      {profile.collegeEmail ? (
        <p className="mt-3 break-all text-xs font-semibold text-white/85">
          {profile.collegeEmail}
        </p>
      ) : null}
      <button
        type="button"
        className="vault-button vault-button-light vault-focus mt-6 w-full"
      >
        Verify email
        <ArrowUpRight aria-hidden="true" className="size-4" />
      </button>
    </section>
  );
}

function RoomsPanel(): ReactElement {
  const [joinedRoomIds, setJoinedRoomIds] = useState<Set<string>>(new Set());

  const toggleRoom = (roomId: string): void => {
    setJoinedRoomIds((currentIds) => {
      const nextIds = new Set(currentIds);
      if (nextIds.has(roomId)) nextIds.delete(roomId);
      else nextIds.add(roomId);
      return nextIds;
    });
  };

  return (
    <section
      id="study-rooms"
      className="dash-glass scroll-mt-28 rounded-[1.5rem] p-6"
      aria-labelledby="rooms-heading"
    >
      <div className="flex items-center justify-between gap-3">
        <h2
          id="rooms-heading"
          className="vault-display text-[1.5rem] tracking-[-0.02em] text-white"
        >
          Live study rooms
        </h2>
        <a
          href="#study-rooms"
          className="vault-focus shrink-0 rounded text-xs font-bold text-[#c7ff72] transition-colors hover:text-[#d8ff9d]"
        >
          See all
        </a>
      </div>
      <ul className="mt-3 divide-y divide-white/8">
        {dashboardRooms.map((room) => {
          const isJoined = joinedRoomIds.has(room.id);
          return (
            <li key={room.id} className="flex items-start gap-3 py-4">
              <span
                aria-hidden="true"
                className="pulse-dot mt-1.5 size-2 shrink-0 rounded-full bg-[#c7ff72]"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">{room.title}</p>
                <p className="mt-1 text-xs text-white/45">
                  {room.scope} · {room.participantCount} studying
                </p>
              </div>
              <button
                type="button"
                onClick={() => toggleRoom(room.id)}
                aria-pressed={isJoined}
                className={`vault-focus shrink-0 rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                  isJoined
                    ? "bg-[#c7ff72] text-[#101528]"
                    : "border border-white/15 text-white/75 hover:border-[#c7ff72]/60 hover:text-[#c7ff72]"
                }`}
              >
                {isJoined ? "Joined" : "Join"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function QuickActions(): ReactElement {
  const quickActions = [
    { label: "Upload notes", icon: UploadSimple, href: "#notes" },
    { label: "Start a study room", icon: Plus, href: "#study-rooms" },
    { label: "Create a roadmap", icon: NotePencil, href: "#roadmap" },
  ] as const;

  return (
    <section
      aria-labelledby="quick-actions-heading"
      className="dash-glass rounded-[1.5rem] p-6"
    >
      <h2
        id="quick-actions-heading"
        className="vault-display text-[1.5rem] tracking-[-0.02em] text-white"
      >
        Quick actions
      </h2>
      <ul className="mt-2 divide-y divide-white/8">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <li key={action.label}>
              <a
                href={action.href}
                className="vault-focus group flex items-center gap-3 py-3.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/55 transition-colors group-hover:border-[#c7ff72]/40 group-hover:text-[#c7ff72]">
                  <Icon aria-hidden="true" className="size-[18px]" />
                </span>
                <span className="flex-1">{action.label}</span>
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 text-white/30 transition group-hover:translate-x-0.5 group-hover:text-[#c7ff72]"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

type DashboardShellProps = {
  studentProfile: StudentProfile;
  accountEmail: string;
};

export function DashboardShell({
  studentProfile,
  accountEmail,
}: DashboardShellProps): ReactElement {
  const profile = createDashboardProfile(studentProfile);
  const [searchQuery, setSearchQuery] = useState("");
  const [completedTaskIds, setCompletedTaskIds] = useState<Set<string>>(
    () => new Set(["process-states"]),
  );

  const toggleTask = (taskId: string): void => {
    setCompletedTaskIds((currentIds) => {
      const nextIds = new Set(currentIds);
      if (nextIds.has(taskId)) nextIds.delete(taskId);
      else nextIds.add(taskId);
      return nextIds;
    });
  };

  return (
    <div
      id="dashboard-home"
      className="vault-page relative min-h-dvh overflow-x-hidden bg-[#0b1022] text-white"
    >
      <a
        href="#dashboard-main"
        className="vault-focus fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-[#c7ff72] px-5 py-3 text-sm font-bold text-[#101528] focus:translate-y-0"
      >
        Skip to content
      </a>
      <div
        aria-hidden="true"
        className="vault-ambient vault-ambient-one absolute -top-52 left-[6%] size-[34rem] rounded-full"
      />
      <div
        aria-hidden="true"
        className="vault-ambient vault-ambient-two absolute top-[38%] right-[-16rem] size-[42rem] rounded-full"
      />
      <div aria-hidden="true" className="dash-noise" />

      <DashboardNav
        profile={profile}
        accountEmail={accountEmail}
        query={searchQuery}
        onQueryChange={setSearchQuery}
      />

      <main
        id="dashboard-main"
        className="relative mx-auto w-full max-w-[1320px] px-5 pt-28 pb-20 sm:px-8 sm:pt-32"
      >
        <SearchField
          query={searchQuery}
          onQueryChange={setSearchQuery}
          className="mb-8 md:hidden"
        />

        <div className="dash-rise">
          <h1 className="vault-display text-[clamp(2.6rem,5.2vw,4.75rem)] leading-[0.95] tracking-[-0.045em] text-white">
            Good morning,{" "}
            <span className="text-white/55">{profile.displayName}.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/58">
            {profile.welcomeMessage}
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-2">
            <span className="dash-chip">
              <BookOpenText aria-hidden="true" className="size-4 text-[#c7ff72]" />
              Focus subjects
            </span>
            {profile.subjects.slice(0, 3).map((subject) => (
              <span key={subject} className="dash-chip">
                {subject}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 sm:mt-12 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-8">
          <div className="min-w-0 space-y-6">
            <div className="dash-rise dash-rise-1">
              <RoadmapPanel
                completedTaskIds={completedTaskIds}
                onToggleTask={toggleTask}
              />
            </div>
            <div className="dash-rise dash-rise-2">
              <NotesSection query={searchQuery} />
            </div>
          </div>

          <aside
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1"
            aria-label="Study context"
          >
            <div className="dash-rise dash-rise-2">
              <VerificationPanel profile={profile} />
            </div>
            <div className="dash-rise dash-rise-3">
              <RoomsPanel />
            </div>
            <div className="dash-rise dash-rise-3">
              <QuickActions />
            </div>
            <p className="dash-rise dash-rise-4 text-xs leading-5 text-white/38 sm:col-span-2 xl:col-span-1">
              Preview content is shown while live notes and rooms are connected.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}
