import type { CSSProperties, ElementType, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Link } from "@/lib/router";
import { useReveal } from "@/lib/hooks";
import { ArrowRight } from "./Icons";

/* ------------------------------------------------------------------ layout */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16", className)}>{children}</div>;
}

const TONES = {
  ivory: "bg-ivory text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-ivory",
  charcoal: "bg-charcoal text-ivory",
  sand: "bg-sand/45 text-ink",
} as const;
export type Tone = keyof typeof TONES;

export function Section({
  tone = "ivory",
  className,
  children,
  tight,
  label,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
  tight?: boolean;
  label?: string;
}) {
  return (
    <section aria-label={label} className={cn("relative", TONES[tone], tight ? "py-16 lg:py-24" : "py-24 lg:py-36", className)}>
      {children}
    </section>
  );
}

export const isDark = (tone: Tone) => tone === "ink" || tone === "charcoal";

/* ------------------------------------------------------------------ type helpers */
export function Eyebrow({
  children,
  dark,
  className,
  line = true,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  line?: boolean;
}) {
  return (
    <p className={cn("eyebrow flex items-center gap-4", dark ? "text-gold" : "text-gold-deep", className)}>
      {line && <span aria-hidden className="h-px w-10 bg-current opacity-70" />}
      <span>{children}</span>
    </p>
  );
}

/* ------------------------------------------------------------------ motion wrappers */
export function Reveal({
  children,
  delay = 0,
  className,
  as,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const Tag = (as ?? "div") as ElementType;
  const [ref, shown] = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={cn("reveal", shown && "is-in", className)} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}

export function Photo({
  src,
  alt,
  className,
  imgClassName,
  delay = 0,
  zoom = false,
  position,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  delay?: number;
  zoom?: boolean;
  position?: string;
  style?: CSSProperties;
}) {
  const [ref, shown] = useReveal<HTMLDivElement>();
  return (
    // The observed element stays unclipped (IntersectionObserver ignores fully clipped targets);
    // the wipe-reveal is applied to the inner mask layer.
    <div
      ref={ref}
      className={cn("photo-wrap relative overflow-hidden bg-charcoal", shown && "is-in", className)}
      style={{ "--d": `${delay}ms`, ...style } as CSSProperties}
    >
      <div className="photo-mask absolute inset-0">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn("photo-grade h-full w-full object-cover", zoom && "zoom-img", imgClassName)}
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ buttons & links */
type Variant = "gold" | "ink" | "lineLight" | "lineDark";
const VARIANTS: Record<Variant, string> = {
  gold: "btn-gold",
  ink: "btn-ink",
  lineLight: "btn-line-light",
  lineDark: "btn-line-dark",
};

export function Button({
  to,
  href,
  onClick,
  type,
  variant = "gold",
  arrow = true,
  className,
  children,
  external,
  disabled,
}: {
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit";
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
  external?: boolean;
  disabled?: boolean;
}) {
  const cls = cn("btn", VARIANTS[variant], disabled && "pointer-events-none opacity-50", className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight />}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} onClick={onClick as MouseEventHandler<HTMLButtonElement>} disabled={disabled}>
      {inner}
    </button>
  );
}

export function TextLink({
  to,
  href,
  children,
  className,
  external,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight />
    </>
  );
  if (to)
    return (
      <Link to={to} className={cn("link-line", className)}>
        {inner}
      </Link>
    );
  return (
    <a
      href={href}
      className={cn("link-line", className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  );
}

/* ------------------------------------------------------------------ wordmark */
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <span
      className={cn("inline-flex flex-col items-center leading-none", tone === "light" ? "text-ivory" : "text-ink", className)}
      aria-label="Bespoke Formal Wear"
    >
      <span className="pl-[0.34em] font-serif text-[1.5rem] font-medium uppercase tracking-[0.34em] sm:text-[1.75rem]">
        Bespoke
      </span>
      <span
        className={cn(
          "mt-1.5 flex items-center gap-2.5 pl-[0.5em] text-[0.54rem] font-semibold uppercase tracking-[0.5em] sm:text-[0.58rem]",
          tone === "light" ? "text-gold" : "text-gold-deep",
        )}
      >
        <span aria-hidden className="h-px w-4 bg-current opacity-70 sm:w-5" />
        Formal Wear
        <span aria-hidden className="h-px w-4 bg-current opacity-70 sm:w-5" />
      </span>
    </span>
  );
}
