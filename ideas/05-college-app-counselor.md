# Idea 05 — AI College Application Counselor

**Category:** Education & Human Potential
**One-liner:** A $50k Manhattan college consultant in your pocket for $99 — built for first-generation and middle-class families.

## The business
- Target: High school juniors/seniors and parents. Indian, Chinese, Latin American international applicants are a huge underserved segment.
- Pricing: $99 essay package, $299 full application cycle, $999 "concierge" with monthly live human check-in.
- Revenue path: Common App opens Aug 1 → 90-day window includes peak demand. 200 customers × $200 avg = $40k.

## What the AI agents do
- Profile intake: grades, scores, activities, interests, financial constraints, geographic preferences.
- School matching (reach/match/safety) using historical admit data.
- Essay coaching: Common App + supplements, draft critique, multiple revision rounds.
- Activity list optimization (ordering, language).
- Financial aid (FAFSA, CSS Profile) walkthroughs.
- Application deadline tracking + nag system.

## Why it can be AI-run
- Essay coaching is a feedback-and-iteration loop — perfect for Gemini's long-context.
- School matching is data + retrieval, not magic.
- Human counselors charge for time the AI doesn't need.

## 90-day go-to-market
- Wk 1–2: Build essay coach + school matcher MVP. Seed with public admit data.
- Wk 3–6: Reddit r/ApplyingToCollege, college admissions Discord servers, parent Facebook groups.
- Wk 7–12: Common App opens — application volume spikes. Launch concierge tier.

## Tech stack
- Gemini long-context for whole-essay review + cross-supplement consistency.
- Vertex AI Search over CDS data, Niche reviews, IPEDS stats.
- Cloud Run + Firebase Auth.

## Risks & moats
- **Risk:** Parents distrust AI for high-stakes decisions. Lean on transparent reasoning + human review tier.
- **Moat:** Annual cohort + outcome data → matching gets sharper each cycle.
