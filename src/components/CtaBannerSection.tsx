import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaBannerSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-12 md:p-20 text-center">
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, hsl(0 0% 100% / 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 50%, hsl(180 100% 50% / 0.3) 0%, transparent 50%)`,
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-orbitron text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              당신의 Web3 프로젝트를<br />다음 단계로 이끌어 드립니다
            </h2>
            <p className="font-inter text-foreground/80 text-lg mb-10">
              지금 무료 상담을 신청하고 맞춤형 마케팅 전략을 받아보세요
            </p>
            <Button variant="heroOutline" size="lg" className="bg-background/20 backdrop-blur-md border-foreground/40 text-foreground hover:bg-background/30">
              무료 컨설팅 시작하기
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerSection;