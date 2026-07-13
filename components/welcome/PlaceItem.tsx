import OutboundButton from "@/components/welcome/OutboundButton";
import { telHref } from "@/lib/welcome";

export type Place = {
  name: string;
  /** ReactNode so Placeholder chips can sit inside. */
  note?: React.ReactNode;
  /** Display form, e.g. "01341 423352" — rendered as a tel: link. */
  phone?: string;
  map?: { href: string; label?: string };
};

/**
 * One place card — the repeating unit of the Essentials / Food /
 * Emergencies / Things To Do grids. Parent wraps these in
 * `ul className="grid gap-4 sm:grid-cols-2"` (or -3); single column
 * on mobile.
 */
export default function PlaceItem({ place }: { place: Place }) {
  return (
    <li className="flex flex-col rounded-lg border border-ink/10 bg-wool-2 p-5 shadow-sm">
      <p className="font-display text-lg leading-snug text-ink">{place.name}</p>
      {place.note ? (
        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink/80">
          {place.note}
        </p>
      ) : null}
      {place.phone || place.map ? (
        <p className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
          {place.phone ? (
            <a
              href={telHref(place.phone)}
              className="font-semibold text-moss hover:underline"
            >
              {place.phone}
            </a>
          ) : null}
          {place.map ? (
            <OutboundButton href={place.map.href}>
              {place.map.label ?? "Map"}
            </OutboundButton>
          ) : null}
        </p>
      ) : null}
    </li>
  );
}
