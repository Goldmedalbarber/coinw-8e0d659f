import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AppleIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 2.98-.84.94-2.2 1.66-3.34 1.57-.14-1.12.43-2.3 1.1-3.04.78-.86 2.2-1.5 3.36-1.51zM20.5 17.2c-.6 1.38-.89 1.99-1.66 3.21-1.08 1.7-2.6 3.82-4.49 3.83-1.67.02-2.1-1.09-4.37-1.08-2.27.01-2.74 1.1-4.41 1.08-1.88-.02-3.32-1.93-4.4-3.63-3.02-4.77-3.34-10.36-1.47-13.33C.93 5.6 2.96 4.4 4.87 4.4c1.94 0 3.16 1.07 4.76 1.07 1.55 0 2.5-1.07 4.74-1.07 1.7 0 3.5.93 4.78 2.53-4.2 2.3-3.52 8.3.55 10.27z" />
  </svg>
);

const AndroidIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.6 9.48l1.84-3.18a.4.4 0 0 0-.69-.4l-1.86 3.23a11.46 11.46 0 0 0-9.78 0L5.25 5.9a.4.4 0 0 0-.69.4L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
  </svg>
);

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="relative animated-gradient rounded-[28px] px-6 py-12 sm:px-12 sm:py-16 text-center glow-border overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_60%)] pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3 tracking-tight">
              지금 시작하세요
            </h2>
            <p className="text-sm sm:text-base text-white/70 mb-8">
              2,000만 트레이더가 선택한 플랫폼 · 설치 3분이면 끝
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
              <a
                href="https://testflight.apple.com/join/EnVxDqYN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-white text-[#5227FF] font-extrabold rounded-2xl hover:bg-white/90 transition-all hover:-translate-y-0.5 text-base shadow-xl"
              >
                <AppleIcon className="w-5 h-5" />
                iOS 다운로드
              </a>
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 border-2 border-white/40 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/70 transition-all text-base"
              >
                <AndroidIcon className="w-5 h-5" />
                Android 다운로드
              </a>
            </div>

            <p className="text-xs text-white/55">
              iOS는 TestFlight 베타로 제공 · 선착순 1만 명 한정
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
