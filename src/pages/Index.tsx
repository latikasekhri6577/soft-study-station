import HeroSection from "@/components/HeroSection";
import DailyStudyTracker from "@/components/DailyStudyTracker";
import DSASection from "@/components/DSASection";
import CoreCSSection from "@/components/CoreCSSection";
import InterviewPrepSection from "@/components/InterviewPrepSection";
import WeeklyGoalsSection from "@/components/WeeklyGoalsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <HeroSection />
        <DailyStudyTracker />
        <DSASection />
        <CoreCSSection />
        <InterviewPrepSection />
        <WeeklyGoalsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
