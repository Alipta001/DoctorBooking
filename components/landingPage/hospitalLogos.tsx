"use client";
import { motion } from "framer-motion";

const logos = [
  "Mayo Clinic", "Johns Hopkins", "Cleveland Clinic", 
  "Stanford Health", "Cedars-Sinai", "Mount Sinai",
  "Mayo Clinic", "Johns Hopkins", "Cleveland Clinic" // Duplicate for infinite scroll
];

export default function HospitalLogos() {
  return (
    <section className="py-20 bg-[#050505] border-b border-white/5">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em]">
          Institutional Partners & Verified Providers
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Gradient Fades for the sides */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center py-4"
        >
          {logos.map((logo, idx) => (
            <span 
              key={idx} 
              className="text-2xl md:text-4xl font-black italic tracking-tighter text-zinc-800 hover:text-zinc-400 transition-colors cursor-default select-none uppercase"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}