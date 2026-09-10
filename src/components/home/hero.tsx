"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { MagneticLink } from "@/components/magnetic-link";
import { buyHref, photos, sellHref } from "@/lib/site";

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yFore = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scaleMid = useTransform(scrollYProgress, [0, 1], [1.1, 1.24]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.22]);

  return (
    <section
      ref={ref}
      className="relative isolate h-[115svh] min-h-[760px] overflow-hidden"
      aria-label="Campaign hero"
    >
      <motion.div
        className="absolute inset-[-8%] z-0 will-change-transform"
        style={reduce ? undefined : { y: yBack }}
      >
        <div className="relative h-full min-h-full w-full">
          <Image
            src={photos.savanna}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-[1] will-change-transform"
        style={reduce ? undefined : { y: yMid, scale: scaleMid }}
      >
        <div className="relative h-full w-full">
          <Image
            src={photos.pit}
            alt="Open-pit mine terraces with an excavator on the bench"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-canvas via-canvas/45 to-canvas/25" />

      <motion.aside
        className="pointer-events-none absolute right-[5%] bottom-[14%] z-[3] hidden w-[min(26vw,20rem)] will-change-transform lg:block"
        style={reduce ? undefined : { y: yFore }}
        aria-hidden="true"
      >
        <div className="relative aspect-[4/5] overflow-hidden border border-hairline">
          <Image
            src={photos.bars}
            alt=""
            fill
            sizes="26vw"
            className="object-cover"
          />
        </div>
      </motion.aside>

      <motion.div
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-10 lg:px-16"
        style={reduce ? undefined : { opacity }}
      >
        <p className="mb-6 text-[11px] tracking-[0.42em] text-gold uppercase">
          African origin · authorised desk
        </p>
        <h1 className="max-w-5xl font-serif text-[clamp(3rem,10vw,8.6rem)] leading-[0.88] font-light tracking-[-0.03em]">
          From African
          <br />
          ground to
          <br />
          global hands.
        </h1>
        <p className="mt-8 max-w-lg text-sm leading-relaxed text-ink/80 md:text-base">
          We own ground and we sit at the desk. Verified mine owners and
          legitimate sellers are introduced to qualified refiners, bullion
          dealers, jewellery manufacturers, institutions, and investors —
          never to anonymous inboxes.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <MagneticLink href={buyHref} variant="solid">
            I want to buy gold
          </MagneticLink>
          <MagneticLink href={sellHref}>I own or represent a mine</MagneticLink>
        </div>
        <ul className="mt-14 grid max-w-3xl gap-6 border-t border-hairline pt-8 sm:grid-cols-3">
          {[
            ["Source verification", "Licences, ownership, origin file"],
            ["Buyer qualification", "KYC, mandate, receiving house"],
            ["Controlled execution", "Assay, custody, settlement counsel"],
          ].map(([title, copy]) => (
            <li key={title}>
              <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
                {title}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{copy}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
