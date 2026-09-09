import Link from "next/link";
import { guidance, marketSources, nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-hairline bg-canvas">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-16">
        <div>
          <p className="font-serif text-2xl tracking-[0.18em] uppercase">
            {site.name}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Mine owner and authorised broker. Introductions, preparation, and
            coordination — not the refinery, custodian, assayer, counsel, or
            bank.
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
            House
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
            Market sources
          </p>
          <ul className="mt-4 space-y-2">
            {marketSources.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[11px] tracking-[0.32em] text-gold uppercase">
            Guidance
          </p>
          <ul className="mt-4 space-y-2">
            {guidance.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
            Desk
          </p>
          <p className="mt-4 text-sm text-ink-muted">{site.address}</p>
          <p className="mt-2 text-sm text-ink-muted">{site.email}</p>
          <p className="mt-2 text-sm text-ink-muted">{site.phone}</p>
          <p className="mt-8 text-xs leading-relaxed text-ink-muted">
            Placeholders only until a live entity file is published. Quotes on
            this site are indicative. They are not offers, allocations, or
            investment advice.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-t border-hairline px-6 py-6 text-[10px] tracking-[0.18em] text-ink-muted uppercase md:flex-row md:justify-between md:px-10 lg:px-16">
        <p>
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <div className="flex gap-6">
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
          <Link href="/sourcing">Risk & sourcing</Link>
        </div>
      </div>
    </footer>
  );
}
