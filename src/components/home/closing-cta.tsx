import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { photos } from "@/lib/site";

export function ClosingCta() {
  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden">
      <Image
        src={photos.dusk}
        alt="Dusk over mineral highlands"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-canvas/72" />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-[1600px] flex-col justify-end px-6 py-20 md:px-10 lg:px-16">
        <Reveal>
          <p className="mb-5 text-[11px] tracking-[0.42em] text-gold uppercase">
            The desk
          </p>
          <h2 className="max-w-4xl font-serif text-4xl font-light md:text-6xl lg:text-7xl">
            Bring the mine. Bring the buyer. We build the bridge.
          </h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/buyers"
              className="inline-flex min-h-12 items-center justify-center bg-ink px-8 text-[11px] tracking-[0.28em] text-canvas uppercase transition-colors duration-500 hover:bg-gold"
            >
              Submit buyer mandate
            </Link>
            <Link
              href="/sellers"
              className="inline-flex min-h-12 items-center justify-center border border-ink px-8 text-[11px] tracking-[0.28em] uppercase transition-colors duration-500 hover:bg-ink hover:text-canvas"
            >
              Introduce a mine or seller
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center text-[11px] tracking-[0.28em] text-gold uppercase"
            >
              Private opportunity review
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
