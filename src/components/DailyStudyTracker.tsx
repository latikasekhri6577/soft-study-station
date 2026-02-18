import { useState } from "react";
import { CheckSquare, Square } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const tasks = [
  { id: "dsa", label: "DSA Practice", emoji: "🧠" },
  { id: "core", label: "Core Subjects (OS, DBMS, CN, OOPS)", emoji: "📚" },
  { id: "project", label: "Project Work", emoji: "🛠️" },
  { id: "aptitude", label: "Aptitude", emoji: "🔢" },
  { id: "revision", label: "Revision", emoji: "🔁" },
];

const DailyStudyTracker = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const completedCount = Object.values(checked).filter(Boolean).length;
  const progress = (completedCount / tasks.length) * 100;

  return (
    <section className="section-fade-in stagger-1">
      <h2 className="text-2xl font-display font-bold mb-5">📅 Daily Study Tracker</h2>
      <div className="pastel-card space-y-3">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => toggle(task.id)}
            className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl transition-colors hover:bg-muted/60"
          >
            {checked[task.id] ? (
              <CheckSquare className="w-5 h-5 text-primary" />
            ) : (
              <Square className="w-5 h-5 text-muted-foreground" />
            )}
            <span className={`text-sm font-medium ${checked[task.id] ? "line-through text-muted-foreground" : ""}`}>
              {task.emoji} {task.label}
            </span>
          </button>
        ))}
        <div className="pt-3">
          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
            <span>Progress</span>
            <span>{completedCount}/{tasks.length} done</span>
          </div>
          <Progress value={progress} className="h-2.5 bg-muted [&>div]:bg-primary [&>div]:rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default DailyStudyTracker;
