import { Calendar, ClipboardList, Clock } from "lucide-react";
import { StatCard } from "./statCard";

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <StatCard
        title="Consultations"
        value="24"
        growth="12%"
        Icon={Calendar}
        color="bg-blue-600"
      />
      <StatCard
        title="Prescriptions"
        value="08"
        growth="2%"
        Icon={ClipboardList}
        color="bg-purple-600"
      />
      <StatCard
        title="Clinic Hours"
        value="142h"
        growth="24%"
        Icon={Clock}
        color="bg-black"
      />
    </div>
  );
};