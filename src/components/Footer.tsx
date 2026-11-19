import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { NAVIGATION_ITEMS, PROFILE } from '@/data/portfolioData';
import type { ThemePreference } from '@/utils/portfolio';

interface FooterProps {
  themePreference: ThemePreference;
  onChangeTheme: (pref: ThemePreference) => void;
}

const Footer = ({ themePreference, onChangeTheme }: FooterProps) => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card font-mono text-[11px] font-medium text-foreground">
                NS
              </span>
              <span className="font-display text-sm font-semibold text-foreground">
                {PROFILE.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              IT support specialist and full-stack developer building reliable systems
              and modern web applications.
            </p>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              {PROFILE.location} · Open to remote work
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-2">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-sm py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <p className="eyebrow">Elsewhere</p>
            <div className="flex items-center gap-2">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Send an email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
            © {year} {PROFILE.name} · Built with React, TypeScript &amp; Tailwind
          </p>

          <div className="flex items-center gap-2">
            <ThemeToggle value={themePreference} onChange={onChangeTheme} />
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-xs font-medium text-foreground transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ArrowUp className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
