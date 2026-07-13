# Tŷ Cerrig — Handover Care Sheet

**What this is:** the one page that explains everything anyone will ever
need to keep tycerrig.com alive. Designed so that nothing on the site
requires updating — no prices, no news, no dates, no review counts.

## What the site never does

- **Never takes money.** Booking and payment happen on Pitchup and the
  Caravan & Motorhome Club. No refunds, chargebacks or disputes can ever
  arrive via this website.
- **Never goes stale.** All copy is written timelessly ("in spring, the
  lambs…"). The only numbers on it are the phone number and grid reference.
- **Never needs a CMS, plugins or security updates.** It is plain static
  files.

## Accounts (all to be owned by the family, not the builder)

| Service | Purpose | Action at handover |
|---|---|---|
| Domain registrar (tycerrig.com) | the address | Confirm ownership on the discovery call; point DNS at Vercel |
| Vercel (free tier) | hosting | Create account with info@tycerrig.com, import the GitHub repo, add the domain. Builder stays as collaborator only |
| GitHub | the code | Transfer the repository to a family-owned account, or keep builder-hosted with the family as admin |
| Google Business Profile | the map listing | Claim/verify separately — highest-leverage marketing action of all (see brief) |

## The only file anyone should ever edit

`lib/site.ts` — phone number, email, booking links, what3words.
Everything else can be left alone forever. (Contact on /find-us is
direct email/text/WhatsApp links — no form service to maintain.)

## Swapping in real photography (after the site visit)

1. Drop full-resolution originals into `image-src/`, named exactly as the
   slots listed in `docs/IMAGE-MANIFEST.md` (e.g. `hero-home.jpg`).
2. Run `npm install`, then `node scripts/prepare-images.mjs`.
3. Update the `alt` text in `lib/images.ts` to describe the real photo.
4. Commit and push — Vercel redeploys automatically.

## If it breaks

It is a static site; "broken" almost always means DNS or the Vercel
project was deleted. Re-import the repo into any Vercel account and
re-point the domain. Email the builder: Tom Hill, Blandfords
(mail@blandfords.co).

## Pre-launch checklist

- [ ] Confirm tycerrig.com ownership (fallbacks: tycerrigcl.co.uk, tycerrig.cymru)
- [ ] Test the Email / Text / WhatsApp contact buttons on /find-us from a phone
- [ ] Rhys/family have reviewed every Welsh heading and all facts (see docs/TODO-FOR-RHYS.md)
- [ ] Submit sitemap to Google Search Console
- [ ] Google Business Profile claimed; website link added
- [ ] Capture case-study baseline: rankings for "caravan site Dolgellau", GBP views
