import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "2,000만+", label: "글로벌 유저" },
  { value: "$40억+", label: "일일 거래량" },
  { value: "300+", label: "거래 종목" },
  { value: "7년+", label: "무사고 운영" },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-10 sm:py-14">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-5 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-3xl font-extrabold text-gradient-purple">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
