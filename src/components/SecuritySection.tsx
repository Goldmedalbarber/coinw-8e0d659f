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
              className="bg-[#F7F7F8] rounded-2xl p-6 border border-[#EBEBEE] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center text-2xl mb-4 group-hover:bg-[#10B981]/20 transition-colors">
                {c.icon}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
                <svg className="w-4 h-4 text-[#10B981] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
