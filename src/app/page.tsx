import type { ReactElement } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroVignette } from "@/components/landing/hero-vignette";
import {
  TrustMechanicsSection,
  UniversitySection,
} from "@/components/landing/trust-sections";
import {
  NotesSection,
  RoadmapsSection,
  RoomsSection,
} from "@/components/landing/product-sections";
import {
  FaqSection,
  FinalCta,
  PlansSection,
  SiteFooter,
} from "@/components/landing/conversion-sections";
import { SiteHeader } from "./site-header";

const launchHref = "/coming-soon";

function Hero(): ReactElement {
  return (
    <section
      id="top"
      className="on-green ledger-lines-green bg-[var(--green-deep)] text-[var(--ivory)]"
    >
      <div className="page-shell grid gap-14 pt-14 pb-16 sm:pt-18 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pt-20 lg:pb-24">
        <div className="hero-rise max-w-2xl">
          <p className="text-[14px] font-semibold text-[var(--marigold)]">
            A study platform for Indian college students
          </p>
          <h1 className="font-display mt-5 text-[clamp(2.8rem,6.5vw,4.9rem)] leading-[1.04] text-[var(--ivory)]">
            Notes your classmates already trust.
          </h1>
          <p className="prose-measure mt-7 max-w-xl text-lg leading-8 text-[var(--ivory-muted)] sm:text-xl sm:leading-9">
            Every note is rated by students who used it. Every university
            community is verified by college email. Find material worth your
            time, study it together, and turn it into a plan.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={launchHref}
              className="btn btn-marigold pressable focus-ring cta-link"
            >
              Get launch updates
              <ArrowRight aria-hidden="true" className="cta-arrow size-4" />
            </Link>
            <a
              href="#trust"
              className="btn btn-outline-ivory pressable focus-ring"
            >
              See how trust works
            </a>
          </div>

          <p className="mt-8 text-[13.5px] text-[var(--ivory-faint)]">
            Free to join. No behavioral tracking, no push spam, no feed.
          </p>
        </div>

        <div className="hero-rise-delayed">
          <HeroVignette />
        </div>
      </div>
    </section>
  );
}

function Home(): ReactElement {
  return (
    <>
      <a
        href="#main-content"
        className="focus-ring pressable fixed top-3 left-3 z-[100] -translate-y-24 rounded-[8px] bg-[var(--ink)] px-4 py-2 text-sm font-bold text-white focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <Hero />
        <TrustMechanicsSection />
        <NotesSection />
        <RoomsSection />
        <RoadmapsSection />
        <UniversitySection />
        <PlansSection />
        <FaqSection />
        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}

export default Home;
