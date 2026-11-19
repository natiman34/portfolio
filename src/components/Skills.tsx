import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { SKILL_CATEGORIES } from '@/data/portfolioData';

const Skills = () => {
  const [activeId, setActiveId] = useState<string>(SKILL_CATEGORIES[0].id);
  const activeCategory =
    SKILL_CATEGORIES.find((category) => category.id === activeId) ??
    SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="border-t border-border bg-muted/30 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          eyebrow="Capabilities"
          title="A practical toolkit across support, systems and the web"
          description="Competencies grounded in real coursework, full-stack builds and hands-on end-user support — grouped by how they are used."
        />

        <Reveal className="mt-12">
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <div
              role="group"
              aria-label="Select a skill category"
              className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:col-span-4 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
            >
              {SKILL_CATEGORIES.map((category, index) => {
                const isActive = category.id === activeCategory.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveId(category.id)}
                    aria-pressed={isActive}
                    className={`group flex shrink-0 items-center justify-between gap-4 rounded-lg border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:w-full ${
                      isActive
                        ? 'border-primary/40 bg-card text-foreground'
                        : 'border-border bg-card/40 text-muted-foreground hover:border-foreground/20 hover:text-foreground'
                    }`}
                  >
                    <span className="flex min-w-0 items-baseline gap-2.5">
                      <span
                        className={`font-mono text-[10px] tracking-[0.1em] ${
                          isActive ? 'text-primary' : 'text-muted-foreground/70'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="truncate text-sm font-medium">
                        {category.title}
                      </span>
                    </span>
                    <span
                      className={`hidden font-mono text-[10px] tabular-nums lg:block ${
                        isActive ? 'text-primary' : 'text-muted-foreground/70'
                      }`}
                    >
                      {category.items.length}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8">
              <div className="panel h-full p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-5">
                  <div>
                    <p className="eyebrow">{activeCategory.group}</p>
                    <h3 className="heading-sub mt-2">{activeCategory.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {activeCategory.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {String(activeCategory.items.length).padStart(2, '0')} competencies
                  </span>
                </div>

                <ul className="mt-2 grid sm:grid-cols-2 sm:gap-x-8">
                  {activeCategory.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-3 border-b border-border/60 py-3 text-sm text-foreground/90 last:border-b-0"
                    >
                      <Plus
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{skill}</span>
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

export default Skills;
