import Link from "next/link";
import type { Metadata } from "next";
import { Mountain } from "lucide-react";
import WelcomeShell from "@/components/welcome/WelcomeShell";
import Placeholder from "@/components/welcome/Placeholder";
import PlaceItem from "@/components/welcome/PlaceItem";

export const metadata: Metadata = {
  title: "Things To Do — Guest Welcome",
  description:
    "Walks, forests, lakes, steam trains and rainy-day plans around Tŷ Cerrig.",
};

export default function ThingsToDo() {
  return (
    <WelcomeShell slug="things-to-do">
      <div className="space-y-5 leading-relaxed text-ink/85">
        <Link
          href="/walks/"
          className="group flex items-center gap-4 rounded-lg border border-moss/40 bg-wool-2 px-5 py-5 shadow-sm transition-all hover:border-moss hover:shadow"
        >
          <span className="shrink-0 text-moss transition-colors group-hover:text-bracken">
            <Mountain size={32} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-lg leading-tight text-ink group-hover:text-moss">
              Walks
            </span>
            <span className="mt-1 text-[0.9rem] leading-snug text-ink/70">
              Our favourite walks — from riverside strolls to Cadair Idris —
              live on the main site.
            </span>
          </span>
        </Link>

        <ul className="grid gap-4 sm:grid-cols-2">
          <PlaceItem
            place={{
              name: "Coed y Brenin Forest Park",
              note: "Waymarked forest walks, world-class mountain biking, visitor centre & café. 15 min.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Coed+y+Brenin+Visitor+Centre",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Llyn Tegid (Bala Lake)",
              note: "The largest natural lake in Wales; watersports, and the Bala Lake Railway steam train along the shore.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Bala+Lake+Railway",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Cymer Abbey",
              note: "Ruins of a Cistercian abbey founded in 1198, near Llanelltyd.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Cymer+Abbey+Llanelltyd",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Barmouth & the Mawddach Estuary",
              note: "Beach, harbour and the famous railway viaduct. 30 min.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Barmouth",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Dolgellau town",
              note: "Handsome stone market town with cafés, and a gold-rush past.",
              map: {
                href: "https://www.google.com/maps/search/?api=1&query=Dolgellau",
              },
            }}
          />
          <PlaceItem
            place={{
              name: "Mach Loop viewpoints",
              note: (
                <>
                  For plane spotters, the ridges above the A470 near Dinas
                  Mawddwy.{" "}
                  <Placeholder>
                    Preferred public viewpoint to be verified
                  </Placeholder>
                </>
              ),
            }}
          />
          <PlaceItem
            place={{
              name: "Rainy day",
              note: (
                <>
                  Corris Craft Centre &amp; King Arthur&rsquo;s Labyrinth;
                  Centre for Alternative Technology, Machynlleth.{" "}
                  <Placeholder>Opening to be verified</Placeholder>
                </>
              ),
            }}
          />
        </ul>

        <Placeholder block>
          The family&rsquo;s own favourites — and what you can see and do on
          the farm itself — to follow.
        </Placeholder>
      </div>
    </WelcomeShell>
  );
}
