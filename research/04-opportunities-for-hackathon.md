# Opportunities for the XPRIZE Hackathon

**Compiled:** 2026-05-21
**Inputs:** YC W25→W26 funding data, YC Spring 2026 RFS, Reddit/IH/HN pain points, existing 20 ideas in `/ideas/`.

The goal of this file: rank what to actually build, given the funding signal + user pain signal + 90-day constraint + XPRIZE categories.

---

## The 3 Big Insights From the Research

### 1. The XPRIZE prompt and YC's RFS are the same thesis
YC's #3 RFS (Gustaf Alströmer's "AI-Native Service Companies") explicitly calls for:
> "Companies that perform work directly (not just assist), targeting outsourced service categories including **insurance brokerage, accounting, tax, audit, compliance, and healthcare administration.**"

That list maps almost perfectly onto XPRIZE categories:
- Insurance brokerage / claims → **Professional Services Access**
- Accounting / tax → **Money & Financial Access**
- Compliance → **Small Business Services**
- Healthcare admin → **Professional Services Access**

**Implication:** Pick from this list and you're betting on the same horse as YC partners. The XPRIZE judges almost certainly think the same way.

### 2. Vertical-specific wins over horizontal generic
50% of W26 is "AI doing X job in Y industry." Pure horizontal plays (generic CRM, generic support, generic tutor) get crushed. Sharpen on a vertical.

### 3. The hackathon's hidden constraint
The XPRIZE rubric demands **"real customers, real revenue"** within 90 days. That kills most B2B enterprise plays (sales cycles too long). The plays that work in 90 days are:
- **Self-serve B2B with credit-card pricing ($29–199/mo)** — SMB sweet spot.
- **High-WTP one-shot services** (legal docs, immigration, tax return) — pay-per-use.
- **Pay-per-success contingency** (insurance appeals, debt negotiation, FSBO sales) — aligned incentives.

Whatever you build, the **payment must close in days, not quarters.**

---

## Ranking the Existing 20 Ideas Against Research

Cross-referencing each idea in `/ideas/` with YC funding + forum pain:

### Tier S: Strong YC validation + strong forum pain + 90-day feasible

| # | Idea | YC validation | Forum pain | Notes |
|---|---|---|---|---|
| 02 | SMB legal docs | ✅ Vector Legal, General Legal, Arcline | ✅ r/LawFirm pain loud | Recommended — pivot to solo-lawyer-tool angle instead of consumer |
| 13 | Insurance claim appeals (consumer) | 🟡 Panta + Fernstone on broker side | ✅ Constant complaints | **Best position: consumer side is empty while broker side is funded** |
| 18 | Immigration filing | 🟡 Legalos is firm-side | ✅ Massive diaspora demand | Underserved consumer angle |
| 14 | AI SDR | ✅ Cardinal, Autumn AI, Caretta | ✅ Validated WTP | Crowded but vertical-specialization angle works |
| 15 | L1 support outsourcer | ✅ Crow, Chasi AI | ✅ Shopify pain validated | Differentiate via vertical |

### Tier A: Decent YC signal OR strong forum pain, viable but need sharpening

| # | Idea | Assessment |
|---|---|---|
| 01 | Freelancer tax prep | YC thin here = opportunity OR YC sees regulatory risk. Big potential. |
| 03 | Solopreneur bookkeeping | YC has Balance + FullSeam (general-purpose). Vertical wedge needed. |
| 06 | Voice tutoring | YC has written off consumer ed (W26 has zero) — could be contrarian win OR contrarian lose. |
| 07 | Local trades lead gen | YC has Robby + Bravi. Differentiate by trade type or geography. |
| 10 | HR-in-a-box | Generic SMB HR is crowded; need vertical wedge (e.g., HR for veterinary clinics). |
| 17 | Grant writer | Zero YC competition; strong niche WTP. |
| 19 | Incorporation + compliance | YC W26 has nothing direct; Atlas/Firstbase competition. Strong global angle. |
| 20 | Small landlord PM | Zero direct YC competition; r/Landlord pain loud. Big gap. |

### Tier B: Hard in 90 days, regulatory complexity, or saturated

