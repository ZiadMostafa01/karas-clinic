import { ArrowRight, CheckCircle } from "lucide-react";
import PagesHeader from "../../components/PagesHeader";

const plans = [
  {
    name: "ANNUAL VACCINE",
    price: 299,
    highlighted: false,
    description: "Extra Package Discounts",
    features: [
      "Consultation",
      "DHPPi vaccine (dog)",
      "PCH Vaccine (Cat)",
      "Rabies Vaccine",
      "Full Medical Exam",
      "Deworming",
      "Ear Check",
      "Dental check",
    ],
    discounts: [
      "25% Discount on Microchip",
      "25% Discount on Spay or Castration",
      "25% Discount on Blood Analysis",
    ],
  },
  {
    name: "INITIAL VACCINATION",
    price: 499,
    highlighted: true,
    description: "Nisi lacinia nullam consectetur non arcu platea sem",
    features: [
      "Consultation",
      "DHPPi Vaccine (dog - 3 times)",
      "PCH Vaccine (Cat - 3 times)",
      "Rabies Vaccine",
      "Full Medical Exam",
      "Deworming",
      "Ear Check",
      "Microchipping",
    ],
    discounts: [
      "25% Discount on Spay or Castration",
      "25% Discount on Blood Analysis",
      "25% Discount on Ultrasound",
    ],
  },
  {
    name: "WELLNESS",
    price: 1088,
    highlighted: false,
    description: "Comprehensive Health Check",
    features: [
      "Consultation",
      "CBC (Complete Blood Count)",
      "Chem 17 (General Health Profile)",
      "Blood Electrolytes",
      "SDMA / Cyst C",
      "Urinalysis",
      "Full Medical Exam",
    ],
    discounts: [
      "25% Discount on Microchip",
      "25% Discount on Municipality Registration",
      "25% Discount on Spay or Castration",
    ],
  },
  {
    name: "DENTAL",
    price: 850,
    highlighted: false,
    description: "Professional Dental Care",
    features: [
      "Full Medical Exam",
      "CBC (Complete Blood Count)",
      "Chem 10 (Essential chemistry)",
      "Blood Electrolytes",
      "Anesthesia / Sedation",
      "IV Cannula & Fluid Therapy",
      "Dental Scaling & Polish",
    ],
    discounts: [
      "Price varies by pet size",
      "Small Breed Dog: 1100 AED",
      "Medium Breed Dog: 1500 AED",
    ],
  },
];

