"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/blog", label: "Writing" },
    { href: "/portfolio", label: "Projects" },
  ];

  return (
    <header className="border-b border-ink/10">
      <div className="max-w-[680px] mx-auto px-8 py-6 flex justify-between items-baseline">
        <Link
          href="/"
          className="font-serif text-[15px] text-ink hover:text-ink-mid transition-colors"
        >
          {profile.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-baseline gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[11px] font-medium uppercase tracking-[0.08em] transition-colors ${
                pathname.startsWith(href) ? "text-ink" : "text-ink-light hover:text-ink"
              }`}
            >
              {label}
            </Link>
          ))}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium uppercase tracking-[0.08em] text-ink-light hover:text-ink transition-colors"
            >
              Connect
            </a>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-ink-light hover:text-ink transition-colors"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden border-t border-ink/10 bg-paper">
          <nav className="max-w-[680px] mx-auto px-8 py-4 flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-[12px] font-medium uppercase tracking-[0.08em] transition-colors ${
                  pathname.startsWith(href) ? "text-ink" : "text-ink-light"
                }`}
              >
                {label}
              </Link>
            ))}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium uppercase tracking-[0.08em] text-ink-light"
              >
                Connect
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
