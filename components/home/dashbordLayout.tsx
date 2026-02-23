
import { AiMatchCard } from "./aiMatchCard";
import { HeroSection } from "./heroSection";
import { ScheduleSection } from "./scheduleSection";
import { StatsGrid } from "./statsGrid";



export default function DashboardLayout() {
  return (
    <div className="space-y-8">
      <HeroSection />
      <StatsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ScheduleSection />
        <AiMatchCard />
      </div>
    </div>
  );
}