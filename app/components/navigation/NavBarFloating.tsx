"use client";

import { useEffect, useState } from "react";
import HomeIcon from "../icons/HomeIcon";
import ProfileIcon from "../icons/ProfileIcon";
import CodeIcon from "../icons/CodeIcon";

const ABOUT_ME_ID = "about-me";
const PROJECTS_ID = "projects";
const TOP_SECTION_THRESHOLD = 80;

type ActiveSection = "top" | "about-me" | "projects";

const navItems = [
  {
    label: "Home",
    href: "#",
    targetId: null,
    section: "top" as const,
    icon: <HomeIcon />,
  },
  {
    label: "About Me",
    href: `#${ABOUT_ME_ID}`,
    targetId: ABOUT_ME_ID,
    section: "about-me" as const,
    icon: <ProfileIcon />,
  },
  {
    label: "Projects",
    href: `#${PROJECTS_ID}`,
    targetId: PROJECTS_ID,
    section: "projects" as const,
    icon: <CodeIcon />,
  },
] as const;

function isAtTopSection(threshold: number): boolean {
  if (typeof window === "undefined") return true;
  return window.scrollY < threshold;
}

function getActiveSection(): ActiveSection {
  if (typeof window === "undefined") return "top";
  const mid = window.innerHeight / 2;
  const aboutMe = document.getElementById(ABOUT_ME_ID)?.getBoundingClientRect();
  const portfolio = document
    .getElementById(PROJECTS_ID)
    ?.getBoundingClientRect();
  if (!aboutMe || aboutMe.top > mid) return "top";
  if (!portfolio || portfolio.top > mid) return "about-me";
  return "projects";
}

export default function NavBarFloating() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState<ActiveSection>("top");

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(isAtTopSection(TOP_SECTION_THRESHOLD));
      setActiveSection(getActiveSection());
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isVisible = !isAtTop;

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string | null,
  ) => {
    e.preventDefault();
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed bottom-0 left-1/2 z-20 -translate-x-1/2 mb-3 w-max max-w-[calc(100vw-2rem)] rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 shadow-lg backdrop-blur-xl transition-[opacity,transform] duration-300 sm:mb-4 sm:px-4 sm:py-2 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
      aria-label="Page navigation"
    >
      <ul
        className="flex items-center justify-center gap-3 sm:gap-5"
        role="list"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.section;
          return (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.targetId)}
                className={`flex flex-col items-center gap-0.5 rounded px-2 py-0.5 transition-colors sm:gap-1 ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="flex shrink-0 [&>svg]:transition-colors">
                  {item.icon}
                </span>
                <span className="text-[10px] font-medium leading-none sm:text-xs">
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}