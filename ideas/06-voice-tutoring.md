# Idea 06 — 1-on-1 AI Voice Tutoring (Math, SAT, Coding)

**Category:** Education & Human Potential
**One-liner:** A patient, infinitely-available tutor that talks like a person and knows where you got stuck.

## The business
- Target: K-12 students (parents pay), SAT/ACT/GRE/JEE prep, adult learners picking up Python.
- Pricing: $19/mo unlimited sessions (consumer), $299/mo for tutoring centers (multi-seat).
- Revenue path: 500 consumer subs × $19 = $9.5k MRR + 10 B2B × $299 = $3k MRR.

## What the AI agents do
- Adaptive diagnostic: figure out the student's level in 5 minutes.
- Voice-led Socratic sessions — guide, don't lecture.
- Generate problems matched to the student's gaps.
- Whiteboard equivalent: render math in real-time, accept handwritten input via camera.
- Weekly parent report card with concrete strengths/weaknesses.

## Why it can be AI-run
- Tutoring is conversation + problem generation + patience. Models are now good enough at all three.
- 1-on-1 human tutors cost $40–100/hr. The economics of AI tutoring are revolutionary.

## 90-day go-to-market
- Wk 1–2: Build for SAT Math first (narrow, high-willingness-to-pay, results-measurable).
- Wk 3–6: Indian and US parent Facebook groups, CollegeConfidential, YouTube SAT prep channel partnerships.
- Wk 7–12: Add JEE Main prep (massive India TAM with low-cost users).

## Tech stack
- Gemini Live for voice (low-latency conversational).
- Gemini 2.x for problem generation + step-by-step reasoning.
- Vision for handwritten math input.
- Firestore for student progress state.

## Risks & moats
- **Risk:** Hallucinated math is brand-destroying. Use verified solvers (SymPy) as ground truth, LLM as the explainer.
- **Moat:** Personalized progress data + outcome proof (score improvements) = strong word-of-mouth.
