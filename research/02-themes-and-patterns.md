# Themes & Patterns: What's Hot, Saturated, and Underserved

**Compiled:** 2026-05-21
**Synthesis of:** YC W25→W26 funding data + YC's Spring 2026 Request for Startups + VC theses.

## The Master Pattern: Services-as-Software

YC partner Gustaf Alströmer published the explicit thesis in the Spring 2026 RFS:

> "Most 2023-2025 startups built AI copilots—tools helping humans work better. The next evolution replaces services entirely rather than improving them. The total spend on services is many times larger than the spend on software."

This isn't speculative — it's already the modal bet:
- **W26 batch: 50% of all companies are "AI-Native Services" or "AI-Enhanced Software"** doing work humans previously did.
- **40+ distinct human job functions** are being targeted simultaneously in a single batch.

**What changed in 2025–2026:**
- Model capability crossed the 95–99% reliability bar on structured tasks (forms, classification, scheduled communication).
- Voice models (Gemini Live, OpenAI Realtime) became production-ready for inbound/outbound calls.
- Coding agents matured enough that small teams ship vertical agents in weeks, not years.
- The pricing arbitrage: humans cost $50k–$200k/yr per role; AI doing the same job costs <$5k/yr in inference.

## The 16 YC Spring 2026 RFS Bets (verbatim distillation)

YC's explicit wishlist, ranked by my read of relevance to a 90-day hackathon:

### Most achievable in 90 days

1. **AI-Native Service Companies** (Gustaf Alströmer) — "The total spend on services is many times larger than the spend on software." Build a company that performs work directly (not assists). Targets called out: **insurance brokerage, accounting, tax, audit, compliance, healthcare administration.**
2. **Company Brain** (Tom Blomfield) — Structure scattered company knowledge into an executable skills file so AI agents can run refunds/pricing exceptions/incidents safely.
3. **SaaS Challengers** (Jared Friedman) — "The moat that once protected legacy SaaS — millions of lines of code, built over decades — is gone." Clone existing SaaS at 1/10 price OR rebuild AI-native versions of "invulnerable" targets.
4. **Software for Agents** (Aaron Epstein) — "The next trillion users on the internet won't be people, they'll be AI agents." Rebuild every category as agent-first (machine-readable APIs, MCPs).
5. **Startups That Want to Sell to Huge Companies** (Harshita Arora, Brad Flora) — F100 are buyers now; multimillion-dollar deals close in months.

### Harder but high-prize

6. **AI-Native Discovery Engines** (Jon Xu) — Closed-loop scientific discovery in drug discovery, materials, protein engineering.
7. **AI Personalized Medicine** (Ankit Gupta) — Personalized recommendations from genome + EHR + wearables.
8. **The AI Operating System for Companies** (Diana Hu) — Unified intelligence layer across Slack/Linear/GitHub/Notion.
9. **Dynamic Software Interfaces** (Ankit Gupta) — Software that radically customizes itself per user via coding agents.
10. **Inference Chips for Agent Workflows** (Diana Hu) — Silicon optimized for the bursty, looping, KV-cache-persistent shape of agent computation.

### Long-bet / not for 90-day hackathon

11. AI for Low-Pesticide Agriculture (Garry Tan)
12. Counter-Swarm Defense (Tyler Bosmeny)
13. Electronics in Space (Philip Johnston)
14. Hardware Supply Chain (Nicolas Dessaigne)
15. Industrial Capabilities in Space (Adi Oltean)
16. Supply Chain 2.0 for Semiconductors (Diana Hu)

## Categories: Hot / Saturated / Underserved

### 🔥 Hot (lots of funding, still room because TAM is huge)

| Category | Evidence | Hackathon angle |
|---|---|---|
| **Vertical AI agents (job-replacement)** | 56 in W26 alone | Pick a job; pick a niche; outwork incumbents on integrations. |
| **Healthcare admin (RCM, billing, prior auth)** | LunaBill, ClaimGlide, Overdrive, Remedy, Beacon | Specific provider type underserved. |
| **AI legal services (firm-facing or direct)** | Wayco, Arcline, General Legal, Vector Legal, Legalos | Niche practice areas + jurisdiction depth. |
| **Inbound/outbound voice AI** | Patientdesk, Bravi, Robby, AutoAce, Crow | Pair with vertical CRM glue. |
| **Sales AI (SDR + real-time call)** | Cardinal, Autumn AI, Caretta | Vertical specialization (e.g., for solar installers). |
| **Accounting / bookkeeping automation** | Balance, FullSeam | Vertical (e.g., dental, restaurants, e-comm). |

### 🥶 Saturated (many funded, harder to differentiate in 90 days)

- **Generic coding agents** (W26: Sparkles, EmDash, Syntropy, Fission, 21st Labs, Haladir — too many).
- **Agent monitoring / observability** (Sonarly, Sentrial, ashr, Canary — investor consensus = crowded).
- **Generic LLM inference infra** (RunAnywhere, Piris, compresr, The Token Co, Cumulus).
- **Customer support agents (generic)** — Intercom Fin + Zendesk AI + many startups. Need vertical wedge.

