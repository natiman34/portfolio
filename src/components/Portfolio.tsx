import { lazy, Suspense, useState } from 'react';
import { ArrowUpRight, Check, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FilterTabs from '@/components/FilterTabs';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { FUTURE_PROJECT_TYPES, PROJECTS, PROJECT_CATEGORIES } from '@/data/portfolioData';
import { filterProjectsByCategory, type ProjectItem } from '@/utils/portfolio';
import ProjectVisual from './ProjectVisual';

const ProjectModal = lazy(() => import('./ProjectModal'));

interface PortfolioProps {
  onInquireProject: (projectTitle: string) => void;
}

const Portfolio = ({ onInquireProject }: PortfolioProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const visibleProjects = filterProjectsByCategory(PROJECTS, selectedCategory);

  return (
    <section id="projects" className="border-t border-border py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title="Applications built around real, specific problems"
          description="Each project solved a concrete workflow problem — from large-classroom attendance to focused daily planning and collaborative full-stack delivery."
        >
          <FilterTabs
            label="Filter projects by category"
            options={PROJECT_CATEGORIES}
            value={selectedCategory}
            onChange={setSelectedCategory}
          />
        </SectionHeading>

        <div className="mt-12 space-y-6">
          {visibleProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const projectNumber =
              PROJECTS.findIndex((item) => item.id === project.id) + 1;

            return (
              <Reveal key={project.id} delay={index * 60}>
                <article className="panel group overflow-hidden transition-colors hover:border-foreground/20">
                  <div className="grid lg:grid-cols-12">
                    <div
                      className={`relative border-b border-border lg:col-span-5 lg:border-b-0 ${
                        isReversed
                          ? 'lg:order-2 lg:border-l'
                          : 'lg:border-r'
                      }`}
                    >
                      <div className="h-full min-h-[220px]">
                        <ProjectVisual slug={project.slug} />
                      </div>
                    </div>

                    <div
                      className={`flex min-w-0 flex-col p-6 sm:p-8 lg:col-span-7 ${
                        isReversed ? 'lg:order-1' : ''
                      }`}
                    >
                      <p className="meta-row">
                        <span className="text-primary">
                          {String(projectNumber).padStart(2, '0')}
                        </span>
                        <span aria-hidden="true">/</span>
                        <span>{project.category}</span>
                        <span aria-hidden="true">/</span>
                        <span>{project.role}</span>
                      </p>

                      <h3 className="heading-sub mt-3">{project.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>

                      <p className="mt-5 text-sm leading-relaxed text-foreground/85">
                        {project.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {project.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <Check
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies used">
                        {project.technologies.map((technology) => (
                          <li key={technology} className="tag">
                            {technology}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-border pt-5">
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => setActiveProject(project)}
                          className="h-9 rounded-lg px-4 text-xs font-medium"
                        >
                          View case study
                          <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                        </Button>

                        {project.sourceUrl ? (
                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="h-9 rounded-lg px-3 text-xs font-medium text-muted-foreground hover:text-foreground"
                          >
                            <a
                              href={project.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                              Repository
                            </a>
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {visibleProjects.length === 0 ? (
          <div className="mt-12 rounded-xl border border-dashed border-border p-10 text-center">
            <p className="text-sm text-muted-foreground">
              No projects in this category yet.
            </p>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCategory('All')}
              className="mt-3"
            >
              Show all projects
            </Button>
          </div>
        ) : null}

        <Reveal className="mt-8">
          <div className="panel flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="max-w-xl">
              <p className="eyebrow">Available for custom work</p>
              <h3 className="mt-2 text-base font-medium text-foreground">
                Need something similar built? I take on focused web and internal-tool
                projects.
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {FUTURE_PROJECT_TYPES.join(' · ')}
              </p>
            </div>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onInquireProject('New Web Application Project')}
              className="h-9 shrink-0 self-start rounded-lg px-4 text-xs font-medium sm:self-auto"
            >
              Start a project
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </div>

      <Suspense fallback={null}>
        {activeProject !== null ? (
          <ProjectModal
            project={activeProject}
            open={activeProject !== null}
            onOpenChange={(open) => {
              if (!open) setActiveProject(null);
            }}
            onInquireProject={onInquireProject}
          />
        ) : null}
      </Suspense>
    </section>
  );
};

export default Portfolio;
