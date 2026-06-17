import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "2,000만+", label: "글로벌 유저" },
  { value: "$40억+", label: "일일거래량" },
  { value: "200+", label: "국가/지역" },
  { value: "7년+", label: "무사고 운영" },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-purple mb-2">
                {s.value}
              </div>
              <div className="text-sm sm:text-base text-gray-500 font-medium">
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
