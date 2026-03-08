import { Link } from "react-router-dom";
import logo from "/src/assets/images/Logo_main_light.png";

function Footer() {
  return (
    <footer className="bg-[#2a2140] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-6 ">
        <div className="flex flex-wrap justify-between gap-10">
          {" "}
          <div>
            <h3 className="font-semibold mb-4">
              {" "}
              <img src={logo} className="w-60" alt="" />{" "}
            </h3>
            <div className="space-y-2 mb-4">
              Calm, deliberate veterinary care.
              <br />
              JLT | Business Bay
            </div>
            <div className="flex gap-2 ">
              <a
                href="https://www.instagram.com/karasvetdxb/"
                target="_blank"
                className="bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white hover:-translate-y-2 transition duration-300 p-2 rounded-full"
              >
                <svg
                  aria-hidden="true"
                  class="e-font-icon-svg e-fab-facebook-f fill-current w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/karas-vet-clinic/"
                target="_blank"
                className="bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white  hover:-translate-y-2 transition duration-300 p-2 rounded-full"
              >
                <svg
                  aria-hidden="true"
                  class="e-font-icon-svg e-fab-linkedin-in fill-current w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Practice</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <a
                href="https://karas.viggo.vet/online-booking/"
                target="_blank"
                className=" hover:text-white transition"
              >
                At Karas{" "}
              </a>
              <Link to="/contact" className=" hover:text-white transition">
                How We Practice
              </Link>

              <Link to="/pcr-testing" className=" hover:text-white transition">
                Care Plans
              </Link>
              <Link to="/pcr-testing" className=" hover:text-white transition">
                PCR Testing
              </Link>
              <Link to="/payment" className=" hover:text-white transition">
                Online Payment{" "}
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link to="/contact" className=" hover:text-white transition">
                Client Registration
              </Link>
              <Link to="/pcr-testing" className=" hover:text-white transition">
                DM Registration
              </Link>
              <Link to="/pcr-testing" className=" hover:text-white transition">
                TNR Form
              </Link>
              <Link to="/pcr-testing" className=" hover:text-white transition">
                Karas Vet Shop
              </Link>
              <Link to="/pcr-testing" className=" hover:text-white transition">
                Keep it operational but grouped cleanly.
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Careers</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link to="/volunteer" className=" hover:text-white transition">
                Internship Program
              </Link>

              <Link to="/we-are-hiring" className=" hover:text-white transition">
                Open Vacancies
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Locations</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <Link
                to="/clinics/karas-JLT"
                className=" hover:text-white transition"
              >
                JLT Clinic
              </Link>
              <Link
                to="/clinics/karas-downtown"
                className=" hover:text-white transition"
              >
                Business Bay Clinic{" "}
              </Link>
              <a
                href="mailto:management@karasvet.com"
                className="flex gap-1 items-center hover:text-white transition group"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>management@karasvet.com</span>
              </a>

              <a
                href="tel:045756444"
                className="flex items-center gap-1   hover:text-white transition"
              >
                <svg
                  fill="#000000"
                  width="18"
                  height="18"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="phone">
                      <rect width="24" height="24" opacity="0" />

                      <path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22zM6.6 4A2.61 2.61 0 0 0 4 6.6 13.41 13.41 0 0 0 17.4 20a2.61 2.61 0 0 0 2.6-2.6v-.33L15.36 16l-.29.55c-.45.87-.78 1.5-1.62 1.16a11.85 11.85 0 0 1-7.18-7.21c-.36-.78.32-1.14 1.18-1.59L8 8.64 6.93 4z" />
                    </g>
                  </g>
                </svg>
                <span>04 575 6 444</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className=" text-center md:text-right">
          Copyright © 2026 Karas Veterinary Clinic, All rights reserved.
        </p>
        <p className="flex gap-4 text-gray-400 text-center md:text-right">
          <Link to="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/terms-services" className="hover:text-white transition">
            Terms & Services
          </Link>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
