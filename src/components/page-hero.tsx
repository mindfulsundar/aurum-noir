import Image from "next/image";
import { Reveal } from "@/components/reveal";

type Props = {
  kicker: string;
  title: string;
  lede: string;
  image: string;
  alt: string;
};

export function PageHero({ kicker, title, lede, image, alt }: Props) {
  return (
    <header className="relative isolate min-h-[72vh] overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/55 to-canvas/30" />
      <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-[1600px] flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-24 lg:px-16">
        <Reveal>
          <p className="mb-5 text-[11px] tracking-[0.42em] text-gold uppercase">
            {kicker}
          </p>
          <h1 className="max-w-4xl font-serif text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.92] font-light tracking-[-0.03em]">
            {title}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/80 md:text-lg">
            {lede}
          </p>
        </Reveal>
      </div>
    </header>
  );
}
