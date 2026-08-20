# Keyword performance, site performance, trend, and new wedges

**Date:** 11 August 2026
**Sources:** DataForSEO Labs ranked keywords (live), Google Ads search volume (live, US/en),
Lighthouse (desktop), live crawl. Companion to `SEO-REVIEW-2026-08-11.md`.

> Same caveat as always: where DataForSEO and Search Console disagree, **Search Console wins**.
> Volumes and competition indices below are Google Ads data and are reliable; ranking positions
> are DataForSEO's sample and are directional.

---

## 1. Keyword performance

**157 ranked keywords, 0 in the top three.**

| Positions | Keywords |
|---|---|
| 1–3 | **0** |
| 4–10 | 2 |
| 11–20 | 21 |
| 21–50 | 77 |

The two page-one rankings are products — `peach sapphire rose gold ring` (50/mo, pos 7) and
`silver vine bracelet` (90/mo, pos 10). Neither is the business.

**Everything that earns comes from one cluster.** The cost pages hold eight LOW-competition
keywords at positions 11–19, including `cost to reset a diamond` (480/mo) and
`how much does it cost to reset a ring` (210/mo). That single cluster produces more traffic
than 44 product keywords with five times the volume — the finding from `TRAFFIC-TREND-2026-08.md`
still holds.

**The distribution by page type shows the business mismatch unchanged:**

| Page type | Keywords | Volume/mo |
|---|---|---|
| Products | 44 | 11,360 |
| Collections | 29 | 12,090 |
| Service pages | 11 | 2,290 |
| Blog | 15 | 1,850 |
| Homepage | 1 | 30 |

---

## 2. Site performance

Lighthouse on `/pages/jewelry-redesign-cost`, desktop:

| Metric | Value | Verdict |
|---|---|---|
| Performance | **0.94** | strong |
| Largest Contentful Paint | 1.41s | well inside the 2.5s threshold |
| Cumulative Layout Shift | 0.005 | effectively zero |
| First Contentful Paint | 0.66s | strong |
| Server response | 18ms | excellent |
| SEO | 0.92 | fine |
| Accessibility | 0.82 | worth attention |
| Best practices | 0.73 | worth attention |

**Speed is not this site's problem.** Core Web Vitals are comfortably passing.

**Two things do stand out:**

**Page weight is 3.1 MB.** That is heavy, and the test above ran on *desktop with light
throttling*. On a phone over cellular — which is how most of this audience arrives — the same
page will behave materially worse than 0.94 suggests. This number, not the score, is the one to
watch.

**Nineteen third-party entities load on a single page**, including Google Tag Manager, Google
Ads, Bing Ads, Facebook, TikTok, Microsoft Clarity, plus `ifeed.bio`, `useifsapp.com`,
`nfcube.com`, `shgcdn3.com`, `freepik.com` and `magnific.com`. Some are apps that may no longer
be in use. Each one costs mobile performance and is a place for the page to break. An app audit
is overdue — not for the Lighthouse score, but because a solo studio should not be carrying six
tracking vendors.

---

## 3. Trend

| | Jun 15 | Aug 7 | Aug 11 |
|---|---|---|---|
| Ranked keywords | 38 | 132 | **157** |
| Top 3 | 0 | 0 | **0** |
| Positions 4–10 | — | 2 | **2** |
| Positions 11–20 | — | 19 | **21** |

**Breadth is compounding; depth is flat.** Four times the keywords in eight weeks, and not one
has reached the top three. The 11–20 band moved 19 → 21 in four days, which is drift, not
progress.

This is the signature of a site with good content and insufficient authority. More pages keep
producing more page-two rankings. `TRAFFIC-FORECAST-2026-08.md` modelled links as worth roughly
2× the entire content programme; this trend is that model being confirmed in the data rather
than argued in theory.

**Read plainly: the content strategy has done its job and is now hitting diminishing returns.
The constraint has moved.**

---

## 4. New wedges

Four hypotheses tested against live Google Ads data. One is large, one is real but hard, one is
a local unlock already known, and one failed outright.

### Wedge A — the "ring meaning" cluster · ~53,000/mo at competition 1–47 · **the find**

| Keyword | Vol/mo | Comp index | CPC |
|---|---|---|---|
| claddagh ring meaning | 18,100 | 47 | $0.48 |
| promise ring meaning | 14,800 | 37 | $1.31 |
| **ring finger meaning** | **9,900** | **1** | $0.09 |
| thumb ring meaning | 5,400 | 7 | $0.75 |
| pinky ring meaning | 2,900 | 6 | $0.76 |
| signet ring meaning | 1,000 | 23 | $0.82 |
| right hand ring meaning | 590 | 2 | $3.52 |

