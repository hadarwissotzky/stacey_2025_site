# Measurement — closing Q5

_The operating doc for GA4 + UTM + lead log. Created 2026-08-03._
_Q5 in [EXECUTION-PLAN.md](EXECUTION-PLAN.md) has blocked every conversion gate since July.
This closes it. When this doc and older docs disagree, this one wins._

---

## Status

| Piece | State |
|---|---|
| Site-side lead tracking | ✅ **Live 2026-08-03** |
| UTM scheme | ✅ Defined below — needs applying to social links |
| Lead-source log | ✅ [lead-source-log.csv](lead-source-log.csv) — needs first rows |
| GA4 admin config | ⬜ **Needs GA4 access** — 15-minute checklist at the bottom |

**The gap in one sentence:** GA4 can now tell you a lead happened and which page it came
from. It cannot yet tell you which *channel* sent them, because no social link is tagged.
Section 2 fixes that.

---

## 1. What went live on the site (2026-08-03)

Every contact form on the site (21 pages) now does three things it didn't do before.

**Two hidden fields ride along in the notification email:**

- `Sent from` → `Contact — https://lorinczi.com/pages/contact`
- `Source` → `google / organic / redesign-cost (landed on /pages/jewelry-redesign-cost)`

The Source field is **first-touch** — it records how the visit started and survives browsing
several pages before writing. It reads the UTM parameters defined in section 2. Untagged
visits show as `direct` or a raw referrer, which is exactly why section 2 matters.

**Three GA4 events:**

| Event | Fires when | Carries |
|---|---|---|
| `contact_form_start` | First keystroke in any contact-form field | page path |
| `contact_form_abandon` | They typed something, then left without sending | which fields were filled, message length, seconds on form, furthest field reached |
| `generate_lead` | Submission succeeds | page path |
| `cta_click` | A button-styled link is clicked, site-wide | `cta_label`, `cta_destination`, `cta_position` (e.g. `hero`), page path |
| `scroll_depth` | Reader passes 25 / 50 / 75 percent | `scroll_percent`, page path |

**Why `scroll_depth` exists (added 2026-08-04):** GA4's built-in `scroll` fires only at 90%
depth, so a visitor who reads 60% of a page registers nothing at all. That made the homepage's
"16.8% scroll rate" impossible to interpret — it could mean instant bounces or people reading
most of the page and stopping short. The 25/50/75 marks resolve it.

**Why `cta_click` exists:** GA4 Enhanced Measurement's `click` covers *outbound* links only, so
internal navigation — every button on the site — was invisible. This is what makes homepage
changes measurable: which button was pressed, where it pointed, and which section it sat in.

Cost is deliberately small: at most three scroll events per page view, plus one per CTA click.
A visitor who neither scrolls nor clicks generates nothing. Add-to-cart is a `<button>`, not a
link, so it is excluded and stays covered by the store's own `add_to_cart` event.

`contact_form_abandon` sends **metadata only** — never the words anyone typed. Nothing to
disclose, no privacy exposure.

**Why the `contact_` prefix (fixed 2026-08-03):** this property already emits GA4 Enhanced
Measurement's built-in `form_start` and `form_submit`. The first version of this script reused
`form_start`, which would have double-counted every interaction. The built-ins also fire for
*any* form on the page — newsletter, search — so an abandon rate measured against them would
have a contaminated denominator. Our two events are namespaced so the pair is internally
consistent and the built-ins are left alone.

**Do not use the built-in `form_submit` as the lead metric.** It fires when the submit event
occurs, not when Shopify accepts the enquiry. `generate_lead` fires on the success render, so
it counts real leads.

### Verification record — 2026-08-03

Tested against the live site in a real browser, landing via
`?utm_source=instagram&utm_medium=bio&utm_campaign=instrumentation-test` then navigating to
the contact page.

| Check | Result |
|---|---|
| `Sent from` hidden field | ✅ `Contact — https://lorinczi.com/pages/contact` |
| `Source` hidden field, first-touch across pages | ✅ `instagram / bio / instrumentation-test (landed on /pages/jewelry-redesign)` |
| `contact_form_start` → GA4 | ✅ 204 from `/g/collect`, `ep.form_id=contact` |
| `contact_form_abandon` → GA4 | ✅ with full metadata payload |
| `generate_lead` → GA4 | ✅ 204 from `/g/collect` |
| End-to-end form submission | ⛔ **blocked by hCaptcha** — see below |

