import hero from "../../assets/images/510D8482-A15C-4A2A-9DEC-3FA38D09D8ED.png";

function AppointmentSection() {
  return (
    <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
      <img
        src={hero}
        alt="vet"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#3d2b57]/70" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-heading text-white mb-4 leading-tight">
          If this approach resonates with you
        </h1>

        <a
          href="https://karas.viggo.vet/online-booking/"
          target="_blank"
          className="inline-flex items-center justify-center rounded-lg bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] px-8 py-3 text-white font-semibold tracking-wide transition  shadow-lg"
        >
          Request an appointment
        </a>
      </div>
    </section>
  );
}

export default AppointmentSection;
