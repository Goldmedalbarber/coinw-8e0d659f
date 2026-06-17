const items = [
  "LA LIGA OFFICIAL PARTNER",
  "LUKA MODRIĆ",
  "20M+ TRADERS",
  "7 YEARS SECURE",
  "300+ ASSETS",
  "LOWEST FEES",
];

const Row = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="flex w-max" aria-hidden>
    <div className={`flex shrink-0 ${reverse ? "marquee-rev" : "marquee-fast"}`}>
      {[...items, ...items].map((t, i) => (
        <span key={i} className="flex items-center font-display text-4xl sm:text-6xl uppercase">
          <span className={i % 2 === 0 ? "text-white" : "text-stroke"}>{t}</span>
          <span className="mx-6 sm:mx-9 text-[#7C5CFF]">✦</span>
        </span>
      ))}
    </div>
  </div>
);

const KineticMarquee = () => (
  <div className="relative py-7 sm:py-10 border-y border-white/[0.07] overflow-hidden bg-[#0A0A12]">
    <Row />
  </div>
);

export default KineticMarquee;
