# Traffic trend — lorinczi.com

**Reporting date:** 4 August 2026 · **Revised** 4 August 2026 with Search Console data
**Sources:** Google Search Console (May 3 – Aug 2 vs prior 90 days), DataForSEO Labs (US/en),
GA4 (Jul 6 – Aug 2), live storefront checks

> **Revision note.** The first version of this report said the redesign pages "rank for nothing,"
> based on DataForSEO. Search Console — Google's own data — shows that was wrong: those pages
> produce 38 of the site's 106 clicks. DataForSEO samples a keyword universe and had not picked
> them up. Section 2 has been corrected and Section 2b added. **Where the two sources disagree,
> Search Console wins.**

---

## The headline

**Organic search is compounding.** Ranked keywords have gone from 1 to 66 in six months, and
the site just earned its first top-10 ranking in its history.

**And the redesign pages are a real part of it.** Search Console shows clicks up **4 → 106** over
90 days, with redesign pages producing **38 of the 106** — the San Francisco landing page alone
went from nothing to 14 clicks in its first quarter. Branded search now exists where there was
none.

**The constraint has moved.** It is no longer whether the content works. It's that the site
lacks the authority to lift it onto page one: `jewelry redesign` draws 284 impressions at
position 44. Google is showing the site; almost nobody scrolls that far.

---

## 1. The trend

| Month | Ranked keywords | Est. traffic value |
|---|---|---|
| Feb 2026 | 1 | 0.07 |
| Mar 2026 | 2 | 0.89 |
| Apr 2026 | 4 | 1.70 |
| May 2026 | *no data* | — |
| Jun 2026 | 20 | 7.75 |
| Jul 2026 | 37 | 14.22 |
| **Aug 2026** | **66** | **23.64** |

Keyword count has roughly doubled every month since April. That is a curve, not a spike.

**Position quality is improving faster than the count.** A month ago the best result on the
whole domain sat at position 11, with nothing in the top 10. Today:

| | July | Now |
|---|---|---|
| Positions 4–10 | 0 | **1** |
| Positions 11–20 | 2 | **10** |
| **Top 20 total** | **2** | **11** |

Sessions agree. The plan recorded ~6 visits/day at the end of June; GA4 for Jul 6 – Aug 2 shows
315 sessions — about **11/day**. Roughly doubled.

---

## 2. Where the traffic actually comes from

**Search Console, clicks by page (May 3 – Aug 2):**

| Page | Clicks | Note |
|---|---|---|
| Homepage | 43 | Brand searches — see §4 |
| `/pages/jewelry-redesign-san-francisco` | **14** | Brand new, already producing |
| `/blogs/journey-1/jewelry-redesign-cost` | 12 | 1,793 impressions — big visibility, low CTR |
| `/pages/turn-ring-into-necklace` | 12 | |
| Product/collection pages | 1–2 each | Hundreds of impressions each, few clicks |
| **Total site** | **106** | up from 4 |

**The redesign pages are working.** They account for **38 of 106 clicks**. The SF landing page
went from nothing to 14 clicks in its first quarter. This corrects the first version of this
report, which relied on DataForSEO and concluded the opposite.

DataForSEO separately shows the cost cluster holding 12 keyword rankings — `cost to reset a
diamond` (480/mo), `how much does it cost to reset a ring` (210/mo) and variants — all sitting
at **positions 11–22, page two**. Search Console corroborates: that page draws 1,793 impressions
for only 12 clicks, which is what page two looks like. Moving it to page one is still the single
highest-value ranking move available.

**On the two newest ICP pages** (divorce, spouse-dies, live 28 July): the reporting window covers
only five days of their life. Still too early. Judge on 1 September.

---

## 2b. Search Console — the fuller picture

| | Prior 90 days | May 3 – Aug 2 | Change |
|---|---|---|---|
| Impressions | 56 | ~10,500 | **188×** |
| Clicks | 4 | 106 | **25×** |
| Distinct queries | — | 648 | — |
| Avg position | 8 | 27 | *fell* |
| Avg CTR | 7.1% | 1.0% | *fell* |

### Read the last two rows correctly — they are not bad news

CTR and average position falling here is **arithmetically forced, and a sign of success.**

