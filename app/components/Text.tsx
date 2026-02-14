import type { ElementType, ReactNode } from "react";

type TextProseVariant = "default" | "intro" | "caption";

type TextProps = {
  children: ReactNode;
  as?: ElementType;
  variant?: TextProseVariant;
  className?: string;
  maxWidth?: boolean;
};

const variantStyles: Record<TextProseVariant, string> = {
  default: "text-sm text-slate-400 sm:text-base md:text-lg leading-relaxed",
  intro: "text-base text-slate-300 sm:text-lg md:text-xl leading-relaxed",
  caption: "text-xs text-slate-500 sm:text-sm leading-relaxed",
};

export default function Text({
  children,
  as: Component = "p",
  variant = "default",
  className = "",
  maxWidth = true,
}: TextProps) {
  const baseStyles = variantStyles[variant];
  const widthStyles = maxWidth ? "max-w-prose" : "";

  return (
    <Component className={`${baseStyles} ${widthStyles} ${className}`.trim()}>
      {children}
    </Component>
  );
}
