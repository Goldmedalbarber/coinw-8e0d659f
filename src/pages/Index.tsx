import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LivePriceTicker from "@/components/LivePriceTicker";
import StatsSection from "@/components/StatsSection";
import WhyCoinWSection from "@/components/WhyCoinWSection";
import KineticMarquee from "@/components/KineticMarquee";
import ModricMoment from "@/components/ModricMoment";
import CTASection from "@/components/CTASection";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#07070C]">
      <Navbar />
      <main>
        <HeroSection />
        <LivePriceTicker />
        <StatsSection />
        <WhyCoinWSection />
        <KineticMarquee />
        <ModricMoment />
        <CTASection />
        <TrustBar />
      </main>
      <Footer />
      <div className="h-20" aria-hidden />
      <StickyCTA />
    </div>
  );
};

export default Index;
