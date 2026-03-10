import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import shape from "@/assets/images/download.png";
import axios from "axios";
import { API_BASE_URL } from "../../config/api";

const AnnouncementBar = () => {
  const [announcement, setAnnouncement] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/Announcements`);

        // البحث عن الإعلان المفعل
        const activeAnnouncement = response.data.find(
          (item) => item.isActive === true,
        );

        if (activeAnnouncement) {
          setAnnouncement(activeAnnouncement);
          setIsVisible(true); // هتظهر دايماً طالما فيه إعلان مفعل عند التحميل
        } else {
          setIsVisible(false);
        }
      } catch (error) {
        console.error("Error fetching announcement:", error);
      }
    };

    fetchAnnouncement();
  }, []);

  const handleClose = () => {
    setIsVisible(false); // هتقفلها في الجلسة الحالية بس
  };

  // لو مفيش إعلان أو اليوزر داس إغلاق، مش هنعرض حاجة
  if (!isVisible || !announcement) return null;

  return (
    <div className="fixed top-25 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-10px)] sm:w-[calc(100%-40px)] rounded-lg bg-[var(--karas_aubergine)] text-white p-6 shadow-md transition-all text-center">
      {/* Background Shape Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `url("${shape}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center relative z-10">
        <h3 className="text-lg md:text-xl font-bold flex items-center gap-2 mb-1 tracking-tight">
          {announcement.title}
        </h3>
        <p className="text-sm md:text-base font-medium opacity-90 leading-relaxed">
          {announcement.description}
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 border border-white/20 rounded-full cursor-pointer p-1.5 hover:bg-black/20 transition-colors z-20"
        aria-label="Close announcement"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default AnnouncementBar;
