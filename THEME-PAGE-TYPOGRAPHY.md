# Page typography & spacing spec

The reference is **`/pages/jewelry-redesign`**. `/pages/heirloom-jewelry-redesign`
matches it exactly; treat either as canonical. Every content page should measure
the same. Values below are computed values on the live site at 1440px and 390px —
they are identical at both widths unless noted.

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

```
1440 and 390. For the section holding the prose:
  lead font-size                     21px
  heading font-size / transform      21px / uppercase
  body font-size / line-height       16px / 25px
  gap lead → first heading           70px
  gap body → heading                 58px
  gap heading → body                 4px
```

Measure gaps between *consecutive siblings*, not between elements of a given tag —
filtering out empty paragraphs hides the spacers that produce heirloom's rhythm and
will tell you two pages match when they do not.
