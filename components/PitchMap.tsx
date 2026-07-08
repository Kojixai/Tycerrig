/**
 * Illustrative site plan — deliberately schematic, not to scale.
 * Shows only verified layout facts: five pitches by the stream, the barn
 * up the track, the lane to the A494. Replace with an annotated aerial
 * photo after the site visit (see docs/IMAGE-MANIFEST.md).
 */
const pitches = [
  { n: 1, x: 150 },
  { n: 2, x: 270 },
  { n: 3, x: 390 },
  { n: 4, x: 510 },
  { n: 5, x: 630 },
];

export default function PitchMap() {
  return (
    <figure className="mx-auto max-w-4xl">
      <svg
        viewBox="0 0 800 430"
        role="img"
        aria-label="Illustrative plan of Tŷ Cerrig: five pitches in a row beside the Afon Tŷ Cerrig stream, with the stone barn a short walk up the farm track and the lane leading out to the A494"
        className="w-full rounded-lg border border-ink/10 bg-wool-2"
      >
        {/* field */}
        <rect x="0" y="0" width="800" height="430" fill="var(--color-wool-2)" />

        {/* conifer plantation, top edge */}
        {[40, 80, 120, 620, 660, 700, 740].map((x) => (
          <g key={x} transform={`translate(${x} 28)`}>
            <path d="M12 0 L24 30 L0 30 Z" fill="var(--color-moss)" opacity="0.85" />
            <path d="M12 14 L26 46 L-2 46 Z" fill="var(--color-moss)" opacity="0.65" />
          </g>
        ))}

        {/* lane out to the A494 */}
        <path
          d="M 790 120 C 640 140 520 130 430 165"
          fill="none"
          stroke="var(--color-stone)"
          strokeWidth="14"
          strokeLinecap="round"
          opacity="0.55"
        />
        <text x="782" y="102" textAnchor="end" fontSize="15" fill="var(--color-ink)" fontStyle="italic">
          lane to the A494 →
        </text>

        {/* farm track between barn and pitches */}
        <path
          d="M 430 165 C 350 195 240 205 130 250 C 90 268 60 290 30 320"
          fill="none"
          stroke="var(--color-stone)"
          strokeWidth="10"
          strokeDasharray="1 16"
          strokeLinecap="round"
          opacity="0.7"
        />
        <text x="30" y="300" fontSize="15" fill="var(--color-ink)" fontStyle="italic">
          farm-track walks
        </text>

        {/* the barn */}
        <g transform="translate(400 128)">
          <rect x="0" y="18" width="64" height="38" rx="2" fill="var(--color-stone)" />
          <path d="M-4 20 L32 -2 L68 20 Z" fill="var(--color-ink)" />
          <text x="32" y="76" textAnchor="middle" fontSize="15" fontWeight="600" fill="var(--color-ink)">
            The barn · Y Beudy
          </text>
          <text x="32" y="94" textAnchor="middle" fontSize="13" fill="var(--color-stone)">
            shower · toilet · kitchen · laundry
          </text>
        </g>

        {/* pitches */}
        {pitches.map((p) => (
          <g key={p.n} transform={`translate(${p.x} 268)`}>
            <rect x="-26" y="-16" width="52" height="32" rx="7" fill="var(--color-wool)" stroke="var(--color-moss)" strokeWidth="2.5" />
            <circle cx="0" cy="30" r="13" fill="var(--color-moss)" />
            <text x="0" y="35" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--color-wool)">
              {p.n}
            </text>
          </g>
        ))}

        {/* stream */}
        <path
          d="M -10 385 C 120 370 240 396 400 384 C 560 372 680 396 810 380"
          fill="none"
          stroke="var(--color-river)"
          strokeWidth="26"
          strokeLinecap="round"
        />
        <path
          d="M -10 385 C 120 370 240 396 400 384 C 560 372 680 396 810 380"
          fill="none"
          stroke="var(--color-wool)"
          strokeWidth="3"
          strokeDasharray="14 22"
          opacity="0.7"
        />
        <text x="400" y="420" textAnchor="middle" fontSize="15" fontStyle="italic" fill="var(--color-ink)" lang="cy">
          Afon Tŷ Cerrig
        </text>
      </svg>
      <figcaption className="mt-4 text-center text-[0.95rem] leading-relaxed text-stone">
        Illustrative, not to scale. Every pitch has its own electric hook-up,
        water tap, wifi and a satellite connection for Sky and Freesat — and
        the stream for a neighbour.
      </figcaption>
    </figure>
  );
}
