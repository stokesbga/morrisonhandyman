import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Handyman Services in New Hampshire — Repairs, Painting, Carpentry, Junk Removal & More",
  description:
    "Morrison Handyman Services: household repairs, installations, painting, carpentry, pressure washing, junk removal, and truck-assisted moving for New Hampshire and New England homes. Free estimates — call (603) 514-1814.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="eyebrow text-brass">Services</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-pine sm:text-6xl">
            Handyman services in New Hampshire
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Seven services for New Hampshire and New England homes. Every job
            gets a clear price and honest work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        {SERVICES.map((s, i) => (
          <article
            id={s.slug}
            key={s.slug}
            className={`scroll-mt-32 grid gap-10 py-16 sm:py-20 md:grid-cols-[100px_1fr_minmax(0,340px)] ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <span className="font-display text-sm font-medium text-brass">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-pine sm:text-4xl">
                {s.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed">{s.long}</p>
              <Link
                href="/contact"
                className="eyebrow group mt-8 inline-block text-pine transition hover:text-brass"
              >
                Request an estimate{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
            <div>
              {s.slug === "pressure-washing" && (
                <div className="relative mb-8">
                  <div
                    className="absolute -bottom-3 -right-3 h-full w-full border border-brass"
                    aria-hidden="true"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/pressure-washing-deck.jpg"
                      alt="Deck pressure washing in progress by Morrison Handyman Services, New Hampshire"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 340px, 100vw"
                    />
                  </div>
                </div>
              )}
              <p className="eyebrow text-pine/50">Common projects</p>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {s.bullets.map((b) => (
                  <li key={b} className="py-2.5 text-sm">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-pine">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ivory">
              Not sure which service you need?
            </h2>
            <p className="mt-2 max-w-xl text-ivory/60">
              Describe the job and Drew will tell you what it takes. No
              obligation.
            </p>
          </div>
          <a
            href={SITE.phoneHref}
            className="eyebrow shrink-0 border border-brass px-7 py-4 text-brass transition hover:bg-brass hover:text-pine"
          >
            {SITE.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
