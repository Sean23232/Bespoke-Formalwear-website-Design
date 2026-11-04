import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Link } from "@/lib/router";
import { PRICES, SITE, type CollectionItem } from "@/data/site";
import { Button, Container, Eyebrow, Photo, Reveal, Section } from "./ui";
import { Phone } from "./Icons";

/* ------------------------------------------------------------------ Price guide */
function PriceColumn({
  title,
  eyebrow,
  rows,
  dark,
}: {
  title: string;
  eyebrow: string;
  rows: { item: string; price: string; note?: boolean }[];
  dark?: boolean;
}) {
  return (
    <div>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h3 className="display-md mt-5">{title}</h3>
      <ul className={cn("mt-8 border-t", dark ? "border-white/20" : "border-ink/20")}>
        {rows.map((r) => (
          <li
            key={r.item}
            className={cn("flex items-baseline gap-5 border-b py-5", dark ? "border-white/15" : "border-ink/15")}
          >
            <span className="font-serif text-[1.6rem] leading-none">{r.item}</span>
            <span
              aria-hidden
              className={cn("mb-1 hidden h-px flex-1 border-b border-dotted sm:block", dark ? "border-white/30" : "border-ink/30")}
            />
            <span
              className={cn(
                "ml-auto text-right sm:ml-0",
                r.note
                  ? "max-w-[11rem] text-xs uppercase leading-snug tracking-[0.14em]"
                  : "font-serif text-[1.6rem] leading-none",
                dark ? "text-gold" : "text-gold-deep",
              )}
            >
              {r.note ? r.price : <>from {r.price}</>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PriceGuide({ dark, className }: { dark?: boolean; className?: string }) {
  return (
    <div className={cn("grid gap-16 lg:grid-cols-2 lg:gap-24", className)}>
      <Reveal>
        <PriceColumn eyebrow="Made From Scratch" title="Custom-Made Clothing" rows={PRICES.made} dark={dark} />
      </Reveal>
      <Reveal delay={150}>
        <PriceColumn eyebrow="Care & Renewal" title="Alterations" rows={PRICES.alterations} dark={dark} />
      </Reveal>
    </div>
  );
}

export function PriceNote({ dark }: { dark?: boolean }) {
  return (
    <p className={cn("mt-10 max-w-2xl text-sm leading-relaxed", dark ? "text-ivory/60" : "text-ink/65")}>
      Starting prices as published by the shop (“and up”). Your final quote is confirmed at consultation, once the
      cloth, cut and details are decided.
    </p>
  );
}

/* ------------------------------------------------------------------ Collection card (overlay style) */
export function CollectionOverlayCard({
  item,
  className,
  delay = 0,
}: {
  item: CollectionItem;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <Link
        to={item.to}
        className="group relative block aspect-[3/4] overflow-hidden bg-charcoal text-ivory"
        aria-label={`${item.title} — explore`}
      >
        <Photo src={item.image} alt={item.alt} position={item.position} zoom className="absolute inset-0" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/95 from-5% via-ink/60 via-40% to-ink/0 transition-opacity duration-700"
        />
        <div aria-hidden className="absolute inset-3 border border-ivory/0 transition-colors duration-700 group-hover:border-gold/60" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p className="eyebrow text-gold">{item.price}</p>
          <h3 className="mt-3 font-serif text-[2rem] leading-[1.05] md:text-[2.2rem]">{item.title}</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/75">{item.blurb}</p>
          <span className="link-line mt-6 text-ivory">
            <span>Explore Collection</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 12h18" />
              <path d="m16 7 5 5-5 5" />
            </svg>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ Closing band for inner pages */
export function ClosingBand({
  title,
  text,
  primary = { label: "Get in Touch", to: "/contact" },
  secondary,
  image,
  alt,
}: {
  title: ReactNode;
  text: ReactNode;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
  image?: string;
  alt?: string;
}) {
  return (
    <Section tone="ink" tight className="overflow-hidden">
      <Container>
        <div className={cn("grid items-center gap-14", image && "lg:grid-cols-12")}>
          <div className={cn(image && "lg:col-span-7")}>
            <Reveal>
              <Eyebrow dark>Begin a Conversation</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-6 max-w-3xl">{title}</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="lead mt-7 max-w-xl text-ivory/75">{text}</p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-wrap items-center gap-4">
              <Button to={primary.to} variant="gold">
                {primary.label}
              </Button>
              {secondary && (
                <Button to={secondary.to} variant="lineLight">
                  {secondary.label}
                </Button>
              )}
              <a
                href={SITE.phoneHref}
                className="ml-1 inline-flex items-center gap-3 text-sm text-ivory/80 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" /> {SITE.phone}
              </a>
            </Reveal>
          </div>
          {image && (
            <div className="lg:col-span-5">
              <Photo src={image} alt={alt ?? ""} className="aspect-[4/5] w-full" style={{ "--d": "150ms" } as CSSProperties} />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
