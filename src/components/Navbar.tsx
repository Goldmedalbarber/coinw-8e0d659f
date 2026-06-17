import { useState } from "react";

const CoinWLogo = () => (
  <svg width="100" viewBox="0 0 141 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.87 1.98H12.73v10.94h17.14V1.98zM12.73 22.59V12.92H1.7v9.67c0 7.41 5.98 13.42 13.36 13.42h14.81V24.93H15.06c-1.29 0-2.33-1.05-2.33-2.34z"
      fill="#5227FF"
    />
    <path
      d="M54.6 29.43c-6.47 0-10.53-4.29-10.53-11.11 0-6.74 4.29-11.17 10.73-11.17 5.4 0 9.28 3.09 9.95 7.93h-4.99c-.64-2.16-2.48-3.38-5.07-3.38-3.5 0-5.63 2.48-5.63 6.59 0 4.05 2.16 6.59 5.63 6.59 2.65 0 4.61-1.31 5.19-3.44h4.9c-.76 4.81-4.78 7.99-10.18 7.99zm11.94-7.67c0-4.61 3.38-7.7 8.05-7.7 4.64 0 8.02 3.09 8.02 7.7 0 4.61-3.38 7.67-8.02 7.67-4.67 0-8.05-3.06-8.05-7.67zm4.52-.03c0 2.22 1.43 3.68 3.53 3.68 2.07 0 3.5-1.46 3.5-3.68 0-2.19-1.43-3.65-3.5-3.65-2.1 0-3.53 1.46-3.53 3.65zm16.31-9.51c-1.43 0-2.57-1.14-2.57-2.57 0-1.43 1.14-2.54 2.57-2.54 1.4 0 2.54 1.11 2.54 2.54 0 1.43-1.14 2.57-2.54 2.57zm-2.22 16.86V14.5h4.49v14.58h-4.49zm12.29 0h-4.49V14.5h4.23l.29 1.52c.9-1.26 2.57-1.98 4.46-1.98 3.47 0 5.48 2.22 5.48 6.04v8.98h-4.49v-7.93c0-1.84-1.02-3.03-2.57-3.03-1.78 0-2.91 1.17-2.91 2.97v8zm16.9 0l-6.47-21.58h4.93l2.83 9.36c.38 1.28.73 2.57 1.08 4.69.35-2.13.7-3.35 1.08-4.69l2.65-9.36h5.28l2.54 9.36c.35 1.31.7 2.63 1.08 4.69.44-2.19.76-3.38 1.14-4.64l2.89-9.42h4.81l-6.59 21.58h-4.61l-3.94-14.17-4.05 14.17h-4.64z"
      fill="#1A1A1A"
    />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#EBEBEE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label="CoinW Home">
          <CoinWLogo />
        </a>

        {/* Desktop CTA */}
        <a
          href="https://testflight.apple.com/join/EnVxDqYN"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#5227FF] text-white text-sm font-semibold rounded-2xl hover:bg-[#4520DD] transition-colors"
        >
          앱 다운로드
        </a>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          <span className={`block w-5 h-0.5 bg-gray-800 transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-800 transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-800 transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="sm:hidden bg-white border-b border-[#EBEBEE] px-4 pb-4">
          <a
            href="https://testflight.apple.com/join/EnVxDqYN"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-5 py-3 bg-[#5227FF] text-white text-sm font-semibold rounded-2xl hover:bg-[#4520DD] transition-colors"
          >
            앱 다운로드
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
