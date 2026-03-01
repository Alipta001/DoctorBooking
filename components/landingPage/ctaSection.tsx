"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      
      {/* Background Decorative Elements - Matching your site's "Glow" theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-[#0A0A0A] border border-white/5 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group">
          
          {/* Subtle Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Sparkles className="text-amber-400" size={14} />
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Ready for elite care?</span>
            </div>

            {/* Main Heading - Using your site's "Architectural" font style */}
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              Experience the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-500 italic">
                Future
              </span> of Medicine.
            </h2>

            {/* Description */}
            <p className="max-w-lg mx-auto text-zinc-500 text-lg md:text-xl font-medium mb-12 leading-relaxed">
              Join an exclusive network of world-class specialists and high-profile patients. Secure, instant, and unparalleled.
            </p>

            {/* Premium Button */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/auth/signup">
                <button className="group relative px-12 py-6 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-amber-400 transition-all duration-500 flex items-center gap-3 cursor-pointer">
                  Open Your Account
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link href="/doctors">
                <button className="px-10 py-6 text-white font-black uppercase text-xs tracking-[0.2em] border border-white/10 rounded-2xl hover:bg-white/5 transition-all cursor-pointer">
                  Browse Specialists
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Abstract Corner Shapes to replace the old SVG divider */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full group-hover:bg-amber-500/20 transition-colors" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full group-hover:bg-blue-500/20 transition-colors" />
        </div>
      </div>
    </section>
  );
}