# Consultation booking — confirmation email

Sent when someone books a consultation. Companion to
`contact-confirmation-email.md`, same voice, same sources.

The job here is different from the contact-form note. The appointment is already
secured, so this email exists to make the conversation a good one — and the single
thing that does that is having photos in hand before it starts. Stacey's own
emails say it repeatedly: she's visual, and a call without pictures is a call spent
describing jewelry in words.

---

## Subject

> Looking forward to talking on {{ appointment_date }}

*Alternatives:* "I've got you down for {{ appointment_date }}" · "Your consultation is booked"

## Body

Hi {{ first_name }},

Thank you so much — I have you down for **{{ appointment_date_time }}** (Pacific
time), and I'm really looking forward to talking.

If you have a few minutes before then, the most useful thing you can do is send me
pictures: the pieces you're thinking of using, and any inspiration images of
designs you're drawn to. I'm a very visual person, and photographs tell me so much
more than words alone. Email them to stacey@lorinczi.com whenever you're ready —
even a couple of quick phone snaps make a real difference. And if you can have the
jewelry itself to hand while we talk, better still.

If a ballpark budget is on your mind, feel free to bring it up. It doesn't need to
be exact — I always try to work backward from a number you're comfortable with.

There's nothing else to prepare, and nothing to commit to. If we talk it all
through and you decide to change nothing at all, that's a good outcome too.

And if you need to move the time, just let me know — it's never a problem.

Yours,
Stacey

[www.lorinczi.com](https://lorinczi.com)
insta: @lorinczijewelry
stacey@lorinczi.com
415.425.7394

---

## Shorter variant

Hi {{ first_name }},

Thank you so much — I have you down for **{{ appointment_date_time }}** (Pacific
time), and I'm looking forward to talking.

If you have a moment beforehand, send me a few pictures of the pieces you're
thinking of using and any designs you're drawn to — stacey@lorinczi.com. I'm a very
visual person, and photographs tell me so much more than words alone.

Nothing else to prepare, and if you need to move the time, just say the word.

Yours,
Stacey

---

## If the appointment is in the studio

Swap the "have the jewelry to hand" sentence for:

> Do bring the pieces themselves if you can — there's no substitute for seeing
> them in person, and we can look through everything together.

Add the address and any parking or buzzer detail. Worth keeping a separate version
rather than trying to write one email that covers both, since "bring the jewelry"
and "have it to hand" are the only lines that differ.

---

## Notes

**Pacific time is stated deliberately.** Most of Stacey's clients are remote —
she says so herself in several emails — and she signs off with "my time zone is
PST" when arranging calls. A booking confirmation that omits the zone is the
easiest no-show there is.

**The photo ask is the whole point of the email.** Everything else is courtesy.
Every first reply in her file asks for the same two things — the pieces, and
inspiration images — so asking before the call simply moves that step earlier and
means the conversation starts with something to look at.

**Left out on purpose:** the refining explanation, any estimate, and anything about
what the piece could become. She never speculates before seeing photos, and all
three belong in the conversation itself.

**Check the merge fields exist** in whatever sends this — `{{ appointment_date_time }}`
in particular. A confirmation that says "I have you down for" and then nothing at
all is worse than no email. If the field isn't available, cut the time from the
sentence and let Bloom's own calendar confirmation carry it.

**Reply-To:** same caveat as the contact email — it names `stacey@lorinczi.com`
rather than saying "hit reply", because Bloom sends from `email.bloom.io` unless a
Gmail account is connected under Settings → Branding → email setup.
