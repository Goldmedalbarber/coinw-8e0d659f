import { ArrowRight, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="font-inter text-sm font-medium text-primary uppercase tracking-widest">
            Contact Us
          </span>
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
            프로젝트를 시작할
            <br />
            준비가 되셨나요?
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            무료 상담을 통해 귀사의 프로젝트에 최적화된 
            마케팅 전략을 제안해 드립니다
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="group">
              무료 상담 신청
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              <Send className="mr-2 w-4 h-4" />
              Telegram
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:contact@cryptobridge.kr"
              className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-orbitron text-lg font-semibold text-foreground mb-1">
                이메일
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                contact@cryptobridge.kr
              </p>
            </a>

            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Send className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-orbitron text-lg font-semibold text-foreground mb-1">
                Telegram
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                @cryptobridge_korea
              </p>
            </a>

            <a
              href="#"
              className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-orbitron text-lg font-semibold text-foreground mb-1">
                KakaoTalk
              </h3>
              <p className="font-inter text-sm text-muted-foreground">
                @cryptobridge
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
