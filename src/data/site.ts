import { IMG } from "./images";

/* ------------------------------------------------------------------
   VERIFIED BUSINESS INFORMATION
   Source: https://www.bespokeformalwear.com/ (home + contact pages)
   The shop trades as "Luigi's Quality Tailoring"; the website domain and
   Instagram handle use the name "Bespoke Formal Wear".
------------------------------------------------------------------- */
export const SITE = {
  name: "Bespoke Formal Wear",
  legalName: "Luigi's Quality Tailoring",
  since: 1973,
  tagline: "Bespoke Suits, Alterations & Restyling",
  phone: "(212) 243-7855",
  phoneHref: "tel:+12122437855",
  fax: "(646) 486-4062",
  email: "BespokeFormalwear@gmail.com",
  instagramUrl: "https://www.instagram.com/bespokeformalwear/",
  instagramHandle: "@BespokeFormalwear",
  yelpUrl: "https://www.yelp.com/biz/luigis-quality-tailoring-for-men-and-women-new-york",
  address: ["173 7th Avenue", "Between 20th & 21st Street", "New York, NY 10011"],
  neighborhood: "Chelsea, Manhattan",
  directionsUrl:
    "https://www.google.com/maps/dir//Luigi%27s+Quality+Tailoring+-+Formalwear,+173+7th+Ave,+New+York,+NY+10011/@40.7423184,-73.9992814,16z",
  mapEmbed:
    "https://maps.google.com/maps?q=Luigi%27s%20Quality%20Tailoring%2C%20173%207th%20Ave%2C%20New%20York%2C%20NY%2010011&z=16&output=embed",
  hours: [
    { days: "Monday – Friday", time: "11am – 7pm" },
    { days: "Saturday", time: "12pm – 5pm" },
    { days: "Sunday", time: "Closed" },
  ],
  transit: ["C, E, F or M to 23rd Street", "1 to 18th Street or 23rd Street"],
} as const;

/**
 * Optional: set to a form-handling endpoint (e.g. Formspree / FormSubmit) to
 * deliver enquiries without opening the visitor's email app. While empty, the
 * contact form composes an email to SITE.email.
 */
export const FORM_ENDPOINT = "";

/* ------------------------------------------------------------------ Navigation */
export const NAV = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "Formalwear", to: "/formalwear" },
  { label: "About Us", to: "/about" },
  { label: "Our Craft", to: "/craft" },
  { label: "Contact", to: "/contact" },
] as const;

export const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Bespoke Formal Wear | Custom Suits, Tuxedos & Tailoring in Chelsea, New York",
    description:
      "Bespoke Formal Wear by Luigi's Quality Tailoring — custom-made suits for women and men, tuxedo rentals, alterations and restyling in Chelsea, Manhattan. Serving New Yorkers since 1973.",
  },
  "/collections": {
    title: "Collections | Bespoke Formal Wear — Custom Suits, Tuxedos, Shirts & Alterations",
    description:
      "Explore custom suits for women and men, jackets, trousers, shirts, tuxedo rentals, alterations and restyling from Bespoke Formal Wear in Chelsea, New York.",
  },
  "/formalwear": {
    title: "Formalwear & Tuxedo Rentals | Bespoke Formal Wear, New York",
    description:
      "Tuxedo rentals of the highest quality and custom formal suits for weddings, black-tie evenings and every important occasion. Bespoke Formal Wear, Chelsea NYC.",
  },
  "/about": {
    title: "About Us | Bespoke Formal Wear — Luigi's Quality Tailoring, Since 1973",
    description:
      "A Chelsea, Manhattan tailor shop and formalwear store serving New Yorkers for over 50 years. Meet Luigi's Quality Tailoring, the house behind Bespoke Formal Wear.",
  },
  "/craft": {
    title: "Our Craft & Bespoke Process | Bespoke Formal Wear, New York",
    description:
      "From consultation and cloth selection to measurements, making and final fitting — the bespoke journey at Bespoke Formal Wear in Chelsea, Manhattan.",
  },
  "/contact": {
    title: "Contact & Visit | Bespoke Formal Wear — 173 7th Avenue, New York",
    description:
      "Visit or contact Bespoke Formal Wear at 173 7th Avenue, Chelsea. Call (212) 243-7855, email, or send an enquiry about custom suits, tuxedo rentals or alterations.",
  },
  "/privacy": {
    title: "Privacy Policy | Bespoke Formal Wear",
    description: "How Bespoke Formal Wear handles information you share with us.",
  },
  "/terms": {
    title: "Terms & Conditions | Bespoke Formal Wear",
    description: "Terms for using the Bespoke Formal Wear website and enquiring about our services.",
  },
};

