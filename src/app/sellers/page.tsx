import { MandateForm } from "@/components/mandate-form";
import { PageHero } from "@/components/page-hero";
import { pageMeta } from "@/lib/seo";
import { photos, sellerPath } from "@/lib/site";

export const metadata = pageMeta(
  "Gold sellers",
  "Introduce a licensed African mine or authorised seller. Verification before any buyer introduction.",
  "/sellers",
);

export default function SellersPage() {
  return (
    <main>
      <PageHero
        kicker="I own or represent a mine"
        title="Bring a file, not a rumour."
        lede="Corporate identity, beneficial owners, licences, production, assay, and lawful export. Until those exist as text we can test, there is no matching."
        image={photos.mill}
        alt="Processing plant interior"
      />
      <section className="grid gap-16 px-6 py-24 md:px-10 lg:grid-cols-2 lg:px-16">
        <ol className="space-y-5">
          {sellerPath.map((step, i) => (
            <li key={step} className="border-t border-hairline pt-5 text-sm text-ink-muted">
              <span className="font-serif text-gold">0{i + 1} </span>
              {step}
            </li>
          ))}
        </ol>
        <MandateForm kind="seller" />
      </section>
    </main>
  );
}
