import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const badges = [
  { icon: "🔒", label: "AUSTRAC" },
  { icon: "🏛️", label: "VARA" },
  { icon: "⚽", label: "La Liga" },
  { icon: "🏆", label: "Modric" },
  { icon: "👤", label: "2,000만+" },
];

const TrustBar = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-8 sm:py-10 border-t border-[#EBEBEE]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {badges.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F7F7F8] border border-[#EBEBEE] text-xs sm:text-sm font-medium text-gray-600"
            >
              <span>{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
