import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  LineChart,
  LogOut,
  X,
  ChevronDown,
  UserRound,
  Headset,
  Stethoscope,
  PawPrint,
} from "lucide-react";
import logo from "@/assets/images/Logo_main_light.png";
import { useAuth } from "../../context/admin/AuthContext";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleLogout = () => {
    // 1. مسح البيانات من الـ Context والـ Storage
    logout();

    // 2. توجيه إجباري لصفحة الهوم الرئيسية
    // نستخدم window.location بدلاً من navigate لمنع الـ AuthGuard من تحويلك للـ login
    window.location.href = "/";
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
    {
      name: "Team",
      icon: <Users size={20} />,
      hasSubmenu: true,
      submenuItems: [
        {
          name: "Doctors",
          path: "/admin/team/doctors",
          icon: <UserRound size={18} />,
        },
        {
          name: "Nurses",
          path: "/admin/team/nurses",
          icon: <Stethoscope size={18} />,
        },
        {
          name: "Animal Handler",
          path: "/admin/team/animal-handlers",
          icon: <PawPrint size={18} />,
        },
        {
          name: "Client Support",
          path: "/admin/team/support",
          icon: <Headset size={18} />,
        },
      ],
    },
    {
      name: "Insights",
      path: "/admin/insights",
      icon: <LineChart size={20} />,
    },
  ];

  const activeStyle =
    "flex items-center gap-3 px-4 py-3 bg-[var(--karas_aubergine_ink)] text-white rounded-lg transition-all";
  const normalStyle =
    "flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-[var(--karas_aubergine_ink)] hover:text-white rounded-lg transition-all";
  const submenuActiveStyle =
    "flex items-center gap-3 px-4 py-2 ml-9 bg-[var(--karas_aubergine_ink)]/50 text-white rounded-lg transition-all text-sm";
  const submenuNormalStyle =
    "flex items-center gap-3 px-4 py-2 ml-9 text-gray-400 hover:text-white transition-all text-sm";

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 lg:w-80 bg-[var(--karas_aubergine)] transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between py-6 mb-3 px-2">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
              <img src={logo} alt="" />
            </div>{" "}
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden text-white"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 space-y-2 p-4">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => {
                        toggleSubmenu(item.name);
                        navigate("/admin/team/doctors");
                      }}
                      className={`w-full cursor-pointer ${
                        window.location.pathname.includes("/admin/team")
                          ? activeStyle
                          : normalStyle
                      } justify-between`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${openSubmenu === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openSubmenu === item.name ? "max-h-40 mt-2 space-y-1" : "max-h-0"}`}
                    >
                      {item.submenuItems.map((sub) => (
                        <NavLink
                          key={sub.path}
                          to={sub.path}
                          className={({ isActive }) =>
                            isActive ? submenuActiveStyle : submenuNormalStyle
                          }
                          onClick={() =>
                            window.innerWidth < 768 && setIsOpen(false)
                          }
                        >
                          {sub.icon}
                          <span>{sub.name}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    end
                    className={({ isActive }) =>
                      isActive ? activeStyle : normalStyle
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          <div className="p-4 mt-auto">
            <button
              onClick={handleLogout}
              className="cursor-pointer w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-900/30 hover:text-red-100 rounded-lg transition-all"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
