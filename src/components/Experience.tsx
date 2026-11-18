import { Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { EDUCATION, EXPERIENCES } from '@/data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-24 bg-muted/25 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary mb-2">
            Experience &amp; Education
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            IT support discipline applied to software development
          </h2>
          <p className="text-base text-muted-foreground">
            Hands-on experience diagnosing technical issues, supporting users and organizational systems, and communicating complex workflows clearly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Experience Timeline Cards */}
          <div className="lg:col-span-8 space-y-5">
            {EXPERIENCES.map((exp) => (
              <article key={exp.id} className="surface-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pb-4 mb-4 border-b border-border">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium text-primary">{exp.organization}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{exp.location}</span>
                      <span aria-hidden="true"> · </span>
                      <span>{exp.type}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground whitespace-nowrap shrink-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {exp.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-border/70 space-y-1.5">
                  <p className="text-xs font-mono text-muted-foreground">
                    <span className="font-sans font-medium text-foreground mr-1">
                      Tools &amp; Focus:
                    </span>
                    {exp.technologies.join(' · ')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Transferable strengths:{' '}
                    </span>
                    {exp.transferableStrengths.join(' · ')}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: Education + Transferable Engineering Value */}
          <div className="lg:col-span-4 space-y-5">
            <div className="surface-card p-6">
              <div className="flex items-center gap-2.5 text-primary mb-3">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-semibold">Education</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {EDUCATION.degree}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {EDUCATION.institution}
              </p>
              <p className="text-xs font-mono text-muted-foreground mt-2 pb-3 border-b border-border">
                {EDUCATION.location} · {EDUCATION.period}
              </p>
              <ul className="space-y-1.5 mt-3 text-xs text-muted-foreground">
                {EDUCATION.focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0"
                    />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card p-6 space-y-4">
              <div className="flex items-center gap-2.5 text-primary">
                <Briefcase className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-semibold">
                  How IT Support Elevates My Code
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Working directly with end users, Windows 11 environments, hardware maintenance, and network connectivity builds habits that carry directly into web development:
              </p>
              <ul className="space-y-2 text-sm text-foreground/90">
                <li className="flex items-start gap-2">
                  <ArrowUpRight
                    className="h-4 w-4 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Structured root-cause debugging before guessing fixes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUpRight
                    className="h-4 w-4 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Designing interfaces with real non-technical users in mind</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUpRight
                    className="h-4 w-4 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Clear technical documentation and dependable delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
