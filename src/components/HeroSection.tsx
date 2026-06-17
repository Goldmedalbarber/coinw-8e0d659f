import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#5227FF]/[0.06] blur-[120px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-4 sm:px-6 text-center fade-in-section ${isVisible ? "visible" : ""}`}
      >
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(82,39,255,0.08)] text-[#5227FF] text-sm font-medium mb-6">
          La Liga 공식 파트너 · 글로벌 2,000만+ 유저
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
          Here for{" "}
          <span className="text-gradient-purple">Crypto</span>
        </h1>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-500 mb-10 leading-relaxed">
          300+ 크립토 종목, 업계 최저 수수료, 24/7 거래.
          <br className="hidden sm:block" />
          발롱도르 수상자 루카 모드리치가 함께합니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
    </section>
  );
};

export default HeroSection;
