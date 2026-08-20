import Link from "next/link";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="leading-tight">
          <span className="block font-display text-xl font-semibold tracking-tight text-pine sm:text-2xl">
            Morrison
          </span>
          <span className="eyebrow block text-[10px] text-brass">
            Handyman Services
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="eyebrow text-pine/70 transition hover:text-brass"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={SITE.phoneHref}
            className="hidden font-display text-base font-semibold text-pine transition hover:text-brass lg:block"
          >
            {SITE.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="eyebrow border border-pine bg-pine px-4 py-2.5 text-ivory transition hover:border-brass hover:bg-brass sm:px-5"
          >
            Request an estimate
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className="flex items-center justify-center gap-7 border-t border-line px-4 py-2.5 md:hidden"
        aria-label="Mobile"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="eyebrow text-pine/70 hover:text-brass"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
