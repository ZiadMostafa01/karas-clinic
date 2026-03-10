import { useState, useEffect } from "react";
import DashboardStats from "../../components/admin/dashboard/DashboardStats";
import { API_BASE_URL } from "../../config/api";
import AnnouncementManagement from "../../components/admin/dashboard/AnnouncementManagement";

export default function Dashboard() {
  const [doctors, setDoctors] = useState([]);
  const [nurses, setNurses] = useState([]);
  const [handlers, setHandlers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const endpoints = [
          { url: `${API_BASE_URL}/api/doctors` },
          { url: `${API_BASE_URL}/api/nurses` },
          { url: `${API_BASE_URL}/api/animalhandlers` },
          { url: `${API_BASE_URL}/api/administrators` },
        ];

        const results = await Promise.allSettled(
          endpoints.map((endpoint) =>
            fetch(endpoint.url).then((res) => res.json()),
          ),
        );

        if (results[0].status === "fulfilled") setDoctors(results[0].value);
        if (results[1].status === "fulfilled") setNurses(results[1].value);
        if (results[2].status === "fulfilled") setHandlers(results[2].value);
        if (results[3].status === "fulfilled") setAdmins(results[3].value);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center italic font-serif">
        Updating Overview...
      </div>
    );
  }

  return (
    <div className="py-5 sm:p-5 lg:p-6">
      <h3 className="mb-5 text-xl font-serif italic text-gray-800 lg:mb-7">
        Dashboard Overview
      </h3>

      <div className="mt-4">
        {/* دلوقتي الـ Stats هتحسب الـ length تلقائياً من الـ arrays دي */}
        <DashboardStats
          doctors={doctors}
          nurses={nurses}
          handlers={handlers}
          admins={admins}
        />
      </div>
      <div className="mt-4">
        {/* دلوقتي الـ Stats هتحسب الـ length تلقائياً من الـ arrays دي */}
        <AnnouncementManagement />
      </div>

      {/* هنا ممكن تضيف جداول مختصرة أو تنبيهات لاحقاً */}
    </div>
  );
}
