import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About us"
        description="We are a UBC student club bridging campus talent with China's business world—through events, mentorship, and community."
      />
      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Our mission
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
            BizChina exists to help UBC students understand, engage with, and
            shape opportunities across the China–Canada corridor. We host
            conversations that matter, celebrate our community, and publish
            student perspectives through BizJournal.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Who we are
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
            Our team spans strategy, events, marketing, and editorial—students
            who care about business, culture, and building lasting networks.
            Team profiles and executive bios will live here.
          </p>
        </div>
      </section>
    </main>
  );
}
