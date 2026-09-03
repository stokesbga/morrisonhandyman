export const SITE = {
  name: "Morrison Handyman Services",
  legalName: "Morrison Handyman Services",
  owner: "Drew Morrison",
  phoneDisplay: "(603) 514-1814",
  phoneHref: "tel:+16035141814",
  phoneE164: "+16035141814",
  email: "drewmorrisonhandyman@gmail.com",
  emailHref: "mailto:drewmorrisonhandyman@gmail.com",
  // Set NEXT_PUBLIC_SITE_URL in production (e.g. https://morrisonhandymanservices.com)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://morrisonhandymanservices.com",
  description:
    "Morrison Handyman Services is a New Hampshire handyman serving New England: repairs, installations, painting, carpentry, pressure washing, junk removal, and moving help. Call (603) 514-1814.",
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
  icon: "wrench" | "drill" | "roller" | "saw" | "spray" | "trash" | "truck";
};

export const SERVICES: Service[] = [
  {
    slug: "household-repairs",
    title: "Household Repairs",
    short: "Drywall, doors, faucets, trim — the small jobs that pile up.",
    long:
      "Drywall patches, sticking doors, leaky faucets, worn trim, caulking. One call clears the list, usually in a single visit.",
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
    short: "TV mounts, ceiling fans, fixtures, and appliances — installed level and solid.",
    long:
      "Ceiling fans, TV mounts, shelving, light fixtures, appliances, doors, and hardware. Installed level, secure, and usually in one trip.",
    bullets: [
      "TV mounts & shelving",
      "Ceiling fans & light fixtures",
      "Appliance hookups",
      "Doors, locks & hardware",
      "Blinds & curtains",
    ],
    icon: "drill",
  },
  {
    slug: "painting",
    title: "Painting",
    short: "Interior and exterior painting with clean lines and clean job sites.",
    long:
      "Proper prep, quality paint, straight lines. Rooms, ceilings, trim, cabinets, decks, and exterior touch-ups.",
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
    short: "Deck repairs, trim, shelving, and rot replacement — built to last.",
    long:
      "Deck repairs, railings, trim, custom shelving, stairs, and rot replacement. Measured twice, built to handle New England weather.",
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
    short: "Decks, siding, and driveways — years of grime gone in an afternoon.",
    long:
      "Mildew, moss, and grime stripped from decks, siding, patios, and driveways. Good on its own or as prep for paint and stain.",
    bullets: [
      "Decks & patios",
      "House siding",
      "Driveways & walkways",
      "Fences & railings",
      "Pre-paint surface prep",
    ],
    icon: "spray",
  },
  {
    slug: "junk-removal",
    title: "Junk & Trash Removal",
    short: "Junk hauled out of basements, garages, attics, and yards.",
    long:
      "Furniture, appliances, debris, and clutter — loaded, hauled away, and disposed of properly. Cleanouts big and small.",
    bullets: [
      "Furniture & appliance haul-away",
      "Basement & garage cleanouts",
      "Yard waste & storm debris",
      "Renovation debris",
      "Dump runs",
    ],
    icon: "trash",
  },
  {
    slug: "moving-help",
    title: "Truck-Assisted Moving",
    short: "Small moves and single-item hauls with a pickup truck and an extra set of hands.",
    long:
      "Pickup truck plus muscle for small moves, single items, furniture deliveries, and dump runs. Loaded carefully, moved on your schedule.",
    bullets: [
      "Single-item moves",
      "Small apartment & dorm moves",
      "Furniture pickup & delivery",
      "Loading & unloading help",
      "In-home furniture rearranging",
    ],
    icon: "truck",
  },
];
