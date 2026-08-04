# Pinterest execution brief — Lorinczi Jewelry

Everything needed to act on the Pinterest account, in one place. Self-contained: assumes no
access to the lorinczi.com repo. Created 2026-08-03.

Sections are numbered to match the seven questions asked.

**Business:** lorinczi.com — a one-person custom jewelry studio in the SF Bay Area. Stacey is
the sole designer and maker. The work is redesigning jewelry people already own: resetting
diamonds, reworking heirlooms, turning rings into necklaces, redesigning engagement rings
someone has outgrown.

**Goal of this work:** shift the audience from wedding-planning brides (Pinterest's default
for jewelry) to women ~35–65 who already own the piece and want it changed. We do that by
matching the queries they type — not by targeting a demographic, which is impossible organically.

---

## 1. Full UTM campaign mapping

Format on every link:

```
https://lorinczi.com/PATH?utm_source=pinterest&utm_medium=pin&utm_campaign=CAMPAIGN
```

`utm_source` and `utm_medium` are always `pinterest` and `pin`. Only the path and campaign change.

| If the pin is about… | Base URL (path) | `utm_campaign` |
|---|---|---|
| **Default / general / unclear** | `/pages/jewelry-redesign` | `redesign-hub` |
| Ring → necklace or pendant | `/pages/turn-ring-into-necklace` | `ring-to-necklace` |
| Cost, pricing, "how much does it cost" | `/pages/jewelry-redesign-cost` | `cost-guide` |
| Heirloom / inherited / mother's or grandmother's jewelry | `/pages/heirloom-jewelry-redesign` | `heirloom` |
| Engagement ring redesign, upgrade, outgrown style | `/pages/redesign-engagement-ring` | `engagement-redesign` |
| Resetting a diamond or gemstone into a new setting | `/pages/reset-diamond-ring` | `diamond-reset` |
| Divorce, rings after a marriage ends | `/pages/what-to-do-with-wedding-ring-after-divorce` | `divorce` |
| After a spouse has died | `/pages/what-to-do-with-wedding-rings-after-your-spouse-dies` | `loss` |
| Using your own gold / stones, refining | `/pages/use-your-own-gems-metal` | `own-gold` |
| Wedding band remake | `/pages/remake-wedding-band` | `wedding-band` |
| Before/after transformation galleries | `/collections/custom-gallery` | `before-after` |

**To answer the question directly: heirloom content goes to `/pages/heirloom-jewelry-redesign`,
not to the hub.** Every topic above has its own dedicated page. The hub (`/pages/jewelry-redesign`)
is only the fallback for pins that don't fit a specific topic.

All eleven URLs verified live (HTTP 200) on 2026-08-03.

Rules: all lowercase, hyphens not underscores. Never change a campaign name once it's in use —
renaming splits one campaign into two in reporting and neither looks like it worked.

---

## 2. Voice and language rules

### 2a. Structural rule, no exceptions

**First person singular. "I / my / me" speaking to "you / your."**

Never "we / our / us" as a company voice — this is one woman, not a team. A "we" cannot be
humble; a person can. This is the brand's structural advantage over every chain competitor.

**The one exception:** the collaborative "we" meaning *Stacey + the client* is correct and
characteristic — "we'll work through style, stones, metals, shape, and scale until we arrive
at something that feels exactly right."

### 2b. Words and phrases to USE

Vocabulary: reimagine, transform, redesign, repurpose, meaningful, deeply personal, treasure,
cherish, one-of-a-kind, made just for you, your story, carry forward.

Characteristic constructions:
- Warmth stated plainly — "one of my favorite kinds of projects," "I absolutely love working with clients' gemstones," "I'm excited to see what you have."
- Money transparency — "I work backward from your budget," "I don't take any percentage of the refining payout."
- No-pressure closers — "Feel free to send the pics whenever you're ready."
- Connectors that flow — "From there…", "That said…", "And depending on…"
- Rhetorical questions to the reader, and em-dashes.

### 2c. Search language to USE (this is what shifts the audience)

- what to do with inherited jewelry
- reset my mother's diamond / grandmother's ring
- heirloom jewelry redesign
- what to do with wedding rings after divorce
- turn a ring into a necklace
- redesign an engagement ring · upgrade an engagement ring
- I don't like my engagement ring
- jewelry redesign cost

These are self-selecting. A 24-year-old does not search "what to do with my mother's ring."

