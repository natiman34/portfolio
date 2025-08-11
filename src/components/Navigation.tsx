import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const NavigationItems = ({ onItemClick }: { onItemClick?: () => void }) => (
    <>
      <button 
        onClick={() => { scrollToSection('home'); onItemClick?.(); }}
        className="text-muted-foreground hover:text-primary transition-colors w-full text-left py-2"
      >
        Home
      </button>
      <button 
        onClick={() => { scrollToSection('about'); onItemClick?.(); }}
        className="text-muted-foreground hover:text-primary transition-colors w-full text-left py-2"
      >
        About
      </button>
      <button 
        onClick={() => { scrollToSection('portfolio'); onItemClick?.(); }}
        className="text-muted-foreground hover:text-primary transition-colors w-full text-left py-2"
      >
        Projects
      </button>
      <button 
        onClick={() => { scrollToSection('skills'); onItemClick?.(); }}
        className="text-muted-foreground hover:text-primary transition-colors w-full text-left py-2"
      >
        Skills
      </button>
      <button 
        onClick={() => { scrollToSection('contact'); onItemClick?.(); }}
        className="text-muted-foreground hover:text-primary transition-colors w-full text-left py-2"
      >
        Contact
      </button>
    </>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-primary">
            NS
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationItems />
          </div>

          {/* Desktop CTA Button */}
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => scrollToSection('contact')}
            className="hover-glow hidden md:block"
          >
            Get In Touch
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="hover-glow text-xs px-3"
            >
              Contact
            </Button>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="p-2"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-primary">Navigation</h2>
                  </div>
                  
                  <nav className="flex flex-col space-y-2">
                    <NavigationItems onItemClick={() => setIsMobileMenuOpen(false)} />
                  </nav>
                  
                  <div className="pt-6 border-t border-border">
                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
                      className="w-full hover-glow"
                    >
                      Get In Touch
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;