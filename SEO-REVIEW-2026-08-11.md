# SEO review — lorinczi.com

**Date:** 11 August 2026
**Sources:** DataForSEO Labs (US/en, live), live crawl of 14 key URLs, `site:` SERP, robots/sitemap check
**Builds on:** `SEO-AUDIT-lorinczi.com.md` (18 Jun), `TRAFFIC-TREND-2026-08.md` (4 Aug),
`TRAFFIC-FORECAST-2026-08.md` (7 Aug). This is a current-state check, not a re-audit.

> **Caveat carried forward from `TRAFFIC-TREND-2026-08.md`:** where DataForSEO and Search
> Console disagree, **Search Console wins**. DataForSEO samples a keyword universe and has
> previously missed pages that GSC shows earning clicks. Everything below from DataForSEO is
> directional; the GSC numbers in the traffic docs are the ground truth.

---

## The headline

**The footprint is growing fast and is stuck one page short of traffic.**

| | Jun 15 | Aug 7 | Aug 11 |
|---|---|---|---|
| Ranked keywords (vol > 0) | 38 | 132 | **157** |

That is 4× in eight weeks, and it is the clearest evidence the content programme is working.
But of the top 100 by position:

| Positions | Keywords |
|---|---|
| 1–3 | **0** |
| 4–10 | 2 |
| 11–20 | **21** |
| 21–50 | 77 |

*(Top 100 of 157 by position — the tail beyond 50 is truncated by the query limit.)*

**Twenty-one keywords sit on page two.** Nothing is on page one except positions 7 and 10.
This is the whole story of the site's SEO right now: it has earned relevance and not yet earned
authority. Content added more keywords at 21–50; it did not move the ones at 11–20.

The two page-one rankings are `peach sapphire rose gold ring` (50/mo, position 7) and
`silver vine bracelet` (90/mo, position 10) — both products, neither the business.

---

## Where the value actually is

The **cost cluster is the site's best asset by a distance**, and it is entirely on page two:

| Keyword | Vol/mo | Comp | Position |
|---|---|---|---|
| cost to reset a diamond | 480 | LOW | 18 |
| how much does it cost to reset a ring | 210 | LOW | 18 |
| resetting rings cost | 90 | LOW | 17 |
| how much does it cost to reset a diamond | 90 | LOW | 11 |
| reset engagement ring cost | 110 | LOW | 18 |
| engagement ring reset cost | 110 | LOW | 19 |
| how much does it cost to redesign a ring | 70 | LOW | 12 |
| before and after redesign old jewelry | 40 | LOW | 17 |

Every one is **LOW competition on page two**. This is the cheapest traffic available to the
site — no new content required, only enough authority and internal support to move eight to ten
positions. `TRAFFIC-FORECAST-2026-08.md` already made the general case that soft keywords carry
79% of the achievable traffic; this is that argument at the URL level.

By page type, the mismatch flagged in `HOMEPAGE-FUNNEL-AUDIT.md` persists:

| Page type | Keywords | Volume/mo |
|---|---|---|
| Products | 44 | 11,360 |
| Collections | 29 | 12,090 |
| Pages (service) | 11 | 2,290 |
| Blog | 15 | 1,850 |
| Homepage | **1** | 30 |

The shop still holds ~75% of the ranked footprint. The homepage ranks for **one keyword**.

---

## Defects found — concrete and fixable

> **All five were fixed on 11 August**, same day, and verified on live. Details and
> before/after values are logged in `seo-changelog.md`. Each is marked ✅ below.
>
> **Correction to the first version of this document:** the title and meta lengths
> quoted below were measured from raw HTML, which counts `&amp;` as five characters
> and `&ndash;` as seven. Real lengths were shorter than first reported — the
> overage was genuine but smaller. The table in defect 3 now shows true lengths.

### 1. ✅ FIXED — `/pages/use-your-own-gems-metal` had no H1 at all

Verified: **zero `<h1>` tags** on the page. It has H2s ("WHAT CAN I REPURPOSE?", "WHY I REFINE
YOUR METAL…") but no top-level heading.

This matters more than it looks. That page was retargeted on 7 August at **`repurpose old
jewelry`** — 390/mo at competition index 2, the softest keyword in the entire plan and the
third-largest unbuilt opportunity in the forecast. It is being asked to rank with no H1.

Cause is almost certainly that the page's `main` section is disabled (content lives in theme
sections), so the template's H1 went with it.

**Fix:** add an H1 carrying the target phrase. Highest value-to-effort item in this review.

### 2. ✅ FIXED — the homepage had no descriptive H1