`right hand ring meaning` was already in the plan as the largest unbuilt item — 590/mo at index
2, worth ~65 clicks/month at twelve months. **It is not an outlier. It is one member of a
category**, and the others are five to seventeen times bigger at the same or lower competition.
`ring finger meaning` draws 9,900 searches a month at **competition index 1**.

**Why it fits.** These are questions a jeweler is uniquely credible answering. They are also
exactly the content that earns AI Overview citations — the site already holds 12, and cited pages
earn ~120% more clicks per impression. And the audience overlaps: someone researching right-hand
rings is often a divorce-ring prospect, which the forecast already noticed.

**The honest caveat.** This is top-of-funnel. CPCs of $0.09–$0.82 say advertisers don't value
these clicks, and neither should the model as direct leads. The case for building it is
**authority and links** — informational pages of this kind attract citations that commercial
pages never will, and authority is precisely what section 3 identifies as the binding
constraint. Treat it as link-earning content that happens to bring traffic, not as a lead source.

### Wedge B — signet rings · ~10,600/mo commercial · real but hard

`custom signet ring` 5,400/mo · `family crest signet ring` 3,600/mo · `gold signet ring women`
1,600/mo. All at competition index 100.

Stacey told a client this work is "right up my alley," and there is currently **no signet page on
the site at all**. Strong craft fit, genuine demand, zero presence. But the head terms are as
hard as everything else, so the entry point is `signet ring meaning` (1,000/mo, index 23) and the
long tail — not the money terms.

Note the seasonality: `custom signet ring` peaks Sep–Nov at 9,900. Anything built here wants to
be live by August.

### Wedge C — `custom jeweler near me` · 8,100/mo · Map Pack only

The largest single addressable number found. Content cannot reach it — it routes through the
Map Pack, which needs a **Google Business Profile**. GBP has now been recommended in six separate
documents. This sizes it: 8,100/mo at $4.13 CPC, versus `jewelry designer san francisco` at
110/mo. The near-me query is 70× the local brand query.

### Wedge D — arthritis and enlarged knuckles · **tested and rejected**

Stacey mentions locking shanks and grown knuckles in her client emails, which made this look
promising. The data says no:

- `ring for arthritic fingers` — 880/mo, but **CPC $0.46**, and the SERP is adjustable-ring
  retail. These searchers want a $20 solution, not custom fine jewelry.
- `rings for arthritic knuckles` — 40/mo.
- `hinged ring for arthritis`, `ring for large knuckles`, `wedding band for arthritic hands`,
  `wedding ring for swollen knuckles` — **no measurable volume at all**.

Worth stating plainly because it was my idea and it was wrong: volume without matching intent is
not an opportunity. Keep locking shanks as a selling point in conversation; don't build for it.

**Also checked and not recommended:** recycled/ethical gold (`recycled gold engagement ring` only
90/mo; `ethical engagement ring` shows 8,100 but with wildly unstable monthly data — 49,500 in
January against 1,000 in May — which makes it unreliable to plan against). And the "use your own
gold" phrasings people supposedly search — `jeweler that uses your own gold`, `make jewelry from
old gold`, `use my own diamond for engagement ring` — returned **no volume**. The phrasings that
do have volume are the ones already targeted.

---

### Wedge E — repair & resizing · **the best economics in this entire analysis** · content only

Re-tested after being dismissed earlier as "not the traffic we want." The data says the traffic
is excellent and the *work* is what's wrong — those are separable.

| Keyword | Vol/mo | Comp index | CPC |
|---|---|---|---|
| jewelry repair near me | 110,000 | 75 | **$10.45** |
| jewelry repair | 40,500 | **28** | **$11.54** |
| ring resizing near me | 22,200 | 67 | **$9.20** |
| how much does it cost to resize a ring | 6,600 | **27** | **$10.11** |
| **ring resizing cost** | **6,600** | **17** | **$9.12** |
| ring repair near me | 2,400 | 70 | $11.50 |
| can a ring be resized | 260 | 32 | **$14.19** |

**Compare the economics.** The meaning cluster (Wedge A) runs $0.09–$0.82 CPC. This runs
$9–$14 — ten to a hundred times higher. Advertisers bid that because repair converts to paid
work. And `ring resizing cost` sits at 6,600/mo with **competition index 17**, which is softer
than most of what the site already ranks for.

**The format is already proven here.** The site's single best-performing asset is a cost guide
sitting at positions 11–19. `ring resizing cost` is the same page shape, at 14× the volume of
`cost to reset a diamond` (480/mo).

**Nothing exists yet.** No `/pages/maintenance`, `/pages/repairs`, or `/pages/jewelry-repair` —
all 404. The word "resize" appears nowhere on the cost page. Completely unbuilt.

**The catch, which is the whole point.** Ranking for repair means repair enquiries, and a solo
designer doing $60 resizes instead of $3,000 redesigns is a worse business, not a better one.
The original instinct was right about the work.

**The resolution: write the content, don't take the work.** A cost guide can rank for
`ring resizing cost` without offering resizing. And there is an honest bridge to redesign that
isn't a sales trick, because it's true:

- Eternity bands generally **cannot** be resized at all.
- Heavily set rings can rarely move more than a size or two.
- Resizing beyond ~2 sizes compromises the shank.
- A large share of resize searches are rings that no longer fit because they were **inherited**,
  or because hands changed — which is the redesign audience exactly.

So the page answers the question straight, says plainly that she doesn't do repairs and where to
go instead, and then makes the one argument only she can make: *if the ring doesn't fit and you
don't love it either, resizing spends money on a ring you still won't wear.* That register —
telling someone the truth when it isn't her service — is already how she writes; it's what she
did when she referred the turquoise inlay client to jewelers in the Southwest.

**Honest limit:** conversion per visitor will be well below the redesign-cost page. This is a
wider net with a thinner intent match. It wins on volume (6,600 vs 480), not on quality.

---

## 4b. Forecast for the resizing cluster (added 12 Aug, after the page shipped)

**Split the volume first, because most of it isn't reachable by a page:**

| | Volume/mo | Reachable how |
|---|---|---|
| Cost/informational cluster | **14,560** | the page — this is the forecastable part |
| "near me" terms | 134,970 | Map Pack only — **needs GBP**, no page can rank |
| `jewelry repair` (head) | 40,500 | excluded — local intent, realistically unwinnable |

For scale, the reachable 14,560/mo is **more than twice the divorce cluster** (6,190/mo) that
was the largest thing built in July.

**Anchored on this site's own evidence, not the theoretical table.**
`/pages/jewelry-redesign-cost` holds eight LOW-competition cost keywords at positions **11–19**
after months live and with more links than the new page has. That is the honest comparable, and
it is what the projection assumes the new page eventually matches — page two, not page one.

| Scenario | 3 mo | 6 mo | 12 mo |
|---|---|---|---|
| Conservative — ends where the cost page is now (~pos 17) | 29 | 73 | **175** |
| Optimistic — needs the link work to land (~pos 8) | 73 | 175 | 495 |

A second anchor gives a lower figure: cluster E in `TRAFFIC-FORECAST-2026-08.md` produces 11
clicks/mo from 1,490/mo of volume — 0.74%. Applied to 14,560 that is **~108 clicks/mo**. So the
defensible twelve-month range is roughly **100–175 clicks/mo**, against a whole-site total of
**35 clicks/mo today**.

**Four caveats, and they matter:**

1. **Competition index is an ads metric, not organic difficulty.** `ring resizing cost` at
   6,600/mo will have national chains and repair franchises on page one whatever its index says.
2. **Nothing here assumes a top-three ranking**, because the site has never had one. The
   projection lives entirely in positions 8–25.
3. **The CTR curve is banded** — positions 11–20 all score 1.2% — so anything landing in that
   range returns the same modelled number. Treat these as ranges, not points.
4. **This traffic converts to resizing, not commissions.** A $50–180 job is not a $3,000
   redesign. The value depends on what share of readers arrive holding a ring they've stopped
   wearing, which is the argument the page's closing section makes.

**The number that should drive the decision:** 134,970/mo sits behind the Google Business
Profile. The page is the smaller half of this opportunity.

---

## 5. What this adds up to

1. **Build the meaning cluster.** Start with `ring finger meaning` (9,900/mo, index 1) and
   `pinky ring meaning` (2,900, index 6) — the softest large terms available anywhere in this
   research. One page each, each linking into the redesign and divorce pages. Judge it on
   citations and links, not on leads.
2. **Google Business Profile.** Now sized at 8,100/mo. Sixth time of asking.
3. **A signet page before September**, entering on meaning and craft rather than the head terms.
4. **Audit the third-party apps.** Nineteen entities and 3.1 MB is a mobile problem the desktop
   score hides.
5. **Links remain the constraint.** Nothing in this analysis changes that, and the trend data
   now demonstrates it: four times the keywords, still zero in the top three.
