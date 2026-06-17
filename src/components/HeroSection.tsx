import { useEffect, useRef, useState } from "react";

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

const Shield = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1l9 4v6c0 5.25-3.6 9.74-9 11-5.4-1.26-9-5.75-9-11V5l9-4zm-1.2 14.2l6-6-1.4-1.4-4.6 4.6-2.2-2.2L7.2 11.6l3.6 3.6z" />
  </svg>
);

const HeroSection = () => {
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
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover hero-drift"
          src="/modric-coinw.mp4"
          poster="/modric-coinw-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 scrim-hero" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#07070C] via-[#07070C]/45 to-transparent" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end w-full max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-14 sm:pb-20">
        <div
          className="reveal inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full shimmer-badge text-white text-[11px] sm:text-xs font-bold tracking-wider mb-5 uppercase"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5D73] pulse-dot" />
          Luka Modrić · Global Ambassador
        </div>

        <h1 className="font-display-ko text-white text-[clamp(2.6rem,9vw,6rem)] leading-[0.95] mb-5 [text-shadow:0_2px_40px_rgba(0,0,0,0.45)]">
          <span className="line-mask">
            <span className="line-up" style={{ animationDelay: "0.15s" }}>모드리치가 선택한</span>
          </span>
          <span className="line-mask">
            <span className="line-up text-gradient-purple" style={{ animationDelay: "0.28s" }}>크립토 거래소</span>
          </span>
        </h1>

        <p
          className="reveal text-base sm:text-xl text-white/70 leading-relaxed max-w-xl mb-8"
          style={{ animationDelay: "0.42s" }}
        >
          전 세계 2,000만 명이 쓰는 글로벌 거래소.
          업계 <span className="marker-amber">최저 수수료</span>, <span className="em-red">앱 설치 3분</span>이면 바로 시작.
        </p>

        <div
          className="reveal flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          style={{ animationDelay: "0.54s" }}
        >
          <a
            href="https://testflight.apple.com/join/EnVxDqYN"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-cta cta-glow group inline-flex items-center justify-center gap-2.5 px-9 py-4 btn-primary text-white font-bold rounded-2xl text-base"
          >
            <AppleIcon className="w-5 h-5" />
            iOS 무료 다운로드
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-white/20 bg-white/[0.04] backdrop-blur-sm text-white/90 font-semibold rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all text-base"
          >
            <AndroidIcon className="w-5 h-5" />
            Android
          </a>
        </div>

        <div
          className="reveal flex flex-wrap items-center gap-x-3 gap-y-1 mt-4 text-xs sm:text-sm text-white/55"
          style={{ animationDelay: "0.62s" }}
        >
          <span className="text-amber-400">★★★★★</span>
          <span className="font-bold text-white/85">4.8</span>
          <span className="text-white/25">·</span>
          <span>무료 가입</span>
          <span className="text-white/25">·</span>
          <span>카드 등록 없이 설치 3분</span>
          <span className="text-white/25">·</span>
          <span className="text-white/75 font-medium">선착순 1만 명</span>
        </div>

        <div
          className="reveal flex flex-wrap items-center gap-x-5 gap-y-2.5 mt-7 pt-6 border-t border-white/10 text-xs sm:text-sm text-white/45"
          style={{ animationDelay: "0.7s" }}
        >
          {["La Liga 공식 파트너", "AUSTRAC · VARA 라이선스", "7년 무사고 운영"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#A78BFA]" />
              {t}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={toggleMute}
        aria-label={muted ? "소리 켜기" : "소리 끄기"}
        className="absolute z-10 bottom-5 right-5 flex items-center justify-center w-11 h-11 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/15 hover:bg-black/60 transition-colors"
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
    </section>
  );
};

export default HeroSection;
