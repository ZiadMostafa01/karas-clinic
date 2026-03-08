import { Activity, Microscope, Dna, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Sample Collection',
    description: 'Non-invasive swab or fluid collection.',
    icon: <Activity className="w-10 h-10 text-[var(--karas_aubergine)] stroke-[1.5]" />,
  },
  {
    id: '02',
    title: 'Lab Logistics',
    description: 'Rapid transport to our certified molecular labs.',
    icon: <Microscope className="w-10 h-10 text-[var(--karas_aubergine)] stroke-[1.5]" />,
  },
  {
    id: '03',
    title: 'PCR Amplification',
    description: 'Automated analysis using thermal cyclers.',
    icon: <Dna className="w-10 h-10 text-[var(--karas_aubergine)] stroke-[1.5]" />,
  },
  {
    id: '04',
    title: 'Result Verification',
    description: 'Final review by our clinical specialists.',
    icon: <ShieldCheck className="w-10 h-10 text-[var(--karas_aubergine)] stroke-[1.5]" />,
  },
];

const TestingJourney = () => {
  return (
    <section className="px-4 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-20 font-serif">
        <h2 className="text-2xl md:text-4xl font-bold text-[var(--karas_aubergine)] mb-4">
          The Testing Journey
        </h2>
        <p className="text-slate-500 text-sm sm:text-lg">
          From collection to confirmation, every step is optimized for clinical
          precision and speed.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white border-2 border-[var(--karas_aubergine)] flex items-center justify-center relative shadow-sm">
                  {step.icon}
                  <div className="absolute -bottom-2 -right-2 font-serif bg-[var(--karas_aubergine)] text-white text-[10px] font-bold px-1.5 py-0.5 leading-tight">
                    {step.id}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[var(--karas_aubergine)] mb-2">
                {step.title}
              </h3>
              <p className="text-[var(--karas_text)] text-sm leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestingJourney;
