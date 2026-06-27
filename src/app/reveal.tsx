"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode, ReactElement } from "react";

// Reveals its children once they scroll into view. Falls back to instantly
// visible when IntersectionObserver is unavailable.
export function Reveal({ children }: { children: ReactNode }): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      queueMicrotask(() => setShown(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${shown ? " is-visible" : ""}`}>
      {children}
    </div>
  );
}
