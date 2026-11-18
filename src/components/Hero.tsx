import {
  ArrowRight,
  Download,
  Github,
  Globe,
  Laptop,
  Layers,
  Linkedin,
  Mail,
  Moon,
  ShieldCheck,
  Sun,
  Terminal,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PROFILE } from '@/data/portfolioData';
import type { ThemePreference } from '@/utils/portfolio';
import profileImage from '@/assets/natnael-profile-real.jpg';

interface HeroProps {
  themePreference: ThemePreference;
  onChangeTheme: (pref: ThemePreference) => void;
  onHireClick: () => void;
  onViewProjectsClick: () => void;
}

const THEME_OPTIONS: { value: ThemePreference; label: string; icon: typeof Sun }[] = [
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'system', label: 'System', icon: Laptop },
];

const Hero = ({
  themePreference,
  onChangeTheme,
  onHireClick,
  onViewProjectsClick,
}: HeroProps) => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 subtle-grid-bg opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[460px] h-[460px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Utility Row: Availability + 3-Mode Theme Selector */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-border/70">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 font-medium text-foreground">
              <Globe className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
              {PROFILE.availability}
            </span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              {PROFILE.location}
            </span>
          </div>

          <div
            role="group"
            aria-label="Color theme preference"
            className="inline-flex items-center gap-1 p-1 rounded-lg border border-border bg-card"
          >
            {THEME_OPTIONS.map((option) => {
              const Icon = option.icon;
              const isSelected = themePreference === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onChangeTheme(option.value)}
                  aria-pressed={isSelected}
                  aria-label={`Use ${option.label.toLowerCase()} theme`}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isSelected
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Split Hero */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Primary Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center min-w-0">
            <p className="text-sm font-medium text-primary mb-3">
              {PROFILE.roleTitle}
            </p>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-tight mb-4">
              {PROFILE.name}
            </h1>

            <p className="text-lg sm:text-2xl font-display font-semibold text-foreground/90 mb-5">
              {PROFILE.headline}
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {PROFILE.heroIntro}
            </p>

            {/* Primary & Secondary CTAs + CV Download */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <Button
                type="button"
                size="lg"
                onClick={onViewProjectsClick}
                className="hero-primary-btn h-11 px-5 sm:px-6 font-medium whitespace-nowrap shrink-0"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={onHireClick}
                className="h-11 px-5 sm:px-6 border-border bg-card hover:bg-secondary text-foreground font-medium whitespace-nowrap shrink-0"
              >
                Contact Me
              </Button>

              <a
                href={PROFILE.cvUrl}
                download="Natnael_Sema_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 min-h-[44px] text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Direct Profile Links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Natnael Sema on GitHub"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true" className="text-border">/</span>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Natnael Sema on LinkedIn"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-border">/</span>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email Natnael Sema"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Developer Workspace & Portrait Visual */}
          <div className="lg:col-span-5 flex flex-col min-w-0">
            <div className="surface-card p-4 sm:p-6 h-full flex flex-col justify-between gap-6 relative overflow-hidden min-w-0">
              <div className="flex items-center gap-3.5 sm:gap-4 pb-5 border-b border-border min-w-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-border bg-secondary shrink-0">
                  <img
                    src={profileImage}
                    alt="Portrait of Natnael Sema"
                    width={80}
                    height={80}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="font-display text-lg font-semibold text-foreground truncate">
                    Natnael Sema
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    BSc Computer Science · Addis Ababa
                  </p>
                  <p className="text-xs text-primary font-medium mt-1">
                    Full-Stack Web &amp; IT Support
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background/80 p-3.5 sm:p-4 font-mono text-xs leading-relaxed overflow-x-auto min-w-0 max-w-full">
                <div className="flex items-center justify-between gap-2 text-muted-foreground pb-2.5 mb-3 border-b border-border">
                  <span className="truncate">workspace / profile.ts</span>
                  <span className="shrink-0">TypeScript</span>
                </div>
                <pre className="text-foreground/90 whitespace-pre-wrap sm:whitespace-pre break-words">
                  <code>
                    <span className="text-primary">const</span> profile = {'{\n'}
                    {'  '}development: [<span className="text-accent-vivid">&quot;React&quot;</span>, <span className="text-accent-vivid">&quot;Node.js&quot;</span>],{'\n'}
                    {'  '}operations: [<span className="text-accent-vivid">&quot;Windows 11&quot;</span>, <span className="text-accent-vivid">&quot;LAN/Wi-Fi&quot;</span>],{'\n'}
                    {'  '}focus: <span className="text-accent-vivid">&quot;Practical Web Apps &amp; IT Reliability&quot;</span>{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                <div className="p-2 sm:p-3 rounded-lg bg-secondary/50 border border-border/70 min-w-0">
                  <Layers className="h-4 w-4 text-primary mb-1.5" aria-hidden="true" />
                  <p className="text-xs font-medium text-foreground">Frontend</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Responsive UI</p>
                </div>
                <div className="p-2 sm:p-3 rounded-lg bg-secondary/50 border border-border/70 min-w-0">
                  <Terminal className="h-4 w-4 text-primary mb-1.5" aria-hidden="true" />
                  <p className="text-xs font-medium text-foreground">Full-Stack</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Web app logic</p>
                </div>
                <div className="p-2 sm:p-3 rounded-lg bg-secondary/50 border border-border/70 min-w-0">
                  <ShieldCheck className="h-4 w-4 text-primary mb-1.5" aria-hidden="true" />
                  <p className="text-xs font-medium text-foreground">IT Systems</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Support &amp; net</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;