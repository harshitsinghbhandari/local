# Research Approach

## Question
Which problems do enough people currently *pay* to solve — and which of those can a small team build a real, AI-agent-run business around in 90 days for the XPRIZE hackathon?

## Two-axis signal
- **Capital signal:** Recently YC-funded startups. YC selects for paying-customer traction. What categories are concentrating funding = where smart capital sees defensible demand.
- **User signal:** Reddit (r/startups, r/SaaS, r/SideProject), Indie Hackers, HN launches & comments, G2/Trustpilot reviews. This is where real users complain about real bills.

Crossing the two:
- Funded + complained-about = validated, but crowded. Need a differentiated wedge.
- Funded + quiet on forums = enterprise/niche, possibly under-marketed.
- Not funded + heavily complained-about = either too hard, too small, or a real gap.

## Sources of truth
1. `ycombinator.com/companies?batch=W26,F25,S25,W25` — official directory, public.
2. `ycombinator.com/rfs` — YC's Request for Startups (their public wishlist).
3. Reddit/Indie Hackers/HN — pain points and "would pay for X" threads.
4. G2/Trustpilot for incumbent reviews ("hate X tool, wish X did Y").
5. ProductHunt recent launches with high traction (revenue chips).

## Plan
1. **Agent A — YC directory mining:** Pull recent batch companies, descriptions, one-line categories. Output: structured list + category breakdown.
2. **Agent B — Pain-point mining:** Search forums for "I would pay for", "wish there was a tool that", recurring complaints. Output: pain inventory with WTP signals.
3. **Agent C — YC's own signals:** RFS, recent partner essays, "hot spaces" commentary. Output: explicit problem statements YC is funding for.
4. **Synthesize** into:
   - `01-recently-funded-yc.md` — the funded list, categorized.
   - `02-themes-and-patterns.md` — what's hot, what's saturated.
   - `03-pain-points-people-pay-for.md` — validated pain inventory.
   - `04-opportunities-for-hackathon.md` — gaps mapped to XPRIZE categories + cross-ref to existing 20 ideas.

## What I'm explicitly *not* doing
- Won't scrape paywalled sources (Crunchbase, PitchBook).
- Won't trust Twitter as primary signal (too noisy).
- Won't reuse the existing 20 ideas without checking which are validated vs. saturated.
