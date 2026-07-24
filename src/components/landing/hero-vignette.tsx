import type { ReactElement } from "react";
import { Check, Clock3, FileText, Search, Star } from "lucide-react";

const noteResults = [
  {
    title: "Operating Systems — Unit 3",
    scope: "VIT Vellore",
    rating: "4.9",
  },
  {
    title: "DBMS — Exam Revision Pack",
    scope: "Public community",
    rating: "4.8",
  },
] as const;

export function HeroVignette(): ReactElement {
  return (
    <figure
      aria-label="Illustrative ClassVault product preview showing note search and a study roadmap"
      className="vault-hero-figure group relative mx-auto w-full max-w-[620px]"
    >
      <div className="vault-hero-image absolute inset-0 overflow-hidden rounded-[2rem]">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(7,10,24,0.05),rgba(7,10,24,0.88))]" />
      </div>

      <div className="relative min-h-[540px] p-5 sm:min-h-[610px] sm:p-8">
        <div className="vault-product-window absolute top-8 right-4 left-4 overflow-hidden rounded-[1.6rem] sm:top-12 sm:right-12 sm:left-0">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#ff6d71]" />
              <span className="size-2 rounded-full bg-[#ffd269]" />
              <span className="size-2 rounded-full bg-[#b7f36b]" />
            </div>
            <span className="text-[10px] font-semibold tracking-[0.14em] text-white/45 uppercase">
              Product preview
            </span>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white/55">
              <Search aria-hidden="true" className="size-4" />
              <span className="text-sm">process scheduling notes</span>
              <span className="ml-auto hidden rounded-md bg-[#c7ff72] px-2 py-1 text-[10px] font-bold text-[#101528] sm:block">
                24 matches
              </span>
            </div>

            <div className="mt-3 space-y-2.5">
              {noteResults.map((note, index) => (
                <div
                  key={note.title}
                  className={`rounded-xl border p-3.5 sm:p-4 ${
                    index === 0
                      ? "border-[#c7ff72]/35 bg-[#c7ff72]/10"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-white">
                      <FileText aria-hidden="true" className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-white">
                        {note.title}
                      </p>
                      <p className="mt-1 text-[11px] text-white/50">
                        {note.scope} · PDF
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#d9ffa3]">
                      <Star
                        aria-hidden="true"
                        className="size-3 fill-current"
                      />
                      {note.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="vault-roadmap-card absolute right-0 bottom-5 left-8 rounded-[1.5rem] p-4 sm:right-0 sm:bottom-8 sm:left-28 sm:p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold tracking-[0.12em] text-[#6254e7] uppercase">
                Your next study block
              </p>
              <p className="mt-1 text-sm font-bold text-[#101528] sm:text-base">
                Scheduling algorithms
              </p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-[#101528] px-3 py-1.5 text-[10px] font-semibold text-white">
              <Clock3 aria-hidden="true" className="size-3" />
              42 min
            </span>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#101528]/10">
            <div className="h-full w-[64%] rounded-full bg-[#6254e7]" />
          </div>
          <div className="mt-3 flex items-center gap-2 text-[11px] font-medium text-[#4d5365]">
            <Check aria-hidden="true" className="size-3.5 text-[#6254e7]" />
            3 of 5 tasks complete · 4 source notes
          </div>
        </div>
      </div>

      <figcaption className="sr-only">
        Sample product data shown for illustration. ClassVault is currently
        pre-launch.
      </figcaption>
    </figure>
  );
}
