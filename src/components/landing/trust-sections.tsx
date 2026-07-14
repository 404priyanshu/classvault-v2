import type { ReactElement } from "react";
import { ArrowRight, AtSign, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { trustMechanics } from "@/app/landing-data";

const launchHref = "/coming-soon";

/* ————— How trust works: the mechanics-as-proof section ————— */

export function TrustMechanicsSection(): ReactElement {
  return (
    <section
      id="trust"
      className="on-light border-b border-[var(--field-line)] bg-[var(--off-white)] py-20 sm:py-24 lg:py-32"
    >
      <div className="page-shell">
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-[var(--ink)]">
            We can&apos;t show you user counts yet.
            <br />
            We can show you how trust works.
          </h2>
          <p className="prose-measure mt-6 text-lg leading-8 text-[var(--ink-body)]">
            ClassVault is pre-launch, so there are no impressive numbers to
            wave around. What exists is the system itself — four rules that
            decide whether a note deserves your night before the exam.
          </p>
        </div>

        {/* The ledger: a real 4-step sequence, numbers earned */}
        <ol className="mt-14 border-t border-[var(--border-strong)]">
          {trustMechanics.map((mechanic) => (
            <li
              key={mechanic.step}
              data-reveal
              className="grid grid-cols-[3rem_1fr] gap-x-4 border-b border-[var(--field-line)] py-8 sm:grid-cols-[6rem_minmax(0,0.55fr)_minmax(0,1fr)] sm:gap-x-8 sm:py-9"
            >
              <span
                aria-hidden="true"
                className="font-display text-[2rem] leading-none text-[var(--marigold-deep)] sm:text-[2.5rem]"
              >
                {mechanic.step}
              </span>
              <h3 className="font-display self-start text-xl leading-snug text-[var(--ink)] sm:text-2xl">
                {mechanic.title}
              </h3>
              <p className="prose-measure col-start-2 mt-3 text-[15px] leading-7 text-[var(--ink-muted)] sm:col-start-3 sm:mt-1">
                {mechanic.description}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-[14px] text-[var(--ink-muted)]">
          The full moderation and access model is documented in 28 architecture
          decisions — this isn&apos;t marketing copy, it&apos;s how the system
          is built.
        </p>
      </div>
    </section>
  );
}

/* ————— Your university: coverage + the request mechanic ————— */

export function UniversitySection(): ReactElement {
  return (
    <section
      id="universities"
      className="on-light bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="page-shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
        <div>
          <h2 className="font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-[var(--ink)]">
            On the register, or a request away.
          </h2>
          <p className="prose-measure mt-6 text-lg leading-8 text-[var(--ink-body)]">
            Each university community maps to that institution&apos;s official
            college-email domains. We&apos;re building the verified list ahead
            of launch — and if yours isn&apos;t on it, requesting it takes one
            form: university name, official website, email domain.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "One domain maps to exactly one institution — no ambiguity, no squatting.",
              "Verification means proving control of the email, not uploading an ID.",
              "Membership opens the whole university community: notes, conversations, rooms.",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 size-4.5 shrink-0 text-[var(--green-ledger)]"
                />
                <span className="text-[15px] leading-7 text-[var(--ink-body)]">
                  {line}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href={launchHref}
            className="cta-link pressable focus-ring mt-9 inline-flex items-center gap-2 text-[15px] font-bold text-[var(--green-deep)]"
          >
            Ask us to add your university
            <ArrowRight aria-hidden="true" className="cta-arrow size-4" />
          </Link>
        </div>

        {/* Verification vignette */}
        <figure
          aria-label="Product preview: college email verification"
          className="relative"
        >
          <div className="card relative px-6 pt-8 pb-6 sm:px-8">
            <span className="index-tab index-tab-marigold left-6">
              Verification
            </span>

            <div className="flex items-center gap-3 border-b border-[var(--field-line)] pb-5">
              <span className="grid size-10 place-items-center rounded-[10px] bg-[var(--green-deep)] text-[var(--marigold)]">
                <Building2 aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-[15px] font-bold text-[var(--ink)]">
                  VIT Vellore
                </p>
                <p className="text-[12.5px] text-[var(--ink-muted)]">
                  Verified university community
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 rounded-[10px] border border-[var(--field-line)] bg-[var(--off-white)] px-4 py-3">
                <AtSign
                  aria-hidden="true"
                  className="size-4 shrink-0 text-[var(--ink-muted)]"
                />
                <span className="truncate text-sm text-[var(--ink-body)]">
                  ananya.k2023@vitstudent.ac.in
                </span>
              </div>
              <div className="flex items-center justify-between rounded-[10px] bg-[var(--marigold-wash)] px-4 py-3">
                <span className="text-[13.5px] font-semibold text-[var(--ink)]">
                  Domain matches institution
                </span>
                <CheckCircle2
                  aria-hidden="true"
                  className="size-4.5 text-[var(--green-ledger)]"
                />
              </div>
            </div>

            <div className="stamp stamp-green absolute right-5 -bottom-3.5 bg-white">
              Membership active
            </div>
          </div>
          <figcaption className="mt-5 text-center text-[12px] text-[var(--ink-muted)]">
            Product preview — sample data
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
