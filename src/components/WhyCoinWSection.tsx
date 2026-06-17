import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    no: "01",
    title: "업계 최저 수수료",
    desc: "메이커 0.02% / 테이커 0.06%. 거래할수록 차이가 벌어집니다.",
    highlight: "수수료 최대 90% 절약",
  },
  {
    no: "02",
    title: "7년 무사고 · 글로벌 라이선스",
    desc: "AUSTRAC · VARA · TCSP 정식 보유. 자산은 안전하게.",
    highlight: "해킹·먹튀 0건",
  },
  {
    no: "03",
    title: "프로급 트레이딩 엔진",
    desc: "TradingView 차트와 마이크로초 체결. 초보부터 고수까지.",
    highlight: "300+ 종목 한 앱에서",
  },
];

const WhyCoinWSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 spotlight pointer-events-none" />
      <div
        ref={ref}
        className={`relative max-w-3xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#A78BFA] mb-3">
            WHY COINW
          </p>
          <h2 className="text-[26px] sm:text-4xl font-black tracking-tight text-white leading-snug">
            한 번 써보면 못 갈아타는<br className="sm:hidden" />{" "}
            <span className="marker">3가지 이유</span>
          </h2>
        </div>

        <div className="space-y-4">
          {reasons.map((r) => (
            <div
              key={r.no}
              className="flex items-start gap-4 sm:gap-7 p-6 sm:p-8 glass-card rounded-3xl hover-card"
            >
              <span className="text-4xl sm:text-6xl font-black text-gradient-purple leading-none shrink-0 tabular-nums">
                {r.no}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-1.5">
                  {r.title}
                </h3>
                <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-3">
                  {r.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#A78BFA] bg-[#7C5CFF]/[0.12] border border-[#7C5CFF]/20 px-3 py-1.5 rounded-full">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  {r.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCoinWSection;
