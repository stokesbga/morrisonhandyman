import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Drew Morrison — Your Local New England Handyman",
  description:
    "Meet Drew Morrison, the craftsman behind Morrison Handyman Services. A dependable New Hampshire handyman serving homeowners across New England with honest pricing and quality workmanship.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Punctual",
    body: "Drew arrives when he says he will, and communicates the moment anything changes.",
  },
  {
    title: "Precise",
    body: "No shortcuts, no band-aid fixes. Every job is finished the way he'd finish it in his own home.",
  },
  {
    title: "Fair",
    body: "Straightforward proposals and honest pricing — the estimate you approve is the invoice you receive.",
  },
  {
    title: "Respectful",
    body: "Floors covered, dust contained, and the workspace left cleaner than he found it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="eyebrow text-brass">About</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-pine sm:text-6xl">
            Craftsmanship with a handshake behind it.
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
            Meet Drew Morrison
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Morrison Handyman Services was built on a simple conviction:
            homeowners deserve a craftsman they can actually count on. Drew
            Morrison brings years of hands-on experience across household
            repairs, installations, painting, carpentry, and pressure washing —
            the full range of skills a New England home demands.
          </p>
          <p className="mt-5 text-lg leading-relaxed">
            From patching drywall to rebuilding weather-worn deck railings,
            Drew approaches every project with the same care he&apos;d put into
            his own place. It&apos;s why nearly all of his work comes through
            repeat clients and word-of-mouth referrals across New Hampshire.
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
