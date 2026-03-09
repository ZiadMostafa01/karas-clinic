import React, { useState, useEffect } from "react";
import PagesHeader from "../components/PagesHeader";
import StaffSlider from "../components/team/StaffSlider";
import { API_BASE_URL } from "../config/api";

function OurTeam() {
  const [activeBranch, setActiveBranch] = useState("JLT");
  const [doctors, setDoctors] = useState([]);
  const [nurses, setNurses] = useState([]);
  const [handlers, setHandlers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // داخل useEffect في صفحة OurTeam
    const fetchAllData = async () => {
      try {
        const endpoints = [
          { key: "doctors", url: `${API_BASE_URL}/api/doctors` },
          { key: "nurses", url: `${API_BASE_URL}/api/nurses` },
          { key: "handlers", url: `${API_BASE_URL}/api/animalhandlers` },
          { key: "admins", url: `${API_BASE_URL}/api/administrators` },
        ];

        const results = await Promise.allSettled(
          endpoints.map((endpoint) =>
            fetch(endpoint.url).then((res) => res.json()),
          ),
        );

        // 1. الدكاترة: نضيف الـ Flag ونخزنهم
        if (results[0].status === "fulfilled") {
          const doctorsWithFlag = results[0].value.map((doc) => ({
            ...doc,
            canViewDetails: true, // دي العلامة اللي هنستخدمها في السلايدر
          }));
          setDoctors(doctorsWithFlag);
        }

        // 2. باقي الطاقم: نخزنهم كما هم (بدون Flag)
        if (results[1].status === "fulfilled") setNurses(results[1].value);
        if (results[2].status === "fulfilled") setHandlers(results[2].value);
        if (results[3].status === "fulfilled") setAdmins(results[3].value);

        setLoading(false);
      } catch (error) {
        console.error("General Error:", error);
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);
  // دالة لفلترة أي قائمة بناءً على الفرع (JLT أو DownTown)
  const filterByBranch = (list) =>
    list.filter((item) => item.location === activeBranch);

  if (loading)
    return (
      <div className="text-center py-20 font-serif italic">
        Loading Karas Team...
      </div>
    );

  return (
    <div className="bg-[var(--karas_paper)] min-h-screen py-10">
      <main className="max-w-7xl mx-auto px-6">
        <PagesHeader
          title="Karas Team"
          description="Experienced professionals dedicated to precise, structured, and deliberate veterinary care."
        />

        {/* Branch Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-[#f0ede6] border border-[#d1cdc2] rounded-sm shadow-sm">
            <button
              onClick={() => setActiveBranch("JLT")}
              className={`cursor-pointer px-12 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                activeBranch === "JLT"
                  ? "bg-[var(--karas_aubergine)] text-white shadow-md"
                  : "text-gray-400 hover:text-[var(--karas_aubergine)]"
              }`}
            >
              {" "}
              JLT{" "}
            </button>
            <button
              onClick={() => setActiveBranch("DownTown")}
              className={`cursor-pointer px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                activeBranch === "DownTown"
                  ? "bg-[var(--karas_aubergine)] text-white shadow-md"
                  : "text-gray-400 hover:text-[var(--karas_aubergine)]"
              }`}
            >
              {" "}
              Business Bay{" "}
            </button>
          </div>
        </div>

        <div key={activeBranch} className="space-y-4 animate-fadeIn">
          {/* 1. قسم الدكاترة (Clinical Leadership) */}
          <StaffSlider
            title="Clinical Leadership"
            subtitle="Senior Medical Clinicians"
            data={filterByBranch(doctors)}
          />

          {/* 2. قسم التمريض والمساعدين (Clinical Staff) */}
          {/* هنا بندمج الممرضين مع الـ Animal Handlers في سلايدر واحد زي التصميم القديم */}
          <StaffSlider
            title="Clinical Staff"
            subtitle="Veterinary Nurses & Animal Handlers"
            data={[...filterByBranch(nurses), ...filterByBranch(handlers)]}
          />

          {/* 3. قسم الإدارة (Client Support) */}
          <StaffSlider
            title="Client Support"
            subtitle="Administration"
            data={filterByBranch(admins)}
          />
        </div>
      </main>
    </div>
  );
}

export default OurTeam;
