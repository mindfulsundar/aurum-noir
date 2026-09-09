import { MagneticLink } from "@/components/magnetic-link";
import { Reveal } from "@/components/reveal";
import { buyerPath, sellerPath } from "@/lib/site";

export function Pathways() {
  return (
    <section
      className="border-y border-hairline"
      aria-labelledby="path-heading"
    >
      <div className="px-6 py-20 md:px-10 lg:px-16">
        <Reveal>
          <p className="text-[11px] tracking-[0.42em] text-gold uppercase">
            Two journeys
          </p>
          <h2
            id="path-heading"
            className="mt-4 max-w-2xl font-serif text-4xl font-light md:text-6xl"
          >
            Sell from the ground. Buy into a receiving house.
          </h2>
        </Reveal>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="border-t border-hairline px-6 py-16 md:px-10 lg:border-r lg:px-16">
          <h3 className="font-serif text-3xl font-light">Sellers</h3>
          <ol className="mt-10 space-y-5">
            {sellerPath.map((step, i) => (
              <li key={step} className="flex gap-4 text-sm leading-relaxed text-ink-muted">
                <span className="font-serif text-gold">0{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <MagneticLink href="/sellers">Introduce a mine or seller</MagneticLink>
          </div>
        </div>
        <div className="border-t border-hairline px-6 py-16 md:px-10 lg:px-16">
          <h3 className="font-serif text-3xl font-light">Buyers</h3>
          <ol className="mt-10 space-y-5">
            {buyerPath.map((step, i) => (
              <li key={step} className="flex gap-4 text-sm leading-relaxed text-ink-muted">
                <span className="font-serif text-gold">0{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <MagneticLink href="/buyers" variant="solid">
              Submit a buyer mandate
            </MagneticLink>
          </div>
        </div>
      </div>
    </section>
  );
}
