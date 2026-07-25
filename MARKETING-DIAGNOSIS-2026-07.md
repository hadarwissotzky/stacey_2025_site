# Marketing Diagnosis — 60 Days After the SEO/AI-Search Push
_lorinczi.com · researched 2026-07-22 · data: DataForSEO live pulls (rankings, SERPs, backlinks, LLM mentions, GBP), live-site inspection, repo changelog/plans_

---

## TL;DR — what's actually wrong

**The SEO work is not failing — it is working, early, and capped.** Rankings grew from 4 keywords (April) → 20 (June) → 100 (July). But three things explain why you don't *see* it in traffic or conversions:

1. **🔴 URGENT: your single best-performing SEO asset is a 404.** The blog post `/blogs/journey-1/jewelry-redesign-cost` holds **13 rankings at positions 11–27** for the entire "reset cost" cluster (~1,670 searches/mo — the #1 priority lane in SEO-STRATEGY.md). It was deleted — presumably when the newer `/pages/how-much-does-jewelry-redesign-cost` page was created — **with no redirect**. Google will drop those rankings as it recrawls. Fix is a one-line command (below).
2. **Nothing ranks in the top 10 yet, and ~all clicks live in the top 10.** Positions 11–27 generate approximately zero traffic. The site is *on the doorstep* of page 1 for the money cluster, not through it. The doorstep is invisible in GA4.
3. **The parts of the plan that produce traffic and conversions *this quarter* were never executed.** The on-page/AEO work (Claude's side) shipped. The off-page and funnel work — Google Business Profile, backlinks/press, GA4 instrumentation, Instagram routing, email capture — is the human-side work that EXECUTION-PLAN.md flagged as blocked ("Blocking dependency: GA4 + email-tool access from Hadar"), and it's still not done.

Also: **"60 days" is really ~5 weeks of Google time.** The bulk on-page cleanup landed June 17; the new pillar/local pages went live in early–mid July. For a site with 53 referring domains, page-1 breakthroughs at 5 weeks would be unusually fast. The trajectory (4 → 20 → 100 keywords, ETV +83% June→July) is what "working" looks like at this stage.

---

## 1. What the live data shows

### Ranking trajectory (DataForSEO historical rank overview, Google US)

| Month | Keywords ranked | Est. organic visits/mo | Top-10 keywords |
|---|---|---|---|
| Feb 2026 | 1 | 0 | 0 |
| Mar 2026 | 2 | ~1 | 0 |
| Apr 2026 | 4 | ~2 | 0 |
| Jun 2026 | 20 | ~8 | 0 |
| **Jul 2026** | **37 (100 in the full live pull)** | **~14–42** | **1** |

92 of the 100 currently ranked keywords are **new** — direct output of the June/July work. Combined search volume across them: **17,560/mo**. Estimated traffic actually captured: **~42/mo**. That gap *is* the whole story: everything sits at 11–76.

### Where the rankings are

- **The reset-cost cluster (the #1 lane): 13 keywords at positions 11–27**, incl. "cost to reset a diamond" (480/mo) #18, "how much does it cost to reset a diamond" (90/mo) #11 — **all pointing at the deleted blog URL** (see §2).
- `/collections/wedding-rings`: 37 keywords ("custom women's wedding band" 480/mo, "custom wedding band designs" 320/mo…) but at positions 43–76 — volume staged, no clicks yet.
- **`/pages/jewelry-redesign-san-francisco` is already on page 1** (#6 organic) for "jewelry redesign san francisco" — 2–3 weeks after launch. Proof the approach works.
- Product long-tails moving: "silver vine bracelet" #10 (the only top-10), "wave ring sterling silver" (1,000/mo) #26.
- **Zero**: branded "lorinczi" searches, local "jeweler san francisco"/"near me" terms (organic), ring-to-necklace terms, "jewelry redesign" head term.

### The ceilings (why positions stall at 11–30)

| Check | Result | Meaning |
|---|---|---|
| Referring domains | **53** (49 main), backlink rank 200 | Very weak authority. ~50 of 156 backlinks are blogspot.com junk. Competitors outrank on trust, not content. |
| Google Business Profile | **Does not exist** (no "Lorinczi" listing within 100 km of SF) | Invisible in the Map Pack — which sits **above all organic results** for every local query and is where "custom jeweler near me" (8,100/mo) demand flows. Competitors in the pack: Design Jewelers (79 reviews, 4.9★), La Bijouterie (100+, 4.8★), Love & Luxe (36, 4.8★). |
| LLM/AI mentions (ChatGPT dataset) | **Zero** | The on-site AI plumbing shipped (llms.txt ✓, agentic sitemap ✓, FAQ/LocalBusiness/Organization schema ✓) — but LLMs cite brands they see corroborated in third-party sources (press, listicles, Yelp, Reddit, The Knot). None of that off-site work happened. |
| `/pages/turn-ring-into-necklace` (5,400/mo head term) | Live but **not in Google's index** (site: query returns nothing; zero rankings) | Needs GSC "Request indexing" + internal links from ranking pages. |
| Branded search | 0 impressions | Nobody is searching "lorinczi" — the awareness/branded-demand flywheel (press, "as seen in", social routing) hasn't started. |

### The funnel (conversion side)

- CTAs are present and consistent: homepage and every redesign page funnel to `/products/free-consultation` ($0 bookable appointment — works).
- Newsletter capture exists on the site.
- **But nothing is instrumented.** No GA4 baseline was ever recorded, no UTM scheme applied, no lead-source log started (Sprint 0, T0.1–T0.4 — all blocked on access). So even if visits convert at a healthy rate, there is no way to see it or attribute it.
- **The math cannot show conversions at this traffic level.** ~6 visits/day ≈ 180/mo. At the benchmark 2.4–6.1% visit→lead, that's **4–11 leads per quarter**, indistinguishable from noise. Conversion isn't measurably "broken" — the top of the funnel is too small to test it.

---

## 2. 🔴 Fix today: the deleted cost post

`/blogs/journey-1/jewelry-redesign-cost` → **404** (confirmed live). Its 13 rankings are the best SEO asset on the site and will decay with every recrawl. Redirect it to the new cost page (`/pages/how-much-does-jewelry-redesign-cost`), which carries the same content intent — the rankings should transfer.

The repo already has the tool. Run in your shell (`!` prefix):

```bash
cd seo-automation
SHOPIFY_CLIENT_SECRET=shpss_xxx node create-redirect.mjs \
  /blogs/journey-1/jewelry-redesign-cost /pages/how-much-does-jewelry-redesign-cost
```

Then in Search Console: URL inspection → request indexing for the new cost page.

**Related watch-item — cost-page cannibalization:** two cost pages now exist (`/pages/how-much-does-jewelry-redesign-cost` and `/pages/jewelry-redesign-cost-in-san-francisco`). Keep the generic one targeted at "reset/redesign cost" terms and the SF one strictly local ("…cost in San Francisco"); cross-link them; don't let their titles/H1s converge.

---

## 3. Root causes, ranked

| # | Root cause | Evidence | Owner |
|---|---|---|---|
| 1 | Best asset deleted without redirect | 13 cost-cluster rankings → 404 | Fix: run script above |
| 2 | No Google Business Profile | Zero Map Pack presence vs. 3 competitors with 36–100 reviews; local demand (8,100/mo "custom jeweler near me") flows through the pack | **Stacey/Hadar — cannot be done by code** |
| 3 | No authority (backlinks) | 53 ref. domains, half junk; everything stalls at 11–30; the off-site plan (press reactivation, SFist/Marin listicles, The Knot, Reddit) untouched | Stacey (intros) + pitches |
| 4 | No instrumentation | Sprint 0 never exited; no GA4 baseline, UTM, or lead log — conversions invisible even if happening | **Hadar (access)** |
| 5 | Social routing never executed | 12K IG followers, ~6 site visits/day; TRAFFIC-EXECUTION-PLAN Phase 1 (bio landing page, story stickers, shopping tags, Pinterest routing) not verifiably live | Stacey + Hadar |
| 6 | Expectation mismatch | Work is 3–5 weeks old in Google time on a low-authority domain; 60-day traffic inflection was never realistic for SEO alone — the plan itself said 90-day traffic gains would come "mostly from unlocking existing social + Pinterest, not new SEO" | — |
| 7 | New head-term page unindexed | turn-ring-into-necklace (5,400/mo) not in index | GSC request + internal links |

## 4. What's working — do not undo

- Cost-cluster rankings (once redirected) sitting 11–27, poised for page 1 with internal links + a few real backlinks.
- SF local page on page 1 in under 3 weeks.
- 92 new rankings from the June/July work; keyword footprint 4 → 100 in a quarter.
- Schema/AEO/llms.txt infrastructure — done and correct; it will pay out the moment third-party corroboration exists.

## 5. Prioritized plan (next 30 days)

**This week — hours of work, highest leverage:**
1. Run the 301 redirect (above) + request indexing on the cost page. *(30 min)*
2. **Create the Google Business Profile** — service-area business, categories "Custom Jeweler"/"Jewelry Designer", services = redesign/resetting, service area SF + Bay Area. Then start the review engine: every past happy client gets a direct review link with a prompt like "redesigned my mother's ring." Ten reviews puts you in contention for the pack. *(2–3 hrs + ongoing)*
3. **Grant GA4 + email-tool access / pull the numbers** so Sprint 0 can finally close: channel baseline, UTM scheme on every social link, lead-source log. Until this exists, every future month has this same "I can't see uptake" conversation. *(1 hr)*
4. GSC: request indexing for turn-ring-into-necklace; add internal links to it from the redesign hub, the cost page, and the before/after post (which ranks #17).

**Weeks 2–4 — authority + routing (the two real growth levers):**
5. Backlink sprint, aimed at sources LLMs also cite: pitch SFist "Best Custom Jewelry Shops in SF" (it ranks #4 for your money local query), Marin Magazine, reactivate Elle/Brides/Marie Claire/W press contacts, create The Knot + WeddingWire + Yelp profiles. Even 5–10 real links likely tips the cost cluster onto page 1 — and is the only route to AI-search citations.
6. Instagram routing (Phase 1 of TRAFFIC-EXECUTION-PLAN): UTM'd bio landing page with 3 doors, story link stickers 2–3×/wk, shopping tags, Pinterest Rich Pins. This is the only lever that can move traffic *this month* — 12K followers are already there.
7. Verify email capture + welcome flow actually fire.

**Days 30–90:** case-study atomization (6 transformations → pages + pins + reels), remaining local pages, monthly gate review per EXECUTION-PLAN §5. Hold all paid spend until the master gate (instrumented visit→lead ≥2.4%) — unchanged recommendation.

## 6. What to expect (honest timeline)

- **Weeks 1–4 after fixes:** cost cluster re-consolidates on the pages URL; with internal links + first backlinks, first page-1 entries. GBP starts appearing for "near me" queries once reviews land.
- **Months 2–3:** local pack presence with 10+ reviews; wedding-rings collection keywords climb from 40s–70s into 20s–30s; first branded impressions in GSC if press/social routing runs.
- **Traffic you can feel (30–80 visits/day):** comes from IG/Pinterest routing + Map Pack, not organic SEO — exactly as TRAFFIC-EXECUTION-PLAN predicted. SEO compounds behind it into months 4–6.
- **Conversions:** measurable only after instrumentation + traffic ≥ ~30 visits/day. Judge the funnel then, not now.

---

*Sources: DataForSEO historical_rank_overview, ranked_keywords (100 kw full pull), backlinks_summary, live SERP checks (SF local query, site: queries), business_data listings search (GBP), ai_optimization LLM-mentions search; live curl inspection of lorinczi.com pages/robots/llms.txt; repo: seo-changelog.md, SEO-STRATEGY.md, TRAFFIC-EXECUTION-PLAN.md, EXECUTION-PLAN.md.*
