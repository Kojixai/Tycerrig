# Discovery-call & site-visit checklist (facts the site deliberately omits)

The copy was written to read complete *without* every unconfirmed fact, so
nothing wrong can be published. Each item below can be added later — most
slot into an existing sentence.

## Ask Rhys (discovery call)

| # | Question | Where it would go |
|---|---|---|
| 1 | Do you own **tycerrig.com**? Who hosts info@tycerrig.com email? | Domain setup (HANDOVER.md) |
| 2 | Arrival / departure times | "Good to know" list, /caravan-site |
| 3 | How many pitches are hardstanding vs grass/gravel? Pitch dimensions? EHU amps? | Pitch section + PitchMap detail, /caravan-site |
| 4 | Maximum dogs per pitch | Dogs section, /caravan-site |
| 5 | Second shower/toilet expansion — confirmed? timeline? | "One bathroom" line, /caravan-site (announce only when real) |
| 6 | Nearest fuel station worth naming | FAQ, /find-us |
| 7 | Are the **three holiday cottages** and **Cookaway Cottage with Myfanwy** real, current offers? (Research suggests yes but unverified; the Llanfachreth "Carthouse" on Tripadvisor is answered by a "Richard" — may be a different property.) | Would become new pages — v2, changes SEO strategy |
| 8 | The demolished railway bridge near the gate — which bridge exactly? Any family memories/photos of the trains at Wnion Halt? | Ghost railway section, /history |
| 9 | Welsh copy review — every `lang="cy"` heading on the site needs a native speaker's sign-off | All pages |
| 10 | Permission to use guest photos from Pitchup reviews? | Gallery, v2 |
| 11 | Google Business Profile — do they have access? | HANDOVER.md checklist |
| 12 | Welsh Gov rural diversification grants — worth them asking about marketing/website funding | Commercial note |

## Capture on the site visit

- **what3words at the gate** → `lib/site.ts`
- **Turn-by-turn directions with photos** from both A494 approaches → /find-us directions section (currently coordinates + "ring us")
- Photography per `docs/IMAGE-MANIFEST.md` (replaces all stock stand-ins)
- Annotated aerial/plan photo of the five pitches → replaces the illustrative SVG PitchMap

## Welcome pack (/welcome) — ask Rhys / verify

Every item below renders on the guest welcome pack as a visible "to
follow / to confirm" chip until answered. Nothing was invented.

| # | Question | Where it goes |
|---|---|---|
| ~~W1~~ | ~~Exact Google Maps pin~~ **DONE** — pin now uses the GPS coordinates from lib/site.ts | /welcome/arrival |
| W2 | what3words for the site entrance AND for the pitch area (emergency services) → paste into `what3words` in lib/site.ts (footer, /find-us and /welcome pick it up automatically; pitch-area w3w still needs its own edit on arrival + emergencies) | /welcome/arrival + /welcome/emergencies 999 panel + /find-us |
| ~~W3~~ | ~~A494 approach~~ **DONE** — off at the Rhydymain turning, over the first bridge, left over the second into the site | /welcome/arrival |
| W4 | Check-in from / check-out by times; late-arrival procedure; on-arrival instructions (where to pull in, who to find, which pitch) | /welcome/arrival |
| W5 | Hook-up amperage (e.g. 16A) | /welcome/your-pitch |
| ~~W6~~ | ~~Drinking water~~ **DONE** — pitch + barn taps are filtered creek water, drinkable, meets standards | /welcome/your-pitch (FAQ answer still open) |
| ~~W7~~ | ~~Barn facilities~~ **DONE** — honesty box; washing machine £5, coffee machine £2, two ovens, microwave, dishwasher, fridge & freezer, crockery, shower & toilet, changing area, bins | /welcome/your-pitch |
| W8 | Wi-Fi network name + password; TV location and how it works | /welcome/your-pitch |
| W9 | Bins & recycling (where, what's separated, collection day) | /welcome/your-pitch + FAQ |
| W10 | Chemical toilet disposal point location + rules ("no chemical waste in creek or drains" is already published); grey water | /welcome/your-pitch |
| W11 | Quiet hours; dog rules; fires & BBQs (fire pits? off-ground only? firewood?); visitor policy | /welcome/your-pitch + FAQ |
| W12 | Any on-site EV charging option? Can guests charge an e-bike? | /welcome/essentials + FAQ |
| W13 | Mobile signal honest one-liner per network (Ofcom checker linked in the meantime) | /welcome/essentials |
| W14 | Top 3 pubs, top 3 takeaways, favourite café / Sunday roast / special-occasion meal | /welcome/food |
| W15 | Nearest defibrillator — could NOT be verified remotely (defib databases unreachable from the build sandbox; the one "Rhydymain" search hit was actually Rhydymwyn, Flintshire). Ask Rhys or check defibfinder.uk on site | /welcome/emergencies |
| W16 | Emergency contact: currently shows the mobile (07733 338789). When is it OK to knock on the farmhouse door? | /welcome/emergencies |
| W17 | Family favourites / anything on-farm guests can do or see | /welcome/things-to-do |
| W18 | FAQ answers: drying wet gear; washing muddy dogs/boots; eggs/firewood/farm produce for sale; friends visiting | /welcome/faqs |
| W19 | Welsh card kickers need native sign-off (with #9 above): Cyrraedd · Eich Llain a'r Ysgubor · Hanfodion Lleol · Bwyd a Thafarndai · Argyfwng ac Iechyd · Pethau i'w Gwneud · Ychydig o Gymraeg · Cwestiynau Cyffredin | /welcome hub + sub-pages |

**Verify before go-live (research, not Rhys):** Dolgellau bakery/butcher names (Popty'r Dref?); Barmouth vet practice name (Bodrwnsiwn?); preferred public Mach Loop viewpoint; Corris Craft Centre / King Arthur's Labyrinth / CAT Machynlleth currently open. *(Verified 2026-07: Rowlands Pharmacy Bala, Y Stryd Fawr LL23 7AG; Dolgellau Post Office, Plas yn Dre LL40 1AD; Bala Post Office, 50 Stryd Fawr LL23 7AB.)*

**Done:** the inactive landline (01341 450238) has been removed from /find-us and lib/site.ts.

## Deliberately never published (council "do-not-publish" list)

- Prices (live on Pitchup/CAMC)
- Review counts (goes stale; phrased durably as "rated 9.7/10 by members")
- Facility expansion plans until confirmed
- Any promise of jet sightings
- "Snowdonia" before "Eryri"
