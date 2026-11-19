import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PROFILE } from '@/data/portfolioData';
import profileImage from '@/assets/natnael-profile-real.jpg';

interface HeroProps {
  onHireClick: () => void;
  onViewProjectsClick: () => void;
}

const Hero = ({ onHireClick, onViewProjectsClick }: HeroProps) => {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 subtle-grid-bg grid-fade opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-7">
            <p className="meta-row">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-[10px] tracking-[0.12em] text-foreground">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--success))]"
                />
                {PROFILE.availability}
              </span>
              <span className="hidden items-center gap-1.5 sm:inline-flex">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                {PROFILE.location}
              </span>
            </p>

            <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              IT Support Specialist · Full-Stack Developer
            </p>

            <h1 className="heading-xl mt-4">{PROFILE.name}</h1>

            <p className="mt-6 max-w-xl font-display text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl">
              {PROFILE.headline}
            </p>

            <p className="lede mt-4 max-w-xl">{PROFILE.heroIntro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button
                type="button"
                size="lg"
                onClick={onViewProjectsClick}
                className="h-11 rounded-lg px-5 text-sm font-medium"
              >
                View projects
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-lg border-border bg-card px-5 text-sm font-medium"
              >
                <a
                  href={PROFILE.cvUrl}
                  download="Natnael_Sema_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </Button>

              <button
                type="button"
                onClick={onHireClick}
                className="link-inline h-11 px-1 text-sm"
              >
                Contact me
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-5">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Natnael Sema on GitHub"
                className="group inline-flex items-center gap-2 rounded-sm py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.12em]">
                  GitHub
                </span>
                <ArrowUpRight
                  className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Natnael Sema on LinkedIn"
                className="group inline-flex items-center gap-2 rounded-sm py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.12em]">
                  LinkedIn
                </span>
                <ArrowUpRight
                  className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email Natnael Sema"
                className="group inline-flex items-center gap-2 rounded-sm py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.12em]">
                  Email
                </span>
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[400px] lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 top-3 left-3 rounded-xl border border-border/70"
              />
              <figure className="panel relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Portrait / 01
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {PROFILE.location.split(',')[0]}
                  </span>
                </div>

                <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
                  <img
                    src={profileImage}
                    alt="Portrait of Natnael Sema"
                    width={640}
                    height={800}
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center saturate-[0.92]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent"
                  />
                </div>

                <figcaption className="border-t border-border px-4 py-3.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Currently
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-foreground">
                    IT Support Technician · SNV
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    BSc Computer Science, Addis Ababa University · 2025
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
