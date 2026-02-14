"use client";

import { useCallback, useEffect, useState } from "react";

const DELAY_MS = 1500;
const SECTION_ID = "about-me";
const SCROLL_TOP_THRESHOLD = 10;

function scrollToPortfolio() {
  const section = document.getElementById(SECTION_ID);
  section?.scrollIntoView({ behavior: "smooth" });
  section?.focus({ preventScroll: true });
}

function isPageAtTop(threshold: number): boolean {
  if (typeof window === "undefined") return true;
  return window.scrollY <= threshold;
}

export default function ClickToContinue() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      document.body.style.overflow = "";
    }, DELAY_MS);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsAtTop(isPageAtTop(SCROLL_TOP_THRESHOLD));
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContinue = useCallback(() => {
    scrollToPortfolio();
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleContinue();
      }
    },
    [handleContinue],
  );

  const isOverlayActive = isVisible && isAtTop;

  return (
    <div
      role="button"
      tabIndex={isOverlayActive ? 0 : -1}
      onClick={handleContinue}
      onKeyDown={handleKeyDown}
      className={`fixed inset-0 z-10 flex cursor-pointer flex-col items-center justify-end pb-12 transition-opacity duration-500 ${
        isOverlayActive ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Continue to portfolio"
      aria-hidden={!isOverlayActive}
    >
      <span className="text-sm text-slate-400">
        <span className="lg:hidden">Tap to continue</span>
        <span className="hidden lg:inline">Click to continue</span>
      </span>
    </div>
  );
}
