export const SITE = {
  name: "Morrison Handyman Services",
  legalName: "Morrison Handyman Services",
  owner: "Drew Morrison",
  phoneDisplay: "(603) 514-1814",
  phoneHref: "tel:+16035141814",
  phoneE164: "+16035141814",
  // Set NEXT_PUBLIC_SITE_URL in production (e.g. https://morrisonhandymanservices.com)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://morrisonhandymanservices.com",
  description:
    "Morrison Handyman Services is a trusted New Hampshire handyman serving homeowners across New England with household repairs, installations, painting, carpentry, and pressure washing.",
  areaServed: [
    "New Hampshire",
    "New England",
    "Massachusetts",
    "Maine",
    "Vermont",
  ],
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
  icon: "wrench" | "drill" | "roller" | "saw" | "spray";
};

export const SERVICES: Service[] = [
  {
    slug: "household-repairs",
    title: "Household Repairs",
    short:
      "Fast, reliable fixes for the everyday breakdowns every New England home runs into.",
    long:
      "From sticking doors and leaky faucets to drywall patches and weather-worn trim, Morrison Handyman Services handles the repair list that never seems to shrink. One call clears the whole list — done right, done once.",
    bullets: [
      "Drywall patching & repair",
      "Door & window adjustments",
      "Caulking & weatherproofing",
      "Fixture & hardware repair",
      "General home maintenance",
    ],
    icon: "wrench",
  },
  {
    slug: "installations",
    title: "Installations",
    short:
      "Professional installation of fixtures, appliances, and home hardware — level, secure, and code-conscious.",
    long:
      "Whether it's a new ceiling fan, shelving, a TV mount, or a full room of fixtures, everything gets installed square, solid, and safe. No wobbles, no shortcuts.",
    bullets: [
      "TV mounts & shelving",
      "Ceiling fans & light fixtures",
      "Appliance hookups",
      "Doors, locks & hardware",
      "Blinds, curtains & more",
    ],
    icon: "drill",
  },
  {
    slug: "painting",
    title: "Painting",
    short:
      "Interior and exterior painting with crisp lines and clean job sites.",
    long:
      "Careful prep, quality paint, and straight cut lines — the difference between a paint job and a professional finish. Interior rooms, trim, decks, and exterior touch-ups across New Hampshire.",
    bullets: [
      "Interior rooms & ceilings",
      "Trim, doors & cabinets",
      "Exterior touch-ups",
      "Deck & fence staining",
      "Drywall priming & finishing",
    ],
    icon: "roller",
  },
  {
    slug: "carpentry",
    title: "Carpentry",
    short:
      "Custom carpentry and woodwork built to handle New England weather and wear.",
    long:
      "Deck repairs, custom shelving, trim work, and structural fixes — measured twice, built to last. Quality carpentry from a handyman who takes pride in the details.",
    bullets: [
      "Deck repairs & railings",
      "Custom shelving & built-ins",
      "Trim & molding",
      "Stair & railing repair",
      "Rot repair & replacement",
    ],
    icon: "saw",
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    short:
      "Bring decks, siding, and walkways back to life — years of grime gone in an afternoon.",
    long:
      "New England winters leave their mark. Professional pressure washing strips away mildew, moss, and built-up grime from decks, siding, patios, and driveways — restoring surfaces and protecting your investment.",
    bullets: [
      "Decks & patios",
      "House siding",
      "Driveways & walkways",
      "Fences & railings",
      "Pre-paint surface prep",
    ],
    icon: "spray",
  },
];
