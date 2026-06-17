import { 
  Rocket, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Globe, 
  Shield,
  Coins,
  Gamepad2
} from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "IEO/ICO 마케팅",
    description: "토큰 세일 성공을 위한 전략적 마케팅 캠페인 및 커뮤니티 구축",
    tags: ["토큰 론칭", "사전판매", "거래소 상장"],
  },
  {
    icon: Users,
    title: "커뮤니티 관리",
    description: "Discord, Telegram, KakaoTalk 등 다양한 채널에서 활발한 커뮤니티 운영",
    tags: ["Discord", "Telegram", "카카오톡"],
  },
  {
    icon: TrendingUp,
    title: "인플루언서 마케팅",
    description: "국내외 크립토 인플루언서와의 협업을 통한 프로젝트 홍보",
    tags: ["KOL", "유튜버", "트위터"],
  },
  {
    icon: MessageSquare,
    title: "PR & 미디어",
    description: "주요 크립토 미디어 및 뉴스 채널을 통한 프로젝트 노출",
    tags: ["보도자료", "인터뷰", "AMA"],
  },
  {
    icon: Coins,
    title: "DeFi 마케팅",
    description: "탈중앙화 금융 프로젝트를 위한 전문 마케팅 전략",
    tags: ["TVL 성장", "파트너십", "유동성"],
  },
  {
    icon: Gamepad2,
    title: "GameFi & P2E",
    description: "블록체인 게임 및 Play-to-Earn 프로젝트 마케팅",
    tags: ["게임 런칭", "NFT", "유저 확보"],
  },
  {
    icon: Globe,
    title: "글로벌 확장",
    description: "한국 시장 진출을 위한 현지화 및 마케팅 지원",
    tags: ["한국 진출", "현지화", "규제 대응"],
  },
  {
    icon: Shield,
    title: "거래소 상장",
    description: "국내외 주요 거래소 상장을 위한 컨설팅 및 지원",
    tags: ["CEX", "DEX", "마켓메이킹"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-inter text-sm font-medium text-primary uppercase tracking-widest">
            Services
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            전문 서비스
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            Web3 프로젝트의 성공적인 런칭과 성장을 위한 
            종합 마케팅 솔루션을 제공합니다
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              
              <p className="font-inter text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-inter px-2 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
