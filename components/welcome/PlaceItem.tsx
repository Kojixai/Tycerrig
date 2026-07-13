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
 * One "name — note — phone — Map" row, the repeating unit of the
 * Essentials / Food / Emergencies / Things To Do lists.
 */
export default function PlaceItem({ place }: { place: Place }) {
  return (
    <li className="border-t border-ink/15 py-5 first:border-t-0">
      <p className="font-semibold text-ink">{place.name}</p>
      {place.note ? (
        <p className="mt-1 leading-relaxed text-ink/80">{place.note}</p>
      ) : null}
      {place.phone || place.map ? (
        <p className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
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
