# Idea 01 — AI Tax Prep for Freelancers & Gig Workers

**Category:** Money & Financial Access
**One-liner:** Stripe/PayPal/Uber/Upwork API in → fully-prepared tax return out, reviewed by a licensed human at the last mile.

## The business
- Target: US freelancers, 1099 contractors, gig workers (~70M people).
- Pricing: $99 flat fee per return, $29/mo for year-round bookkeeping + quarterly estimates.
- Revenue path: 200 customers × $99 in 90 days = $19,800 + recurring MRR.

## What the AI agents do
- Pull income from connected accounts (Stripe, PayPal, Uber, DoorDash, Upwork).
- Categorize expenses from bank/card connections (Plaid).
- Find every deduction (home office, mileage, SaaS, health insurance, QBI).
- Generate Schedule C, SE, 1040 ready-to-file.
- Draft IRS notice responses if the user gets a letter.

## Why it can be AI-run
- Tax rules are codified, deterministic, and well-documented — Gemini can reason over them with structured retrieval.
- The 80% volume case (single-state freelancer, <$200k income) has no judgment calls a model can't handle with citations.

## Regulatory note
- US tax prep for compensation requires a PTIN — get one (free, fast). EA license unlocks IRS representation but isn't required for prep.
- Final filing review by a contracted EA/CPA satisfies the "human-in-the-loop" demand without bottlenecking volume.

## 90-day go-to-market
- Wk 1–2: Build core flow on one stack (Upwork + Stripe). Get PTIN. Contract one EA.
- Wk 3–6: Launch on r/freelance, r/UpworkHelp, Indian freelancer Twitter (target US-1099 earners).
- Wk 7–12: Quarterly estimated tax push (Sep 15 deadline = perfect demand spike).

## Tech stack
- Gemini 2.x for return drafting + deduction explainer.
- GCP Document AI for receipt/W-2/1099 parsing.
- Cloud Run + Firestore for app backend.
- Plaid + Stripe Connect for income/expense ingest.

## Risks & moats
- **Risk:** State returns multiply complexity 50×. Stay federal-only initially.
- **Moat:** Recurring data lock-in once they connect accounts; switching cost grows each tax year.
