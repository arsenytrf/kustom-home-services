import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  /** Small teal uppercase label above the title */
  label?: string;
  /** Large display font title */
  title: string;
  /** Optional description paragraph */
  description?: string;
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Use light color scheme (for dark backgrounds this is default) */
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div
      className={cn("max-w-3xl mb-12 md:mb-16", alignClasses[align], className)}
    >
      {label && (
        <span
          className={cn(
            "inline-block text-xs sm:text-sm font-display uppercase tracking-[0.2em] font-semibold mb-3 md:mb-4",
            light ? "text-teal-600" : "text-teal-400"
          )}
        >
          {label}
        </span>
      )}

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]",
          light ? "text-slate-950" : "text-white"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 md:mt-6 text-base sm:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
            light ? "text-slate-600" : "text-slate-400"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
