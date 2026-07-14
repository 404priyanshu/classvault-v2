import type { ReactElement } from "react";
import { Download, FileText, ShieldCheck, Star } from "lucide-react";

function Stars({ filled }: { filled: number }): ReactElement {
  return (
    <span aria-hidden="true" className="inline-flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${
            i < filled
              ? "fill-[var(--marigold)] text-[var(--marigold)]"
              : "text-[rgba(244,241,228,0.25)]"
          }`}
        />
      ))}
    </span>
  );
}

export function HeroVignette(): ReactElement {
  return (
    <div className="on-green relative mx-auto w-full max-w-[460px]">
      {/* The register entry card */}
      <figure aria-label="Product preview: a rated, university-verified note as it appears in ClassVault">
        <div className="card-green relative overflow-hidden">
          {/* Ledger header strip */}
          <div className="flex items-baseline justify-between border-b border-[var(--green-soft)] px-6 py-4">
            <span className="text-[12px] font-bold tracking-[0.08em] text-[var(--ivory-faint)] uppercase">
              Note register
            </span>
            <span className="font-display text-sm text-[var(--ivory-muted)]">
              entry № 042
            </span>
          </div>

          <div className="px-6 pt-6 pb-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[12px] font-semibold text-[var(--marigold)]">
                  Operating Systems · Unit 3
                </p>
                <h3 className="font-display mt-2 text-[1.65rem] leading-[1.15] text-[var(--ivory)]">
                  Process scheduling, worked from zero
                </h3>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-[10px] border border-[var(--green-soft)] bg-[rgba(244,241,228,0.06)]">
                <FileText
                  aria-hidden="true"
                  className="size-5 text-[var(--ivory-muted)]"
                />
              </span>
            </div>

            {/* Skeleton lines suggest the file */}
            <div className="mt-6 space-y-2.5" aria-hidden="true">
              <span className="block h-1.5 w-full rounded-full bg-[rgba(244,241,228,0.12)]" />
              <span className="block h-1.5 w-[84%] rounded-full bg-[rgba(244,241,228,0.12)]" />
              <span className="block h-1.5 w-[68%] rounded-full bg-[rgba(244,241,228,0.12)]" />
            </div>

            {/* Rating row */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--green-soft)] pt-5">
              <div>
                <div className="flex items-center gap-2.5">
                  <Stars filled={5} />
                  <span className="text-sm font-bold text-[var(--ivory)]">
                    4.9
                  </span>
                </div>
                <p className="mt-1.5 text-[12px] text-[var(--ivory-muted)]">
                  Rated by classmates who used it
                </p>
              </div>
              <span className="grid size-10 place-items-center rounded-[10px] bg-[var(--marigold)] text-[var(--ink)]">
                <Download aria-hidden="true" className="size-4" />
              </span>
            </div>
          </div>
        </div>

        {/* The stamp — overlapping the card corner */}
        <div className="stamp stamp-marigold stamp-in absolute -top-4 right-4 bg-[var(--green-deep)] sm:-right-5">
          <ShieldCheck aria-hidden="true" className="size-3.5" />
          Verified · VIT Vellore
        </div>

        <figcaption className="mt-4 text-center text-[12px] text-[var(--ivory-faint)]">
          Product preview — sample data
        </figcaption>
      </figure>
    </div>
  );
}
