import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "BizForum",
};

export default function BizForumPage() {
  return (
    <main>
      <PageHero
        title="BizForum"
        description="Our panel series bringing founders, operators, and investors into conversation with UBC students."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
          BizForum is where hard questions meet real experience—market entry,
          careers, entrepreneurship, and the China–Canada corridor. Event dates,
          speakers, and registration details will appear here.
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
