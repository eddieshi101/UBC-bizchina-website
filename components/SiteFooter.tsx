import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            UBC BizChina
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/65">
            Connecting UBC students with China&apos;s business landscape through
            events, mentorship, and storytelling.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          <Link href="/about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link href="/events" className="transition-colors hover:text-white">
            Events
          </Link>
          <Link href="/bizjournal" className="transition-colors hover:text-white">
            BizJournal
          </Link>
          <Link href="/contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-white/45 sm:px-8">
          © {new Date().getFullYear()} UBC BizChina. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
