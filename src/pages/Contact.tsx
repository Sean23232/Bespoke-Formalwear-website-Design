import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRoute } from "@/lib/router";
import { useOpenStatus } from "@/lib/hooks";
import { FORM_ENDPOINT, INQUIRY_TYPES, SITE } from "@/data/site";
import { IMG } from "@/data/images";
import PageHero from "@/components/PageHero";
import { Button, Container, Eyebrow, Reveal, Section, TextLink } from "@/components/ui";
import { Check, Clock, Instagram, Mail, Phone, Pin } from "@/components/Icons";

interface Values {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}
type Errors = Partial<Record<keyof Values, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please tell us your name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && v.phone.replace(/\D/g, "").length < 7) e.phone = "That phone number looks incomplete.";
  if (v.message.trim().length < 10) e.message = "Please share a few details so we can help (10+ characters).";
  return e;
}

function typeLabel(id: string) {
  return INQUIRY_TYPES.find((t) => t.id === id)?.label ?? "General question";
}

function buildMailto(v: Values) {
  const subject = `Website inquiry — ${typeLabel(v.type)} (${v.name.trim()})`;
  const body = [
    `Name: ${v.name.trim()}`,
    `Email: ${v.email.trim()}`,
    `Phone: ${v.phone.trim() || "—"}`,
    `Inquiry: ${typeLabel(v.type)}`,
    "",
    v.message.trim(),
  ].join("\n");
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required && <span className="text-gold-deep"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-xs text-[#8a2d2d]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const { query } = useRoute();
  const status = useOpenStatus();
  const initialType = INQUIRY_TYPES.some((t) => t.id === query.get("type")) ? (query.get("type") as string) : "consultation";

  const [values, setValues] = useState<Values>({ name: "", email: "", phone: "", type: initialType, message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<null | { mailto: string; viaEmail: boolean }>(null);
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const confirmRef = useRef<HTMLHeadingElement>(null);

  // honour ?type= when arriving from another page
  useEffect(() => {
    const t = query.get("type");
    if (t && INQUIRY_TYPES.some((x) => x.id === t)) setValues((v) => ({ ...v, type: t }));
  }, [query]);

  useEffect(() => {
    if (sent) confirmRef.current?.focus();
  }, [sent]);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    const mailto = buildMailto(values);
    setFailed(false);

    if (FORM_ENDPOINT) {
      setBusy(true);
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...values, inquiry: typeLabel(values.type) }),
        });
        if (!res.ok) throw new Error("bad response");
        setSent({ mailto, viaEmail: false });
      } catch {
        setFailed(true);
      } finally {
        setBusy(false);
      }
      return;
    }

    // No form backend configured: compose the enquiry in the visitor's email app.
    setSent({ mailto, viaEmail: true });
    const a = document.createElement("a");
    a.href = mailto;
    a.click();
  }

  function reset() {
    setSent(null);
    setValues({ name: "", email: "", phone: "", type: "consultation", message: "" });
    setErrors({});
  }

  return (
    <>
      <PageHero
        image={IMG.shopStorefront}
        alt="The open door and interior of the Chelsea shop, with shelves of cloth and mannequins in tailored jackets"
        position="55% 55%"
        eyebrow="Contact & Visit"
        title={
          <>
            Let’s begin <em className="text-gold">a conversation.</em>
          </>
        }
        text="Walk-ins are welcome. Call, email or send an inquiry below and we’ll get back to you."
      />

      <Section tone="ivory" className="!pb-20 lg:!pb-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
            {/* ------------------------------------------------ Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>Send an Inquiry</Eyebrow>
                <h2 className="display-md mt-6">Tell us what you have in mind.</h2>
              </Reveal>

              {sent ? (
                <div className="mt-12 border border-ink/20 bg-white p-8 sm:p-12" role="status" aria-live="polite">
                  <span className="flex h-12 w-12 items-center justify-center border border-gold-deep text-gold-deep">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 ref={confirmRef} tabIndex={-1} className="display-md mt-8 outline-none">
                    Thank you, {values.name.trim().split(" ")[0] || "and welcome"}.
                  </h3>
                  {sent.viaEmail ? (
                    <>
                      <p className="mt-5 max-w-lg text-[0.97rem] leading-[1.9] text-ink/75">
                        Your inquiry has been prepared and your email app should now be open, addressed to{" "}
                        <strong className="font-semibold text-ink">{SITE.email}</strong>. Please press <em>send</em> to
                        deliver it to the shop.
                      </p>
                      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/60">
                        Nothing opened? Use the button below, or call us on{" "}
                        <a href={SITE.phoneHref} className="underline underline-offset-4">
                          {SITE.phone}
                        </a>
                        .
                      </p>
                    </>
                  ) : (
                    <p className="mt-5 max-w-lg text-[0.97rem] leading-[1.9] text-ink/75">
                      Your inquiry has been received. A member of the shop will be in touch soon — or call us any time on{" "}
                      <a href={SITE.phoneHref} className="underline underline-offset-4">
                        {SITE.phone}
                      </a>
                      .
                    </p>
                  )}
                  <dl className="mt-8 grid gap-x-8 gap-y-3 border-t border-ink/15 pt-6 text-sm sm:grid-cols-[8rem_1fr]">
                    <dt className="text-ink/55">Inquiry</dt>
                    <dd>{typeLabel(values.type)}</dd>
                    <dt className="text-ink/55">Email</dt>
                    <dd className="break-all">{values.email}</dd>
                    {values.phone && (
                      <>
                        <dt className="text-ink/55">Phone</dt>
                        <dd>{values.phone}</dd>
                      </>
                    )}
                  </dl>
                  <div className="mt-10 flex flex-wrap gap-4">
                    {sent.viaEmail && (
                      <Button href={sent.mailto} variant="ink">
                        Open Email Again
                      </Button>
                    )}
                    <Button onClick={reset} variant="lineDark" arrow={false}>
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-12 space-y-10">
                  <div className="grid gap-10 sm:grid-cols-2">
                    <Field id="f-name" label="Name" required error={errors.name}>
                      <input
                        id="f-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="field"
                        value={values.name}
                        onChange={set("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "f-name-error" : undefined}
                      />
                    </Field>
                    <Field id="f-email" label="Email" required error={errors.email}>
                      <input
                        id="f-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        className="field"
                        value={values.email}
                        onChange={set("email")}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "f-email-error" : undefined}
                      />
                    </Field>
                  </div>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <Field id="f-phone" label="Phone" error={errors.phone}>
                      <input
                        id="f-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        className="field"
                        value={values.phone}
                        onChange={set("phone")}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "f-phone-error" : undefined}
                      />
                    </Field>
                    <Field id="f-type" label="Inquiry type">
                      <div className="relative">
                        <select
                          id="f-type"
                          name="type"
                          className="field cursor-pointer appearance-none pr-8"
                          value={values.type}
                          onChange={set("type")}
                        >
                          {INQUIRY_TYPES.map((t) => (
                            <option key={t.id} value={t.id}>
                              {t.label}
                            </option>
                          ))}
                        </select>
                        <svg
                          aria-hidden
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          className="pointer-events-none absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/70"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </Field>
                  </div>
                  <Field id="f-message" label="Message" required error={errors.message}>
                    <textarea
                      id="f-message"
                      name="message"
                      rows={5}
                      className="field resize-y"
                      placeholder="The occasion, the garment, your preferred dates…"
                      value={values.message}
                      onChange={set("message")}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "f-message-error" : undefined}
                    />
                  </Field>

                  {failed && (
                    <p role="alert" className="text-sm text-[#8a2d2d]">
                      Sorry — we couldn’t send that just now. Please try again, or call {SITE.phone}.
                    </p>
                  )}

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <Button type="submit" variant="ink" disabled={busy} className="w-full sm:w-auto">
                      {busy ? "Sending…" : "Send Inquiry"}
                    </Button>
                    <p className="text-xs leading-relaxed text-ink/55 sm:max-w-[16rem]">
                      We only use your details to reply to your inquiry. See our{" "}
                      <a href="#/privacy" className="underline underline-offset-4">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* ------------------------------------------------ Details */}
            <aside className="lg:col-span-4 lg:col-start-9" aria-label="Shop details">
              <Reveal delay={150} className="space-y-10 border-t border-ink/25 pt-10 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <p className="eyebrow flex items-center gap-3 text-gold-deep">
                    <Pin className="h-4 w-4" /> Visit
                  </p>
                  <address className="mt-4 text-[1.02rem] not-italic leading-relaxed text-ink/85">
                    {SITE.legalName}
                    <br />
                    {SITE.address[0]}
                    <br />
                    {SITE.address[1]}
                    <br />
                    {SITE.address[2]}
                  </address>
                  <div className="mt-5">
                    <TextLink href={SITE.directionsUrl} external>
                      Get Directions
                    </TextLink>
                  </div>
                </div>

                <div>
                  <p className="eyebrow flex items-center gap-3 text-gold-deep">
                    <Phone className="h-4 w-4" /> Call
                  </p>
                  <a href={SITE.phoneHref} className="mt-4 block font-serif text-3xl hover:text-gold-deep">
                    {SITE.phone}
                  </a>
                  <p className="mt-1 text-xs text-ink/55">Fax {SITE.fax}</p>
                </div>

                <div>
                  <p className="eyebrow flex items-center gap-3 text-gold-deep">
                    <Mail className="h-4 w-4" /> Email
                  </p>
                  <a href={`mailto:${SITE.email}`} className="mt-4 block break-all text-[1.02rem] text-ink/85 underline decoration-ink/25 underline-offset-4 hover:decoration-gold-deep">
                    {SITE.email}
                  </a>
                </div>

                <div>
                  <p className="eyebrow flex items-center gap-3 text-gold-deep">
                    <Clock className="h-4 w-4" /> Hours
                  </p>
                  <dl className="mt-4 space-y-2 text-sm">
                    {SITE.hours.map((h) => (
                      <div key={h.days} className="flex justify-between gap-6 border-b border-ink/10 pb-2">
                        <dt className="text-ink/65">{h.days}</dt>
                        <dd className="font-medium text-ink">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink/75">
                    <span aria-hidden className={status.open ? "h-1.5 w-1.5 rounded-full bg-gold-deep" : "h-1.5 w-1.5 rounded-full bg-ink/30"} />
                    {status.label}
                  </p>
                </div>

                <div>
                  <p className="eyebrow text-gold-deep">Getting Here</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink/75">
                    {SITE.transit.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="eyebrow flex items-center gap-3 text-gold-deep">
                    <Instagram className="h-4 w-4" /> Follow
                  </p>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-[1.02rem] text-ink/85 underline decoration-ink/25 underline-offset-4 hover:decoration-gold-deep"
                  >
                    {SITE.instagramHandle}
                  </a>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------ Map */}
      <section aria-label="Map" className="bg-ink">
        <div className="relative h-[26rem] w-full md:h-[32rem]">
          <iframe
            title="Map showing Bespoke Formal Wear at 173 7th Avenue, New York"
            src={SITE.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_contrast(1.05)_brightness(0.92)]"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-0 bg-gold/10 mix-blend-multiply" aria-hidden />
        </div>
      </section>
    </>
  );
}