### 2d. Bride-recruiting language to STOP using

Every one of these matches Pinterest's wedding-planning cluster and pulls the wrong audience:

engagement ring inspiration · engagement ring inspo · dream ring · ring goals · ring stack ·
ring stacking · bridal · bridal jewelry · wedding aesthetic · wedding inspo · unique engagement
rings · proposal · she said yes · dream proposal · wedding day · bride to be

### 2e. Corporate phrasing to STOP using

we / our / us (as the company) · our team · our clients · we understand · we're passionate about ·
we specialize in · elevate your look · unlock the value · luxury experience · bespoke solutions ·
curated collection · treat yourself · you deserve · don't miss out · limited time

Also banned as a lead frame: **"modernize."** It implies the original is obsolete — but a
*person* chose that piece.

---

## 3. Grief and divorce phrasing — concrete do/don't

These are hard constraints, not style preferences. Pinterest descriptions touching loss or
divorce follow them exactly.

### 3a. The ghost-sentence filter — apply to every sentence

Grieving people hear an implied *"…so don't feel so bad"* at the end of platitudes. **If a
sentence still works with "so don't feel so bad" appended, cut it.**

- ❌ "At least you had thirty years together." → *…so don't feel so bad.* Cut it.
- ❌ "She's in a better place." → *…so don't feel so bad.* Cut it.

### 3b. After a spouse has died (`loss` campaign) — the most protected register

**Absolutely never:** closure · moving on · move on · letting go · let go · healing · heal ·
"at least…" · "he'd want you to…" · "she'd want you to…" · any anniversary or timing hook ·
any urgency · any suggestion that redesigning is the *healthy* or *right* choice.

**Never promise healing.** No evidence supports it, and research finds objects bring comfort
*and* distress from the same piece. Stay descriptive — "many clients tell me…" — never clinical.

**Never use proof-of-love framing.** Never link spend, or the decision to redesign at all, to
how much someone loved. That is the funeral-industry guilt pattern and it is the line we do
not cross.

| ❌ Don't write | ✅ Write instead |
|---|---|
| "Find closure with a memorial redesign" | "The sentiment stays; the form changes" |
| "Ready to move on? Let me help you let go" | "You don't have to decide anything yet" |
| "Healing starts with honoring his memory" | "Whatever you feel — love, grief, even relief — is allowed here" |
| "It's been a year — time to do something with those rings" | "There is no timeline. The rings will wait, and so will I" |
| "He'd want you to wear something beautiful" | "His band and yours, made into one piece you can wear" |
| "Turn your grief into something beautiful" | "Handled by exactly one person: me" |

Also correct here: **plain words for death.** "After he died" — not "after his passing," not
"your loss journey."

Never refer to "widows" as a category. Write **to one woman**, not about a group. "Widows have
sat at my bench for twenty years" is credible because it's Stacey's specific experience;
"we understand what widows go through" is performed empathy from nobody in particular.

### 3c. Divorce (`divorce` campaign) — reclamation register

**Always offer both paths, and judge neither:** (a) melt it down entirely, erase the old form,
reclaim the value into something new; (b) rework it into something that honors what was good.
**Ask which — never assume.** Some women want the meaning honored; some want it dismantled.

**Never assume sentimentality.** Never assume she wants to keep anything.

| ❌ Don't write | ✅ Write instead |
|---|---|
| "Treat yourself to the ring you deserve" | "Yours, entirely — designed around you this time" |
| "Time for a fresh start!" | "Whatever you feel about this ring — including nothing — is allowed" |
| "Turn heartbreak into something beautiful" | "The diamond was never the marriage" |
| "Close that chapter for good" | "Melt it down, or rework it into something that honors what was good — your call" |

"Close the chapter" is acceptable **only** as one option she might pick, never as the recommendation.

### 3d. Heirloom and inherited (`heirloom` campaign) — legacy register

They feel custodianship *and* guilt — the piece sits in a drawer and that itself feels bad.
They need permission: transforming it is honoring it, not destroying it.

**Avoid:** "unlock the value" · "modernize" as the lead frame · scolding the drawer
("don't let it gather dust" shames them).

| ❌ Don't write | ✅ Write instead |
|---|---|
| "Don't let grandma's ring gather dust" | "Her stones, worn again" |
| "Unlock the hidden value in old jewelry" | "The story continues" |
| "Modernize your outdated heirloom" | "Jewelry is meant to be worn — she wore hers" |
| — | "The sentimental value doesn't disappear. It just moves into a form you can carry with you" |

