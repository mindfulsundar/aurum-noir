import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { materials } from "@/lib/site";

export function MaterialCraft() {
  return (
    <section
      className="px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44"
      aria-labelledby="craft-heading"
    >
      <Reveal className="mx-auto mb-20 max-w-3xl text-center">
        <p className="mb-4 text-[11px] tracking-[0.42em] text-gold uppercase">
          Physical gold
        </p>
        <h2
          id="craft-heading"
          className="font-serif text-4xl font-light md:text-6xl"
        >
          Seen only if you look closely.
        </h2>
      </Reveal>
      <div className="space-y-28 md:space-y-36">
        {materials.map((item, i) => (
          <article
            key={item.title}
            className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
          >
            <Reveal
              className={`relative min-h-[22rem] overflow-hidden lg:col-span-7 lg:min-h-[34rem] ${
                i % 2 ? "lg:col-start-6" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal
              delay={0.1}
              className={`lg:col-span-5 ${i % 2 ? "lg:col-start-1 lg:row-start-1" : ""}`}
            >
              <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
                0{i + 1}
              </p>
              <h3 className="mt-4 font-serif text-3xl font-light md:text-5xl">
                {item.title}
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted">
                {item.copy}
              </p>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
