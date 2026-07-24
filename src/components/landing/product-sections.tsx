"use client";

import type { ReactElement } from "react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  Check,
  FileSearch,
  LockKeyhole,
  Route,
  Timer,
} from "lucide-react";
import { platformPanels, studyFlow } from "@/app/landing-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const panelIcons = [FileSearch, LockKeyhole, Timer, Route] as const;

export function PlatformAccordion(): ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="vault-section bg-[#0b1022] px-5 py-32 text-white sm:px-8 md:py-44">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="vault-display max-w-4xl text-[clamp(3rem,6vw,6.5rem)] leading-[0.93] tracking-[-0.065em]">
            Four surfaces.
            <br />
            One continuous rhythm.
          </h2>
          <p className="max-w-xl text-base leading-7 text-white/55 lg:justify-self-end lg:text-lg lg:leading-8">
            Move from discovery to action without losing context. Each surface
            keeps scope, trust, and source material attached.
          </p>
        </div>

        <div className="vault-horizontal-accordion mt-16 flex min-h-[560px] flex-col gap-2 lg:flex-row">
          {platformPanels.map((panel, index) => {
            const Icon = panelIcons[index];
            const active = activeIndex === index;

            return (
              <button
                key={panel.id}
                type="button"
                aria-pressed={active}
                className={`vault-accordion-panel vault-focus group relative min-h-[210px] overflow-hidden rounded-[1.6rem] text-left ${
                  active ? "is-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span
                  aria-hidden="true"
                  data-image={panel.image}
                  className="vault-accordion-image absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,28,0.04)_10%,rgba(8,12,28,0.94)_92%)]" />

                <span className="relative flex h-full min-h-[210px] flex-col justify-between p-5 sm:p-7 lg:min-h-[560px]">
                  <span className="flex items-center justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-full border border-white/15 bg-black/20 backdrop-blur-md">
                      <Icon aria-hidden="true" className="size-4.5" />
                    </span>
                    <span className="grid size-10 place-items-center rounded-full border border-white/15 bg-black/20 transition-transform duration-500 group-hover:rotate-45">
                      <ArrowDownRight aria-hidden="true" className="size-4" />
                    </span>
                  </span>

                  <span>
                    <span className="block text-[11px] font-bold tracking-[0.14em] text-[#c7ff72] uppercase">
                      {panel.title}
                    </span>
                    <span className="vault-display mt-3 block text-3xl leading-none tracking-[-0.045em] sm:text-4xl">
                      {panel.shortTitle}
                    </span>
                    <span
                      className={`mt-4 block max-w-md text-sm leading-6 text-white/65 transition-opacity duration-500 sm:text-base sm:leading-7 ${
                        active ? "opacity-100" : "lg:opacity-0"
                      }`}
                    >
                      {panel.description}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StudyFlowSection(): ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          if (!sectionRef.current || !headingRef.current) return;

          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top+=112",
            end: "bottom bottom-=120",
            pin: headingRef.current,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });

          const cards = gsap.utils.toArray<HTMLElement>(
            ".vault-stack-card",
            sectionRef.current,
          );

          cards.forEach((card, index) => {
            if (index === 0) return;

            gsap.fromTo(
              card,
              { y: 120, scale: 0.94 },
              {
                y: 0,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 88%",
                  end: "top 42%",
                  scrub: 0.8,
                },
              },
            );
          });
        },
      );

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="study-flow"
      ref={sectionRef}
      className="vault-section bg-[#6254e7] px-5 py-32 text-white sm:px-8 md:py-44"
    >
      <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
        <div ref={headingRef} className="vault-flow-heading self-start">
          <p className="text-xs font-bold tracking-[0.14em] text-[#d9ffa3] uppercase">
            From search to study plan
          </p>
          <h2 className="vault-display mt-5 max-w-2xl text-[clamp(3.1rem,6vw,6.8rem)] leading-[0.91] tracking-[-0.07em]">
            Keep the source. Lose the scramble.
          </h2>
          <p className="mt-7 max-w-lg text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            The product is designed as a sequence, not a feed. Every step
            narrows the distance between material you can trust and work you
            can actually finish.
          </p>
        </div>

        <div className="vault-stack-list">
          {studyFlow.map((step, index) => (
            <article
              key={step.title}
              className={`vault-stack-card vault-stack-${index} sticky overflow-hidden rounded-[2rem] border border-white/35 bg-[#f7f6f1] p-7 text-[#101528] shadow-[0_35px_90px_-45px_rgba(5,7,18,0.65)] sm:p-10`}
            >
              <div className="flex items-center justify-between gap-4 border-b border-[#101528]/10 pb-6">
                <span className="text-xs font-bold tracking-[0.12em] text-[#6254e7] uppercase">
                  {step.meta}
                </span>
                <span className="grid size-11 place-items-center rounded-full bg-[#6254e7]/10 text-[#6254e7]">
                  <Route aria-hidden="true" className="size-4.5" />
                </span>
              </div>

              <div className="py-12 sm:py-16">
                <h3 className="vault-display max-w-xl text-[clamp(2.4rem,4vw,4.8rem)] leading-[0.95] tracking-[-0.055em]">
                  {step.title}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-7 text-[#5e6474] sm:text-lg sm:leading-8">
                  {step.description}
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-[#101528]/10 pt-6 text-sm font-semibold text-[#101528]">
                <span className="grid size-8 place-items-center rounded-full bg-[#c7ff72]">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                Source and access rules stay attached
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
