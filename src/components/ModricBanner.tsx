import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const images = [
  "https://cdn.yumltd.com/6e10bbfd04c9902329676c30ce02b617d769745d772dc4a7deb6770c214f2986.png?x-oss-process=image/format,webp",
  "https://cdn.yumltd.com/3552b14ab97121aa50c0f1d2b86aaf670d1948199e52afc38bfc08ff019ebf08.png?x-oss-process=image/format,webp",
  "https://cdn.yumltd.com/5e06b0332967b2c1083954e94188b23d6e7041c98cc0a49c396f867316b289c2.png?x-oss-process=image/format,webp",
];

const ModricBanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16">
      <div
        ref={ref}
        className={`fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="flex gap-4 overflow-x-auto px-4 sm:px-6 pb-4 snap-x snap-mandatory scrollbar-hide max-w-6xl mx-auto">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`CoinW x Modrić ${i + 1}`}
              className="snap-center flex-shrink-0 w-[85vw] sm:w-[380px] h-auto rounded-2xl object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModricBanner;
