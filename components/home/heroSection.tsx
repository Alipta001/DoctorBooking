import { VitalsCard } from "./vitalsCard";

export const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 relative overflow-hidden bg-[#a7a7a76e] rounded-[3rem] p-10 sm:p-14 text-white group">
        <div className="relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            System Status: Active
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter leading-[0.9] mb-6">
            Welcome back,<br />
            <span className="text-gray-400 font-medium">
              Alipta Ghosh
            </span>
          </h1>

          <p className="text-gray-400 max-w-sm mb-10 text-lg leading-relaxed">
            You have 2 medical consultations today. Your heart rate is 5% lower than yesterday.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-white/10">
            New Appointment
          </button>
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-[100px] group-hover:bg-white/10 transition-colors duration-1000" />
      </div>

      <VitalsCard />
    </section>
  );
};