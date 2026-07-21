"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/bizjournal", label: "BizJournal" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onHome
          ? "bg-gradient-to-b from-ink/70 to-transparent"
          : "border-b border-line/80 bg-paper-warm/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className={`font-display text-lg font-semibold tracking-tight transition-opacity hover:opacity-80 sm:text-xl ${
            onHome ? "text-white" : "text-ink"
          }`}
          onClick={() => setOpen(false)}
        >
          UBC BizChina
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Site navigation">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-lacquer after:transition-transform after:duration-300 ${
                  active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                } ${
                  onHome
                    ? active
                      ? "text-white"
                      : "text-white/75 hover:text-white"
                    : active
                      ? "text-ink"
                      : "text-mist hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-sm bg-lacquer px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-lacquer-deep"
          >
            Join us
          </Link>
        </nav>

        <button
          type="button"
          className={`md:hidden ${onHome ? "text-white" : "text-ink"}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex h-5 w-6 flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 bg-navy md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base font-medium text-white/90"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-sm bg-lacquer px-4 py-3 text-center text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Join us
          </Link>
        </nav>
      </div>
    </header>
  );
}
