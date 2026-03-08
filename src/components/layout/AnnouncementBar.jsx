import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import shape from "/src/assets/images/download.png";
const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isBannerClosed = localStorage.getItem("announcement_closed");
    if (!isBannerClosed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("announcement_closed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-25 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-10px)] sm:w-[calc(100%-40px)] rounded-lg bg-[var(--karas_aubergine)] text-white p-6 shadow-md transition-all text-center">
      {" "}
      <div class="absolute inset-0 w-full h-full">
        <div
          class="w-auto h-full md:w-full opacity-20 relative mr-auto transform "
          style={{
            backgroundImage: `url("${shape}")`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>
      <div className=" flex flex-col items-center text-center  ">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-lg md:text-xl font-bold flex items-center gap-2 mb-1 tracking-tight">
            <span className="animate-pulse">🎉</span> Congratulations!
          </h3>

          <p className="text-sm md:text-base font-medium opacity-90 leading-relaxed">
            🚨 Karas Clinic website has been officially launched!
          </p>
        </div>
      </div>
      <button
        onClick={handleClose}
        className="absolute left-3 md:left-5 top-7 border rounded-lg cursor-pointer -translate-y-1/2 p-1.5 hover:bg-black/20 rounded-full transition-colors"
        aria-label="Close announcement"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default AnnouncementBar;
