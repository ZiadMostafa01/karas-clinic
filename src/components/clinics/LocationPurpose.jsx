function LocationPurpose({ title, description, principles = [] }) {
  return (
    <section className="bg-[var(--karas_aubergine)] text-[#e5e1d8] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif italic leading-tight border-b border-[#e5e1d8]/20 pb-8">
            {title}
          </h2>
          <p className="text-lg font-light opacity-80 leading-relaxed max-w-md">
            {description}
          </p>

          <div className="pt-4">
            <a
              href="https://karas.viggo.vet/online-booking/"
              className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.3em] hover:text-white transition-all"
            >
              Request an appointment
              <span className="w-8 h-[1px] bg-[#e5e1d8] group-hover:w-16 transition-all duration-500"></span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 px-6">
            {principles.map((item, index) => (
              <div key={index} className="relative group">
                <span className="absolute -left-6 -top-4 text-6xl font-serif italic opacity-5 text-white group-hover:opacity-10 transition-opacity">
                  {item.label}
                </span>
                <div className="relative">
                  <h3 className="text-xl font-serif italic mb-4  pl-4  transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light opacity-70 leading-relaxed pl-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationPurpose;
