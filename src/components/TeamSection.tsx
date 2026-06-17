import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    icon: "🏦",
    title: "Goldman Sachs / Morgan Stanley 출신",
    desc: "10년+ 글로벌 핀테크 경력의 리더십. 전통 금융의 리스크 관리 노하우를 크립토에 적용합니다.",
  },
  {
    icon: "🔬",
    title: "R&D 30%+ 재투자",
    desc: "수익의 30% 이상을 기술 연구개발에 재투자. 50+ 특허 보유로 기술 혁신을 이끕니다.",
  },
  {
    icon: "📊",
    title: "투명한 거버넌스",
    desc: "온체인 준비금 증명, 정기 감사, 투명한 의사결정 구조를 유지합니다.",
  },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24 bg-[#F7F7F8]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          글로벌 팀 & 문화
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#EBEBEE] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