const services = [
  {
    title: "PCR",
    description:
      "The most accurate diagnostic tool for veterinary viral diseases.",
    price: "From 335 AED ex VAT",
    extra: "More Info and Complete Pricelist",
  },
  {
    title: "CONSULTATION",
    description:
      "Our expert vets will carry out comprehensive medical exam for your pet and give you the right advise and ensure your pet's getting better and healthy.",
    price: "150 AED ex VAT",
  },
  {
    title: "VACCINATION",
    description:
      "Vaccination protects your pet against rabies, panleucopaenia, parvo, calici and other diseases, as well as remind you when it's time for a vaccine.",
    price: "Annual Vaccine OFFER",
    extra: "JLT Branch & Business Bay Branch",
  },
  {
    title: "DENTAL",
    description:
      "Teeth are the gate of your pet's body, we will make sure they are clean and polished and on top of it got full blood analysis included in our package.",
    price: "FROM 887 AED ex VAT",
    subPrice: "(Dental scaling + Blood Analysis + Sedation)",
  },
  {
    title: "NEUTERING",
    description:
      "Spay & Castration improves life expectancy by minimises risk of developing cancer. We are reputable of making it by an advanced technique, painless & speed recovery.",
    price: "CAT FROM 380 AED ex VAT",
    subPrice: "DOG FROM 750 AED ex VAT",
  },
  {
    title: "BLOOD ANALYSIS",
    description:
      "Blood testing is making sure your lovely pet is healthy and help finding diseases in early stage, our expert vets will give you complete guide through any blood test required.",
    price: "CBC 309 AED ex VAT",
    subPrice: "Blood chemistry from 252 AED ex VAT",
  },
  {
    title: "SPEED TESTS",
    description:
      "Speed tests plays significant role in detecting many infectious diseases and our specialist vets will guide you through most accurate speed tests might needed.",
    price: "FROM 125 AED ex VAT",
  },
];
export default function CarePlan() {
  return (
    <section className="bg-[var(--karas_paper)] py-10">
      <PagesHeader
        title="Care Plans"
        description="Comprehensive wellness solutions designed to give your furry friend a long, happy, and healthy life."
      />
      <div className="max-w-7xl mx-auto  rounded-3xl p-6 md:p-12">
        <h2 className="text-4xl sm:text-5xl font-serif text-[#2D1B33] mb-2 leading-tight">
          Choose your package
        </h2>
        <p className="text-sm max-w-4xl  text-gray-600 mb-2 leading-relaxed italic">
          An EXTRA Discount during Ramadan on the wellness packages, with a
          special offer of <br /> Buy NOW and USE LATER
        </p>
        <div className="w-16 h-[2px] bg-[#2D1B33] mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col h-full">
              <div
                className={`rounded-2xl p-6 text-center mb-6 min-h-[120px] flex flex-col justify-center ${
                  plan.highlighted
                    ? "bg-[#4b2c73] text-white"
                    : "bg-[#d9c8e8] text-[#4b2c73]"
                }`}
              >
                <h3 className="font-bold text-xl uppercase tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-xs opacity-80 mt-2 line-clamp-2">
                  {plan.description}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 flex flex-col flex-grow shadow-sm hover:shadow-md transition-shadow">
                {/* Price */}
                <div className="mb-6 text-center">
                  <h2 className="text-5xl font-extrabold text-[#f47c48]">
                    <span className="text-2xl mr-1 align-top text-[#4b2c73]">
                      AED
                    </span>
                    {plan.price}
                    <span className="text-base font-medium text-[#4b2c73]">
                      {" "}
                      /package
                    </span>
                  </h2>
                </div>{" "}
               
                <div className="mb-6 flex-grow">
                  <h4 className="font-bold text-[#4b2c73] mb-4 uppercase border-b border-gray-100 pb-2">
                    What's Included:
                  </h4>

                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600 text-sm leading-snug border-b border-dashed border-gray-100 pb-2 lg:border-none lg:pb-0"
                      >
                        <CheckCircle
                          size={14}
                          className="text-orange-500 shrink-0 mt-0.5"
                        />
                        <span className="line-clamp-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {plan.discounts && (
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-bold text-[#4b2c73] mb-2  uppercase italic">
                      Extra Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {plan.discounts.map((discount, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-500 font-medium leading-tight"
                        >
                          • {discount}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" max-w-7xl mx-auto p-6 md:p-12 min-h-screen">
        <h2 className="text-4xl sm:text-5xl font-serif text-[#2D1B33] mb-2 leading-tight">
          Our Prices
        </h2>
        <p className="text-sm max-w-4xl  text-gray-600 mb-2 leading-relaxed italic">
          We are pleased to offer affordable veterinary services with HIGH
          standards. So, your pet stays healthy with quality.
        </p>
        <div className="w-16 h-[2px] bg-[#2D1B33] mb-8"></div>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-50 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300 
                   w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <h3 className="text-[var(--karas_aubergine)] font-bold text-xl mb-4 tracking-wide uppercase">
                {service.title}
              </h3>

              <p className="text-[var(--karas_text)] text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="mt-auto">
                <span className="text-[var(--karas_aubergine)] font-bold text-sm block">
                  {service.price}
                </span>

                {service.subPrice && (
                  <span className="text-gray-500 text-xs block mt-1">
                    {service.subPrice}
                  </span>
                )}

                {service.extra && (
                  <span
                    className={`text-xs font-bold block mt-2 ${service.extraColor || "text-gray-700"}`}
                  >
                    {service.extra}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-2 flex justify-center">
        <a
          href="https://karas.viggo.vet/online-booking/"
          className=" md:w-auto min-w-[200px] flex items-center justify-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white py-4 px-12 rounded-lg font-bold transition-all group"
        >
          Choose Plan
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}
