# Idea 09 — AI Mortgage & Loan Concierge

**Category:** Money & Financial Access
**One-liner:** Get the cheapest mortgage in 48 hours. We file the paperwork, you sign.

## The business
- Target: First-time homebuyers, refinancers, small business owners needing SBA loans.
- Pricing: Free to consumer (referral fee from lender — $500–3000 per closed loan).
- Revenue path: 10 closed loans × $1500 avg = $15k. Plus $99/mo "rate watcher" subscription tier.

## What the AI agents do
- Intake: income, credit, down payment, target home.
- Soft credit pull + DTI analysis.
- Multi-lender rate query: pull live rates from 20+ wholesale lenders.
- Generate the side-by-side comparison with all-in cost (rate + points + fees over 5yr horizon).
- Pre-approval letter generation via partner lender API.
- Document gathering: chase pay stubs, W-2s, bank statements.

## Why it can be AI-run
- The actual product (the loan) comes from a licensed lender. The agent is a sophisticated broker/concierge.
- 90% of loan officer work is document chasing — pure agent territory.

## Regulatory note
- NMLS licensing required to *originate* loans. If you're a "lead generator" passing to licensed lenders, lighter rules apply (still state-by-state).
- Partner with one licensed lender from day 1 (split commission).

## 90-day go-to-market
- Wk 1–2: Partner with one wholesale lender. Build rate-comparison engine.
- Wk 3–6: SEO for "best mortgage rate 2026", refinance calculators going viral on Reddit.
- Wk 7–12: First closings (30-45 day cycle). Plant flag on rate-watcher SaaS tier.

## Tech stack
- Gemini for document parsing (W-2, pay stubs, bank statements) and explainer chat.
- BigQuery for rate history + competitive analysis.
- Plaid for income/asset verification.

## Risks & moats
- **Risk:** Closing cycles are long — Aug 17 deadline pressures the first cohort.
- **Moat:** Rate data + lender relationships compound. Becomes the trusted neutral broker.
