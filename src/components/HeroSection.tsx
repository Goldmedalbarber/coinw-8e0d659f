import { useEffect, useRef, useState } from "react";
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

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    return () => v.removeEventListener("canplay", tryPlay);
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  };

  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden gradient-mesh">
      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shimmer-badge text-white text-xs sm:text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5D73] pulse-dot" />
              🔥 전 세계 2,000만 명이 쓰는 글로벌 거래소
            </div>

            <h1 className="text-[34px] sm:text-5xl lg:text-[58px] font-black tracking-tight text-white leading-[1.1] mb-6">
              루카 모드리치도<br />
              쓰는 <span className="marker"><span className="text-gradient-purple">크립토 거래소</span></span>
            </h1>

            <p className="text-base sm:text-lg text-white/55 leading-relaxed mb-9 max-w-md mx-auto lg:mx-0">
              업계 <span className="marker-amber">최저 수수료</span>, 300+ 종목, 7년 무사고 운영.{" "}
              <span className="em-red">앱 설치 3분</span>이면 바로 시작.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
              <a
                href="https://testflight.apple.com/join/EnVxDqYN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 btn-primary text-white font-bold rounded-2xl text-base"
              >
                <AppleIcon className="w-5 h-5" />
                iOS 다운로드
              </a>
              <a
                href="#"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/15 bg-white/[0.03] text-white/90 font-semibold rounded-2xl hover:bg-white/[0.08] hover:border-white/30 transition-all text-base"
              >
                <AndroidIcon className="w-5 h-5" />
                Android 다운로드
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-5 text-xs text-white/50">
              <span className="text-amber-400 tracking-tight">★★★★★</span>
              <span className="font-semibold text-white/80">4.8</span>
              <span className="text-white/25">·</span>
              <span>2,000만+ 다운로드</span>
            </div>
            <p className="text-xs text-white/35 mt-2 text-center lg:text-left">
              iOS는 TestFlight 베타로 제공 · <span className="text-white/55 font-semibold">선착순 1만 명 한정</span>
            </p>
          </div>

          <div className="w-full lg:w-[490px] flex-shrink-0">
            <div className="relative">
              <div className="relative aspect-video rounded-3xl overflow-hidden glow-purple bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/modric-coinw.mp4"
                  poster="/modric-coinw-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
                <button
                  onClick={toggleMute}
                  aria-label={muted ? "소리 켜기" : "소리 끄기"}
                  className="absolute bottom-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white border border-white/15 hover:bg-black/70 transition-colors"
                >
                  {muted ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zM19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
