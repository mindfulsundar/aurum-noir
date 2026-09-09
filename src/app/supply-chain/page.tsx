import { PageHero } from "@/components/page-hero";
import { pageMeta } from "@/lib/seo";
import { logistics, photos } from "@/lib/site";

export const metadata = pageMeta(
  "Mine-to-market supply chain",
  "Chain of custody from mine production through export, insured transport, refinery assay, fabrication, and custody.",
  "/supply-chain",
);

export default function SupplyPage() {
  return (
    <main>
      <PageHero
        kicker="Mine to market"
        title="Thirteen gates between pit and paper."
        lede="Title, insurance, sanctions screening, and settlement are mechanics — not decorations. Each stage names a responsible party, the evidence required, the principal risk, and the control."
        image={photos.plant}
        alt="Industrial processing hall"
      />
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="text-[11px] tracking-[0.2em] text-gold uppercase">
              <tr className="border-b border-hairline">
                <th className="py-4 pr-4 font-medium">Stage</th>
                <th className="py-4 pr-4 font-medium">Party</th>
                <th className="py-4 pr-4 font-medium">Evidence</th>
                <th className="py-4 pr-4 font-medium">Risk</th>
                <th className="py-4 font-medium">Control</th>
              </tr>
            </thead>
            <tbody>
              {logistics.map((row) => (
                <tr key={row.n} className="border-b border-hairline align-top">
                  <td className="py-5 pr-4">
                    <span className="text-gold">{row.n}</span>
                    <p className="mt-1 font-serif text-lg">{row.title}</p>
                  </td>
                  <td className="py-5 pr-4 text-ink-muted">{row.party}</td>
                  <td className="py-5 pr-4 text-ink-muted">{row.evidence}</td>
                  <td className="py-5 pr-4 text-ink-muted">{row.risk}</td>
                  <td className="py-5 text-ink-muted">{row.control}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Settlement should follow contracted inspection — often payment versus
          metal through counsel or a receiving house. Unallocated pool accounts
          are not the same as named bars. This desk does not hold client funds
          or metal unless a separate, documented mandate says otherwise.
        </p>
      </section>
    </main>
  );
}
