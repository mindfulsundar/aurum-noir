import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, error: "Send JSON only. Documents are not accepted on this form." },
      { status: 415 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const kind = body.kind;
  const company = String(body.company ?? "").trim();
  const email = String(body.email ?? "").trim();
  if (kind !== "seller" && kind !== "buyer") {
    return NextResponse.json({ ok: false, error: "Unknown mandate type." }, { status: 400 });
  }
  if (company.length < 2 || !email.includes("@")) {
    return NextResponse.json(
      { ok: false, error: "Company and a valid email are required." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    reference: `AN-${kind.toUpperCase()}-${Date.now().toString(36).toUpperCase()}`,
    message:
      "Mandate received as structured text only. No documents were stored. A desk officer will reply if the file is complete enough to open a conversation. This is not an offer, allocation, or KYC approval.",
  });
}
