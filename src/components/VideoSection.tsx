import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 sm:py-20">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 fade-in-section ${isVisible ? "visible" : ""}`}
      >
        <div className="relative w-full overflow-hidden rounded-2xl border border-[#EBEBEE]" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/6JYLKIkQCPo"
            title="CoinW Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
