import { Target, Eye, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-inter text-sm font-medium text-primary uppercase tracking-widest">
              About Us
            </span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              CryptoBridge<br />Korea
            </h2>
            <p className="font-inter text-muted-foreground text-lg mb-6 leading-relaxed">
              CryptoBridge Korea는 글로벌 Web3 프로젝트의 한국 시장 진출과
              국내 블록체인 기업의 글로벌 확장을 잇는 가교 역할을 합니다.
            </p>
            <p className="font-inter text-muted-foreground mb-8 leading-relaxed">
              2019년 설립 이후, 150개 이상의 프로젝트와 함께 성장하며
              한국 크립토 마케팅 시장의 새로운 기준을 만들어왔습니다.
              데이터 기반 전략, 깊이 있는 커뮤니티 인사이트, 그리고
              검증된 파트너 네트워크를 통해 프로젝트의 성공을 가속화합니다.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Target, label: "전략" },
                { icon: Eye, label: "통찰" },
                { icon: Zap, label: "실행" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl glass text-center">
                  <item.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-orbitron text-sm text-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2019", label: "설립" },
                { value: "30+", label: "전문 인력" },
                { value: "15+", label: "운영 국가" },
                { value: "98%", label: "고객 만족" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-8 rounded-2xl gradient-card border border-border/50 hover-lift ${
                    i % 2 === 0 ? "" : "mt-8"
                  }`}
                >
                  <div className="font-orbitron text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;