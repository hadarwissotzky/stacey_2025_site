# SEO Audit — lorinczi.com

**Business type:** E-commerce (Shopify) · Handcrafted & custom fine jewelry
**Date:** 2026-06-18 · **Market:** United States
**Data sources:** DataForSEO (live), Google Lighthouse, live site crawl

---

## SEO Health Score: 74 / 100 — "Healthy plumbing, empty pipes"

| Category | Score | Weight | Notes |
|---|---|---|---|
| Technical SEO | 80 | 22% | Clean Shopify, fast TTFB (19ms), valid sitemaps, canonical, HTTPS |
| Content Quality | 62 | 23% | Good copy, but thin footprint vs. competitors |
| On-Page SEO | 75 | 20% | Strong product titles/meta; homepage OG mismatch |
| Schema | 80 | 10% | Product/Offer/Breadcrumb/Brand present; no Review/Rating |
| Performance (CWV) | 70 | 10% | LCP 1.34s good; CLS 0.161 fail; 3.27MB page |
| AI Search Readiness | 90 | 10% | agents.md, llms.txt, UCP/MCP — best-in-class |
| Images | 80 | 5% | Alt text present |

**One-sentence diagnosis:** The site is technically well-built and uniquely prepared for AI/agentic search, but it has **zero keywords in Google's top 10** and an estimated **~8 organic visits/month**. This is an *authority + content-depth + domain-age* gap, not a technical one. The fix is concentration, not reconstruction.

---

## The hard numbers (DataForSEO, live)

- **23 ranked keywords**, all marked `is_new` — a fresh entrant Google is still evaluating.
- **Best position: #22.** Nothing on page 1. Most rankings sit at #30–#100.
- **Estimated organic traffic value: ~$20/mo.** Effectively pre-traffic.
- **Realistic competitors** (not Tiffany/Zales — those are noise): **josephjewelry.com** (11,794 keywords), **taylorcustomrings.com** (8,597), **jewelrybyjohan.com** (14,651). These custom-jeweler peers rank 50–100x more keywords. The gap is content volume, not quality.

---

## The biggest opportunity

The `/collections/wedding-rings` page is **already ranking for 20+ "custom wedding band/ring" keywords** — but all of them are stuck at **positions 73–125**:

| Keyword | Volume | Current rank |
|---|---|---|
| custom women's wedding rings | 480 | #96 |
| custom women's wedding band | 480 | #86 |
| build wedding band | 390 | #93 |
| wedding rings custom made | 390 | #96 |
| custom wedding band design | 320 | #99 |
| custom wedding bands for her | 320 | #117 |
| wedding band makers | 210 | #125 |
| custom band ring | 170 | #77 |

One page is trying to rank for 20+ commercial-intent terms worth ~4,000 combined monthly searches. Google has noticed it (indexed and ranking) but doesn't yet consider it authoritative enough to promote. Concentrating effort here is the single highest-leverage move on the site. Moving this cluster from page 8 to page 2–3 is realistic within 60–90 days; page 1 is the 6-month goal.

Product-level rankings are healthier and closer to breaking through:

- "scroll and vine bracelet" (vol 720) → #81
- "thorn earring" (110) → #30
- "star sapphire bracelet" (140) → #36
- "silver wave ring" (390) → #85

---

## Prioritized Action Plan

### CRITICAL (this week)

Nothing is blocking indexing — no penalties or crawl blocks. *(Verified: robots.txt allows crawl, canonicals correct, SEO Lighthouse = 100.)*

### HIGH (within 2 weeks)

**1. Rebuild the `/collections/wedding-rings` page into a real ranking asset.**
It ranks for 20+ terms but is almost certainly thin (collection grid + a line of text). Add 400–600 words of genuine, first-person content: how I design a custom band, materials, the heirloom/redesign angle, process, timeline. This is the page most likely to deliver traffic.

- *First principle:* Google ranks pages it can read intent + depth from; a bare grid can't compete with a competitor's 600-word category page.
- *How you'll know it failed:* avg. position for the wedding-ring cluster hasn't improved in 8 weeks despite content + internal links.
- *Leading indicator:* watch the cluster's average position in GSC weekly — movement from ~#95 to ~#60 confirms it's working before any traffic shows.

**2. Add Review / AggregateRating schema to products.**
Product pages have Product + Offer + Brand + Breadcrumb schema (excellent) but no `aggregateRating` or `Review` — so no star ratings in the SERP. Stars lift CTR 15–30%. (Requires collecting reviews — a Shopify app like Judge.me / Loox emits the schema automatically.)

- *Falsifiable:* re-run schema validation in 2 weeks; stars should appear in Google's Rich Results Test.

**3. Fix the homepage Open Graph mismatch.**
The `<title>`/meta description are sharp, but `og:title` is just "Lorinczi Jewelry" and `og:description` is the old generic copy. Also `og:image` is served over **http://** (insecure) on an HTTPS site.

- *Why it matters:* every social/Slack/iMessage share uses the weaker, off-brand copy and may drop the image.
- *Fix:* align OG tags with the meta description and switch the image URL to https://.

### MEDIUM (within 1 month)

**4. Fix CLS (0.161 — over Google's 0.1 threshold).**
Layout shifts during load (desktop measurement; mobile is usually worse). Usual Shopify culprits: images without width/height, web-font swap, or an injected app banner. A confirmed Core Web Vital failure.

- *Leading indicator:* re-run Lighthouse — target CLS < 0.1.

**5. Trim page weight (3.27MB).** Heavy for a jewelry homepage. Lighthouse flagged TikTok, Facebook, GTM, DoubleClick, plus `nfcube.com` / `useifsapp.com` / `shgcdn3.com` apps. Each Shopify app adds JS. Best Practices score is only 0.73, largely from these.

**6. Build the content cluster around your winners.** You rank for "transforming jewelry," "jewelry redesign before and after," "reset diamonds." This redesign/heirloom angle is your differentiator vs. big retailers — they can't tell that story. Write 3–5 blog posts on heirloom redesign, diamond resetting, and "what to do with inherited jewelry," each linking to the wedding-rings and custom collections.

### LOW (backlog)

**7.** The "thorn" collection (thorn ring/earring/necklace) is a distinctive branded cluster ranking #30–70. A dedicated, content-rich `/collections/rose-thorn-collection` landing page could own this niche entirely — near-zero competition.

**8.** Pursue a handful of relevant backlinks (jewelry/maker/local press, "best custom jewelers" roundups). With 23 keywords and a young domain, authority is the ceiling on everything above. *(Backlink data limited — only Common Crawl tier available; connect Moz/DataForSEO backlinks for a full profile.)*

---

## What you're already doing better than your competitors

The site has `agents.md`, `llms.txt`, a UCP/MCP endpoint, and an agentic-discovery sitemap — Lighthouse scored agentic-browsing **0.91**. As AI shopping agents (ChatGPT, shop.app, Perplexity) become buying channels, your store is purchasable by agents and your competitors' aren't. This is a genuine moat. Keep the product feed and agents.md current; it's a real edge that won't show in traditional rank trackers.

---

## If you do only three things

1. **Beef up the wedding-rings collection page** — unlock 20+ keywords already on the board.
2. **Add review/star schema** — higher CTR on every ranking you have.
3. **Fix the OG tags + CLS** — stop leaking brand quality on shares and Core Web Vitals.

Everything else compounds on top of those.
