import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "New Hampshire Handyman | Morrison Handyman Services — Repairs, Painting, Carpentry & More",
  description:
    "New Hampshire handyman serving New England. Repairs, installations, painting, carpentry, pressure washing, junk removal, and moving help. Free estimates — call (603) 514-1814.",
  alternates: { canonical: "/" },
};

const pillars = [
  {
    title: "You deal with Drew",
    body: "One person from estimate to finish. No rotating crews.",
  },
  {
    title: "Upfront pricing",
    body: "A clear price before work starts. The estimate you approve is the invoice you get.",
  },
  {
    title: "Built for New England",
    body: "Materials and methods that stand up to hard winters.",
  },
];

const steps = [
  {
    n: "01",
    title: "Call",
    body: "Tell Drew what you need — phone, text, or the contact form.",
  },
  {
    n: "02",
    title: "Estimate",
    body: "A clear scope and price, in writing.",
  },
  {
    n: "03",
    title: "Done",
    body: "Work done right, workspace left clean.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="eyebrow text-brass">
              New Hampshire · New England
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-pine sm:text-6xl md:text-7xl">
              A New Hampshire handyman who does the job right.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed">
              Repairs, installations, painting, carpentry, pressure washing,
              junk removal, and moving help. Call Drew Morrison for a straight
              answer and a fair price.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="eyebrow border border-pine bg-pine px-7 py-4 text-ivory transition hover:border-brass hover:bg-brass"
              >
                Request an estimate
              </Link>
              <a
                href={SITE.phoneHref}
                className="group font-display text-lg font-semibold text-pine"
              >
                {SITE.phoneDisplay}
                <span className="mt-0.5 block h-px w-full bg-brass transition-transform duration-300 group-hover:scale-x-75" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -bottom-4 -right-4 h-full w-full border border-brass"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/deck-build.jpg"
                alt="New deck with stairs and railings built by Morrison Handyman Services in New Hampshire"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services — numbered list */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-brass">Services</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight text-pine sm:text-5xl">
              Handyman services in New Hampshire
            </h2>
          </div>
          <Link
            href="/services"
            className="eyebrow group text-pine transition hover:text-brass"
          >
            View all services{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-14">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group grid items-baseline gap-2 border-t border-line py-7 transition-colors hover:bg-cream sm:grid-cols-[80px_1fr_1.2fr_40px] sm:gap-6 sm:px-4"
            >
              <span className="font-display text-sm font-medium text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-pine sm:text-3xl">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed sm:text-base">{s.short}</p>
              <span
                className="hidden text-xl text-brass transition-transform group-hover:translate-x-1 sm:block"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ))}
          <div className="border-t border-line" />
        </div>
      </section>

      {/* Why Morrison — dark */}
      <section className="bg-pine text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="eyebrow text-brass">Why Morrison</p>
          <p className="mt-6 max-w-3xl font-display text-3xl font-medium leading-snug tracking-tight sm:text-4xl">
            Show up on time. Do it right. Charge what was quoted.
          </p>

          <div className="mt-16 grid gap-10 border-t border-pine-mute pt-12 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
                <h3 className="font-display text-xl font-semibold text-ivory">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow text-brass">How it works</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-pine sm:text-5xl">
          Three steps, no surprises
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-ivory p-8 sm:p-10">
              <span className="font-display text-sm font-medium text-brass">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-pine">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-5 py-20 text-center sm:px-8">
          <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-pine sm:text-5xl">
            Ready to get started?
          </h2>
          <p className="max-w-xl text-lg">
            Call or send a message. Estimates are free.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/contact"
              className="eyebrow border border-pine bg-pine px-7 py-4 text-ivory transition hover:border-brass hover:bg-brass"
            >
              Request an estimate
            </Link>
            <a
              href={SITE.phoneHref}
              className="font-display text-lg font-semibold text-pine transition hover:text-brass"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