The only `<h1>` wraps the logo link — no words. Combined with ranking for one keyword at volume
30, the homepage is doing nothing for search. `COMPETITOR-REPORT.md` found Métier SF draws ~90%
of its organic traffic through its homepage on local terms; this is the same gap, still open.

"San Francisco" now appears 5× on the homepage (it was absent when the competitor report was
written), but "Bay Area" appears 0×.

### 3. ✅ FIXED — six titles were truncating in the SERP

The theme appends `" – Lorinczi Jewelry"` (19 chars), so `title_tag` must be short. Current
rendered lengths:

| URL | Was (rendered) | Now |
|---|---|---|
| /pages/turn-ring-into-necklace | 75 | **57** |
| /pages/heirloom-jewelry-redesign | 73 | **56** |
| /pages/redesign-engagement-ring | 71 | **48** |
| /collections/rings | 76 | **50** |
| /pages/jewelry-redesign-san-francisco | 67 | **52** |
| /pages/what-to-do-with-wedding-ring-after-divorce | 65 | **50** |

Replacements keep the keywords that were being cut — "or Pendant" and
"& Inherited" survive rather than being trimmed away with the tail.

Google truncates around 60 characters. The tail of each is being cut, and in most cases the tail
is the brand — which is the least damaging outcome, but the pixel budget is still being spent on
words nobody sees.

### 4. ✅ FIXED — three meta descriptions ran long

193, 193, 183 and 167 characters against a ~155–160 limit
(`/pages/jewelry-redesign-cost` and its redirected blog twin, `/pages/turn-ring-into-necklace`,
`/pages/heirloom-jewelry-redesign`). Truncated mid-sentence.

### 5. ✅ FIXED — `seo-changelog.md` was stale

Last entry **1 August**. Nothing from the 7 August work — the divorce page rewrite, the
`repurpose old jewelry` retarget, the FAQ schema de-duplication, the hero CTAs. This repo uses
the changelog as its record of what changed and when, which is what makes ranking movements
attributable later. Eleven days of shipped work is missing from it.

---

## What's healthy

- **robots.txt** — clean, `Allow: /`, no accidental blocks.
- **Sitemaps** — index plus products, pages, collections, blogs. Present and well-formed.
- **Canonicals** — self-referencing and correct on every page checked.
- **Structured data** — 2–4 JSON-LD blocks on every page. The duplicate-FAQ problem fixed on
  7 August is holding.
- **Content depth** — 700–2,560 words on service pages. No thin pages among those checked.
- **The cost-page redirect works** — `/blogs/journey-1/jewelry-redesign-cost` → 301 →
  `/pages/jewelry-redesign-cost`. Correct single-hop, no chain.

---

## Two things to watch

**The cost cluster is mid-migration.** DataForSEO still attributes those page-two cost rankings
to the **old blog URL**, which now 301s. Equity should transfer, but this is the site's single
most valuable cluster and the transfer is unconfirmed. Watch it in Search Console: the
`/pages/` URL should take over impressions within a few weeks. If the numbers dip and stay down,
that is the first place to look.

**`?srsltid=` parameters are in the index.** Every `site:` result carries one — Google Merchant
Center auto-tagging. Google states it handles these, and the canonicals are correct, so no action
is needed. Worth knowing because it inflates URL counts in Search Console and can look like a
duplication problem when it isn't.

---

## What I'd do next, in order

1. ~~**Add an H1 to `/pages/use-your-own-gems-metal`.**~~ ✅ done 11 Aug.
2. **Work the page-two cost cluster.** Twenty-one keywords at 11–20, mostly LOW competition, is
   where the next real traffic is. Internal links from related pages, and the freshness signal
   from the calculator work, are the levers that don't require new content.
3. ~~**Trim the titles and meta descriptions.**~~ ✅ done 11 Aug — six titles, three descriptions.
4. **Give the homepage a local line.** ✅ H1 done 11 Aug ("Custom Jewelry Design & Jewelry
   Redesign in San Francisco"); the body copy still never says "Bay Area" and mentions
   San Francisco only five times, mostly in the footer.
5. **Google Business Profile.** Raised in five separate documents and still not built. It is the
   only route to the Map Pack, which content cannot reach at all.
6. **Links.** `TRAFFIC-FORECAST-2026-08.md` models five to ten referring domains as worth roughly
   2× the entire content programme. Nothing in this review changes that: the site's problem is
   authority, not relevance. Twenty-one keywords on page two is exactly what an authority
   ceiling looks like.

**The one-line version:** the content work has succeeded — 4× the keywords in eight weeks — and
has now hit a wall that more content will not break through. Everything above the fold of this
list is housekeeping; items 5 and 6 are the ones that change the trajectory.
