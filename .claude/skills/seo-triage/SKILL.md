---
name: seo-triage
description: >
  Ingest a pasted external SEO report (Semrush, Bing Webmaster, Google Search Console, Ahrefs,
  or any crawl export) and remediate it: parse into a typed fixlist, fix one approved category
  at a time, push via shopify-sync, update the sitemap, then RE-VERIFY the exact flagged URLs.
  Use whenever the user pastes crawl/GSC/Semrush/Bing issues — broken links, long/duplicate
  titles, hreflang, canonical errors, stale OG tags, invalid structured data, redirect indexing,
  4XX/5XX, unminified assets — or says "fix these SEO issues" / "triage this report".
---

# SEO report triage

The gap this fills is **ingestion + remediation**, not research. The user pastes an external
report (often with no question) and expects it walked category by category, fixed with approval
at each step, and — critically — **re-verified on the specific flagged URLs**. A missing verify
step let the same broken link (`/products/book-virtual-appointment`) regress and get "fixed"
twice ten days apart. Don't repeat that.

Helper: `.claude/skills/seo-triage/verify.sh <url> …` — mechanical SEO fact check of a live URL.

## The loop

**1. Parse the paste into a typed fixlist.**
Normalize whatever format was pasted into one table. Report tools differ; parse semantically,
not by regex. Each row:
`{ category, severity, affected URL(s), mechanism, proposed fix }`.
Save the fixlist to the scratchpad and show it to the user before touching anything.

Map each issue category to its remediation **mechanism**:

| Category (as reports label it)                 | Mechanism |
|------------------------------------------------|-----------|
| Broken internal link / 4XX / redirect chain    | edit the linking theme file (section/snippet/template) → shopify-sync |
| Over-long / duplicate / missing title tag      | template/section title logic or page metafield `global.title_tag` |
| Missing / wrong canonical, www/redirect issue  | theme `<head>` (theme.liquid / snippet) or page-level canonical |
| Stale / missing OG tags, insecure og:image     | theme `<head>` OG snippet → shopify-sync |
| Invalid / missing structured data (JSON-LD)    | theme schema snippet → shopify-sync; validate the fixed markup |
| hreflang                                        | theme `<head>` hreflang block |
| Sitemap 5XX / stale / missing URLs             | regenerate/patch sitemap; Shopify auto-sitemap vs custom |
| Page content / meta description                | page metafield `global.description_tag` (Admin API path) |
| Unminified JS/CSS, HSTS, image weight          | asset-level; note if platform-limited (Shopify controls some) |

Theme-file fixes go through the **`/shopify-sync`** skill (pull-live-first, push `--only`,
verify). Content fixes (page titles/descriptions, nav) use the **Admin API** client-credentials
path — author the script, the USER runs it (sandbox blocks Claude from production writes).

**2. Gate by category — one at a time.**
The user's demonstrated preference is explicit per-category approval. Present ONE category's
proposed fixes, wait for approval, apply, then move to the next. Never batch-apply the whole
report. Keep edits surgical and on-brand (repo `CLAUDE.md`: first-person voice, rich-text
heading markup).

**3. Apply + push.** Theme files → `/shopify-sync`. Update the sitemap if URLs changed.

**4. RE-VERIFY the exact flagged URLs (never skip).**
For every URL the report flagged in the category just fixed:
`.claude/skills/seo-triage/verify.sh <url>` → confirm the specific defect is gone
(status 200 not 4XX, title ≤60, canonical present, og:image present/https, etc.). For rendered/
visual confirmation use the **/browse** skill. A push landing is NOT proof the SERP-level defect
is resolved — check the fact the report complained about.

**5. Log it.** Append each completed category to `seo-changelog.md` (repo root) with date, the
URLs touched, and the verify result — so a later report doesn't re-surface a "fixed" issue with
no history. If verify still flags a URL, it stays open, not done.

## Notes
- Some reported issues are platform-limited on Shopify (asset minification, certain headers) —
  say so plainly rather than faking a fix.
- Structured-data fixes: after editing, re-extract the JSON-LD and sanity-check it; note that
  Google's Rich Results Test is the authoritative validator.
