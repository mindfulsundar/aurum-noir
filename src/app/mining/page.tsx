import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pageMeta } from "@/lib/seo";
import { miningSteps, photos } from "@/lib/site";

export const metadata = pageMeta(
  "Mining and origin",
  "How responsible African gold mining moves from geology to doré — and why unsafe or illegal practice is not a route to market.",
  "/mining",
);

export default function MiningPage() {
  return (
    <main>
      <PageHero
        kicker="Mining and origin"
        title="The reef is slower than the rumour."
        lede="Exploration, licence, extraction, mill, pour. Responsible artisanal and small-scale mining is licensed, mercury-aware, and labour-lawful. Industrial mining is not automatically virtuous — it is simply larger, and still must prove water, tailings, and community files."
        image={photos.pit}
        alt="Open-pit mining terraces and haul trucks"
      />
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-3">
          {[
            [
              "Artisanal & small-scale",
              "Can be legitimate where licences, no child labour, and processing standards exist. Informal mercury amalgam is not romanticised here.",
            ],
            [
              "Medium-scale",
              "Often the missing middle: enough metal for a trial lot, not enough to ignore export and environmental files.",
            ],
            [
              "Industrial",
              "Scale does not replace due diligence. Tailings, closure, and community agreements still gate any introduction.",
            ],
          ].map(([t, c]) => (
            <Reveal key={t}>
              <h2 className="font-serif text-3xl font-light">{t}</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{c}</p>
            </Reveal>
          ))}
        </div>
        <ol className="mt-24 grid gap-12 md:grid-cols-2">
          {miningSteps.map((s) => (
            <li key={s.n} className="border-t border-hairline pt-8">
              <p className="font-serif text-gold">{s.n}</p>
              <h3 className="mt-3 font-serif text-3xl font-light">{s.title}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
                {s.copy}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
