import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const events = [
  { year: "2017", text: "CoinW 설립, 글로벌 크립토 거래소 출범" },
  { year: "2019", text: "자체 매칭 엔진 개발 완료, 마이크로초 체결 달성" },
  { year: "2022", text: "글로벌 확장 본격화, 200+ 국가 서비스 개시" },
  { year: "2023", text: "홍콩 Web3 Festival 참가, 아시아 시장 강화" },
  { year: "2024", text: "PropW 런칭, TCSP 라이선스 취득, TOKEN2049 공식 파트너" },
  { year: "2025", text: "La Liga 공식 파트너십, CoinW 2.0 플랫폼 출시" },
];

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          CoinW의 여정
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-[#EBEBEE]" />

          <div className="space-y-8">
            {events.map((e, i) => (
              <div key={i} className="flex gap-5 relative">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#5227FF] text-white flex items-center justify-center text-xs sm:text-sm font-bold z-10">
                  {e.year.slice(2)}
                </div>
                <div className="pt-1.5 sm:pt-2.5">
                  <span className="text-sm font-bold text-[#5227FF] mr-2">{e.year}</span>
                  <span className="text-sm text-gray-600">{e.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
