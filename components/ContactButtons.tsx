import { site } from "@/lib/site";

const phoneDigits = site.phone.href.replace("tel:", ""); // "+447733338789"

/**
 * Direct-contact buttons — each deep-links into the visitor's own app
 * (mail client, Messages, WhatsApp). Nothing passes through the website,
 * so there's no form service to maintain and nothing to go stale.
 */
export default function ContactButtons() {
  return (
    <div className="rounded-lg border border-ink/10 bg-wool-2 p-6 sm:p-8">
      <h2 className="font-display text-2xl text-ink">
        Send us a message
      </h2>
      <p
        lang="cy"
        className="mt-0.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-bracken"
      >
        Anfonwch neges
      </p>
      <p className="mt-2 text-[0.95rem] text-stone">
        For anything that isn&rsquo;t a booking — booking lives with{" "}
        <a href={site.booking.pitchup} target="_blank" rel="noopener" className="text-moss underline underline-offset-2">
          Pitchup
        </a>{" "}
        and{" "}
        <a href={site.booking.camc} target="_blank" rel="noopener" className="text-moss underline underline-offset-2">
          the Club
        </a>
        . In a hurry? Ring{" "}
        <a href={site.phone.href} className="font-semibold text-moss">
          {site.phone.display}
        </a>
        .
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}`}
          className="rounded bg-moss px-6 py-3 font-semibold text-wool transition-colors hover:bg-moss-deep"
        >
          Email
        </a>
        <a
          href={`sms:${phoneDigits}`}
          className="rounded bg-moss px-6 py-3 font-semibold text-wool transition-colors hover:bg-moss-deep"
        >
          Text
        </a>
        <a
          href={`https://wa.me/${phoneDigits.replace("+", "")}`}
          target="_blank"
          rel="noopener"
          className="rounded bg-moss px-6 py-3 font-semibold text-wool transition-colors hover:bg-moss-deep"
        >
          WhatsApp
        </a>
      </div>
      <p className="mt-4 text-[0.85rem] text-stone">
        Each button opens your own mail or messaging app — your message comes
        straight to us, and nothing is collected through this website.
      </p>
    </div>
  );
}
