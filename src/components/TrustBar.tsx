import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const badges = [
  { label: "AUSTRAC 라이선스" },
  { label: "VARA 규제 준수" },
  { label: "La Liga 공식 파트너" },
  { label: "Luka Modrić 앰배서더" },
  { label: "2,000만+ 유저" },
];

const TrustBar = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-10 sm:py-12 border-t border-white/[0.07]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <p className="text-center text-xs font-semibold tracking-[0.18em] text-white/30 mb-6">
          TRUSTED &amp; VERIFIED
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {badges.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass-card text-xs sm:text-sm font-medium text-white/70"
            >
              <svg className="w-3.5 h-3.5 text-[#A78BFA]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l9 4v6c0 5.25-3.6 9.74-9 11-5.4-1.26-9-5.75-9-11V5l9-4zm-1.2 14.2l6-6-1.4-1.4-4.6 4.6-2.2-2.2L7.2 11.6l3.6 3.6z" /></svg>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
