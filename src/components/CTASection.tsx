import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="relative animated-gradient rounded-2xl px-6 py-12 sm:px-12 sm:py-16 text-center glow-border overflow-hidden">
          {/* Floating sparkle decorations */}
          <div className="absolute top-6 left-8 w-2 h-2 bg-white/30 rounded-full animate-sparkle" />
          <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-white/20 rounded-full animate-sparkle" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-10 left-16 w-1.5 h-1.5 bg-white/25 rounded-full animate-sparkle" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-8 right-20 w-2 h-2 bg-white/20 rounded-full animate-sparkle" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-6 w-1 h-1 bg-white/30 rounded-full animate-sparkle" style={{ animationDelay: "2s" }} />

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              지금 CoinW를 시작하세요
            </h2>
            <p className="text-sm sm:text-base text-white/70 mb-8">
              전 세계 2,000만 트레이더가 선택한 플랫폼
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <a
                href="https://testflight.apple.com/join/EnVxDqYN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pulse inline-flex items-center px-7 py-3.5 bg-white text-[#5227FF] font-semibold rounded-2xl hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                📱 iOS 다운로드
              </a>
              <a
                href="#"
                className="btn-pulse inline-flex items-center px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-2xl hover:border-white/60 transition-colors text-sm sm:text-base"
              >
                🤖 Android 다운로드
              </a>
            </div>

            <p className="text-xs text-white/50">
              iOS는 TestFlight를 통해 설치됩니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
