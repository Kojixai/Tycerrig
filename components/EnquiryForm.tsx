import Link from "next/link";
import { formspreeEndpoint, site } from "@/lib/site";

/**
 * Plain HTML POST to Formspree — no JavaScript, nothing to break.
 * The _gotcha field is Formspree's honeypot. See docs/HANDOVER.md for
 * connecting the family's Formspree account.
 */
export default function EnquiryForm() {
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
      <form action={formspreeEndpoint} method="POST" className="mt-6 grid gap-4">
        <label className="grid gap-1.5 text-[0.95rem] font-medium text-ink">
          Your name
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="rounded border border-ink/20 bg-wool px-3.5 py-2.5 font-normal text-ink focus:border-moss"
          />
        </label>
        <label className="grid gap-1.5 text-[0.95rem] font-medium text-ink">
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="rounded border border-ink/20 bg-wool px-3.5 py-2.5 font-normal text-ink focus:border-moss"
          />
        </label>
        <label className="grid gap-1.5 text-[0.95rem] font-medium text-ink">
          Message
          <textarea
            name="message"
            required
            rows={5}
            className="rounded border border-ink/20 bg-wool px-3.5 py-2.5 font-normal text-ink focus:border-moss"
          />
        </label>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <button
          type="submit"
          className="justify-self-start rounded bg-moss px-7 py-3 font-semibold text-wool transition-colors hover:bg-moss-deep"
        >
          Send
        </button>
        <p className="text-[0.85rem] text-stone">
          We&rsquo;ll only use your details to reply to you.{" "}
          <Link href="/privacy/" className="underline underline-offset-2 hover:text-moss">
            Privacy notice
          </Link>
        </p>
      </form>
    </div>
  );
}
