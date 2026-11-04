import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { Link } from "@/lib/router";
import { useScrolled } from "@/lib/hooks";
import { NAV, SITE } from "@/data/site";
import { Button, Container, Logo } from "./ui";
import { Close, Menu, Phone } from "./Icons";

function AnnouncementBar({ collapsed }: { collapsed: boolean }) {
  return (
    <div
      className={cn(
        "grid transition-[grid-template-rows] duration-500 ease-[var(--ease-lux)]",
        collapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]",
      )}
    >
      <div className="overflow-hidden">
        <div className="border-b border-white/10 bg-ink text-ivory/85">
          <Container className="flex h-10 items-center justify-center gap-6 md:justify-between">
            <p className="hidden text-[0.66rem] font-medium uppercase tracking-[0.26em] md:block">
              {SITE.tagline} <span className="mx-2 text-gold">·</span> Since {SITE.since}
            </p>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2.5 text-[0.66rem] font-medium uppercase tracking-[0.22em] transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              <span className="md:hidden">Inquire now ·&nbsp;</span>
              <span className="hidden md:inline">Inquire now:&nbsp;</span>
              {SITE.phone}
            </a>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default function Header({ path }: { path: string }) {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // close the menu on navigation
  useEffect(() => setOpen(false), [path]);

  // lock scroll + escape key + focus handling
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // close menu when resizing to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const on = () => mq.matches && setOpen(false);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <AnnouncementBar collapsed={scrolled || open} />
        <div
          className={cn(
            "border-b transition-[background-color,border-color,backdrop-filter] duration-500 ease-[var(--ease-lux)]",
            solid
              ? "border-gold/20 bg-ink/95 backdrop-blur-md"
              : "border-transparent bg-gradient-to-b from-ink/70 via-ink/25 to-transparent",
          )}
        >
          <Container className={cn("flex items-center justify-between transition-[height] duration-500", scrolled ? "h-[4.5rem]" : "h-24")}>
            <Link to="/" aria-label="Bespoke Formal Wear — home" className="shrink-0">
              <Logo />
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-9 xl:flex">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button to="/contact?type=consultation" variant="lineLight" className="hidden !px-6 !py-3.5 xl:inline-flex" arrow={false}>
                Book a Consultation
              </Button>
              <button
                ref={toggleRef}
                type="button"
                className="-mr-2 flex h-12 w-12 items-center justify-center text-ivory xl:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <Close className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </Container>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 overflow-y-auto bg-ink text-ivory transition-[opacity,visibility] duration-500 ease-[var(--ease-lux)] xl:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="mx-auto flex min-h-full max-w-2xl flex-col px-6 pb-10 pt-32 md:px-10">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {NAV.map((item, i) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    tabIndex={open ? 0 : -1}
                    className="group flex items-baseline gap-5 py-4 transition-all duration-700 ease-[var(--ease-lux)]"
                    style={{
                      transitionDelay: open ? `${120 + i * 55}ms` : "0ms",
                      opacity: open ? 1 : 0,
                      transform: open ? "none" : "translateY(14px)",
                    }}
                  >
                    <span className="w-6 text-[0.68rem] font-semibold tracking-[0.2em] text-gold">0{i + 1}</span>
                    <span
                      className={cn(
                        "font-serif text-[2.1rem] leading-none transition-colors group-hover:text-gold sm:text-5xl",
                        path === item.to ? "italic text-gold" : "text-ivory",
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-gold">Visit</p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/75">
                {SITE.address[0]}
                <br />
                {SITE.address[2]}
              </p>
            </div>
            <div>
              <p className="eyebrow text-gold">Call</p>
              <a href={SITE.phoneHref} className="mt-3 block text-sm text-ivory/85 hover:text-gold">
                {SITE.phone}
              </a>
              <p className="mt-1 text-sm text-ivory/60">Walk-ins welcome</p>
            </div>
          </div>

          <div className="mt-10">
            <Button to="/contact?type=consultation" variant="gold" className="w-full">
              Book a Consultation
            </Button>
          </div>
          <button ref={closeRef} type="button" className="sr-only" onClick={() => setOpen(false)}>
            Close menu
          </button>
        </div>
      </div>
    </>
  );
}
