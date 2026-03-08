import { useEffect, useRef } from "react";

function ProgressBar() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolledPercent = Math.min(
        Math.max((scrollTop / scrollHeight) * 100, 0),
        100,
      );

      if (progressRef.current) {
        progressRef.current.style.width = `${scrolledPercent}%`;
      }

      if (containerRef.current) {
        containerRef.current.style.height = scrollTop > 0 ? "4px" : "0px";
        containerRef.current.style.opacity = scrollTop > 0 ? "1" : "0";
      }

      animationFrame = requestAnimationFrame(updateProgress);
    };

    animationFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-blue-100 overflow-hidden transition-all duration-400 ease-out h-0 opacity-0"
    >
      <div
        ref={progressRef}
        className="h-1 bg-[var(--karas_aubergine)] transition-all duration-75 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  );
}

export default ProgressBar;