The site went from 56 impressions (a handful of brand searches sitting at position 8) to 10,500
impressions, mostly on pages 3–9 for competitive commercial terms. Those ~10,400 added
impressions were never going to convert — they dilute both ratios by definition. Meanwhile
**clicks went from 4 to 106.**

**Do not track CTR or average position as headline metrics for the next two quarters.** While
the site is adding page-3 impressions they will keep falling and it means nothing. Track
**clicks** and **keywords in the top 20** instead.

### A goal quietly met

Goal **G-E** in `EXECUTION-PLAN.md` was "0 branded searches → branded impressions appearing."

The query `lorinczi` now draws **258 impressions at average position 2.2.** That goal is
achieved — and it is the first hard evidence that the Instagram audience is beginning to search
for the brand by name rather than only tapping the bio link.

### The biggest gap, precisely located

High-impression queries earning **zero clicks** because the ranking is too deep to be seen:

| Query | Impressions | Position |
|---|---|---|
| custom wedding bands | 402 | ~51 |
| **jewelry redesign** | **284** | **~44** |
| redesign jewelry | 160 | — |
| jewelry restyling | 159 | — |
| custom wedding rings | 152 | ~75 |

**`jewelry redesign` — the core service term — sits at position 44 with 284 impressions.**
Google is already showing the site; nobody gets far enough down the results to see it. This is
an **authority** gap, not a content gap. It is the clearest argument for the backlink workstream
in `BACKLINK-MAP.md`.

### The strongest argument yet for finishing GBP

`jewelry resetting near me` and `heirloom redesign near me`: **positions 2–4, CTR 20–100%,
but only 1–5 impressions each.**

The site *wins these when shown* — and is almost never shown, because local-intent queries route
through the Map Pack and there is no verified Google Business Profile yet. Not a ranking problem.
A presence problem, already in flight.

### Data hygiene — two things to discount

- **Brazil supplies 205 of the homepage's 688 impressions (30%) and 1 click.** For a Hungarian
  surname and a US studio that is almost certainly bot or scraper noise. It inflates impressions
  and depresses CTR; subtract it mentally before reading either.
- The query list contains occasional non-queries — paragraphs describing shopper personas,
  garbled multilingual strings. Automated noise. No action, but it is in the denominator.

---

## 3. The cost-page redirect — checked, and healthy

All 12 cost-cluster rankings are still attributed to the old blog URL, which redirects to
`/pages/jewelry-redesign-cost`. Checked all of it today:

- Redirect returns a **single-hop 301** (permanent, correct) ✓
- **Zero** stale internal links anywhere in the theme still pointing at the old URL ✓
- **21 internal links** from 13 templates point at the destination page ✓
- The destination out-links to 10 related pages ✓

Nothing to fix. Google simply hasn't consolidated the rankings onto the new URL yet, which is
normal 11 days after a redirect. When it does, that page inherits the cluster.

---

## 4. The real constraint: backlinks

This is the one genuine problem, and it is bigger than a declining number.

| Month | Backlinks | Referring domains |
|---|---|---|
| Apr 2026 | 173 | 58 |
| May 2026 | 157 | 50 |
| Jun 2026 | 156 | 47 |
| Jul 2026 | 153 | 47 |
| **Aug 2026** | **154** | **48** |

Referring domains are down **17% since April**, and domain authority has been flat at rank 200
all year.

**Worse, the profile is almost entirely junk.** Of the top 30 referring domains, only three are
real:

- **pinterest.com** — one link
- **gemgossip.com** — a genuine jewelry blog, two editorial links, the single best link on the site
- **forosdelweb.com** — a webmaster forum, marginal

Everything else is link spam: one blogspot domain supplying **58 of the 154 backlinks**, plus a
long tail of `rankvanceseo.info`, `algolinkers.agency`, `anchorurl.cloud`, `buzzshrink.website`,
`australianwebdirectory.pro` and similar. DataForSEO scores the profile at **spam score 36**.

**This was not self-inflicted.** The campaign plan in `Lorinczi SEO/link-building-campaign.md`
explicitly forbids buying links. This is passive spam accrual — auto-generated scraper and
directory sites that latch onto any small ecommerce domain. It is common and mostly harmless.

