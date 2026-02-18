import { useState } from "react";
import { Plus, X } from "lucide-react";

const defaultGoals = [
  "Solve 5 DSA problems daily",
  "Complete OS notes by Friday",
  "Push 1 project commit daily",
];

const WeeklyGoalsSection = () => {
  const [goals, setGoals] = useState(defaultGoals);
  const [newGoal, setNewGoal] = useState("");

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, newGoal.trim()]);
      setNewGoal("");
    }
  };

  const removeGoal = (index: number) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  return (
    <section className="section-fade-in stagger-5">
      <h2 className="text-2xl font-display font-bold mb-5">🎯 Weekly Goals</h2>
      <div className="pastel-card space-y-3">
        {goals.map((goal, i) => (
          <div key={i} className="flex items-center justify-between bg-muted/50 rounded-xl px-4 py-3 group">
            <span className="text-sm font-medium">{goal}</span>
            <button onClick={() => removeGoal(i)} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        <div className="flex gap-2 pt-1">
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addGoal()}
            placeholder="Add a new goal..."
            className="flex-1 text-sm bg-muted/40 border border-border rounded-xl px-4 py-2.5 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            onClick={addGoal}
            className="bg-primary text-primary-foreground rounded-xl px-4 py-2.5 hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeeklyGoalsSection;
