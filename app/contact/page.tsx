import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Free Handyman Estimates in New Hampshire",
  description:
    "Request a free estimate from Morrison Handyman Services. Call (603) 514-1814 or send a message — repairs, installations, painting, carpentry, pressure washing, junk removal, and moving help across New Hampshire and New England.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="eyebrow text-brass">Contact</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-pine sm:text-6xl">
            Get a free estimate.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Tell Drew about the job. He&apos;ll get back to you with a straight
            answer and a fair price.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[1fr_minmax(0,300px)]">
        <ContactForm />

        <aside className="space-y-10 md:border-l md:border-line md:pl-10">
          <div>
            <p className="eyebrow text-brass">Prefer to talk?</p>
            <a
              href={SITE.phoneHref}
              className="mt-3 block font-display text-3xl font-semibold text-pine transition hover:text-brass"
            >
              {SITE.phoneDisplay}
            </a>
            <p className="mt-3 text-sm leading-relaxed">
              Call or text anytime. If Drew&apos;s on a job, leave a message
              and he&apos;ll call back.
            </p>
          </div>
          <div>
            <p className="eyebrow text-brass">Service area</p>
            <p className="mt-3 text-sm leading-relaxed">
              Based in New Hampshire. Serving southern NH and nearby
              Massachusetts, Maine, and Vermont.
            </p>
          </div>
          <div>
            <p className="eyebrow text-brass">What to expect</p>
            <p className="mt-3 text-sm leading-relaxed">
              A quick reply, a visit if the job needs one, and a written
              estimate with a clear price.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
