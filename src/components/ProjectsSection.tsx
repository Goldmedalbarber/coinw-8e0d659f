import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "DeFi Protocol X",
    category: "DeFi",
    raised: "$45M",
    description: "탈중앙화 거래소 및 유동성 풀 프로토콜",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    name: "NFT Marketplace Y",
    category: "NFT",
    raised: "$12M",
    description: "한국 최대 NFT 마켓플레이스",
    gradient: "from-pink-500 to-orange-500",
  },
  {
    name: "GameFi Universe",
    category: "P2E",
    raised: "$28M",
    description: "메타버스 기반 P2E 게임 플랫폼",
    gradient: "from-green-500 to-teal-500",
  },
  {
    name: "Layer 2 Solution",
    category: "Infrastructure",
    raised: "$80M",
    description: "고성능 이더리움 레이어 2 솔루션",
    gradient: "from-cyan-500 to-blue-500",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="font-inter text-sm font-medium text-primary uppercase tracking-widest">
              Projects
            </span>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mt-4">
              성공 사례
            </h2>
          </div>
          <Button variant="ghost" className="mt-6 md:mt-0 text-muted-foreground hover:text-foreground group">
            모든 프로젝트 보기
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="px-3 py-1 text-xs font-inter font-medium rounded-full bg-primary/20 text-primary">
                    {project.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-orbitron text-2xl font-bold text-foreground mb-2">
                  {project.name}
                </h3>
                
                <p className="font-inter text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-border/50">
                  <div>
                    <span className="font-inter text-xs text-muted-foreground block">모금 금액</span>
                    <span className="font-orbitron text-2xl font-bold text-foreground text-glow">
                      {project.raised}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
