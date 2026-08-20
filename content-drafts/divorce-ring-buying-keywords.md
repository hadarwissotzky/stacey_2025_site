# Divorce-ring buying keywords — the commercial tier

_DataForSEO Labs + Google Ads volume + search-intent classification + live SERP, US/en, pulled
7 August 2026. Addendum to [icp-pages-keyword-map.md](icp-pages-keyword-map.md), which already
covers the **informational** tier on `/pages/what-to-do-with-wedding-ring-after-divorce`._

---

## First: "disengagement ring" is not a keyword

| Term | Google Ads volume |
|---|---|
| disengagement ring | **no data** |
| disengagement rings | **no data** |

Not "low" — Google Ads returns no volume record at all, and a keyword-suggestions pull for the
phrase returned **zero** long-tail variants with any volume. The press likes the word; searchers
don't use it.

**Don't build on it.** It's worth one sentence on a page as a synonym ("sometimes called a
disengagement ring") so the phrase is covered if it ever takes off, and nothing more.

**The word people actually search is "divorce ring" — 2,900/mo.**

---

## The gap: an entire commercial cluster is untargeted

The existing divorce page targets the *"what do I do with it"* tier — ~1,010/mo, correctly, and
it owns those terms. What it does not touch is the **product/design tier**: people who have
already decided to make something and are now looking at what it could be.

| Keyword | Vol/mo | Intent (measured) | Comp | CPC |
|---|---|---|---|---|
| divorce ring / ring divorce | **2,900** | informational .50 / **transactional .34** | HIGH | $1.05 |
| divorce ring for women | **720** | informational .58 | HIGH | $1.12 |
| divorce ring ideas | **480** | **commercial .52** | HIGH | $0.96 |
| what is a divorce ring | 480 | informational 1.0 | LOW | $1.71 |
| unique divorce ring ideas | 260 | **commercial .69** | HIGH | $0.99 |
| divorce diamond ring | 260 | informational .74 | HIGH | $0.82 |
| before and after divorce ring | 210 | informational .61 | LOW | $0.35 |
| custom divorce ring | 170 | informational .67 | **LOW** | $1.71 |
| divorce ring designs | 140 | **commercial .74** | HIGH | $0.86 |
| divorce jewelry | 110 | — | HIGH | $0.88 |
| divorce ring styles | 90 | informational .65 / commercial .34 | HIGH | $0.67 |
| divorce ring for men | 90 | — | HIGH | $0.66 |
| what does a divorce ring look like | 70 | — | HIGH | $0.70 |
| post divorce ring / ring after divorce | 100 | **transactional .49** | HIGH | $1.35 |

**Deduped cluster ≈ 5,900/mo** against the ~1,010/mo the current page targets.

### The pure-transactional terms are already handled

These scored highest on transactional intent, and every one is already mapped onto the existing
page. No change needed:

| Keyword | Vol | Transactional probability |
|---|---|---|
| reset engagement ring after divorce | 70 | **1.00** |
| repurpose wedding ring after divorce | 140 | **0.996** |
| redesign wedding ring after divorce | 110 | 0.892 |
| resetting engagement ring after divorce | 70 | — |
| redesigning wedding ring after divorce | 110 | — |
| redesign engagement ring after divorce | 50 | — |

Small volumes, near-perfect intent. This is the money tier and it is covered — worth protecting,
not expanding.

---

## What the SERP says the page must look like

I pulled the live SERP for `repurpose wedding ring after divorce`. Position 1 is an **AI
Overview**. What ranks under it:

| Rank | Result | Format |
|---|---|---|
| AI Overview | cites TikTok ×2, Lindsey Scoggins, MiaDonna, Reddit, a **law firm**, YouTube | — |
| 2 | MiaDonna — *"9 Divorce Ring Styles to Celebrate Your Next Chapter"* | listicle |
| 3 | Reddit — r/AskWomenOver30 | forum |
| 4 | **Pinterest board** — "Redesigned rings after divorce" | images |
| 8 | Bario Neal — *"5 Engagement Ring Redesign Ideas Post-Divorce"* | listicle |
| 10 | Lindsey Scoggins — *"Spotlight on Divorce Rings and Engagement Ring Resets"* | listicle |
| 11 | Weddingbee boards | forum |
| video block | TikTok + Instagram reels from jewelers | short video |

**Three things follow.**

1. **Google wants a numbered ideas listicle, not a service page.** Every jeweler on page one
   ranks with "N ideas/styles" content. A "here's my service" page will not rank here — this is
   the page-type mismatch pattern from the SXO framing.
2. **Nobody owns it.** The winners are MiaDonna, Bario Neal, Lindsey Scoggins — small-to-mid
   jewelers ranking on blog posts, alongside Reddit, Pinterest and forums. There is no
   authority wall, which is exactly unlike `jewelry redesign` at position 44.
3. **Video and Pinterest rank inside the SERP.** TikTok and Instagram reels from jewelers hold
   the video block. With 12K on Instagram, that block is directly addressable — and it feeds the
   AI Overview, which cites two TikToks in its top element.

Related searches confirm the tail: *unique divorce ring ideas*, *repurpose wedding ring after
divorce gold*, **repurpose wedding ring after death** — the last one links this cluster straight
to the widow page.

---

## Seasonality — this is a January business

`divorce ring` monthly volume over the last year:

| Jul '25 | Aug | Sep | Oct | Nov | Dec | **Jan '26** | Feb | Mar | Apr | May | Jun |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1,600 | 2,900 | 2,400 | 2,400 | 2,400 | 2,400 | **5,400** | 4,400 | 3,600 | 2,900 | 2,400 | 2,400 |

**January is 2.25× the floor**, and the elevated window runs January through April. "Divorce
Month" is real and it is visible in the data.

Anything built for this cluster should be **live and indexed by early December** to catch the
January peak. Publishing in January is publishing too late.

---

## Baseline — where the divorce cluster stands today (7 Aug 2026)

Pulled before any of the changes below went live, so this is the clean before-snapshot.

| Check | Result |
|---|---|
| Ranked keywords in the divorce cluster | **0** |
| Ranked keywords on `/pages/what-to-do-with-wedding-ring-after-divorce` | **0** |
| Is the divorce page indexed? | ✅ **yes** — returns on a `site:` query |
| Is the widow page indexed? | ❌ **no** — `site:` returns nothing |
| Domain-wide ranked keywords (vol > 0) | 100 |
| Best page in the cluster's neighbourhood | `/blogs/journey-1/jewelry-redesign-cost` — 12 keywords, best position 11 |

**Read this correctly.** Zero rankings on a page that is 10 days old is the starting line, not a
failure. The page is indexed and simply hasn't been assigned positions yet. Everything in this
cluster is ahead of us.

**The widow page not being indexed is a real problem, and it is not technical.** Checked all four
usual causes and every one is clean:

| Check | Result |
|---|---|
| HTTP status | 200 |
| `robots` meta | no `noindex` |
| Canonical | self-referencing, correct |
| In `sitemap_pages_1.xml` | yes |
| Internal links pointing at it | 2 from `/pages/jewelry-redesign`, 2 from `/pages/heirloom-jewelry-redesign` |

Nothing to fix in code — it needs a **Request Indexing** push in Search Console. Worth doing
now rather than discovering on 1 September that the page has had no chance to perform.

One cheap improvement while we're here: **the divorce and widow pages do not link to each
other** (0 links in both directions). They are sibling life-event pages serving adjacent
audiences; cross-linking them helps discovery and passes relevance both ways.

---

## Recommendation — extend the existing page, do not build a new one

> **Corrected 7 Aug.** The first version of this doc recommended a new `/pages/divorce-ring-ideas`.
> That was written from keyword and SERP data before auditing the live page. Having read it: the
> existing page **already has an ideas section and an embedded before/after grid**. A second page
> would cannibalise it and split authority on a domain with 48 referring domains. Extend instead.

### What `/pages/what-to-do-with-wedding-ring-after-divorce` already has

- **An ideas section** — H2 *"What can my ring become?"* listing four options in Stacey's voice:
  a necklace ("the most popular choice"), a right-hand ring, earrings, something entirely new.
- **Six before/after case studies** embedded as a featured-blog grid.
- A full question-shaped FAQ spine: keep/sell/redesign, what it's worth, bad luck, who keeps it,
  can I redesign it, what can it become, cost, do I have to decide now.
- 1,494 words in `<main>`.

The structure is already right. It is the **vocabulary** that is missing.

### What it is missing — measured on the live page

| Term | Occurrences | Cluster volume it forfeits |
|---|---|---|
| **"divorce ring"** | **0** | 2,900 + 720 + 480 + 260 + 140 + 90 … |
| **"ideas"** | **0** | 480 + 260 |
| **"before and after"** | **0** | 210 (LOW comp) — *despite six of them on the page* |
| "disengagement" | 0 | ~0 — fine to stay near-zero |

The page ranks for the *"what do I do"* phrasing and never once uses the noun the other 5,900
searches are built on. Title, meta, every H2, and the body all avoid it.

### The five edits

1. **Add the noun.** Work "divorce ring" naturally into one H2 and two or three body sentences.
   The most honest place is a new short H2 — *"What is a divorce ring?"* (480/mo, informational
   1.0) — answered in her register: a ring that marks the chapter, often made from the stones
   already owned. One clause can carry the synonym: *"sometimes called a disengagement ring."*
2. **Number the ideas list.** *"What can my ring become?"* already has four items. Numbering it
   and titling it as ideas/designs is what the SERP rewards — every jeweler on page one ranks
   with a numbered listicle (MiaDonna's *9 Divorce Ring Styles*, Bario Neal's *5 Engagement Ring
   Redesign Ideas Post-Divorce*). Consider a fifth and sixth idea to match their depth.
3. **Name the before/afters as before/afters.** The grid is there; the phrase is not. One line of
   lead-in copy — *"Before and after: rings I've redesigned"* — picks up 210/mo at LOW
   competition using an asset already on the page.
4. **Get one divorce-specific case study.** All six current studies are heirloom/engagement
   stories — antique setting reset, inherited charms, mother's diamonds, art deco pendant, two
   stacking-ring redesigns. **None is framed as a divorce redesign**, and `/blogs/before-after`
   holds only those six. Stacey has certainly done these; one story told in the divorce register,
   with client permission, is the single strongest addition available and feeds Instagram and the
   AI Overview at the same time.
5. **Update the title tag** to carry both intents, e.g.
   *"What to Do With Your Wedding Ring After Divorce — Divorce Ring Ideas | Lorinczi"*.
   Keep the existing H1; it earns the 320/mo term.

### If a second page ever becomes right

Only if, after 60–90 days, the page ranks for the *"what to do"* terms but not for
`divorce ring ideas` / `divorce ring designs`. That would be evidence Google wants two page types
here. Split then, on evidence — not now, on theory. Evidence it may *not* need splitting:
MiaDonna's *9 Divorce Ring Styles* listicle ranks #2 for `repurpose wedding ring after divorce`,
so Google already treats the ideas and what-to-do SERPs as near-neighbours.

**Timing is unchanged:** these edits want to be live and indexed by early December for the
January peak.

**Two adjacent plays worth noting:**

- **The sell cluster** — *where to sell wedding ring after divorce* (140, **$16.00 CPC**),
  *how to sell a wedding ring after divorce* (50, $13.02), and variants, ~370/mo at $6–16 CPC.
  The existing map already decided to address this honestly rather than target it. Given
  Stacey's "I don't take any percentage of the refining payout" position, that remains right:
  the refining-credit argument is a genuine answer to "should I sell it," and those CPCs say the
  traffic is commercially valuable.
- **Celebrity queries** — *princess diana divorce ring* (210), *emily ratajkowski divorce ring*
  (90). Pure informational, don't target them as pages. But EmRata publicly split her engagement
  ring into two rings, which is a ready-made hook for the ideas page and for Instagram.

**Not recommended:** chasing `divorce ring finger tattoos` (320). That's tattoo intent, not
jewelry.
