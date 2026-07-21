import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "BizGala",
};

export default function BizGalaPage() {
  return (
    <main>
      <PageHero
        title="BizGala"
        description="Our annual flagship night—celebration, connection, and the people who make BizChina."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
          BizGala brings together members, alumni, and partners for a formal
          evening of networking and recognition. Venue, ticket info, and program
          highlights will live on this page.
        </p>
        <Link
          href="/events"
          className="mt-10 inline-block text-sm font-semibold text-lacquer transition-opacity hover:opacity-80"
        >
          ← All events
        </Link>
      </section>
    </main>
  );
}
