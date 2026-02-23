
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  value: string;
  growth: string;
  Icon: any;
  color: string;
};

export const StatCard = ({ title, value, growth, Icon, color }: Props) => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 group">
      <div className="flex justify-between items-start mb-6">
        <div
          className={`p-3 rounded-2xl ${color} text-white group-hover:scale-110 transition-transform`}
        >
          <Icon size={20} />
        </div>

        <div className="flex items-center text-emerald-500 text-[10px] font-black tracking-widest bg-emerald-50 px-2 py-1 rounded-lg">
          {growth}
          <ArrowUpRight size={12} className="ml-1" />
        </div>
      </div>

      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">
        {title}
      </p>

      <h3 className="text-3xl font-bold tracking-tighter text-black">
        {value}
      </h3>
    </div>
  );
};