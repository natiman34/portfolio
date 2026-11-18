import { useState } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  Github,
  Layers,
  Pause,
  Play,
  RotateCcw,
  Users,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { ProjectItem } from '@/utils/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onInquireProject: (projectTitle: string) => void;
}

const INITIAL_ROSTER = [
  { id: 'STU-001', name: 'Abebe Bekele', present: true },
  { id: 'STU-002', name: 'Hanna Tesfaye', present: true },
  { id: 'STU-003', name: 'Dawit Mekonnen', present: false },
  { id: 'STU-004', name: 'Meron Alemu', present: true },
];

const INITIAL_PLAN_TASKS = [
  { id: 't1', label: 'Plan daily priority tasks', done: true },
  { id: 't2', label: 'Complete 25-min focus block', done: false },
  { id: 't3', label: 'Review daily goal summary', done: false },
];

const ProjectModal = ({
  project,
  open,
  onOpenChange,
  onInquireProject,
}: ProjectModalProps) => {
  const [roster, setRoster] = useState(INITIAL_ROSTER);
  const [tasks, setTasks] = useState(INITIAL_PLAN_TASKS);
  const [focusRunning, setFocusRunning] = useState(false);

  if (!project) return null;

  const presentCount = roster.filter((s) => s.present).length;
  const completedTasks = tasks.filter((t) => t.done).length;

  const toggleStudent = (id: string) => {
    setRoster((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[88vh] overflow-y-auto bg-card border-border text-foreground p-5 sm:p-6">
        <DialogHeader className="text-left pb-3 border-b border-border">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-1">
            <span className="font-medium text-primary">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>
          <DialogTitle className="font-display text-xl sm:text-2xl text-foreground">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground pt-1">
            {project.summary}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-1">
          {/* Interactive Preview for AMN */}
          {project.slug === 'amn' && (
            <div className="rounded-xl border border-border bg-background p-3.5 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-border">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground">
                  <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>Interactive Classroom Attendance Preview</span>
                </div>
                <span className="text-xs font-mono tabular-nums text-muted-foreground">
                  Present: {presentCount}/{roster.length} (Sample of 120 capacity)
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {roster.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg border border-border bg-card"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                        {student.id}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                        {student.name}
                      </span>
                    </div>
                    <Button
                      type="button"
                      size="sm"
                      variant={student.present ? 'default' : 'outline'}
                      onClick={() => toggleStudent(student.id)}
                      className="h-7 px-2.5 text-xs whitespace-nowrap shrink-0"
                    >
                      {student.present ? 'Present' : 'Absent'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Preview for PlanDroid */}
          {project.slug === 'plandroid' && (
            <div className="rounded-xl border border-border bg-background p-3.5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-border">
                <span className="text-xs sm:text-sm font-semibold text-foreground">
                  Interactive Daily Planning &amp; Focus Preview
                </span>
                <span className="text-xs font-mono tabular-nums text-muted-foreground">
                  Progress: {completedTasks}/{tasks.length} completed
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 rounded-lg bg-card border border-border">
                <div>
                  <p className="text-[11px] text-muted-foreground">Focus Session</p>
                  <p className="font-mono text-base font-semibold text-foreground tabular-nums">
                    25:00 {focusRunning ? '· Running' : '· Ready'}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => setFocusRunning((prev) => !prev)}
                    className="h-8 px-3 text-xs whitespace-nowrap"
                  >
                    {focusRunning ? (
                      <>
                        <Pause className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" />
                        Start Focus
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    aria-label="Reset focus preview"
                    onClick={() => {
                      setFocusRunning(false);
                      setTasks(INITIAL_PLAN_TASKS);
                    }}
                    className="h-8 px-2 text-xs text-muted-foreground"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  </Button>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-2">
                {tasks.map((task) => (
                  <button
                    key={task.id}
                    type="button"
                    onClick={() => toggleTask(task.id)}
                    className="flex items-center justify-between gap-2 px-3 py-2 rounded-lg border border-border bg-card text-left hover:border-primary/40 transition-colors"
                  >
                    <span
                      className={`text-xs ${
                        task.done
                          ? 'line-through text-muted-foreground'
                          : 'text-foreground'
                      }`}
                    >
                      {task.label}
                    </span>
                    <span className="text-[11px] font-medium text-primary shrink-0">
                      {task.done ? 'Done' : 'Pending'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Problem / Solution / Architecture Grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg border border-border bg-background/70">
              <h4 className="text-xs font-semibold text-primary mb-1.5">Problem</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
            <div className="p-3.5 rounded-lg border border-border bg-background/70">
              <h4 className="text-xs font-semibold text-primary mb-1.5">Solution</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg border border-border bg-background/70">
            <div className="flex items-center gap-2 mb-1.5">
              <Layers className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              <h4 className="text-xs font-semibold text-foreground">Architecture</h4>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Features & Lessons Learned */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold text-foreground mb-2">
                Key Features
              </h4>
              <ul className="space-y-1.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-foreground mb-2">
                Lessons Learned
              </h4>
              <ul className="space-y-1.5">
                {project.lessonsLearned.map((lesson) => (
                  <li
                    key={lesson}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle2
                      className="h-3.5 w-3.5 text-accent-vivid shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div className="pt-2 border-t border-border">
            <p className="text-xs font-mono text-muted-foreground">
              <span className="font-sans font-semibold text-foreground mr-2">
                Stack:
              </span>
              {project.technologies.join(' · ')}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
            {project.sourceUrl && (
              <Button asChild variant="outline" size="sm" className="h-9 px-4">
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                  View Source
                </a>
              </Button>
            )}
            <Button
              type="button"
              size="sm"
              onClick={() => {
                onOpenChange(false);
                onInquireProject(project.title);
              }}
              className="hero-primary-btn h-9 px-4"
            >
              <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
              Discuss a Similar Build
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
