import { MessageSquare, FileText, Mic } from "lucide-react";

const items = [
  {
    title: "HR Questions",
    description: "Prepare answers for common HR interview questions like 'Tell me about yourself', strengths, weaknesses, etc.",
    icon: MessageSquare,
    color: "bg-peach",
  },
  {
    title: "Resume Builder",
    description: "Craft a clean, ATS-friendly resume highlighting your skills, projects, and achievements.",
    icon: FileText,
    color: "bg-lavender-light",
  },
  {
    title: "Mock Interview Notes",
    description: "Document feedback from mock interviews. Track areas of improvement and confidence levels.",
    icon: Mic,
    color: "bg-accent",
  },
];

const InterviewPrepSection = () => {
  return (
    <section className="section-fade-in stagger-4">
      <h2 className="text-2xl font-display font-bold mb-5">🎤 Interview Preparation</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.title} className={`${item.color} rounded-2xl p-5 border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}>
            <item.icon className="w-6 h-6 text-foreground mb-3" />
            <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterviewPrepSection;
