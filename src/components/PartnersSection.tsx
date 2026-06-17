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

  /* Duplicate array for seamless infinite loop */
  const doubled = [...partners, ...partners];

  return (
    <section className="py-16 sm:py-20 bg-[#F7F7F8]">
      <div
        ref={ref}
        className={`fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
          Partners & Ecosystem
        </p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F7F7F8] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F7F7F8] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center infinite-scroll" style={{ width: "max-content" }}>
            {doubled.map((p, i) => (
              <img
                key={i}
                src={p.src}
                alt={p.alt}
                className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 mx-6 sm:mx-10 flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
