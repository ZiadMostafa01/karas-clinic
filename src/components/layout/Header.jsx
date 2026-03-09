import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import logo from "@/assets/images/Logo_main.png";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";

const getNavClass = ({ isActive }) => {
  const baseClasses = `
    relative overflow-hidden pb-1 font-bold transition duration-300
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] 
    after:w-full after:bg-[var(--karas_aubergine)] 
    after:transition-transform after:duration-300 after:ease-in-out
  `;

  return isActive
    ? `${baseClasses} text-[var(--karas_aubergine)] after:scale-x-100`
    : `${baseClasses} hover:text-[var(--karas_aubergine)] after:scale-x-0 after:origin-right hover:after:origin-left hover:after:scale-x-100`;
};
const getMobileNavClass = ({ isActive }) => {
  const baseClasses =
    "mx-6 py-4 border-b border-dashed transition-all duration-300 ease-in-out block";
  return isActive
    ? `${baseClasses} text-[var(--karas_aubergine)] font-extrabold scale-105 origin-left`
    : `${baseClasses} text-gray-500 font-medium`;
};

// دي للينكات اللي جوه الـ dropdown عشان حجمها ميبقاش ضخم
const getSubMobileClass = ({ isActive }) => {
  return isActive
    ? "text-[var(--karas_aubergine)] font-bold scale-105 origin-left transition-all"
    : "text-gray-500 transition-all";
};
function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-400
        ${scrolled ? "bg-[var(--karas_paper)] " : "bg-transparent"}
      `}
    >
      {" "}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} className="w-44 sm:w-52" alt="" />{" "}
        </Link>
        <div className="flex items-center gap-6  text-gray-700">
          <nav className="translate-y-0.5 hidden xl:flex gap-6 font-bold ">
            <NavLink to="/" className={getNavClass}>
              At Karas
            </NavLink>

            <div className="relative">
              <div className="relative group">
                <NavLink
                  to="/all-services"
                  className={(props) =>
                    `${getNavClass(props)} flex items-center gap-1`
                  }
                >
                  <span>Clinical Care</span>
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fas-angle-down w-2.5 fill-current"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg>{" "}
                </NavLink>

                <div className="absolute left-0 top-full mt-2  w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                  <NavLink
                    to="all-services"
                    className={(props) =>
                      `${getNavClass(props)} block px-4 py-3 hover:bg-gray-100 transition`
                    }
                  >
                    How We Practice
                  </NavLink>

                  <NavLink
                    to="pcr-testing"
                    className={(props) =>
                      `${getNavClass(props)} block px-4 py-3 hover:bg-gray-100  transition`
                    }
                  >
                    PCR Testing{" "}
                  </NavLink>
                  <NavLink
                    to="care-plan"
                    className={(props) =>
                      `${getNavClass(props)} block px-4 py-3 hover:bg-gray-100  transition`
                    }
                  >
                    Care Plans{" "}
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink to="/our-team" className={getNavClass}>
              Karas Team
            </NavLink>
            <div className="relative">
              <div className="relative group">
                <NavLink
                  to="/clinics"
                  className={(props) =>
                    `${getNavClass(props)} flex items-center gap-1`
                  }
                >
                  <span>Clinics</span>
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fas-angle-down w-2.5 fill-current"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg>{" "}
                </NavLink>

                <div className="absolute left-0 top-full mt-2 w-70 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                  <NavLink
                    to="clinics/karas-JLT"
                    className={(props) =>
                      `${getNavClass(props)} block px-4 py-3 hover:bg-gray-100  transition`
                    }
                  >
                    Karas Veterinary Clinic JLT{" "}
                  </NavLink>

                  <NavLink
                    to="clinics/karas-downtown"
                    className={(props) =>
                      `${getNavClass(props)} block px-4 py-3 hover:bg-gray-100  transition`
                    }
                  >
                    Karas Veterinary Clinic Downtown{" "}
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink to="/insights" className={getNavClass}>
              Insights{" "}
            </NavLink>
            <NavLink to="/contact" className={getNavClass}>
              Contact Us{" "}
            </NavLink>
          </nav>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="relative cursor-pointer block xl:hidden p-2 rounded-lg bg-[var(--karas_aubergine)] hover:bg-[var(--primary1)] text-white transition duration-300  w-10 h-10"
          >
            <svg
              viewBox="0 0 448 512"
              className={`absolute inset-0 m-auto w-5 h-5  transition-all duration-300
      ${mobileMenu ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"}
    `}
              fill="currentColor"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>

            <svg
              viewBox="0 0 352 512"
              className={`absolute inset-0 m-auto w-5 h-5 transition-all duration-300
      ${mobileMenu ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}
    `}
              fill="currentColor"
            >
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
            </svg>
          </button>
          <div
            className={`xl:hidden absolute top-full left-1/2 -translate-x-1/2 rounded-b-2xl
  w-[calc(100%-3rem)] bg-white shadow-lg overflow-hidden
  transition-all duration-300 ease-in-out
  ${mobileMenu ? "max-h-screen" : "max-h-0"}`}
          >
            <nav className="flex flex-col text-[15px] font-medium">
              {/* Home */}
              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
                className={getMobileNavClass}
              >
                Home
              </NavLink>

              {/* Our Services Dropdown */}
              <details className="mx-6 py-4 border-b border-dashed group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <NavLink
                    to="/all-services"
                    onClick={() => setMobileMenu(false)}
                    className={getSubMobileClass}
                  >
                    Our Services
                  </NavLink>
                  <svg
                    aria-hidden="true"
                    className="w-2.5 fill-current transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 320 512"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg>
                </summary>
                <div className="mt-4 flex flex-col gap-4 pl-4">
                  <NavLink
                    to="/all-services"
                    onClick={() => setMobileMenu(false)}
                    className={getSubMobileClass}
                  >
                    All Services
                  </NavLink>
                  <NavLink
                    to="/pcr-testing"
                    onClick={() => setMobileMenu(false)}
                    className={getSubMobileClass}
                  >
                    PCR Testing
                  </NavLink>
                </div>
              </details>

              {/* Our Team */}
              <NavLink
                to="/our-team"
                onClick={() => setMobileMenu(false)}
                className={getMobileNavClass}
              >
                Our Team
              </NavLink>

              {/* Clinics Dropdown */}
              <details className="mx-6 py-4 border-b border-dashed group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <NavLink
                    to="/clinics"
                    onClick={() => setMobileMenu(false)}
                    className={getSubMobileClass}
                  >
                    Clinics
                  </NavLink>
                  <svg
                    aria-hidden="true"
                    className="w-2.5 fill-current transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 320 512"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg>
                </summary>
                <div className="mt-4 flex flex-col gap-4 pl-4">
                  <NavLink
                    to="/clinics/karas-JLT"
                    onClick={() => setMobileMenu(false)}
                    className={getSubMobileClass}
                  >
                    Karas Veterinary Clinic JLT
                  </NavLink>
                  <NavLink
                    to="/clinics/karas-downtown"
                    onClick={() => setMobileMenu(false)}
                    className={getSubMobileClass}
                  >
                    Karas Veterinary Clinic Downtown
                  </NavLink>
                </div>
              </details>

              {/* Contact Us */}
              <NavLink
                to="/contact"
                onClick={() => setMobileMenu(false)}
                className={getMobileNavClass}
              >
                Contact Us
              </NavLink>

              {/* Button */}
              <a
                href="https://karas.viggo.vet/online-booking/"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenu(false)}
                className="flex cursor-pointer mx-6 my-5 justify-center items-center gap-2 text-sm bg-[var(--karas_aubergine)] text-white px-6 py-3 rounded-lg transition active:scale-95"
              >
                <svg /* أيقونة الكلندر */
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v5.025q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V5H5v14h5q.425 0 .713.288T11 20t-.288.713T10 21zm0-3v1V5v6.075V11zm3-1h2.5q.425 0 .713-.288T11.5 16t-.288-.712T10.5 15H8q-.425 0-.712.288T7 16t.288.713T8 17m0-4h5q.425 0 .713-.288T14 12t-.288-.712T13 11H8q-.425 0-.712.288T7 12t.288.713T8 13m0-4h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8t.288.713T8 9m4.538-4.962q.212-.213.212-.538t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213M18 23q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m-.5-4.5v2q0 .2.15.35T18 21t.35-.15t.15-.35v-2h2q.2 0 .35-.15T21 18t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 15t-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 18t.15.35t.35.15z"
                  />
                </svg>
                <span>Book an Appointment</span>
              </a>
            </nav>
          </div>

          <a
            href="https://karas.viggo.vet/online-booking/"
            target="_blank"
            className="hidden sm:flex cursor-pointer font-bold  items-center gap-1  text-sm bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white  px-6 py-2 rounded-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v5.025q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V5H5v14h5q.425 0 .713.288T11 20t-.288.713T10 21zm0-3v1V5v6.075V11zm3-1h2.5q.425 0 .713-.288T11.5 16t-.288-.712T10.5 15H8q-.425 0-.712.288T7 16t.288.713T8 17m0-4h5q.425 0 .713-.288T14 12t-.288-.712T13 11H8q-.425 0-.712.288T7 12t.288.713T8 13m0-4h8q.425 0 .713-.288T17 8t-.288-.712T16 7H8q-.425 0-.712.288T7 8t.288.713T8 9m4.538-4.962q.212-.213.212-.538t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213M18 23q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m-.5-4.5v2q0 .2.15.35T18 21t.35-.15t.15-.35v-2h2q.2 0 .35-.15T21 18t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 15t-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 18t.15.35t.35.15z"
              />
            </svg>{" "}
            <span>Book an Appointment</span>
          </a>
        </div>
      </div>
      <ProgressBar />
    </header>
  );
}
export default Header;
