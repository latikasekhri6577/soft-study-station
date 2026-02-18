const subjects = [
  { name: "Operating Systems", short: "OS", emoji: "💻", color: "bg-lavender-light", topics: ["Process Management", "Memory Management", "File Systems", "Deadlocks"] },
  { name: "DBMS", short: "DBMS", emoji: "🗄️", color: "bg-secondary", topics: ["Normalization", "SQL Queries", "Transactions", "Indexing"] },
  { name: "Computer Networks", short: "CN", emoji: "🌐", color: "bg-accent", topics: ["OSI Model", "TCP/IP", "HTTP/HTTPS", "DNS"] },
  { name: "OOPS", short: "OOPS", emoji: "🧱", color: "bg-mint", topics: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"] },
];

const CoreCSSection = () => {
  return (
    <section className="section-fade-in stagger-3">
      <h2 className="text-2xl font-display font-bold mb-5">📖 Core CS Subjects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((subject) => (
          <div key={subject.short} className={`${subject.color} rounded-2xl p-5 border border-border transition-all duration-300 hover:shadow-md`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{subject.emoji}</span>
              <h3 className="font-display font-bold text-foreground">{subject.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {subject.topics.map((topic) => (
                <span key={topic} className="text-xs font-medium bg-card/70 text-foreground px-3 py-1 rounded-full">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreCSSection;
