import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-indigo-500/60 bg-indigo-600/80 text-slate-100 hover:border-indigo-400/70 hover:bg-indigo-500/80 hover:text-white focus-visible:ring-indigo-500",
  secondary:
    "border border-slate-600/50 bg-slate-700/40 text-slate-200 hover:border-indigo-500/50 hover:bg-slate-700/70 hover:text-indigo-300 focus-visible:ring-indigo-500",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 disabled:pointer-events-none disabled:opacity-50";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    as?: "button";
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const isAnchorProps = (props: ButtonProps): props is ButtonAsAnchor =>
  props.as === "a";

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    className = "",
    children,
    leftIcon,
    rightIcon,
    ...rest
  } = props;

  const variantClass = variantStyles[variant];
  const combinedClassName = [baseStyles, variantClass, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
      {children}
      {rightIcon ? <span className="shrink-0">{rightIcon}</span> : null}
    </>
  );

  if (isAnchorProps(props)) {
    const { as: _as, ...anchorProps } = rest as Omit<
      ButtonAsAnchor,
      keyof ButtonBaseProps
    >;
    return (
      <a className={combinedClassName} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = rest as Omit<
    ButtonAsButton,
    keyof ButtonBaseProps
  >;
  return (
    <button type="button" className={combinedClassName} {...buttonProps}>
      {content}
    </button>
  );
};

export default Button;
