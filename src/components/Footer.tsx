import { Link } from "@/lib/router";
import { useOpenStatus } from "@/lib/hooks";
import { COLLECTIONS, NAV, SITE } from "@/data/site";
import { Container, Logo } from "./ui";
import { Instagram, Mail, Phone, Pin } from "./Icons";

export default function Footer() {
  const status = useOpenStatus();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory">
      <div className="border-t border-gold/25" />
      <Container className="pb-10 pt-20 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Bespoke Formal Wear — home" className="inline-block">
              <Logo className="items-start [&>span:last-child]:pl-0 [&>span:first-child]:pl-0" />
            </Link>
            <p className="mt-8 max-w-sm text-sm leading-[1.9] text-ivory/70">
              The home of {SITE.legalName} — a tailor shop and formalwear store in {SITE.neighborhood}, serving New Yorkers
              since {SITE.since}. Custom suits, tuxedo rentals, alterations and restyling.
            </p>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ivory/85 transition-colors hover:text-gold"
            >
              <Instagram className="h-5 w-5" />
              {SITE.instagramHandle}
            </a>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="eyebrow !font-sans text-gold">Explore</h2>
            <ul className="mt-6 space-y-3.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-ivory/75 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Collections */}
          <div className="lg:col-span-3">
            <h2 className="eyebrow !font-sans text-gold">Collections &amp; Services</h2>
            <ul className="mt-6 space-y-3.5">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <Link to={c.to} className="text-sm text-ivory/75 transition-colors hover:text-gold">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="lg:col-span-3">
            <h2 className="eyebrow !font-sans text-gold">Visit &amp; Contact</h2>
            <ul className="mt-6 space-y-5 text-sm leading-relaxed text-ivory/75">
              <li className="flex gap-3.5">
                <Pin className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-gold" />
                <a href={SITE.directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                  {SITE.address[0]}
                  <br />
                  {SITE.address[1]}
                  <br />
                  {SITE.address[2]}
                </a>
              </li>
              <li className="flex gap-3.5">
                <Phone className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-gold" />
                <a href={SITE.phoneHref} className="hover:text-gold">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3.5">
                <Mail className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-gold" />
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <dl className="mt-7 space-y-1.5 border-t border-white/10 pt-6 text-[0.8rem] text-ivory/65">
              {SITE.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt>{h.days}</dt>
                  <dd className="text-ivory/85">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ivory/80">
              <span
                aria-hidden
                className={status.open ? "h-1.5 w-1.5 rounded-full bg-gold" : "h-1.5 w-1.5 rounded-full bg-ivory/35"}
              />
              {status.label}
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-5 border-t border-white/10 pt-8 text-[0.72rem] tracking-wide text-ivory/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.name} · {SITE.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            <li>
              <Link to="/privacy" className="transition-colors hover:text-gold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-gold">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
        <p className="mt-6 max-w-3xl text-[0.68rem] leading-relaxed text-ivory/40">
          Shop photographs are the business’s own. Model and tailoring photography is editorial stock imagery shown as a
          design placeholder, to be replaced with the shop’s own campaign photography.
        </p>
      </Container>
    </footer>
  );
}
