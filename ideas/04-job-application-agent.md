# Idea 04 — AI Job Application Agent

**Category:** Entrepreneurship & Job Creation
**One-liner:** You sleep. The agent applies to 50 tailored, high-fit jobs and books interviews.

## The business
- Target: Software engineers, designers, PMs, marketers — anyone in an active job search who hates the grind.
- Pricing: $39/mo, $99/mo (50/200 applications), $499 "find me a job" success fee.
- Revenue path: 300 subs × avg $50 = $15k MRR, scales with seasonality (Jan + Sep peaks).

## What the AI agents do
- Profile intake: resume parsing, work history, target roles, salary, locations, deal-breakers.
- Continuous scrape: LinkedIn, Indeed, Greenhouse, Lever, Ashby, Workable JD endpoints.
- Match scoring with the user's profile (semantic + filter rules).
- Custom resume + cover letter per application (Gemini-generated, user-approved style guide).
- Auto-submit via browser agent (Playwright + Gemini computer-use).
- Track responses, follow up, schedule interviews via Calendar API.

## Why it can be AI-run
- Personalization at this scale is impossible for humans but trivial for LLMs.
- The bottleneck is JD reading + form filling — exactly what agents are best at now.

## 90-day go-to-market
- Wk 1–2: Build for one role family (SWE) on Greenhouse/Lever only.
- Wk 3–6: Tech Twitter, r/cscareerquestions, BlindApp posts. Heavy referral discount.
- Wk 7–12: Expand role families. Add interview prep tier.

## Tech stack
- Gemini with computer-use for browser automation.
- Vertex AI embeddings for JD ↔ profile matching.
- Cloud Scheduler for daily scrapes.
- Firestore for application state machine.

## Risks & moats
- **Risk:** LinkedIn/Indeed aggressively block scrapers. Use their public APIs + ATS-direct submission to dodge.
- **Risk:** "Spray and pray" backlash. Quality threshold (>0.75 match score) keeps it credible.
- **Moat:** Application history + response data = better matching over time.
