"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Fingerprint, Globe, Smartphone } from "lucide-react";

export default function TrustTech() {
  const items = [
    { icon: ShieldCheck, title: "HIPAA ELITE", desc: "Military-grade data encryption for your records." },
    { icon: Fingerprint, title: "BIOMETRIC", desc: "Secure one-touch access to your health vault." },
    { icon: Globe, title: "GLOBAL ACCESS", desc: "Consult with the top 1% doctors worldwide." },
    { icon: Smartphone, title: "SYNCED", desc: "Seamlessly connects with your wearables." },
  ];

  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#080808] p-10 lg:p-14 hover:bg-black transition-all duration-500 group relative"
            >
              <div className="absolute inset-0 bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <item.icon 
                className="text-yellow-400 mb-8 group-hover:scale-110 transition-transform duration-500 ease-out" 
                size={36} 
                strokeWidth={1.5}
              />
              
              <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-4 relative z-10">
                {item.title}
              </h4>
              
              <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}