import { ExternalLink } from "lucide-react";

const footerLinks = {
  services: [
    { name: "IEO/ICO 마케팅", href: "#" },
    { name: "DeFi 마케팅", href: "#" },
    { name: "NFT 마케팅", href: "#" },
    { name: "GameFi & P2E", href: "#" },
  ],
  company: [
    { name: "회사 소개", href: "#" },
    { name: "성공 사례", href: "#projects" },
    { name: "파트너십", href: "#partners" },
    { name: "블로그", href: "#" },
  ],
  social: [
    { name: "Twitter", href: "#" },
    { name: "Telegram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Medium", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="font-orbitron text-2xl font-bold text-foreground">
                CRYPTO<span className="text-gradient">BRIDGE</span>
              </span>
            </a>
            <p className="font-inter text-sm text-muted-foreground mb-6">
              Korea's Premier Web3 Marketing Agency.
              블록체인 프로젝트의 성공을 함께 만들어갑니다.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-orbitron text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-muted-foreground">
            © 2024 CryptoBridge Korea. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="font-inter text-sm text-muted-foreground hover:text-foreground transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
