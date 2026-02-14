import type { HTMLAttributes } from "react";

const baseClassName =
  "mb-4 text-2xl font-semibold text-slate-200 sm:text-3xl md:text-4xl";

type SectionHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  className?: string;
};

const SectionHeading = ({
  children,
  className = "",
  ...props
}: SectionHeadingProps) => (
  <h2
    className={[baseClassName, className].filter(Boolean).join(" ")}
    {...props}
  >
    {children}
  </h2>
);

export default SectionHeading;
