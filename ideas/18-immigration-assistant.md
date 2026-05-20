# Idea 18 — AI Immigration Application Assistant

**Category:** Professional Services Access
**One-liner:** Don't pay an immigration lawyer $5k for a form-filling job. We do it for $199, supervised by a real attorney.

## The business
- Target: H1B/H4/F1/OPT/EAD/Green Card applicants in US; UK Skilled Worker; Canada Express Entry. India-origin demand is enormous.
- Pricing: $99 per form, $499 full case (e.g. H1B amendment, I-485), $999 for green card track with monthly check-ins.
- Revenue path: 200 customers × $300 avg = $60k. Massive willingness to pay.

## What the AI agents do
- Determine the right visa pathway via intake conversation.
- Gather required documents with a customized checklist.
- Translate non-English documents.
- Fill USCIS/UKVI forms autonomously, validate against latest version.
- Draft supporting letters (employer letter, expert opinions, beneficiary statement).
- Track case status via USCIS API, alert on RFEs, draft response.
- Final attorney sign-off before mailing.

## Why it can be AI-run
- Immigration forms are mind-numbing checklists. Where mistakes are devastating, validation is critical — Gemini is exact when constrained.
- The pricing umbrella (lawyers charge $3–10k for the same forms) creates massive room.

## Regulatory note
- US: only licensed attorneys or DOJ-accredited reps can give immigration *advice*. Stay in document prep + attorney-supervised model (Hello Boundless precedent).
- Hire an immigration attorney as a partner from day 1.

## 90-day go-to-market
- Wk 1–2: Build for H1B amendment (one of the most common, well-defined cases).
- Wk 3–6: Indian + Chinese tech community on LinkedIn, WhatsApp groups, r/h1b.
- Wk 7–12: Expand to F1 → OPT → H1B pipeline (student → grad track).

## Tech stack
- Gemini for form auto-fill + cross-validation.
- Document AI for passport/I-94/W-2 OCR.
- Vertex AI Search over USCIS policy manual + AAO decisions.
- USCIS Case Status API.

## Risks & moats
- **Risk:** A single botched filing destroys reputation. Mandatory attorney review at every milestone.
- **Moat:** Once trust earned, the customer stays for the next visa step (5+ year journey).
