import { IMG } from "@/data/images";
import { SITE } from "@/data/site";
import PageHero from "@/components/PageHero";
import { ClosingBand } from "@/components/Shared";
import { Button, Container, Eyebrow, Photo, Reveal, Section, TextLink } from "@/components/ui";
import { Check } from "@/components/Icons";

const OCCASIONS = [
  {
    title: "Weddings & the Groom",
    text: "Tuxedo rentals and custom-made suits for the day you’ll want to look back on.",
    image: IMG.groomNavy,
    alt: "Groom in a navy suit with a white rose boutonniere and ivory pocket square on a lawn",
    position: "40% 50%",
  },
  {
    title: "Black-Tie Evenings",
    text: "Galas, dinners and celebrations — dressed with the polish the evening deserves.",
    image: IMG.groomTux,
    alt: "Close-up of a gentleman in a black tuxedo and bow tie with a floral boutonniere",
    position: "50% 30%",
  },
  {
    title: "Business & Professional",
    text: "A suit made from scratch to carry you through the meetings that matter.",
    image: IMG.menSuit,
    alt: "Gentleman in a tailored blue double-breasted suit adjusting his watch",
    position: "50% 20%",
  },
];

export default function Formalwear() {
  return (
    <>
      <PageHero
        image={IMG.groomBw}
        alt="Black-and-white portrait of a groom in a tuxedo looking down in front of a damask wall"
        position="50% 35%"
        eyebrow="Formalwear"
        title={
          <>
            Dressed for the Evening, <em className="text-gold">Considered.</em>
          </>
        }
        text="Tuxedo rentals of the highest quality, and suits made from scratch — for weddings, black-tie evenings and every occasion that asks a little more of you."
      >
        <Button to="/contact?type=tuxedo-rental" variant="gold">
          Inquire About a Tuxedo
        </Button>
        <Button to="/collections" variant="lineLight">
          All Collections
        </Button>
      </PageHero>

      {/* Intro */}
      <Section tone="ivory">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Tuxedos &amp; Eveningwear</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-lg mt-7">
                  Black tie, <em className="text-gold-deep">done properly.</em>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="lead mt-9 text-ink/80">
                  {SITE.legalName} is a formalwear clothing store as well as a tailor shop. We offer tuxedo rentals of the
                  highest quality — and because we are tailors first, fit is never an afterthought.
                </p>
                <p className="mt-5 text-[0.97rem] leading-[1.9] text-ink/70">
                  Visit the shop to see what is on our racks, from dinner jackets to evening shirts, and have it fitted in
                  person. Rental rates and availability are confirmed when you call or visit.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
                <Button to="/contact?type=tuxedo-rental" variant="ink">
                  Inquire About Rental
                </Button>
                <TextLink href={SITE.phoneHref}>{SITE.phone}</TextLink>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Photo
                src={IMG.shopTuxedoPeak}
                alt="A black tuxedo jacket with satin peak lapels, white shirt and black bow tie on a display form in the shop"
                className="aspect-[5/6] w-full"
                position="50% 40%"
              />
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">Photographed in our Chelsea shop</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* On the shop floor */}
      <Section tone="ink">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow dark>On the Shop Floor</Eyebrow>
              <h2 className="display-lg mt-7">
                The evening wardrobe, <em className="text-gold">in person.</em>
              </h2>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-4 lg:col-start-9">
              <p className="text-[0.97rem] leading-[1.9] text-ivory/70">
                Photographs from the shop itself — the real garments you can see and try on when you visit.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-12 lg:mt-24">
            <figure className="md:col-span-5">
              <Photo
                src={IMG.shopEveningLine}
                alt="Mannequins in a black dinner suit, a double-breasted tuxedo and a tailcoat with white bow tie above shelves of cloth"
                className="aspect-[3/4] w-full"
                position="50% 20%"
                zoom
              />
              <figcaption className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-ivory/55">
                Black-tie options on display
              </figcaption>
            </figure>
            <figure className="md:col-span-4 md:mt-28">
              <Photo
                src={IMG.shopTuxedoDb}
                alt="A double-breasted black tuxedo jacket with peak satin lapels and a gold tie"
                className="aspect-[3/4] w-full"
                delay={150}
                position="50% 35%"
                zoom
              />
              <figcaption className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-ivory/55">
                Double-breasted, peak lapel
              </figcaption>
            </figure>
            <figure className="md:col-span-3 md:mt-10">
              <Photo
                src={IMG.shopBowties}
                alt="A wooden board displaying bow ties in black, white, green, red and gold patterns"
                className="aspect-[3/4] w-full"
                delay={300}
                position="50% 30%"
                zoom
              />
              <figcaption className="mt-4 text-[0.7rem] uppercase tracking-[0.2em] text-ivory/55">
                Bow ties on display
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      {/* Rent or commission */}
      <Section tone="white">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>Two Ways to Dress</Eyebrow>
            <h2 className="display-lg mt-7">Rent it. Or have it made.</h2>
          </Reveal>
          <div className="mt-16 grid gap-px bg-ink/15 lg:grid-cols-2">
            {[
              {
                n: "I",
                title: "Tuxedo Rental",
                text: "Tuxedo rentals of the highest quality, fitted in person at the shop.",
                points: ["Visit the shop to see and try the options", "Fitted by our tailors", "Rental rates and availability on request"],
                cta: { label: "Inquire About Rental", to: "/contact?type=tuxedo-rental" },
              },
              {
                n: "II",
                title: "Custom Formal",
                text: "Suits made from scratch for women and men — and custom-made shirts — designed around you.",
                points: ["Suits from $1,500 · Jackets from $995", "Trousers from $395 · Shirts from $195", "Final quote confirmed at consultation"],
                cta: { label: "Book a Consultation", to: "/contact?type=consultation" },
              },
            ].map((o, i) => (
              <Reveal key={o.title} delay={i * 120} className="bg-white p-8 sm:p-12 lg:p-16">
                <span className="font-serif text-4xl italic text-gold-deep">{o.n}.</span>
                <h3 className="display-md mt-6">{o.title}</h3>
                <p className="mt-5 max-w-md text-[0.97rem] leading-[1.85] text-ink/70">{o.text}</p>
                <ul className="mt-8 space-y-3.5">
                  {o.points.map((p) => (
                    <li key={p} className="flex items-start gap-3.5 text-sm text-ink/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <TextLink to={o.cta.to}>{o.cta.label}</TextLink>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Occasions */}
      <Section tone="ivory">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow>The Occasions</Eyebrow>
              <h2 className="display-lg mt-7">
                Make every occasion <em className="text-gold-deep">a statement.</em>
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3 lg:mt-20">
            {OCCASIONS.map((o, i) => (
              <article key={o.title} className={i === 1 ? "md:mt-16" : ""}>
                <Photo src={o.image} alt={o.alt} position={o.position} className="aspect-[4/5] w-full" delay={i * 120} />
                <Reveal delay={i * 120}>
                  <h3 className="display-sm mt-7">{o.title}</h3>
                  <p className="mt-3 text-sm leading-[1.85] text-ink/70">{o.text}</p>
                </Reveal>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <ClosingBand
        title={
          <>
            Planning an occasion? <em className="text-gold">Let’s dress for it.</em>
          </>
        }
        text="Call the shop, walk in, or send an inquiry — tell us the date and we’ll take it from there."
        primary={{ label: "Get in Touch", to: "/contact?type=tuxedo-rental" }}
        secondary={{ label: "Our Craft", to: "/craft" }}
      />
    </>
  );
}
