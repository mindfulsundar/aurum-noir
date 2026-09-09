import Link from "next/link";
import { BrokerStory } from "@/components/home/broker-story";
import { ClosingCta } from "@/components/home/closing-cta";
import { HomeHero } from "@/components/home/hero";
import { MaterialCraft } from "@/components/home/material-craft";
import { OpportunityGrid } from "@/components/home/opportunity-grid";
import { Pathways } from "@/components/home/pathways";
import { MarketBoard } from "@/components/market-board";
import { Reveal } from "@/components/reveal";
import { pageMeta } from "@/lib/seo";
import { miningSteps } from "@/lib/site";

export const metadata = pageMeta(
  "From African ground to global hands",
  "Aurum Noir connects verified African mines and legitimate sellers with qualified refiners, dealers, manufacturers, institutions, and investors.",
  "/",
);

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <OpportunityGrid />
      <BrokerStory />
      <MaterialCraft />
      <Pathways />
      <section className="px-6 py-28 md:px-10 lg:px-16">
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.42em] text-gold uppercase">
              Mining
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light md:text-5xl">
              How gold leaves the rock.
            </h2>
          </div>
          <div className="flex flex-col gap-2 text-right">
            <Link href="/mining" className="text-[11px] tracking-[0.28em] text-gold uppercase">
              Full origin →
            </Link>
            <Link href="/supply-chain" className="text-[11px] tracking-[0.28em] text-gold uppercase">
              Supply chain →
            </Link>
          </div>
        </Reveal>
        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {miningSteps.slice(0, 5).map((s) => (
            <li key={s.n}>
              <p className="font-serif text-gold">{s.n}</p>
              <h3 className="mt-2 font-serif text-2xl font-light">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.copy}</p>
            </li>
          ))}
        </ol>
      </section>
      <MarketBoard />
      <section className="border-t border-hairline px-6 py-20 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-[11px] tracking-[0.42em] text-gold uppercase">
            Warning
          </p>
          <p className="mt-4 max-w-3xl font-serif text-2xl font-light leading-snug md:text-3xl">
            Advance-fee requests for release, customs, insurance, or permits —
            paid to strangers — are a scam pattern. We never ask for that
            theatre. Independent verification first.
          </p>
          <Link href="/sourcing" className="mt-8 inline-block text-[11px] tracking-[0.28em] text-gold uppercase">
            Responsible sourcing →
          </Link>
        </Reveal>
      </section>
      <ClosingCta />
    </main>
  );
}
