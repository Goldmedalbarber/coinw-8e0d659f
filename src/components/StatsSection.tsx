import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 2000, prefix: "", suffix: "만+", label: "글로벌 유저" },
  { value: 40, prefix: "$", suffix: "억+", label: "일일 거래량" },
  { value: 300, prefix: "", suffix: "+", label: "거래 종목" },
  { value: 7, prefix: "", suffix: "년+", label: "무사고 운영" },
];

const CountUp = ({ end, run }: { end: number; run: boolean }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, end]);

  return <>{n.toLocaleString("en-US")}</>;
};

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
              <div className="text-xl sm:text-3xl font-extrabold text-gradient-purple tabular-nums">
                {s.prefix}
                <CountUp end={s.value} run={isVisible} />
                {s.suffix}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
