import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "BizJournal",
};

const posts = [
  {
    title: "Reading the China–Canada corridor in 2026",
    excerpt:
      "What student builders should watch across trade, talent, and startups this year.",
  },
  {
    title: "Inside a BizForum night",
    excerpt:
      "How we design panels that feel useful—not just impressive—for campus audiences.",
  },
  {
    title: "Careers at the intersection",
    excerpt:
      "Members share paths into consulting, product, and China-facing roles.",
  },
] as const;

export default function BizJournalPage() {
  return (
    <main>
      <PageHero
        title="BizJournal"
        description="Our internal blog—student voices on markets, careers, culture, and club life."
      />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <ul className="divide-y divide-line border-y border-line">
          {posts.map((post) => (
            <li key={post.title} className="py-8">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                {post.title}
              </h2>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-mist">
                {post.excerpt}
              </p>
              <p className="mt-3 text-sm font-semibold text-mist/80">
                Coming soon
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-mist">
          Want to write for BizJournal?{" "}
          <Link href="/contact" className="font-semibold text-lacquer">
            Get in touch
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
