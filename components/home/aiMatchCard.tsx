import { Plus } from "lucide-react";

export const AiMatchCard = () => {
  return (
    <div className="bg-[#F8F9FA] rounded-[2.5rem] p-10 border border-gray-100 flex flex-col">
      <div className="mb-auto">
        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-black">
          <Plus size={20} />
        </div>

        <h3 className="text-3xl font-bold tracking-tighter mb-4 text-black">
          Finding a specialist?
        </h3>

        <p className="text-gray-500 leading-relaxed mb-8">
          Our AI matches you with the best doctors based on your history and current symptoms.
        </p>
      </div>

      <button className="w-full py-5 bg-white border border-gray-200 rounded-2xl font-black uppercase tracking-widest text-[10px] text-black hover:bg-black hover:text-white transition-all duration-500 shadow-sm">
        Launch AI Matchmaker
      </button>
    </div>
  );
};