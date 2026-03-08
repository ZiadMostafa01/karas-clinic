import { Link } from "react-router-dom";
import shape from "/src/assets/images/shape-services-768x560.WEBP";

function Landing() {
  return (
    <section className="relative py-24 flex items-center justify-center bg-[var(--karas_paper)] px-4">
      <div className="absolute top-0 right-0">
        <img src={shape} alt="" className="ml-auto w-[600px] max-w-full" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img
          src={shape}
          alt=""
          className="mr-auto w-[600px] max-w-full rotate-180"
        />
      </div>
      <div className="max-w-3xl text-center pt-[79.05px]">
        <span className="inline-block mb-6 rounded-full bg-purple-100 px-4 py-1 text-xs font-semibold tracking-widest text-[var(--karas_aubergine)]">
          VETERINARY EXCELLENCE
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-gray-900 leading-tight">
          This is how we
          <span className="text-5xl sm:text-6xl md:text-9xl font-heading block text-[var(--karas_aubergine)] italic">
            care{" "}
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          Calm, deliberate veterinary medicine for people who take
          responsibility seriously.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://karas.viggo.vet/online-booking/"
            target="_blank"
            className="cursor-pointer rounded-lg px-8 py-3 text-sm font-semibold text-white transition bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)]"
          >
            Request an appointment
          </a>

          <Link
            to="/all-services"
            className="cursor-pointer rounded-lg border border-[var(--karas_aubergine)] px-8 py-3 text-sm font-semibold text-[var(--karas_aubergine)] transition  hover:bg-[var(--karas_aubergine)]/10"
          >
            See our standard
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Landing;
