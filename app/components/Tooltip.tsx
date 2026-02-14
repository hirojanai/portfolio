"use client";

import {
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type TooltipProps = {
  content: string;
  children: React.ReactElement;
  side?: "top" | "bottom";
  className?: string;
};

const VIEWPORT_PADDING = 12;
const TOOLTIP_GAP = 10;

export default function Tooltip({
  content,
  children,
  side = "top",
  className = "",
}: TooltipProps) {
  const id = useId();
  const containerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const openedByTouchRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [isEntering, setIsEntering] = useState(true);

  const handleTriggerClick = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (openedByTouchRef.current) {
        openedByTouchRef.current = false;
        return;
      }
      const childEl = isValidElement(children)
        ? (children as React.ReactElement<{ href?: string }>)
        : null;
      const isLink =
        childEl &&
        (childEl.type === "a" ||
          !!(childEl.props && "href" in childEl.props && childEl.props.href));
      if (isLink) return;
      e.preventDefault();
      e.stopPropagation();
      setIsOpen((prev) => !prev);
    },
    [children],
  );

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    openedByTouchRef.current = true;
    setIsOpen((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    setIsOpen((prev) => !prev);
  }, []);

  useLayoutEffect(() => {
    if (!isOpen || typeof document === "undefined") return;
    const trigger = containerRef.current;
    const tooltipEl = tooltipRef.current;
    if (!trigger || !tooltipEl) return;

    const triggerRect = trigger.getBoundingClientRect();
    const tooltipRect = tooltipEl.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const spaceAbove = triggerRect.top;
    const fitsAbove = spaceAbove >= tooltipRect.height + TOOLTIP_GAP;

    let top = fitsAbove
      ? triggerRect.top - tooltipRect.height - TOOLTIP_GAP
      : triggerRect.bottom + TOOLTIP_GAP;
    top = Math.max(
      VIEWPORT_PADDING,
      Math.min(viewportHeight - tooltipRect.height - VIEWPORT_PADDING, top),
    );

    const triggerCenterX = triggerRect.left + triggerRect.width / 2;
    let left = triggerCenterX - tooltipRect.width / 2;
    left = Math.max(
      VIEWPORT_PADDING,
      Math.min(viewportWidth - tooltipRect.width - VIEWPORT_PADDING, left),
    );

    setPosition({ top, left });
  }, [isOpen, content]);

  useEffect(() => {
    if (!position) return;
    const raf = requestAnimationFrame(() => setIsEntering(false));
    return () => cancelAnimationFrame(raf);
  }, [position]);

  useEffect(() => {
    if (!isOpen) {
      setPosition(null);
      setIsEntering(true);
      return;
    }
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (containerRef.current?.contains(target)) return;
      setIsOpen(false);
    };
    const rafId = requestAnimationFrame(() => {
      document.addEventListener("click", handleClickOutside, true);
      document.addEventListener("touchstart", handleClickOutside, {
        passive: true,
        capture: true,
      });
    });
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [isOpen]);

  const childProps = isValidElement(children)
    ? (children as React.ReactElement).props
    : {};
  const existingOnClick = (
    childProps as { onClick?: (e: React.MouseEvent) => void }
  ).onClick;
  const existingOnFocus = (
    childProps as { onFocus?: (e: React.FocusEvent) => void }
  ).onFocus;
  const existingOnBlur = (
    childProps as { onBlur?: (e: React.FocusEvent) => void }
  ).onBlur;

  const childElForLink = isValidElement(children)
    ? (children as React.ReactElement<{ href?: string }>)
    : null;
  const isLinkTrigger =
    childElForLink &&
    (childElForLink.type === "a" ||
      !!(
        childElForLink.props &&
        "href" in childElForLink.props &&
        childElForLink.props.href
      ));

  const trigger = isValidElement(children)
    ? cloneElement(
        children as React.ReactElement<{
          "aria-describedby"?: string;
          "aria-expanded"?: boolean;
          onClick?: (e: React.MouseEvent) => void;
          onTouchEnd?: (e: React.TouchEvent) => void;
          onFocus?: (e: React.FocusEvent) => void;
          onBlur?: (e: React.FocusEvent) => void;
        }>,
        {
          "aria-describedby": id,
          "aria-expanded": isOpen,
          onClick: (e: React.MouseEvent) => {
            existingOnClick?.(e);
            handleTriggerClick(e);
          },
          onTouchEnd: (e: React.TouchEvent) => {
            (
              childProps as { onTouchEnd?: (e: React.TouchEvent) => void }
            ).onTouchEnd?.(e);
            handleTouchEnd(e);
          },
          ...(isLinkTrigger && {
            onFocus: (e: React.FocusEvent) => {
              existingOnFocus?.(e);
              setIsOpen(true);
            },
            onBlur: (e: React.FocusEvent) => {
              existingOnBlur?.(e);
              setIsOpen(false);
            },
          }),
        },
      )
    : children;

  const isVisible = isOpen && position;
  const showAnimated = isVisible && !isEntering;

  const tooltipContent = (
    <span
      ref={tooltipRef}
      id={id}
      role="tooltip"
      className={`pointer-events-none z-100 max-w-[calc(100vw-2rem)] whitespace-normal rounded-lg border border-slate-600/60 bg-slate-800/95 px-3 py-2 text-sm font-medium text-slate-100 shadow-xl shadow-black/20 backdrop-blur-sm transition-[opacity,transform] duration-200 ease-out ${
        showAnimated ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      style={
        position
          ? {
              position: "fixed",
              top: position.top,
              left: position.left,
            }
          : isOpen
            ? {
                position: "fixed" as const,
                left: -9999,
                top: 0,
                visibility: "hidden" as const,
              }
            : undefined
      }
    >
      {content}
    </span>
  );

  return (
    <>
      <span
        ref={containerRef}
        {...(isLinkTrigger
          ? {}
          : {
              tabIndex: 0,
              role: "button",
              "aria-label": content,
              onFocus: () => setIsOpen(true),
              onBlur: () => setIsOpen(false),
              onKeyDown: handleKeyDown,
            })}
        className={`group relative inline-flex ${className}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {trigger}
      </span>
      {typeof document !== "undefined" &&
        isOpen &&
        createPortal(tooltipContent, document.body)}
    </>
  );
}
