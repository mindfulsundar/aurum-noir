import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { pageMeta } from "@/lib/seo";
import { photos, site } from "@/lib/site";

export const metadata = pageMeta(
  "Contact or submit a mandate",
  "Reach the Aurum Noir desk for a private opportunity review, or open a structured buyer or seller mandate.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Mandate"
        title="Write as if counsel will read it."
        lede="Private opportunity review is a conversation, not a listing. Choose the form that matches your seat at the table."
        image={photos.vault}
        alt="Low-lit desk"
      />
      <section className="grid gap-12 px-6 py-24 md:grid-cols-3 md:px-10 lg:px-16">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Desk</p>
          <p className="mt-4 text-sm text-ink-muted">{site.address}</p>
          <p className="mt-2 text-sm">{site.email}</p>
          <p className="mt-2 text-sm">{site.phone}</p>
        </div>
        <Link href="/sellers" className="border border-hairline p-8 hover:border-gold">
          <h2 className="font-serif text-3xl font-light">Introduce a mine</h2>
          <p className="mt-3 text-sm text-ink-muted">Seller mandate form.</p>
        </Link>
        <Link href="/buyers" className="border border-hairline p-8 hover:border-gold">
          <h2 className="font-serif text-3xl font-light">Submit a buyer mandate</h2>
          <p className="mt-3 text-sm text-ink-muted">Product, house, settlement.</p>
        </Link>
      </section>
    </main>
  );
}
