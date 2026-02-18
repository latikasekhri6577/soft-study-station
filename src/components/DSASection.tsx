import { useState } from "react";

const topics = [
  { name: "Arrays", emoji: "📊", color: "bg-lavender-light" },
  { name: "Strings", emoji: "🔤", color: "bg-secondary" },
  { name: "Recursion", emoji: "🔄", color: "bg-accent" },
  { name: "Linked List", emoji: "🔗", color: "bg-peach" },
  { name: "Stack & Queue", emoji: "📚", color: "bg-mint" },
  { name: "Trees", emoji: "🌳", color: "bg-lavender-light" },
  { name: "Graphs", emoji: "🕸️", color: "bg-accent" },
  { name: "Dynamic Programming", emoji: "⚡", color: "bg-rose" },
];

const DSASection = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="section-fade-in stagger-2">
      <h2 className="text-2xl font-display font-bold mb-5">🧩 DSA Topics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {topics.map((topic) => (
          <button
            key={topic.name}
            onClick={() => setActive(active === topic.name ? null : topic.name)}
            className={`${topic.color} rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border border-border ${
              active === topic.name ? "ring-2 ring-primary shadow-md" : ""
            }`}
          >
            <div className="text-2xl mb-2">{topic.emoji}</div>
            <div className="text-sm font-semibold text-foreground">{topic.name}</div>
          </button>
        ))}
      </div>
      {active && (
        <div className="mt-4 pastel-card bg-lavender-light/30 text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-1">📌 {active}</p>
          <p>Start practicing {active.toLowerCase()} problems. Track your progress and revisit weak areas regularly!</p>
        </div>
      )}
    </section>
  );
};

export default DSASection;
