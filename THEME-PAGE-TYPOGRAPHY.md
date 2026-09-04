# Page typography & spacing spec

**Desktop reference: `/pages/jewelry-redesign`.** `/pages/heirloom-jewelry-redesign`
matches it at 1440px; treat either as canonical there.

**Mobile reference: `/pages/heirloom-jewelry-redesign`** (set 2026-09-04). Below
750px the page does *not* just reflow the desktop scale, it uses its own, which
is in "Mobile" below. Where the two specs disagree, the width decides.

Values are computed values measured on the live site.

Verify a page with the browser, not by reading CSS: several stylesheets on this
theme set the same properties with `!important`, so what a rule says and what an
element renders are often different things.

## The numbers

| Element | Value |
|---|---|
| Banner heading | 37px Nexa, uppercase |
| Banner strapline | 22px GoudyOldStyle |
| Banner buttons | 2 — "Send me your photos" (primary), "Book a free consultation" (secondary) |
| Lead paragraph | 21px GoudyOldStyle |
| Section heading | 21px / 30px Nexa, `text-transform: uppercase` |
| Body copy | 16px / 25px GoudyOldStyle |
| List items | 16px |
| Inline links in body | 16px GoudyOldStyle (**not** the UI face) |
| Content width | 80% of viewport, 90% below 750px |
| Inner padding | 90px inline desktop, 2rem mobile |

## The gaps

| Between | Gap |
|---|---|
| lead paragraph → first heading | **70px** |
| body text → heading | **58px** |
| list → heading | **58px** |
| heading → body | **4px** |
| paragraph → paragraph | **16px** |
| paragraph → list | 16px |

## When prose spans two sections

`/pages/use-your-own-gems-metal` runs its copy across a rich-text section and a
custom-liquid section. Together they are one flow, so the join must read like any
other body-to-heading gap: **58px**, not the sum of both sections' padding.

Zero `padding_bottom` on the upper section and `padding_top` on the lower one,
override any inline padding on the inner wrapper, and let the heading's margin
supply the gap. The previous paragraph's 16px does not collapse across the
boundary on desktop, so the first heading needs `margin-top: 42px` there to land
on 58 — but on narrow screens, with every padding at zero, the margins *do*
collapse and it needs the full 58. Set both.

## How to hit them

Section `custom_css`, on the section holding the prose:

```
h2 {font-family:"Nexa",sans-serif !important; margin-top:58px; margin-bottom:0.4rem;}
```

and in the page-level style block:

```
#MainContent .main-page-title ~ .rte h2,
#MainContent .main-page-title ~ .rte h3
  {font:400 21px/30px Nexa,sans-serif!important;text-align:left!important;text-transform:uppercase;}

#MainContent .main-page-title ~ .rte p,
#MainContent .main-page-title ~ .rte li,
#MainContent .main-page-title ~ .rte a
  {font:400 1.6rem/25px "GoudyOldStyle",sans-serif!important;
   color:rgba(var(--color-foreground),0.75)!important;text-align:left!important;}

#MainContent .main-page-title ~ .rte > p:first-child
  {font:400 2.1rem/25px "GoudyOldStyle",sans-serif!important;margin-bottom:70px!important;}
```

The last rule is for pages whose lead is a plain `<p>`. On heirloom and
jewelry-redesign the lead is an `<h4>`, which already resolves to 2.1rem — do not
retag paragraphs as headings to get the size, it pushes the heading hierarchy
further out of shape on pages that already have no visible `h1`.

## Mobile, below 750px

The desktop scale does not survive a 390px screen: a 21px lead paragraph over
16px body reads as a wall, centred headings fight left-aligned copy, and 10px
gutters put text against the glass. Measured on `/pages/heirloom-jewelry-redesign`:

| Element | Desktop | **Mobile** |
|---|---|---|
| Lead paragraph (`h4`) | 21px | **16px** |
| Section heading `h2`/`h3` | 21px / 30px | **20px / 30px** |
| Heading alignment | left | **left** (not centred) |
| Body `p` / `li` | 16px / 25px | **17px / 25px** |
| Content width | 80% | 90% |
| Gutters (`__main-padding` left/right) | 90px | **2rem** |
| Vertical padding (`__main-padding`) | 5rem | **3rem** |
| List indent (`.rte ul/ol` padding-left) | 20px | **0**, flush with the copy |

Body copy is deliberately one step *larger* than the lead on mobile. On a narrow
screen the lead's job is to introduce, not to dominate, and 17px body is the
readable size. Do not "fix" the inversion.

Vertical rhythm is inherited, not re-specified: the spacer paragraphs that
produce the desktop 70 / 58 / 4 are still doing the work, but the smaller lead
and larger body shift the result to **63 / 57-59 / 4** at 390. Those are the
numbers to check against, not the desktop ones.

### The CSS

In the page's style block (the `custom-liquid` section that holds
`#MainContent .main-page-title ~ .rte` rules), one media query:

```
@media screen and (max-width:749px){
#MainContent .main-page-title ~ .rte h2,#MainContent .main-page-title ~ .rte h3
  {font:400 20px/30px Nexa,sans-serif!important;text-align:left!important;}
#MainContent .main-page-title ~ .rte p,#MainContent .main-page-title ~ .rte li,
#MainContent .main-page-title ~ .rte a
  {font-size:calc(var(--font-heading-scale) * 1.7rem)!important;padding:0!important;}
.rte ul,.rte ol{list-style-position:inside;padding-left:0rem;}
}
@media screen and (max-width:749px){#MainContent [class*="__main-padding"]
  {padding-top:3rem!important;padding-bottom:3rem!important;
   padding-left:2rem!important;padding-right:2rem!important;}}
```

