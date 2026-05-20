# Idea 17 — AI Grant Writer for Nonprofits & Researchers

**Category:** Entrepreneurship & Job Creation
**One-liner:** A grant writer that's read every successful application in your field — for $99 instead of $5k.

## The business
- Target: Small nonprofits, academic researchers, SBIR/STTR small businesses, startup founders chasing non-dilutive funding.
- Pricing: $99/grant draft, $299/mo unlimited drafts + monthly grant scan, $999/grant for full-service "find + win" with contingency upside.
- Revenue path: 100 customers × $200 avg = $20k.

## What the AI agents do
- Profile organization: mission, programs, financials, prior outcomes.
- Continuously scan grants.gov, foundation databases, SBIR.gov, EU Horizon, state agencies.
- Score grant fit + win probability for each match.
- Draft full application: narrative, budget justification, logic model, evaluation plan.
- Pull from prior successful applications (RAG over public award database).
- Track deadlines, generate appendices, format to specific call requirements.

## Why it can be AI-run
- Grant writing is structured pattern-matching against a rubric. Models excel here.
- Most nonprofits/researchers can't afford a $100k development director.

## 90-day go-to-market
- Wk 1–2: Build for SBIR/STTR (well-structured, high-value, founders already pay for help).
- Wk 3–6: r/startups, IndieHackers — SBIR pays $50k–$2M, easy ROI pitch.
- Wk 7–12: Expand to nonprofit / foundation grants.

## Tech stack
- Gemini long-context for full RFP ingestion + matching.
- Vertex AI Search over grants.gov, foundation 990s, prior award narratives.
- Cloud Scheduler for daily grant feed updates.

## Risks & moats
- **Risk:** Reviewers may start filtering AI-flavored prose. Hand-tuning + style variation matters.
- **Moat:** Win-rate data per program + per organization compounds heavily.
