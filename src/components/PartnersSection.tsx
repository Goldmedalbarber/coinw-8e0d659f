const partners = [
  "Binance",
  "Coinbase",
  "Kraken",
  "Upbit",
  "Bithumb",
  "CoinMarketCap",
  "CoinGecko",
  "CryptoRank",
];

const mediaPartners = [
  "Forbes",
  "Bloomberg",
  "CoinDesk",
  "Cointelegraph",
  "Decrypt",
  "The Block",
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-32 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-inter text-sm font-medium text-primary uppercase tracking-widest">
            Partners
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            글로벌 파트너십
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            세계 최고의 거래소, 미디어, 인플루언서와 함께합니다
          </p>
        </div>

        {/* Exchange Partners */}
        <div className="mb-16">
          <h3 className="font-inter text-sm font-medium text-muted-foreground text-center mb-8 uppercase tracking-wider">
            거래소 파트너
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {partners.map((partner) => (
              <div
                key={partner}
                className="group px-8 py-4 rounded-xl glass hover:border-primary/50 transition-all duration-300"
              >
                <span className="font-orbitron text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div>
          <h3 className="font-inter text-sm font-medium text-muted-foreground text-center mb-8 uppercase tracking-wider">
            미디어 파트너
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {mediaPartners.map((partner) => (
              <div
                key={partner}
                className="group px-8 py-4 rounded-xl glass hover:border-primary/50 transition-all duration-300"
              >
                <span className="font-orbitron text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Top 5", subtitle: "ICO 마케팅 에이전시" },
            { title: "Top 3", subtitle: "STO 어드바이저리" },
            { title: "Top 5", subtitle: "IEO 마케팅 에이전시" },
          ].map((badge) => (
            <div
              key={badge.subtitle}
              className="text-center p-8 rounded-2xl glass hover:border-primary/50 transition-all"
            >
              <div className="font-orbitron text-4xl font-black text-gradient mb-2">
                {badge.title}
              </div>
              <div className="font-inter text-sm text-muted-foreground">
                {badge.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
