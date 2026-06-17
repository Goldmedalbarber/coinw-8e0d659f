const Footer = () => {
  return (
    <footer className="py-10 sm:py-12 border-t border-white/[0.07]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-xs sm:text-[13px] text-white/30 text-center leading-relaxed">
          본 페이지는 교육 및 정보 제공 목적이며, 투자 권유가 아닙니다.
          크립토 거래는 높은 리스크를 수반하며, 원금 손실이 발생할 수 있습니다.
          <br className="hidden sm:block" />
          © 2026 Trading Insight KR.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
