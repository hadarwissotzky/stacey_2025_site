# Is lorinczi.com a convertible site?

**Date:** 6 August 2026
**Question:** before expanding traffic, will the site convert the traffic it gets?
**Conversion defined as:** contact-form submission, or a booked virtual consultation.
**Basis:** live site walked at 375×812 and desktop on 6 Aug, GA4 baseline (Jul 6 – Aug 2),
GSC (May 3 – Aug 2), `MEASUREMENT.md`, `HOMEPAGE-FUNNEL-AUDIT.md`.

---

## The answer

**Yes — expand. The site is convertible, and it is not the bottleneck.**

The conversion machinery is genuinely good, better than most solo studios have. Three specific
holes will waste a share of new traffic, and all three are hours of work, not a redesign. Fix
those, then pour traffic in.

**Do not wait for conversion data before expanding.** That is the important part. At 11
sessions/day you cannot get a read on conversion rate in any useful timeframe — see §4. The
traffic is what produces the data, not the other way around.

---

## 1. What is genuinely working

**The contact form is the right form for this business.** Short page (1,548px on mobile), form
begins at 534px, and it asks for almost nothing: Name and Email required, Phone and Budget
explicitly optional, one open message field. Then the thing that matters — **drag-and-drop photo
upload**, sitting directly under the message box.

That upload field is the single best conversion decision on the site. The whole business runs on
"send me a picture of what you have," the homepage CTA says exactly that, and the form actually
accepts it. Most Shopify contact forms cannot, and the mismatch kills the enquiry.

The heading is in Stacey's voice and defuses the exact hesitation a first-timer has:
*"Not sure where to start? I'm here to answer your questions."*

