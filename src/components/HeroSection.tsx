import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-inter text-foreground/90">
                Korea's Premier Web3 Marketing Agency
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up-delay-1 font-orbitron text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="block text-foreground">WEB3, NFT, DEFI</span>
            <span className="block text-foreground">크립토 마케팅</span>
            <span className="block text-gradient">전문 에이전시</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-inter">
            블록체인, DeFi, NFT, IEO/ICO 프로젝트를 위한 종합 마케팅 솔루션.
            <br className="hidden md:block" />
            150개 이상의 성공적인 프로젝트 경험으로 증명된 전문성.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group">
              무료 상담 신청
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              프로젝트 보기
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-3 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {[
              { value: "150+", label: "프로젝트" },
              { value: "$2B+", label: "모금 지원" },
              { value: "50+", label: "글로벌 파트너" },
              { value: "24/7", label: "전담 지원" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-orbitron text-3xl md:text-4xl font-bold text-foreground text-glow">
                  {stat.value}
                </div>
                <div className="font-inter text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