/* ------------------------------------------------------------------ Collections */
export type CollectionGroup = "custom" | "evening" | "services";

export interface CollectionItem {
  id: string;
  title: string;
  group: CollectionGroup;
  blurb: string;
  detail: string;
  price: string;
  image: string;
  alt: string;
  position?: string;
  to: string;
  inquiry: string;
  credit: "shop" | "editorial";
}

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "men-suits",
    title: "Custom Suits for Men",
    group: "custom",
    blurb: "Suits made from scratch and cut to your measurements — from first consultation to final fitting.",
    detail: "Made from scratch by experienced tailors.",
    price: "From $1,500",
    image: IMG.menSuit,
    alt: "Gentleman in a tailored double-breasted blue suit adjusting his watch against a warm studio backdrop",
    position: "50% 20%",
    to: "/collections?f=custom",
    inquiry: "custom-suit",
    credit: "editorial",
  },
  {
    id: "women-suits",
    title: "Custom Suits for Women",
    group: "custom",
    blurb: "The same from-scratch approach for women — considered tailoring built around you.",
    detail: "Suits from scratch for women and men.",
    price: "From $1,500",
    image: IMG.womenSuit,
    alt: "Woman in a dark tailored suit seated on a stool against a deep teal studio backdrop",
    position: "50% 30%",
    to: "/collections?f=custom",
    inquiry: "womens-suit",
    credit: "editorial",
  },
  {
    id: "tuxedos",
    title: "Tuxedos & Eveningwear",
    group: "evening",
    blurb: "Tuxedo rentals of the highest quality — for weddings, galas and every black-tie evening.",
    detail: "Rental rates and availability on request.",
    price: "Rentals on request",
    image: IMG.shopTuxedoDb,
    alt: "Black double-breasted tuxedo jacket with peak lapels and a gold polka-dot tie on a display form",
    position: "50% 35%",
    to: "/formalwear",
    inquiry: "tuxedo-rental",
    credit: "shop",
  },
  {
    id: "jackets-trousers",
    title: "Jackets & Trousers",
    group: "custom",
    blurb: "Individual custom pieces — a single jacket or a pair of trousers made to fit you.",
    detail: "Jackets from $995 · Trousers from $395.",
    price: "Jackets from $995",
    image: IMG.jacketPinstripe,
    alt: "Close-up of a black pinstripe suit jacket with a peak lapel",
    position: "50% 30%",
    to: "/collections?f=custom",
    inquiry: "custom-suit",
    credit: "editorial",
  },
  {
    id: "shirts",
    title: "Custom Shirts",
    group: "custom",
    blurb: "Custom-made shirts chosen from the shop's shelves of shirting cloth, including formal evening shirts.",
    detail: "Shirts from $195.",
    price: "From $195",
    image: IMG.shopRuffleShirt,
    alt: "Custom purple tuxedo shirt with ruffled front and French cuffs on a wooden display form",
    position: "50% 35%",
    to: "/collections?f=custom",
    inquiry: "custom-suit",
    credit: "shop",
  },
  {
    id: "alterations",
    title: "Alterations & Restyling",
    group: "services",
    blurb: "Precise alterations and thoughtful restyling to perfect a new garment or renew a cherished one.",
    detail: "Suits from $85 · Jackets from $65 · Trousers from $28.",
    price: "Suits from $85",
    image: IMG.fitting,
    alt: "A tailor measuring the shoulder of a gentleman during a suit fitting",
    position: "30% 40%",
    to: "/collections?f=services",
    inquiry: "alterations",
    credit: "editorial",
  },
];

export const COLLECTION_FILTERS: { id: "all" | CollectionGroup; label: string }[] = [
  { id: "all", label: "All" },
  { id: "custom", label: "Custom-Made" },
  { id: "evening", label: "Tuxedos & Evening" },
  { id: "services", label: "Alterations & Restyling" },
];