### 3e. Upgrade and milestone (`engagement-redesign`, `wedding-band`) — celebration register

The caution rules above mostly don't apply. Celebratory framing is right here.

**Say:** celebrate · milestone · the next chapter *of the same marriage* · "the ring your life
grew into" · "your original diamond, at the center of what it became."

**Avoid:** anything disparaging the original ring. "Finally get the ring you deserve" implies
the first one was a compromise *and* insults the partner who chose it. Watch for upgrade
guilt — preempt it gently by noting the original stones and metal live on inside the new piece.

---

## 4. Scope — what is in each phase

My earlier note was ambiguous about this. Definitive version:

| Phase | What | Risk | Gate |
|---|---|---|---|
| **1 — Audit** | Read and report only. **Zero changes of any kind.** | None | — |
| **2 — Links** | Destination links + UTMs on existing pins. Nothing else. | Low, fully reversible | Approve the Phase 1 report |
| **3 — Text** | Rewrite pin titles and descriptions | Medium | Approve proposed text pin by pin |
| **4 — Boards** | Rename boards, rewrite board descriptions | High, least reversible | **HOLD — do not apply** |

**Phase 1 changes nothing.** It produces: the profile bio and whether the site is claimed; every
board with name, description and pin count, flagged as bride-recruiting or on-target; and the
in-scope pins with title, description and current destination link. Then propose new text in a
table and stop.

Phase 2 and 3 are separable on purpose — links are safe and reversible, text is a judgment call.
Do Phase 2 first even if Phase 3 text is still under discussion.

---

## 5. Board rename plan

**There is no old → new table yet, and I'm not going to invent one** — it depends on what boards
exist, which only the Phase 1 audit reveals. Propose the mapping in Phase 1 using the principles
below; it stays on hold as Phase 4 regardless.

**Why it's held:** renaming a board changes its URL and resets accumulated topical signal. Pins
stay attached, but the board rebuilds authority from a lower base. It is the one genuinely
hard-to-undo step here.

**Naming principles:** name boards as the query someone types, not as a category label. Board
names and descriptions are among the strongest topical signals on the account.

Target board set to propose toward:

- Heirloom Jewelry Redesign
- What To Do With Inherited Jewelry
- Reset Your Own Diamond
- Turn a Ring Into a Necklace
- Redesign an Engagement Ring
- Rings After Divorce
- Before & After Redesigns
- Jewelry Redesign Cost

**Do not delete bridal boards.** They may still carry traffic. Stop feeding them and build the
new ones alongside.

---

## 6. Hard constraints — confirmed real

These are real requirements, not file boilerplate. Enforce them.

1. **Never delete a board or a pin.** Renaming and rewriting only.
2. **Never change a pin's image.**
3. **Maximum 15 pin edits per session.** Rapid mass edits read as spam to Pinterest.
4. **Skip any pin whose link already contains `utm_source=pinterest`.**
5. **Skip any pin that doesn't link to lorinczi.com.**
6. **Never change the board a pin lives on.**
7. **If Pinterest blocks an edit, skip it and report why.** Don't retry or force.
8. **Stop and report if anything is ambiguous** — particularly whether a pin belongs in the
   grief, divorce, or celebration register. Getting that wrong is worse than leaving it alone.

Finish every session with a table: item | before | after | changed or skipped (with reason).

---

## 7. Which pins and boards are in scope

**Use the top 10 by impressions you already pulled** — that's the right list, no different one
exists here.

One refinement worth making: if Pinterest Analytics will also show **top pins by outbound
clicks**, cross-reference the two and prioritise anything appearing on both. Link changes only
matter where people actually click, and impressions alone can be high on pins nobody clicks.

Boards: all of them are in scope for the Phase 1 *audit*. None are in scope for changes until
Phase 4 is released.

---

## Two things worth knowing before starting

**Rewriting existing pins matters less than it feels like it should.** Current top pins keep
training the algorithm on the old signal regardless of their titles. The faster lever is a run
of *new* pins in the language in §2c. The rewrite stops the bleeding; new volume moves the audience.

**Judge this at 6–12 months, not 90 days.** Pinterest is slow-compounding. The number to watch
sooner is which `utm_campaign` values show up against leads in Google Analytics — that answers
"which topics produce clients" far better than the demographic chart does.
