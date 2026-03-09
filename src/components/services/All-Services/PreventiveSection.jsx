import { ArrowRight } from "lucide-react";
import img1 from "/src/assets/images/services/services1.PNG";
import img2 from "/src/assets/images/services/services2.PNG";
import img3 from "/src/assets/images/services/services3.PNG";
import img4 from "/src/assets/images/services/services4.PNG";
import img5 from "/src/assets/images/services/services5.PNG";
import img6 from "/src/assets/images/services/services6.PNG";
import img7 from "/src/assets/images/services/services7.PNG";

import { Link } from "react-router-dom";

const PreventiveCard = ({
  id,
  image,
  title,
  subTitle,
  description,
  isReversed,
  branch,
}) => {
  return (
    <div
      className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 mb-8`}
    >
      <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          alt={title}
        />
      </div>

      <div className="w-full md:w-3/5 p-8 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[var(--karas_aubergine)]"></span>
            <span className="text-[var(--karas_aubergine)] font-bold text-[10px] tracking-widest uppercase">
              {branch}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold text-[var(--karas_aubergine)] leading-tight">
            {title}
          </h2>

          <div className=" py-1 mt-4">
            <p className="text-sm text-[var(--karas_aubergine)] font-bold italic">
              {subTitle ||
                "Routine assessments, vaccinations, and health planning tailored to your pet."}
            </p>
          </div>

          <div className="border-l-2 pl-4 border-[var(--karas_aubergine)] text-[var(--karas_text)] text-sm leading-relaxed">
            <p className="whitespace-pre-line">{description}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mt-8">
          <a
            href="https://karas.viggo.vet/online-booking/"
            className="cursor-pointer flex items-center group justify-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white px-8 py-3 rounded-lg text-sm font-bold transition-all shadow-lg shadow-[#39164f]/20"
          >
            Request Appointment
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          {id === 2 && (
            <Link
              to="/pcr-testing"
              className="cursor-pointer flex items-center justify-center gap-2 border border-[var(--karas_aubergine)] text-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine)] hover:text-white px-8 py-3 rounded-lg text-sm font-bold transition-all shadow-lg shadow-[#39164f]/5"
            >
              PCR Testing
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const PreventiveSection = () => {
  const cardsData = [
    {
      id: 1,
      image: img1,
      branch: "Karas JLT & Business Bay",
      title: "Preventive care",
      subTitle:
        "Routine assessments, vaccinations, and health planning tailored to your pet.",
      description: `Preventive care is not about ticking boxes.
                        It is about understanding risk before it becomes disease.
                        Routine assessments allow us to detect subtle changes early,
                        when intervention is simpler and outcomes are better.
                        We tailor preventive plans to age, lifestyle, and individual health factors.
                        There are no generic protocols here.
                        Preventive care protects both health and peace of mind.
                    `,
    },
    {
      id: 2,
      image: img2,
      branch: "Karas JLT & Business Bay",
      title: "Diagnostics and imaging",
      subTitle:
        "Laboratory testing and imaging used to inform decisions, not guess.",
      description: `Diagnostics exist to provide clarity.
When symptoms are unclear or decisions require confirmation,
we use laboratory testing and imaging to understand what is truly happening.
We do not test without purpose.
Every investigation is selected to answer a specific clinical question.
Results are reviewed carefully and explained clearly,
before any next steps are considered.`,
    },
    {
      id: 3,
      image: img3,
      branch: "Karas JLT & Business Bay",
      title: "Dental care",
      subTitle: "Oral health management as part of overall wellbeing.",
      description: `Dental disease often progresses silently.
By the time pain is obvious, damage is usually advanced.
Dental care protects more than teeth.
It supports heart health, kidney function, and overall comfort.
We begin with careful assessment.
Treatment is recommended only when it is clinically justified.
Oral health is part of whole body care.`,
    },
    {
      id: 4,
      image: img4,
      branch: "Karas JLT & Business Bay",
      title: "Surgical care",
      subTitle:
        "Planned, precise intervention when medical management is insufficient.",
      description: `Surgery is never approached lightly.
When intervention is required,
it is planned with precision and purpose.
Preparation, anesthesia management, and recovery receive the same attention as the procedure itself.
We prioritize safety, comfort, and long term outcome.
`,
    },
    {
      id: 5,
      image: img5,
      branch: "Karas JLT & Business Bay",
      title: "Orthopedic care",
      subTitle:
        "Specialized assessment and treatment of musculoskeletal conditions.",
      description: `Mobility is essential to quality of life.
                        Orthopedic conditions require careful assessment, not assumptions.
                        Our orthopedic care focuses on accurate diagnosis, appropriate intervention, and long term function.
                        Each case is evaluated individually.
                        There are no shortcuts.
                    `,
    },
    {
      id: 6,
      image: img6,
      branch: "Karas JLT & Business Bay",
      title: "Mobility, Pain, and Senior Care",
      subTitle: "Supporting comfort, mobility, and quality of life over time.",
      description: `Comfort matters at every stage of life.
                        Pain management is not about masking symptoms.
                        It is about improving function, mobility, and wellbeing.
                        Senior care focuses on dignity, comfort, and thoughtful support as needs evolve over time.
                        Care plans are reviewed regularly and adjusted deliberately
                    `,
    },
    {
      id: 7,
      image: img7,
      branch: "Karas Business Bay only",
      title: "Grooming & Coat Care",
      subTitle: "Supporting comfort, mobility, and quality of life over time.",
      description: `Only in Business Bay
Grooming is delivered within a clinical setting.
Skin condition, coat integrity, and medical context are reviewed before each session.
Findings that require attention are addressed within the same care framework.
This service operates under veterinary oversight.
                    `,
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-serif text-[#2D1B33] mb-6 leading-tight">
          Domains of Care
        </h2>
        <div className="w-16 h-[2px] bg-[#2D1B33] mb-8"></div>

        <div className="flex flex-col gap-6">
          {cardsData.map((card, index) => (
            <PreventiveCard
              key={card.id}
              id={card.id}
              image={card.image}
              branch={card.branch}
              title={card.title}
              subTitle={card.subTitle}
              description={card.description}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreventiveSection;
