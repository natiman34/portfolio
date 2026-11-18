import { useState } from 'react';
import {
  Check,
  Code2,
  MonitorCog,
  Network,
  Shield,
  Wrench,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { filterSkillsByGroup, type SkillGroupKey } from '@/utils/portfolio';

const CATEGORY_ICONS: Record<string, typeof Code2> = {
  development: Code2,
  'it-support': MonitorCog,
  networking: Network,
  cybersecurity: Shield,
  tools: Wrench,
};

const SKILL_GROUPS: readonly SkillGroupKey[] = [
  'All',
  'Development',
  'IT & Networking',
  'Security & Tools',
] as const;

const Skills = () => {
  const [selectedGroup, setSelectedGroup] = useState<SkillGroupKey>('All');
  const visibleCategories = filterSkillsByGroup(SKILL_CATEGORIES, selectedGroup);

  return (
    <section id="skills" className="py-20 lg:py-24 bg-muted/25 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary mb-2">Technical Skills</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Capabilities across web development, IT operations, and networking
            </h2>
            <p className="text-base text-muted-foreground">
              Structured competencies grounded in real coursework, full-stack application builds, and hands-on IT support work.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter skills by discipline"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-secondary/70 border border-border self-start lg:self-auto"
          >
            {SKILL_GROUPS.map((group) => {
              const isSelected = selectedGroup === group;
              return (
                <button
                  key={group}
                  type="button"
                  onClick={() => setSelectedGroup(group)}
                  aria-pressed={isSelected}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isSelected
                      ? 'bg-card text-foreground shadow-sm border border-border'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {group}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] || Code2;

            return (
              <div
                key={category.id}
                className="surface-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        {category.group}
                      </p>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5">
                    {category.subtitle}
                  </p>

                  <ul className="space-y-2.5">
                    {category.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-sm text-foreground/90"
                      >
                        <Check
                          className="h-3.5 w-3.5 text-primary shrink-0"
                          aria-hidden="true"
                        />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;