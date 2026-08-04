# Lorinczi Jewelry — Jewelry Redesign SEO & AI Strategy

**Prepared:** 2026-05-30
**Domain:** lorinczi.com (Shopify / Dawn theme)
**Strategic focus:** Position Lorinczi as *the* destination for **jewelry redesign** — "bring your gems and jewelry back to life."
**Target audience (validated via DataForSEO clickstream):** **Women 45–70**, affluent, sentimental, heirloom owners. (Custom-jewelry searchers skew 59% female and 45–54 is the single largest age bucket.)

---

## 1. Executive Summary

Lorinczi cannot win nationally on generic "custom jewelry" — those SERPs are owned by Kay, Zales, Tiffany, Amazon, and Etsy, and the brand has near-zero backlink authority (currently ~8 organic visits/mo, 9 ranking keywords, none on page 1).

The winning move is to **own a narrow, defensible, emotionally-charged niche**: **jewelry redesign / heirloom restyling / stone resetting** — taking a customer's old, inherited, or unworn jewelry and reimagining it. The data validates this:

- **~5,000/mo of beatable, well-fit demand** across the redesign + reset + repurpose clusters.
- The SERPs are dominated by **independent designers** (Melanie Casey, Elora Lab, Reflective Jewelry) — *not* national giants. Winnable.
- The audience (women 45–70, affluent, heirloom-owning) is a **perfect product-market fit** — older buyers have inherited pieces and the means to commission redesigns.
- It's **high-margin** (the customer often supplies the gold and stones) and **remote-friendly** (mail-in model — no need to publish a studio address).
- It maps directly to the brand's existing identity: *"Let me tell your story in metal."*

This document lays out the keyword strategy, site architecture, content plan, technical fixes, AI/GEO strategy, local strategy, authority building, and a phased roadmap.

---

## 2. Strategic Positioning

**Hero positioning:** *"Bring your gems and jewelry back to life."*

| Layer | Language to use |
|---|---|
| **SEO anchors** (title, H1, URLs, headings, alt) | jewelry redesign · reset your diamonds · repurpose old jewelry · heirloom redesign · redesign your engagement ring |
| **Brand / emotional voice** (hero copy, taglines) | bring your gems back to life · metal into meaning · from forgotten gems to cherished designs · your story in metal |

> Rule: emotional language sells, but the **searchable slots (title/H1/headings)** must lead with "redesign / reset" so Google and AI engines can find and classify the page. "Transformation" tested as a dead term (~10/mo) — keep it as voice only, never as an SEO anchor.

---

## 3. Target Audience

