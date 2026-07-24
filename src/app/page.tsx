import type { ReactElement } from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { SiteHeader } from "./site-header";
import { HeroVignette } from "@/components/landing/hero-vignette";
import {
  CapabilityMarquee,
  FeatureBento,
} from "@/components/landing/trust-sections";
import {
  PlatformAccordion,
  StudyFlowSection,
} from "@/components/landing/product-sections";
import {
  FinalCta,
  PlansSection,
  ProductPrinciples,
  SiteFooter,
} from "@/components/landing/conversion-sections";

function Hero(): ReactElement {
  return (
    <section
      id="top"
      className="vault-hero relative overflow-hidden bg-[#0b1022] px-5 pt-36 pb-20 text-white sm:px-8 sm:pt-40 sm:pb-24 lg:min-h-screen lg:pt-44"
    >
      <div
        aria-hidden="true"
        className="vault-ambient vault-ambient-one absolute -top-48 left-[12%] size-[34rem] rounded-full"
      />
      <div
        aria-hidden="true"
        className="vault-ambient vault-ambient-two absolute right-[-12rem] bottom-[-15rem] size-[42rem] rounded-full"
      />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="relative z-10">
            <p className="max-w-xl text-sm font-medium leading-6 text-[#c7ff72] sm:text-base">
              A study platform for Indian college students
            </p>
            <h1 className="vault-display mt-6 w-full max-w-6xl text-[clamp(2.8rem,6.6vw,7.5rem)] leading-[0.87] tracking-[-0.075em] text-white">
              <span className="lg:block">Notes you trust. </span>
              <span className="text-white/55 lg:block">
                Plans you follow.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
              Discover rated notes, enter a verified university community,
              study live with classmates, and turn useful material into a
              personalized, source-linked roadmap.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="vault-button vault-button-acid vault-focus"
              >
                Create your account
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
              <a
                href="#platform"
                className="vault-button vault-button-ghost vault-focus"
              >
                Explore the platform
                <ArrowDownRight aria-hidden="true" className="size-4" />
              </a>
            </div>

            <p className="mt-7 text-xs leading-5 text-white/38 sm:text-sm">
              Free to join. University access is not paywalled. No behavioral
              tracking or noisy social feed.
            </p>
          </div>

          <div className="relative lg:translate-x-8">
            <HeroVignette />
          </div>
        </div>
      </div>
    </section>
  );
}

function Home(): ReactElement {
  return (
    <div className="vault-page bg-[#0b1022]">
      <a
        href="#main-content"
        className="vault-focus fixed top-3 left-3 z-[100] -translate-y-24 rounded-full bg-[#c7ff72] px-5 py-3 text-sm font-bold text-[#101528] focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <CapabilityMarquee />
        <FeatureBento />
        <PlatformAccordion />
        <StudyFlowSection />
        <ProductPrinciples />
        <PlansSection />
        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}

export default Home;
