import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pageMeta } from "@/lib/seo";
import { guidance, photos, sourcing } from "@/lib/site";

export const metadata = pageMeta(
  "Responsible sourcing",
  "Licensing, KYC, sanctions, human rights, environment, assay, export, and settlement controls. Guidance referenced, certification not claimed.",
  "/sourcing",
);

export default function SourcingPage() {
  return (
    <main>
      <PageHero
        kicker="Responsible sourcing"
        title="Due diligence is the product."
        lede="We reference LBMA, OECD, and World Gold Council guidance. We do not claim their certification, partnership, or accreditation. No child labour. No conflict metal. No advance-fee theatre."
        image={photos.earth}
        alt="Mineral highland landscape"
      />
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2">
          {sourcing.map((item) => (
            <Reveal key={item.title}>
              <h2 className="font-serif text-3xl font-light">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.copy}</p>
            </Reveal>
          ))}
        </div>
        <aside className="mt-20 border border-hairline p-8 md:p-12">
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
            Scam warning
          </p>
          <p className="mt-4 max-w-3xl font-serif text-2xl font-light leading-snug">
            Anonymous gold, “ready in the airport”, and fees to release, insure,
            or permit metal you have not independently verified are classic
            fraud. Walk away. Instruct your own counsel.
          </p>
        </aside>
        <ul className="mt-12 space-y-2 text-sm text-ink-muted">
          {guidance.map((g) => (
            <li key={g.href}>
              <a href={g.href} target="_blank" rel="noreferrer" className="hover:text-ink">
                {g.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
