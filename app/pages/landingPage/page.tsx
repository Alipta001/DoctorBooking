import Hero from "@/components/landingPage/hero";
import Features from "@/components/landingPage/features";
import CTASection from "@/components/landingPage/ctaSection";
import Footer from "@/components/landingPage/footer";
import Stats from "@/components/landingPage/stats";
import TrustTech from "@/components/landingPage/trustTech";
import Comments from "@/components/landingPage/comments";
import SpecialistSearch from "@/components/landingPage/specialistSearch";
import HospitalLogos from "@/components/landingPage/hospitalLogos";

export default function LandingPage() {
  return (
    <div className="bg-[#050505] selection:bg-yellow-400 selection:text-black">
      <Hero />
      <Stats />
      <SpecialistSearch />
      <TrustTech />
      <HospitalLogos /> 
      <Features />
      <Comments />
      <CTASection />
      <Footer />
    </div>
  );
}
