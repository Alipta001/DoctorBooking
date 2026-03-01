

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white py-24 border-t border-white/10 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          <div className="lg:col-span-5 max-w-md">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              DocReserve
            </h2>
            <p className="text-zinc-300 font-medium leading-relaxed text-lg mb-10">
              Redefining the standard of private healthcare access. 
              We connect the world's most discerning patients with 
              unparalleled medical expertise.
            </p>
            <div className="relative max-w-sm group">
              <input 
                type="email" 
                placeholder="Join the health elite"
                className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-5 text-sm font-bold uppercase tracking-widest outline-none focus:border-amber-400 focus:bg-white/10 transition-all text-white"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 group-hover:text-amber-400 transition-colors">
                <ArrowUpRight size={24} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-12">
            <div>
              <h5 className="text-xs font-black uppercase tracking-[0.3em] text-amber-400 mb-10">Platform</h5>
              <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-zinc-200">
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">Specialists <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">Emergency <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">Enterprise <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-xs font-black uppercase tracking-[0.3em] text-amber-400 mb-10">Company</h5>
              <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-zinc-200">
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">Philosophy <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">Privacy <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors flex items-center gap-2 group">Contact <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h5 className="text-xs font-black uppercase tracking-[0.3em] text-amber-400 mb-10">Connect</h5>
              <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-zinc-200">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-400">
            &copy; 2026 DocReserve Global. High Performance Care.
          </p>
        </div>
      </div>
    </footer>
  );
}