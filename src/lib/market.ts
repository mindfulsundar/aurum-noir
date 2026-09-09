export const TROY_OZ_G = 31.1034768;
export const TOLA_G = 11.6638038;

export const FX_CODES = [
  "USD",
  "EUR",
  "GBP",
  "INR",
  "AED",
  "ZAR",
  "GHS",
  "AUD",
] as const;

export type FxCode = (typeof FX_CODES)[number];

export const RANGES = [
  { id: "1d", label: "1D", yahoo: "1d", interval: "5m" },
  { id: "5d", label: "1W", yahoo: "5d", interval: "15m" },
  { id: "1mo", label: "1M", yahoo: "1mo", interval: "1h" },
  { id: "3mo", label: "3M", yahoo: "3mo", interval: "1d" },
  { id: "1y", label: "1Y", yahoo: "1y", interval: "1d" },
  { id: "5y", label: "5Y", yahoo: "5y", interval: "1wk" },
  { id: "max", label: "Max", yahoo: "max", interval: "1mo" },
] as const;

export type RangeId = (typeof RANGES)[number]["id"];

export type MarketPoint = { t: number; usd: number };

export type MarketPayload = {
  ok: boolean;
  status: "live" | "delayed" | "fallback";
  provider: string;
  instrument: string;
  instrumentNote: string;
  currency: "USD";
  unit: "troy ounce";
  asOf: string;
  last: number;
  previousClose: number;
  changePct: number;
  dayHigh: number | null;
  dayLow: number | null;
  fx: Record<FxCode, number>;
  series: MarketPoint[];
  range: RangeId;
  sources: { name: string; href: string }[];
  error?: string;
};

const FALLBACK_LAST = 4524;
const FALLBACK_PREV = 4569;

function fallbackSeries(): MarketPoint[] {
  const now = Date.now();
  const day = 86400000;
  const values = [
    2684, 2748, 2659, 2721, 2810, 2944, 3120, 3385, 3512, 3720, 4048, 4569,
    4524,
  ];
  return values.map((usd, i) => ({
    t: now - (values.length - 1 - i) * 30 * day,
    usd,
  }));
}

export function fallbackMarket(range: RangeId, error?: string): MarketPayload {
  const series = fallbackSeries();
  return {
    ok: false,
    status: "fallback",
    provider: "Illustrative campaign series (no live feed)",
    instrument: "GC=F style reference — not a binding price",
    instrumentNote:
      "Fallback only. Not COMEX, not LBMA, not a physical spot. Do not use for settlement.",
    currency: "USD",
    unit: "troy ounce",
    asOf: new Date().toISOString(),
    last: FALLBACK_LAST,
    previousClose: FALLBACK_PREV,
    changePct: ((FALLBACK_LAST - FALLBACK_PREV) / FALLBACK_PREV) * 100,
    dayHigh: 4588,
    dayLow: 4491,
    fx: {
      USD: 1,
      EUR: 0.86,
      GBP: 0.74,
      INR: 87.4,
      AED: 3.6725,
      ZAR: 17.8,
      GHS: 15.6,
      AUD: 1.52,
    },
    series,
    range,
    sources: [
      { name: "Yahoo Finance GC=F", href: "https://finance.yahoo.com/quote/GC=F" },
      { name: "Investing.com Gold", href: "https://www.investing.com/commodities/gold" },
      { name: "GoldPrice.org", href: "https://goldprice.org" },
    ],
    error,
  };
}

export function convertOz(usdPerOz: number, fx: number) {
  return {
    oz: usdPerOz * fx,
    g: (usdPerOz / TROY_OZ_G) * fx,
    kg: (usdPerOz / TROY_OZ_G) * 1000 * fx,
    tola: (usdPerOz / TROY_OZ_G) * TOLA_G * fx,
  };
}
