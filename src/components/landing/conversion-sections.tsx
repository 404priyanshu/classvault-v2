import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Mail, Plus } from "lucide-react";
import { faqs, planRows } from "@/app/landing-data";
import { navItems } from "@/app/nav";

const launchHref = "/coming-soon";

/* ————— Plans ————— */

function PlanCard({
  name,
  price,
  summary,
  green = false,
}: {
  name: "Free" | "Pro";
  price: string;
  summary: string;
  green?: boolean;
}): ReactElement {
  return (
    <article
      className={`relative flex h-full flex-col px-6 pt-9 pb-7 sm:px-8 ${
        green ? "card-green on-green" : "card"
      }`}
    >
      <span
        className={`index-tab left-6 ${green ? "index-tab-marigold" : ""}`}
      >
        {green ? "After launch" : "At launch"}
      </span>

      <div className="flex items-baseline justify-between gap-4">
        <h3
          className={`font-display text-4xl ${
            green ? "text-[var(--ivory)]" : "text-[var(--ink)]"
          }`}
        >
          {name}
        </h3>
        <p
          className={`text-[13.5px] font-semibold ${
            green ? "text-[var(--marigold)]" : "text-[var(--ink-muted)]"
          }`}
        >
          {price}
        </p>
      </div>

      <p
        className={`mt-4 text-[15px] leading-7 ${
          green ? "text-[var(--ivory-muted)]" : "text-[var(--ink-muted)]"
        }`}
      >
        {summary}
      </p>

      <ul
        className={`mt-7 border-t ${
          green ? "border-[var(--green-soft)]" : "border-[var(--field-line)]"
        }`}
      >
        {planRows.map((row, index) => {
          const value = green ? row.pro : row.free;
          return (
            <li
              key={row.feature}
              className={`flex items-start gap-3 py-4 ${
                index < planRows.length - 1
                  ? green
                    ? "border-b border-[var(--green-soft)]"
                    : "border-b border-[var(--field-line)]"
                  : ""
              }`}
            >
              <span
                aria-hidden="true"
                className={`mt-1 grid size-4.5 shrink-0 place-items-center rounded-full ${
                  green
                    ? "bg-[var(--marigold)] text-[var(--ink)]"
                    : "bg-[var(--green-deep)] text-[var(--marigold)]"
                }`}
              >
                <Check className="size-2.5" strokeWidth={3.5} />
              </span>
              <div>
                <p
                  className={`text-[14.5px] font-bold ${
                    green ? "text-[var(--ivory)]" : "text-[var(--ink)]"
                  }`}
                >
                  {row.feature}
                </p>
                <p
                  className={`mt-0.5 text-[13px] ${
                    green
                      ? "text-[var(--ivory-muted)]"
                      : "text-[var(--ink-muted)]"
                  }`}
                >
                  {value}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <Link
        href={launchHref}
        className={`btn pressable focus-ring cta-link mt-7 ${
          green ? "btn-marigold" : "btn-green"
        }`}
      >
        Get launch updates
        <ArrowUpRight aria-hidden="true" className="cta-arrow cta-arrow-up size-4" />
      </Link>
    </article>
  );
}

export function PlansSection(): ReactElement {
  return (
    <section
      id="plans"
      className="on-light border-b border-[var(--field-line)] bg-[var(--off-white)] py-20 sm:py-24 lg:py-32"
    >
      <div className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="font-display max-w-2xl text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-[var(--ink)]">
              University access is never the paid part.
            </h2>
            <p className="prose-measure mt-6 text-lg leading-8 text-[var(--ink-body)]">
              The free tier is the real product: find notes, verify your
              university, study live, build a starter roadmap. Pro raises
              limits for the students who hit them.
            </p>
          </div>
          <p className="max-w-xs text-[14px] leading-6 text-[var(--ink-muted)] lg:text-right">
            Exact pricing and plan limits will be published before launch —
            not before they&apos;re real.
          </p>
        </div>

        <div data-reveal className="mt-16 grid gap-8 sm:gap-6 lg:grid-cols-2">
          <PlanCard
            name="Free"
            price="₹0, always"
            summary="Everything a student needs to find trusted material and study with classmates."
          />
          <PlanCard
            name="Pro"
            price="Priced at launch"
            summary="More storage, unlimited roadmap generations, longer rooms with host controls."
            green
          />
        </div>
      </div>
    </section>
  );
}

/* ————— FAQ ————— */

export function FaqSection(): ReactElement {
  return (
    <section id="faq" className="on-light bg-white py-20 sm:py-24 lg:py-32">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-[var(--ink)]">
            Before you join.
          </h2>
          <p className="prose-measure mt-6 text-lg leading-8 text-[var(--ink-body)]">
            The short version of how access, downloads, and plans will work.
          </p>
          <a
            href="mailto:hello@classvault.in"
            className="cta-link pressable focus-ring mt-8 inline-flex items-center gap-2 text-[15px] font-bold text-[var(--green-deep)]"
          >
            Ask something else
            <Mail aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div data-reveal className="border-t border-[var(--border-strong)]">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              name="landing-faq"
              className="faq-item border-b border-[var(--field-line)]"
            >
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left sm:py-7">
                <span className="font-display text-lg leading-snug text-[var(--ink)] sm:text-xl">
                  {faq.question}
                </span>
                <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full border border-[var(--border-strong)] text-[var(--ink)]">
                  <Plus aria-hidden="true" className="size-4" />
                </span>
              </summary>
              <div className="faq-answer pb-7">
                <p className="prose-measure text-[15px] leading-7 text-[var(--ink-muted)]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ————— Final CTA ————— */

export function FinalCta(): ReactElement {
  return (
    <section className="on-green ledger-lines-green bg-[var(--green-deep)] py-24 text-[var(--ivory)] sm:py-28 lg:py-32">
      <div data-reveal className="page-shell text-center">
        <div className="stamp stamp-marigold mx-auto bg-[var(--green-deep)]">
          Opening soon
        </div>
        <h2 className="font-display mx-auto mt-8 max-w-3xl text-[clamp(2.6rem,6.5vw,4.5rem)] leading-[1.05] text-[var(--ivory)]">
          Be on the register when ClassVault opens.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--ivory-muted)]">
          We&apos;re finishing the study workflow end to end. Waitlisted
          students hear first — and joining costs nothing.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={launchHref}
            className="btn btn-marigold pressable focus-ring cta-link w-full sm:w-auto"
          >
            Get launch updates
            <ArrowRight aria-hidden="true" className="cta-arrow size-4" />
          </Link>
          <a
            href="mailto:hello@classvault.in"
            className="btn btn-outline-ivory pressable focus-ring w-full sm:w-auto"
          >
            Contact the team
          </a>
        </div>
      </div>
    </section>
  );
}

/* ————— Footer ————— */

export function SiteFooter(): ReactElement {
  return (
    <footer className="border-t border-[var(--green-soft)] bg-[var(--green-deep)] text-[var(--ivory)]">
      <div className="page-shell grid gap-10 py-14 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <a
            className="focus-ring inline-flex items-center gap-3"
            href="#top"
            aria-label="ClassVault home"
          >
            <span className="relative size-8 overflow-hidden rounded-[7px] bg-white">
              <Image
                src="/icon.svg"
                alt=""
                fill
                sizes="32px"
                className="object-contain p-1"
              />
            </span>
            <span className="font-display text-xl">ClassVault</span>
          </a>
          <p className="mt-5 max-w-md text-[14.5px] leading-7 text-[var(--ivory-muted)]">
            Rated notes, verified universities, focused rooms, and a plan you
            can finish. Built for Indian college students.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-12 gap-y-3 text-[14px] text-[var(--ivory-muted)] sm:text-right"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="footer-link focus-ring hover:text-[var(--ivory)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#faq"
            className="footer-link focus-ring hover:text-[var(--ivory)]"
          >
            FAQ
          </a>
          <a
            href="mailto:hello@classvault.in"
            className="footer-link focus-ring hover:text-[var(--ivory)]"
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="border-t border-[var(--green-soft)]">
        <div className="page-shell flex flex-col gap-2 py-5 text-[12px] text-[var(--ivory-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ClassVault</p>
          <p>No behavioral tracking. No engagement bait.</p>
        </div>
      </div>
    </footer>
  );
}
