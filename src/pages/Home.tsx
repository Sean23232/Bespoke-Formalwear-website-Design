import type { CSSProperties } from "react";
import { cn } from "@/utils/cn";
import { COLLECTIONS, PROCESS, SITE, TESTIMONIALS, WHY } from "@/data/site";
import { IMG } from "@/data/images";
import { useParallax } from "@/lib/hooks";
import { Button, Container, Eyebrow, Photo, Reveal, Section, TextLink } from "@/components/ui";
import { CollectionOverlayCard } from "@/components/Shared";
import { Clock, External, NamedIcon, Phone, Pin, Quote } from "@/components/Icons";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/* ================================================================== A. HERO */
function Hero() {
  const parallax = useParallax<HTMLDivElement>(0.07);
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 -z-10">
        <div ref={parallax} className="absolute inset-0 will-change-transform">
          <img
            src={IMG.heroTuxedo}
            alt="Profile portrait of a gentleman in a black tuxedo and bow tie, softly backlit in an elegant interior"
            fetchPriority="high"
            className="hero-settle photo-grade h-full w-full object-cover object-[72%_25%] md:object-[62%_30%]"
          />
        </div>
        {/* subtle overlays keep type readable while the photograph stays cinematic */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/10 to-ink/55" />
      </div>

      <Container className="w-full pb-10 pt-52 md:pb-14">
        <div className="max-w-[46rem]">
          <div className="rise" style={delay(150)}>
            <Eyebrow dark>
              {SITE.neighborhood.split(",")[0]}, New York <span className="mx-1 opacity-60">—</span> Since {SITE.since}
            </Eyebrow>
          </div>
          <h1 className="display-xl rise mt-8" style={delay(300)}>
            Elegance,
            <br />
            <em className="font-light text-ivory/95">Tailored to You.</em>
          </h1>
          <p className="lead rise mt-8 max-w-xl text-ivory/80" style={delay(520)}>
            Discover refined formalwear where timeless style meets exceptional craftsmanship. Designed to make every
            occasion unforgettable.
          </p>
          <div className="rise mt-10 flex flex-col gap-4 sm:flex-row" style={delay(700)}>
            <Button to="/collections" variant="gold">
              Explore the Collection
            </Button>
            <Button to="/craft" variant="lineLight">
              Discover Our Craft
            </Button>
          </div>
        </div>

        <div className="rise relative mt-16 md:mt-24" style={delay(900)}>
          <dl className="grid gap-6 border-t border-ivory/20 pt-6 sm:grid-cols-3 sm:gap-10 lg:max-w-4xl">
            {[
              ["Since 1973", "Chelsea, Manhattan"],
              ["Men · Women · Children", "Custom-made clothing"],
              ["Walk-Ins Welcome", "173 7th Avenue, NYC"],
            ].map(([a, b]) => (
              <div key={a}>
                <dt className="font-serif text-[1.45rem] leading-none text-ivory">{a}</dt>
                <dd className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ivory/60">{b}</dd>
              </div>
            ))}
          </dl>
          <div aria-hidden className="absolute bottom-0 right-0 hidden flex-col items-center gap-3 lg:flex">
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-ivory/60 [writing-mode:vertical-rl]">
              Scroll
            </span>
            <span className="relative block h-14 w-px overflow-hidden bg-ivory/20">
              <span className="scroll-cue absolute inset-0 bg-gold" />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ================================================================== D. BRAND INTRODUCTION */
function Introduction() {
  return (
    <Section tone="ivory" label="Introduction">
      <Container>
        <div className="grid items-start gap-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pt-14">
            <Reveal>
              <Eyebrow>The House</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-7">
                More Than What You Wear. <em className="text-gold-deep">It’s How You Present Yourself.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="lead mt-9 text-ink/80">
                Bespoke Formal Wear is the home of {SITE.legalName} — a tailor shop and formalwear clothing store in
                Chelsea, Manhattan that has been serving the needs of New Yorkers for over 50 years.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-5 text-[0.97rem] leading-[1.9] text-ink/70">
                We make custom clothing for men, women and children, and we specialize in suits, alterations and
                restyling. Suits are made from scratch; tuxedos are available to rent, of the highest quality. Because
                custom-made clothing requires highly experienced tailors, we believe great style begins with a
                conversation — and a fitting, in person, in the shop.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <ul className="mt-10 grid border-t border-ink/20 text-sm sm:grid-cols-3">
                {[
                  ["I", "Suits from scratch"],
                  ["II", "Alterations & restyling"],
                  ["III", "Tuxedo rentals"],
                ].map(([n, t]) => (
                  <li key={n} className="border-b border-ink/20 py-5 sm:border-b-0 sm:pr-4 sm:pt-6">
                    <span className="font-serif text-lg italic text-gold-deep">{n}.</span>
                    <p className="mt-1 font-medium text-ink/85">{t}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={440} className="mt-10">
              <TextLink to="/about">Our Story</TextLink>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7 lg:pl-12">
            <div className="relative ml-auto w-[86%] lg:w-[80%]">
              <Photo
                src={IMG.introNavy}
                alt="Portrait of a confident gentleman in a navy tailored suit adjusting his cuffs against a dark backdrop"
                className="aspect-[4/5] w-full"
                position="50% 20%"
              />
              <p
                aria-hidden
                className="absolute -right-3 top-8 hidden origin-top-right rotate-90 translate-x-full whitespace-nowrap font-serif text-sm italic tracking-[0.2em] text-ink/50 xl:block"
              >
                Est. {SITE.since} · Chelsea, New York
              </p>
            </div>
            <div className="absolute -bottom-12 left-0 w-[48%] max-w-[22rem] sm:-bottom-16 lg:left-2">
              <Photo
                src={IMG.shopTuxedoDb}
                alt="A double-breasted black tuxedo jacket with satin peak lapels on display in the Chelsea shop"
                className="aspect-[4/5] w-full border-[10px] border-ivory"
                delay={250}
                position="50% 30%"
              />
            </div>
            <p className="mt-6 hidden max-w-[11rem] text-[0.7rem] leading-relaxed text-ink/55 lg:ml-2 lg:mt-20 lg:block">
              Inset: a double-breasted tuxedo jacket from our own shop floor.
            </p>
          </div>
        </div>
        <div className="h-12 sm:h-16" />
      </Container>
    </Section>
  );
}

/* ================================================================== E. FEATURED COLLECTIONS */
function Collections() {
  return (
    <Section tone="ink" label="Featured collections">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow dark>The Collections</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-7">
                Made for the Occasion. <em className="text-gold">Cut for the Individual.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.97rem] leading-[1.9] text-ivory/70">
              From suits made from scratch to tuxedo rentals, alterations and restyling — everything the shop does,
              presented as an invitation to begin a conversation.
            </p>
            <div className="mt-8">
              <TextLink to="/collections" className="text-ivory">
                View All Collections
              </TextLink>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {COLLECTIONS.map((c, i) => (
            <CollectionOverlayCard
              key={c.id}
              item={c}
              delay={(i % 3) * 120}
              className={cn(i % 3 === 1 && "lg:mt-20", i % 3 === 2 && "lg:mt-8")}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ================================================================== F. SIGNATURE CRAFTSMANSHIP */
function Craftsmanship() {
  const details = [
    { icon: "layers", t: "Cloth", d: "Choose from the shop’s shelves of suitings and shirtings." },
    { icon: "ruler", t: "Fit", d: "Measured for you, in person — the foundation of any custom garment." },
    { icon: "scissors", t: "Construction", d: "Suits made from scratch for women and men by experienced tailors." },
    { icon: "hanger", t: "Finish", d: "Alterations and restyling that bring new life to the garments you own." },
  ] as const;

  return (
    <Section tone="white" label="Craftsmanship">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start lg:pt-6">
            <Reveal>
              <Eyebrow>Signature Craftsmanship</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-7">Every Detail Makes the Difference.</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="lead mt-9 text-ink/80">
                A well-made garment is judged in its details: how the lapel rolls, how the cloth falls, how the sleeve
                meets the shoulder.
              </p>
              <p className="mt-5 text-[0.97rem] leading-[1.9] text-ink/70">
                Custom-made clothing requires highly experienced tailors — and that is the standard behind every suit we
                make from scratch, every alteration, and every restyle.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10">
              <TextLink to="/craft">Our Craft &amp; Process</TextLink>
            </Reveal>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:col-span-7 lg:col-start-6">
            <div className="col-span-7">
              <Photo
                src={IMG.lapelStitch}
                alt="Close-up of a tailored jacket lapel showing structural stitching and a crisp white shirt collar"
                className="aspect-[3/4] w-full"
                position="50% 30%"
              />
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">Jacket construction</p>
            </div>
            <div className="col-span-5 pt-16 md:pt-28">
              <Photo
                src={IMG.shopFabricWall}
                alt="A wall of folded suiting cloth, ties and a tuxedo mannequin inside the Chelsea shop"
                className="aspect-square w-full"
                delay={150}
              />
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">Our cloth wall</p>
            </div>
            <div className="col-span-5 md:col-span-4 md:col-start-2">
              <Photo
                src={IMG.tape}
                alt="A tailor's measuring tape resting across a waistcoat"
                className="aspect-[3/4] w-full"
                delay={100}
                position="50% 40%"
              />
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">Measurement</p>
            </div>
            <div className="col-span-7 pt-10 md:col-span-6 md:pt-24">
              <Photo
                src={IMG.shopShirtings}
                alt="Stacks of folded shirting cloth in pinks, creams and oranges on oak shelves"
                className="aspect-[4/3] w-full"
                delay={250}
                position="50% 55%"
              />
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">Shirting cloth</p>
            </div>
          </div>
        </div>

        <ul className="mt-24 grid border-t border-ink/20 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4">
          {details.map((d, i) => (
            <li
              key={d.t}
              className={cn(
                "border-b border-ink/20 py-9 sm:pr-8 lg:border-b-0 lg:py-10",
                i > 0 && "lg:border-l lg:pl-8",
                i % 2 === 1 && "sm:pl-8 lg:pl-8",
              )}
            >
              <Reveal delay={i * 90}>
                <NamedIcon name={d.icon} className="h-8 w-8 text-gold-deep" />
                <h3 className="display-sm mt-6">{d.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{d.d}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ================================================================== G. THE BESPOKE EXPERIENCE */
function Experience() {
  return (
    <Section tone="charcoal" label="The bespoke experience">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow dark>The Bespoke Experience</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-lg mt-7">
                  From First Conversation <em className="text-gold">to Final Fitting.</em>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 max-w-md text-[0.97rem] leading-[1.9] text-ivory/70">
                  An outline of how a custom order typically unfolds. Timelines and fitting schedules are confirmed with
                  you at your consultation.
                </p>
              </Reveal>
              <Photo
                src={IMG.fitting}
                alt="A tailor measuring a client's shoulder in a fitting"
                className="mt-12 hidden aspect-[4/5] w-full max-w-md lg:block"
                position="32% 40%"
                delay={150}
              />
            </div>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7">
            {PROCESS.map((s, i) => (
              <li key={s.n} className={cn("border-t border-white/15 py-9 lg:py-12", i === PROCESS.length - 1 && "border-b")}>
                <Reveal delay={60}>
                  <div className="flex gap-6 sm:gap-10">
                    <span className="font-serif text-[2.6rem] italic leading-none text-gold sm:text-[3.4rem]">{s.n}</span>
                    <div>
                      <h3 className="display-sm">{s.title}</h3>
                      <p className="mt-4 max-w-md text-[0.95rem] leading-[1.85] text-ivory/70">{s.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
        <Reveal className="mt-14 lg:mt-20">
          <TextLink to="/craft" className="text-ivory">
            The Full Process
          </TextLink>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ================================================================== H. EDITORIAL LIFESTYLE */
function Lifestyle() {
  const parallax = useParallax<HTMLDivElement>(0.07);
  return (
    <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink text-ivory lg:items-center" aria-label="Campaign">
      <div className="absolute inset-0 -z-10">
        <div ref={parallax} className="absolute inset-0 will-change-transform">
          <img
            src={IMG.lifestyleEvening}
            alt="A gentleman in a black tuxedo and bow tie portrayed among dark evergreen branches in warm evening light"
            loading="lazy"
            className="photo-grade h-full w-full object-cover object-[28%_30%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-ink/90 via-ink/55 to-ink/0 max-lg:bg-gradient-to-t max-lg:from-ink/95 max-lg:via-ink/55 max-lg:to-ink/0" />
      </div>
      <Container className="w-full py-20 max-lg:pt-[56svh] lg:py-32">
        <div className="lg:ml-auto lg:max-w-[38rem]">
          <Reveal>
            <Eyebrow dark>The Occasion</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg mt-7">
              Make Every Occasion <em className="text-gold">a Statement.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="lead mt-8 text-ivory/80">
              A wedding. A black-tie evening. The meeting that matters. Formalwear marks the moments we remember — and
              the right fit changes how you carry yourself through them. From custom suits to tuxedo rentals, we dress
              the occasions that define you.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button to="/formalwear" variant="gold" className="whitespace-nowrap">
              Explore Formalwear
            </Button>
            <Button to="/contact?type=consultation" variant="lineLight" className="whitespace-nowrap">
              Book a Consultation
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ================================================================== I. WHY CHOOSE */
function WhyChoose() {
  return (
    <Section tone="ivory" label="Why choose Bespoke Formal Wear">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>The Difference</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-7">Why Bespoke Formal Wear?</h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="text-[0.97rem] leading-[1.9] text-ink/70">
              Six reasons to begin here — each one drawn from what the shop genuinely offers.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid border-t border-ink/25 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <li
              key={w.title}
              className={cn(
                "border-b border-ink/25 px-0 py-10 sm:px-8 lg:px-10 lg:py-14",
                i % 2 === 0 ? "sm:border-r" : "sm:border-r-0",
                i % 3 !== 2 ? "lg:border-r" : "lg:border-r-0",
                i % 2 === 0 && "sm:pl-0",
                i % 3 === 0 && "lg:pl-0",
              )}
            >
              <Reveal delay={(i % 3) * 100}>
                <NamedIcon name={w.icon} className="h-9 w-9 text-gold-deep" />
                <h3 className="display-sm mt-7">{w.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-[1.85] text-ink/70">{w.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ================================================================== J. TESTIMONIALS */
function ClientWords() {
  const hasReviews = TESTIMONIALS.length > 0;
  return (
    <Section tone="sand" label="Client reviews" tight>
      <Container>
        {hasReviews ? (
          <>
            <Reveal>
              <Eyebrow>Client Words</Eyebrow>
              <h2 className="display-lg mt-7">What Our Clients Say</h2>
            </Reveal>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="border-t border-ink/30 pt-8">
                  <blockquote className="font-serif text-2xl leading-snug">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-ink/70">
                    {t.name}
                    {t.detail ? ` · ${t.detail}` : ""}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Quote className="mx-auto h-12 w-12 text-gold-deep" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-md mt-8">
                Don’t take our word for it. <em>Read theirs.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-[0.97rem] leading-[1.9] text-ink/75">
                Our clients’ reviews live on Yelp, where they speak for themselves — unedited and in their own words.
                Read them before you visit.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex justify-center">
              <Button href={SITE.yelpUrl} external variant="lineDark" arrow={false}>
                <span className="flex items-center gap-3">
                  Read Reviews on Yelp <External className="h-4 w-4" />
                </span>
              </Button>
            </Reveal>
          </div>
        )}
      </Container>
    </Section>
  );
}

/* ================================================================== K. FINAL CONVERSION */
function FinalCta() {
  return (
    <section className="bg-ink text-ivory" aria-label="Get in touch">
      <div className="grid lg:grid-cols-2">
        <div className="order-2 flex items-center px-6 py-20 md:px-10 lg:order-1 lg:py-32 lg:pl-16 xl:pl-[max(4rem,calc((100vw-1440px)/2+4rem))] lg:pr-16">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow dark>Begin Here</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-7">
                Your Next Signature Look <em className="text-gold">Starts Here.</em>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="lead mt-8 text-ivory/75">
                Explore refined formalwear and discover a style that reflects your individuality.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button to="/contact" variant="gold">
                Get in Touch
              </Button>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-3 px-2 text-sm text-ivory/85 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" />
                {SITE.phone}
              </a>
            </Reveal>
            <Reveal delay={400}>
              <dl className="mt-14 grid gap-8 border-t border-white/15 pt-8 text-sm sm:grid-cols-2">
                <div className="flex gap-3.5">
                  <Pin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <dt className="sr-only">Address</dt>
                    <dd className="leading-relaxed text-ivory/75">
                      {SITE.address[0]}
                      <br />
                      {SITE.address[1]}
                      <br />
                      {SITE.address[2]}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <dt className="sr-only">Hours</dt>
                    <dd className="space-y-1 text-ivory/75">
                      {SITE.hours.map((h) => (
                        <p key={h.days}>
                          {h.days} <span className="text-ivory">· {h.time}</span>
                        </p>
                      ))}
                    </dd>
                  </div>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
        <div className="relative order-1 min-h-[58svh] lg:order-2 lg:min-h-[46rem]">
          <Photo
            src={IMG.ctaBowtie}
            alt="A gentleman in a black tuxedo adjusting his bow tie in front of a warmly lit stone archway at night"
            className="absolute inset-0"
            position="48% 30%"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent lg:hidden" />
          <div aria-hidden className="absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-ink to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}

/* ================================================================== PAGE */
export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Collections />
      <Craftsmanship />
      <Experience />
      <Lifestyle />
      <WhyChoose />
      <ClientWords />
      <FinalCta />
    </>
  );
}
