---
name: shopify-sync
description: >
  Sync theme file changes to the live Lorinczi Dawn store safely: authenticate once from a
  stored token, ALWAYS pull-from-live-and-diff before editing, push only the changed files,
  and close the loop by screenshotting the affected page. Use whenever editing/deploying any
  theme file (sections, snippets, templates, assets, layout) or when the user says "push it
  live", "deploy this", "was it pushed", "validate the change is live", or "sync to Shopify".
---

# Shopify live-site sync

The user edits the live theme in the Shopify admin **in parallel** with this repo, so local
drifts constantly. Live is the source of truth. This skill wraps the full loop so we never
re-fight auth, never blind-push over the user's live edits, and never claim "done" without
proof. Store/theme/token live in `.shopify-sync.env` (gitignored) — see `.shopify-sync.env.example`.

Helper: `.claude/skills/shopify-sync/sync.sh {pull|push|env} <file> …`

## The loop — do these in order, every time

**0. Check auth once.**
`.claude/skills/shopify-sync/sync.sh env` → confirms store, theme, and token=SET.
If token is MISSING, stop and tell the user to do the one-time setup (copy the `.example`
file, paste a `shptka_` Theme Access token from admin → Apps → "Theme Access"). Do not
restart the OAuth/dev-app dance — the stored token is the method.

**1. Pull live + diff BEFORE editing.**
`sync.sh pull <file>` pulls only that file into `.live-check/` and diffs it against the repo.
- If identical → safe to edit the repo file directly.
- If live differs → the user changed it live. Re-apply your intended edit onto the
  `.live-check/<file>` copy (or reconcile), then copy it back into the repo. Never overwrite
  live with a stale repo file.

**2. Edit** the repo file. Keep edits surgical and on-brand (see repo `CLAUDE.md`: first-person
voice, rich-text heading markup, etc.).

**3. Push only the changed files.**
`sync.sh push <file> [file …]` → `theme push --allow-live --nodelete --only …`.
List every changed file explicitly. Never a bare full-theme push.

**4. Verify — close the loop (do not skip).**
A push can succeed while the storefront serves a **stale cache** — a `curl` of the page is
NOT proof. Verify one of two ways:
- Ground truth: `sync.sh pull <file>` again and confirm the change is in the pulled file.
- Live render: screenshot the affected page with the **/browse** skill (gstack) and confirm
  the change is visible. If cache is stale, tell the user to open the page in the theme
  editor and click Save to purge it.

Report the result plainly: pushed which files, verified how, with the screenshot/diff as proof.

## Guardrail note

`theme pull/push` via the CLI token is fine to run from Bash. The **Admin API** path
(pages, navigation, metafields via the "Seo Automation" client-credentials app) is a
different flow that the sandbox blocks Claude from executing — for that, author the script
and have the USER run it. This skill covers theme *files* only.