**The collision was real, and is now confirmed fixed.** The same network log shows both
events firing side by side with different names: our `en=contact_form_start&ep.form_id=contact`
and Enhanced Measurement's `en=form_start&ep.form_id=ContactForm`. Had we kept the original
name, those two would have been one metric counted twice.

**Why the submission couldn't be tested end-to-end.** The form is protected by hCaptcha
(Shopify spam protection). An automated browser gets challenged and the POST never completes.
That's correct behaviour and not a defect — it also means the form is spam-protected. Real
visitors normally pass silently.

`generate_lead` was therefore verified by simulating the success render (setting the posted
flag and re-running the tracker), which exercises the same code path. The one link still
unproven is Shopify's own success render setting that flag — stock Dawn behaviour that the
snippet hooks via `form.posted_successfully?`. **The first genuine enquiry confirms it.**

### A diagnostic this gives you for free

Because a submit click suppresses the abandon event, these three counts should reconcile:

```
contact_form_start − contact_form_abandon − generate_lead ≈ 0
```

A persistent gap means people are hitting Send and not completing — captcha challenges or a
submission error. Worth checking if that number grows.

---

## 2. The UTM scheme

### Format

```
https://lorinczi.com/PAGE?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN
```

### Vocabulary — use only these values

| Parameter | Meaning | Allowed values |
|---|---|---|
| `utm_source` | Which platform | `instagram` `pinterest` `tiktok` `google` `reddit` `email` `partner` |
| `utm_medium` | Which placement | `bio` `story` `reel` `post` `dm` `pin` `video` `organic` `newsletter` `flow` `onepager` |
| `utm_campaign` | Which push | kebab-case, stable, reused across a series (e.g. `ring-upgrade-series`) |

### Three rules that matter

1. **Never put UTMs on internal links.** Tagging a link from one lorinczi page to another
   restarts the session and destroys the original attribution. UTMs go on links pointing
   *into* the site from outside, only.
2. **All lowercase, hyphens not underscores, no spaces.** `Ring-Upgrade` and `ring_upgrade`
   become separate rows from `ring-upgrade` in GA4 and quietly split your data.
3. **Keep a campaign name stable for the life of the campaign.** Renaming mid-flight splits
   one campaign into two and neither looks like it worked.

### Why the mediums are what they are

GA4 sorts `instagram`, `pinterest`, and `tiktok` into **Organic Social** based on the
*source* alone, so custom mediums like `bio` and `story` are safe there — you get placement
granularity without breaking channel reporting.

Google is different: GA4 only counts it as **Organic Search** when the medium is exactly
`organic`. That's why the Google Business Profile links below use
`utm_medium=organic&utm_campaign=gbp-profile` — campaign-tagged for isolation, correct
channel preserved. A custom medium there would land the traffic in "Unassigned."

---

## 3. Paste-ready links

### Do these three first — they're ~80% of the value

The baseline says 47% of traffic is landing as "Direct", and almost all of that is untagged
social. Three link swaps reclassify most of it. Everything after this section is refinement.

| Do this | Paste this |
|---|---|
| **Instagram bio link** | `https://lorinczi.com/pages/jewelry-redesign?utm_source=instagram&utm_medium=bio&utm_campaign=profile-link` |
| **TikTok bio link** | `https://lorinczi.com/pages/jewelry-redesign?utm_source=tiktok&utm_medium=bio&utm_campaign=profile-link` |
| **Pinterest — default link on new pins** | `https://lorinczi.com/pages/jewelry-redesign?utm_source=pinterest&utm_medium=pin&utm_campaign=redesign-hub` |

Existing pins keep their untagged links; there's no need to go back and edit them. Tag new
pins from here on.

### Instagram

| Where | Link |
|---|---|
| Bio → start a redesign | `https://lorinczi.com/pages/jewelry-redesign?utm_source=instagram&utm_medium=bio&utm_campaign=profile-link` |
| Bio → contact | `https://lorinczi.com/pages/contact?utm_source=instagram&utm_medium=bio&utm_campaign=profile-link` |
| Bio → before/afters | `https://lorinczi.com/collections/custom-gallery?utm_source=instagram&utm_medium=bio&utm_campaign=profile-link` |
| Story sticker → contact | `https://lorinczi.com/pages/contact?utm_source=instagram&utm_medium=story&utm_campaign=consult` |
| Story sticker → cost guide | `https://lorinczi.com/pages/jewelry-redesign-cost?utm_source=instagram&utm_medium=story&utm_campaign=cost-guide` |
| Reel → ring upgrade series | `https://lorinczi.com/pages/redesign-engagement-ring?utm_source=instagram&utm_medium=reel&utm_campaign=ring-upgrade-series` |
| DM follow-up | `https://lorinczi.com/pages/contact?utm_source=instagram&utm_medium=dm&utm_campaign=consult` |

