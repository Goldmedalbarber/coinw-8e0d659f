import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    icon: "🔒",
    title: "자산 보안",
    desc: "멀티시그 + MPC 기반 콜드월렛 관리. 업계 최고 수준의 자산 보호 체계를 운영합니다.",
  },
  {
    icon: "✅",
    title: "준비금 증명",
    desc: "PoR(Proof of Reserves) 100% 공개. 고객 자산은 항상 1:1 이상으로 보관됩니다.",
  },
  {
    icon: "🛡️",
    title: "24/7 지원",
    desc: "전 세계 어디서든 24시간 실시간 고객 지원. 한국어 지원 포함.",
  },
];

const SecuritySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          보안 & 신뢰
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-[#F7F7F8] rounded-2xl p-6 border border-[#EBEBEE] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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

export default SecuritySection;
