"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";
import Image from "next/image";
import { Check, ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "./nav";

const languages = ["English", "हिन्दी"] as const;

export function SiteHeader(): ReactElement {
  const [activeId, setActiveId] = useState<string>(navItems[0].href.slice(1));
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<(typeof languages)[number]>("English");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Translucent + blurred + shadowed once the page scrolls past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the language menu on outside click or Escape.
  useEffect(() => {
    if (!langOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  // Scroll-spy: highlight the nav item whose section is in the viewport band.
  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[var(--border)] transition-[background-color,box-shadow] duration-200 ease-[var(--ease-out)] ${
        scrolled
          ? "bg-white/70 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex min-h-[74px] w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:min-h-[84px] lg:px-12">
        <a
          className="pressable flex shrink-0 items-center gap-3 font-display text-[24px] font-semibold tracking-[-0.04em] text-[var(--text)] focus-ring lg:text-[25px]"
          href="#top"
          aria-label="ClassVault home"
        >
          <span className="relative size-7 overflow-hidden lg:size-8">
            <Image
              src="/icon.svg"
              alt=""
              fill
              priority
              sizes="32px"
              className="object-contain"
            />
          </span>
          <span>ClassVault</span>
          <span className="ml-3 hidden whitespace-nowrap font-mono text-[13px] font-normal tracking-[0.06em] text-[#8a909c] 2xl:inline">
            notes rooms roadmaps
          </span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 whitespace-nowrap font-mono text-[12px] font-medium tracking-[0.015em] text-[#3a3d44] lg:flex"
        >
          {navItems.map((item) => {
            const active = activeId === item.href.slice(1);

            return (
              <a
                key={item.href}
                aria-current={active ? "true" : undefined}
                className={`pressable focus-ring transition-colors duration-150 ease-[var(--ease-out)] hover:text-[var(--accent)] ${
                  active ? "text-[var(--accent)]" : ""
                }`}
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div ref={langRef} className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLangOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Select language"
              className="pressable inline-flex h-[38px] items-center gap-2 rounded-full border border-[var(--border)] px-4 font-mono text-[13px] font-semibold tracking-[0.08em] text-[#586070] shadow-[0_1px_2px_rgba(17,24,39,0.03)] focus-ring"
            >
              {lang}
              <ChevronDown
                aria-hidden="true"
                strokeWidth={2}
                className={`size-4 transition-transform duration-150 ease-[var(--ease-out)] ${
                  langOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langOpen ? (
              <ul
                role="listbox"
                aria-label="Language"
                className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[140px] overflow-hidden rounded-xl border border-[var(--border)] bg-white py-1 shadow-[0_12px_32px_rgba(15,23,42,0.10)]"
              >
                {languages.map((option) => {
                  const selected = option === lang;

                  return (
                    <li key={option} role="option" aria-selected={selected}>
                      <button
                        type="button"
                        onClick={() => {
                          setLang(option);
                          setLangOpen(false);
                        }}
                        className={`row-hover flex w-full items-center justify-between gap-3 px-4 py-2 text-left font-mono text-[13px] tracking-[0.06em] focus-ring ${
                          selected
                            ? "font-semibold text-[var(--text)]"
                            : "text-[#586070]"
                        }`}
                      >
                        {option}
                        {selected ? (
                          <Check
                            aria-hidden="true"
                            strokeWidth={2.5}
                            className="size-4 text-[var(--accent)]"
                          />
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="pressable grid size-[38px] place-items-center rounded-full border border-[var(--border)] text-[var(--text)] shadow-[0_1px_2px_rgba(17,24,39,0.03)] focus-ring lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="size-5" strokeWidth={2} />
            ) : (
              <Menu aria-hidden="true" className="size-5" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-[var(--border)] bg-white lg:hidden"
        >
          <ul className="mx-auto flex max-w-[1280px] flex-col px-5 py-2 sm:px-8 lg:px-12">
            {navItems.map((item) => {
              const active = activeId === item.href.slice(1);

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? "true" : undefined}
                    className={`focus-ring block border-b border-[var(--border)] py-3.5 font-mono text-[13px] font-medium tracking-[0.04em] last:border-b-0 ${
                      active ? "text-[var(--accent)]" : "text-[#3a3d44]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
