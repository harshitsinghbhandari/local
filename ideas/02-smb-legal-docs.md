# Idea 02 — AI Legal Docs for Small Businesses

**Category:** Professional Services Access
**One-liner:** Tell us your situation in plain English; get a lawyer-quality contract in 5 minutes, reviewed by a licensed attorney before delivery.

## The business
- Target: 1–25 person companies who can't afford $400/hr lawyers but need NDAs, employment offers, MSAs, contractor agreements, ToS, privacy policies, cease-and-desist letters.
- Pricing: $49/doc, $199/mo unlimited, $499/mo "fractional GC" with monthly attorney review hour.
- Revenue path: 100 docs × $49 + 30 subs × $199 = $10,870 first month, scaling.

## What the AI agents do
- Intake conversation: scope, jurisdiction, edge cases, prior agreements.
- Pull the closest 3 template precedents from a curated library.
- Generate the doc with jurisdiction-correct boilerplate.
- Run a self-critique pass (Gemini-as-judge) checking for missing clauses.
- Route to a contracted attorney for 5-min sign-off before delivery.

## Why it can be AI-run
- 90%+ of SMB legal needs are template-driven with parameter substitution.
- The attorney review is the licensed sign-off — agent does the 95% drudge work.

## Regulatory note
- **UPL risk** (Unauthorized Practice of Law): position as document prep + attorney-supervised. LegalZoom blueprint is well-litigated and survivable.
- Partner with a US-licensed attorney from day 1 (Upwork or local). Pay flat fee per review (~$10–25).

## 90-day go-to-market
- Wk 1–2: Build NDA + contractor agreement + employment offer (highest-volume docs).
- Wk 3–6: ProductHunt + IndieHackers launch. Cold outreach to YC batch slack groups.
- Wk 7–12: Add jurisdictions (CA, NY, TX, FL cover 60% of demand). Introduce subscription tier.

## Tech stack
- Gemini 2.x with long-context (legal precedent retrieval).
- Vertex AI Search over case law + template corpus.
- GCP Document AI to parse uploaded existing contracts.
- DocuSign API for e-signature flow (white-label).

## Risks & moats
- **Risk:** State bar associations are aggressive about UPL. Operate in well-mapped territory.
- **Moat:** Template library + jurisdiction coverage compounds. Attorney network = barrier.
