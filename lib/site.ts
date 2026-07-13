/**
 * Every fact, link and account reference the site depends on lives here.
 * This is the ONLY file that should ever need touching after handover.
 * See docs/HANDOVER.md and docs/TODO-FOR-RHYS.md.
 */

export const site = {
  name: "Tŷ Cerrig",
  legalName: "Tŷ Cerrig CL",
  strapline: "Rhydymain · Eryri",
  description:
    "A quiet riverside caravan site on a family sheep farm between Dolgellau and Bala, in Eryri (Snowdonia) National Park. Caravan and Motorhome Club Certificated Location — five pitches beside the stream.",

  // Domain — verify ownership of tycerrig.com on the discovery call.
  url: "https://tycerrig.com",

  phone: {
    display: "07733 338789",
    href: "tel:+447733338789",
  },
  // The old landline (01341 450238) is no longer active — mobile only.
  email: "info@tycerrig.com",

  address: {
    line1: "Tŷ Cerrig",
    village: "Rhydymain",
    town: "Dolgellau",
    county: "Gwynedd",
    postcode: "LL40 2BB",
  },

  gps: { lat: 52.79849, lng: -3.73924 },
  // From the farm's welcome board: OS grid reference at the gate.
  gridRef: "SH 829 238 (OS Landranger 124)",

  // TODO (site visit): capture the what3words address at the gate.
  what3words: null as string | null,

  booking: {
    pitchup:
      "https://www.pitchup.com/campsites/Wales/North-Wales/Gwynedd/Dolgellau/ty-cerrig/",
    camc: "https://www.caravanclub.co.uk/certificated-locations/wales/gwynedd/dolgellau/ty-cerrig/",
  },

} as const;

export const nav = [
  { href: "/caravan-site/", cy: "Y Safle", en: "The Site" },
  { href: "/walks/", cy: "Teithiau", en: "Walks" },
  { href: "/jets/", cy: "Uwchben y Cwm", en: "Jets" },
  { href: "/history/", cy: "Hanes", en: "History" },
  { href: "/gallery/", cy: "Oriel", en: "Gallery" },
  { href: "/find-us/", cy: "Dod o Hyd i Ni", en: "Find Us" },
] as const;
