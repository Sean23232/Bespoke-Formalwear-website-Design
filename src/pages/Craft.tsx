import { cn } from "@/utils/cn";
import { IMG } from "@/data/images";
import { PROCESS } from "@/data/site";
import PageHero from "@/components/PageHero";
import { ClosingBand, PriceGuide, PriceNote } from "@/components/Shared";
import { Button, Container, Eyebrow, Photo, Reveal, Section, TextLink } from "@/components/ui";
import { NamedIcon } from "@/components/Icons";

const MAKES = [
  { icon: "scissors", t: "Suits", d: "Made from scratch for women and men." },
  { icon: "hanger", t: "Jackets & Trousers", d: "Individual custom pieces, made to fit." },
  { icon: "layers", t: "Shirts", d: "Custom-made from the shop’s shirting cloth." },
  { icon: "users", t: "Children’s Clothing", d: "Custom-made for men, women and children." },
] as const;

export default function Craft() {
  return (
    <>
      <PageHero
        image={IMG.fitting}
        alt="A tailor in a waistcoat measuring a client's shoulder during a suit fitting"
        position="35% 40%"
        eyebrow="Our Craft"
        title={
          <>
            From First Conversation, <em className="text-gold">to Final Fitting.</em>
          </>
        }
        text="How a custom garment comes to life at Bespoke Formal Wear — and what you can expect at each stage."
      >
        <Button to="/contact?type=consultation" variant="gold">
          Book a Consultation
        </Button>
      </PageHero>

      {/* Intro */}
      <Section tone="ivory" className="!pb-16 lg:!pb-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow>The Standard We Work To</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-lg mt-7">
                  Custom-made clothing requires <em className="text-gold-deep">highly experienced tailors.</em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200} className="lg:col-span-5 lg:col-start-8 lg:pt-6">
              <p className="lead text-ink/80">
                We do suits from scratch for women and men, and our alterations and restyling are carried out with the
                same care. Everything is done in our Chelsea shop, with you in the room.
              </p>
              <p className="mt-5 text-[0.97rem] leading-[1.9] text-ink/70">
                The journey below outlines how a custom order typically unfolds. Timelines, fitting schedules and deposits
                are confirmed with you at your consultation.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section tone="ivory" className="!pt-8 lg:!pt-12">
        <Container>
          <ol className="space-y-24 lg:space-y-36">
            {PROCESS.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <li key={s.n} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
                  <div className={cn("lg:col-span-6", flip && "lg:order-2 lg:col-start-7")}>
                    <Photo
                      src={s.image}
                      alt={s.alt}
                      position={s.position}
                      className={cn("w-full", i % 2 === 0 ? "aspect-[5/4]" : "aspect-[4/5] lg:aspect-[5/5]")}
                    />
                  </div>
                  <div className={cn("lg:col-span-5", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-8")}>
                    <Reveal>
                      <p className="font-serif text-[clamp(4.5rem,9vw,8rem)] font-light italic leading-none text-gold-deep/35">
                        {s.n}
                      </p>
                    </Reveal>
                    <Reveal delay={100}>
                      <h3 className="display-md -mt-2">{s.title}</h3>
                      <div className="mt-6 h-px w-14 bg-gold-deep" />
                      <p className="mt-6 max-w-md text-[0.97rem] leading-[1.9] text-ink/70">{s.text}</p>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      {/* What we make */}
      <Section tone="ink">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow dark>What We Make</Eyebrow>
              <h2 className="display-lg mt-7">
                Made to your <em className="text-gold">measure.</em>
              </h2>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <p className="text-[0.97rem] leading-[1.9] text-ivory/70">
                Every detail — cloth, cut and finish — is decided with you in the shop. Ask our tailors what is possible
                for your garment.
              </p>
            </Reveal>
          </div>
          <ul className="mt-16 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {MAKES.map((m, i) => (
              <li key={m.t} className={cn("border-b border-white/20 py-9 lg:border-b-0 lg:pr-7", i > 0 && "lg:border-l lg:pl-7")}>
                <Reveal delay={i * 80}>
                  <NamedIcon name={m.icon} className="h-8 w-8 text-gold" />
                  <h3 className="display-sm mt-6">{m.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">{m.d}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Alterations & restyling */}
      <Section tone="white">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Photo
                src={IMG.shopRuffleShirt}
                alt="A custom purple tuxedo shirt with a ruffled front and French cuffs made in the shop"
                className="aspect-[4/5] w-full"
                position="50% 40%"
              />
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">One of our custom-made shirts</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <Eyebrow>Alterations &amp; Restyling</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-lg mt-7">
                  The garments you own, <em className="text-gold-deep">made right.</em>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="lead mt-9 text-ink/80">
                  Alterations and restyling are a specialty of the shop. Whether a favourite suit no longer fits, or a
                  dress needs reworking, bring it in and we will advise on what can be done.
                </p>
                <p className="mt-5 text-[0.97rem] leading-[1.9] text-ink/70">
                  Starting prices are listed below. Dress alterations are estimated upon consultation.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-10">
                <TextLink to="/contact?type=alterations">Inquire About Alterations</TextLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Price guide */}
      <Section tone="ivory">
        <Container>
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>Price Guide</Eyebrow>
            <h2 className="display-lg mt-7">Clear Starting Points.</h2>
          </Reveal>
          <PriceGuide />
          <PriceNote />
        </Container>
      </Section>

      <ClosingBand
        title={
          <>
            Ready to begin <em className="text-gold">your garment?</em>
          </>
        }
        text="Book a consultation, call the shop or walk in. Our tailors will take it from there."
        primary={{ label: "Book a Consultation", to: "/contact?type=consultation" }}
        secondary={{ label: "View Collections", to: "/collections" }}
      />
    </>
  );
}
