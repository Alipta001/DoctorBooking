import { ChevronRight } from "lucide-react";

export const ScheduleSection = () => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 p-10 shadow-sm">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-bold tracking-tighter italic text-black">
          Schedule
        </h2>
        <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
          Calendar View
        </button>
      </div>

      <div className="space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-gray-100 border border-gray-50" />
              <div>
                <h5 className="font-bold text-lg text-black group-hover:translate-x-1 transition-transform">
                  Dr. Julianne Moore
                </h5>
                <p className="text-sm text-gray-400 font-medium tracking-tight">
                  Dermatologist • 10:30 AM
                </p>
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-black group-hover:text-white transition-all text-black">
              <ChevronRight size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};