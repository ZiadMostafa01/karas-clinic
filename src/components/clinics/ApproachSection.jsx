const ApproachSection = () => {
  const steps = [
    {
      number: "01",
      text: "We listen before acting",
    },
    {
      number: "02",
      text: "We assess thoroughly",
    },
    {
      number: "03",
      text: "We explain options clearly",
    },
    {
      number: "04",
      text: "We proceed deliberately",
    },
  ];

  return (
    <section className="pb-10 pt-26 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-serif text-[#2D1B33] mb-20">
          How We Approach Care
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <span className="text-7xl md:text-8xl font-heading font-bold text-[var(--karas_aubergine)]/20 leading-none select-none">
                {step.number}
              </span>
              
              <p className=" mt-4 text-lg md:text-xl font-serif text-[#2D1B33] w-full px-4 leading-snug">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;