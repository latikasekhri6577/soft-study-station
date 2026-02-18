import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-fade-in text-center py-16 px-4">
      <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-lavender-light text-foreground text-sm font-medium">
        Your Placement Journey Starts Here
      </div>
      <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4">
        Becoming Placement Ready{" "}
        <span className="inline-block animate-bounce">🚀</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-6 font-medium">
        DSA &nbsp;|&nbsp; Projects &nbsp;|&nbsp; Core CS &nbsp;|&nbsp; Aptitude &nbsp;|&nbsp; Growth
      </p>
      <div className="flex items-center justify-center gap-2 text-muted-foreground italic max-w-md mx-auto bg-secondary/60 rounded-xl px-6 py-4">
        <Sparkles className="w-4 h-4 text-primary shrink-0" />
        <p className="text-sm">"Small daily improvements are the key to staggering long-term results."</p>
      </div>
    </section>
  );
};

export default HeroSection;
