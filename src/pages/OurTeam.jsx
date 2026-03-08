import React, { useState } from "react";
import PagesHeader from "../components/PagesHeader";
import StaffSlider from "../components/team/StaffSlider";
import { allStaffData } from "../data/staffData";

function OurTeam() {
  const [activeBranch, setActiveBranch] = useState("JLT");

  const doctors = allStaffData.filter((m) => {
    const isDoctor = ["ajla", "abdullah", "milana", "mostafa", "usama"].some(
      (id) => m.id.includes(id),
    );
    if (activeBranch === "JLT") {
      return (
        isDoctor &&
        ["ajla", "abdullah", "milana"].some((id) => m.id.includes(id))
      );
    } else {
      return isDoctor && ["mostafa", "usama"].some((id) => m.id.includes(id));
    }
  });

  const clinicalSupport = allStaffData.filter((m) => {
    const isSupport =
      m.title === "Veterinary Nurse" || m.title === "Animal Handler";
    if (activeBranch === "JLT") {
      const jltSupportIds = [
        "mohamed-bekhit",
        "alfredo-avelino",
        "stepan-visaya",
        "emmanuel-yap",
        "jyrus-lapuz",
        "nalding-lloza",
      ];
      return isSupport && jltSupportIds.includes(m.id);
    } else {
      const bbSupportIds = [
        "linda-asobo",
        "romel-mabborang",
        "carlo-nodalo",
        "mark-dylan",
      ];
      return isSupport && bbSupportIds.includes(m.id);
    }
  });

  const administrators = allStaffData.filter((m) => {
    const isAdmin = m.title === "Administration";
    if (activeBranch === "JLT") {
      return (
        isAdmin &&
        [
          "imma-lozano",
          "janna-barrios",
          "john-labtingao",
          "thomas-ypil",
        ].includes(m.id)
      );
    } else {
      return isAdmin && ["wael-ragab", "angelo-quinones"].includes(m.id);
    }
  });

  return (
    <div className="bg-[var(--karas_paper)] min-h-screen py-10">
      <main className="max-w-7xl mx-auto px-6">
        <PagesHeader
          title="Karas Team"
          description="Experienced professionals dedicated to precise, structured, and deliberate veterinary care."
        />

        <div className="flex justify-center mb-16">
          <div className="inline-flex p- bg-[#f0ede6] border border-[#d1cdc2] rounded-sm">
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
              onClick={() => setActiveBranch("BB")}
              className={`cursor-pointer px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                activeBranch === "BB"
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
          <StaffSlider
            title="Clinical Leadership"
            subtitle="Senior Medical Clinicians"
            data={doctors}
          />

          <StaffSlider
            title="Clinical Staff"
            subtitle="Veterinary Nurses & Animal Handlers"
            data={clinicalSupport}
          />

          <StaffSlider
            title="Client Support"
            subtitle="Administration"
            data={administrators}
          />
        </div>
      </main>
    </div>
  );
}

export default OurTeam;
