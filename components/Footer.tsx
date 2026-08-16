import { profile } from "@/content/profile";

export default function Footer() {
  const { name, social } = profile;

  const links = [
    { href: social.linkedin, label: "LinkedIn" },
    { href: social.github, label: "GitHub" },
    { href: (social as Record<string, string | null>).medium ?? null, label: "Medium" },
  ].filter((l): l is { href: string; label: string } => Boolean(l.href));

  return (
    <div className="ind-nav">
      <footer
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          padding: "24px 32px",
          borderTop: "1px solid var(--ind-divider)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 13,
          color: "color-mix(in srgb, var(--ind-text) 70%, transparent)",
        }}
      >
        <span>{name} · Chicago</span>
        <span style={{ display: "flex", gap: 16 }}>
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-accent-700)" }}
            >
              {label}
            </a>
          ))}
        </span>
      </footer>
    </div>
  );
}
