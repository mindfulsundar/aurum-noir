"use client";

import { useEffect, useMemo, useState } from "react";
import {
  convertOz,
  FX_CODES,
  RANGES,
  fallbackMarket,
  type FxCode,
  type MarketPayload,
  type RangeId,
} from "@/lib/market";

function money(n: number, currency: string) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    maximumFractionDigits: n >= 100 ? 2 : 4,
  }).format(n);
}

export function MarketBoard({ compact = false }: { compact?: boolean }) {
  const [range, setRange] = useState<RangeId>("1y");
  const [fx, setFx] = useState<FxCode>("USD");
  const [data, setData] = useState<MarketPayload | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    setState("loading");
    fetch(`/api/market?range=${range}`)
      .then(async (res) => {
        const json = (await res.json()) as MarketPayload;
        if (cancelled) return;
        setData(json);
        setState(json.status === "fallback" ? "ready" : "ready");
      })
      .catch(() => {
        if (cancelled) return;
        setData(fallbackMarket(range, "Network error"));
        setState("error");
      });
    return () => {
      cancelled = true;
    };
  }, [range]);

  const quote = data ?? fallbackMarket(range);
  const rate = quote.fx[fx] ?? 1;
  const units = convertOz(quote.last, rate);
  const min = Math.min(...quote.series.map((p) => p.usd));
  const max = Math.max(...quote.series.map((p) => p.usd));
  const pad = (max - min) * 0.08 || 1;

  const path = useMemo(() => {
    if (!quote.series.length) return "";
    const w = 100;
    const h = 42;
    return quote.series
      .map((d, i) => {
        const x = (i / Math.max(quote.series.length - 1, 1)) * w;
        const y = h - ((d.usd - (min - pad)) / (max + pad - (min - pad))) * h;
        return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
      })
      .join(" ");
  }, [max, min, pad, quote.series]);

  return (
    <section
      className={compact ? "" : "px-6 py-28 md:px-10 md:py-36 lg:px-16"}
      aria-labelledby="market-heading"
    >
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] tracking-[0.42em] text-gold uppercase">
            Market reference
          </p>
          <h2
            id="market-heading"
            className="mt-3 font-serif text-4xl font-light md:text-5xl"
          >
            Indicative, delayed, not a contract.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-ink-muted">
          {quote.instrumentNote} Last updated {new Date(quote.asOf).toUTCString()}{" "}
          · {quote.provider} · {quote.status}.
        </p>
      </div>

      {state === "loading" && !data ? (
        <p className="text-sm text-ink-muted">Fetching the delayed feed…</p>
      ) : null}

      <div className="flex flex-wrap gap-8 border-b border-hairline pb-8">
        <Stat label={`${fx} / oz`} value={money(units.oz, fx)} />
        <Stat label={`${fx} / g`} value={money(units.g, fx)} />
        <Stat label={`${fx} / kg`} value={money(units.kg, fx)} />
        <Stat label={`${fx} / tola`} value={money(units.tola, fx)} />
      </div>
      <div className="mt-8 flex flex-wrap gap-8">
        <Stat
          label="Change vs prev. close"
          value={`${quote.changePct.toFixed(2)}%`}
        />
        <Stat
          label="Session high"
          value={quote.dayHigh ? money(quote.dayHigh * rate, fx) : "—"}
        />
        <Stat
          label="Session low"
          value={quote.dayLow ? money(quote.dayLow * rate, fx) : "—"}
        />
        <Stat label="Previous close" value={money(quote.previousClose * rate, fx)} />
      </div>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Range">
        {RANGES.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setRange(r.id)}
            className={`min-h-10 px-4 text-[11px] tracking-[0.2em] uppercase ${
              range === r.id
                ? "bg-ink text-canvas"
                : "border border-hairline text-ink-muted hover:text-ink"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <label className="mt-6 block max-w-xs text-[11px] tracking-[0.2em] text-ink-muted uppercase">
        Display currency
        <select
          value={fx}
          onChange={(e) => setFx(e.target.value as FxCode)}
          className="mt-2 min-h-11 w-full border border-hairline bg-canvas px-3 text-sm tracking-normal text-ink normal-case"
        >
          {FX_CODES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <svg
        viewBox="0 0 100 48"
        className="mt-10 h-56 w-full md:h-72"
        role="img"
        aria-label="Gold futures history"
      >
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          className="text-gold"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-muted">
        {quote.sources.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
              {s.name}
            </a>
          </li>
        ))}
      </ul>
      {quote.error ? (
        <p className="mt-4 text-xs text-ink-muted">Feed note: {quote.error}. Showing fallback.</p>
      ) : null}
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.2em] text-ink-muted uppercase">{label}</p>
      <p className="mt-2 font-serif text-3xl font-light tabular-nums">{value}</p>
    </div>
  );
}
