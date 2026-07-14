"use client";

import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navItems } from "./nav";

const launchHref = "/coming-soon";

export function SiteHeader(): ReactElement {
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-[var(--green-deep)] text-[var(--ivory)] transition-shadow duration-200 ${
        scrolled
          ? "shadow-[0_14px_30px_-18px_rgba(0,0,0,0.55)]"
          : "shadow-none"
      }`}
    >
      <div
        className={`page-shell flex h-[68px] items-center justify-between gap-6 border-b lg:h-[76px] ${
          scrolled ? "border-transparent" : "border-[var(--green-soft)]"
        }`}
      >
        <Link
          className="pressable focus-ring flex shrink-0 items-center gap-3"
          href="#top"
          aria-label="ClassVault home"
        >
          <span className="relative size-9 overflow-hidden rounded-[8px] bg-white">
            <Image
              src="/icon.svg"
              alt=""
              fill
              priority
              sizes="36px"
              className="object-contain p-1"
            />
          </span>
          <span className="font-display text-[21px] leading-none">
            ClassVault
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-[13.5px] font-semibold text-[var(--ivory-muted)] lg:flex"
        >
          {navItems.map((item) => {
            const active = activeId === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "location" : undefined}
                className={`focus-ring nav-link transition-colors hover:text-[var(--ivory)] ${
                  active ? "text-[var(--ivory)]" : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="hidden sm:block">
            <Link
              href={launchHref}
              className="btn btn-marigold pressable focus-ring cta-link !h-10 !px-4 !text-[13px]"
            >
              Get launch updates
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="pressable focus-ring grid size-10 place-items-center rounded-[8px] border border-[var(--green-soft)] text-[var(--ivory)] lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-[var(--green-soft)] bg-[var(--green-deep)] lg:hidden"
        >
          <div className="page-shell py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring flex items-center justify-between border-b border-[var(--green-soft)] py-4 text-[15px] font-semibold text-[var(--ivory)] last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 mb-2 sm:hidden">
              <Link
                href={launchHref}
                onClick={() => setMenuOpen(false)}
                className="btn btn-marigold pressable focus-ring w-full"
              >
                Get launch updates
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
