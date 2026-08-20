# Traffic forecast — what the SEO work should produce

**Date:** 7 August 2026
**Question:** how much organic traffic should the keyword work deliver, and when?
**Baseline:** ~35 organic clicks/month (GSC: 106 clicks / 90 days, May 3 – Aug 2)

---

> **CORRECTION 18 Aug — the difficulty model was wrong.** This document scores keyword
> difficulty by **Google Ads competition index**. That is a *paid-auction* metric — it counts
> advertisers bidding, not organic difficulty — and using it as a ranking proxy made the
> forecast far too pessimistic on competitive-looking terms.
>
> Ahrefs scores `divorce ring` (>1,000/mo) as **KD Easy**. A live SERP check on 18 Aug confirms
> it: half of page one is small independent jewelers — Lindsey Scoggins, MiaDonna, SUOT Studio,
> Ouros Jewels — alongside Vogue, Reddit and the Guardian. No authority wall.
>
> This contradicts the claim below that `divorce ring` yields "roughly one click a month even a
> year out." `content-drafts/divorce-ring-buying-keywords.md` had already found the same thing
> ("Nobody owns it… There is no authority wall") and the model overrode it.
>
> **Treat every "very hard / index 71-100" row below as unverified.** Those bands were assigned
> from competition index. Re-check with Ahrefs KD or a live SERP before planning against them.
> The soft-band findings are unaffected — low competition index and low KD broadly agree.

> **Revised 7 Aug — two corrections.** The first version modelled only the clusters built today
> and used an uncalibrated CTR curve. It has been (a) extended to the site's **complete** ranked
> footprint of 132 keywords, and (b) calibrated against GSC actuals, which showed the model
> running **~2× optimistic** on deep positions. All figures below are the calibrated ones.
> Where the old numbers said 356 clicks/month at twelve months for the new work alone, the
> calibrated figure is **178**, and the whole-site total is **259**.

## The headline — whole site

| | now | 3 mo | 6 mo | 12 mo |
|---|---|---|---|---|
| Existing 132 keywords | 21 | 29 | 44 | 57 |
| New clusters (built today) | 0 | 48 | 130 | **178** |
| Brand search | 14 | 16 | 19 | 24 |
| **Total organic clicks/mo** | **35** | **94** | **193** | **259** |

Modelled "now" = 35/month against a GSC actual of 35/month — the model reconciles exactly, which
is why the forward numbers are worth something.

**The structural finding, though, matters more than the forecast:**

> **87% of the site's existing ranked footprint is shop keywords, not the redesign service.**

| | Keywords | Volume/mo | Share |
|---|---|---|---|
| Shop (products + collections) | 108 | 18,360 | **87%** |
| Redesign service + blog | 24 | 2,670 | 13% |

`HOMEPAGE-FUNNEL-AUDIT.md` put it as *"the homepage is built as a jewelry shop; the business is a
redesign studio."* This is the same mismatch measured at the keyword level — and the shop
footprint is not performing: **zero keywords in positions 1–3** across the whole site, only two
in positions 4–10, and 111 of 132 sitting at position 21 or worse.

But the number that should change how we spend time is this one:

> **24% of the targeted search volume delivers 79% of the traffic.**

The soft keywords — competition index ≤20, about 2,560/mo of volume — produce ~282 clicks/month
at twelve months. The remaining 8,200/mo of volume, including every headline term we've looked
at, produces ~74. `divorce ring` alone is 2,900/mo and contributes roughly **one click a month**
even a year out, because at competition index 100 this domain does not reach page one.

---

## Method

Transparent so it can be argued with.

