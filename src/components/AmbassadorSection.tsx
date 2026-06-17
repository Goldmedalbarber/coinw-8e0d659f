import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [
  "https://cdn.yumltd.com/6e10bbfd04c9902329676c30ce02b617d769745d772dc4a7deb6770c214f2986.png?x-oss-process=image/format,webp",
  "https://cdn.yumltd.com/3552b14ab97121aa50c0f1d2b86aaf670d1948199e52afc38bfc08ff019ebf08.png?x-oss-process=image/format,webp",
  "https://cdn.yumltd.com/5e06b0332967b2c1083954e94188b23d6e7041c98cc0a49c396f867316b289c2.png?x-oss-process=image/format,webp",
];

const badges = ["Ballon d'Or", "6× UCL", "Croatia Captain", "Real Madrid"];

const AmbassadorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        {/* Horizontal scroll images */}
        <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Modrić ${i + 1}`}
              className="snap-center flex-shrink-0 w-[75vw] sm:w-[320px] h-auto rounded-2xl object-cover"
              loading="lazy"
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            글로벌 앰배서더 — 루카 모드리치
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mb-6">
            발롱도르 수상자, 6회 챔피언스리그 우승, 크로아티아 캡틴.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {badges.map((b, i) => (
              <span
                key={i}
                className="inline-flex px-3 py-1.5 rounded-full bg-[rgba(82,39,255,0.08)] text-[#5227FF] text-xs font-semibold"
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