/* ------------------------------------------------------------------ Price guide (from the existing website) */
export const PRICES = {
  made: [
    { item: "Suits", price: "$1,500" },
    { item: "Jackets", price: "$995" },
    { item: "Trousers", price: "$395" },
    { item: "Shirts", price: "$195" },
  ],
  alterations: [
    { item: "Suits", price: "$85" },
    { item: "Jackets", price: "$65" },
    { item: "Trousers", price: "$28" },
    { item: "Dresses", price: "Estimate upon consultation", note: true },
  ],
};

/* ------------------------------------------------------------------ Bespoke process */
export const PROCESS = [
  {
    n: "01",
    title: "Personal Consultation",
    text: "Walk in or call ahead. Tell us about the occasion, how you like to dress and what you need — a suit from scratch, a tuxedo, or a garment to be altered or restyled.",
    image: IMG.shopInteriorWall,
    alt: "Interior of the Chelsea shop with walls of folded cloth and mannequins in tailored jackets",
    position: "40% 50%",
  },
  {
    n: "02",
    title: "Fabric & Style Selection",
    text: "Browse the shop's shelves of suitings and shirtings, then settle the details of cut and finish together with our tailors.",
    image: IMG.shopFabricWall,
    alt: "Wall of folded suiting cloth, ties and a tuxedo mannequin in the shop",
    position: "50% 40%",
  },
  {
    n: "03",
    title: "Measurements & Fitting",
    text: "Your measurements are taken in person, so your garment is made around you rather than adjusted from a standard size.",
    image: IMG.tape,
    alt: "Close-up of a tailor's measuring tape draped over a waistcoat",
    position: "50% 35%",
  },
  {
    n: "04",
    title: "Craftsmanship",
    text: "Suits are made from scratch for women and men. Custom-made clothing requires highly experienced tailors — it is the standard we work to.",
    image: IMG.padstitch,
    alt: "Detail of a tailored dark jacket showing structural stitching along the lapel",
    position: "50% 30%",
  },
  {
    n: "05",
    title: "Final Presentation",
    text: "Collect your finished garment. Any final adjustments are handled in the shop, where alterations are part of everyday work.",
    image: IMG.hands,
    alt: "A tailor's hands adjusting the fit of a checked suit",
    position: "50% 55%",
  },
];

/* ------------------------------------------------------------------ Why choose us */
export const WHY = [
  {
    icon: "hourglass",
    title: "Since 1973",
    text: "More than 50 years serving the needs of New Yorkers, from our Chelsea shop.",
  },
  {
    icon: "scissors",
    title: "Experienced Tailors",
    text: "Custom-made clothing requires highly experienced tailors — it is the standard we hold ourselves to.",
  },
  {
    icon: "layers",
    title: "Suits From Scratch",
    text: "Made-from-scratch suits for women and men, rather than adjusted off the rack.",
  },
  {
    icon: "hanger",
    title: "Everything Under One Roof",
    text: "Custom clothing, tuxedo rentals, alterations and restyling in a single Chelsea shop.",
  },
  {
    icon: "users",
    title: "For the Whole Family",
    text: "Custom-made clothing for men, women and children.",
  },
  {
    icon: "pin",
    title: "Walk-Ins Welcome",
    text: "Find us on 7th Avenue between 20th and 21st Street, easily reached by the C, E, F, M and 1 trains.",
  },
] as const;

/* ------------------------------------------------------------------ Testimonials
   No customer testimonials are published on the existing website, so none are
   invented here. Add approved reviews to this array and they will render
   automatically in the "Client Words" section.
------------------------------------------------------------------- */
export interface Testimonial {
  quote: string;
  name: string;
  detail?: string;
  rating?: number;
}
export const TESTIMONIALS: Testimonial[] = [];

/* ------------------------------------------------------------------ Contact enquiry types */
export const INQUIRY_TYPES = [
  { id: "consultation", label: "Book a consultation" },
  { id: "custom-suit", label: "Custom suit, jacket, trousers or shirt (men)" },
  { id: "womens-suit", label: "Custom suit for women" },
  { id: "tuxedo-rental", label: "Tuxedo rental" },
  { id: "alterations", label: "Alterations" },
  { id: "restyling", label: "Restyling" },
  { id: "children", label: "Children's clothing" },
  { id: "general", label: "General question" },
] as const;
