import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
    <section className="relative pt-10 pb-14 sm:pt-16 sm:pb-20 overflow-hidden gradient-mesh">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#5227FF]/[0.05] blur-[100px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
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
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-xs text-gray-500">
              <span className="text-amber-400 tracking-tight">★★★★★</span>
              <span className="font-semibold text-gray-700">4.8</span>
              <span className="text-gray-300">·</span>
              <span>2,000만+ 다운로드</span>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center lg:text-left">
              iOS는 TestFlight를 통해 설치됩니다
            </p>
          </div>

          <div className="w-full lg:w-[480px] flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-[#5227FF]/[0.06] blur-2xl" />
              <div className="relative aspect-video rounded-2xl overflow-hidden glow-purple bg-black">
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
                <button
                  onClick={toggleMute}
                  aria-label={muted ? "소리 켜기" : "소리 끄기"}
                  className="absolute bottom-3 right-3 flex items-center justify-center w-10 h-10 rounded-full bg-black/45 backdrop-blur-sm text-white hover:bg-black/65 transition-colors"
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
