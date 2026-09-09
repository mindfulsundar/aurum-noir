import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Terms",
  "Indicative information only. No offer of metal, credit, or investment advice.",
  "/legal/terms",
);

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-32">
      <h1 className="font-serif text-5xl font-light">Terms</h1>
      <p className="mt-8 text-sm leading-relaxed text-ink-muted">
        Market figures are delayed or fallback references. Calculators are
        arithmetic models. Listings are labelled demonstrations until genuine
        origin files exist. Nothing on this site is an offer to buy or sell
        metal, a solicitation of investment, or a representation of LBMA, OECD,
        or World Gold Council membership. Transactions, if any, occur only
        under separately negotiated documents reviewed by independent counsel.
      </p>
    </main>
  );
}
