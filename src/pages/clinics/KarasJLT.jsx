import img from "/src/assets/images/jlt-clinic.jpeg";
import img1 from "/src/assets/images/JLT-image.jpg";
import ApproachSection from "../../components/clinics/ApproachSection";
import PagesHeader from "../../components/PagesHeader";
import AppointmentSection from "../../components/home/AppointmentSection";
import ServicesCards from "../../components/ServicesCards";
import LocationPurpose from "../../components/clinics/LocationPurpose";

function KarasJLT() {
  const businessBayServices = [
    {
      title: "Preventive health programs and vaccination",
      description: "",
    },
    {
      title: "Internal medicine consultations",
      description: "",
    },
    {
      title: "Diagnostic imaging and laboratory coordination",
      description: "",
    },
    {
      title: "Dental procedures",
      description: "",
    },
    {
      title: "Soft tissue and orthopedic surgery",
      description: "",
    },
    {
      title: "Structured follow up and chronic case management",
      description: "",
    },
  ];
  const principles = [
    {
      label: "01",
      title: "Continuity over transactional visits",
      desc: "Building a lasting relationship with your provider rather than one-off, disconnected checkups.",
    },
    {
      label: "02",
      title: "Structured medical reasoning",
      desc: "A systematic approach to diagnosis and treatment that follows logical, evidence-based steps.",
    },
    {
      label: "03",
      title: "Clear explanation of options",
      desc: "Ensuring you fully understand every path available before making informed decisions.",
    },
    {
      label: "04",
      title: "Long term care planning",
      desc: "Shifting the focus from immediate fixes to sustainable health and preventive strategies.",
    },
  ];
  return (
    <div className="bg-[var(--karas_paper)] overflow-hidden relative pt-10">
      <PagesHeader
        title="Established veterinary care for the Jumeirah Lakes Towers community."
        description="Structured for continuity, clinical depth, and long term case management."
      />

      <main>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 text-center md:text-left order-2 md:order-1 px-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2D1B33] mb-6 leading-tight break-words">
              Karas JLT
            </h2>

            <div className="w-16 h-[2px] bg-[#2D1B33] mb-8 mx-auto md:mx-0"></div>

            <p className="text-base lg:text-2xl font-serif italic text-[var(--karas_aubergine)] leading-relaxed max-w-xl mb-6  mx-auto md:mx-0">
              Calm, deliberate veterinary care for the JLT community.
            </p>
            <p className="text-base text-gray-600/90 sm:text-lg font-serif italic  leading-relaxed max-w-xl mb-10  mx-auto md:mx-0">
              A high-standard practice in Jumeirah Lakes Towers, focused on
              clear communication and clinical excellence.
            </p>

            <div className="flex items-center justify-between md:justify-start gap-2 sm:gap-4 text-[9px] min-[400px]:text-[11px] tracking-[0.2em] font-bold text-[var(--karas_aubergine)] uppercase w-full max-w-md mx-auto md:mx-0">
              <span>Assess</span>
              <div className="flex-1 md:flex-none md:w-10 bg-[var(--karas_aubergine)] h-[1px] opacity-30"></div>

              <span>Clarify</span>
              <div className="flex-1 md:flex-none md:w-10 bg-[var(--karas_aubergine)] h-[1px] opacity-30"></div>

              <span>Plan</span>
              <div className="flex-1 md:flex-none md:w-10 bg-[var(--karas_aubergine)] h-[1px] opacity-30"></div>

              <span>Act</span>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 w-full max-w-lg mx-auto md:max-w-full px-4">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-[#2D1B33]/5 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>

              <img
                src={img}
                className="relative w-full h-auto rounded-xl shadow-xl sm:shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01]"
                alt="PCR Testing Diagnostic"
              />
            </div>
          </div>
        </div>
        <ApproachSection />
        <ServicesCards
          title="Clinical Scope"
          subtitle="Cases requiring extended hospitalization or advanced procedures are coordinated seamlessly within the Karas system."
          data={businessBayServices}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto pb-16 px-6 text-gray-500 font-medium">
          <div className="relative pt-6 text-center md:text-left">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-1/4 border-t-2 border-[var(--karas_aubergine)]"></div>
            <p className="uppercase tracking-widest text-sm">
              Cases are assessed methodically.
            </p>
          </div>

          <div className="relative pt-6 text-center md:text-left">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-1/4 border-t-2 border-[var(--karas_aubergine)]"></div>
            <p className="uppercase tracking-widest text-sm">
              Treatment plans are documented.
            </p>
          </div>

          <div className="relative pt-6 text-center md:text-left">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-1/4 border-t-2 border-[var(--karas_aubergine)]"></div>
            <p className="uppercase tracking-widest text-sm">
              Outcomes are reviewed over time.
            </p>
          </div>
        </div>
        <LocationPurpose
          title={
            <>
              For Owners <br /> Seeking Depth
            </>
          }
          description="This branch serves individuals who prioritize clinical excellence. If that reflects your approach, schedule your visit."
          principles={principles}
        />
        <div className="max-w-7xl mx-auto my-36 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 w-full max-w-lg mx-auto md:max-w-full px-4">
            <img
              src={img1}
              className="relative w-full h-auto rounded-xl shadow-xl sm:shadow-2xl"
              alt="PCR Testing Diagnostic"
            />
          </div>
          <div className="flex-1 text-center md:text-left px-2">
            <h3 className="text-base lg:text-2xl font-serif italic text-[var(--karas_aubergine)] leading-relaxed max-w-xl mb-6  mx-auto md:mx-0">
              Advanced care for a long standing community.
            </h3>{" "}
            <div className="w-16 h-[2px] bg-[#2D1B33] mb-8 mx-auto md:mx-0"></div>
            <p className="text-base text-gray-600/90 sm:text-lg font-serif italic  leading-relaxed max-w-xl mb-10  mx-auto md:mx-0">
              Karas JLT was built to serve a community that values continuity,
              trust, and proper medical decision making.
            </p>
            <p className="text-base text-gray-600/90 sm:text-lg font-serif italic  leading-relaxed max-w-xl mb-10  mx-auto md:mx-0">
              We focus on long term relationships, not one time visits.
            </p>
            <p className="text-base text-gray-600/90 sm:text-lg font-serif italic  leading-relaxed max-w-xl mb-10  mx-auto md:mx-0">
              Our JLT clinic provides structured care for pets at every life
              stage, from preventive health to advanced surgical and orthopedic
              cases.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-36 mx-2  grid grid-cols-1 lg:grid-cols-2">
          {/* الجزء الشمال: كاردات المواضيع */}
          <div className="p-8 lg:p-12 bg-[#ffffff] order-2 lg:order-1">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl font-bold  text-[var(--karas_aubergine)] tracking-tight mb-2 ">
                Karas Vet JLT
              </h2>
              <div className="w-16 h-[2px] bg-[#2D1B33] mb-8 mx-auto lg:mx-0"></div>
            </div>

            <div className="flex flex-col gap-6">
              {/* كارد العنوان */}
              <div className="bg-white p-6 rounded-xl  border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 border-b-4 lg:border-b-0 lg:border-r-4 !border-[var(--karas_aubergine)] text-center lg:text-left">
                <div className="flex-shrink-0 w-14 h-14 bg-[var(--karas_aubergine)] flex items-center justify-center rounded-xl shadow-lg shadow-purple-100">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-1">
                    Location
                  </h4>
                  <p className="text-base font-bold text-[var(--karas_aubergine)] leading-relaxed">
                    Cluster X, Jumeirah Lakes Towers, Dubai, UAE{" "}
                    <br className="hidden lg:block" /> Near JLT Metro Station
                  </p>
                </div>
              </div>

              {/* كارد ساعات العمل */}
              <div className="bg-white p-6 rounded-xl   shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 border-b-4 lg:border-b-0 lg:border-l-4 border-[var(--karas_aubergine)] text-center lg:text-left">
                <div className="flex-shrink-0 w-14 h-14 bg-[var(--karas_aubergine)] flex items-center justify-center rounded-xl shadow-lg shadow-purple-100">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-base font-bold text-[var(--karas_aubergine)]">
                    Monday - Saturday: 8 AM - 9 PM <br />
                    Sunday: 9 AM - 9 PM
                    <span className="text-xs font-normal text-gray-500 block mt-1">
                      (Including weekends and public holidays)
                    </span>
                  </p>
                </div>
              </div>

              {/* كارد التواصل */}
              <div className="bg-white p-6 rounded-xl   shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 border-b-4 lg:border-b-0 lg:border-r-4 border-[var(--karas_aubergine)] text-center lg:text-left">
                <div className="flex-shrink-0 w-14 h-14 bg-[var(--karas_aubergine)] flex items-center justify-center rounded-xl shadow-lg shadow-purple-100">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-1">
                    Contact Details
                  </h4>
                  <div className="flex flex-col xl:flex-row sm:justify-center lg:justify-start items-center lg:items-start gap-1 sm:gap-0 text-base font-bold text-[var(--karas_aubergine)]">
                    <a
                      href="https://wa.me/971585830217"
                      className="hover:underline"
                    >
                      +971 58 583 0217{" "}
                    </a>
                    <span className="hidden xl:block mx-2 text-gray-300">
                      |
                    </span>
                    <a
                      href="mailto:care.downtown@karasvet.com"
                      className="hover:underline"
                    >
                      care.downtown@karasvet.com{" "}
                    </a>
                  </div>
                </div>
              </div>

              {/* كارد ركن السيارات */}
              <div className="bg-white p-6 rounded-xl   shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 border-b-4 lg:border-b-0 lg:border-l-4 border-[var(--karas_aubergine)] text-center lg:text-left">
                <div className="flex-shrink-0 w-14 h-14 bg-[var(--karas_aubergine)] flex items-center justify-center rounded-xl shadow-lg shadow-purple-100">
                  <span className="text-white font-black text-xl">P</span>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-1">
                    Parking Info
                  </h4>
                  <p className="text-base font-bold text-[var(--karas_aubergine)]">
                    Free Dedicated Parking Available
                  </p>
                  <p className="text-sm text-gray-500 mt-1 max-w-xs mx-auto lg:mx-0">
                    If no RTA parking bay is available, kindly call us and our
                    team will guide you.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/971557217848"
              className="w-full cursor-pointer bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] mt-8 text-white font-bold py-4 rounded-xl transition-all transform  flex items-center justify-center gap-3 shadow-xl"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03a11.811 11.811 0 001.592 5.96L0 24l6.117-1.605a11.782 11.782 0 005.925 1.598h.005c6.635 0 12.032-5.396 12.035-12.03a11.82 11.82 0 00-3.417-8.455z" />
              </svg>
              Send Message
            </a>
          </div>

          {/* الجزء اليمين: الخريطة ثابتة */}
          <div className="w-full h-[400px] lg:h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-500 order-1 lg:order-2">
            <iframe
              title="Karas Vet Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6420767904756!2d55.1533619!3d25.080117700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d92534676a3%3A0xf95cba14b85fdf6c!2sKaras%20Veterinary%20Clinic!5e0!3m2!1sar!2seg!4v1771877275192!5m2!1sar!2seg"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
      <AppointmentSection />
    </div>
  );
}
export default KarasJLT;
