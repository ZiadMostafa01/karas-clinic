import React, { useState } from "react";
import logo from "/src/assets/images/logo_main.png";
import PagesHeader from "../../components/PagesHeader";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const insightsData = [
  {
    id: 1,
    title: "Winter Nutrition Guide",
    content:
      "During colder months, pets often burn more energy to maintain their body temperature. We recommend increasing their protein intake by 10% and ensuring their water is always at room temperature. Avoid overfeeding, as indoor pets might be less active. Stick to high-quality fats like Omega-3 to keep their coat thick and healthy against the dry winter air.",
    date: "March 5, 2026",
    category: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Understanding Pet Body Language",
    content:
      "A wagging tail doesn't always mean a happy dog. If the tail is stiff and moving slowly, it might indicate tension. Similarly, for cats, flattened ears are a clear sign of stress or fear. Recognizing these silent signals early helps prevent anxiety-driven behavior and strengthens the bond between you and your pet. Always approach a tensed pet from the side, never head-on.",
    date: "March 1, 2026",
    category: "Behavior",
    image:
      "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Hydration Hacks for Cats",
    content:
      "Many cats are prone to kidney issues because they don't drink enough water. To encourage hydration, try using a water fountain instead of a still bowl; cats prefer running water. You can also add a tablespoon of warm water to their wet food. Keep the water bowl away from their litter box, as cats are naturally inclined to keep their 'kill' and 'drink' areas separate for hygiene.",
    date: "February 20, 2026",
    category: "Health Tips",
    image:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Puppy Socialization Basics",
    content:
      "The first 16 weeks are crucial for a puppy's social development. Safely introduce them to different sounds, surfaces, and friendly people. This prevents future fear-based aggression.",
    date: "February 15, 2026",
    category: "Training",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Dental Care for Seniors",
    content:
      "Older pets often suffer from gum disease. Daily brushing and dental chews can add years to their life by preventing bacteria from entering the bloodstream.",
    date: "February 10, 2026",
    category: "Health Tips",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "The Benefits of Routine",
    content:
      "Pets crave predictability. Feeding and walking your dog at the same time every day reduces cortisol levels and helps with anxiety issues.",
    date: "February 5, 2026",
    category: "Behavior",
    image:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800",
  },
];

const Insights = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const currentInsights = insightsData.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[var(--karas_paper)] py-10 px-6 md:px-12 font-sans">
      <PagesHeader
        title="Karas Insights"
        description="Weekly tips and professional advice for your furry friends."
      />

      <div className="max-w-7xl mx-auto space-y-12">
        {currentInsights.map((item, index) => (
          <article
            key={item.id}
            className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-[#39164f]/5 flex flex-col md:min-h-[400px] transition-all duration-500 hover:shadow-md ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="w-full h-64 md:h-auto md:w-[40%] relative overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 md:absolute md:inset-0"
              />
            </div>

            <div className="p-8 md:p-12 md:w-[60%] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold text-[#39164f] uppercase tracking-[0.2em] bg-[#39164f]/5 px-4 py-1.5 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-[12px] text-gray-400 font-medium">
                    {item.date}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#2a0f3b] mb-5 leading-tight">
                  {item.title}
                </h2>

                <p className="text-[#555] text-[17px] leading-[1.8] mb-8 italic line-clamp-3">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-50 flex flex-col sm:flex-row gap-4 items-center justify-between mt-auto">
                <img
                  src={logo}
                  className="w-32 md:w-36 object-contain hidden sm:block"
                  alt="Karas Logo"
                />
                <Link
                  to={`/insights/${item.id}`}
                  className="cursor-pointer flex items-center group justify-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white px-8 py-3 rounded-lg text-sm font-bold transition-all shadow-lg shadow-[#39164f]/20"
                >
                  Read Article
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {visibleCount < insightsData.length && (
        <div className="mt-16 text-center">
          <button
            onClick={handleShowMore}
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-[#39164f] rounded-lg hover:bg-[#2a0f3b] shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Show More Insights</span>
            <svg
              className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}

      <footer className="mt-24 text-center pb-10">
        <p className="text-[#39164f]/40 text-sm font-medium">
          New insights every week • Stay tuned
        </p>
      </footer>
    </div>
  );
};

export default Insights;
