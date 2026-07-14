import type { ReactElement } from "react";
import {
  Check,
  Download,
  LockKeyhole,
  MessageSquareText,
  Mic,
  Route,
  Star,
  Video,
} from "lucide-react";
import { noteRows, roadmapSteps } from "@/app/landing-data";

function InkedStars({ filled }: { filled: number }): ReactElement {
  return (
    <span aria-hidden="true" className="inline-flex gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3 ${
            i < filled
              ? "fill-[var(--marigold-deep)] text-[var(--marigold-deep)]"
              : "text-[var(--field-line)]"
          }`}
        />
      ))}
    </span>
  );
}

/* ————— Notes: the register ledger ————— */

export function NotesSection(): ReactElement {
  return (
    <section
      id="notes"
      className="on-light ledger-lines-light border-b border-[var(--field-line)] bg-[var(--off-white)] py-20 sm:py-24 lg:py-32"
    >
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-[var(--ink)]">
              Find the note worth opening.
            </h2>
            <p className="prose-measure mt-6 text-lg leading-8 text-[var(--ink-body)]">
              Search runs across titles, subjects, and the text inside the
              files themselves. Rating and scope sit next to every result, so
              you judge before you download.
            </p>
          </div>
        </div>

        {/* The ledger table */}
        <figure
          data-reveal
          aria-label="Product preview: the notes register with ratings and scope"
          className="mt-12"
        >
          <div className="card overflow-hidden">
            <div className="flex items-baseline justify-between border-b border-[var(--border-strong)] px-5 py-4 sm:px-7">
              <span className="text-[12px] font-bold tracking-[0.08em] text-[var(--ink-muted)] uppercase">
                Register · Operating Systems
              </span>
              <span className="hidden text-[12.5px] text-[var(--ink-muted)] sm:block">
                Public + VIT Vellore
              </span>
            </div>

            <ul>
              {noteRows.map((note, index) => (
                <li
                  key={note.title}
                  className={`grid grid-cols-[auto_1fr_auto] items-center gap-x-4 px-5 py-5 sm:gap-x-6 sm:px-7 ${
                    index < noteRows.length - 1
                      ? "border-b border-[var(--field-line)]"
                      : ""
                  } ${index === 0 ? "bg-[var(--marigold-wash)]" : ""}`}
                >
                  <span
                    aria-hidden="true"
                    className="font-display hidden text-lg text-[var(--ink-muted)] sm:block"
                  >
                    {note.entry}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[15px] font-bold text-[var(--ink)] sm:text-base">
                      {note.title}
                    </p>
                    <p className="mt-1 text-[12.5px] text-[var(--ink-muted)]">
                      {note.subject} · {note.scope}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="text-right">
                      <InkedStars filled={note.rating} />
                      <p className="mt-1 text-[12px] font-semibold text-[var(--ink-body)]">
                        {note.label}
                      </p>
                    </div>
                    <span className="grid size-9 place-items-center rounded-[8px] border border-[var(--border-strong)] text-[var(--ink)]">
                      <Download aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <figcaption className="mt-4 text-[12px] text-[var(--ink-muted)]">
            Product preview — sample data. Original PDF and image files,
            downloadable with scope access.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ————— Rooms: the late-night section ————— */

export function RoomsSection(): ReactElement {
  const participants = ["AK", "SM", "RP", "NJ"];

  return (
    <section
      id="rooms"
      className="on-green ledger-lines-green bg-[var(--green-deep)] py-20 text-[var(--ivory)] sm:py-24 lg:py-32"
    >
      <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <h2 className="font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-[var(--ivory)]">
            Late nights are easier together.
          </h2>
          <p className="prose-measure mt-6 text-lg leading-8 text-[var(--ivory-muted)]">
            Study rooms are temporary spaces with a shared timer, light chat,
            audio, and video. They end when everyone leaves — no recordings, no
            archive, no feed to scroll the next morning.
          </p>
          <dl className="mt-9 grid gap-x-8 gap-y-6 border-t border-[var(--green-soft)] pt-7 sm:grid-cols-2">
            <div>
              <dt className="text-[15px] font-bold text-[var(--ivory)]">
                Scope still applies
              </dt>
              <dd className="mt-2 text-sm leading-6 text-[var(--ivory-muted)]">
                University room links only open for verified members. Sharing a
                link never bypasses the boundary.
              </dd>
            </div>
            <div>
              <dt className="text-[15px] font-bold text-[var(--ivory)]">
                Nothing is kept
              </dt>
              <dd className="mt-2 text-sm leading-6 text-[var(--ivory-muted)]">
                Only safety records persist for moderation — never video,
                never full chat.
              </dd>
            </div>
          </dl>
        </div>

        {/* Room vignette */}
        <figure
          data-reveal
          aria-label="Product preview: a live study room with shared timer"
        >
          <div className="card-green overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--green-soft)] px-5 py-4 sm:px-6">
              <span className="inline-flex items-center gap-2.5 text-[13px] font-bold text-[var(--ivory)]">
                <span
                  aria-hidden="true"
                  className="pulse-dot size-2 rounded-full bg-[var(--marigold)]"
                />
                OS exam sprint
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-[7px] border border-[var(--green-soft)] px-2.5 py-1.5 text-[11px] font-semibold text-[var(--ivory-muted)]">
                <LockKeyhole aria-hidden="true" className="size-3" />
                VIT Vellore only
              </span>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:p-6">
              <div className="rounded-[10px] border border-[var(--green-soft)] bg-[var(--green-deep)] p-6 text-center sm:p-8">
                <p className="font-display text-[clamp(3rem,8vw,4.5rem)] leading-none text-[var(--ivory)]">
                  42:17
                </p>
                <p className="mt-3 text-[12px] tracking-[0.06em] text-[var(--ivory-faint)] uppercase">
                  Focus block in progress
                </p>
                <div className="mx-auto mt-5 h-1.5 w-44 max-w-full overflow-hidden rounded-full bg-[rgba(244,241,228,0.14)]">
                  <span className="progress-draw block h-full w-[62%] rounded-full bg-[var(--marigold)]" />
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-4 sm:w-40 sm:flex-col sm:items-stretch">
                <div>
                  <div aria-hidden="true" className="flex -space-x-2">
                    {participants.map((p, i) => (
                      <span
                        key={p}
                        className={`grid size-9 place-items-center rounded-full border-2 border-[var(--green)] text-[10px] font-bold ${
                          i === 0
                            ? "bg-[var(--marigold)] text-[var(--ink)]"
                            : "bg-[var(--ivory)] text-[var(--ink)]"
                        }`}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2.5 text-[12px] text-[var(--ivory-muted)]">
                    6 classmates focusing
                  </p>
                </div>
                <div className="flex gap-2">
                  {[Mic, Video, MessageSquareText].map((Icon, i) => (
                    <span
                      key={i}
                      className="grid size-9 place-items-center rounded-[8px] border border-[var(--green-soft)] text-[var(--ivory-muted)]"
                    >
                      <Icon aria-hidden="true" className="size-3.5" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <figcaption className="mt-4 text-center text-[12px] text-[var(--ivory-faint)]">
            Product preview — sample data
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ————— Roadmaps ————— */

export function RoadmapsSection(): ReactElement {
  return (
    <section
      id="roadmaps"
      className="on-light border-b border-[var(--field-line)] bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="page-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        {/* Roadmap vignette */}
        <figure
          data-reveal
          aria-label="Product preview: a generated study roadmap with checked phases"
          className="order-2 lg:order-1"
        >
          <div className="card relative overflow-hidden px-5 pt-8 pb-2 sm:px-7">
            <span className="index-tab left-5 sm:left-7">
              <Route aria-hidden="true" className="mr-1.5 size-3.5" />
              Roadmap
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--border-strong)] pb-4">
              <p className="font-display text-xl text-[var(--ink)]">
                Operating Systems · 8 days
              </p>
              <p className="text-[13px] font-semibold text-[var(--marigold-deep)]">
                2 of 4 phases done
              </p>
            </div>

            <ol>
              {roadmapSteps.map((step, index) => (
                <li
                  key={step.title}
                  className={`grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4.5 ${
                    index < roadmapSteps.length - 1
                      ? "border-b border-[var(--field-line)]"
                      : ""
                  }`}
                >
                  <span
                    className={`grid size-7 place-items-center rounded-full text-[12px] font-bold ${
                      step.done
                        ? "bg-[var(--green-deep)] text-[var(--marigold)]"
                        : "border border-[var(--border-strong)] bg-white text-[var(--ink-muted)]"
                    }`}
                  >
                    {step.done ? (
                      <Check
                        aria-hidden="true"
                        className="size-3.5"
                        strokeWidth={3}
                      />
                    ) : (
                      index + 1
                    )}
                  </span>
                  <div>
                    <p className="text-[15px] font-bold text-[var(--ink)]">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-[12.5px] text-[var(--ink-muted)]">
                      {step.detail}
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.08em] text-[var(--ink-muted)] uppercase">
                    {step.done ? "Done" : `Day ${index * 2 + 1}`}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <figcaption className="mt-4 text-[12px] text-[var(--ink-muted)]">
            Product preview — sample data. Sources link back to the notes used.
          </figcaption>
        </figure>

        <div className="order-1 lg:order-2">
          <h2 className="font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-[var(--ink)]">
            Walk into exam week with a plan.
          </h2>
          <p className="prose-measure mt-6 text-lg leading-8 text-[var(--ink-body)]">
            Give ClassVault a topic and a study mode — in-depth or exam
            revision — and it builds a phased roadmap from the notes your plan
            can use, with sources linked and progress private to you.
          </p>
          <p className="prose-measure mt-4 text-[15px] leading-7 text-[var(--ink-muted)]">
            Roadmaps are saved snapshots: they don&apos;t shift underneath you
            when notes change, and they stay yours after any plan change.
          </p>
        </div>
      </div>
    </section>
  );
}
