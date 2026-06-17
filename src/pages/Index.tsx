import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyCoinWSection from "@/components/WhyCoinWSection";
import CTASection from "@/components/CTASection";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <WhyCoinWSection />
        <CTASection />
        <TrustBar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