**Booking works end to end.** `/products/free-consultation` runs Cowlendar. Walked it live: the
calendar opens on click, August has open availability, picking a date returns 16 slots from
9:00 AM to 4:30 PM, and the timezone auto-detected to America/Los_Angeles. No account required,
no card, $0 product. *(Stopped before confirming — completing it would put a real appointment on
Stacey's calendar.)*

**The homepage fold has been fixed** since the 4 August audit. It now reads:

> **Your jewelry, reimagined, and made just for you.**
> Bring me a piece you own, or an idea you can't find. We'll design it together.
> `SEND ME YOUR PHOTOS` · `BOOK A FREE CONSULTATION`

Both CTAs sit above the fold on a 375×812 screen, verified by screenshot. That was Fix 1, the
highest-leverage item in the funnel audit, and it shipped. The two-rung structure is right too:
a low-commitment ask (send a photo) *before* the high-commitment one (book a call).

**Tracking is live.** `contact_form_start`, `contact_form_abandon`, `generate_lead`, `cta_click`,
`scroll_depth` all firing since 3 August, with first-touch source on every enquiry email. When
traffic arrives, it will be measurable.

---

## 2. The three holes

### Hole 1 — the two newest landing pages have no CTA near the top

Measured on mobile, distance from the top of the page to the **first** conversion CTA:

| Landing page | GSC clicks (90d) | Page length | First CTA | On-page form |
|---|---|---|---|---|
| Homepage | 43 | 7.8 screens | **0.5** | 6.9 |
| `/pages/jewelry-redesign` *(IG bio target)* | — | 9.8 | **0.5** | 8.2 |
| `/pages/jewelry-redesign-cost` | 12 | 12.2 | **0.5** | 11.0 |
| `/pages/turn-ring-into-necklace` | 12 | 11.1 | **0.5** | 9.9 |
| `/pages/heirloom-jewelry-redesign` | — | 7.0 | **0.5** | 5.8 |
| `/pages/jewelry-redesign-san-francisco` | **14** | 6.3 | **3.4** ⚠️ | 5.1 |
| `/pages/what-to-do-with-wedding-ring-after-divorce` | new | 12.7 | **5.3** ⚠️ | 11.5 |
| `/collections/custom-gallery` | — | 6.1 | **4.9** ⚠️ | none |

Four pages inherited the hero CTA pattern. Three did not.

**The San Francisco page is the worst of it** — it is the **#2 organic landing page on the whole
site** (14 clicks in its first quarter, from nothing) and a visitor must scroll three and a half
screens before the site offers them any way to make contact. Local intent is the most
transactional intent there is; someone searching "jewelry redesign san francisco" is closer to
buying than anyone else who lands here, and they get a brochure.

**The divorce page** asks for five and a half screens of scrolling first. That's the ICP page
built specifically for a high-emotion, high-intent moment.

**The custom gallery** — the before/after proof, the most persuasive asset a redesign jeweler
owns — carries CTAs only at 4.9 of 6.1 screens, at the very bottom, and has no on-page form at
all. Bottom placement after the proof is defensible. Having *nothing* at the top is not, because
a visitor who is convinced by image three has to hunt.

### Hole 2 — the middle of every long page is a CTA desert

These pages run 6 to 13 screens. The pattern is one CTA at the top, one near the bottom, and
several screens of nothing between:

- **Cost page:** CTA at 0.5 → 3.5 → then nothing until **9.4 screens**
- **Ring-to-necklace:** 0.5 → 4.0 → nothing until **8.8**
- **Divorce page:** 5.3 → nothing until **10.6**

The on-page contact form sits at 5.1–11.5 screens on every one of them. GA4's 90% scroll event
fires on **16.8%** of homepage views. Whatever the true figure is per page — the new 25/50/75
events will tell us within a fortnight — a form at nine screens is being seen by a small
minority. It is functionally decorative.

**There is no sticky or persistent CTA anywhere on mobile.** Once the hero scrolls away, a
visitor has to open the hamburger to find `Contact Me` (item **26 of 35**).

### Hole 3 — no direct contact detail anywhere

No email address and no phone number in the footer, the contact page, or anywhere else. The form
is the only channel.

For most of the catalogue that's fine. For the ICPs this business actually targets — a woman
deciding whether to hand over her dead husband's ring to a stranger on the internet — a visible
human address is a trust signal, and its absence is felt precisely where the stakes are highest.
Some people will not fill in a form for that first contact. They want to write to a person.

### Smaller, still worth fixing

- **The booking widget is off-brand at the highest-intent moment.** The modal opens with
  *"🚀 Book a 30 minutes meeting"* — Cowlendar's default, rocket emoji, broken grammar. Every
  other surface on this site is warm and unmistakably one person. This reads like a SaaS demo
  request. Cowlendar's settings allow custom copy; make it Stacey's.
- **Navigation is still 35 links, shop-first.** Nine shop links come before the first redesign
  link. Fix 3 from the funnel audit has not shipped. Lower priority than it looks, though — the
  fold fix means most visitors no longer need the nav to find the path.
- **The hero image doesn't say redesign.** The headline promises reimagined jewelry; the photo
  behind it is coral pendants. A before/after pair would make the fold argue for itself.

---

## 3. Does the site support the range of intent? Mostly yes

| Visitor arrives wanting… | Page that serves it | Path to convert |
|---|---|---|
| To know what it costs | `/pages/jewelry-redesign-cost` | ✅ CTA at 0.5 screens, "Get My Exact Quote — Free" at 3.5 |
| To see it's real before committing | `/collections/custom-gallery` | ⚠️ proof is strong, CTA only at the bottom |
| To understand the service | `/pages/jewelry-redesign` | ✅ both CTAs at 0.5 screens |
| A specific transformation | `/pages/turn-ring-into-necklace` | ✅ photo CTA at 0.5 |
| A local jeweler | `/pages/jewelry-redesign-san-francisco` | ❌ nothing until 3.4 screens |
| Help at a life event | divorce / spouse-dies pages | ❌ nothing until 5.3 screens |
| To just talk to someone | `/pages/contact` | ✅ excellent |

The intent *coverage* is good — there is a page for each of the real entry motivations, which is
more than most sites this size manage. The gap is in the last column, not the middle one. The
content exists; on three pages the ask doesn't.

---

## 4. What the data can and cannot tell you

**There is currently no conversion data. None.** Not a low number — an absent one.

- `generate_lead` went live **3 August**. Three days ago.
- `lead-source-log.csv` contains one row, and it is the example row.
- No enquiry has yet been recorded through the instrumented path.

Three days at ~11 sessions/day is roughly 33 sessions. That is not evidence of anything, in
either direction. Anyone reading "zero leads" as a verdict on the site is reading noise.

**And this is why waiting is the wrong call.** To get a first honest read on conversion rate you
need roughly 8–10 leads. At a plausible 1–2% for a high-consideration commissioned service,
that's **500–1,000 sessions**. Current traffic is ~330 sessions/month.

> **Waiting for proof at today's volume costs 2–3 months and still gives a wide, shaky number.**

The sequence that actually works is the reverse: close the three holes this week, then expand
traffic, and let the incoming traffic generate the conversion data as it arrives. The
instrumentation to read it is already in place — that was the whole point of the 3 August work.

**One caveat on the plumbing.** End-to-end form submission has never been tested, because
hCaptcha blocks automation (documented in `MEASUREMENT.md`). `generate_lead` was verified by
simulating the success render, so the code path is proven but Shopify's own success render
setting the flag is not. **The first real enquiry confirms it.** Worth having Stacey submit one
test enquiry from her phone — that single action closes the last unknown in the measurement
chain, and takes two minutes.

---

## 5. What to do, in order

**Before expanding traffic — a few hours of work**

1. ✅ **Hero CTA on the San Francisco page** — *shipped 6 Aug.*
2. ✅ **Hero CTA on the divorce and spouse-dies pages** — *shipped 6 Aug.*
3. ✅ **CTA above the before/afters on `/collections/custom-gallery`** — *shipped 6 Aug.*
4. ⬜ **Rewrite the Cowlendar modal heading** in Stacey's voice. Kill the rocket. *Lives in the
   Cowlendar app settings, not the theme — needs an admin login.*
5. ⬜ **Have Stacey submit one real test enquiry** to confirm `generate_lead` fires on Shopify's
   success render.

### What shipped on 6 August

One `buttons_cta` block added to the hero of five page templates, and a `button_cta` block added
to the `CUSTOM GALLERY` rich-text section above the product grid. Purely additive — 13 lines per
file, no existing content touched.

| Template | Page | First CTA: before → after |
|---|---|---|
| `page.jewelry-redesign-san-francisco.json` | SF | 3.4 screens → **0.4** |
| `page.jewelry-redesign-marin.json` | Marin | 3.4 → **0.4** |
| `page.jewelry-redesign-palo-alto.json` | Palo Alto | 3.4 → **0.4** |
| `page.divorce-guide.json` | divorce | 5.3 → **0.4** |
| `page.widow-guide.json` | spouse dies | 5.3 → **0.4** |
| `collection.custom-gallary-collection.json` | gallery | 4.9 → **0.5** (above the grid) |

Marin and Palo Alto were not in the original audit — they carry the same local-intent traffic as
the SF page and had the identical gap, so they were fixed in the same pass.

Button labels follow the `/pages/heirloom-jewelry-redesign` pattern exactly: *Send me your
photos* (primary) and *Book a free consultation* (secondary). The two life-event pages use
*Book **your** free consultation*, matching the wording already on those pages, and keep the
playbook's rule that every CTA be concrete, small and reversible — sending a photo commits
nothing.

**Mobile button geometry — fixed in CSS, not per page.** As shipped, the hero pair rendered
ragged on a phone: each button sized to its own label (210px vs 262px) and the pair sat flush
left. The cause is in `section-image-banner.css`, which gives each button `flex-grow: 1` and
`min-width: 22rem` with no centring — so this affected **all 15 hero CTA pairs on the site**, not
just the new ones. Fixed with one rule appended to `assets/banner-custom.css`: on screens under
750px both buttons are `26rem` wide and the pair is centred, matching the homepage hero. Desktop
is inside no media query change and renders exactly as before. Measured after: both buttons
250px, left 63 / right 313 on a 375px viewport — symmetric to the pixel.

**A caching note for whoever verifies this.** Shopify serves these pages from a per-server
`page_cache`, and after a push the storefront returns a mix of fresh and stale renders for
10+ minutes — the same URL can show the new CTA on one request and not the next. Ground truth is
the theme file, confirmed by pulling it back (done, all six). If a page still looks stale later,
open it in the theme editor and click Save to force the purge.

**Then expand traffic.** The gate in `GROWTH-PLAYBOOK.md` ("no paid spend until a proven
conversion path") is satisfied for *organic* expansion — the path exists and is instrumented.
Keep the gate for paid until a real lead has actually come through it.

**Alongside, as traffic builds**

6. **Add a mid-page CTA** to any page over 6 screens — roughly every third screen.
7. **Add a sticky mobile CTA bar** on the redesign pages. This is the highest-leverage of the
   slower fixes and the one most worth measuring properly.
8. **Put an email address in the footer.** Trust signal for the grief and heirloom ICPs.
9. **Trim the navigation** to ~15 links, redesign before shop. Lower priority now that the fold
   routes correctly.

**What to read in two weeks**

The `scroll_depth` 25/50/75 events land the real answer to "does anyone reach the form." If the
50% figure is low on the long pages, priorities 6 and 7 move to the top of the list, and the
argument for shortening those pages becomes concrete rather than theoretical.

---

## The one-line version

The machinery converts; the invitation is missing on three pages. That is a week of small fixes,
not a rebuild — and the honest constraint is still traffic, not conversion.
