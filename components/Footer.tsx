import Link from "next/link";
import { SITE, SERVICES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-pine text-ivory/70">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold text-ivory">
            Morrison
          </p>
          <p className="eyebrow mt-1 text-brass">Handyman Services</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Considered craftsmanship for New Hampshire and New England homes —
            repairs, installations, painting, carpentry, and pressure washing.
          </p>
        </div>

        <div>
          <p className="eyebrow text-ivory/50">Services</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="transition hover:text-brass"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-ivory/50">Enquiries</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <a
                href={SITE.phoneHref}
                className="font-display text-lg font-semibold text-brass"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-brass">
                Request an estimate
              </Link>
            </li>
            <li className="pt-3 text-ivory/45">
              Serving New Hampshire &amp; the greater New England region.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-pine-mute">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-ivory/40 sm:px-8">
          © {new Date().getFullYear()} Morrison Handyman Services. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
