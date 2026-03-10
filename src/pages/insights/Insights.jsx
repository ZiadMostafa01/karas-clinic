import React, { useState, useEffect } from "react";
import logo from "@/assets/images/Logo_main.png";
import PagesHeader from "../../components/PagesHeader";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { API_BASE_URL } from "../../config/api"; // تأكد من المسار الصحيح للـ config

const Insights = () => {
  const [insightsData, setInsightsData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);

  // جلب البيانات من الـ API
  const fetchInsights = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/Insights`);
      const data = await res.json();
      // ترتيب البيانات بحيث الأحدث يظهر الأول (اختياري)
      setInsightsData(data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch insights:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  // وظيفة لتنسيق التاريخ
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const currentInsights = insightsData.slice(0, visibleCount);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--karas_paper)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--karas_aubergine)]"></div>
      </div>
    );
  }

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
                src={
                  item.imageUrl
                    ? `${API_BASE_URL}${item.imageUrl}`
                    : "https://via.placeholder.com/800x600?text=No+Image"
                }
                alt={item.title}
                className="w-full h-full object-cover md:absolute md:inset-0"
              />
            </div>

            <div className="p-8 md:p-12 md:w-[60%] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold text-[#39164f] uppercase tracking-[0.2em] bg-[#39164f]/5 px-4 py-1.5 rounded-md">
                    {item.type || "General"}
                  </span>
                  <span className="text-[12px] text-gray-400 font-medium">
                    {formatDate(item.date)}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#2a0f3b] mb-5 leading-tight">
                  {item.title}
                </h2>

                <p className="text-[#555] text-[17px] leading-[1.8] mb-8 italic line-clamp-3">
                  "{item.description}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-50 flex flex-col sm:flex-row gap-4 items-center justify-between mt-auto">
                <span className="font-bold text-[var(--karas_aubergine)]">
                  Karas Veterinary Clinic
                </span>
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

        {insightsData.length === 0 && (
          <div className="text-center py-20 text-gray-400 italic">
            No insights available at the moment.
          </div>
        )}
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
