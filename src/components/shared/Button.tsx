import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "teal" | "outline" | "dark" | "white" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  teal: "bg-teal-500 text-slate-950 hover:bg-teal-400 active:bg-teal-600 shadow-lg shadow-teal-500/20",
  outline:
    "border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-slate-950 active:bg-teal-600",
  dark: "bg-slate-800 text-white hover:bg-slate-700 active:bg-slate-900 border border-slate-700",
  white:
    "bg-white text-slate-950 hover:bg-slate-100 active:bg-slate-200 shadow-lg shadow-white/10",
  ghost:
    "text-slate-300 hover:text-teal-400 hover:bg-white/5 active:bg-white/10",
};

const sizeStyles: Record<"sm" | "md" | "lg", string> = {
  sm: "px-5 py-2 text-xs gap-1.5",
  md: "px-7 py-3 text-sm gap-2",
  lg: "px-9 py-4 text-base gap-2.5",
};

export default function Button({
  variant = "teal",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full",
    "font-display uppercase tracking-wider font-semibold",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500",
    "disabled:opacity-50 disabled:pointer-events-none",
    "cursor-pointer select-none whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