### TikTok

| Where | Link |
|---|---|
| Bio | `https://lorinczi.com/pages/jewelry-redesign?utm_source=tiktok&utm_medium=bio&utm_campaign=profile-link` |
| Ring upgrade series | `https://lorinczi.com/pages/redesign-engagement-ring?utm_source=tiktok&utm_medium=video&utm_campaign=ring-upgrade-series` |
| Ring → necklace videos | `https://lorinczi.com/pages/turn-ring-into-necklace?utm_source=tiktok&utm_medium=video&utm_campaign=ring-to-necklace` |

### Pinterest

| Where | Link |
|---|---|
| Redesign pins | `https://lorinczi.com/pages/jewelry-redesign?utm_source=pinterest&utm_medium=pin&utm_campaign=redesign-hub` |
| Before/after pins | `https://lorinczi.com/collections/custom-gallery?utm_source=pinterest&utm_medium=pin&utm_campaign=before-after` |
| Ring → necklace pins | `https://lorinczi.com/pages/turn-ring-into-necklace?utm_source=pinterest&utm_medium=pin&utm_campaign=ring-to-necklace` |
| Cost pins | `https://lorinczi.com/pages/jewelry-redesign-cost?utm_source=pinterest&utm_medium=pin&utm_campaign=cost-guide` |
| Heirloom pins | `https://lorinczi.com/pages/heirloom-jewelry-redesign?utm_source=pinterest&utm_medium=pin&utm_campaign=heirloom` |

### Google Business Profile — add the day it verifies

| Field | Link |
|---|---|
| Website | `https://lorinczi.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp-profile` |
| Appointment / booking | `https://lorinczi.com/pages/contact?utm_source=google&utm_medium=organic&utm_campaign=gbp-booking` |
| Services → redesign | `https://lorinczi.com/pages/jewelry-redesign?utm_source=google&utm_medium=organic&utm_campaign=gbp-services` |

### Referral partners and Reddit

| Where | Link |
|---|---|
| Divorce-attorney one-pager | `https://lorinczi.com/pages/what-to-do-with-wedding-ring-after-divorce?utm_source=partner&utm_medium=onepager&utm_campaign=divorce-attorneys` |
| Estate-attorney one-pager | `https://lorinczi.com/pages/heirloom-jewelry-redesign?utm_source=partner&utm_medium=onepager&utm_campaign=estate-attorneys` |
| Reddit answers | `https://lorinczi.com/pages/jewelry-redesign-cost?utm_source=reddit&utm_medium=post&utm_campaign=answer-pack` |

### Email

| Where | Link |
|---|---|
| Welcome flow | `https://lorinczi.com/pages/jewelry-redesign?utm_source=email&utm_medium=flow&utm_campaign=welcome` |
| Newsletter | `https://lorinczi.com/pages/contact?utm_source=email&utm_medium=newsletter&utm_campaign=monthly` |

---

## 4. Lead-source log

[lead-source-log.csv](lead-source-log.csv) — import to Google Sheets, one row per enquiry.

Columns: `date` · `name` · `source` · `page` · `stage` · `value` · `notes`

**Fill `source` and `page` by copying the two hidden fields out of the notification email.**
That's the whole workflow — no guessing, no memory.

`stage` moves `lead → consult_booked → consult_held → won | lost`. At this AOV one or two
commissions a month is meaningful, so the log matters more than the dashboard: it's the only
place a lead's source survives all the way to revenue.

---

## 5. GA4 admin checklist — the only part needing access

**Measurement ID:** `G-NL5P1911ZX` (installed as a Shopify web pixel via the Google & YouTube channel)
**GA4 account:** `51067114` · **GA4 property:** `385924732`

Deep links (signed in as the account that manages the property):

