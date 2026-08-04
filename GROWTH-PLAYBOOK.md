# Growth Playbook — lorinczi.com
_Conversion-path-first strategy with verified benchmarks and decision gates. Created 2026-07-02._
_Companion to [TRAFFIC-EXECUTION-PLAN.md](TRAFFIC-EXECUTION-PLAN.md) (tactics/sequencing) — this doc adds the measurement layer that defends and tweaks those decisions._
_Evidence: deep-research pass, 21 sources fetched, 92 claims extracted, 25 adversarially verified (16 confirmed / 9 refuted). Refuted claims listed at the bottom so we never build KPIs on them._

## Strategy on a page

**Operating principle (decided 2026-07-02): no paid spend until a conversion path is proven organically.**
Each channel has a decision gate — "invest $ when metric Y crosses Z." This replaces the
calendar-based "Phase 3 — Week 3+" trigger in TRAFFIC-EXECUTION-PLAN.md; everything else
in that plan's Route → Capture → Amplify → Compound sequence stands.

Why this sequence is defensible:
1. **Instagram is the proven channel for custom jewelers, but its organic reach is decaying** —
   Retail-sector IG engagement fell >50% YoY, the steepest sector decline. So the 12K followers
   are real demand, but the fix is *funnel mechanics* (link-in-bio, DM→booking, quiz, email
   capture), not posting harder and waiting for reach to recover.
2. **Email flows are the highest-leverage owned asset** — automated flows generate ~41% of
   email revenue from just 5.3% of sends (~18x revenue-per-recipient vs campaigns). Flows come
   before newsletter volume.
3. **Paid search converts ~5.4% vs ~2.1–2.2% for social — but that gap is intent, not magic.**
   Search captures demand the funnel must close. Turning it on before the consultation path
   converts just pays to fill a leaky bucket.
4. **Pinterest is the one channel where a small account reaches active shoppers without
   followers** (keyword/search distribution; follower count absent from its ranking factors).
   It's slow-compounding — judge it at 6–12 months on trend, never at 90 days.

## Funnel definition — what "conversion" means here

The site sells consultations, not carts. One shared definition across all channels:

- **Visit** — GA4 session, channel-attributed via the UTM scheme (Phase 0 of the execution plan).
- **Lead** — consultation request: booking-form submit, virtual-appointment booking, DM-initiated
  consult logged manually, or quiz email capture. (Matches the Ruler Analytics definition our
  baselines come from: form fill / tracked call.)
- **Consult held** → **Commission won** — logged manually per lead (source noted). At this AOV,
  ~1–2 commissions/month is meaningful; every lead must carry its source.

## Verified benchmarks (the numbers we're allowed to steer by)

| Metric | Benchmark | Confidence | Source |
|---|---|---|---|
| Site visit → lead (overall) | judge inside the **2.4%** (Retail & eCommerce) to **6.1%** (Professional Services) band; our funnel is a hybrid | High | Ruler Analytics, 110M+ sessions, May 2026 |
| Organic/SEO landing page → lead | **~1.6%** directional | Medium | First Page Sage |
| Quiz start → lead | **37.6–40.1%** (denominator = quiz *starters*, not visitors) | Medium | Interact (vendor data, corroborated 25–40%) |
| Email flow click rate | **5.58%** flows vs **1.69%** campaigns | High | Klaviyo 2026 (183K customers; corroborated by Omnisend) |
| Flows' share of email revenue | **~41%** from 5.3% of sends (~18x rev/recipient) | High | Klaviyo, corroborated by Omnisend |
| Paid search → lead | **~5.4%** avg (vs organic social 2.23%, paid social 2.11%) | Medium | Ruler Analytics |
| IG organic engagement (Retail) | fell **>50% YoY**; plan for decay, not recovery | Medium | Rival IQ 2025/2026 |
| Pinterest time-to-traction | **3–6 months** first traction, **6–12+ months** to judge; pins live 4+ months vs 21–48h for IG posts | Medium | Lumley + corroborating sources |

All figures are **directional bands, not literal targets** — nearly every source assumes
cart-checkout e-commerce or generic lead-gen, while we sell high-AOV consults with long
consideration cycles. The band tells us *underperforming vs. plausible vs. exceptional*.

## Channel playbooks with decision gates

### 1. Instagram — repair the leak (existing, proven, decaying)
**Evidence:** practitioner-verified as the primary acquisition channel for independent custom
jewelers. Working content tactics: past commissions, loose stones posted as explicit "book a
consultation" prompts, sketch-to-finished before/afters, emotional-connection testimonials.
**Do:** everything in Phase 1 of the execution plan (bio landing page with 3 doors, Story link
stickers 2–3×/wk, Shopping tags) **plus a measured DM→consult path** — published DM benchmarks
failed verification (see refuted list), so we build our own baseline: log every consult-intent DM
and where it ends up, for 60 days.
- **KPIs (weekly):** profile visits → bio-link clicks (UTM), Story link taps, DM consult-intents logged.
- **Gate G1 → unlock paid retargeting of IG engagers:** IG-attributed sessions sustain **≥20/day
  for 4 consecutive weeks** AND IG-attributed leads ≥2/month. Until then, $0 on Meta.

### 2. Email — flows before campaigns (existing capability, unbuilt)
**Do (in order):** ① welcome flow behind the lead magnet ("Heirloom Redesign Guide"), ② consult
follow-up flow (booked → prep email → post-consult nurture), ③ abandoned-inquiry flow (started
booking/quiz, didn't finish). Only after all three are live: monthly newsletter.
- **KPIs (monthly):** list growth, flow click rate vs the **5.58%** benchmark, leads touched by a flow.
- **Gate G2 → unlock campaign volume + list-growth spend:** all 3 flows live AND flow click rate
  ≥4% over 60 days.

### 3. Quiz funnel — the top-of-funnel capture experiment (new)
A ring-style / "what should your heirloom become?" quiz converts **~37–40% of starters** to leads —
vs ~1.6–2.4% for a standard page. It also feeds the email flows and gives IG Stories a native CTA
("take the quiz") that's softer than "book a consultation."
- **KPIs:** visitor → quiz-start rate (our own baseline — no published number survived), start → lead ≥30%.
- **Gate G3 → promote the quiz in paid later:** start→lead ≥30% on ≥100 starts.

### 4. Pinterest — the compounding search channel (existing account, under-plumbed)
Distribution is keyword-driven, not follower-driven — our one structural escape from the IG
reach problem. Execution plan Phase 1–2 covers the mechanics (Rich Pins, search-query
descriptions, atomized before/after pin sets).
- **KPIs (monthly, trend not volume):** impressions, outbound clicks, Pinterest-attributed leads.
- **Judgment rule:** evaluate at **month 6 on trend** (is outbound-click growth compounding
  month-over-month?), decide continue/kill at **month 12**. Do not judge at 90 days.
- **Gate G4 → unlock Pinterest Ads:** organic outbound clicks ≥300/month and ≥1
  Pinterest-attributed lead — then promote only the proven top organic pins.

### 5. SEO/blog — already running (see SEO-STRATEGY.md)
Benchmark organic landing→lead against **~1.6%**. The shipped SEO work is the floor; the case-study
pages from execution-plan Phase 2 are the growth surface.
- **Gate G5 → unlock paid search (branded + retargeting):** the **master gate** — see below.

### 6. Channels with NO verified evidence either way (TikTok, GBP, PR/backlinks, Etsy)
The research pass produced no surviving claims on these. Treat each as a cheap, time-boxed
Bullseye-style test (≤1 month, near-$0), not a committed channel: TikTok = repost the Reels we're
already cutting (marginal cost ~0); PR = the press-reactivation play in Phase 4 (unique asset,
worth doing on strategic grounds); GBP + Etsy = park unless a signal appears.

## The master paid-spend gate

**Turn on paid (starting with Meta retargeting + branded search) only when ALL of:**
1. Site-wide visit→lead sustains **≥2.4%** (the retail baseline) over 60 days, AND
2. All 3 email flows are live to nurture captured leads (G2), AND
3. At least one organic channel gate (G1 or G4) has been crossed — proving a path, not a fluke.

When it opens, keep the execution plan's split (retargeting ~50% / Pinterest ~30% /
Shopping ~20% at ~$1k/mo) but fund only channels whose gate is crossed. Expect paid-search-side
conversion near **5.4%** on branded/high-intent terms; kill anything under the organic baseline
after one month.

## Operating rhythm & review

- **Weekly (Fri, per execution plan):** leading indicators — IG→site CTR, Story taps, Pinterest
  outbound clicks, quiz starts, email signups.
- **Monthly:** gate review — each G1–G5 scored crossed / on-track / stalled; one
  double-down and one cut decision per month, defended by the benchmark table above.
- **Quarterly:** re-baseline against updated Ruler/Klaviyo/Rival IQ reports; revisit the
  refuted-claims list before adopting any new benchmark from a blog post.

## Refuted claims — numbers we must NOT use (failed 3-vote adversarial verification)

- ✗ "Instagram DMs get 40–60% CTR" and "5–20% DM→conversion is a healthy benchmark" (0-3 both) — measure our own DM funnel instead.
- ✗ "Service sites convert at 2–4%, best-in-class 7–12%" (0-3 both) — use the Ruler 2.4–6.1% band.
- ✗ "Jewelry e-commerce converts at 0.95–1.46%" (1-2) — unproven for our lead-based funnel.
- ✗ "70% of Pinterest users explore jewelry" / "74% of bridal buyers use Pinterest" (0-3 both) — Pinterest's case rests on its keyword-distribution mechanism, not these reach stats.
- ✗ The jewelry Pinterest case study's "10 months to results" framing (1-2) — its percentages had no absolute volumes; useless for forecasting.

## Open questions → answered by our own instrumentation
1. Real consult-booking conversion for a virtual-appointment jewelry funnel → 90 days of GA4 + lead-source logging.
2. Real DM→consult rate → 60-day DM log.
3. Absolute Pinterest referral volume for an account our size → our own months 1–6 trend.
4. TikTok/GBP/PR/Etsy viability → cheap time-boxed tests only.
