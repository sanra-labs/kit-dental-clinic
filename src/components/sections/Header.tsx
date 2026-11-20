"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
      <span className="grid size-9 place-items-center rounded-xl bg-brand text-white">
        <Icon name="checkup" className="size-5" />
      </span>
      <span className="font-display text-lg font-bold text-ink">{site.name}</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#booking"
            className="hidden min-h-10 items-center rounded-full bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark sm:inline-flex"
          >
            Book appointment
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-full bg-brand font-semibold text-white"
              >
                Book appointment
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