### 🌱 Underserved (gaps where pain is real but funding is thin)

| Gap | Why it's open | Notes |
|---|---|---|
| **Consumer education (K-12 tutoring, exam prep)** | Almost zero in W26; YC seems uninterested in B2C ed | Parents will pay; demand exists. Indians/Chinese international families = huge TAM. |
| **Consumer tax prep / personal finance for underbanked** | Thin presence | Money & Financial Access is an XPRIZE category — clear fit. |
| **Small landlord property management** | Only Bravi (home services adjacent), not tenant-side | 22M+ "mom-and-pop" landlords in US alone. |
| **Immigration filing (consumer-facing)** | Legalos is law-firm-facing | Massive underserved Indian/Chinese diaspora demand. |
| **AI for nonprofits / grant writing** | Zero W26 presence | Low ARPU per customer but huge volume + low CAC if positioned right. |
| **Translation / localization SMB-focused** | No W26 presence I can find | E-commerce internationalization underserved. |
| **AI insurance claim appeals (consumer-side)** | Insurer-side automation funded; consumer-advocacy side is empty | 1-in-7 health claims denied; classic asymmetry play. |
| **AI for solo small landlord / single-trade ops** | Bravi/Robby target multi-trade SMBs, not 1–5 unit landlords | Different ICP, different price point. |

## Cross-Reading: Where YC Money + Forum Pain Both Concentrate

These are the spots where both **investors are putting capital** AND **users are loudly complaining** — i.e. validated demand with funding momentum behind it:

| Domain | YC signal | User signal (from `03-pain-points`) |
|---|---|---|
| **Trades estimating + jobsite ops** | Bidflow (electrical estimating), Foreman (jobsite) | r/Contractors: "wasting half their day on estimates" — $25-50/mo WTP |
| **Real estate agent CRM / lead handling** | None directly in W26 — gap | r/RealEstate: "bloated CRMs that take weeks to set up" — $25-49/mo WTP |
| **Medical billing / prior auth** | LunaBill, ClaimGlide, Overdrive | Constant complaints, high WTP enterprise pricing |
| **Solo law firm intake** | Vector Legal, General Legal | r/LawFirm: "lack of affordable practical tools" — $49-99/user/mo WTP |
| **Tax-season scheduling for accountants** | Indirectly via Balance, FullSeam | r/Accounting: "chaos when too many clients try to book at once" — $199/season WTP |
| **Etsy/Shopify compliance + suspension fear** | None — gap | r/Etsy: "constant fear of account suspension" — $29/mo WTP for monitoring |
| **Influencer affiliate link / sponsorship tracking** | None — gap | r/Influencer: "missed sponsorship deadlines" — $10-15/mo WTP |
| **Carrier (trucking) back office** | Lunavo, Carma | r/Trucking pain (separate research needed) |
| **Restaurant reservation control / guest data** | None — gap | r/restaurant: "expensive systems that limit control over guest data" — $99-199/mo WTP |

## The "Job Title to Replace" Heatmap

If I were picking a job title to build an agent around for the XPRIZE hackathon, this is the priority order based on YC validation + forum WTP + 90-day buildability:

| Rank | Job role | Why |
|---|---|---|
| 1 | **Medical biller / RCM clerk** | YC-validated (5+ companies), 6-figure salary replaced, clinics pay $5k+/mo eagerly |
| 2 | **Outbound SDR** | $80k role; clear ROI; many tools exist but vertical-specialized wins |
| 3 | **Solo lawyer paralegal/intake** | r/LawFirm pain validated; YC-validated category; UPL boundary navigable |
| 4 | **Small-landlord property manager** | Forum pain (r/Landlord) very loud; YC hasn't funded direct competitors |
| 5 | **Trades quoting/estimator** | r/Plumbing + r/Electricians + r/Contractors all loud; Bidflow only attacks 1 trade |
| 6 | **L1 customer support (Shopify/SaaS-specific)** | Intercom + Zendesk solve enterprise; SMB underserved |
| 7 | **Insurance claim appeals advocate** | Consumer side completely empty; payer-side automated |
| 8 | **Immigration document preparer** | Indian/Chinese diaspora demand; Legalos is firm-side, leaves consumer open |
| 9 | **Grant writer for nonprofits** | Niche but high-WTP per win; thin competition |
| 10 | **Bookkeeper for verticals (dental, restaurants, e-comm)** | Pick one vertical and dominate |

## The Counter-Intuitive Read

The W26 batch tells us something subtle: **the best AI businesses don't market themselves as "AI businesses."** They market themselves as legal firms, insurance brokerages, fleet operators, healthcare admin companies. The agent is *how* they deliver, not *what* they sell.

For the XPRIZE hackathon (which requires "real businesses, real customers, real revenue"), this is actually a hint at the winning framing: **sell a service at service-industry prices, deliver it with agents.** Margins are 80%+ because there's no payroll. The "AI" is invisible to the customer until you decide to brand it.

## Sources

See `01-recently-funded-yc.md` and `03-pain-points-people-pay-for.md` for source citations.
