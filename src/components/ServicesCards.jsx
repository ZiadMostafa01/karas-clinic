function ServicesCards({ title, subtitle, data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-[var(--karas_paper)] py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto mb-16 space-y-4">
        <h1 className="text-3xl md:text-5xl font-serif italic text-[var(--karas_aubergine)]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[var(--karas_text)] opacity-80 md:text-xl font-light italic">
            {subtitle}
          </p>
        )}
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {data.map((service, index) => (
          <div
            key={index}
            className="group bg-white p-10 rounded-sm border border-[#e5e1d8] shadow-sm flex flex-col items-center w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-[250px] transition-all duration-500 hover:shadow-md hover:-translate-y-1"
          >
            <div className="w-8 h-[1px] bg-[var(--karas_aubergine)] mb-6 opacity-40 group-hover:w-16 transition-all duration-500"></div>
            
            <h2 className="text-xl font-serif italic text-[var(--karas_aubergine)] mb-4 text-center">
              {service.title}
            </h2>
            
            <p className="text-[var(--karas_text)] text-sm leading-relaxed text-center font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCards;