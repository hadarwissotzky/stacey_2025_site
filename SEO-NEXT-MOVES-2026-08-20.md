# Improving positions, and finding the next ring-to-necklace

**Date:** 20 August 2026
**Source:** Google Search Console (first access — `sc-domain:lorinczi.com`), 28 days to 19 Aug,
plus Google Ads volume. This is Google's own data, not a third-party sample.

---

## Where things stand

| 28-day period | Clicks | Impressions | Clicks/day |
|---|---|---|---|
| Two periods ago | 28 | 2,260 | 1.0 |
| Prior | 39 | 4,910 | 1.4 |
| **Latest** | **105** | **7,610** | **3.9** |

Clicks up **2.7× in a month**, impressions up **3.4×** over two. Half of all organic clicks come
from one page: `/pages/turn-ring-into-necklace`, at **position 7.6 with 1,333 impressions**.

---

## 1. Why the core terms are stuck at 38–57 — cannibalisation

Google is showing the site for its main service terms roughly 900 times a month, and ranking it
on page 4–6. The cause is visible the moment you look at query→page pairs:

| Query | Page A | Page B |
|---|---|---|
| jewelry redesign | `/pages/jewelry-redesign` **48.3** | `/pages/before-after` **68.6** |
| redesign jewelry | `/pages/jewelry-redesign` **48.0** | `/pages/before-after` **80.7** |
| jewelry restyling | `/pages/jewelry-redesign` **37.4** | `/pages/jewelry-redesign-san-francisco` **82.8** |
| heirloom jewelry redesign | `/pages/jewelry-redesign` **70.0** | `/pages/heirloom-jewelry-redesign` **62.3** |

**Two pages competing for one query is worse than one page competing alone.** Google splits the
relevance signal and trusts neither. The heirloom row is the clearest case: the generic hub and
the dedicated heirloom page are fighting each other, and the *hub* is losing to its own child page
while both sit on page 6.

### What to do

**Decide one owner per term, then make the others defer to it.**

| Term | Should own it | Why |
|---|---|---|
| `jewelry redesign`, `redesign jewelry`, `jewelry restyling` | `/pages/jewelry-redesign` | it's the hub; it already ranks best of the pair |
| `heirloom jewelry redesign`, `heirloom ring redesign` | `/pages/heirloom-jewelry-redesign` | dedicated page, specific intent |
| `custom wedding bands` | `/collections/wedding-rings` | already the only contender at 45.3 |

Then:

1. **`/pages/before-after` should stop competing for `jewelry redesign`.** It's a gallery, not a
   service page — it ranks 68–80 and adds nothing. Retitle it toward what it actually is
   (before-and-after transformations) and let the hub own the service term.
2. **The hub should defer on heirloom terms.** It currently outranks the dedicated page for
   `heirloom jewelry redesign`. Cut the heirloom-specific depth on the hub back to a summary plus
   a prominent link, so the signal points one way.
3. **`/pages/jewelry-redesign-san-francisco` should not rank for `jewelry restyling`** (82.8) —
   that's a local page catching a national term. Keep its copy local.

**Expected effect:** consolidation typically moves a cannibalised term up a page or two on its own,
because the signal stops being split. It will not reach page one by itself — but at ~900
impressions/month for these terms, even 45 → 25 is a real gain, and it costs no new content.

**One caveat worth stating:** `heirloom jewelry redesign near me` already ranks **21.3** — the
near-me variants behave differently from the head terms and are closer to winning. Don't disturb
whatever is working there.

---

## 2. How `/pages/turn-ring-into-necklace` actually won

Not from the head term. It ranks for **39 distinct queries** in a single month:

| | |
|---|---|
| Top 5 queries | 95 impressions (46%) |
| The other 34 | 113 impressions (54%) |

The phrasings it catches: *turn / turning / turned*, *ring / wedding ring / engagement ring*,
*necklace / pendant*, *convert / make / how to / can you / how much does it cost*. Its head term is
worth only ~170/mo, yet the page earns **1,333 impressions** — the long tail is most of the value.

**The formula:** pick one *specific transformation*, then answer it in every natural phrasing
a person might use. Generic service terms ("jewelry redesign") lose to competitors with more
authority. Specific transformations have no incumbent.

### Candidates, checked against real volume

| Query | Vol/mo | Comp index | Verdict |
|---|---|---|---|
| **what to do with old wedding rings** | **210** | **14** | **build** — closest match to a proven winner |
| **what to do with old brooches** | **140** | **1** | **build** — no incumbent at all, and brooches are pure heirloom territory |
| turn necklace into bracelet | 140 | 1 | maybe — is this work she wants? |
| turn ring into pendant | 90 | 29 | **don't** — see below |
| what to do with inherited jewelry | 40 | 20 | fold into an existing page |
| turn brooch into necklace | 20 | 74 | fold into the brooch page |

**Do not build a ring-to-pendant page.** The existing page already ranks for
`turn wedding ring into pendant` (13.5), `ring to pendant conversion` (8.1) and `ring to pendant`
(9.5). A second page would cannibalise the site's best asset — exactly the mistake diagnosed in
section 1.

### Recommended order

1. **`what to do with old wedding rings`** (210/mo, index 14). Nearest neighbour to the page that
   already works, and it bridges into the divorce and widow pages that exist.
2. **`what to do with old brooches`** (140/mo, **index 1**). Softest keyword found in any research
   this month. Brooches are inherited almost by definition — this is the heirloom audience arriving
   with a specific object and no idea what to do with it, which is the exact conversation Stacey
   is best at.

Both should be written the way the winning page was: every phrasing, question-shaped headings,
one specific object, and honest options including "keep it as it is."

---

## 3. What not to do

- **Don't chase `jewelry redesign` with more content.** It has 160 impressions at position 45.9
  and two pages already fighting for it. Fix the split first.
- **Don't build pages for transformations the existing page already covers.** Pendant queries are
  won. Adding a page there would cost, not gain.
- **Don't judge the new pages yet.** `/pages/ring-resizing-cost` has 152 impressions at 20.8 after
  eight days, which is ahead of schedule, not behind it.
