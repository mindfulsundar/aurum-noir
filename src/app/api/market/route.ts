import { NextResponse } from "next/server";
import {
  fallbackMarket,
  FX_CODES,
  RANGES,
  type FxCode,
  type MarketPayload,
  type RangeId,
} from "@/lib/market";

export const revalidate = 60;

type YahooChart = {
  chart?: {
    result?: {
      meta?: {
        regularMarketPrice?: number;
        regularMarketPreviousClose?: number;
        regularMarketChangePercent?: number;
        chartPreviousClose?: number;
        previousClose?: number;
        regularMarketDayHigh?: number;
        regularMarketDayLow?: number;
        instrumentType?: string;
        shortName?: string;
        currency?: string;
        exchangeName?: string;
      };
      timestamp?: number[];
      indicators?: { quote?: { close?: (number | null)[] }[] };
    }[];
    error?: { description?: string };
  };
};

type FxJson = { rates?: Record<string, number>; result?: string };

function parseRange(value: string | null): RangeId {
  const found = RANGES.find((r) => r.id === value);
  return found?.id ?? "1y";
}

async function yahoo(range: RangeId): Promise<Partial<MarketPayload>> {
  const spec = RANGES.find((r) => r.id === range)!;
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/GC=F?interval=${spec.interval}&range=${spec.yahoo}&includePrePost=false`;
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "AurumNoirDesk/1.0 (commodity-reference; +https://aurumnoir.house)",
      Accept: "application/json",
    },
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`Yahoo HTTP ${res.status}`);
  }
  const json = (await res.json()) as YahooChart;
  const result = json.chart?.result?.[0];
  if (!result?.meta?.regularMarketPrice) {
    throw new Error(json.chart?.error?.description || "Empty Yahoo chart");
  }
  const closes = result.indicators?.quote?.[0]?.close ?? [];
  const times = result.timestamp ?? [];
  const series = times
    .map((t, i) => {
      const usd = closes[i];
      return usd != null ? { t: t * 1000, usd } : null;
    })
    .filter((p): p is { t: number; usd: number } => p !== null);

  const last = result.meta.regularMarketPrice;
  let previousClose =
    result.meta.regularMarketPreviousClose ??
    result.meta.previousClose ??
    (series.length > 1 ? series[series.length - 2].usd : last);
  let changePct =
    result.meta.regularMarketChangePercent ??
    ((last - previousClose) / previousClose) * 100;
  if (Math.abs(changePct) > 8) {
    const nearby = [...series].reverse().find((p) => Math.abs(p.usd - last) / last < 0.06);
    previousClose = nearby?.usd ?? last;
    changePct = ((last - previousClose) / previousClose) * 100;
  }
  return {
    ok: true,
    status: "delayed",
    provider: "Yahoo Finance",
    instrument: "GC=F · COMEX gold futures",
    instrumentNote: `${result.meta.shortName ?? "Gold"} · ${result.meta.exchangeName ?? "COMEX"} · ${result.meta.instrumentType ?? "future"}. Delayed exchange quotation. Not LBMA physical spot and not a binding transaction price.`,
    last,
    previousClose,
    changePct,
    dayHigh: result.meta.regularMarketDayHigh ?? null,
    dayLow: result.meta.regularMarketDayLow ?? null,
    series,
    asOf: new Date().toISOString(),
  };
}

async function fxRates(): Promise<Record<FxCode, number>> {
  const res = await fetch("https://open.er-api.com/v6/latest/USD", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`FX HTTP ${res.status}`);
  const json = (await res.json()) as FxJson;
  const rates = json.rates ?? {};
  const out = {} as Record<FxCode, number>;
  for (const code of FX_CODES) {
    out[code] = code === "USD" ? 1 : Number(rates[code]);
    if (!Number.isFinite(out[code])) {
      throw new Error(`Missing FX ${code}`);
    }
  }
  return out;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = parseRange(searchParams.get("range"));
  const base = fallbackMarket(range);

  try {
    const [quote, fx] = await Promise.all([yahoo(range), fxRates()]);
    const payload: MarketPayload = {
      ...base,
      ...quote,
      fx,
      range,
      ok: true,
      status: "delayed",
      currency: "USD",
      unit: "troy ounce",
      sources: base.sources,
    };
    return NextResponse.json(payload, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Feed unavailable";
    return NextResponse.json(fallbackMarket(range, message), {
      status: 200,
      headers: { "Cache-Control": "public, s-maxage=30" },
    });
  }
}