and in the `main` section's own `custom_css`, which Shopify scopes to
`#shopify-section-…__main` for you, so a bare `h4` is enough:

```
@media screen and (max-width: 749px) {{width: 90%;} h4 {font: 400 1.6rem / 25px "GoudyOldStyle" !important;}}
```

### Mobile traps

**The heading-centring rule in `assets/lorinczi-custom.css` is gone** (removed
2026-09-04). It listed pages as `.page-<handle> #MainContent .main-page-title ~
.rte h2` — one class more specific than the page's own `#MainContent … h2`, so
no page-level `text-align:left!important` could ever beat it. If mobile headings
ever centre again, that block has come back; delete it rather than overriding.

**Put the mobile block in the LAST enabled style block on the page, not the
first.** Several templates carry two sections with `#MainContent .main-page-title
~ .rte` rules (jewelry-redesign-cost and redesign-your-engagment do), and on
redesign-your-engagment the later one is confusingly named `related_links`.
Equal specificity means source order decides, so a block inserted into the
earlier section loses to the 1.6rem body rule in the later one and nothing
changes on the page.

**`list-style-position: inside` is usually already set**, so setting it again
changes nothing. The declaration that actually moves bullets is
`padding-left: 0`. Measure the `li` left edge against the paragraph left edge,
not the CSS.

**Measure both widths on every change.** These rules live in media queries next
to desktop rules with the same selectors; it is easy to move both. Confirm the
desktop numbers are untouched before calling it done.

### Conformance

**Rolled out 2026-09-04. All fifteen content pages measure to the mobile spec**
at 390px: lead 16 · heading 20 left · body 17 · gutters 20px · lists flush.
Desktop was re-measured on all of them and is unchanged.

The pages carrying the block:

```
heirloom-jewelry-redesign     jewelry-redesign           jewelry-redesign-cost
jewelry-redesign-cost-in-san-francisco                   gold-allergy-rings
ring-resizing-cost            reset-diamond-ring         remake-wedding-band
turn-ring-into-necklace       divorce guide              widow guide
jewelry-redesign-san-francisco  -marin  -palo-alto       redesign-engagement-ring
custom-engagement-rings (template only — the page is unpublished, 404s)
```

Two content-shape exceptions, both fine:

- **jewelry-redesign-cost has no lead paragraph.** It opens straight on an `h2`,
  so there is nothing for the lead rule to size. Its body copy is 17px as
  specified.
- **Some pages lead with an `h4`, others with a plain first paragraph.** The
  mobile block sizes both: `h4` from the `main` section's `custom_css`, and
  `.rte > p:first-child` from the page style block.

### Two desktop deviations, pre-existing, not touched by the rollout

Recorded so they are not mistaken for rollout damage. Both were already there:

- `/pages/jewelry-redesign-cost` renders `h2` at **28px** on desktop, not 21.
- `/pages/gold-allergy-rings` renders its lead at **16px** on desktop, not 21.

## Traps, all of which have cost time

**The 500-character cap on section `custom_css` is enforced on push.** `shopify
theme push` fails with "Custom CSS contains more than 500 characters" and writes
nothing. Sections already live at 500+ were set through the theme editor, which is
more permissive — do not take them as proof the limit is soft.

To buy room: drop `calc(var(--font-heading-scale) * X)` and write plain rem. The
scale is 1.0 on this store and several sections already do this. Merge selectors
that share a declaration. Delete rules for elements the section does not contain.

**Heirloom gets its 58px from empty spacer paragraphs in the page body**, 25px
each, one before every heading — not from CSS. Use `margin-top` instead of adding
spacer markup to new pages; it produces the same number and survives content edits.

**Cloning a template inherits its typography, not just its section order.**
Rebuilding gold-allergy-rings as a clone of the cost template silently replaced its
heading rules with the cost page's 28px ones. Re-apply page-specific styling after
any clone, and re-measure.

**The cost-page shell ships the wrong defaults** — 28px headings, no heading top
margin, no lead-paragraph rule. Every page cloned from it has needed the same three
corrections. Fix the shell if this recurs.

**A page body only renders if the template's `main-page` section is enabled.**
`page.your-own-metal.json` has `"disabled": true` on `main`, so that page's admin
body is dead text. Check this before concluding copy is "missing".

**Every page here has exactly one `h1` and it is visually hidden.** The banner
heading is an `h2` carrying an `h1` class. This is sitewide and predates the
current work; noted so nobody "fixes" one page in isolation.

## Checking a page

Both widths, every time. For the section holding the prose:

```
at 1440                              at 390
  lead                21px             16px
  heading             21px             20px
  heading align       left             left
  body / line-height  16px / 25px      17px / 25px
  gutters             90px             2rem
  list padding-left   20px             0
  gap lead → heading  70px             63px
  gap body → heading  58px             57-59px
  gap heading → body  4px              4px
  heading transform   uppercase        uppercase
```

The mobile gaps are not the desktop ones. They come out of the same empty
spacer paragraphs, but the lead is 5px smaller and the body 1px larger at 390,
so the arithmetic lands at 63 and 57-59 rather than 70 and 58. Measure between
*text-bearing* blocks; between raw siblings you will read 21 / 17 / 4 and think
the page is broken.

Measure gaps between *consecutive siblings*, not between elements of a given tag —
filtering out empty paragraphs hides the spacers that produce heirloom's rhythm and
will tell you two pages match when they do not.