- **Primary:** Women **45–70**, household income above median, own inherited/heirloom jewelry, sentimental, value craftsmanship and story over brand-name prestige.
- **Secondary:** Men 40–60 commissioning redesigns/upgrades (anniversary, upgrade an engagement ring). ~40% of jewelry searchers are male.
- **Emotional drivers:** sentiment (honoring a late mother/grandmother), practicality (don't wear it as-is), sustainability (reuse gold/stones), value (avoid buying new).
- **Channel implications:** Meta (Facebook/Instagram) ads to women 45–65; Pinterest (before/after content); email nurture; trust-heavy on-site content.

---

## 4. Keyword Strategy — Three Clusters

### Cluster A — Service Hero (winnable, commercial intent) → service pages
| Keyword | Vol/mo | Notes |
|---|--:|---|
| jewelry redesign | 480 | primary anchor |
| ring resetting | 590 | LOW competition ✅ |
| reset diamond ring | 390 | $6.58 CPC |
| reset engagement ring | 390 | |
| redesign wedding ring | 390 | |
| redesign engagement ring | 210 | |
| heirloom jewelry redesign | 210 | + "near me" 140 |
| redesign diamond ring | 140 | |
| diamond resetting | 140 | |
| jewelry remodeling | 110 | LOW |

### Cluster B — Content / Top-of-Funnel (LOW competition, authority-building) → blog
| Keyword | Vol/mo | Notes |
|---|--:|---|
| repurpose old jewelry | 390 | LOW ✅ |
| what to do with old jewelry | 390 | LOW ✅ |
| jewelry redesign before and after | 90 | trust content |
| jewelry redesign ideas | 50 | |
| what to do with inherited jewelry | 40 | LOW |
| jewelry redesign cost | 20 | high intent |
| turn diamond into pendant | low | long-tail |

### Cluster C — Stretch / Aspirational (high volume, harder) → dedicated pages, later
| Keyword | Vol/mo | Notes |
|---|--:|---|
| design my own engagement ring | 5,400 | mixed SERP, configurator intent |
| upgrade wedding ring | 1,300 | emotional, moderate difficulty |
| upgrade engagement ring | 720 | |
| recycled gold jewelry | 1,000 | sustainability angle, partial fit |

---

## 5. Competitive Landscape

**Study these (your true niche competitors — independents you can beat):**
- **melaniecasey.com** — ranks for reset/redesign; strong content + product structure
- **eloralab.com** — heirloom redesign positioning
- **reflectivejewelry.com** — eco/recycled + redesign
- vanessanicole.com, thepeachbox.co (custom/reset)

**Direct national custom competitor (proof page-1 is possible for independents):** jewelrybyjohan.com (#7–8 on custom wedding ring terms).

**Local SF battleground (if/when pursuing local):** Yadav, La Bijouterie, Metier SF, Trabert Goldsmiths, rebeccaovermann.com, robinwoolard.com.

**Action:** Tear down Melanie Casey + Elora Lab — map their page structure, content depth, internal linking, and backlink sources, then exceed them.

---

## 6. Site Architecture & On-Page

### ⚠️ First: consolidate duplicate pages
Two near-duplicate redesign pages currently cannibalize each other:
- `/pages/use-your-own-gems-metal` (template `page.your-own-metal.json`)
- `/pages/transform-your-old-jewelry` (template `page.transform-your-jewlery.json`)

**Action:** merge both into a single canonical hub at **`/pages/jewelry-redesign`** (new template `page.jewelry-redesign.json`), 301-redirect both old URLs to it, relabel the nav item to **"Jewelry Redesign"** and promote it to top-level. Do this *before* any content/optimization work.

### Hero page: `/pages/jewelry-redesign` (the consolidated redesign hub)
- **Title:** `Jewelry Redesign & Heirloom Restyling | Reset Your Gems – Lorinczi`
- **Meta:** `Jewelry redesign & heirloom restyling by Lorinczi. Reset your diamonds, repurpose old gold, and bring cherished gems back to life. Free virtual consultation.`
- **Add a real H1:** `Jewelry Redesign — Bring Your Gems & Jewelry Back to Life`
- **Expand to 600–900 words:** process steps, what you can redesign, reset diamonds, refining old gold, sustainability, sentiment.
- **Add before/after gallery** (with descriptive alt text).
- **Add FAQ section + FAQPage schema** (cost, timeline, is it safe to mail jewelry, insurance).
- Keep existing emotional copy underneath the optimized headings.

### Supporting service pages (one per high-intent sub-service)
- `/pages/reset-diamond-ring` — resetting diamonds/stones (Cluster A)
- `/pages/redesign-engagement-ring` — engagement ring redesign
- `/pages/heirloom-jewelry-redesign` — inherited/heirloom pieces

### Internal linking & nav
- Add **"Redesign"** to the main navigation.
- Link the hero page from the homepage prominently.
- Cross-link blog posts → service pages with keyword-rich anchors.

---

## 7. Content Plan (Blog)

Map each post to a Cluster B/C keyword; each ends with a CTA to the redesign consultation.

1. **"What to Do With Old or Inherited Jewelry: 9 Ideas"** → `what to do with old jewelry` / `inherited jewelry`
2. **"How to Repurpose Old Jewelry Into Something You'll Actually Wear"** → `repurpose old jewelry`
3. **"Jewelry Redesign Before & After: Real Transformations"** (visual gallery) → `jewelry redesign before and after`
4. **"How Much Does Jewelry Redesign Cost? A Transparent Guide"** → `jewelry redesign cost`
5. **"Resetting a Diamond: Everything You Need to Know"** → `reset diamond ring` / `ring resetting`
6. **"Redesigning an Engagement Ring: A Step-by-Step Guide"** → `redesign engagement ring`
7. **"Turning a Loved One's Jewelry Into a New Heirloom"** (emotional/sentiment) → `heirloom jewelry redesign`
8. **"Should You Upgrade or Redesign Your Wedding Ring?"** → `upgrade wedding ring`
9. **"What to Do With Grandma's Ring: Honoring Her Memory in a Piece You'll Wear"** (audience-perfect: women 45–70)

**Cadence:** 2 posts/month. Prioritize 1, 2, 3, 5 first (highest volume + lowest competition + trust-building).

---

## 8. Technical SEO (from the audit)

- [ ] **Image alt text sitewide** (every page missing it) — critical for a visual + before/after brand.
- [ ] **Homepage: fix double H1** (currently 2).
- [ ] **Product schema: add SKU/GTIN** identifiers.
- [ ] **Reviews → `aggregateRating`** in Product schema (install Judge.me/Shopify Reviews) for ⭐ stars in SERP.
- [ ] **FAQ schema** on the redesign hub + key blog posts.
- [ ] **Close the indexation gap** (24 products in sitemap not indexed — likely thin; enrich).
- [ ] **Bulk product title/meta/alt optimization** via Admin API (same flow used for collections).
- ✅ Already done: homepage title rewritten, title `\n` bug fixed, 23 collection meta descriptions made unique.

---

## 9. AI / GEO Strategy (Generative Engine Optimization)

The redesign niche is **question-driven** — people ask ChatGPT/Perplexity/Gemini things like *"what should I do with my grandmother's ring?"* or *"can you reset a diamond into a new setting?"* Getting cited there is a major opportunity the giants underexploit.

**Tactics:**
1. **Answer-first, structured content** — every blog post opens with a direct, quotable 2–3 sentence answer, then detail. AI engines extract these.
2. **FAQPage + HowTo schema** — makes content machine-parseable and citation-ready.
3. **Entity building** — consistent "Lorinczi Jewelry / Stacey Lorinczi, jewelry redesign" naming across site, GBP, directories, social, so AI engines associate the entity with the topic.
4. **Get into the sources AI cites** — listicles/roundups ("best jewelry redesign services," "where to reset a diamond"), Reddit/Quora answers (genuine, helpful), and press. AI engines lean heavily on these.
5. **Comparison/decision content** — "redesign vs. buy new," "reset vs. remount" — AI loves to summarize trade-offs.
6. **Track AI visibility** — periodically prompt ChatGPT/Perplexity/Gemini with the target questions and check whether Lorinczi is cited; iterate.

---

## 10. Local SEO (security-compatible)

- **Service-Area Business GBP** — verify with the real SF address but **hide it publicly** (required for no-walk-in businesses). Set service areas: SF, Oakland, Berkeley, Marin, broader Bay Area.
- Captures **"jewelry redesign near me" (480/mo) + "heirloom...near me" (140/mo)** for Bay Area searchers.
- **Reviews** are the #1 local-pack lever — request Google reviews from past custom/redesign clients.
- The SF address anchors proximity ranking even while hidden.

---

## 11. Authority / Link Building

Near-zero backlinks are the ceiling on everything. Targeted, niche-relevant links:
- **Digital PR / press:** local SF lifestyle press, jewelry/design blogs, "meet the maker" features.
- **Roundup placements:** "best jewelry redesign services," "where to reset heirloom diamonds" (also feeds AI citations).
- **Designer directories:** jewelry designer guilds, sustainable/recycled-gold directories.
- **Partnerships:** estate attorneys, wedding planners, antique dealers (heirloom referral sources).
- **Reddit/forums:** genuine helpful answers in r/jewelry, r/EngagementRings linking to guides (no spam).

---

## 12. Measurement & KPIs

| Metric | Baseline (2026-05) | 6-mo target | 12-mo target |
|---|--:|--:|--:|
| Organic visits/mo | ~8 | 150 | 500+ |
| Ranking keywords | 9 | 100+ | 300+ |
| Page-1 keywords (redesign cluster) | 0 | 5 | 15 |
| Redesign consultation requests/mo | ? | 10 | 30 |
| AI citations (ChatGPT/Perplexity) | 0 | appear for 2 queries | 5+ queries |
| Referring domains | ~0 | 15 | 40 |

**Tooling:** Google Search Console (rankings/queries), GA4 (traffic/conversions), `/seo rankings` monthly for the redesign cluster, GBP Insights (local).

---

## 13. Phased Roadmap

**Phase 1 — Foundation (Weeks 1–3):** Rework the redesign hero page (title/meta/H1/content/FAQ/schema), fix sitewide image alt, set up GBP, install reviews app. *Quick wins + fixes the biggest gaps.*

**Phase 2 — Content engine (Weeks 3–10):** Publish the priority blog posts (what-to-do, repurpose, before/after, reset-diamond), build internal linking, add supporting service pages.

**Phase 3 — Authority & AI (Weeks 6–16, ongoing):** Digital PR, roundup placements, directory listings, AI-citation content, review velocity.

**Phase 4 — Measure & expand (Month 4+):** Track rankings/AI visibility, double down on what's moving, attack Cluster C stretch terms (design-your-own, upgrade) as authority grows.

---

*See the companion task list (created in this session) for the granular, ordered to-do you can work one element at a time.*
