import React from "react";
import { useParams, Link } from "react-router-dom";
import logo from "../../assets/images/logo_main.png";

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

const InsightDetails = () => {
  const { id } = useParams();

  const article = insightsData.find((item) => item.id === parseInt(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center font-serif text-[#2D1B33]">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Article Not Found</h2>
          <Link to="/insights" className="text-[#39164f] underline font-bold">
            Return to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--karas_paper)] pt-[79.05px]">
      <main className="max-w-7xl mx-auto pt-16 pb-24 px-6 md:px-12">
        <Link
          to="/insights"
          className="inline-flex items-center text-[11px] font-bold text-[#39164f] uppercase tracking-[0.3em] mb-12 hover:opacity-60 transition-all"
        >
          ← Back to Insights
        </Link>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <span className="inline-block text-[10px] font-bold text-[#39164f] uppercase tracking-[0.2em] bg-[#39164f]/5 px-4 py-2 rounded-lg mb-6">
              {article.category}
            </span>
            <span className="text-[12px] text-gray-400 font-medium ml-3">
              {article.date}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#2D1B33] mb-6 leading-tight break-words">
              {article.title}
            </h1>

            <div className="w-16 h-[2px] bg-[#2D1B33] mb-8 mx-auto md:mx-0"></div>

            <p className="text-base text-gray-600/90 sm:text-lg font-serif italic text-[#2D1B33] leading-relaxed max-w-xl mb-10 opacity-90 mx-auto md:mx-0">
              {article.content}
            </p>

            <div className="flex items-center justify-between md:justify-start gap-2 sm:gap-4 text-[9px] min-[400px]:text-[11px] tracking-[0.2em] font-bold text-[#39164f] uppercase w-full max-w-md mx-auto md:mx-0">
              <span>Assess</span>
              <div className="flex-1 md:flex-none md:w-10 bg-[#39164f] h-[1px] opacity-30"></div>

              <span>Clarify</span>
              <div className="flex-1 md:flex-none md:w-10 bg-[#39164f] h-[1px] opacity-30"></div>

              <span>Plan</span>
              <div className="flex-1 md:flex-none md:w-10 bg-[#39164f] h-[1px] opacity-30"></div>

              <span>Act</span>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 w-full max-w-lg mx-auto md:max-w-full px-4">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-[#2D1B33]/5 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>

              <img
                src={article.image}
                className="relative w-full h-auto rounded-xl shadow-xl sm:shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01]"
                alt="PCR Testing Diagnostic"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InsightDetails;
