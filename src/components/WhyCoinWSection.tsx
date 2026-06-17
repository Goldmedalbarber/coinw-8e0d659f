import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    icon: "💸",
    title: "최저 수수료",
    desc: "메이커 0.02% / 테이커 0.06%. 업계 최저 수준의 수수료로 수익을 극대화하세요.",
  },
  {
    icon: "🌍",
    title: "글로벌 라이선스",
    desc: "AUSTRAC(호주), VARA(두바이), TCSP(홍콩) 등 주요 관할권 라이선스를 보유하고 있습니다.",
  },
  {
    icon: "🖥️",
    title: "프로급 환경",
    desc: "TradingView 차트 내장, 마이크로초 매칭 엔진, API 트레이딩 지원.",
  },
  {
    icon: "🤝",
    title: "글로벌 파트너십",
    desc: "La Liga, PFL, TOKEN2049 공식 파트너. 글로벌 스포츠·이벤트와 함께합니다.",
  },
];

const WhyCoinWSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24 bg-[#F7F7F8]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            왜 글로벌 트레이더들이 CoinW를 선택할까요
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Coingecko 파생상품 글로벌 TOP 4, Goldman Sachs · Morgan Stanley 출신 팀
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#EBEBEE] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCoinWSection;
