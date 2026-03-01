"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex R.",
    role: "Entrepreneur",
    quote: "My physical was due, but finding a good GP is tough. DocReserve matched me perfectly. Instant booking and seamless sync with my Oura ring. Absolutely elite.",
    bgImage: "from-amber-500/10"
  },
  {
    name: "Dr. Sarah K.",
    role: "Athlete",
    quote: "DocReserve isn't just about scheduling; it's concierge health. The level of privacy is unparalleled. I needed a sports medicine specialist instantly and got one in 30 minutes.",
    bgImage: "from-blue-500/10"
  },
  {
    name: "David L.",
    role: "Tech Executive",
    quote: "Global access is crucial for me. While traveling, I needed a prescription renewal. DocReserve’s network handled everything securely from Singapore. Premium care.",
    bgImage: "from-purple-500/10"
  },
  {
    name: "Maria S.",
    role: "Artist",
    quote: "The interface alone tells you it's premium. The scheduling system is silky smooth, and the video quality is superior to anything I've used before. Highly organized.",
    bgImage: "from-emerald-500/10"
  },
  {
    name: "James T.",
    role: "Investor",
    quote: "I trust DocReserve with my sensitive medical data. Their biometric access and military-grade encryption provide peace of mind that no other platform can offer.",
    bgImage: "from-zinc-500/10"
  },
  {
    name: "Isabelle M.",
    role: "Designer",
    quote: "My annual screening was seamless. The AI matched me with the best specialist. Instantly bookable and very intuitive interface for busy professionals.",
    bgImage: "from-cyan-500/10"
  },
];

export default function Comments() {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Verified Patient Stories
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-none"
          >
            The <span className="text-amber-400 italic">Standard</span> of Care.
          </motion.h2>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              // h-full ensures all cards stretch to match the tallest one in the row
              className="relative flex flex-col h-full bg-[#0C0C0C] border border-white/[0.08] rounded-[2.5rem] p-10 hover:border-amber-400/30 transition-all duration-500 group overflow-hidden"
            >
              {/* Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${t.bgImage} to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* User Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center font-bold text-xl text-amber-400 group-hover:scale-110 transition-transform">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-zinc-100 font-bold text-sm tracking-tight">{t.name}</h4>
                      <ShieldCheck className="text-emerald-400" size={14} />
                    </div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-0.5">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 text-amber-400">
                  <Star size={12} fill="currentColor" stroke="none" />
                  <Star size={12} fill="currentColor" stroke="none" />
                  <Star size={12} fill="currentColor" stroke="none" />
                </div>
              </div>

              {/* Testimonial Content - flex-grow ensures this area takes up remaining space */}
              <div className="relative z-10 flex-grow">
                <Quote className="text-amber-400/20 mb-4" size={32} />
                <p className="text-zinc-300 text-base leading-relaxed font-medium line-clamp-4 group-hover:text-white transition-colors">
                  "{t.quote}"
                </p>
              </div>

              {/* Status Badge at the bottom */}
              <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                 <span className="text-[9px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md border border-emerald-400/20 tracking-widest uppercase">
                   Verified Patient
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}