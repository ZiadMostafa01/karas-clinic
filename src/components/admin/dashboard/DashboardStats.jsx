import React from "react";
import { Stethoscope, HeartPulse, Dog, UserCog } from "lucide-react";
import { API_BASE_URL } from "../../../config/api"; // تأكد من صحة المسار لملف الـ config

function DashboardStats({ doctors = [], nurses = [], handlers = [], admins = [] }) {
  // تعريف بيانات الكروت بناءً على المصفوفات المستلمة
  const cards = [
    {
      title: "Doctors",
      count: doctors.length,
      data: doctors,
      icon: <Stethoscope size={22} />,
      color: "text-blue-600 bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      title: "Nurses",
      count: nurses.length,
      data: nurses,
      icon: <HeartPulse size={22} />,
      color: "text-rose-600 bg-rose-50",
      borderColor: "border-rose-100"
    },
    {
      title: "Animal Handlers",
      count: handlers.length,
      data: handlers,
      icon: <Dog size={22} />,
      color: "text-amber-600 bg-amber-50",
      borderColor: "border-amber-100"
    },
    {
      title: "Client Support",
      count: admins.length,
      data: admins,
      icon: <UserCog size={22} />,
      color: "text-emerald-600 bg-emerald-50",
      borderColor: "border-emerald-100"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`bg-white p-6 border ${card.borderColor} shadow-sm rounded-sm transition-all duration-300 hover:translate-y-[-5px] hover:shadow-md group`}
        >
          {/* الجزء العلوي: العنوان والعدد والأيقونة */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 group-hover:text-gray-600 transition-colors">
                {card.title}
              </p>
              <h3 className="text-4xl font-serif italic text-[#333]">
                {card.count}
              </h3>
            </div>
            <div className={`p-3 rounded-lg transition-transform duration-500 group-hover:rotate-12 ${card.color}`}>
              {card.icon}
            </div>
          </div>
          
          {/* الجزء السفلي: صور مصغرة للموظفين (Avatars) */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex -space-x-2">
              {card.data?.slice(0, 3).map((member, i) => (
                <div 
                  key={member._id || i} 
                  className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm"
                >
                  <img 
                    src={member.imageUrl ? `${API_BASE_URL}${member.imageUrl}` : "/assets/default-avatar.png"} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "/assets/default-avatar.png"; }}
                  />
                </div>
              ))}
              {card.count > 3 && (
                <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-[8px] font-bold text-gray-400 shadow-sm">
                  +{card.count - 3}
                </div>
              )}
            </div>
            
            <span className="text-[9px] uppercase tracking-[0.15em] text-gray-400 font-medium">
              Active Staff
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardStats;