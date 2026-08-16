"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";

const links = [
  { href: "/blog", label: "Writing" },
  { href: "/portfolio", label: "Projects" },
  { href: "/visualizations", label: "Visualizations" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="ind-nav">
      <div className="ind-nav-inner">
        <Link
          href="/"
          className="ind-heading"
          style={{ fontSize: 18, marginRight: "auto", color: "var(--ind-text)" }}
        >
          {profile.name}
        </Link>

        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="ind-nav-link"
            aria-current={pathname.startsWith(href) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}

        {profile.social.linkedin && (
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ind-btn ind-btn-primary"
          >
            Connect on LinkedIn
          </a>
        )}
      </div>
    </nav>
  );
}
