import { GraduationCap, MapPin, Briefcase, Code2 } from 'lucide-react';
import { EDUCATION, PROFILE } from '@/data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary mb-2">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Combining web development with real-world systems support
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-[17px] text-muted-foreground leading-relaxed">
            {PROFILE.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? 'text-foreground/90' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Factual Snapshot */}
          <div className="lg:col-span-5 surface-card p-6 space-y-5">
            <div className="flex items-start gap-3.5 pb-4 border-b border-border">
              <Code2 className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">Primary Focus</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Full Stack Web Development, Frontend Interfaces &amp; Web Applications
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pb-4 border-b border-border">
              <Briefcase className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">Supporting Strength</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  IT Support, Windows 11 Systems, Hardware &amp; Network Diagnostics
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pb-4 border-b border-border">
              <GraduationCap className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{EDUCATION.degree}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {EDUCATION.institution} · {EDUCATION.period}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{PROFILE.location}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Open to remote freelance web development &amp; technical projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;