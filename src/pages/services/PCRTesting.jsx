import img from "../../assets/images/2BC11EA7-18F0-4569-9E47-9BE2A7F6ABC0.PNG";
import PagesHeader from "../../components/PagesHeader";
import ComparisonSection from "../../components/services/PCR-Testing/ComparisonSection";
import DiagnosticSection from "../../components/services/PCR-Testing/DiagnosticSection";
import TestingJourney from "../../components/services/PCR-Testing/TestingJourney";

function PCRTesting() {
  return (
    <div className="bg-[var(--karas_paper)] overflow-x-hidden relative py-10 px-4 sm:px-12">
      <PagesHeader
        title="PCR Testing"
        description="When accuracy allows for better medical decisions."
      />
      <main className="max-w-7xl mx-auto space-y-32 md:space-y-48">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 text-center md:text-left order-2 md:order-1 px-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2D1B33] mb-6 leading-tight break-words">
              What is PCR Testing?
            </h2>

            <div className="w-16 h-[2px] bg-[#2D1B33] mb-8 mx-auto md:mx-0"></div>

            <p className="text-base text-gray-600/90 sm:text-lg font-serif italic text-[#2D1B33] leading-relaxed max-w-xl mb-10 opacity-90 mx-auto md:mx-0">
              PCR is one of the most accurate tools available for diagnosing
              infectious diseases. It allows us to detect pathogens at very
              early stages, often before antibodies are present, enabling faster
              and more targeted treatment.
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

        <div className="space-y-32 md:space-y-48 pb-20">
          <TestingJourney />
          <ComparisonSection />
          <DiagnosticSection />
        </div>
      </main>
    </div>
  );
}

export default PCRTesting;
