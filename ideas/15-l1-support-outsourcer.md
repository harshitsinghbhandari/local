# Idea 15 — AI L1 Customer Support Outsourcer

**Category:** Small Business Services
**One-liner:** Your support inbox at 3am, answered correctly. Replaces an offshore BPO team for 10% the cost.

## The business
- Target: Shopify stores, SaaS startups, marketplaces with 100–10,000 tickets/month.
- Pricing: $0.50/ticket resolved, $499/mo minimum, $4,999/mo enterprise with custom training.
- Revenue path: 30 customers × $800 avg = $24k MRR.

## What the AI agents do
- Ingest help docs, past tickets, return policy, product catalog.
- Triage incoming tickets across email, chat, Intercom, Zendesk, Shopify.
- Resolve L1 (order status, refund, returns, password reset, basic how-to).
- Escalate edge cases to the customer's human team with a draft response prepared.
- Generate weekly insights: top complaints, recurring product issues, refund rate trends.

## Why it can be AI-run
- ~70% of support tickets are repetitive. Models handle them better than tired humans.
- The other 30% benefit from agent triage + draft, even if a human closes the loop.

## 90-day go-to-market
- Wk 1–2: Build Shopify integration (largest single market).
- Wk 3–6: Shopify App Store + cold outreach to DTC brands with 100+ orders/day.
- Wk 7–12: Add Zendesk + Intercom integrations.

## Tech stack
- Gemini long-context for full help center + ticket history ingestion.
- Vertex AI Search for retrieval over docs.
- Cloud Run for webhook handlers.
- Per-customer model fine-tune option as upsell.

## Risks & moats
- **Risk:** Intercom Fin + Zendesk AI already exist. Win by being 10× cheaper for the long-tail SMB.
- **Moat:** Each customer's resolved-ticket history makes their agent measurably smarter.
