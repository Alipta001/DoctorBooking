// "use client";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative h-screen bg-gradient-to-br from-blue-900 via-cyan-700 to-blue-600 overflow-hidden">
//       {/* Floating shapes */}
//       <div className="absolute w-96 h-96 bg-yellow-400 rounded-full opacity-30 -top-32 -left-32 blur-3xl animate-pulse-slow"></div>
//       <div className="absolute w-72 h-72 bg-white rounded-full opacity-10 top-1/2 right-0 blur-3xl animate-spin-slow"></div>

//       <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between h-full">
//         {/* Text */}
//         <div className="md:w-1/2 space-y-6 text-center md:text-left">
//           <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
//             Premium <span className="text-yellow-400">Healthcare</span> at Your Fingertips
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 drop-shadow">
//             Book appointments instantly with top verified doctors. Fast, secure, and reliable healthcare experience.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
//             <Link href="/login">
//               <button className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-yellow-500/50 hover:brightness-110">
//                 Login
//               </button>
//             </Link>
//             <Link href="/register">
//               <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:bg-white hover:text-blue-900 hover:scale-105 hover:brightness-110">
//                 Register
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Hero Image */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <img
//             src="/images/hospitals/hospital1.jpg"
//             alt="Doctor Illustration"
//             className="w-4/5 md:w-full rounded-3xl shadow-2xl animate-float"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-30">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[120px]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 md:px-20 z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5">
        <h1 className="text-2xl font-black tracking-tighter text-white italic uppercase">
          Doc<span className="text-gray-500 font-medium">Reserve</span>
        </h1>
        <div className="hidden md:flex space-x-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Specialists</a>
          <a href="#" className="hover:text-white transition-colors">Hospitals</a>
          <a href="#" className="hover:text-white transition-colors">How it works</a>
        </div>
        <Link href="/auth/signin">
          <button className="px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all">
            Enter Portal
          </button>
        </Link>
      </nav>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest mb-8"
        >
          <Zap size={12} className="text-yellow-400" /> The Future of Medical Booking
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85] mb-8"
        >
          PREMIUM CARE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            WITHOUT THE WAIT.
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-12"
        >
          Access the world's most elite medical professionals. Book, manage, and consult 
          digitally with the precision your health deserves.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link href="/auth/signup">
            <button className="group px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-widest rounded-[2rem] flex items-center gap-3 hover:bg-yellow-400 transition-all">
              Begin Onboarding <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <div className="flex items-center gap-4 px-6 text-white/40">
            <ShieldCheck size={20} className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-left">HIPAA Compliant<br/>Secure Platform</span>
          </div>
        </motion.div>

        {/* Floating Mockup Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          className="mt-24 relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-[120px] -z-10 rounded-full"></div>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-3xl p-4 shadow-2xl overflow-hidden">
            <img
              src="/images/hospitals/hospital1.jpg"
              alt="Dashboard Preview"
              className="w-full rounded-[2rem] opacity-80"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}