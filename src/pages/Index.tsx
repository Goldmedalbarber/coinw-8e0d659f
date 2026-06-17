import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#07070C]">
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
