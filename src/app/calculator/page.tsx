import { BullionCalculator } from "@/components/bullion-calculator";
import { PageHero } from "@/components/page-hero";
import { pageMeta } from "@/lib/seo";
import { photos } from "@/lib/site";

export const metadata = pageMeta(
  "Bullion calculator",
  "Transparent conversion, purity, premia, deductions, and indicative net settlement. Not an offer or investment advice.",
  "/calculator",
);

export default function CalculatorPage() {
  return (
    <main>
      <PageHero
        kicker="Calculator"
        title="Arithmetic with the romance removed."
        lede="Convert mass, adjust karat, apply premia and costs, and see an indicative net. Formulas sit beside the numbers. Nothing here is a quote."
        image={photos.coins}
        alt="Gold-coloured coins on a dark surface"
      />
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <BullionCalculator spotUsd={4524} />
      </section>
    </main>
  );
}
