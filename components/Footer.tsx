import { profile } from "@/content/profile";

export default function Footer() {
  const { name, social } = profile;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 mt-24">
      <div className="max-w-[680px] mx-auto px-8 py-8 flex flex-wrap justify-between items-center gap-4">
        <p className="text-[12px] text-ink-light">
          {name} · Chicago
        </p>
        <div className="flex gap-5">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-ink-light hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-ink-light hover:text-ink transition-colors"
            >
              GitHub
            </a>
          )}
          {(social as Record<string, string | null>).medium && (
            <a
              href={(social as Record<string, string | null>).medium!}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-ink-light hover:text-ink transition-colors"
            >
              Medium
            </a>
          )}
          <p className="text-[12px] text-ink-light">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
