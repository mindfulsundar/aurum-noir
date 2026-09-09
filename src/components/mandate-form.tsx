"use client";

import { useState, type FormEvent } from "react";

const field =
  "mt-2 min-h-11 w-full border border-hairline bg-transparent px-3 text-sm text-ink outline-none focus:border-gold";

export function MandateForm({ kind }: { kind: "seller" | "buyer" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    const body = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...body }),
      });
      const json = (await res.json()) as { ok: boolean; message?: string; error?: string; reference?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Rejected");
      setMessage(`${json.reference ?? ""} — ${json.message}`);
      setStatus("done");
      event.currentTarget.reset();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Could not send.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <input type="hidden" name="kind" value={kind} />
      <Field label="Company" name="company" required />
      <Field label="Contact name" name="contact" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" />
      {kind === "seller" ? <SellerFields /> : <BuyerFields />}
      <p className="md:col-span-2 text-xs leading-relaxed text-ink-muted">
        Structured text only. Do not attach licences, passports, or assays here.
        Sensitive documents wait for an authenticated data room.
      </p>
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 bg-ink px-8 text-[11px] tracking-[0.28em] text-canvas uppercase disabled:opacity-50 md:col-span-2"
      >
        {status === "sending" ? "Sending…" : "Submit mandate"}
      </button>
      {status === "done" ? (
        <p className="md:col-span-2 text-sm text-gold">{message}</p>
      ) : null}
      {status === "error" ? (
        <p className="md:col-span-2 text-sm text-ink-muted">{message}</p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-[11px] tracking-[0.16em] text-ink-muted uppercase">
      {label}
      <input name={name} type={type} required={required} className={field} />
    </label>
  );
}

function SellerFields() {
  return (
    <>
      <Field label="Role / authority" name="role" />
      <Field label="Country and mine location" name="location" />
      <Field label="Licence details (text)" name="licence" />
      <Field label="Product form" name="product" />
      <Field label="Purity or assay range" name="purity" />
      <Field label="Trial-lot quantity" name="trial" />
      <Field label="Monthly production" name="monthly" />
      <Field label="Export status" name="export" />
      <Field label="Available documentation (list)" name="docs" />
      <Field label="Preferred structure" name="structure" />
    </>
  );
}

function BuyerFields() {
  return (
    <>
      <Field label="Jurisdiction" name="jurisdiction" />
      <Field label="Buyer type" name="buyerType" />
      <Field label="End buyer or authorised mandate" name="authority" />
      <Field label="Product required" name="product" />
      <Field label="Purity" name="purity" />
      <Field label="Trial quantity" name="trial" />
      <Field label="Monthly quantity" name="monthly" />
      <Field label="Preferred origin" name="origin" />
      <Field label="Delivery destination" name="destination" />
      <Field label="Receiving refinery" name="refinery" />
      <Field label="Pricing basis" name="pricing" />
      <Field label="Settlement capability" name="settlement" />
      <Field label="Compliance requirements" name="compliance" />
    </>
  );
}
