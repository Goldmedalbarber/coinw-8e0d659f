import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  { src: "https://cdn.yumltd.com/static/_home/_nuxt/CoinMarketCap.BANvl0cQ.png", alt: "CoinMarketCap" },
  { src: "https://cdn.yumltd.com/static/_home/_nuxt/Coingecko.L1WWmeJN.png", alt: "Coingecko" },
  { src: "https://cdn.yumltd.com/static/_home/_nuxt/AiCoin.BI1_Ucha.png", alt: "AiCoin" },
  { src: "https://cdn.yumltd.com/static/_home/_nuxt/BITKAN.Bqik1kav.png", alt: "BITKAN" },
  { src: "https://cdn.yumltd.com/static/_home/_nuxt/CoinCarp.-3D96gjD.png", alt: "CoinCarp" },
  { src: "https://cdn.yumltd.com/static/_home/_nuxt/Coinweb.7oWux7oG.png", alt: "Coinweb" },
  { src: "https://cdn.yumltd.com/static/_home/_nuxt/MyToken.DvhauWk8.png", alt: "MyToken" },
];

const PartnersSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 bg-[#F7F7F8]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={p.alt}
              className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
