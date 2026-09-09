import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { opportunities } from "@/lib/site";

export function OpportunityGrid() {
  return (
    <section
      className="px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44"
      aria-labelledby="opps-heading"
    >
      <Reveal className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.42em] text-gold uppercase">
            Representative supply
          </p>
          <h2
            id="opps-heading"
            className="max-w-xl font-serif text-4xl font-light tracking-tight md:text-6xl"
          >
            Forms the metal can take.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
          Demonstration opportunities only. No anonymous seller contacts, no
          warehouse claims, no implied inventory. Genuine listings replace this
          grid when origin files exist.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {opportunities.map((item, i) => (
          <Reveal
            key={item.id}
            delay={i * 0.05}
            className="group relative min-h-[26rem] overflow-hidden bg-canvas-raised"
          >
            <Image
              src={item.image}
              alt={`${item.name} — ${item.form}`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] motion-reduce:group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="font-serif text-3xl font-light">{item.name}</p>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] tracking-[0.14em] text-ink-muted uppercase">
                <div>
                  <dt className="text-gold">Form</dt>
                  <dd className="mt-1 text-ink">{item.form}</dd>
                </div>
                <div>
                  <dt className="text-gold">Purity</dt>
                  <dd className="mt-1 text-ink">{item.purity}</dd>
                </div>
                <div>
                  <dt className="text-gold">Origin</dt>
                  <dd className="mt-1 text-ink">{item.origin}</dd>
                </div>
                <div>
                  <dt className="text-gold">Volume</dt>
                  <dd className="mt-1 text-ink">{item.volume}</dd>
                </div>
                <div>
                  <dt className="text-gold">Stage</dt>
                  <dd className="mt-1 text-ink">{item.stage}</dd>
                </div>
                <div>
                  <dt className="text-gold">Status</dt>
                  <dd className="mt-1 text-ink">{item.status}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
