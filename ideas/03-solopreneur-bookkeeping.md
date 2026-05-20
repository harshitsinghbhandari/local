# Idea 03 — AI Bookkeeping for Solopreneurs

**Category:** Small Business Services
**One-liner:** Bench but $20/month and the books close themselves overnight.

## The business
- Target: Solo founders, Etsy/Shopify sellers, content creators, freelance consultants — too small for Bench ($299+/mo), too messy for spreadsheets.
- Pricing: $20/mo basic, $49/mo with monthly P&L + investor-ready statements, $99/mo with quarterly tax estimates.
- Revenue path: 500 customers × $20 in 90 days = $10k MRR.

## What the AI agents do
- Connect bank, card, Stripe, PayPal, Shopify via Plaid + direct APIs.
- Auto-categorize every transaction (with a confidence score; uncertain ones queued for user review).
- Reconcile monthly — flag anomalies, duplicates, missing receipts.
- Generate P&L, balance sheet, cash flow on demand.
- Chase missing receipts via email/SMS to the customer.

## Why it can be AI-run
- Categorization is the entire job — and it's a classification problem LLMs crush.
- Reconciliation is rule-based with edge cases that Gemini handles via reasoning + tool calls.

## 90-day go-to-market
- Wk 1–2: Plaid integration + chart-of-accounts auto-setup + Shopify/Stripe ingest.
- Wk 3–6: Launch in Etsy seller forums, IndieHackers, X/Twitter for solopreneurs.
- Wk 7–12: Add invoicing + payment links (becomes the whole money OS for solos).

## Tech stack
- Gemini for transaction categorization + anomaly explanation.
- BigQuery for transaction warehouse.
- Cloud Functions for daily reconciliation jobs.
- Plaid + Stripe + Shopify APIs.

## Risks & moats
- **Risk:** QuickBooks/Xero have ecosystem lock-in for "real" bookkeepers. Avoid head-to-head — target the underserved layer below.
- **Moat:** Once 12 months of categorized history exists, switching cost is enormous.
