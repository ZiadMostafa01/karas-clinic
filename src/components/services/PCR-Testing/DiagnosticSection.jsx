import React from 'react';
import { Calendar, Info, } from 'lucide-react'; 

const DiagnosticSection = () => {
  return (
    <section className="mb-10 flex justify-center items-center font-sans">
      <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="">
          <h2 className="font-serif text-[var(--karas_aubergine)] text-3xl md:text-4xl font-bold mb-4">
            Our Diagnostic Standards
          </h2>
          <p className="text-lg text-[var(--karas_text)] mb-8 leading-relaxed max-w-md">
            PCR testing at Karas is performed using validated, real-time
            systems. Results are always interpreted in clinical context and
            explained clearly.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href='https://karas.viggo.vet/online-booking/' className="cursor-pointer flex items-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg">
              <Calendar size={18} />
              Schedule Testing
            </a>
         
          </div>
        </div>
        <div className="">
          <div className="relative bg-purple-50 rounded-2xl p-8 md:p-12 shadow-2xl border-l-4 border-[var(--karas_aubergine)] overflow-hidden">
            <Info className="absolute -bottom-10 -right-10 w-48 h-48 text-[var(--karas_aubergine)]/10 rotate-12" />
            
            <div className="relative z-10">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md mb-6">
                <Info className="text-[var(--karas_aubergine)]" size={28} />
              </div>
              
              <blockquote className="text-[var(--karas_aubergine_ink)] text-xl md:text-2xl font-bold italic leading-snug mb-6">
                "Testing is never recommended without purpose. We test to treat."
              </blockquote>
              
              <div className="w-12 h-1 bg-[var(--karas_aubergine)]/40 mb-4"></div>
              
              <p className="text-[var(--karas_aubergine)] font-bold text-sm tracking-widest uppercase">
                Karas Clinical Excellence
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DiagnosticSection;