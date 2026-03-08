import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

function StaffSlider({ title, subtitle, data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!data || data.length === 0) return null;

  return (
    <section className="bg-transparent py-10 relative">
      <div className="max-w-7xl mx-auto relative">
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
            <button ref={prevRef} className="cursor-pointer text-2xl text-[#888] hover:text-[#333] transition-colors">&#8592;</button>
            <button ref={nextRef} className="cursor-pointer text-2xl text-[#888] hover:text-[#333] transition-colors">&#8594;</button>
          </div>
        </div>

        <Swiper
          key={title + data.length}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
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
            const isDoctor = ["ajla", "abdullah", "milana", "mostafa", "usama"].some(id => member.id.includes(id));

            const cardContent = (
              <div className="flex flex-col group w-full">
                <div className="bg-white p-2 shadow-sm border border-[#e5e1d8] mb-4 w-full aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
                <h4 className="text-[13px] font-bold text-[#333] uppercase tracking-widest leading-tight group-hover:text-[var(--karas_aubergine)] transition-colors">
                  {member.name}
                </h4>
                <p className="text-[11px] text-[#888] mt-2 italic font-serif leading-tight">
                  {member.title}
                </p>
              </div>
            );

            return (
              <SwiperSlide key={member.id}>
                {isDoctor ? (
                  <Link to={`/doctor/${member.id}`} className="block cursor-pointer">
                    {cardContent}
                  </Link>
                ) : (
                  <div className="cursor-default">
                    {cardContent}
                  </div>
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