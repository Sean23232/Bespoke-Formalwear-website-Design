import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { useRoute } from "@/lib/router";
import { COLLECTIONS, COLLECTION_FILTERS, type CollectionGroup } from "@/data/site";
import { IMG } from "@/data/images";
import PageHero from "@/components/PageHero";
import { ClosingBand, PriceGuide, PriceNote } from "@/components/Shared";
import { Container, Eyebrow, Photo, Reveal, Section, TextLink } from "@/components/ui";

type Filter = "all" | CollectionGroup;

const GROUP_LABEL: Record<CollectionGroup, string> = {
  custom: "Custom-Made",
  evening: "Tuxedos & Evening",
  services: "Alterations & Restyling",
};

export default function Collections() {
  const { query } = useRoute();
  const initial = (query.get("f") as Filter | null) ?? "all";
  const [filter, setFilter] = useState<Filter>(COLLECTION_FILTERS.some((f) => f.id === initial) ? initial : "all");

  useEffect(() => {
    const f = query.get("f") as Filter | null;
    if (f && COLLECTION_FILTERS.some((x) => x.id === f)) setFilter(f);
  }, [query]);

  const items = COLLECTIONS.filter((c) => filter === "all" || c.group === filter);

  return (
    <>
      <PageHero
        image={IMG.collectionsHero}
        alt="A gentleman in a blue chalk-stripe suit against a dark curtain, hand resting on his lapel"
        position="50% 28%"
        eyebrow="The Collections"
        title={
          <>
            A Wardrobe, <em className="text-gold">Made for You.</em>
          </>
        }
        text="Custom-made clothing for men, women and children — an inquiry-led portfolio of what we make, rent and restyle in Chelsea."
      />

      <Section tone="ivory" className="!pb-0">
        <Container>
          <div className="grid items-end gap-10 border-b border-ink/20 pb-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Eyebrow>By Appointment &amp; Walk-In</Eyebrow>
              <h2 className="display-md mt-6">Every piece begins with a conversation.</h2>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
              <p className="text-[0.97rem] leading-[1.9] text-ink/70">
                Because each garment is made to order, there is no online checkout. Choose a category to inquire, call
                the shop, or simply walk in.
              </p>
            </Reveal>
          </div>

          {/* Filters */}
          <div className="py-10" role="group" aria-label="Filter collections">
            <ul className="flex flex-wrap gap-x-9 gap-y-4">
              {COLLECTION_FILTERS.map((f) => {
                const active = filter === f.id;
                return (
                  <li key={f.id}>
                    <button
                      type="button"
                      aria-pressed={active}
                      onClick={() => setFilter(f.id)}
                      className={cn(
                        "relative pb-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors",
                        active ? "text-ink" : "text-ink/50 hover:text-ink",
                      )}
                    >
                      {f.label}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-0 bottom-0 h-px origin-left bg-gold-deep transition-transform duration-500",
                          active ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="sr-only" aria-live="polite">
              Showing {items.length} {items.length === 1 ? "collection" : "collections"}
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-x-10 gap-y-20 pb-28 md:grid-cols-2 lg:gap-x-16 lg:pb-40">
            {items.map((c, i) => (
              <article key={c.id + filter} className={cn("group", i % 2 === 1 && "md:mt-28")}>
                <a href={`#/contact?type=${c.inquiry}`} aria-label={`Inquire about ${c.title}`} className="block">
                  <Photo
                    src={c.image}
                    alt={c.alt}
                    position={c.position}
                    zoom
                    className={cn("w-full", i % 3 === 1 ? "aspect-[4/5]" : "aspect-[5/6]")}
                  />
                </a>
                {c.credit === "shop" && (
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.2em] text-ink/50">Photographed in our shop</p>
                )}
                <div className="mt-8 flex items-baseline justify-between gap-6 border-t border-ink/20 pt-6">
                  <p className="eyebrow text-gold-deep">{GROUP_LABEL[c.group]}</p>
                  <p className="eyebrow text-ink/70">{c.price}</p>
                </div>
                <h3 className="display-md mt-5">{c.title}</h3>
                <p className="mt-4 max-w-md text-[0.97rem] leading-[1.85] text-ink/70">{c.blurb}</p>
                <p className="mt-3 text-sm text-ink/55">{c.detail}</p>
                <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                  <TextLink to={`/contact?type=${c.inquiry}`}>Inquire</TextLink>
                  {c.group === "evening" && <TextLink to="/formalwear">See Formalwear</TextLink>}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" label="Price guide">
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
            Not sure where to <em className="text-gold">begin?</em>
          </>
        }
        text="Tell us about the occasion and we’ll guide you to the right garment — in person, by phone or by email."
        primary={{ label: "Book a Consultation", to: "/contact?type=consultation" }}
        secondary={{ label: "Our Process", to: "/craft" }}
        image={IMG.shopInteriorWall}
        alt="Interior of the Chelsea shop with walls of folded cloth and mannequins in tailored jackets"
      />
    </>
  );
}
