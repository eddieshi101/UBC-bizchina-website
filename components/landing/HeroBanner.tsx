import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative flex min-h-dvh items-end overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=80"
        alt="Audience at a business conference"
        fill
        priority
        className="object-cover object-center animate-fade-in"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(193,18,31,0.28),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <p className="font-display text-5xl font-semibold tracking-tight text-white sm:text-7xl md:text-8xl animate-fade-up">
          UBC BizChina
        </p>
        <h1 className="mt-5 max-w-xl text-xl font-medium leading-snug text-white/95 sm:text-2xl animate-fade-up delay-1">
          Where UBC meets China&apos;s business future
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg animate-fade-up delay-2">
          Panels, galas, and stories that connect students with founders,
          operators, and the China–Canada corridor.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up delay-3">
          <Link
            href="/contact"
            className="rounded-sm bg-lacquer px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-lacquer-deep"
          >
            Join the club
          </Link>
          <Link
            href="/events"
            className="rounded-sm border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            See events
          </Link>
        </div>
      </div>
    </section>
  );
}
