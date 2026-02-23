import { Activity, ChevronRight } from "lucide-react";

export const VitalsCard = () => {
  return (
    <div className="bg-[#EBEDF0] rounded-[3rem] p-10 flex flex-col justify-between group cursor-pointer hover:bg-[#e2e4e7] transition-colors duration-500">
      <div>
        <div className="flex justify-between items-center mb-8 text-black">
          <Activity size={24} />
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
            Live Vitals
          </span>
        </div>

        <h4 className="text-5xl font-bold tracking-tighter mb-2 text-black">
          72 <span className="text-xl text-gray-400 font-medium">BPM</span>
        </h4>

        <p className="text-sm text-gray-500 font-medium">
          Resting Heart Rate is optimal
        </p>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200/50">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black">
          View Health Report <ChevronRight size={14} />
        </div>
      </div>
    </div>
  );
};