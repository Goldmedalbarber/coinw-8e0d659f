import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "CryptoBridge Korea와 함께한 한국 시장 진출은 우리 프로젝트의 터닝 포인트였습니다. 3개월 만에 한국 커뮤니티 50K+를 달성했습니다.",
    name: "James Chen",
    role: "CEO, NovaChain",
  },
  {
    quote: "IEO 마케팅부터 거래소 상장까지 원스톱으로 진행해 주었습니다. 전문성과 실행력 모두 최고 수준입니다.",
    name: "박지훈",
    role: "Founder, MetaVerse Labs",
  },
  {
    quote: "데이터 기반의 명확한 리포팅과 24/7 소통이 인상적이었습니다. 다음 프로젝트도 함께하고 싶습니다.",
    name: "Yuki Tanaka",
    role: "CMO, ChainPlay",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-inter text-sm font-medium text-primary uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            고객의 목소리
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl gradient-card border border-border/50 hover:border-primary/40 transition-all hover-lift relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/30" />
              <p className="font-inter text-foreground/90 leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="pt-4 border-t border-border/50">
                <div className="font-orbitron font-semibold text-foreground">{t.name}</div>
                <div className="font-inter text-sm text-muted-foreground mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;