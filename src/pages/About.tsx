import { IMG } from "@/data/images";
import { SITE } from "@/data/site";
import PageHero from "@/components/PageHero";
import { ClosingBand } from "@/components/Shared";
import { Container, Eyebrow, Photo, Reveal, Section, TextLink } from "@/components/ui";
import { NamedIcon } from "@/components/Icons";

const PRINCIPLES = [
  {
    n: "I",
    title: "Made From Scratch",
    text: "We make suits from scratch for women and men. Custom-made clothing requires highly experienced tailors, and that is where we begin.",
  },
  {
    n: "II",
    title: "Renewed With Care",
    text: "Alterations and restyling are a core part of what we do — bringing a new fit, or a new life, to garments you already own.",
  },
  {
    n: "III",
    title: "Dressed for the Occasion",
    text: "As a formalwear clothing store we also offer tuxedo rentals of the highest quality, fitted in person.",
  },
];

const SERVICES = [
  { icon: "scissors", t: "Custom suits", d: "From scratch, for women and men." },
  { icon: "users", t: "Custom-made clothing", d: "For men, women and children." },
  { icon: "ruler", t: "Alterations", d: "Suits, jackets, trousers and dresses." },
  { icon: "layers", t: "Restyling", d: "Refreshing garments you already own." },
  { icon: "hanger", t: "Tuxedo rentals", d: "Of the highest quality." },
] as const;

export default function About() {
  return (
    <>
      <PageHero
        image={IMG.shopInteriorWall}
        alt="Inside the Chelsea shop: walls of folded cloth, mannequins in tailored jackets and a sunlit storefront"
        position="45% 55%"
        eyebrow="About Us"
        title={
          <>
            A Chelsea tailor shop, <em className="text-gold">over fifty years</em> in the making.
          </>
        }
        text={`${SITE.legalName} — the house behind Bespoke Formal Wear — has been serving the needs of New Yorkers since ${SITE.since}.`}
      />

      {/* Story */}
      <Section tone="ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Reveal>
                <p
                  aria-hidden
                  className="select-none font-serif text-[clamp(7rem,17vw,15rem)] font-light leading-[0.8] tracking-[-0.04em] text-sand"
                >
                  1973
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p className="eyebrow mt-6 text-gold-deep">Serving New Yorkers since {SITE.since}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <Eyebrow>Our Story</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-lg mt-7">
                  A shop built on <em className="text-gold-deep">experienced hands.</em>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="lead mt-9 text-ink/80">
                  {SITE.legalName} is a tailor shop and formalwear clothing store in Chelsea, Manhattan. For over 50 years
                  we have served the needs of New Yorkers — making, altering and restyling the clothes that matter to them.
                </p>
                <p className="mt-5 text-[0.97rem] leading-[1.9] text-ink/70">
                  You may know us as Luigi’s; “Bespoke Formal Wear” is the name behind our website and Instagram. We make
                  custom clothing for men, women and children, we specialize in suits, alterations and restyling, and we
                  rent tuxedos of the highest quality.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Quote */}
      <Section tone="ink" tight>
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow text-gold">Our Philosophy</p>
            <blockquote className="display-lg mt-8">
              “Custom-made clothing requires <em className="text-gold">highly experienced tailors.</em>”
            </blockquote>
            <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-ivory/55">
              — {SITE.legalName}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Principles */}
      <Section tone="white">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>Philosophy &amp; Approach</Eyebrow>
            <h2 className="display-lg mt-7">What we stand for.</h2>
          </Reveal>
          <ul className="mt-16 grid border-t border-ink/25 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className={`border-b border-ink/25 py-10 md:border-b-0 md:py-12 ${i > 0 ? "md:border-l md:pl-10" : ""} ${i < 2 ? "md:pr-10" : ""}`}>
                <Reveal delay={i * 100}>
                  <span className="font-serif text-4xl italic text-gold-deep">{p.n}.</span>
                  <h3 className="display-sm mt-6">{p.title}</h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.85] text-ink/70">{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* The shop */}
      <Section tone="ivory">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4 lg:pt-10">
              <Reveal>
                <Eyebrow>The Shop</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-md mt-7">Step inside.</h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-7 text-[0.97rem] leading-[1.9] text-ink/70">
                  Walk in off 7th Avenue and you are surrounded by cloth — suitings and shirtings folded floor to ceiling
                  on oak shelving, with jackets, evening wear, ties and bow ties on display. It is a working tailor shop,
                  and it feels like one.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-9">
                <TextLink to="/contact">Plan Your Visit</TextLink>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Photo
                src={IMG.shopStorefront}
                alt="Wide view of the shop interior with shelves of folded cloth, mannequins, glass counters and the open door to 7th Avenue"
                className="aspect-[16/8] w-full"
                position="40% 50%"
              />
              <div className="mt-6 grid grid-cols-2 gap-6">
                <Photo
                  src={IMG.shopFabricWall}
                  alt="Suiting cloth, tie compartments and a tuxedo mannequin on a wall of wooden shelves"
                  className="aspect-square w-full"
                  delay={150}
                />
                <Photo
                  src={IMG.shopBowties}
                  alt="A wooden board displaying bow ties in black, white, green, red and gold"
                  className="aspect-square w-full"
                  delay={300}
                />
              </div>
              <p className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">Photographed in our Chelsea shop</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* What we do */}
      <Section tone="charcoal">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow dark>What We Do</Eyebrow>
            <h2 className="display-lg mt-7">One shop. Five specialties.</h2>
          </Reveal>
          <ul className="mt-16 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-5">
            {SERVICES.map((s, i) => (
              <li key={s.t} className={`border-b border-white/20 py-9 lg:border-b-0 ${i > 0 ? "lg:border-l lg:pl-7" : ""} lg:pr-7`}>
                <Reveal delay={i * 80}>
                  <NamedIcon name={s.icon} className="h-8 w-8 text-gold" />
                  <h3 className="display-sm mt-6">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">{s.d}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Owner's note — placeholder */}
      <Section tone="ivory" tight>
        <Container>
          <Reveal className="mx-auto max-w-3xl border border-dashed border-gold-deep/50 p-8 text-center sm:p-14">
            <p className="eyebrow text-gold-deep">A Word From Luigi</p>
            <p className="mt-6 font-serif text-2xl italic leading-snug text-ink/70 sm:text-3xl">
              Placeholder — a personal message from the shop’s owner, the family story and a portrait can be added here.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-ink/50">To be supplied by the business</p>
          </Reveal>
        </Container>
      </Section>

      <ClosingBand
        title={
          <>
            Come and meet <em className="text-gold">the tailors.</em>
          </>
        }
        text="Walk-ins are welcome Monday to Saturday. Or call ahead and we’ll be ready for you."
        primary={{ label: "Visit the Shop", to: "/contact" }}
        secondary={{ label: "See Our Craft", to: "/craft" }}
        image={IMG.womenSuit}
        alt="Woman in a dark tailored suit seated on a stool against a deep teal backdrop"
      />
    </>
  );
}
