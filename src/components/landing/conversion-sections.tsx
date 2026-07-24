"use client";

import type { ReactElement } from "react";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
  Route,
  Timer,
} from "lucide-react";
import { planRows, productPrinciples } from "@/app/landing-data";

const principleIcons = [FileText, Timer, Route] as const;

export function ProductPrinciples(): ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  const principle = productPrinciples[activeIndex];

  function movePrinciple(direction: -1 | 1): void {
    setActiveIndex((current) => {
      const next = current + direction;
      if (next < 0) return productPrinciples.length - 1;
      if (next >= productPrinciples.length) return 0;
      return next;
    });
  }

  return (
    <section className="vault-section bg-[#f5f3ee] px-5 py-32 sm:px-8 md:py-44">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 rounded-[2rem] border border-[#101528]/10 bg-white p-6 shadow-[0_35px_100px_-65px_rgba(16,21,40,0.5)] sm:p-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:p-16">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-[#6254e7] uppercase">
                The bar we are building against
              </p>
              <h2 className="vault-display mt-5 max-w-lg text-[clamp(2.7rem,5vw,5.5rem)] leading-[0.94] tracking-[-0.06em] text-[#101528]">
                Product choices, stated plainly.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-[#717789] sm:text-base sm:leading-7">
                These are pre-launch product principles, not testimonials or
                traction claims.
              </p>
            </div>

            <div className="flex items-center gap-3" aria-hidden="true">
              {principleIcons.map((Icon, index) => (
                <span
                  key={index}
                  className={`grid size-12 place-items-center rounded-full border-4 border-white transition-transform duration-500 ${
                    index === activeIndex
                      ? "z-10 scale-110 bg-[#6254e7] text-white"
                      : "-ml-5 bg-[#ece9e1] text-[#717789] first:ml-0"
                  }`}
                >
                  <Icon className="size-4.5" />
                </span>
              ))}
            </div>
          </div>

          <div className="flex min-h-[420px] flex-col justify-between rounded-[1.6rem] bg-[#101528] p-6 text-white sm:p-10">
            <div aria-live="polite" aria-atomic="true">
              <p className="text-xs font-bold tracking-[0.13em] text-[#c7ff72] uppercase">
                {principle.marker}
              </p>
              <blockquote className="vault-display mt-7 text-[clamp(2.2rem,4vw,4.4rem)] leading-[1.02] tracking-[-0.05em]">
                “{principle.quote}”
              </blockquote>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
                {principle.detail}
              </p>
            </div>

            <div className="mt-12 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
              <span className="font-mono text-xs text-white/40">
                {String(activeIndex + 1).padStart(2, "0")} / {" "}
                {String(productPrinciples.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous product principle"
                  className="vault-focus grid size-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white hover:text-[#101528]"
                  onClick={() => movePrinciple(-1)}
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next product principle"
                  className="vault-focus grid size-11 place-items-center rounded-full bg-[#c7ff72] text-[#101528] transition-transform hover:scale-105"
                  onClick={() => movePrinciple(1)}
                >
                  <ArrowRight aria-hidden="true" className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlansSection(): ReactElement {
  return (
    <section
      id="plans"
      className="vault-section bg-white px-5 py-32 sm:px-8 md:py-44"
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="vault-display max-w-4xl text-[clamp(3rem,6vw,6.7rem)] leading-[0.92] tracking-[-0.065em] text-[#101528]">
            University access is never the upgrade.
          </h2>
          <p className="max-w-xl text-base leading-7 text-[#5e6474] lg:justify-self-end lg:text-lg lg:leading-8">
            Free students can still browse, download, rate, and join their
            verified university community. Pro expands creation limits and
            advanced study tools.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#101528]/10">
          <div className="grid grid-cols-[1.15fr_0.85fr_0.85fr] bg-[#101528] px-4 py-5 text-white sm:px-7">
            <span className="text-sm font-semibold">What is included</span>
            <span className="text-sm font-semibold">Free</span>
            <span className="text-sm font-semibold text-[#c7ff72]">Pro</span>
          </div>
          {planRows.map((row) => (
            <div
              key={row.feature}
              className="grid grid-cols-1 gap-4 border-b border-[#101528]/8 px-4 py-6 last:border-b-0 sm:grid-cols-[1.15fr_0.85fr_0.85fr] sm:gap-6 sm:px-7"
            >
              <p className="text-sm font-bold text-[#101528] sm:text-base">
                {row.feature}
              </p>
              <p className="flex gap-2 text-sm leading-6 text-[#5e6474]">
                <Check
                  aria-hidden="true"
                  className="mt-1 size-3.5 shrink-0 text-[#6254e7]"
                />
                {row.free}
              </p>
              <p className="flex gap-2 text-sm leading-6 text-[#101528]">
                <Check
                  aria-hidden="true"
                  className="mt-1 size-3.5 shrink-0 text-[#6254e7]"
                />
                {row.pro}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta(): ReactElement {
  return (
    <section className="overflow-hidden bg-[#c7ff72] px-5 py-28 sm:px-8 md:py-40">
      <div className="relative mx-auto max-w-[1320px] text-center">
        <div
          aria-hidden="true"
          className="vault-cta-orbit absolute top-1/2 left-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#101528]/10"
        />
        <p className="relative text-xs font-black tracking-[0.15em] text-[#6254e7] uppercase">
          ClassVault is pre-launch
        </p>
        <h2 className="vault-display relative mx-auto mt-6 max-w-6xl text-[clamp(3.4rem,8vw,9rem)] leading-[0.86] tracking-[-0.075em] text-[#101528]">
          Be there when the vault opens.
        </h2>
        <p className="relative mx-auto mt-8 max-w-2xl text-base leading-7 text-[#3e4454] sm:text-lg sm:leading-8">
          Join the waitlist for launch updates. Tell us your university so we
          can prioritize the communities students need first.
        </p>
        <Link
          href="/coming-soon"
          className="vault-button vault-button-dark vault-focus relative mt-10 inline-flex"
        >
          Join the waitlist
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}

export function SiteFooter(): ReactElement {
  return (
    <footer className="bg-[#0b1022] px-5 py-10 text-white sm:px-8">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a
            href="#top"
            className="vault-focus inline-flex items-center gap-2.5 rounded-full"
          >
            <span className="vault-logo-mark grid size-8 place-items-center rounded-full text-sm font-black">
              C
            </span>
            <span className="font-semibold">ClassVault</span>
          </a>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/45">
            Trusted notes, verified communities, focused rooms, and personal
            study roadmaps for Indian college students.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55">
          <a className="vault-footer-link vault-focus" href="#platform">
            Platform
          </a>
          <a className="vault-footer-link vault-focus" href="#study-flow">
            Study flow
          </a>
          <a className="vault-footer-link vault-focus" href="#plans">
            Plans
          </a>
          <Link className="vault-footer-link vault-focus" href="/coming-soon">
            Waitlist
          </Link>
        </div>
      </div>
    </footer>
  );
}
