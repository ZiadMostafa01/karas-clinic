import img1 from "../../assets/images/61B62C43-EDFF-406C-B6CA-20940299BB03.png";

const servicesLeft = [
  "We do not practice reactive medicine.",
  "We do not treat symptoms in isolation.",
  "We do not escalate without evidence",
  "We assess.",
];

const servicesRight = [
  "We explain.",
  "We intervene when outcome demands it.",
  "Care without urgency theatre.",
  "Decisions without pressure.",
];

export default function PetCareSection() {
  return (
    <section className="w-full bg-[var(--karas_paper)] py-20 px-4 space-y-16">
      <div className="text-center">
        {" "}
        <h1 className="font-heading text-3xl md:text-5xl font-serif text-[var(--karas_aubergine)] mb-2">
          Deliberate care, grounded in judgment.
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden h-full">
          <img
            src={img1}
            alt="Vet with dog"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-2 bg-[var(--karas_aubergine)] text-white px-3 py-2 rounded-lg text-xs sm:text-sm mb-4">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--karas_aubergine)] leading-tight mb-6">
            We love animals as much as you do!
          </h2>

          <div className="border-b-2 border-dashed border-gray-300 mb-6"></div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            At Karas Veterinary clinic, In addition to wellness exams, we offer
            a variety of medical services designed to reduce and manage any pain
            your pet may be experiencing.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              {servicesLeft.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="font-medium text-[var(--primary1)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {servicesRight.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="font-medium text-[var(--primary1)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