- Custom definitions → <https://analytics.google.com/analytics/web/#/a51067114p385924732/admin/customdefinitions/hub>
- Admin home → <https://analytics.google.com/analytics/web/#/a51067114p385924732/admin>
- Realtime (to confirm events fire) → <https://analytics.google.com/analytics/web/#/a51067114p385924732/realtime/overview>

### 5a. Register the custom dimensions — do this first

GA4 collects event parameters but **will not let you report on them until they're registered
as custom dimensions**, and it does not backfill. Every day this is skipped is a day of
abandonment data you can never analyze.

Admin → Custom definitions → Create custom dimension. Scope **Event** for all five:

| Dimension name | Event parameter | Status |
|---|---|---|
| Fields filled | `fields_filled` | ✅ registered 08-03 |
| Fields filled count | `fields_filled_count` | ✅ registered 08-03 |
| Message length | `message_length` | ✅ registered 08-03 |
| Wrote message | `wrote_message` | ✅ registered 08-03 |
| Seconds on form | `seconds_on_form` | ✅ registered 08-03 |
| **CTA label** | `cta_label` | ⬜ **needs registering** |
| **CTA destination** | `cta_destination` | ⬜ **needs registering** |
| **CTA position** | `cta_position` | ⬜ **needs registering** |
| **Scroll percent** | `scroll_percent` | ⬜ **needs registering** |

The four new ones are the same 5-minute job as before, same screen. Until they're registered
the events are collected but not reportable — **and GA4 does not backfill**, so every day
skipped is homepage-behaviour data that can never be analysed.

### 5b. Mark the key event — ✅ done 2026-08-03

`generate_lead` will **not** appear in the events list until someone completes a submission,
and that's expected — it fires on the success render, so it needs a real enquiry. It does not
need to have fired before you can register it.

Path used (this GA4 version merges event creation and key-event marking into one screen):
**Admin → Data display → Events → "Create event"** → type `generate_lead` → toggle
**Mark as key event** on → counting method **Once per event** → **Create with code** (correct,
since the tracking is already live on the site).

Now shows in the Key events tab as "No stream data detected", alongside `ads_conversion` and
`purchase`. It starts counting the moment the first real enquiry lands.

### 5c. Channel baseline (T0.1) — ✅ captured 2026-08-03

**Window: Jul 6 – Aug 2, 2026 (28 days). 315 sessions total, ~11/day.**

| Channel | Sessions | Share |
|---|---|---|
| Direct | 149 | 47% |
| Organic Search | 84 | 27% |
| Organic Social | 37 | 12% |
| Referral | 0 | 0% |
| _(remainder / unassigned)_ | 45 | 14% |

Captured **before** any UTM tagging, which is the point — this is the "before" picture.

**What it says.** Direct at 47% is the tell. Genuine direct traffic (someone typing the URL)
is rare for a brand with 0 branded searches, so most of that 149 is untagged social —
Instagram and TikTok in-app browsers routinely strip the referrer, and GA4 files anything it
can't attribute as Direct. Organic Social showing only 37 sessions against a 12K Instagram
following is the same leak measured from the other side.

Tagging the social links doesn't create traffic — it **reclassifies** it. Expect Direct to
fall and Organic Social to rise sharply with no change in total sessions. That shift is how
we'll know the UTM work landed.

### 5d. Confirm it's flowing

Reports → Realtime, then load any page with the contact form and type one character into the
name field. `form_start` should appear within seconds.

---

## Definition of done for Q5

- [x] Site fires `contact_form_start` / `contact_form_abandon` / `generate_lead`
- [x] Event names namespaced so they don't collide with GA4 Enhanced Measurement built-ins
- [x] Every enquiry email carries source page + first-touch channel
- [x] UTM scheme defined with paste-ready links
- [x] Lead-source log exists
- [x] Custom dimensions registered in GA4 *(all 5, 2026-08-03)*
- [x] `generate_lead` marked as key event *(2026-08-03)*
- [x] Channel baseline recorded *(Jul 6 – Aug 2, 2026)*
- [ ] **UTM links live on IG bio, TikTok bio, Pinterest pins** — the only thing left
- [ ] `generate_lead` confirmed firing on a real enquiry *(waits on the first one)*

Q5 is closed apart from three link swaps. Section 3 has them at the top.

**First checkpoint (~2026-09-01):** re-read the channel split. If Direct has fallen and
Organic Social has risen with total sessions roughly flat, the attribution is working.
