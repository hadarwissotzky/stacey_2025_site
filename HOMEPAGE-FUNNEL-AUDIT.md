# Homepage & site funnel — audit and fixes

**Date:** 4 August 2026
**Basis:** live homepage structure (13 sections), live navigation (30 links), GA4 path
exploration, GSC query data, and the mobile first-viewport capture

---

## The diagnosis in one line

**The homepage is built as a jewelry shop. The business is a redesign studio.** Almost every
issue below follows from that one mismatch.

Here is the entire mobile first screen, verbatim:

> Complimentary Shipping on all Domestic Orders
> **Handmade jewelry to celebrate commitments, milestones, and every day in between.**
> `SHOP BEST SELLERS` · `BOOK A VIRTUAL APPOINTMENT`

The word *redesign* does not appear. Neither does heirloom, reset, or transform. A visitor who
never scrolls — and **83% never reach the bottom of the page** — learns that Lorinczi sells
handmade jewelry, and nothing else.

Meanwhile: search demand is redesign (`jewelry redesign` 284 impressions, `custom wedding
bands` 402), the north-star metric is consultation leads, and 38 of 106 organic clicks land on
redesign pages. The site's own data says redesign. The front door says shop.

---

## The seven issues

### 1. Above-the-fold positioning sells the wrong business
The hero headline is a generic jewelry-brand statement. The primary CTA is `SHOP BEST SELLERS`.
For a studio whose money and search visibility are both in redesign, the most valuable screen
on the site is spent on the least valuable proposition.

### 2. There is no middle rung in the funnel
The two hero CTAs are:

| CTA | Commitment level |
|---|---|
| `SHOP BEST SELLERS` | Transactional — wrong business |
| `BOOK A VIRTUAL APPOINTMENT` | **Very high** — a stranger scheduling a call |

Nothing sits between browsing and booking. The natural low-commitment yes — *see what's
possible*, *what does it cost* — is missing from the fold entirely.

Worth noting: `/pages/jewelry-redesign-cost` has the highest search visibility of any page on
the site (1,793 impressions) and is **not a homepage CTA at all**.

### 3. The page is a brochure, not a funnel
13 sections. Only **16.8% of homepage views fire a scroll event** (GA4 fires at 90% depth), so
sections 5–13 are effectively unpublished. Everything persuasive about redesign sits below the
point most people stop.

### 4. The navigation has 30 links, shop first
Roughly 12 shop links, 10 redesign links, 8 utility. Shop categories come first. The 10
redesign links are a **flat list with no hierarchy** — no "start here", no sense of sequence.

Thirty choices is a decision cost, and it shows in the path data: of 138 visitors who continue
past the homepage, no single destination gets more than 7%. That isn't curiosity, it's the
absence of a recommended path.

### 5. "Where to Start" is about the wrong thing
There is a page called **Where to Start** — the obvious funnel entry by name. Its actual content
is commitment/bridal jewelry: *"Your love story is one-of-a-kind — celebrate it with a ring as
unique as you."*

So the page best positioned to be the redesign on-ramp is bridal, and it's buried in a dropdown.

### 6. A duplicated call to action
Sections 3 and 4 both render **"Explore Jewelry Redesign"**. Two adjacent identical CTAs is a
tell that the page grew by accretion rather than being designed as a path.

### 7. Email capture is the last thing on the page
The newsletter block is section **13 of 13** — seen by roughly 17% of visitors. Goal G-B in
`EXECUTION-PLAN.md` is standing up the owned audience, and its only capture point on the
homepage is below the fold of the fold.

---

## The fixes, in priority order

### Fix 1 — Rewrite the fold *(highest leverage, smallest change)*

Change the headline to carry the actual business, and reorder the CTAs so redesign leads.

Headline options in Stacey's voice:

> **"Your jewelry, reimagined — and made just for you."**
> *I redesign the pieces you already own: heirlooms, engagement rings, the gold in the drawer.*

> **"That ring in your drawer deserves to be worn."**
> *Bring me your stones and your gold, and we'll design something you'll actually wear.*

CTAs, in this order:

| Position | Label | Destination |
|---|---|---|
| Primary | `START A REDESIGN` | `/pages/jewelry-redesign` |
| Secondary | `SEE BEFORE & AFTERS` | `/collections/custom-gallery` |
| Tertiary | `SHOP READY-TO-SHIP` | `/collections/ready-to-ship` |

That's the three-door structure Sprint 1 of `TRAFFIC-EXECUTION-PLAN.md` specified and which was
never built. **"Book a Virtual Appointment" moves off the fold** — it's the right ask, at the
wrong moment, for someone who arrived four seconds ago.

### Fix 2 — Put proof above the argument
Before/after images are the single most persuasive asset a redesign jeweler owns, and they're
currently below the scroll cliff. Move one before/after pair into the first two screens. Given
83% never reach the bottom, proof has to arrive early or not at all.

### Fix 3 — Put the navigation on a diet
Target ~15 links. Concretely:

- **Redesign first**, before shop — it's the business and the search demand
- Collapse the 10 flat redesign links behind one **Redesign** entry, with a genuine
  "Start here" at the top
- Merge shop categories: Rings / Necklaces / Earrings / Bracelets / All — drop the overlapping
  All Sale, ALL Jewelry, Ready to Ship, Men's Jewelry duplication from the top level
- Move Jewelry Care, Ring Sizing, Gift Certificates to the footer where utility belongs

### Fix 4 — Fix or retire "Where to Start"
Either rename it to what it is (**Commitment Jewelry**) and let a genuine redesign on-ramp take
the name, or rewrite it as the redesign entry point. Right now the name promises orientation and
the page delivers bridal.

### Fix 5 — Move email capture up
Somewhere in sections 3–5, not 13. A lead magnet ("what to do with inherited jewelry") converts
far better than a bare newsletter box.

### Fix 6 — Delete the duplicate section
Sections 3 and 4 carry the same CTA. Keep the stronger one.

---

## How to judge whether it worked

**Do not use engagement rate.** It can rise while leads fall — more browsing looks like better
engagement. You now have the right instruments:

- `contact_form_start` — did more people begin an enquiry
- `generate_lead` — did more people finish one
- Homepage → `/pages/jewelry-redesign` share of continuations (today ~9%)
- Shop-vs-redesign split of continuations (today roughly **30% shop / 17% redesign**)

**Snapshot the baseline before touching anything.** Changing the page and the measurement at
once is how you end up unable to attribute either.

**One change at a time.** Fix 1 alone is most of the available gain; ship it, wait two weeks,
read it. A simultaneous six-part redesign tells you nothing about which part worked.

---

## Two things not to do

**Don't rebuild the homepage.** The fold is the problem. Sections 5–13 are barely seen, so
rewriting them is effort spent where nobody looks.

**Don't optimise the homepage for Instagram.** The bio link now points at
`/pages/jewelry-redesign`, so that traffic no longer lands here. The homepage's remaining
audience is brand searchers (`lorinczi`, position 2.2) and returning visitors — people who
already know who Stacey is. It doesn't need to introduce the brand. It needs to route.
