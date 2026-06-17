import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const articles = [
  {
    img: "https://cdn.yumltd.com/498f4667f6b4333451de6b475e8fb09130efe459b5cd128b72eb15eb74281ce7.png",
    title: "크립토 선물 청산 완벽 가이드",
    tag: "가이드",
  },
  {
    img: "https://cdn.yumltd.com/d1bb0efdd14ff6c6975f6dad30ecbb7e53608859cd781846cf861c0ba0a42ba4.png",
    title: "자동화 크립토 선물거래로 퍼포먼스 극대화",
    tag: "전략",
  },
  {
    img: "https://cdn.yumltd.com/24542e72710f55928ea11874fec11ff2f5a1bdcd317cf7e6f918a5049bad11f7.png",
    title: "무기한 선물 vs 만기 선물: 2026년 전략",
    tag: "분석",
  },
  {
    img: "https://cdn.yumltd.com/bbd142bd98add2d52f4033c5c1cb8b2858dc8ef4a3d598fb1f22dccc3b6af52d.png",
    title: "선물 전략 트레이딩 초보자 가이드",
    tag: "입문",
  },
];

const AcademySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24 bg-[#F7F7F8]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          CoinW Academy에서 배우세요
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((a, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EBEBEE] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category tag */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#5227FF]/90 text-white text-[10px] font-semibold uppercase tracking-wide">
                  {a.tag}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    읽어보기 →
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 leading-snug">
                  {a.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademySection;
