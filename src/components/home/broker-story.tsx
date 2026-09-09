"use client";

import Image from "next/image";
import { photos } from "@/lib/site";
import { Reveal } from "@/components/reveal";

const quotes = [
  {
    text: "Good mines do not only need capital. They need credible routes to market.",
    cite: "Desk note",
  },
  {
    text: "A bar that cannot tell you where it slept is not a bar we will introduce.",
    cite: "Origin file",
  },
  {
    text: "We own ground. We do not impersonate the refinery, the bank, or the law.",
    cite: "Mandate terms",
  },
];

export function BrokerStory() {
  return (
    <section className="bg-canvas-raised" aria-labelledby="story-heading">
      <div className="grid lg:grid-cols-2">
        <div className="min-h-[70vh] lg:sticky lg:top-0 lg:h-screen">
          <div className="relative h-full min-h-[70vh]">
            <Image
              src={photos.savanna}
              alt="Open African landscape at dusk, used as origin atmosphere rather than a specific unlicensed site"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-canvas/35" />
          </div>
        </div>
        <div className="px-6 py-24 md:px-16 md:py-32 lg:min-h-[240vh] lg:px-20">
          <Reveal>
            <p className="mb-5 text-[11px] tracking-[0.42em] text-gold uppercase">
              The house
            </p>
            <h2
              id="story-heading"
              className="max-w-xl font-serif text-4xl leading-[1.05] font-light md:text-6xl"
            >
              Mine owner. Transaction broker. Not the whole chain.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
              Legitimate African mines often sit far from qualified offtake:
              refiners who will accept the metal, dealers who can settle, and
              manufacturers who will not pay against a PDF. We prepare origin
              files, qualify counterparties, and coordinate — introductions, not
              miracles.
            </p>
          </Reveal>
          <div className="mt-24 space-y-28">
            {quotes.map((q) => (
              <Reveal key={q.cite} y={48}>
                <blockquote className="border-l border-gold/40 pl-8 md:pl-10">
                  <p className="font-serif text-3xl leading-snug font-light italic md:text-5xl md:leading-[1.15]">
                    “{q.text}”
                  </p>
                  <footer className="mt-6 text-[11px] tracking-[0.28em] text-ink-muted uppercase">
                    {q.cite}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
