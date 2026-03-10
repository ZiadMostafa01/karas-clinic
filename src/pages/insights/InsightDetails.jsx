import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_BASE_URL } from "../../config/api";

const InsightDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/Insights/${id}`);
        if (res.ok) {
          const data = await res.json();
          setArticle(data);
        }
      } catch (err) {
        console.error("Failed to fetch article details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--karas_paper)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#39164f]"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center font-serif text-[#2D1B33] bg-[var(--karas_paper)]">
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
      <main className=" pt-10 pb-24 px-6 md:px-12">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto ">
          <Link
            to="/insights"
            className="inline-flex items-center text-[11px] font-bold text-[#39164f] uppercase tracking-[0.3em] mb-10 hover:opacity-60 transition-all"
          >
            &larr; Back to Insights
          </Link>
        </div>

        <div className="flex flex-col gap-10">
          {/* 1. Image Section (Always Top) */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative group">
            <div className="absolute -inset-2 sm:-inset-4 bg-[#2D1B33]/5 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img
                src={
                  article.imageUrl
                    ? `${API_BASE_URL}${article.imageUrl}`
                    : "https://via.placeholder.com/1200x675"
                }
                className="relative w-full h-auto max-h-[550px] object-cover rounded-xl shadow-xl sm:shadow-2xl transition-transform duration-500"
                alt={article.title}
              />
            </div>
          </div>

          {/* 2. Content Section (Always Bottom) */}
          <div className="text-left max-w-6xl mx-auto">
            {/* Meta Info */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block text-[10px] font-bold text-[#39164f] uppercase tracking-[0.2em] bg-[#39164f]/5 px-4 py-2 rounded-lg">
                {article.type || "Insight"}
              </span>
              <span className="text-[12px] text-gray-400 font-medium">
                {formatDate(article.date)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#2D1B33] mb-6 leading-tight break-words">
              {article.title}
            </h1>

            <div className="w-16 h-[2px] bg-[#2D1B33] mb-8"></div>

            {/* Description */}
            <p className="text-lg sm:text-xl font-serif text-[#2D1B33] leading-relaxed mb-12 opacity-90 whitespace-pre-line">
              {article.description}
            </p>

            {/* Brand Values / Footer Decoration */}
            <div className="pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between gap-2 sm:gap-4 text-[9px] min-[400px]:text-[11px] tracking-[0.2em] font-bold text-[#39164f] uppercase w-full">
                <span>Assess</span>
                <div className="flex-1 bg-[#39164f] h-[1px] opacity-20"></div>
                <span>Clarify</span>
                <div className="flex-1 bg-[#39164f] h-[1px] opacity-20"></div>
                <span>Plan</span>
                <div className="flex-1 bg-[#39164f] h-[1px] opacity-20"></div>
                <span>Act</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InsightDetails;