**Recommendation: do not disavow.** Google ignores this kind of junk automatically, and a
disavow file is a loaded gun for a site this size. The fix is addition, not subtraction — five
to ten genuine links would outweigh the entire existing profile.

Rankings are currently rising on content quality alone against a shrinking, low-quality link
profile. That is exactly the wall that stops page 2 becoming page 1 on commercial terms.

---

## 5. What to do

**1. Earn real links — the binding constraint, now confirmed by Search Console.**
`jewelry redesign` sits at position 44 with 284 impressions. The page is good enough; it lacks
authority. Full strategy and named targets in [BACKLINK-MAP.md](BACKLINK-MAP.md) — podcasts
first (competitor-proven), then local citations and referral partners. `gemgossip.com` already
links to the site and proves editorial jewelry links are achievable. Target five real referring
domains, not fifty.

**2. Unblock the press reclamation.**
`TRAFFIC-EXECUTION-PLAN.md` cites Elle, Brides, Marie Claire and W — but **none appear as
backlinks, and no URLs are recorded anywhere in the repo**. If Stacey can supply the actual
article links, unlinked-mention reclamation is the cheapest real-authority win available. Until
then this is blocked, not in progress.
*(A brand-mention search was attempted and was a dead end — "Lorinczi" is a common Hungarian
surname, so results are dominated by unrelated authors and musicians.)*

**3. Finish the Google Business Profile.**
`jewelry resetting near me` and `heirloom redesign near me` already rank at positions 2–4 and
convert 20–100% of the time — they are simply almost never shown. Verified GBP is what puts them
in front of people.

**4. Leave the two newest ICP pages alone until 1 September.**
Five days of data. The older redesign pages are already producing (38 of 106 clicks), so the
model works; these two just need time.

**5. Stop reporting CTR and average position as headline metrics.**
Both will keep falling while page-3 impressions accumulate, and neither indicates a problem.
Report **clicks** and **top-20 keyword count**.

**4. No paid spend.**
The gate in `GROWTH-PLAYBOOK.md` is a proven conversion path, and `generate_lead` has not yet
fired on a real enquiry. Tracking went live 3 August; the first enquiry proves the path.

---

## Checkpoint — 1 September 2026

Re-pull and compare against this report:

| Metric | Source | Today | Expect |
|---|---|---|---|
| **GSC clicks (90d)** | GSC | **106** | **> 106 — the headline metric** |
| `jewelry redesign` position | GSC | ~44 | improving; page 1 is the goal |
| Two newest ICP pages | GSC | ~0 clicks | > 0, or investigate indexation |
| Near-me query impressions | GSC | 1–5 each | rising once GBP verifies |
| Ranked keywords | DataForSEO | 66 | > 66 |
| Keywords in top 20 | DataForSEO | 11 | > 11 |
| Cost cluster attributed to | DataForSEO | `/blogs/journey-1/…` | `/pages/jewelry-redesign-cost` |
| Referring domains | DataForSEO | 48 | ≥ 48, trend arrested |
| GA4 Direct share | GA4 | 47% | falling (UTM links live 3 Aug) |
| GA4 Organic Social share | GA4 | 12% | rising — **and engagement rate will fall as this bucket absorbs untagged in-app traffic. That is the bucket becoming honest, not a decline.** |

**Do not put CTR or average position in this table.** Both will keep falling for the right
reasons while page-3 impressions accumulate (see §2b).

---

## Note on sources

Search Console access arrived after the first draft of this report and it changed one conclusion
materially (§2). **Where Search Console and DataForSEO disagree, Search Console wins** — it is
Google's own record of what was shown and clicked, whereas DataForSEO estimates from a sampled
keyword universe and demonstrably missed pages that were producing real clicks.

DataForSEO stays useful for what GSC cannot show: competitor link profiles, backlink history,
and position tracking across a defined keyword set. Use both; lead with GSC.

**Still unmeasured: conversions.** `generate_lead` went live 3 August and has not yet fired on a
real enquiry, so nothing in this report connects traffic to revenue. That is the last gap, and
it closes itself with the first completed enquiry.
