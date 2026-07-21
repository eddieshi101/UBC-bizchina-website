import Link from "next/link";

export default function JoinCta() {
  return (
    <section
      aria-labelledby="join-heading"
      className="relative overflow-hidden bg-navy text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(193,18,31,0.35),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <h2
          id="join-heading"
          className="font-display text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          Ready to join?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Membership is open to UBC students who want to learn, lead, and build
          connections across the China–Canada business community.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-sm bg-lacquer px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-lacquer-deep"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
}
