"use client";

import type { ReactElement } from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";

const navigation = [
  { label: "Platform", href: "#platform" },
  { label: "Study flow", href: "#study-flow" },
  { label: "Plans", href: "#plans" },
] as const;

export function SiteHeader(): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="vault-header fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="vault-nav mx-auto flex max-w-[1320px] items-center justify-between rounded-full px-4 py-3 sm:px-5"
      >
        <a
          href="#top"
          className="vault-focus flex items-center gap-2.5 rounded-full text-white"
          onClick={() => setMenuOpen(false)}
        >
          <span className="vault-logo-mark grid size-8 place-items-center rounded-full text-sm font-black">
            C
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.02em]">
            ClassVault
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="vault-nav-link vault-focus rounded-sm text-sm text-white/70"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/login"
            className="vault-focus rounded-full px-4 py-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="vault-button vault-button-light vault-focus"
          >
            Create account
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="vault-focus grid size-10 place-items-center rounded-full border border-white/15 text-white md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <List aria-hidden="true" className="size-5" />
          )}
        </button>
      </nav>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="vault-mobile-nav mx-auto mt-2 max-w-[1320px] rounded-[1.5rem] p-3 md:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="vault-focus block rounded-xl px-4 py-3 text-base font-medium text-white/80"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/login"
            className="vault-focus mt-2 block rounded-xl border-t border-white/10 px-4 py-3 text-base font-medium text-white/80"
            onClick={() => setMenuOpen(false)}
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="vault-button vault-button-acid vault-focus mt-2 flex w-full"
            onClick={() => setMenuOpen(false)}
          >
            Create account
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
