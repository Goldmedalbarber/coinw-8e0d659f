import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    icon: "📈",
    title: "현물거래",
    desc: "300+ 크립토 종목을 업계 최저 수수료로 거래하세요.",
  },
  {
    icon: "⚡",
    title: "선물거래",
    desc: "최대 200x 레버리지, 마이크로초 매칭 엔진으로 프로급 환경.",
  },
  {
    icon: "💰",
    title: "Earn",
    desc: "유동성 스테이킹, 예치형 상품으로 자산을 키우세요.",
  },
  {
    icon: "🎓",
    title: "Academy",
    desc: "입문부터 고급 전략까지, 체계적으로 배우는 크립토 트레이딩.",
  },
  {
    icon: "🔴",
    title: "라이브스트림",
    desc: "실시간 마켓 분석과 트레이딩 인사이트를 라이브로 시청.",
  },
  {
    icon: "🌐",
    title: "Web3 월렛",
    desc: "DeFi, NFT, 크로스체인까지 하나의 월렛으로 접근.",
  },
];

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24 bg-[#F7F7F8]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          CoinW가 제공하는 서비스
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#EBEBEE] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
