import { useEffect, useState } from "react";

const AppleIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 2.98-.84.94-2.2 1.66-3.34 1.57-.14-1.12.43-2.3 1.1-3.04.78-.86 2.2-1.5 3.36-1.51zM20.5 17.2c-.6 1.38-.89 1.99-1.66 3.21-1.08 1.7-2.6 3.82-4.49 3.83-1.67.02-2.1-1.09-4.37-1.08-2.27.01-2.74 1.1-4.41 1.08-1.88-.02-3.32-1.93-4.4-3.63-3.02-4.77-3.34-10.36-1.47-13.33C.93 5.6 2.96 4.4 4.87 4.4c1.94 0 3.16 1.07 4.76 1.07 1.55 0 2.5-1.07 4.74-1.07 1.7 0 3.5.93 4.78 2.53-4.2 2.3-3.52 8.3.55 10.27z" />
  </svg>
);

const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="glass-nav px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <div className="flex-1 leading-tight">
            <p className="text-[13px] sm:text-sm font-extrabold text-white">
              지금 <span className="em-red">무료</span>로 시작하세요
            </p>
            <p className="text-[11px] sm:text-xs text-white/40">
              TestFlight 선착순 · 2,000만+가 선택
            </p>
          </div>
          <a
            href="https://testflight.apple.com/join/EnVxDqYN"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-glow shrink-0 inline-flex items-center gap-2 px-6 py-3 btn-primary text-white font-extrabold rounded-2xl text-sm whitespace-nowrap"
          >
            <AppleIcon className="w-4 h-4" />
            앱 다운로드
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
