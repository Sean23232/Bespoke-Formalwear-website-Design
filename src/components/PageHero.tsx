import type { ReactNode } from "react";
import { useParallax } from "@/lib/hooks";
import { Container, Eyebrow } from "./ui";

export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  text,
  position = "50% 40%",
  children,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  position?: string;
  children?: ReactNode;
}) {
  const parallax = useParallax<HTMLDivElement>(0.06);
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 -z-10">
        <div ref={parallax} className="absolute inset-0 will-change-transform">
          <img
            src={image}
            alt={alt}
            fetchPriority="high"
            className="hero-settle photo-grade h-full w-full object-cover"
            style={{ objectPosition: position }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent" />
      </div>
      <Container className="flex min-h-[72svh] flex-col justify-end pb-16 pt-48 md:pb-24">
        <div className="max-w-4xl">
          <div className="rise" style={{ "--d": "100ms" } as React.CSSProperties}>
            <Eyebrow dark>{eyebrow}</Eyebrow>
          </div>
          <h1
            className="rise mt-7 font-serif text-[clamp(3rem,6.8vw,6.6rem)] leading-[0.97] tracking-[-0.02em]"
            style={{ "--d": "250ms" } as React.CSSProperties}
          >
            {title}
          </h1>
          {text && (
            <p
              className="rise lead mt-8 max-w-2xl text-ivory/80"
              style={{ "--d": "450ms" } as React.CSSProperties}
            >
              {text}
            </p>
          )}
          {children && (
            <div className="rise mt-10 flex flex-wrap gap-4" style={{ "--d": "600ms" } as React.CSSProperties}>
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
