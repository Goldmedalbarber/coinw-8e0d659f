import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    icon: "⚡",
    title: "업계 최저 수수료",
    desc: "메이커 0.02% / 테이커 0.06%",
  },
  {
    icon: "🔒",
    title: "글로벌 라이선스",
    desc: "AUSTRAC · VARA · TCSP 보유",
  },
  {
    icon: "📊",
    title: "프로급 트레이딩",
    desc: "TradingView 차트, 마이크로초 체결",
  },
];

const WhyCoinWSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="text-center p-5 sm:p-6 bg-[#F7F7F8] rounded-2xl border border-[#EBEBEE] hover:border-[#5227FF]/20 transition-all"
            >
              <div className="text-2xl sm:text-3xl mb-3">{r.icon}</div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{r.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCoinWSection;
