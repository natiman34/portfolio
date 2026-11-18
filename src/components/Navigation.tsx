import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAVIGATION_ITEMS } from '@/data/portfolioData';
import { getActiveSectionId } from '@/utils/portfolio';

interface NavigationProps {
  onHireClick: () => void;
}

const Navigation = ({ onHireClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveState = () => {
      setIsScrolled(window.scrollY > 16);

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

    updateActiveState();
    window.addEventListener('scroll', updateActiveState, { passive: true });
    window.addEventListener('resize', updateActiveState, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateActiveState);
      window.removeEventListener('resize', updateActiveState);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-background/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            navigateToSection('home');
          }}
          className="font-display text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          Natnael Sema
        </a>

        {/* Zone 2: Single-line Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6"
        >
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
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-0.5 bg-primary transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            type="button"
            size="sm"
            onClick={onHireClick}
            className="hidden lg:inline-flex hero-primary-btn font-medium px-4 py-2 whitespace-nowrap shrink-0"
          >
            Hire Me
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="lg:hidden h-11 w-11 border-border bg-card text-foreground"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[290px] bg-background border-border">
              <SheetHeader className="text-left pb-4 border-b border-border">
                <SheetTitle className="font-display text-lg text-foreground">
                  Natnael Sema
                </SheetTitle>
                <SheetDescription className="text-xs text-muted-foreground">
                  Full Stack Developer
                </SheetDescription>
              </SheetHeader>

              <nav aria-label="Mobile navigation" className="flex flex-col gap-1 mt-6">
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
                      className={`px-3 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onHireClick();
                  }}
                  className="w-full h-11 hero-primary-btn font-medium"
                >
                  Hire Me
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;