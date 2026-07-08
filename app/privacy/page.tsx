import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How Tŷ Cerrig handles the details you send through the enquiry form on this website.",
  robots: { index: false },
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold text-ink">
        Privacy notice
      </h1>
      <p
        lang="cy"
        className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-bracken"
      >
        Hysbysiad Preifatrwydd
      </p>
      <div className="measure mt-8 space-y-5 leading-relaxed text-ink/85">
        <p>
          This website is an information site. It takes no bookings and no
          payments, sets no advertising cookies, and runs no tracking
          analytics. There is exactly one way it collects personal data: the
          enquiry form on our Find Us page.
        </p>
        <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
          The enquiry form
        </h2>
        <p>
          If you send us a message, we receive the name, email address and
          message text you type. We use them for one purpose only — replying
          to you. The lawful basis is our legitimate interest in answering the
          enquiries people send us (UK GDPR, Article 6(1)(f)).
        </p>
        <p>
          The form is delivered to our email by Formspree, a form-handling
          service, which processes the message in order to pass it on. We keep
          enquiry emails only as long as the conversation needs, then delete
          them; we never add you to a mailing list and never share your
          details with anyone else.
        </p>
        <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
          Booking
        </h2>
        <p>
          Bookings are made with Pitchup or the Caravan and Motorhome Club on
          their own websites, under their own privacy policies — no booking
          information passes through this site.
        </p>
        <h2 className="pt-4 font-display text-2xl font-semibold text-ink">
          Your rights & contact
        </h2>
        <p>
          You can ask us what we hold about you, ask us to correct it or
          delete it, and complain to the Information Commissioner&rsquo;s
          Office if we get it wrong. For anything at all, email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-moss hover:underline">
            {site.email}
          </a>{" "}
          or ring{" "}
          <a href={site.phone.href} className="font-semibold text-moss hover:underline">
            {site.phone.display}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
