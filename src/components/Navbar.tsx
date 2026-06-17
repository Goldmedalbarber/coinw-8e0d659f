import { useState } from "react";

const CoinWLogo = () => (
  <svg width="100" viewBox="0 0 141 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.87 1.98H12.73v10.94h17.14V1.98zM12.73 22.59V12.92H1.7v9.67c0 7.41 5.98 13.42 13.36 13.42h14.81V24.93H15.06c-1.29 0-2.33-1.05-2.33-2.34z"
      fill="#7C5CFF"
    />
    <path
      d="M54.6 29.43c-6.47 0-10.53-4.29-10.53-11.11 0-6.74 4.29-11.17 10.73-11.17 5.4 0 9.28 3.09 9.95 7.93h-4.99c-.64-2.16-2.48-3.38-5.07-3.38-3.5 0-5.63 2.48-5.63 6.59 0 4.05 2.16 6.59 5.63 6.59 2.65 0 4.61-1.31 5.19-3.44h4.9c-.76 4.81-4.78 7.99-10.18 7.99zm11.94-7.67c0-4.61 3.38-7.7 8.05-7.7 4.64 0 8.02 3.09 8.02 7.7 0 4.61-3.38 7.67-8.02 7.67-4.67 0-8.05-3.06-8.05-7.67zm4.52-.03c0 2.22 1.43 3.68 3.53 3.68 2.07 0 3.5-1.46 3.5-3.68 0-2.19-1.43-3.65-3.5-3.65-2.1 0-3.53 1.46-3.53 3.65zm16.31-9.51c-1.43 0-2.57-1.14-2.57-2.57 0-1.43 1.14-2.54 2.57-2.54 1.4 0 2.54 1.11 2.54 2.54 0 1.43-1.14 2.57-2.54 2.57zm-2.22 16.86V14.5h4.49v14.58h-4.49zm12.29 0h-4.49V14.5h4.23l.29 1.52c.9-1.26 2.57-1.98 4.46-1.98 3.47 0 5.48 2.22 5.48 6.04v8.98h-4.49v-7.93c0-1.84-1.02-3.03-2.57-3.03-1.78 0-2.91 1.17-2.91 2.97v8zm16.9 0l-6.47-21.58h4.93l2.83 9.36c.38 1.28.73 2.57 1.08 4.69.35-2.13.7-3.35 1.08-4.69l2.65-9.36h5.28l2.54 9.36c.35 1.31.7 2.63 1.08 4.69.44-2.19.76-3.38 1.14-4.64l2.89-9.42h4.81l-6.59 21.58h-4.61l-3.94-14.17-4.05 14.17h-4.64z"
      fill="#FFFFFF"
    />
  </svg>
);

const AppleIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 2.98-.84.94-2.2 1.66-3.34 1.57-.14-1.12.43-2.3 1.1-3.04.78-.86 2.2-1.5 3.36-1.51zM20.5 17.2c-.6 1.38-.89 1.99-1.66 3.21-1.08 1.7-2.6 3.82-4.49 3.83-1.67.02-2.1-1.09-4.37-1.08-2.27.01-2.74 1.1-4.41 1.08-1.88-.02-3.32-1.93-4.4-3.63-3.02-4.77-3.34-10.36-1.47-13.33C.93 5.6 2.96 4.4 4.87 4.4c1.94 0 3.16 1.07 4.76 1.07 1.55 0 2.5-1.07 4.74-1.07 1.7 0 3.5.93 4.78 2.53-4.2 2.3-3.52 8.3.55 10.27z" />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label="CoinW Home" className="flex items-center">
          <CoinWLogo />
        </a>

        <a
          href="https://testflight.apple.com/join/EnVxDqYN"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 btn-primary text-white text-sm font-bold rounded-xl"
        >
          <AppleIcon className="w-4 h-4" />
          앱 다운로드
        </a>

        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="sm:hidden glass-nav px-4 pb-4">
          <a
            href="https://testflight.apple.com/join/EnVxDqYN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 btn-primary text-white text-sm font-bold rounded-xl"
          >
            <AppleIcon className="w-4 h-4" />
            앱 다운로드
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
