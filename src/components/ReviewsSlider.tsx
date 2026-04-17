"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Review } from "@/lib/reviews";

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const AUTOPLAY_MS = 5500;

type Props = {
  reviews: Review[];
};

export function ReviewsSlider({ reviews }: Props) {
  const [index, setIndex] = useState(0);
  const count = reviews.length;
  const hoverPausedRef = useRef(false);
  const focusPausedRef = useRef(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  useEffect(() => {
    if (count <= 1) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const tick = () => {
      if (
        hoverPausedRef.current ||
        focusPausedRef.current ||
        document.visibilityState === "hidden"
      ) {
        return;
      }
      setIndex((i) => (i + 1) % count);
    };

    const id = window.setInterval(tick, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [count]);

  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const onFocusIn = () => {
      focusPausedRef.current = true;
    };
    const onFocusOut = (e: FocusEvent) => {
      const next = e.relatedTarget as Node | null;
      if (next && el.contains(next)) return;
      focusPausedRef.current = false;
    };
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut);
    return () => {
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  if (count === 0) return null;

  return (
    <div
      ref={regionRef}
      className="mt-10"
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer reviews"
      onMouseEnter={() => {
        hoverPausedRef.current = true;
      }}
      onMouseLeave={() => {
        hoverPausedRef.current = false;
      }}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((r, slideIndex) => (
            <div
              key={`${r.name}-${r.timeAgo}`}
              className="w-full shrink-0"
              aria-hidden={slideIndex !== index}
            >
              <blockquote className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm">
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-white/95">&ldquo;{r.quote}&rdquo;</p>
                  <footer className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 text-xs text-white/65">
                    <cite className="not-italic font-semibold text-white/90">{r.name}</cite>
                    <span>{r.timeAgo}</span>
                  </footer>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={prev}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
          aria-label="Previous review"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to review ${i + 1} of ${count}`}
              onClick={() => setIndex(i)}
              className={
                i === index
                  ? "h-2 w-8 rounded-full bg-white transition-[width]"
                  : "h-2 w-2 rounded-full bg-white/35 transition hover:bg-white/55"
              }
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
          aria-label="Next review"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
