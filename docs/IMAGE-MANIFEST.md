# Image slots — current stand-ins and the real shots to take

Every image on the site is a **licensed Adobe Stock photo (free
collection)** standing in until the site-visit shoot. None of them show
Tŷ Cerrig itself. To swap one: drop the original into `image-src/` with
the slot name below, run `node scripts/prepare-images.mjs`, update the
alt text in `lib/images.ts`, push.

| Slot (`image-src/<name>.jpg`) | Where it appears | Current stand-in (Adobe Stock ID) | The real shot (photo brief A6) |
|---|---|---|---|
| `hero-home` | Home hero | Green upland valley, morning mist (#441419146) | Van pitched streamside at golden hour, steam off a mug, Arans behind |
| `hero-site` | The Site hero | Rocky conifer stream, Tatra (#248304598) | The Afon Tŷ Cerrig beside the pitches |
| `hero-walks` | Walks hero | Walker on golden ridge (#644565621) | Walker/dogs on the farm track or Aran ridge |
| `hero-jets` | Jets hero | RAF Tornado low-level, UK (#471052090) | A jet against the ridge shot from the pitch — the money shot; any long-lens Hawk/Typhoon works |
| `hero-history` | History hero | Stone bridge & cottage, Yorkshire Dales (#349285871) | Drws-y-Nant platforms, the bridge stump near the gate, or Rhydymain chapel (analogue film suits the subject) |
| `hero-findus` | Find Us hero | Green mountain panorama (#482551284) | The lane + A494 turning (doubles as UX content — shoot both approaches) |
| `farm-sheep` | Home, distance strip | Sheep + stone farmhouse, autumn UK (#316386618) | The flock on the farm with the valley behind |
| `farm-lamb` | Home, family intro | Lamb on farm track at dusk (#207952191) | Lamb feeding with the family / guests' kids |

Also wanted from the visit (new slots, v2): barn interior — the famous
kitchen in use; each of the five pitches (for the pitch map); drone up
the Wnion valley; Rhys & family in the yard, natural.

## Licensing note

Stand-ins were licensed to the builder's Adobe account from the Adobe
Stock **free collection** (standard licence, no credits consumed). Fine
for launch; replace with owned photography as soon as the shoot happens.
`image-src/` is gitignored so full-size originals never bloat the repo —
keep copies wherever the family keeps photos.
