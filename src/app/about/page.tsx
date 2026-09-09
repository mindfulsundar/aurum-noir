import { PageHero } from "@/components/page-hero";
import { pageMeta } from "@/lib/seo";
import { photos, site } from "@/lib/site";

export const metadata = pageMeta(
  "About the broker",
  "Aurum Noir is presented as an African mine owner and authorised broker coordinating introductions — not the refinery, custodian, or bank.",
  "/about",
);

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About the broker"
        title="We sit on both sides of the dirt."
        lede={`${site.name} is written here as a mine-owning house with a London–Accra–Johannesburg desk. Until incorporation papers are published, treat names, addresses, and telephones as placeholders.`}
        image={photos.range}
        alt="High mineral ridges"
      />
      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10">
        <p className="text-lg leading-relaxed text-ink-muted">
          The work is preparation and matching: origin files for sellers,
          mandates for buyers, and a controlled trial lot when both sides can
          bear the paperwork. We do not automatically assay, refine, custody,
          insure, or lend. Those seats belong to named professionals on a
          transaction sheet.
        </p>
        <p className="mt-8 text-lg leading-relaxed text-ink-muted">
          African mines are not a monolith. Some are industrial and listed.
          Some are licensed small-scale. Some are unlicenceable. We only open
          conversations that can survive a receiving refinery’s onboarding.
        </p>
      </section>
    </main>
  );
}
