import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModricBanner from "@/components/ModricBanner";
import VideoSection from "@/components/VideoSection";
import StatsSection from "@/components/StatsSection";
import ProductsSection from "@/components/ProductsSection";
import SecuritySection from "@/components/SecuritySection";
import WhyCoinWSection from "@/components/WhyCoinWSection";
import TradingGuideSection from "@/components/TradingGuideSection";
import AcademySection from "@/components/AcademySection";
import AmbassadorSection from "@/components/AmbassadorSection";
import TeamSection from "@/components/TeamSection";
import TimelineSection from "@/components/TimelineSection";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ModricBanner />
        <VideoSection />
        <StatsSection />
        <ProductsSection />
        <SecuritySection />
        <WhyCoinWSection />
        <TradingGuideSection />
        <AcademySection />
        <AmbassadorSection />
        <TeamSection />
        <TimelineSection />
        <PartnersSection />
        <CTASection />
        <TrustBar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
