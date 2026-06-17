import { useEffect, useState } from "react";

const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
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
      <div className="bg-white/90 backdrop-blur-lg border-t border-[#EBEBEE] px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <div className="flex-1 leading-tight">
            <p className="text-[13px] sm:text-sm font-extrabold text-gray-900">
              지금 <span className="em-red">무료</span>로 시작하세요
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400">
              TestFlight 선착순 · 2,000만+가 선택
            </p>
          </div>
          <a
            href="https://testflight.apple.com/join/EnVxDqYN"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-glow shrink-0 inline-flex items-center gap-1.5 px-6 py-3 bg-[#5227FF] text-white font-extrabold rounded-2xl text-sm whitespace-nowrap"
          >
            📱 앱 다운로드
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
