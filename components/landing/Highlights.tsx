import Link from "next/link";

const highlights = [
  {
    label: "Upcoming",
    title: "BizForum 2026",
    detail: "Founders and operators on building across China and Canada.",
    href: "/events/bizforum",
  },
  {
    label: "Flagship",
    title: "BizGala",
    detail: "Our annual night of celebration, networking, and community.",
    href: "/events/bizgala",
  },
  {
    label: "Stories",
    title: "BizJournal",
    detail: "Member writing on markets, careers, and campus life.",
    href: "/bizjournal",
  },
] as const;

export default function Highlights() {
  return (
    <section
      aria-labelledby="highlights-heading"
      className="border-b border-line bg-paper-warm"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-lacquer uppercase">
              Highlights
            </p>
            <h2
              id="highlights-heading"
              className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              What&apos;s happening
            </h2>
          </div>
          <Link
            href="/events"
            className="text-sm font-semibold text-mist transition-colors hover:text-lacquer"
          >
            All events →
          </Link>
        </div>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {highlights.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group grid gap-2 py-8 transition-colors sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="text-xs font-semibold tracking-[0.16em] text-mist uppercase">
                  {item.label}
                </span>
                <div>
                  <p className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-lacquer">
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist sm:text-base">
                    {item.detail}
                  </p>
                </div>
                <span className="hidden text-sm font-semibold text-lacquer opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                  View
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
