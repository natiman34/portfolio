import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { resolveThemeMode, type ThemePreference } from '@/utils/portfolio';

const THEME_STORAGE_KEY = 'portfolio-theme';

const getInitialThemePreference = (): ThemePreference => {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark' || saved === 'system') {
      return saved;
    }
  } catch {
    // Ignore storage errors
  }
  return 'dark';
};

const Index = () => {
  const [themePreference, setThemePreference] = useState<ThemePreference>(
    getInitialThemePreference
  );
  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [presetSubject, setPresetSubject] = useState<string>('');
  const [focusTrigger, setFocusTrigger] = useState<number>(0);

  useEffect(() => {
    if (!window.matchMedia) return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setSystemPrefersDark(e.matches);
    };
    setSystemPrefersDark(media.matches);
    media.addEventListener('change', handleMediaChange);
    return () => media.removeEventListener('change', handleMediaChange);
  }, []);

  const resolvedTheme = resolveThemeMode(themePreference, systemPrefersDark);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', resolvedTheme === 'dark');
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themePreference);
    } catch {
      // Ignore storage errors
    }
  }, [themePreference, resolvedTheme]);

  const scrollToContactWithSubject = (subject: string) => {
    setPresetSubject(subject);
    setFocusTrigger((prev) => prev + 1);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Navigation
        onHireClick={() =>
          scrollToContactWithSubject('Freelance Web Development / IT Role Inquiry')
        }
      />

      <main id="main-content" className="flex-1">
        <Hero
          themePreference={themePreference}
          onChangeTheme={setThemePreference}
          onViewProjectsClick={scrollToProjects}
          onHireClick={() =>
            scrollToContactWithSubject('Freelance Web Development / IT Role Inquiry')
          }
        />
        <About />
        <Skills />
        <Portfolio
          onInquireProject={(projectTitle) =>
            scrollToContactWithSubject(`Project Inquiry: ${projectTitle}`)
          }
        />
        <Experience />
        <Certifications />
        <Contact presetSubject={presetSubject} focusTrigger={focusTrigger} />
      </main>

      <Footer
        themePreference={themePreference}
        onChangeTheme={setThemePreference}
      />
    </div>
  );
};

export default Index;
