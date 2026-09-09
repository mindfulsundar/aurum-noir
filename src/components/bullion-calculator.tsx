"use client";

import { useMemo, useState } from "react";
import { TOLA_G, TROY_OZ_G } from "@/lib/market";

export function BullionCalculator({ spotUsd }: { spotUsd: number }) {
  const [weight, setWeight] = useState("1000");
  const [unit, setUnit] = useState<"g" | "oz" | "kg" | "tola">("g");
  const [karat, setKarat] = useState("24");
  const [spot, setSpot] = useState(String(spotUsd));
  const [fx, setFx] = useState("1");
  const [premium, setPremium] = useState("2.5");
  const [assayDeduction, setAssayDeduction] = useState("0.3");
  const [refine, setRefine] = useState("0.8");
  const [logistics, setLogistics] = useState("0.4");
  const [tax, setTax] = useState("0");
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [acq, setAcq] = useState("2400");
  const [alloc, setAlloc] = useState("8");
  const [portfolio, setPortfolio] = useState("250000");

  const r = useMemo(() => {
    const w = Number(weight) || 0;
    const grams =
      unit === "g"
        ? w
        : unit === "kg"
          ? w * 1000
          : unit === "tola"
            ? w * TOLA_G
            : w * TROY_OZ_G;
    const k = Number(karat) || 24;
    const purity = Math.min(24, Math.max(0, k)) / 24;
    const fineG = grams * purity;
    const fineOz = fineG / TROY_OZ_G;
    const spotN = Number(spot) || 0;
    const fxN = Number(fx) || 1;
    const gross = fineOz * spotN * fxN;
    const prem = (Number(premium) || 0) / 100;
    const assay = (Number(assayDeduction) || 0) / 100;
    const refn = (Number(refine) || 0) / 100;
    const logi = (Number(logistics) || 0) / 100;
    const taxN = (Number(tax) || 0) / 100;
    const deductions = gross * (assay + refn + logi + taxN);
    const dealerAdj = gross * prem;
    const net = side === "buy" ? gross + dealerAdj + deductions : gross - dealerAdj - deductions;
    const acqN = Number(acq) || 0;
    const acqCost = fineOz * acqN * fxN;
    const pnl = net - acqCost;
    const be = fineOz === 0 ? 0 : (acqCost + deductions + (side === "buy" ? dealerAdj : 0)) / fineOz / fxN;
    const port = Number(portfolio) || 0;
    const allocPct = Number(alloc) || 0;
    const sleeve = port * (allocPct / 100);
    return { grams, fineG, fineOz, gross, deductions, dealerAdj, net, pnl, be, sleeve, purity };
  }, [
    acq,
    alloc,
    assayDeduction,
    fx,
    karat,
    logistics,
    portfolio,
    premium,
    refine,
    side,
    spot,
    tax,
    unit,
    weight,
  ]);

  return (
    <form className="grid gap-12 lg:grid-cols-12" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-5 lg:col-span-6">
        <fieldset className="grid grid-cols-2 gap-4">
          <Field label="Weight">
            <input value={weight} onChange={(e) => setWeight(e.target.value)} className={input} />
          </Field>
          <Field label="Unit">
            <select value={unit} onChange={(e) => setUnit(e.target.value as typeof unit)} className={input}>
              <option value="g">grams</option>
              <option value="oz">troy oz</option>
              <option value="kg">kg</option>
              <option value="tola">tola</option>
            </select>
          </Field>
          <Field label="Karat">
            <input value={karat} onChange={(e) => setKarat(e.target.value)} className={input} />
          </Field>
          <Field label="USD / oz benchmark">
            <input value={spot} onChange={(e) => setSpot(e.target.value)} className={input} />
          </Field>
          <Field label="FX vs USD">
            <input value={fx} onChange={(e) => setFx(e.target.value)} className={input} />
          </Field>
          <Field label="Side">
            <select value={side} onChange={(e) => setSide(e.target.value as typeof side)} className={input}>
              <option value="buy">Buyer (premia add)</option>
              <option value="sell">Seller (premia subtract)</option>
            </select>
          </Field>
          <Field label="Dealer premium / discount %">
            <input value={premium} onChange={(e) => setPremium(e.target.value)} className={input} />
          </Field>
          <Field label="Assay deduction %">
            <input value={assayDeduction} onChange={(e) => setAssayDeduction(e.target.value)} className={input} />
          </Field>
          <Field label="Refining charge %">
            <input value={refine} onChange={(e) => setRefine(e.target.value)} className={input} />
          </Field>
          <Field label="Logistics & insurance %">
            <input value={logistics} onChange={(e) => setLogistics(e.target.value)} className={input} />
          </Field>
          <Field label="Taxes / duties %">
            <input value={tax} onChange={(e) => setTax(e.target.value)} className={input} />
          </Field>
          <Field label="Average acquisition USD / oz">
            <input value={acq} onChange={(e) => setAcq(e.target.value)} className={input} />
          </Field>
          <Field label="Portfolio value (display ccy)">
            <input value={portfolio} onChange={(e) => setPortfolio(e.target.value)} className={input} />
          </Field>
          <Field label="Target allocation %">
            <input value={alloc} onChange={(e) => setAlloc(e.target.value)} className={input} />
          </Field>
        </fieldset>
        <p className="text-xs leading-relaxed text-ink-muted">
          Fine gold = gross mass × (karat / 24). Gross benchmark = fine oz ×
          spot × FX. Deductions = gross × (assay + refine + logistics + tax).
          Buyer net ≈ gross + premium + deductions. Seller net ≈ gross −
          premium − deductions. Not an offer, guarantee, or advice.
        </p>
      </div>
      <dl className="space-y-4 border border-hairline p-8 lg:col-span-6">
        <Row k="Gross mass" v={`${r.grams.toFixed(3)} g`} />
        <Row k="Purity factor" v={r.purity.toFixed(4)} />
        <Row k="Fine gold" v={`${r.fineG.toFixed(3)} g · ${r.fineOz.toFixed(4)} oz t`} />
        <Row k="Gross benchmark value" v={fmt(r.gross)} strong />
        <Row k="Estimated deductions" v={fmt(r.deductions)} />
        <Row k="Dealer premium / discount" v={fmt(r.dealerAdj)} />
        <Row k="Indicative net settlement" v={fmt(r.net)} strong />
        <Row k="Unrealised vs acquisition" v={fmt(r.pnl)} />
        <Row k="Break-even USD / oz (approx.)" v={fmt(r.be)} />
        <Row k="Allocation sleeve" v={fmt(r.sleeve)} />
      </dl>
    </form>
  );
}

const input =
  "mt-2 min-h-11 w-full border border-hairline bg-transparent px-3 text-sm text-ink tabular-nums outline-none focus:border-gold";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-[11px] tracking-[0.16em] text-ink-muted uppercase">
      {label}
      {children}
    </label>
  );
}

function Row({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className="flex justify-between gap-4 border-b border-hairline pb-3">
      <dt className="text-sm text-ink-muted">{k}</dt>
      <dd className={`tabular-nums ${strong ? "font-serif text-xl" : "text-sm"}`}>{v}</dd>
    </div>
  );
}

function fmt(n: number) {
  return new Intl.NumberFormat("en-GB", {
    maximumFractionDigits: 2,
  }).format(n);
}
