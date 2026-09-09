import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Privacy",
  "How this demonstration site treats enquiry text. No document vault is implemented.",
  "/legal/privacy",
);

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-32">
      <h1 className="font-serif text-5xl font-light">Privacy</h1>
      <p className="mt-8 text-sm leading-relaxed text-ink-muted">
        Mandate forms send structured text to a server route that does not
        persist passports, licences, or assays. Do not submit special-category
        data. {site.legalName} is a demonstration label until a live controller
        is named. Contact {site.email} to request deletion of an enquiry
        reference you received.
      </p>
    </main>
  );
}