| # | Idea | Risk |
|---|---|---|
| 04 | Job application agent | LinkedIn TOS battles; revenue cycle = job-find cycle (months). |
| 05 | College app counselor | 90-day window misses Common App opening (Aug 1); cycles don't close. |
| 08 | FSBO real estate | Closings take 30–60 days; cash recognition near hackathon deadline is dicey. |
| 09 | Mortgage concierge | Long sales cycles + NMLS licensing. |
| 11 | Underbanked finance | Low ARPU + heavy regulatory; trust-build takes years. |
| 12 | Translation | Race-to-the-bottom pricing pressure from Google Translate. |
| 16 | SEO content agency | Long-tail SEO ranking takes 3–6 months; no immediate proof. |

---

## Top 5 Recommendations (Ranked for the Hackathon)

### #1 — Solo-Lawyer Operating System (refined Idea 02)

**Why this and not the others:**
- **YC bullseye:** YC funded 4+ "AI law firm" startups in W26 (Vector Legal, General Legal, Arcline, Wayco) — they're all building firms FOR clients. **No one is building the OS that solo + 2-person law firms run on.**
- **Forum-validated:** r/LawFirm is the loudest pain corner of law-Reddit. $49–99/user/mo WTP confirmed.
- **90-day cash:** Solo lawyers pay monthly subs by credit card. No enterprise cycle.
- **XPRIZE fit:** Professional Services Access category.
- **Buildable:** Drafting (Gemini long-context), intake (Gemini Live for voice), CRM (Firestore), billing (Stripe).

**Specific positioning:** "Clio + Filevine + a paralegal — for $99/mo, ours runs your firm."

**90-day milestones:**
- Wk 1–2: Build core intake + drafting + scheduling triad. Use the product on the lawyer onboarding you.
- Wk 3–6: ABA solo-lawyer Slack, r/LawFirm posts, Avvo outreach.
- Wk 7–12: 50 paying solo lawyers × $99 = $5k MRR. With case studies, push to 200 by Aug 17.

---

### #2 — Insurance Claim Appeals (Consumer Side) (refined Idea 13)

**Why:**
- **YC angle gap:** All YC funding (Panta, Fernstone, LunaBill, ClaimGlide) is on the INSURER side or BROKERAGE side. Consumer-advocacy side of denied claims is empty.
- **Massive pain:** 1 in 7 health insurance claims denied. ~$200B/yr in denials in US healthcare alone.
- **Contingency = aligned incentive:** No "do they have budget?" question. 15% of recovery.
- **90-day cash:** First appeals can close in 30 days. Recovery becomes hackathon-period revenue.

**Specific positioning:** "Got denied? Upload the letter. We file the appeal. You only pay if we win."

**90-day milestones:**
- Wk 1–2: Build health-insurance denial parser + appeal generator on 5 most common denial codes.
- Wk 3–6: r/HealthInsurance, hospital social worker referrals, denial-advocacy Facebook groups.
- Wk 7–12: 200 cases submitted; ~120 wins × $60 avg fee = $7.2k revenue.

---

### #3 — Small-Landlord Property Manager (refined Idea 20)

**Why:**
- **YC GAP:** Zero W26 funding on this segment. Bravi targets home-services BIZ, not landlord-with-3-units.
- **Forum-loud:** r/Landlord is a permanent pain factory. $5/unit/mo recurring × 22M US small landlords.
- **Voice agent moat:** Gemini Live + tenant calls 24/7 is the killer feature small landlords cannot replicate alone.
- **XPRIZE fit:** Small Business Services category.

**Specific positioning:** "$49/mo. We become your front office. Your tenants don't know it's AI."

**90-day milestones:**
- Wk 1–2: Build Texas-state-compliant flows (rent collection, tenant comm, maintenance triage).
- Wk 3–6: BiggerPockets, r/Landlord, Roofstock investor groups. Heavy free month.
- Wk 7–12: 50 landlords × 3 units × $49 = $7.4k MRR.

---

### #4 — Vertical-Specialized SDR Agent (refined Idea 14, sharpened)

**Why:**
- **YC validates the bet:** Cardinal, Autumn AI, Caretta all funded for sales agents.
- **Crowded but unwon:** No one has won a specific vertical (e.g., "AI SDR for solar installers" or "AI SDR for medical-device sales").
- **High WTP:** B2B SDR replacement = $5k–$15k/mo per customer easily.

