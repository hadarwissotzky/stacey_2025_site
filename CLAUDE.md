# Lorinczi (lorinczi.com) — Shopify Dawn theme

This repo is the local copy of the **live Dawn theme** for lorinczi.com, a one-person
custom-jewelry studio (Stacey is the sole designer/maker).

## Store & theme — target explicitly, always

- **Store:** `1fb93f.myshopify.com` · **Live theme:** Dawn `#163348971803` (role: main).
- The Shopify CLI on this machine also knows `painted-lady-2870.myshopify.com` (theme
  Tinker `#186232668479`) and **sometimes defaults to it**. Tinker is near-stock Dawn and
  lacks the custom collection/page templates — pushing there fails validation and does
  nothing to the live site. Never rely on the CLI default; pass `--store` and `--theme`.

## Deploying theme changes

> For the full auth → pull-live → edit → push → verify loop, use the **`/shopify-sync`** skill
> (`.claude/skills/shopify-sync/`). The rules below are the summary it enforces.

- **Push only the specific changed files — never a bare `shopify theme push`:**
  ```
  shopify theme push --store 1fb93f.myshopify.com --theme 163348971803 \
    --allow-live --nodelete --only <file1> --only <file2>
  ```
  List every changed file with its own `--only`. Confirm the list matches exactly the
  change being shipped. A full push can clobber live with stale/WIP local state.

## Live is the source of truth — verify before every edit

The user **edits the site directly in the Shopify admin/theme editor while I work**, so the
local repo and earlier reads go stale. Before ANY change to the live theme/site:

1. **Pull the target file fresh from live and diff it** against the repo before pushing:
   `mkdir -p /tmp/live-check && shopify theme pull --store 1fb93f.myshopify.com --theme 163348971803 --only <file> --path /tmp/live-check`
   Push only if my change is purely additive on top of current live; otherwise re-apply my
   edit onto the freshly pulled file first. When local diverges, live wins — pull, don't overwrite.
2. Prefer surgical, scoped edits over rewriting whole files. Asset API: GET → modify → PUT.
3. **Verifying a push landed:** the storefront can serve a STALE cached render even after a
   successful push — don't conclude failure from `curl`. Confirm by pulling the file back and
   grepping for the change (ground truth), or open the page in the theme editor and click Save
   to purge the cache.

## Brand voice — first-person singular, always

Solo studio. All copy is **"I / my / me"** to **"you / your"**. **Never "we / our / us"** as
corporate/team voice — but the **collaborative "we" (Stacey + client)** is signature: "we'll
work through style, stones, metals, shape, and scale." Tone: warm, intimate, artisanal.
Recurring vocabulary: reimagine, transform, redesign, repurpose, meaningful, deeply personal,
treasure/cherish, one-of-a-kind, made just for you, your story. Signature moves: rhetorical
questions to the reader, ALL-CAPS section headings, no-pressure closers ("feel free
to send the pics whenever you're ready"), radical money transparency ("I work backward from
your budget," "I don't take any percentage"). Applies to every surface: pages, blog, meta
descriptions, alt text, buttons.

**No em-dashes in customer-facing copy (Hadar, 2026-09-04).** Every em-dash on the site was
replaced with a comma. This covers pages, blog posts and excerpts, product and collection
descriptions, SEO title/description metafields, theme templates, section text, JSON-LD and
alt text. Em-dashes were previously a signature move here; they are not any more. Watch for
all four encodings when auditing: the literal character, `&mdash;`, `&#8212;`, and the
JSON escape `\u2014` (which also appears double-escaped as `\\u2014` inside JSON-LD
embedded in `custom_liquid`). Code comments keep theirs. En-dashes in numeric ranges
($500-$1,800) were left alone.

**Canonical voice exemplar (2026-07-31, per Hadar: "the tune from now on"):** the
jewelry-redesign-cost page body — `content-drafts/jewelry-redesign-cost-body.html` — which is
Stacey's own client-email language. Match its rhythm before inventing new phrasing. For
grief/divorce/heirloom surfaces, ICP-COMMUNICATION-PLAYBOOK.md is binding on register: talk TO
one woman (never about "widows" as a class), plain words for death, prescribe method never
timing.

## Page typography & spacing — one spec, measured not guessed

`/pages/jewelry-redesign` is the reference; `/pages/heirloom-jewelry-redesign`
matches it. **THEME-PAGE-TYPOGRAPHY.md** holds the numbers, the CSS that produces
them, and the traps. Read it before styling any content page.

The short version: lead 21px, headings 21px/30px Nexa uppercase, body 16px/25px
GoudyOldStyle, 70px under the lead, 58px above a heading, 4px under it, 16px
between paragraphs, content at 80% width. Section `custom_css` is capped at 500
characters and the cap **is enforced on push**.

## Headings — use the theme's rich-text markup, never a bare `<h2>`

When adding a section heading + subtext, match the full visual treatment via the theme's
`rich-text` section (or replicate its exact classes in a custom-liquid block). Pull fonts/sizes/
colors from theme CSS variables — never hardcode them. Note: the global `.center` class does
**not** center the rich-text heading on this theme; each rich-text section carries per-section
`custom_css` (Nexa heading + centering + sizing + gray A-Gothic links) that does the real work —
include it. Reference live example: the "CUSTOM GALLERY" block on
`/collections/custom-gallery`.

## Editing store content (pages, nav, metafields) via Admin API

Org app **"Seo Automation"** (client_id `907537ea1dd3a3f1fd3230c7c51fa494`) can create/edit
content. Auth is a **client-credentials grant** (not a static `shpat_` token): form-POST
`grant_type=client_credentials&client_id=…&client_secret=shpss_…` to
`https://1fb93f.myshopify.com/admin/oauth/access_token` for a 24h token. SEO title/desc on a
page = metafields `global.title_tag` / `global.description_tag`.

**Running these scripts (updated 2026-08-01):** Admin API scripts in `seo-automation/*.mjs`
(page bodies, metafields, file alts, redirects, blog edits) now run **directly from Bash** with
`SHOPIFY_CLIENT_ID` / `SHOPIFY_CLIENT_SECRET` in the environment — verified working 2026-08-01.
The older "I author the script, the USER runs it" handoff no longer applies. If a fresh session
doesn't have the secret, ask Hadar for it rather than assuming the sandbox is blocking.

The sandbox classifier does still block some unrelated operations (e.g. reading browser
cookie stores, global package installs). If a specific call is refused, say so and hand that
one command off — don't generalize it into a blanket handoff rule.

## Visual changes — screenshot before reporting "done"

After ANY CSS/theme/layout change, don't report it done from the diff alone — **capture the
rendered result and compare it to the target.** Use `/browse` to screenshot the affected page at
**both desktop and mobile** viewports (this theme's layout work — button grids, footer alignment,
mobile font sizes — repeatedly looked right in code and wrong on the page). Only say it's done
once the screenshot matches. If the change was mobile-only, confirm desktop is unchanged, and
vice-versa — the breakpoints are easy to couple by accident.
