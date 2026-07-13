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
| W1 | Exact Google Maps pin / plus code for the site entrance (not the postcode centroid) | /welcome/arrival |
| W2 | what3words for the site entrance AND for the pitch area (emergency services) | /welcome/arrival + /welcome/emergencies 999 panel |
| W3 | Turn-by-turn approach from the A494 (Rhydymain turning, bridges, bear left?) + any width/height cautions for larger outfits | /welcome/arrival |
| W4 | Check-in from / check-out by times; late-arrival procedure; on-arrival instructions (where to pull in, who to find, which pitch) | /welcome/arrival |
| W5 | Hook-up amperage (e.g. 16A) | /welcome/your-pitch |
| W6 | Drinking water: which tap is drinking water? (Creek water treated as NOT drinkable until confirmed) | /welcome/your-pitch + FAQ |
| W7 | Washing machine price (£5?) and how to pay; other barn appliances (kettle, microwave, toaster, iron?) | /welcome/your-pitch |
| W8 | Wi-Fi network name + password; TV location and how it works | /welcome/your-pitch |
| W9 | Bins & recycling (where, what's separated, collection day) | /welcome/your-pitch + FAQ |
| W10 | Chemical toilet disposal point location + rules ("no chemical waste in creek or drains" is already published); grey water | /welcome/your-pitch |
| W11 | Quiet hours; dog rules; fires & BBQs (fire pits? off-ground only? firewood?); visitor policy | /welcome/your-pitch + FAQ |
| W12 | Any on-site EV charging option? Can guests charge an e-bike? | /welcome/essentials + FAQ |
| W13 | Mobile signal honest one-liner per network | /welcome/essentials |
| W14 | Top 3 pubs, top 3 takeaways, favourite café / Sunday roast / special-occasion meal | /welcome/food |
| W15 | Nearest defibrillator (Rhydymain village hall?) | /welcome/emergencies |
| W16 | Emergency contact: currently shows the mobile (07733 338789). When is it OK to knock on the farmhouse door? (Landline NOT shown — no longer active) | /welcome/emergencies |
| W17 | Family favourites / anything on-farm guests can do or see | /welcome/things-to-do |
| W18 | FAQ answers: drying wet gear; washing muddy dogs/boots; eggs/firewood/farm produce for sale; friends visiting | /welcome/faqs |
| W19 | Welsh card kickers need native sign-off (with #9 above): Cyrraedd · Eich Llain a'r Ysgubor · Hanfodion Lleol · Bwyd a Thafarndai · Argyfwng ac Iechyd · Pethau i'w Gwneud · Ychydig o Gymraeg · Cwestiynau Cyffredin | /welcome hub + sub-pages |

**Verify before go-live (research, not Rhys):** Dolgellau bakery/butcher names (Popty'r Dref?); current banks/post offices in Dolgellau & Bala; Barmouth vet practice name (Bodrwnsiwn?); preferred public Mach Loop viewpoint; Corris Craft Centre / King Arthur's Labyrinth / CAT Machynlleth currently open.

**Note:** the inactive landline (01341 450238) is still shown on the public /find-us page and defined in `lib/site.ts` — remove in a follow-up.

## Deliberately never published (council "do-not-publish" list)

- Prices (live on Pitchup/CAMC)
- Review counts (goes stale; phrased durably as "rated 9.7/10 by members")
- Facility expansion plans until confirmed
- Any promise of jet sightings
- "Snowdonia" before "Eryri"
