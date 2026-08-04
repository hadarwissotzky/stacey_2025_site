# Pinterest audience-shift prompt

Paste into a browser agent signed into the Lorinczi Pinterest account.
Written self-contained — the agent has no access to this repo.
Created 2026-08-03. Companion to [MEASUREMENT.md](../MEASUREMENT.md) § 3 for the link scheme.

---

```
CONTEXT

You are working in the Pinterest account for Lorinczi Jewelry (lorinczi.com) — a
one-person custom jewelry studio in the San Francisco Bay Area. Stacey is the sole
designer and maker. The business redesigns jewelry people already own: resetting
diamonds, reworking heirlooms, turning rings into necklaces, redesigning engagement
rings people have outgrown.

THE PROBLEM

The account currently reaches an audience that is too young. Jewelry on Pinterest is
dominated by wedding planning, so pins about engagement rings get matched to brides in
their twenties. That is the wrong audience — those women are BUYING a first ring.

WHO WE ACTUALLY WANT

Women roughly 35-65 who ALREADY OWN the jewelry and want it changed:
- Inherited a mother's or grandmother's ring and don't know what to do with it
- Outgrew the style of their own engagement ring but love the marriage
- Divorced or widowed, with rings they no longer wear as they are
- Have a diamond sitting in a drawer they want reset into something wearable

We reach them through the QUERIES THEY TYPE, not by targeting a demographic.

LANGUAGE TO USE (self-selecting for our audience)
- what to do with inherited jewelry
- reset my mother's / grandmother's diamond
- heirloom jewelry redesign
- what to do with wedding rings after divorce
- turn a ring into a necklace
- redesign an engagement ring / upgrade an engagement ring
- I don't like my engagement ring
- jewelry redesign cost

LANGUAGE TO AVOID (recruits brides)
- engagement ring inspiration / inspo, dream ring, ring goals
- bridal, wedding aesthetic, ring stacks
- unique engagement rings, proposal

VOICE RULES — these are strict

- First person singular ALWAYS. "I / my / me" speaking to "you / your".
  NEVER "we / our / us" as a company voice — it is one woman, not a team.
  The one exception: collaborative "we" meaning Stacey + the client is good and
  characteristic — "we'll work through style, stones, metals, shape, and scale."
- Warm, intimate, artisanal. Never corporate, never salesy.
- Recurring vocabulary: reimagine, transform, redesign, repurpose, meaningful,
  deeply personal, treasure, one-of-a-kind, made just for you, your story.
- Rhetorical questions to the reader and em-dashes are characteristic.
- No-pressure closers: "send the pics whenever you're ready."
- For anything touching divorce, loss, or grief: write TO one woman, not ABOUT a
  category. Never the word "widows" as a group label. Use plain words for death —
  "after he died", not "passing" or "loss journey". Prescribe the method, never the
  timing — never tell her when she should be ready.

=======================================================================
PHASE 1 — AUDIT AND PROPOSE. MAKE NO CHANGES YET.
=======================================================================

Review the account and report back:

1. PROFILE: current display name, bio/about text, and whether the website is claimed.

2. BOARDS: list every board with its name, description, and pin count. Flag which
   ones use bride-recruiting language and which already fit our audience.

3. TOP PINS: the 10 pins with the most impressions or outbound clicks. For each,
   give the title, description, and destination link.

Then PROPOSE, in a table, without applying anything:
- A rewritten profile bio in the voice above, using our query language
- For each board: keep as-is / rename / rewrite description — with the exact proposed
  new text and a one-line reason
- For each of the 10 top pins: proposed new title and description

Flag anything you think is a bad idea, and say why. Then STOP and wait for approval.

=======================================================================
PHASE 2 — APPLY. ONLY AFTER I APPROVE THE PROPOSAL ABOVE.
=======================================================================

Apply the approved changes, plus set destination links using this mapping:

- Ring turned into a necklace/pendant →
  https://lorinczi.com/pages/turn-ring-into-necklace?utm_source=pinterest&utm_medium=pin&utm_campaign=ring-to-necklace
- Pricing / cost →
  https://lorinczi.com/pages/jewelry-redesign-cost?utm_source=pinterest&utm_medium=pin&utm_campaign=cost-guide
- Heirloom / inherited / mother's or grandmother's jewelry →
  https://lorinczi.com/pages/heirloom-jewelry-redesign?utm_source=pinterest&utm_medium=pin&utm_campaign=heirloom
- Before/after transformations →
  https://lorinczi.com/collections/custom-gallery?utm_source=pinterest&utm_medium=pin&utm_campaign=before-after
- Engagement ring redesign / reset →
  https://lorinczi.com/pages/redesign-engagement-ring?utm_source=pinterest&utm_medium=pin&utm_campaign=engagement-redesign
- Divorce →
  https://lorinczi.com/pages/what-to-do-with-wedding-ring-after-divorce?utm_source=pinterest&utm_medium=pin&utm_campaign=divorce
- Anything else or unclear →
  https://lorinczi.com/pages/jewelry-redesign?utm_source=pinterest&utm_medium=pin&utm_campaign=redesign-hub

RULES
- NEVER delete a board or a pin. Renaming and rewriting only.
- NEVER change a pin's image.
- SKIP any pin whose link already contains "utm_source=pinterest".
- SKIP any pin that does not link to lorinczi.com.
- Do not edit more than 15 pins in one session — rapid mass edits look spammy.
- If Pinterest blocks an edit, skip it and note why.

Finish with a table: item | before | after | changed or skipped (with reason).
```

---

## Notes for whoever runs this

- **Board renames are the highest-impact and least reversible step.** A rename changes
  the board URL. Existing pins stay attached, but accumulated topical signal takes a
  while to rebuild. That's why Phase 1 exists.
- **Don't delete the bridal boards.** They may still pull traffic. Just stop feeding
  them and build the new boards alongside.
- **The fastest lever isn't editing history — it's volume of new pins in the new
  language.** Existing top pins keep training the algorithm on the old signal, so a
  concentrated run of new correctly-worded pins moves things faster than a rewrite.
- **Judge this in 6-12 months, not 90 days**, per GROWTH-PLAYBOOK.md. What to watch
  sooner: which `utm_campaign` values produce leads in GA4.
