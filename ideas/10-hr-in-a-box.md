# Idea 10 — HR-in-a-Box for Tiny Startups

**Category:** Small Business Services
**One-liner:** Replace your first HR hire. Onboarding, policies, compliance, PTO, performance reviews — all run by agents.

## The business
- Target: 1–25 person startups. They need HR infra but can't justify a $80k HR hire.
- Pricing: $99/mo basic, $299/mo full-service (handles all HR ops), $499/mo with employment law consult quota.
- Revenue path: 50 customers × $200 avg = $10k MRR by Aug 17.

## What the AI agents do
- Generate state-compliant offer letters, employee handbook, PTO policy, anti-harassment policy.
- New-hire onboarding flow (i9, W4, equipment, slack invites, doc access).
- PTO tracking + approval routing.
- Quarterly performance review automation (collect peer feedback, draft review docs).
- Off-boarding: cancel access, COBRA paperwork, severance letter.
- Compliance calendar: reminders for state filings, labor law poster updates.

## Why it can be AI-run
- HR ops in companies <25 people = 95% paperwork and reminders. Trivially automatable.
- The 5% that needs human judgment (terminations, complaints) → flag + connect to attorney partner.

## 90-day go-to-market
- Wk 1–2: Build employee handbook generator + onboarding flow.
- Wk 3–6: Pitch in YC + IndieHackers Slack channels. Free for first 50 employees.
- Wk 7–12: Add benefits broker integration (Gusto/Rippling alternatives).

## Tech stack
- Gemini for doc generation + state-specific compliance lookups.
- Vertex AI Search over Department of Labor data + state employment regs.
- DocuSign + Slack/Google Workspace APIs for execution.

## Risks & moats
- **Risk:** Crowded space (Gusto, Rippling, Justworks). Win by being 10× cheaper and AI-native.
- **Moat:** Once onboarded employees + history + policies live in the system, switching is painful.
