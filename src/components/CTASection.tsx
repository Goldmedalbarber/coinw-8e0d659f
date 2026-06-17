import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="relative animated-gradient rounded-3xl px-6 py-10 sm:px-10 sm:py-14 text-center glow-border overflow-hidden">
          <div className="relative">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
              지금 시작하세요
            </h2>
            <p className="text-sm text-white/60 mb-6">
              2,000만 트레이더가 선택한 플랫폼
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-3">
              <a
                href="https://testflight.apple.com/join/EnVxDqYN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pulse inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#5227FF] font-bold rounded-2xl hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                📱 iOS 다운로드
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-2xl hover:border-white/60 transition-colors text-sm sm:text-base"
              >
                🤖 Android 다운로드
              </a>
            </div>

            <p className="text-xs text-white/40">
              iOS는 TestFlight를 통해 설치됩니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
