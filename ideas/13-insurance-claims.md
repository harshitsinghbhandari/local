# Idea 13 — AI Insurance Claim Filer & Appeals Agent

**Category:** Professional Services Access
**One-liner:** Got denied? Upload the letter. We file the appeal that wins.

## The business
- Target: Patients with denied health claims (1 in 7 denied in US), homeowners with hail/storm damage, auto accident victims.
- Pricing: Contingency — 15% of recovered amount, OR $99 flat fee per filed claim/appeal.
- Revenue path: Average denied health claim recovery = $400. 200 successful appeals × $60 avg = $12k.

## What the AI agents do
- Parse denial letter / EOB / police report / damage photos.
- Identify denial reason and matching appeal precedent.
- Pull relevant medical records, repair estimates, witness statements.
- Generate appeal letter with cited policy language and case law.
- File with insurer through correct channel (portal, fax, certified mail).
- Track response timeline, escalate to state insurance commissioner if needed.

## Why it can be AI-run
- Insurance appeals are pattern-matching + paperwork at scale.
- Insurers count on consumer exhaustion — automating the appeal kills that asymmetry.

## Regulatory note
- Public adjuster licensing required for property claim advocacy in many states — start with health claims only (less regulated).
- Stay in document-prep lane, don't claim to negotiate on the customer's behalf.

## 90-day go-to-market
- Wk 1–2: Build health insurance appeal flow (denial parsing → appeal draft → submission).
- Wk 3–6: r/HealthInsurance, patient advocacy groups, hospital social work referrals.
- Wk 7–12: Expand to property claims (post-storm season has natural demand).

## Tech stack
- Gemini for denial-letter parsing + appeal generation.
- Document AI for medical record OCR.
- Vertex AI Search over state insurance regulations + ERISA precedents.

## Risks & moats
- **Risk:** Slow recovery cycles (60–120 days). Get contingency contracts signed early so deposits/escrows count toward revenue.
- **Moat:** Appeal-win rate data → improves prompts → higher win rate → flywheel.
