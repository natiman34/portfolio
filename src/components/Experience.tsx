import { ArrowUpRight, GraduationCap } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { EDUCATION, EXPERIENCES } from '@/data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="border-t border-border bg-muted/30 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          eyebrow="Experience & Education"
          title="Support work that sharpened how I build software"
          description="Hands-on diagnosis of hardware, Windows 11 systems and connectivity for real users — habits that carry directly into application development."
        />

        <Reveal className="mt-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <ol className="lg:col-span-8">
              {EXPERIENCES.map((experience, index) => (
                <li
                  key={experience.id}
                  className={`grid gap-3 sm:grid-cols-[148px_1fr] sm:gap-8 ${
                    index === 0 ? '' : 'mt-10'
                  }`}
                >
                  <div className="sm:pt-1">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary">
                      {experience.period}
                    </p>
                    <p className="mt-1.5 text-xs text-muted-foreground">
                      {experience.type}
                    </p>
                  </div>

                  <div className="relative border-l border-border pb-1 pl-6">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[3px] top-2 h-1.5 w-1.5 rounded-full bg-primary"
                    />

                    <h3 className="heading-sub">{experience.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground/90">
                        {experience.organization}
                      </span>
                      <span aria-hidden="true" className="px-1.5 text-border">
                        /
                      </span>
                      {experience.location}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {experience.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tools and focus areas">
                      {experience.technologies.map((technology) => (
                        <li key={technology} className="tag">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <div className="space-y-6 lg:col-span-4">
              <div className="panel p-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
                  <p className="eyebrow">Education</p>
                </div>
                <h3 className="mt-3 text-base font-medium text-foreground">
                  {EDUCATION.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {EDUCATION.institution}
                </p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                  {EDUCATION.period}
                </p>

                <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                  {EDUCATION.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                      />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panel p-6">
                <p className="eyebrow">Transfer</p>
                <h3 className="mt-2 text-base font-medium text-foreground">
                  How IT support elevates my code
                </h3>

                <ul className="mt-4 space-y-3">
                  {[
                    'Structured root-cause debugging before guessing fixes',
                    'Interfaces designed with real non-technical users in mind',
                    'Clear technical documentation and dependable delivery',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <ArrowUpRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Experience;
