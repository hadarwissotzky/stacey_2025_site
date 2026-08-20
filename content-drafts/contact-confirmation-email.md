# Contact form — automatic confirmation email

Sent the moment someone submits the contact form. Written from the patterns in
`stacey-info/Stacey emails to clients.md` — see the notes at the bottom for what
was drawn from where.

Kept deliberately short. This isn't the real reply; it's the note that buys Stacey
a day or two and gets the photos moving in the meantime.

---

## Subject

> Thank you — I've got your note

*Alternatives:* "Thank you for reaching out!" · "Your note just landed with me"

## Body

Hi {{ first_name }},

Thank you so much for reaching out! Your note just landed in my inbox.

I read every one of these myself — there's no team here, it's just me — so I'll
write back to you personally, usually within a day.

In the meantime, if you'd like to get a head start, the most useful thing you can
send is pictures: the pieces you'd like to reuse, and any inspiration images of
designs you're drawn to. I'm a very visual person, and photographs tell me so much
more than words alone. Just email them over to me at stacey@lorinczi.com whenever
you're ready.

And if you have a ballpark budget in mind, feel free to mention it. It doesn't need
to be exact — I always try to work backward from a number you're comfortable with,
and there's no design fee to begin.

No rush at all. Send whatever you have whenever you're ready.

Yours,
Stacey

[www.lorinczi.com](https://lorinczi.com)
insta: @lorinczijewelry
stacey@lorinczi.com
415.425.7394

---

## Shorter variant

For a plain confirmation that doesn't ask for anything.

**Subject:** Thank you — I've got your note

Hi {{ first_name }},

Thank you so much for reaching out! Your note just landed in my inbox, along with
any photos you sent.

I read every one of these myself — there's no team here, it's just me — so I'll
write back to you personally, usually within a day or two.

Feel free to send anything else along in the meantime: photos of the pieces you'd
like to reuse, or images of designs you love — just email them to me at
stacey@lorinczi.com. There's no rush.

Yours,
Stacey

---

## Why it names the address instead of saying "hit reply"

This is sent by Bloom, and Bloom's automated emails go out from `email.bloom.io`
unless a Gmail account is connected to it. If they go out from Bloom's own address,
"just hit reply" sends the photos to Bloom's relay rather than to Stacey — and
they'd be lost silently, while the client believes they've sent them. Worse than
never asking.

Naming `stacey@lorinczi.com` works no matter how Bloom is configured, and it's what
Stacey writes in her own replies anyway ("You can email them to Stacey@Lorinczi.com
whenever you're ready").

**Upgrade if Gmail is connected.** Bloom can send automated email from Stacey's own
inbox — Settings → Branding → email setup. With that connected, the note arrives
from her address, replies come straight back, and the whole thread sits in her
inbox where the rest of the conversation will live. Worth doing on its own merits.
Once it's set, this line can become:

> Just hit reply and attach them — this comes straight to me.

Confirm it first: send yourself a test, reply with a photo attached, and check it
actually lands in her inbox rather than in Bloom.

Two smaller things worth knowing:

- **Big photo sets can bounce.** Modern phone photos run 3–5MB each, and most mail
  providers cap a message around 25MB, so a reply with ten pictures may fail. If it
  becomes a pattern, the fix is a line inviting people to send them in a couple of
  emails.
- **Watch the junk folder.** Stacey already notes in her Instagram replies that
  messages from strangers land in junk. A reply to her own outgoing email is far
  less likely to, which is another reason "hit reply" beats "email me at…".

## Where to set it up

Shopify doesn't auto-reply to contact form submissions, so this has to be sent by
whatever receives the enquiry:

- **Bloom** — its lead management can trigger automated follow-up emails on a new
  lead, which is the natural home now that enquiries copy through to Bloom.
  It also gives you `{{ first_name }}` from the form.
- **A Gmail template / canned response** — the zero-setup option: Stacey pastes it
  when she can't reply properly the same day.

If the merge field isn't available, "Hi there," works — she uses it often.

## Notes on the voice

Everything here is lifted from her own patterns rather than invented:

| Line | Where it comes from |
|---|---|
| "Thank you so much for reaching out!" | opens virtually every first reply in the file |
| "there's no team here, it's just me" | matches the solo-studio framing throughout |
| "I'm a very visual person" | near-verbatim from the Bruno email |
| photos of the pieces + inspiration images | the standard first ask in every enquiry reply |
| "It doesn't need to be exact" | verbatim from the Bruno email on budget |
| "work backward from a number you're comfortable with" | her recurring budget line |
| "there's no design fee to begin" | appears in the Laurie and Lael emails |
| "Send whatever you have whenever you're ready" | close paraphrase of "feel free to send the pics whenever you're ready" |
| "Yours, Stacey" | her most frequent sign-off on first replies |

**Deliberately left out**, to keep it short and because they belong in her real
reply rather than an automatic one:

- The refining explanation and "I don't take any percentage." It's a strong
  differentiator, but it's a paragraph, and it only applies once she knows there's
  gold involved.
- Anything promising what the piece could become — she never speculates before
  seeing photos.
- "Repurposing heirlooms is one of my favorite kinds of projects." True to her
  voice, but an automatic email can't know the enquiry is a repurposing job.
