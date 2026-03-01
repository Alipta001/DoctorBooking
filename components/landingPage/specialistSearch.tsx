"use client";
import { motion } from "framer-motion";
import { Search, MapPin, Stethoscope, ArrowRight } from "lucide-react";

export default function SpecialistSearch() {
  return (
    <section className="relative -mt-10 md:-mt-14 z-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#121212]/90 backdrop-blur-3xl border border-white/10 p-3 md:p-5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-black/80"
        >
          <div className="flex flex-col md:flex-row items-center gap-3">

            <div className="flex-[1.2] w-full flex items-center gap-4 px-6 py-5 rounded-[2rem] bg-white/5 border border-transparent focus-within:border-amber-400/40 focus-within:bg-white/[0.08] transition-all group">
              <Stethoscope className="text-amber-400 group-hover:scale-110 transition-transform" size={24} />
              <div className="flex flex-col w-full">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-0.5">Find Expertise</span>
                <input 
                  type="text" 
                  placeholder="Specialty (e.g. Cardiology)" 
                  className="bg-transparent border-none outline-none text-white text-base md:text-lg font-bold placeholder:text-zinc-700 w-full"
                />
              </div>
            </div>

            <div className="flex-1 w-full flex items-center gap-4 px-6 py-5 rounded-[2rem] bg-white/5 border border-transparent focus-within:border-white/20 focus-within:bg-white/[0.08] transition-all group">
              <MapPin className="text-zinc-500 group-hover:text-white transition-colors" size={24} />
              <div className="flex flex-col w-full">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-0.5">Location</span>
                <input 
                  type="text" 
                  placeholder="City or Zip" 
                  className="bg-transparent border-none outline-none text-white text-base md:text-lg font-bold placeholder:text-zinc-700 w-full"
                />
              </div>
            </div>
            <button className="w-full md:w-auto px-12 py-6 bg-amber-400 text-black font-black uppercase text-xs tracking-[0.2em] rounded-[2rem] hover:bg-white hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-amber-400/20 cursor-pointer">
              Find Doctor <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-6 px-6 pb-2">
             <span className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.2em]">Popular:</span>
             {['Pediatrics', 'Dermatology', 'Neurology', 'Dental'].map((tag) => (
               <button key={tag} className="text-[11px] font-black text-zinc-300 uppercase tracking-widest hover:text-amber-400 transition-colors border-b border-transparent hover:border-amber-400/50 pb-0.5">
                 {tag}
               </button>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}