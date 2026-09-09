import { MarketBoard } from "@/components/market-board";
import { PageHero } from "@/components/page-hero";
import { pageMeta } from "@/lib/seo";
import { photos } from "@/lib/site";

export const metadata = pageMeta(
  "Live gold market",
  "Delayed COMEX gold futures reference via Yahoo Finance, with FX conversion. Indicative only — not a physical spot or binding price.",
  "/market",
);

export default function MarketPage() {
  return (
    <main>
      <PageHero
        kicker="Live gold market"
        title="A quotation is not a pour."
        lede="We proxy a delayed futures feed. Physical parcels price off assay, location, and contract. Never treat this board as LBMA spot or as your invoice."
        image={photos.bars}
        alt="Stacked gold bars"
      />
      <MarketBoard />
    </main>
  );
}
