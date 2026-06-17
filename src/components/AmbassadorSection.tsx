import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [
  "https://cdn.yumltd.com/6e10bbfd04c9902329676c30ce02b617d769745d772dc4a7deb6770c214f2986.png?x-oss-process=image/format,webp",
  "https://cdn.yumltd.com/3552b14ab97121aa50c0f1d2b86aaf670d1948199e52afc38bfc08ff019ebf08.png?x-oss-process=image/format,webp",
  "https://cdn.yumltd.com/5e06b0332967b2c1083954e94188b23d6e7041c98cc0a49c396f867316b289c2.png?x-oss-process=image/format,webp",
];

const tilts = [-3, 0, 3];

const badges = ["Ballon d'Or", "6x UCL", "Croatia Captain", "Real Madrid"];

const AmbassadorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Radial purple glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#5227FF]/[0.05] blur-[160px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        {/* Fanned card images */}
        <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide justify-center">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Modric ${i + 1}`}
              className="snap-center flex-shrink-0 w-[75vw] sm:w-[320px] h-auto rounded-2xl object-cover transition-transform duration-500 hover:rotate-0 hover:scale-105 shadow-lg"
              style={{ transform: `rotate(${tilts[i]}deg)` }}
              loading="lazy"
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            글로벌 앰배서더 — 루카 모드리치
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-lg mx-auto">
            발롱도르 수상자, 6회 챔피언스리그 우승, 크로아티아 캡틴.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {badges.map((b, i) => (
              <span
                key={i}
                className="inline-flex px-4 py-2 rounded-full bg-[rgba(82,39,255,0.08)] text-[#5227FF] text-sm font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorSection;
