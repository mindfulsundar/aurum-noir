"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { buyHref, nav, sellHref, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background,backdrop-filter,border-color] duration-700 ${
        scrolled || open
          ? "border-b border-hairline bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-16">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.22em] uppercase md:text-xl"
        >
          {site.name}
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 xl:flex"
        >
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[10px] tracking-[0.22em] uppercase transition-colors duration-500 ${
                  active ? "text-gold" : "text-ink/75 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={sellHref}
            className="hidden min-h-10 items-center border border-ink/60 px-4 text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 hover:border-gold hover:text-gold sm:inline-flex"
          >
            Sell
          </Link>
          <Link
            href={buyHref}
            className="hidden min-h-10 items-center bg-ink px-4 text-[10px] tracking-[0.2em] text-canvas uppercase transition-colors duration-500 hover:bg-gold sm:inline-flex"
          >
            Buy
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-hairline text-[10px] tracking-[0.2em] uppercase xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="grid gap-1 border-t border-hairline px-6 py-6 xl:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-sm tracking-[0.18em] text-ink/85 uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
