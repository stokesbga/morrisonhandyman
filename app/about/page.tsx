import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Drew Morrison — Your Local New England Handyman",
  description:
    "Meet Drew Morrison of Morrison Handyman Services — a dependable New Hampshire handyman serving New England. Honest pricing, quality work. Call (603) 514-1814.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "On time",
    body: "He shows up when he says he will — and calls if anything changes.",
  },
  {
    title: "Done right",
    body: "No shortcuts, no band-aid fixes.",
  },
  {
    title: "Fair price",
    body: "The estimate you approve is the invoice you get.",
  },
  {
    title: "Clean finish",
    body: "Floors covered, dust contained, workspace left clean.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="eyebrow text-brass">About</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-pine sm:text-6xl">
            Meet Drew Morrison.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-14 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[minmax(0,400px)_1fr]">
        <div className="relative">
          <div
            className="absolute -bottom-4 -left-4 h-full w-full border border-brass"
            aria-hidden="true"
          />
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/drew-morrison.jpg"
              alt="Drew Morrison, owner of Morrison Handyman Services — New Hampshire handyman"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 400px, 100vw"
              priority
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-pine sm:text-4xl">
            A handyman you can count on
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Drew Morrison has years of hands-on experience across repairs,
            installations, painting, carpentry, pressure washing, junk removal,
            and moving — the full range of work a New England home needs.
          </p>
          <p className="mt-5 text-lg leading-relaxed">
            He treats every job like it&apos;s his own house. That&apos;s why
            most of his work comes from repeat customers and referrals across
            New Hampshire.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="bg-ivory p-7">
                <h3 className="font-display text-xl font-semibold text-pine">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="eyebrow border border-pine bg-pine px-7 py-4 text-ivory transition hover:border-brass hover:bg-brass"
            >
              Work with Drew
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
