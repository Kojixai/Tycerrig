import type { Metadata } from "next";
import WelcomeShell from "@/components/welcome/WelcomeShell";

export const metadata: Metadata = {
  title: "A Little Welsh — Guest Welcome",
  description:
    "A handful of Welsh phrases for your stay — with pronunciation.",
};

const phrases: { cy: string; sayIt: string; meaning: string }[] = [
  { cy: "Croeso", sayIt: "KROY-so", meaning: "Welcome" },
  { cy: "Bore da", sayIt: "BOR-eh DAH", meaning: "Good morning" },
  { cy: "Prynhawn da", sayIt: "PRUN-haun DAH", meaning: "Good afternoon" },
  { cy: "Nos da", sayIt: "NOHS DAH", meaning: "Good night" },
  { cy: "Diolch", sayIt: "DEE-olch", meaning: "Thank you" },
  { cy: "Os gwelwch yn dda", sayIt: "os GWEL-ookh un THAH", meaning: "Please" },
  { cy: "Ie / Na", sayIt: "YEH / NAH", meaning: "Yes / No" },
  { cy: "Hwyl fawr", sayIt: "HOO-il VOWR", meaning: "Goodbye" },
  { cy: "Iechyd da!", sayIt: "YEH-chid DAH", meaning: "Cheers!" },
  {
    cy: "Un, dau, tri, pedwar, pump",
    sayIt: "een, die, tree, PED-war, pimp",
    meaning: "1–5",
  },
];

export default function Welsh() {
  return (
    <WelcomeShell slug="welsh">
      <div className="measure space-y-5 leading-relaxed text-ink/85">
        <p className="italic">
          You&rsquo;ll get by fine in English — but Welsh is the first language
          for many round here, and even a word or two lands well.
        </p>

        <ul className="border-b border-ink/15">
          <li
            aria-hidden="true"
            className="hidden gap-x-4 border-t border-ink/15 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-stone sm:grid sm:grid-cols-3"
          >
            <span>Welsh</span>
            <span>Say it</span>
            <span>Meaning</span>
          </li>
          {phrases.map((p) => (
            <li
              key={p.cy}
              className="grid gap-x-4 gap-y-0.5 border-t border-ink/15 py-3.5 sm:grid-cols-3 sm:items-baseline"
            >
              <span lang="cy" className="font-display text-xl text-ink">
                {p.cy}
              </span>
              <span className="italic text-stone">{p.sayIt}</span>
              <span className="text-ink/80">{p.meaning}</span>
            </li>
          ))}
        </ul>

        <p className="italic">
          And the name: <span lang="cy">Tŷ Cerrig</span> means &ldquo;house of
          stones&rdquo;.
        </p>
      </div>
    </WelcomeShell>
  );
}
