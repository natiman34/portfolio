import { useState } from 'react';
import { ArrowUpRight, Check, FolderGit2, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  FUTURE_PROJECT_TYPES,
  PROJECTS,
  PROJECT_CATEGORIES,
} from '@/data/portfolioData';
import { filterProjectsByCategory, type ProjectItem } from '@/utils/portfolio';
import ProjectVisual from './ProjectVisual';
import ProjectModal from './ProjectModal';

interface PortfolioProps {
  onInquireProject: (projectTitle: string) => void;
}

const Portfolio = ({ onInquireProject }: PortfolioProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const visibleProjects = filterProjectsByCategory(PROJECTS, selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-24 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary mb-2">Featured Projects</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Practical applications built for clarity and reliability
            </h2>
            <p className="text-base text-muted-foreground">
              Explore real projects across classroom management, daily productivity, and full-stack web application development.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-secondary/70 border border-border self-start lg:self-auto"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isSelected}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    isSelected
                      ? 'bg-card text-foreground shadow-sm border border-border'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="surface-card-interactive overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <ProjectVisual slug={project.slug} />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="font-medium text-primary">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.role}</span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4 p-3 rounded-lg bg-secondary/40 border border-border/70">
                    <p className="text-[11px] font-medium text-foreground mb-1">
                      Problem Solved
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.problemSolved}
                    </p>
                  </div>

                  <ul className="space-y-1.5 mb-5">
                    {project.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-foreground/85"
                      >
                        <Check
                          className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs font-mono text-muted-foreground pt-3 border-t border-border">
                    {project.technologies.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex flex-wrap items-center gap-3">
                <Button
                  type="button"
                  size="sm"
                  onClick={() => setActiveProject(project)}
                  className="hero-primary-btn h-9 px-4 text-xs font-medium whitespace-nowrap shrink-0"
                >
                  View Project
                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                </Button>

                {project.sourceUrl && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="h-9 px-3.5 text-xs border-border bg-background/50 whitespace-nowrap shrink-0"
                  >
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                      View Source
                    </a>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 surface-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <FolderGit2 className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">
                Available for Custom Builds &amp; Future Projects
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {FUTURE_PROJECT_TYPES.join(' · ')}
              </p>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => onInquireProject('New Web Application Project')}
            className="h-9 px-4 text-xs font-medium whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            Start a Project
          </Button>
        </div>
      </div>

      {activeProject !== null && (
        <ProjectModal
          project={activeProject}
          open={activeProject !== null}
          onOpenChange={(open) => {
            if (!open) setActiveProject(null);
          }}
          onInquireProject={onInquireProject}
        />
      )}
    </section>
  );
};

export default Portfolio;