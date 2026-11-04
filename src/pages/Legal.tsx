import { SITE } from "@/data/site";
import { Container, Eyebrow, Reveal } from "@/components/ui";

const CONTENT = {
  privacy: {
    eyebrow: "Privacy Policy",
    title: "Your privacy, plainly.",
    sections: [
      {
        h: "Who we are",
        p: [
          `This website is operated for ${SITE.legalName} (“Bespoke Formal Wear”), ${SITE.address[0]}, ${SITE.address[2]}.`,
        ],
      },
      {
        h: "Information you share with us",
        p: [
          "If you use the contact form we receive the details you enter: your name, email address, optional phone number, the type of inquiry and your message. This website has no customer accounts and takes no online payments.",
        ],
      },
      {
        h: "How we use it",
        p: [
          "We use your details only to reply to your inquiry and to arrange consultations, fittings or rentals. We do not sell your information or use it for unrelated marketing.",
        ],
      },
      {
        h: "Third-party content",
        p: [
          "To display typography and the map, this site loads content from Google (Google Fonts and Google Maps). Google may receive technical information such as your IP address when these load. Links to Instagram and Yelp lead to third-party sites with their own policies.",
        ],
      },
      {
        h: "Contact",
        p: [`Questions about your information? Email ${SITE.email} or call ${SITE.phone}.`],
      },
    ],
  },
  terms: {
    eyebrow: "Terms & Conditions",
    title: "Using this website.",
    sections: [
      {
        h: "About this website",
        p: [
          `This website presents the services of ${SITE.legalName}: custom-made clothing, suits, tuxedo rentals, alterations and restyling. It is for information and to help you contact the shop; it is not an online store.`,
        ],
      },
      {
        h: "Prices",
        p: [
          "Prices shown are starting prices (“and up”) as published by the shop. Your final quote is confirmed at consultation once cloth, cut, details and any alterations are agreed.",
        ],
      },
      {
        h: "Orders, rentals and alterations",
        p: [
          "Custom orders, tuxedo rentals and alterations are arranged directly with the shop. Terms such as deposits, timelines, rental periods and fitting schedules are confirmed with you in person or by phone at the time of your inquiry.",
        ],
      },
      {
        h: "Photography",
        p: [
          "Photographs of the shop and its garments belong to the business. Model and tailoring imagery on this site is editorial stock photography used for illustration and may not depict garments made by the shop.",
        ],
      },
      {
        h: "Contact",
        p: [`For questions about these terms, email ${SITE.email} or call ${SITE.phone}.`],
      },
    ],
  },
} as const;

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const c = CONTENT[kind];
  return (
    <>
      <section className="bg-ink pb-16 pt-44 text-ivory md:pb-24 md:pt-52">
        <Container>
          <div className="rise" style={{ "--d": "100ms" } as React.CSSProperties}>
            <Eyebrow dark>{c.eyebrow}</Eyebrow>
          </div>
          <h1
            className="rise mt-7 font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.98] tracking-[-0.02em]"
            style={{ "--d": "250ms" } as React.CSSProperties}
          >
            {c.title}
          </h1>
        </Container>
      </section>

      <section className="bg-ivory py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="border border-dashed border-gold-deep/50 p-5 text-sm leading-relaxed text-ink/70">
                <strong className="font-semibold text-ink">Draft for review.</strong> This is a plain-language starting
                point and should be reviewed by the business — and its legal adviser — before publication.
              </p>
            </Reveal>
            <div className="mt-14 space-y-12">
              {c.sections.map((s, i) => (
                <Reveal key={s.h}>
                  <h2 className="display-sm">
                    <span className="mr-4 text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                    {s.h}
                  </h2>
                  {s.p.map((para) => (
                    <p key={para} className="mt-4 text-[0.97rem] leading-[1.9] text-ink/75">
                      {para}
                    </p>
                  ))}
                </Reveal>
              ))}
            </div>
            <p className="mt-16 border-t border-ink/15 pt-6 text-xs text-ink/50">
              Last updated {new Date().getFullYear()}.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
