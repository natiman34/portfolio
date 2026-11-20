import { CheckCircle2, Clock, Users, LayoutGrid } from 'lucide-react';

interface ProjectVisualProps {
  slug: string;
}

const ProjectVisual = ({ slug }: ProjectVisualProps) => {
  if (slug === 'amn') {
    return (
      <div className="w-full h-full bg-background/90 p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pb-2 border-b border-border">
          <span className="flex items-center gap-1.5 text-foreground font-medium">
            <Users className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            AMN · Classroom Roster
          </span>
          <span>Offline Mode · Max 120</span>
        </div>

        <div className="space-y-2 my-3">
          {[
            { name: 'Abebe Bekele', id: 'CS-014', present: true },
            { name: 'Sara Tadesse', id: 'CS-029', present: true },
            { name: 'Dawit Mekonnen', id: 'CS-041', present: false },
          ].map((row) => (
            <div
              key={row.id}
              className="flex items-center justify-between px-3 py-1.5 rounded-md bg-card border border-border text-xs"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
                  {row.id}
                </span>
                <span className="font-medium text-foreground">{row.name}</span>
              </div>
              <span
                className={`text-[11px] font-medium ${
                  row.present ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {row.present ? 'Present' : 'Absent'}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
          <span>Session Report Ready</span>
          <span className="font-mono tabular-nums text-foreground">Local Storage</span>
        </div>
      </div>
    );
  }

  if (slug === 'plandroid') {
    return (
      <div className="w-full h-full bg-background/90 p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pb-2 border-b border-border">
          <span className="flex items-center gap-1.5 text-foreground font-medium">
            <Clock className="h-3.5 w-3.5 text-accent-vivid" aria-hidden="true" />
            PlanDroid · Focus &amp; Goals
          </span>
          <span>Daily Summary</span>
        </div>

        <div className="grid grid-cols-5 gap-2.5 my-3 items-center">
          <div className="col-span-2 rounded-md bg-card border border-border p-2.5 text-center">
            <p className="text-[10px] text-muted-foreground">Focus Block</p>
            <p className="font-mono text-lg font-semibold text-foreground tabular-nums mt-0.5">
              25:00
            </p>
            <p className="text-[10px] text-primary mt-0.5">Active Goal</p>
          </div>
          <div className="col-span-3 space-y-1.5">
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-card border border-border text-[11px]">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" aria-hidden="true" />
              <span className="text-foreground leading-snug">Review API architecture</span>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-card border border-border text-[11px]">
              <CheckCircle2 className="h-3.5 w-3.5 text-muted-foreground shrink-0" aria-hidden="true" />
              <span className="text-muted-foreground leading-snug">Build responsive UI layout</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
          <span>Daily Planner · Progress</span>
          <span className="font-mono text-foreground">Goal Tracker</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-background/90 p-4 flex flex-col justify-between select-none">
      <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pb-2 border-b border-border">
        <span className="flex items-center gap-1.5 text-foreground font-medium">
          <LayoutGrid className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Full-Stack Web Application
        </span>
        <span>Agile Delivery</span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3">
        <div className="p-2.5 rounded-md bg-card border border-border">
          <p className="text-[10px] text-muted-foreground">Frontend</p>
          <p className="text-xs font-medium text-foreground mt-1">React UI</p>
        </div>
        <div className="p-2.5 rounded-md bg-card border border-border">
          <p className="text-[10px] text-muted-foreground">Backend</p>
          <p className="text-xs font-medium text-foreground mt-1">Node.js</p>
        </div>
        <div className="p-2.5 rounded-md bg-card border border-border">
          <p className="text-[10px] text-muted-foreground">Process</p>
          <p className="text-xs font-medium text-foreground mt-1">Team Lead</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
        <span>End-to-End Lifecycle</span>
        <span className="font-mono text-foreground">Capstone</span>
      </div>
    </div>
  );
};

export default ProjectVisual;
