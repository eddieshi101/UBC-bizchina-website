import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Events",
};

const events = [
  {
    href: "/events/bizforum",
    name: "BizForum",
    kind: "Panel series",
    blurb:
      "In-depth panels with founders, investors, and operators shaping China–Canada business.",
  },
  {
    href: "/events/bizgala",
    name: "BizGala",
    kind: "Annual gala",
    blurb:
      "Our flagship celebration—formal evening, networking, and community recognition.",
  },
] as const;

export default function EventsPage() {
  return (
    <main>
      <PageHero
        title="Events"
        description="From intimate forums to our annual gala—every gathering is built to connect UBC students with real-world China business insight."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <ul className="divide-y divide-line border-y border-line">
          {events.map((event) => (
            <li key={event.href}>
              <Link
                href={event.href}
                className="group grid gap-3 py-10 sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-10"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-mist uppercase">
                  {event.kind}
                </span>
                <div>
                  <h2 className="font-display text-3xl font-semibold tracking-tight transition-colors group-hover:text-lacquer">
                    {event.name}
                  </h2>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-mist">
                    {event.blurb}
                  </p>
                </div>
                <span className="text-sm font-semibold text-lacquer">
                  Explore →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
