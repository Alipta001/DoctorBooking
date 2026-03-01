"use client";
import { motion } from "framer-motion";

export default function Stats() {
  const data = [
    { label: "Verified Specialists", value: "2.4k+" },
    { label: "Patient Success Rate", value: "99.8%" },
    { label: "Avg. Booking Time", value: "45s" },
    { label: "Support Response", value: "< 2min" },
  ];

  return (
    /* Changed pb-20 to pb-40 to account for the -mt-12 overlap of the search bar */
    <section className="pt-24 pb-40 border-y border-white/5 bg-[#080808] relative overflow-hidden">
      
      {/* Subtle background glow to make numbers pop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-amber-400/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {data.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-3 group-hover:text-amber-400 transition-colors duration-500">
                {item.value}
              </h4>
              <p className="text-[10px] md:text-[11px] font-black text-zinc-500 uppercase tracking-[0.3em] leading-tight">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}