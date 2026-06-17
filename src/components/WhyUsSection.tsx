import { Award, Network, BarChart3, Headphones, Lock, Languages } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "검증된 트랙 레코드",
    desc: "150+ 프로젝트, 누적 모금액 $2B+ 달성",
  },
  {
    icon: Network,
    title: "글로벌 네트워크",
    desc: "50+ 거래소, 200+ KOL, 100+ 미디어 파트너",
  },
  {
    icon: BarChart3,
    title: "데이터 기반 전략",
    desc: "실시간 대시보드와 KPI 기반 의사결정",
  },
  {
    icon: Headphones,
    title: "24/7 전담 매니저",
    desc: "프로젝트별 전담 PM과 즉각적인 소통",
  },
  {
    icon: Lock,
    title: "철저한 규제 대응",
    desc: "한국 가상자산이용자보호법 완벽 컴플라이언스",
  },
  {
    icon: Languages,
    title: "현지화 전문성",
    desc: "한국어, 영어, 중국어, 일본어 다국어 운영",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-inter text-sm font-medium text-primary uppercase tracking-widest">
            Why CryptoBridge
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            왜 우리를 선택해야 할까요?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative p-8 rounded-2xl glass hover:border-primary/60 transition-all duration-500"
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow opacity-90 group-hover:scale-110 transition-transform">
                <r.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="pt-8">
                <h3 className="font-orbitron text-xl font-bold text-foreground mb-3">
                  {r.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;