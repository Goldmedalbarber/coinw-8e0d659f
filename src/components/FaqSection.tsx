import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "어떤 프로젝트와 협업이 가능한가요?",
    a: "Layer1/Layer2, DeFi, NFT, GameFi, RWA, AI x Crypto 등 Web3 전 영역의 프로젝트와 협업합니다. 스타트업부터 글로벌 대형 프로젝트까지 규모에 관계없이 지원 가능합니다.",
  },
  {
    q: "최소 캠페인 기간과 예산은 어떻게 되나요?",
    a: "권장 캠페인 기간은 최소 3개월이며, 예산은 프로젝트 단계와 목표에 따라 맞춤 견적을 드립니다. 무료 상담을 통해 최적의 플랜을 제안드립니다.",
  },
  {
    q: "한국 거래소 상장 지원이 가능한가요?",
    a: "Upbit, Bithumb, Coinone 등 국내 주요 거래소와 협력 관계를 유지하고 있으며, 상장 컨설팅, 마켓메이킹, 컴플라이언스 지원을 제공합니다.",
  },
  {
    q: "성과 측정과 리포팅은 어떻게 진행되나요?",
    a: "실시간 대시보드를 통해 KPI를 모니터링하고, 주간/월간 상세 리포트를 제공합니다. 커뮤니티 성장, 트래픽, 컨버전, 거래량 등 모든 지표를 투명하게 공유합니다.",
  },
  {
    q: "글로벌 시장 진출도 지원하나요?",
    a: "한국 시장 진출은 물론, 일본, 중국, 동남아, 유럽, 북미 시장까지 글로벌 확장을 지원합니다. 각 지역의 현지 파트너 네트워크를 보유하고 있습니다.",
  },
  {
    q: "계약 전 상담은 무료인가요?",
    a: "네, 초기 컨설팅과 전략 제안은 무료로 제공됩니다. 프로젝트 분석 후 맞춤형 마케팅 제안서를 보내드립니다.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-inter text-sm font-medium text-primary uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            자주 묻는 질문
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="gradient-card border border-border/50 rounded-2xl px-6 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="font-orbitron text-left text-foreground hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;