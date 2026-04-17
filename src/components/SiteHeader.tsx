"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#range", label: "Range" },
  { href: "#visitors", label: "For you" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit" },
] as const;

const phoneDisplay = "+44 113 244 1313";
const phoneHref = "tel:+441132441313";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group z-[60] flex min-w-0 items-center gap-3 leading-tight"
          onClick={close}
          aria-label="Your City News & Off Licence — home"
        >
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl ring-2 ring-white/25">
            <Image
              src="/shopic.jpg"
              alt=""
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="44px"
            />
          </span>
          <span className="min-w-0 flex flex-col">
            <span className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
              Your City News
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/75">
              &amp; Off Licence · Leeds
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/90 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={phoneHref}
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand shadow-soft transition hover:bg-cream md:inline-flex"
          >
            Call us
          </a>

          <button
            type="button"
            className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex h-5 w-6 flex-col justify-center gap-1.5" aria-hidden>
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {open ? (
          <button
            type="button"
            className="fixed inset-0 z-[55] bg-black/45 md:hidden"
            aria-hidden="true"
            tabIndex={-1}
            onClick={close}
          />
        ) : null}

        <div
          id={menuId}
          aria-hidden={!open}
          className={`absolute left-0 right-0 top-full z-[60] border-t border-white/15 bg-brand shadow-card md:hidden ${
            open
              ? "pointer-events-auto max-h-[min(85vh,32rem)] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-1 opacity-0"
          } overflow-hidden transition-[max-height,opacity,transform] duration-200 ease-out`}
        >
          <div className="relative h-28 w-full shrink-0">
            <Image
              src="/imageoutside.png"
              alt=""
              fill
              className="object-cover object-center opacity-90"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand to-transparent" aria-hidden />
          </div>
          <nav
            className="flex max-h-[min(calc(85vh-7rem),26rem)] flex-col gap-1 overflow-y-auto px-4 py-4"
            aria-label="Mobile navigation"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/95 transition hover:bg-white/10"
                onClick={close}
              >
                {l.label}
              </a>
            ))}
            <a
              href={phoneHref}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-brand shadow-soft transition hover:bg-cream"
              onClick={close}
            >
              Call us — {phoneDisplay}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
