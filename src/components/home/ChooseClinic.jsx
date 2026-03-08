import img1 from "/src/assets/images/jlt-clinic.jpeg";
import img2 from "/src/assets/images/business-bay-clinic.jpeg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ChooseClinic() {
  return (
    <div className="bg-[var(--karas_paper)] py-20 px-4 ">
      <div className="font-heading text-center mb-16">
        {" "}
        <h1 className="text-3xl md:text-5xl font-serif text-[var(--karas_aubergine)] mb-2">
          Two locations, one standard of care.
        </h1>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col h-full rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
          <img
            src={img1}
            alt="JLT Clinic"
            className="w-full object-cover h-64 md:h-72"
          />
          <div className="bg-white p-6 border-t border-gray-200 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[var(--karas_aubergine)] mb-2">
                Karas Veterinary Clinic – JLT
              </h2>
              <p className="text-[var(--karas_text)] mb-4">
                Established care for long term community oversight.
              </p>
            </div>

            <Link
              to="/clinics/karas-JLT"
              className="cursor-pointer mt-4 flex items-center group justify-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white px-8 py-3 rounded-lg text-sm transition-all shadow-lg shadow-[#39164f]/20 uppercase"
            >
              Visit JLT Cinic{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col h-full rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
          <img
            src={img2}
            alt="Business Bay Clinic"
            className="w-full object-cover h-64 md:h-72"
          />
          <div className="bg-white p-6 border-t border-gray-200 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[var(--karas_aubergine)] mb-2">
                Karas Veterinary Clinic – Business Bay
              </h2>
              <p className="text-[var(--karas_text)] mb-4">
                Structured care for structured lives.
              </p>
            </div>
            <Link
              to="/clinics/karas-downtown"
              className="cursor-pointer mt-4 flex items-center group justify-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white px-8 py-3 rounded-lg text-sm transition-all shadow-lg shadow-[#39164f]/20 uppercase"
            >
              Visit Business Bay{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseClinic;
