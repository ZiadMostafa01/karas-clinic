import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../config/api"; // تأكد من المسار الصحيح لملف الـ config
import "swiper/css";
import "swiper/css/navigation";

function StaffSlider({ title, subtitle, data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // لو مفيش بيانات للقسم ده، مش هنعرض السلايدر خالص
  if (!data || data.length === 0) return null;

  return (
    <section className="bg-transparent py-10 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Header: Title & Navigation Buttons */}
        <div className="border-b border-[#d1cdc2] mb-10 pb-4 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-serif italic text-[#444]">{title}</h2>
            {subtitle && (
              <p className="text-[11px] text-[#aaa] mt-1 uppercase tracking-widest">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <button
              ref={prevRef}
              className="cursor-pointer text-2xl text-[#888] hover:text-[#333] transition-colors"
            >
              &#8592;
            </button>
            <button
              ref={nextRef}
              className="cursor-pointer text-2xl text-[#888] hover:text-[#333] transition-colors"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          key={title + data.length}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2.5, spaceBetween: 30 },
            1024: { slidesPerView: 3.5, spaceBetween: 30 },
          }}
        >
          {data.map((member) => {
            // التأكد من وجود الـ Flag اللي ضيفناه في OurTeam
            const isClickable = member.canViewDetails === true;

            const imagePath = member.imageUrl
              ? `${API_BASE_URL}${member.imageUrl}`
              : "/assets/default-avatar.png";

            // الكارد نفسه بتأثيرات الهوفر (للجميع)
            const cardContent = (
              <div
                className={`flex flex-col group w-full transition-all ${isClickable ? "cursor-pointer" : "cursor-default"}`}
              >
                {/* تأثير التكبير (Scale) سيعمل مع الـ group-hover للجميع */}
                <div className="bg-white p-2 shadow-sm border border-[#e5e1d8] mb-4 w-full aspect-[3/4] overflow-hidden">
                  <img
                    src={imagePath}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "/assets/default-avatar.png";
                    }}
                  />
                </div>

                {/* تغيير اللون للأرجواني عند الهوفر (للجميع) */}
                <h4 className="text-[13px] font-bold text-[#333] uppercase tracking-widest leading-tight group-hover:text-[var(--karas_aubergine)] transition-colors">
                  {member.name}
                </h4>

                <p className="text-[11px] text-[#888] mt-2 italic font-serif leading-tight">
                  {member.title}
                </p>
              </div>
            );

            return (
              <SwiperSlide key={member._id || member.id}>
                {isClickable ? (
                  /* لو دكتور: نلف الكارد بـ Link */
                  <Link
                    to={`/doctor/${member._id || member.id}`}
                    className="block"
                  >
                    {cardContent}
                  </Link>
                ) : (
                  /* لو مش دكتور: نعرض الكارد كـ div عادي (بدون لينك) */
                  <div>{cardContent}</div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default StaffSlider;
