import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ModricMoment = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative min-h-[78vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/modric-still-1.jpg"
          alt="Luka Modrić × CoinW"
          className="w-full h-full object-cover kenburns"
        />
        <div className="absolute inset-0 scrim-side" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070C] via-transparent to-[#07070C]/40" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <p className="font-display text-[#A78BFA] text-sm sm:text-base tracking-[0.25em] uppercase mb-4">
          Official Global Ambassador
        </p>
        <h2 className="font-display text-white uppercase text-[clamp(2.4rem,8vw,5.5rem)] leading-[0.92] mb-6">
          Powered by ambition,<br />
          <span className="text-gradient-purple">driven to win.</span>
        </h2>
        <p className="text-base sm:text-lg text-white/65 max-w-lg mb-8 leading-relaxed">
          발롱도르 수상자, 루카 모드리치가 CoinW의 글로벌 앰배서더로 함께합니다.
          레전드가 검증한 플랫폼에서 거래하세요.
        </p>
        <a
          href="https://testflight.apple.com/join/EnVxDqYN"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-8 py-4 btn-primary text-white font-bold rounded-2xl text-base"
        >
          지금 합류하기
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </section>
  );
};

export default ModricMoment;
