import { ArrowUp, Github, Laptop, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import { NAVIGATION_ITEMS, PROFILE } from '@/data/portfolioData';
import type { ThemePreference } from '@/utils/portfolio';

interface FooterProps {
  themePreference: ThemePreference;
  onChangeTheme: (pref: ThemePreference) => void;
}

const Footer = ({ themePreference, onChangeTheme }: FooterProps) => {
  const year = new Date().getFullYear();

  const cycleTheme = () => {
    const order: ThemePreference[] = ['dark', 'light', 'system'];
    const next = order[(order.indexOf(themePreference) + 1) % order.length];
    onChangeTheme(next);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <p className="font-display text-base font-semibold text-foreground">
            {PROFILE.name}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Full Stack Developer &amp; IT Support · {PROFILE.location} · &copy; {year}
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="h-9 w-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-9 w-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="h-9 w-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={cycleTheme}
            aria-label={`Cycle color theme (current: ${themePreference})`}
            title={`Theme: ${themePreference}`}
            className="h-9 px-2.5 rounded-lg border border-border bg-card inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            {themePreference === 'dark' ? (
              <Moon className="h-3.5 w-3.5" aria-hidden="true" />
            ) : themePreference === 'light' ? (
              <Sun className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Laptop className="h-3.5 w-3.5" aria-hidden="true" />
            )}
            <span className="capitalize">{themePreference}</span>
          </button>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="h-9 px-3 rounded-lg border border-border bg-card inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:border-primary/40 transition-colors whitespace-nowrap"
          >
            <ArrowUp className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