**Specific positioning:** Pick ONE vertical (recommend solar installer sales — high-ticket, technical, demand explosion). "We replace your SDR for residential solar in 2 weeks."

**90-day milestones:**
- Wk 1–2: Build for solar installers (one CRM integration, one outreach channel).
- Wk 3–6: 20 solar installer cold outreaches; close 5 pilots @ $2k/mo.
- Wk 7–12: $10–15k MRR.

---

### #5 — Etsy/Shopify Compliance Watchdog (NEW idea, not in original 20)

**Why this is missing from the original 20:**
- Discovered via Reddit pain research; not in original list.
- r/Etsy and r/AmazonSeller are FULL of "they suspended my store, I have no idea why" panic posts.
- Zero YC competition.
- Self-serve $29/mo subscription + $99 emergency-reinstatement upsell.

**Specific positioning:** "Don't lose your Etsy/Amazon store overnight. We monitor policy changes, audit your listings nightly, and write your appeal in minutes if you get suspended."

**90-day milestones:**
- Wk 1–2: Build Etsy listing scraper + policy diff engine + appeal generator.
- Wk 3–6: r/Etsy, Facebook groups for Etsy sellers. Free trial. Strong fear-driven conversion.
- Wk 7–12: 300 sellers × $29 = $8.7k MRR + appeals upsell.

---

## Other "New" Opportunities the Research Surfaced (beyond original 20)

These didn't make the top 5 but are worth knowing:

1. **AI restaurant reservation platform that owns guest data.** r/restaurant pain very loud about OpenTable/Resy ownership of customer data. $99-199/mo WTP confirmed.
2. **Wedding/event RSVP + vendor coordination agent.** r/weddingplanning + r/events. Lower WTP but high event-day urgency.
3. **AI nonprofit ops bundle (grants + volunteer scheduling + donor follow-up).** Combine ideas 17 + r/Nonprofit pains into one $99/mo product.
4. **Influencer brand-deal pipeline.** r/Influencer pain; $10-15/mo + take rate on closed deals.
5. **AI Compliance/SOC2 audit assistant for SMB.** YC RFS #1 explicit ("AI-Native Service Companies… compliance"); huge enterprise sales cycle pain.
6. **AI freelancer client manager** — proofing, signing, payment chasing — r/freelance + r/agencylife consensus pain.
7. **AI MSP onboarding bot** — r/msp $99-per-onboarding pricing already validated.
8. **AI tax-season scheduler for CPA firms** — r/Accounting "chaos when too many clients try to book at once," $199/season WTP.

---

## The Strategic Lens: What XPRIZE Judges Will Reward

Re-reading the rubric:
1. **Business Viability** — launch, users, revenue.
2. **AI-Native Operations** — AI is live in production making decisions.
3. **Category Impact** — meaningful advancement.

**The optimal hackathon submission is a company that:**
1. Has a service-industry name (NOT "AI Something") — Sapphire Legal, Pillar Property, etc.
2. Charges customers like a service business ($99-499/mo or per-transaction).
3. Shows the judges agent logs that prove humans aren't doing the work.
4. Tells a category story (e.g., "We're bringing legal services to the 90% of small businesses that can't afford a lawyer").

**Pick a vertical, replace a job, charge real money, prove it's AI.** That's the entire game.

---

## Suggested Final Picks for Harshit

If choosing 1 to build:

**My recommendation: #1 (Solo-Lawyer OS) or #3 (Small-Landlord PM).**

- Both have *zero* direct YC competition + *loud* forum pain.
- Both have crisp monthly recurring revenue.
- Both have an obvious story for the XPRIZE judges.
- Both fit different XPRIZE categories — pick whichever ICP you can reach faster from IIT Bombay (probably #3 — landlords are easier to cold-message than lawyers).

**If you want pay-per-success (no recurring revenue ramp):**
Go with #2 (Insurance Appeals). Lower customer count needed; each win is meaningful.

**Don't try to build #4 (Solar SDR) from India** — sales-cycle networking matters too much.

## Sources

See `01-recently-funded-yc.md`, `02-themes-and-patterns.md`, `03-pain-points-people-pay-for.md` for full citations.
