import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact us"
        description="Reach the team about membership, partnerships, speaking, or BizJournal submissions."
      />
      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <form className="space-y-5" action="#" method="post">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-ink"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 w-full border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-ink"
              placeholder="you@student.ubc.ca"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 w-full resize-y border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-ink"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="rounded-sm bg-lacquer px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-lacquer-deep"
          >
            Send message
          </button>
        </form>

        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Find us online
          </h2>
          <p className="mt-3 text-base leading-relaxed text-mist">
            Follow BizChina for event announcements, recaps, and member stories.
            Social links can be plugged in here when ready.
          </p>
          <ul className="mt-8 space-y-3 text-sm font-semibold">
            <li>
              <a
                href="https://www.instagram.com/"
                className="text-ink transition-colors hover:text-lacquer"
                target="_blank"
                rel="noreferrer"
              >
                Instagram →
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                className="text-ink transition-colors hover:text-lacquer"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn →
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@ubcbizchina.ca"
                className="text-ink transition-colors hover:text-lacquer"
              >
                hello@ubcbizchina.ca →
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
