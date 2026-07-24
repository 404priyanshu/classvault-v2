import type { ReactElement } from "react";
import {
  ArrowUpRight,
  Check,
  Clock3,
  FileSearch,
  LockKeyhole,
  Route,
  Star,
  Users,
} from "lucide-react";
import { capabilityLabels, featureCards } from "@/app/landing-data";

function NotesVisual(): ReactElement {
  return (
    <div className="vault-bento-visual mt-8 overflow-hidden rounded-[1.4rem] border border-[#101528]/10 bg-white shadow-[0_24px_70px_-40px_rgba(16,21,40,0.45)]">
      <div className="flex items-center gap-2 border-b border-[#101528]/10 px-4 py-3 text-xs text-[#6b7182]">
        <FileSearch aria-hidden="true" className="size-4" />
        Search inside notes
      </div>
      <div className="divide-y divide-[#101528]/8">
        {[
          ["Process scheduling, worked from zero", "4.9"],
          ["Memory management — complete notes", "4.8"],
          ["OS exam revision pack", "4.7"],
        ].map(([title, rating], index) => (
          <div
            key={title}
            className={`flex items-center gap-3 px-4 py-3.5 ${
              index === 0 ? "bg-[#f0eefe]" : ""
            }`}
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#6254e7]/10 text-[#6254e7]">
              <FileSearch aria-hidden="true" className="size-3.5" />
            </span>
            <p className="min-w-0 flex-1 truncate text-xs font-semibold text-[#101528] sm:text-sm">
              {title}
            </p>
            <span className="flex items-center gap-1 text-xs font-bold text-[#6254e7]">
              <Star aria-hidden="true" className="size-3 fill-current" />
              {rating}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function UniversityVisual(): ReactElement {
  return (
    <div className="vault-bento-visual mt-7 grid gap-3 sm:grid-cols-2">
      <div className="rounded-[1.2rem] border border-white/15 bg-white/10 p-4">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-[#c7ff72] text-[#101528]">
            <LockKeyhole aria-hidden="true" className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">VIT Vellore</p>
            <p className="text-[11px] text-white/50">Membership verified</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-[1.2rem] border border-white/15 bg-white/[0.06] p-4">
        <Check aria-hidden="true" className="size-5 text-[#c7ff72]" />
        <p className="text-xs leading-5 text-white/65">
          Institution domain matched
        </p>
      </div>
    </div>
  );
}

function RoomVisual(): ReactElement {
  const participants = [
    { initials: "AK", className: "z-40" },
    { initials: "SM", className: "z-30" },
    { initials: "RP", className: "z-20" },
    { initials: "+6", className: "z-10" },
  ] as const;

  return (
    <div className="vault-bento-visual mt-7">
      <div className="flex -space-x-2">
        {participants.map((participant) => (
          <span
            key={participant.initials}
            className={`${participant.className} grid size-10 place-items-center rounded-full border-2 border-[#c7ff72] bg-[#101528] text-[10px] font-bold text-white`}
          >
            {participant.initials}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between rounded-xl bg-[#101528] px-4 py-3 text-white">
        <span className="flex items-center gap-2 text-xs font-medium">
          <Users aria-hidden="true" className="size-3.5 text-[#c7ff72]" />
          Focus room
        </span>
        <span className="flex items-center gap-1.5 font-mono text-xs">
          <Clock3 aria-hidden="true" className="size-3.5" />
          38:12
        </span>
      </div>
    </div>
  );
}

function RoadmapVisual(): ReactElement {
  return (
    <div className="vault-bento-visual mt-7 space-y-2.5">
      {["Core concepts", "Worked examples", "Exam recall"].map(
        (item, index) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-[#101528]/10 bg-white/65 px-3.5 py-3"
          >
            <span
              className={`grid size-5 place-items-center rounded-full border text-[10px] font-bold ${
                index === 0
                  ? "border-[#6254e7] bg-[#6254e7] text-white"
                  : "border-[#101528]/15 text-[#717789]"
              }`}
            >
              {index + 1}
            </span>
            <span className="text-xs font-semibold text-[#101528]">{item}</span>
            {index === 0 ? (
              <Route
                aria-hidden="true"
                className="ml-auto size-3.5 text-[#6254e7]"
              />
            ) : null}
          </div>
        ),
      )}
    </div>
  );
}

function FeatureVisual({ id }: { id: string }): ReactElement {
  if (id === "notes") return <NotesVisual />;
  if (id === "universities") return <UniversityVisual />;
  if (id === "rooms") return <RoomVisual />;
  return <RoadmapVisual />;
}

export function CapabilityMarquee(): ReactElement {
  return (
    <div className="vault-marquee border-y border-white/10 bg-[#0b1022] py-5 text-white">
      <div className="vault-marquee-track" aria-label="ClassVault capabilities">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-7 pr-7"
          >
            {capabilityLabels.map((label) => (
              <div key={label} className="flex items-center gap-7">
                <span className="whitespace-nowrap text-sm font-medium tracking-[-0.01em] text-white/65 sm:text-base">
                  {label}
                </span>
                <span className="size-1.5 rounded-full bg-[#c7ff72]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeatureBento(): ReactElement {
  return (
    <section
      id="platform"
      className="vault-section bg-[#f5f3ee] px-5 py-32 sm:px-8 md:py-44"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h2 className="vault-display max-w-4xl text-[clamp(3rem,6vw,6.7rem)] leading-[0.92] tracking-[-0.065em] text-[#101528]">
            One place for the whole study loop.
          </h2>
          <p className="max-w-xl text-base leading-7 text-[#5e6474] lg:justify-self-end lg:text-lg lg:leading-8">
            ClassVault connects the moments that usually live in different
            tabs: finding material, deciding whether to trust it, studying with
            classmates, and turning it into a route through the exam.
          </p>
        </div>

        <div className="vault-bento-grid mt-16 grid grid-flow-dense gap-3 lg:grid-cols-4 lg:grid-rows-2">
          {featureCards.map((feature) => (
            <a
              key={feature.id}
              href="#study-flow"
              className={`vault-bento-card vault-bento-${feature.id} vault-focus group overflow-hidden rounded-[1.8rem] p-6 sm:p-8`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="vault-bento-detail text-[11px] font-bold tracking-[0.12em] uppercase">
                    {feature.detail}
                  </p>
                  <h3 className="vault-display mt-4 max-w-xl text-[clamp(1.8rem,3vw,3rem)] leading-[1.02] tracking-[-0.045em]">
                    {feature.title}
                  </h3>
                  <p className="vault-bento-copy mt-4 max-w-lg text-sm leading-6 sm:text-base sm:leading-7">
                    {feature.description}
                  </p>
                </div>
                <span className="vault-bento-arrow grid size-10 shrink-0 place-items-center rounded-full border transition-transform duration-500 ease-out group-hover:rotate-45">
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </span>
              </div>
              <FeatureVisual id={feature.id} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
