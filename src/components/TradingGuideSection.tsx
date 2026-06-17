import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "롱과 숏",
    desc: "가격 상승에 베팅하는 롱, 하락에 베팅하는 숏. 양방향으로 수익을 추구할 수 있는 선물거래의 기본 개념입니다.",
  },
  {
    num: "02",
    title: "포지션 사이징",
    desc: "전체 자본 대비 적정 포지션 크기를 산정하는 방법. 레버리지를 현명하게 활용하는 핵심입니다.",
  },
  {
    num: "03",
    title: "리스크 관리",
    desc: "손절(스톱로스)과 익절(테이크프로핏) 설정. 한 번의 트레이드가 계좌를 위협하지 않도록 관리합니다.",
  },
  {
    num: "04",
    title: "실전 시작",
    desc: "CoinW 데모 계좌에서 연습하고, 준비되면 실전으로. 소액부터 시작해 경험을 쌓으세요.",
  },
];

const TradingGuideSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="trading-guide" className="py-16 sm:py-24 relative">
      {/* Subtle purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5227FF]/[0.02] to-transparent pointer-events-none" />

      <div
        ref={ref}
        className={`relative max-w-3xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          선물거래, 이 순서대로 시작하세요
        </h2>

        <div className="relative">
          {/* Vertical connecting line with gradient */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-[#5227FF]/40 via-[#5227FF]/20 to-transparent" />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-5 relative">
                {/* Pulsing dot on the line */}
                <div className="absolute left-[18px] top-[18px] w-3 h-3 rounded-full bg-[#5227FF]/30 pulse-dot z-20" />

                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#5227FF] text-white flex items-center justify-center text-sm font-bold z-10 relative">
                  {s.num}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingGuideSection;
