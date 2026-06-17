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
    <section className="py-14 sm:py-20">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-9 sm:mb-12">
          <p className="text-sm font-bold text-[#5227FF] mb-2">WHY COINW</p>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-gray-900 leading-snug">
            한 번 써보면 못 갈아타는<br className="sm:hidden" />{" "}
            <span className="marker">3가지 이유</span>
          </h2>
        </div>

        <div className="space-y-4">
          {reasons.map((r) => (
            <div
              key={r.no}
              className="flex items-start gap-4 sm:gap-6 p-5 sm:p-7 bg-white rounded-3xl border border-[#EBEBEE] hover-card"
            >
              <span className="text-3xl sm:text-5xl font-black text-gradient-purple leading-none shrink-0">
                {r.no}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-2xl font-extrabold text-gray-900 mb-1">
                  {r.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-2">
                  {r.desc}
                </p>
                <span className="inline-block text-xs sm:text-sm font-bold text-[#5227FF] bg-[#5227FF]/[0.07] px-3 py-1 rounded-full">
                  ✓ {r.highlight}
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
