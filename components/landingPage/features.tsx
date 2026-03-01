import { Heart, Shield, Clock, Globe } from "lucide-react";

export default function Features() {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <p className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Exceptional Standards</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-none">
              DESIGNED FOR THE<br/> ELITE PATIENT.
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm font-medium leading-relaxed">
            We don't just book appointments. We curate a healthcare journey that respects your time and privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Big Bento Piece */}
          <div className="md:col-span-4 bg-white/[0.03] border border-white/5 rounded-[3rem] p-12 hover:bg-white/[0.05] transition-all group">
            <Heart className="text-pink-500 mb-8" size={40} />
            <h3 className="text-3xl font-bold text-white mb-4 italic">Holistic Intelligence</h3>
            <p className="text-gray-400 max-w-sm">Our system learns your preferences to match you with specialists who share your medical philosophy.</p>
          </div>

          {/* Small Bento Piece */}
          <div className="md:col-span-2 bg-yellow-400 rounded-[3rem] p-12 flex flex-col justify-between group overflow-hidden relative">
            <Shield className="text-black mb-8" size={40} />
            <div>
              <h3 className="text-2xl font-black text-black uppercase tracking-tighter leading-none mb-2">Maximum<br/>Security</h3>
              <p className="text-black/60 text-xs font-bold">End-to-end encrypted medical data storage.</p>
            </div>
          </div>

          {/* Bottom Bento Row */}
          <div className="md:col-span-3 bg-white/[0.03] border border-white/5 rounded-[3rem] p-12 group">
            <Clock className="text-cyan-400 mb-8" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2 italic">Real-time Priority</h3>
            <p className="text-gray-400">Skip the queue with our instant-access VIP scheduling system.</p>
          </div>

          <div className="md:col-span-3 bg-white/[0.03] border border-white/5 rounded-[3rem] p-12 group">
            <Globe className="text-white mb-8" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2 italic">Global Network</h3>
            <p className="text-gray-400">Consult with world-class specialists from any continent, any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}