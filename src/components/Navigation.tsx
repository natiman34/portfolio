import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import ThemeToggle from '@/components/ThemeToggle';
import { NAVIGATION_ITEMS, PROFILE } from '@/data/portfolioData';
import { getActiveSectionId, type ThemePreference } from '@/utils/portfolio';

interface NavigationProps {
  themePreference: ThemePreference;
  onChangeTheme: (pref: ThemePreference) => void;
  onHireClick: () => void;
}

const Navigation = ({
  themePreference,
  onChangeTheme,
  onHireClick,
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 12);

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0
      );

      const rects = NAVIGATION_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: rect.top, bottom: rect.bottom };
      }).filter((item): item is NonNullable<typeof item> => item !== null);

      if (rects.length > 0) {
        const offset = Math.min(260, Math.round(window.innerHeight * 0.3));
        setActiveSection(getActiveSectionId(rects, offset));
      }
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const navigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            navigateToSection('home');
          }}
          aria-label={`${PROFILE.name} — back to top`}
          className="group flex shrink-0 items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card font-mono text-[11px] font-medium tracking-tight text-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
            NS
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-semibold tracking-tight text-foreground">
              Natnael Sema
            </span>
            <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:block">
              IT Support · Full-Stack
            </span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(item.id);
                }}
                aria-current={isActive ? 'location' : undefined}
                className={`relative rounded-md px-3 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-px h-px bg-primary transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle value={themePreference} onChange={onChangeTheme} />

          <Button
            type="button"
            size="sm"
            onClick={onHireClick}
            className="hidden h-9 rounded-lg px-4 text-[13px] font-medium sm:inline-flex"
          >
            Hire me
            <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-lg border-border bg-card text-foreground lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-full max-w-[320px] flex-col bg-background border-border p-6"
            >
              <SheetHeader className="space-y-1 border-b border-border pb-5 text-left">
                <SheetTitle className="font-display text-base text-foreground">
                  {PROFILE.name}
                </SheetTitle>
                <SheetDescription className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  IT Support · Full-Stack Developer
                </SheetDescription>
              </SheetHeader>

              <nav aria-label="Mobile navigation" className="mt-5 flex flex-col">
                {NAVIGATION_ITEMS.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection(item.id);
                      }}
                      aria-current={isActive ? 'location' : undefined}
                      className={`flex items-center justify-between gap-3 border-b border-border/60 py-3.5 text-sm font-medium transition-colors ${
                        isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </a>
                  );
                })}
              </nav>

              <div className="mt-auto space-y-4 pt-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="eyebrow">Theme</span>
                  <ThemeToggle value={themePreference} onChange={onChangeTheme} />
                </div>

                <Button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onHireClick();
                  }}
                  className="h-11 w-full text-sm font-medium"
                >
                  Start a conversation
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>

                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {PROFILE.location} · Available remotely
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-border/60" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-primary/80 transition-transform duration-150"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </header>
  );
};

export default Navigation;
