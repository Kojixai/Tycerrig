# Tŷ Cerrig — tycerrig.com

Information-only website for **Tŷ Cerrig CL**, a five-pitch Caravan &
Motorhome Club Certificated Location on a third-generation working sheep
farm at Rhydymain, between Dolgellau and Bala, in Eryri (Snowdonia)
National Park.

Built to be handed over and left alone: **no payments, no CMS, no prices,
no dates, nothing that goes stale.** Booking happens on Pitchup and the
Club via outbound links; contact is direct email/text/WhatsApp links —
no external services at all.

## Stack

- Next.js 15 (App Router), TypeScript, **static export** (`output: "export"`)
- Tailwind CSS v4; palette and type tokens in `app/globals.css`
- Cormorant + Figtree, self-hosted via `@fontsource-variable` (Welsh
  diacritics ŷ/ŵ verified)
- Structured data: `Campground` (layout), `FAQPage` (/find-us)

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

## Content model

- `lib/site.ts` — every fact, link and account ID (the only file that
  should ever need editing)
- `lib/images.ts` + `docs/IMAGE-MANIFEST.md` — image slots; process new
  photos with `node scripts/prepare-images.mjs`
- Page copy lives directly in `app/*/page.tsx`

## Docs

- [docs/HANDOVER.md](docs/HANDOVER.md) — care sheet, accounts, launch checklist
- [docs/TODO-FOR-RHYS.md](docs/TODO-FOR-RHYS.md) — facts awaiting the discovery call
- [docs/IMAGE-MANIFEST.md](docs/IMAGE-MANIFEST.md) — photo slots and the shoot brief

## Deploy

Import the repo into a Vercel project (free tier) owned by
info@tycerrig.com; add the tycerrig.com domain. No environment variables,
no build settings beyond the defaults.
