import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden gradient-mesh">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#5227FF]/[0.06] blur-[120px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(82,39,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(82,39,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating decorative dots */}
      <div className="absolute top-24 left-[10%] w-3 h-3 rounded-full bg-[#5227FF]/20 animate-float" />
      <div className="absolute top-40 right-[15%] w-2 h-2 rounded-full bg-[#8B5CF6]/30 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-[20%] w-2.5 h-2.5 rounded-full bg-[#5227FF]/15 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 right-[25%] w-2 h-2 rounded-full bg-[#8B5CF6]/25 animate-float" style={{ animationDelay: "0.5s" }} />

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16">
          {/* Text left */}
          <div className="flex-1 text-center lg:text-left">
            {/* Pill badge with shimmer */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shimmer-badge text-[#5227FF] text-sm font-medium mb-6">
              La Liga 공식 파트너 · 글로벌 2,000만+ 유저
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
              Here for{" "}
              <span className="text-gradient-purple">Crypto</span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-gray-500 mb-10 leading-relaxed">
              300+ 크립토 종목, 업계 최저 수수료, 24/7 거래.
              <br className="hidden sm:block" />
              발롱도르 수상자 루카 모드리치가 함께합니다.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="https://testflight.apple.com/join/EnVxDqYN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 bg-[#5227FF] text-white font-semibold rounded-2xl hover:bg-[#4520DD] transition-colors text-base"
              >
                지금 시작하기 →
              </a>
              <a
                href="#trading-guide"
                className="inline-flex items-center px-7 py-3.5 border-2 border-[#EBEBEE] text-gray-700 font-semibold rounded-2xl hover:border-[#5227FF] hover:text-[#5227FF] transition-colors text-base"
              >
                트레이딩 가이드
              </a>
            </div>
          </div>

          {/* Modric image right — desktop only */}
          <div className="hidden lg:block flex-1 relative">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[#5227FF]/[0.04] blur-2xl" />
              <img
                src="https://cdn.yumltd.com/6e10bbfd04c9902329676c30ce02b617d769745d772dc4a7deb6770c214f2986.png?x-oss-process=image/format,webp"
                alt="Luka Modrić — CoinW Global Ambassador"
                className="relative w-full max-w-md mx-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
