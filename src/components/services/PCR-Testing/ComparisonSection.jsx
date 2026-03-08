import { CheckCircle } from "lucide-react";

const FeatureCard = ({ title, features }) => {
  return (
    <div className="flex-1 bg-white rounded-2xl p-8 justify-between items-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ">
      <h3 className="text-xl sm:text-3xl font-bold text-[var(--karas_aubergine)] mb-6">
        {title}
      </h3>

      <ul className="space-y-6">
        {features.map((item, index) => (
          <li key={index} className="sm:ml-6 flex items-center gap-4">
            <div className="mt-1 flex-shrink-0">
              <CheckCircle
                className="text-[var(--karas_aubergine)]"
                size={16}
              />
            </div>
            <span className="text-[var(--karas_text)]  font-medium leading-tight">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ComparisonSection = () => {
  const card1Features = [
    "Early and accurate detection",
    "Differentiation between vaccine interference and infection",
    "Quantitative assessment of viral load",
    "Faster, targeted treatment decisions",
  ];

  const card2Features = [
    "Persistent or unclear symptoms",
    "Negative rapid tests with ongoing clinical signs",
    "Monitoring treatment response",
    "High-risk or immunocompromised patients",
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
        <FeatureCard title="Why we use it" features={card1Features} />

        <FeatureCard title="When it's recommended" features={card2Features} />
      </div>
    </div>
  );
};

export default ComparisonSection;