**CTR curve** — 2026 post-AI-Overview figures, not the old 2019 tables:
position 1 = 27.6%, 2 = 15%, 3 = 11%, 5 = 6%, 10 = 1.7%, 11–20 = 1.2%, 21–30 = 0.5%, 31–50 = 0.2%.
Position 1 CTR has fallen from 39.8% (2022) to 27.6% as AI Overviews rolled out; informational
queries with an AI Overview present lose up to 61% of clicks.
Sources: [Visionary Marketing](https://visionary-marketing.co.uk/blog/google-ctr-by-position-2026) ·
[Seer Interactive](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update) ·
[Indexsy](https://indexsy.com/ctr-statistics/)

**Achievable position** by Google Ads competition index, for a site with 48 referring domains:

| Competition index | 3 months | 6 months | 12 months |
|---|---|---|---|
| ≤20 (soft) | 8 | 4 | 3 |
| 21–45 (medium) | 18 | 10 | 6 |
| 46–70 (hard) | 28 | 18 | 11 |
| 71–100 (very hard) | 40 | 30 | 22 |

That last row is the honest one. `jewelry redesign` currently sits at **position 44** with 284
impressions — the site is already living in that band, and content alone hasn't moved it.

**Validation.** The model predicts the cost cluster produces ~5 clicks/month. It actually
produces ~4 (GSC: 12 clicks / 90 days on the cost URL). Close enough to trust the shape.

---

## The existing footprint — 132 keywords, 21,030/mo volume, ~21 clicks

What the site already ranks for, before any of today's work.

| Page type | Keywords | Volume/mo | Clicks/mo now | Best position |
|---|---|---|---|---|
| Product pages | 48 | 8,910 | 21 | 7 |
| Blog | 13 | 1,690 | 17 | 11 |
| Collection pages | 60 | 9,450 | 4 | 12 |
| Service pages | 10 | 950 | 0.4 | 28 |
| Homepage | 1 | 30 | 0 | 22 |

**Position health across the whole site:**

| Positions | Keywords |
|---|---|
| 1–3 | **0** |
| 4–10 | 2 |
| 11–20 | 19 |
| 21–50 | 62 |
| 51+ | 49 |

Three things follow.

**The collection pages are dead weight.** 60 keywords and 9,450/mo of volume producing **4 clicks
a month**. `/collections/wedding-rings` alone holds 24 keywords — *custom women's wedding band*
(480), *build wedding band* (390), *wedding rings custom made* (390) — every one of them at
**position 45–79**. That is a page ranking for nothing at all, on terms that are genuinely
relevant to the business.

**The blog punches far above its weight.** 13 keywords and 1,690/mo of volume producing 17
clicks — as much as 48 product keywords with five times the volume. That is the cost cluster
doing the work, and it is the clearest evidence that service content outperforms shop content on
this domain.

**The service pages are the growth engine and they barely rank yet.** 10 keywords, 950/mo, 0.4
clicks, best position 28. Today's work targets exactly this gap, which is why the new clusters
outgrow the existing footprint 3:1 over twelve months.

**Trajectory assumption:** the existing footprint is modelled with slow drift only, because
nothing is being done to it. Competitive retail terms like *custom women's wedding band* do not
climb 60 positions on their own. If shop SEO were worked deliberately, the collection pages are
where the unclaimed volume is — but that is a different programme from the redesign work.

---

## Per-cluster forecast

**With a link-building push** (5–10 genuine referring domains, per `BACKLINK-MAP.md`):

| Cluster | Volume/mo | 3 mo | 6 mo | 12 mo |
|---|---|---|---|---|
| A. Divorce commercial *(shipped 7 Aug)* | 6,190 | 35 | 92 | **121** |
| B. Divorce informational *(already live)* | 1,010 | 24 | 66 | **94** |
| C. Repurpose old jewelry *(shipped 7 Aug)* | 740 | 16 | 40 | **61** |
| D. Heirloom *(targeting fixed 7 Aug)* | 350 | 1 | 2 | 2 |
| E. Cost cluster *(FAQ shipped 7 Aug)* | 1,490 | 5 | 11 | 11 |
| F. Not built yet | 980 | 17 | 49 | **67** |
| **Total** | **10,760** | **97** | **260** | **356** |

**If authority stays flat** (no new links):

| | 3 mo | 6 mo | 12 mo |
|---|---|---|---|
| Total clicks/mo | 62 | 139 | **177** |

**Links are worth roughly 2× the entire content programme.** Same pages, same copy — the only
difference is whether competitive terms move at all.

---

## Where the traffic actually comes from

| Competition band | 12-mo clicks/mo | Share |
|---|---|---|
| **Soft (index ≤20)** | **282** | **79.1%** |
| Medium (21–45) | 31 | 8.8% |
| Hard (46–70) | 9 | 2.6% |
| Very hard (71–100) | 34 | 9.4% |

The soft band is a short list, and it is where effort should go:

| Keyword | Vol/mo | Index | Status |
|---|---|---|---|
| right hand ring meaning | 590 | 2 | **not built** |
| what is a divorce ring | 480 | 14 | live 7 Aug |
| repurpose old jewelry | 390 | 2 | live 7 Aug |
| what to do with wedding ring after divorce | 320 | 14 | live |
| custom divorce ring | 170 | 14 | live 7 Aug |
| what to do with engagement ring after divorce | 140 | 14 | live |
| repurpose wedding ring after divorce | 140 | 14 | live |
| is it bad luck to keep wedding ring after divorce | 140 | 10 | live |
| which finger to wear a divorce ring | 110 | 10 | live 7 Aug |
| who keeps the engagement ring after divorce | 40 | 10 | live |
| what to do with grandma's old jewelry | 40 | 10 | live 7 Aug |

**`right hand ring meaning` is the single largest unbuilt item in the entire forecast** — 590/mo
at competition index 2, worth roughly 65 clicks/month on its own at twelve months. Nothing else
unbuilt comes close.

---

## What this means in leads

At the 1–2% conversion typical of a high-consideration commissioned service:

| Scenario | Clicks/mo @ 12mo | Leads/mo @ 1% | @ 2% |
|---|---|---|---|
| With links | 356 | 3.6 | 7.1 |
| Flat authority | 177 | 1.8 | 3.5 |

**Caveat that matters:** the site's conversion rate is still unmeasured — `generate_lead` has
never fired on a real enquiry (see `CONVERSION-READINESS.md`). These are category benchmarks, not
this site's numbers. At Lorinczi's AOV, though, even the low end is meaningful: one to two extra
commissions a month.

---

## Things this forecast does not include

- **Google Business Profile.** `jewelry redesign near me` (390/mo) and the near-me cluster sit in
  "not built yet" — but near-me queries route through the Map Pack, which content cannot reach.
  GBP is a separate unlock worth more than its keyword volume implies.
- **AI Overview citations.** The site holds 12, across 1,940 AI search volume. Pages cited in AI
  Overviews earn **120% more organic clicks per impression** than uncited pages on the same query
  ([Seer](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-2026-update)) — so the
  cost cluster's 11 clicks/month is probably understated. The FAQ shipped 7 August should improve
  this further by making prices machine-readable for the first time.
- **Seasonality.** `divorce ring` runs 2,400/mo baseline and **5,400 in January**. Cluster A should
  spike ~2× from January through April.
- **Brand search.** `lorinczi` already draws 258 impressions at position 2.2 and grows with
  Instagram, independent of any of this.

---

## What would change the number most

1. **Five to ten real backlinks.** Doubles the twelve-month figure. Nothing else in this document
   comes close to that leverage.
2. **Build `right hand ring meaning`.** 590/mo at index 2 — the largest single unbuilt item.
3. **Finish the Google Business Profile.** Unlocks a cluster this model can't reach at all.
4. **Stop chasing head terms.** `divorce ring` (2,900), `toi et moi ring` (27,100),
   `right hand ring for women` (1,000), `engagement ring upgrade` (720) are all competition index
   100. Together they are most of the volume in this document and almost none of the traffic.
