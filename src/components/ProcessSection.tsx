const steps = [
  {
    num: "01",
    title: "분석 & 전략",
    desc: "프로젝트의 비전, 타겟 시장, 경쟁 환경을 심층 분석하고 맞춤형 마케팅 로드맵을 수립합니다.",
  },
  {
    num: "02",
    title: "브랜딩 & 콘텐츠",
    desc: "프로젝트의 핵심 가치를 담은 브랜드 아이덴티티와 멀티 채널 콘텐츠를 제작합니다.",
  },
  {
    num: "03",
    title: "커뮤니티 구축",
    desc: "Discord, Telegram, KakaoTalk 등 핵심 채널에서 활발한 글로벌 커뮤니티를 빌딩합니다.",
  },
  {
    num: "04",
    title: "런칭 & 성장",
    desc: "IEO/IDO, 거래소 상장, KOL 캠페인을 동시 실행하여 폭발적인 성장을 만듭니다.",
  },
  {
    num: "05",
    title: "지속 관리",
    desc: "데이터 기반 KPI 모니터링과 지속적인 최적화로 장기적인 프로젝트 가치를 유지합니다.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-inter text-sm font-medium text-primary uppercase tracking-widest">
            Process
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            우리의 작업 방식
          </h2>
          <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
            검증된 5단계 프로세스로 프로젝트를 성공으로 이끕니다
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group p-8 rounded-2xl gradient-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift"
            >
              <div className="grid md:grid-cols-[120px_1fr] gap-6 items-start">
                <div className="font-orbitron text-5xl md:text-6xl font-black text-gradient group-hover:scale-110 transition-transform origin-left">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-orbitron text-2xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;