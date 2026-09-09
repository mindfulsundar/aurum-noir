import { MandateForm } from "@/components/mandate-form";
import { PageHero } from "@/components/page-hero";
import { buyerPath, photos } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Gold buyers",
  "Submit a qualified buyer mandate: product, purity, receiving refinery, settlement, and compliance.",
  "/buyers",
);

export default function BuyersPage() {
  return (
    <main>
      <PageHero
        kicker="I want to buy gold"
        title="Name the house that will receive it."
        lede="Refiners, dealers, manufacturers, institutions, and investors. A mandate without a receiving location and a settlement method is not a mandate."
        image={photos.vault}
        alt="Quiet ledger table in low light"
      />
      <section className="grid gap-16 px-6 py-24 md:px-10 lg:grid-cols-2 lg:px-16">
        <ol className="space-y-5">
          {buyerPath.map((step, i) => (
            <li key={step} className="border-t border-hairline pt-5 text-sm text-ink-muted">
              <span className="font-serif text-gold">0{i + 1} </span>
              {step}
            </li>
          ))}
        </ol>
        <MandateForm kind="buyer" />
      </section>
    </main>
  );
}
