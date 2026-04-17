import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#range", label: "Range" },
  { href: "#visitors", label: "For you" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
            Your City News
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-white/75">
            &amp; Off Licence · Leeds
          </span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/90 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+441132441313"
          className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand shadow-soft transition hover:bg-cream"
        >
          Call us
        </a>
      </div>
    </header>
  );
}
