import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 overflow-hidden gradient-mesh">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#5227FF]/[0.05] blur-[100px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shimmer-badge text-[#5227FF] text-xs sm:text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5227FF]" />
              La Liga 공식 파트너 · 2,000만+ 유저
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-gray-900 leading-[1.15] mb-5">
              글로벌이 검증한<br />
              <span className="text-gradient-purple">크립토 거래소</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              300+ 종목, 업계 최저 수수료, 7년 무사고 운영.
              지금 앱을 다운로드하고 시작하세요.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
              <a
                href="https://testflight.apple.com/join/EnVxDqYN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#5227FF] text-white font-bold rounded-2xl hover:bg-[#4520DD] transition-all btn-pulse text-base"
              >
                📱 iOS 다운로드
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#EBEBEE] text-gray-600 font-semibold rounded-2xl hover:border-[#5227FF] hover:text-[#5227FF] transition-all text-base"
              >
                🤖 Android 다운로드
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center lg:text-left">
              iOS는 TestFlight를 통해 설치됩니다
            </p>
          </div>

          <div className="hidden lg:block flex-shrink-0 w-[340px]">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-[#5227FF]/[0.04] blur-2xl" />
              <img
                src="https://cdn.yumltd.com/6e10bbfd04c9902329676c30ce02b617d769745d772dc4a7deb6770c214f2986.png?x-oss-process=image/format,webp"
                alt="CoinW x Luka Modrić"
                className="relative w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
