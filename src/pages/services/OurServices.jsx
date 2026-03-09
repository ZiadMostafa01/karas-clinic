import img from "@/assets/images/services-image.PNG";
import PagesHeader from "../../components/PagesHeader";
import PreventiveSection from "../../components/services/All-Services/PreventiveSection";
function OurServices() {
  return (
    <div className="bg-[var(--karas_paper)] overflow-hidden relative py-10 px-6 sm:px-12">
      <PagesHeader
        title="How We Practice"
        description="Discover the range of veterinary services we offer at Karas Vet
          Clinic!"
      />
      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#2D1B33] leading-snug max-w-xl mb-10 opacity-90">
              "Veterinary care built around judgment, not volume."
            </p>

            <div className="flex flex-col gap-4 w-full mx-auto md:mx-0 text-[var(--karas_aubergine)]">
              {[
                {
                  title: "Assess",
                  desc: "We evaluate the full clinical picture, physical examination, history, environment, and risk factors before forming conclusions.",
                },
                {
                  title: "Clarify",
                  desc: "Diagnostics are selected when they resolve uncertainty or influence treatment direction.",
                },
                {
                  title: "Plan",
                  desc: "Options are structured around measurable benefit, foreseeable risk, and long-term impact.",
                },
                {
                  title: "Act",
                  desc: "When intervention is indicated, it is proportionate, documented, and followed through.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-baseline items-center text-center md:text-left gap-2"
                >
                  <span className="font-bold border-b-2 border-[var(--karas_aubergine)] whitespace-nowrap">
                    {item.title}:
                  </span>
                  <span className="text-sm text-[var(--karas_text)] max-w-md md:max-w-none">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 w-full max-w-md md:max-w-full">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#2D1B33]/5 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <img
                src={img}
                className="relative w-full h-auto rounded-xl shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
                alt="Our Professional Vet Service"
              />
            </div>
          </div>
        </div>

        <PreventiveSection />
      </main>
    </div>
  );
}
export default OurServices;
