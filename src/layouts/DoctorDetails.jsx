import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../config/api";

function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/doctors/${id}`);
        if (res.ok) {
          const data = await res.json();
          setDoctor(data);
        }
      } catch (err) {
        console.error("Failed to fetch doctor details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--karas_paper)] italic">
        Loading doctor details...
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--karas_paper)] italic">
        Staff member not found!
      </div>
    );
  }

  return (
    <div className="bg-[var(--karas_paper)] min-h-screen pt-[79.05px] px-6 md:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 py-16 md:grid-cols-2 gap-16">
        {/* Doctor Image */}
        <div className="bg-white p-3 shadow-md border border-[#e5e1d8] aspect-[3/4]">
          <img
            src={`${API_BASE_URL}${doctor.imageUrl}`}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-serif italic text-[#333] mb-2">
            {doctor.name}
          </h1>
          <p className="text-[var(--karas_aubergine)] uppercase tracking-[0.2em] text-sm mb-8 font-bold">
            {doctor.title}
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#999] border-b border-[#d1cdc2] mb-4 pb-1">
                Areas of focus
              </h3>
              <p className="text-gray-600 italic leading-relaxed">
                {doctor.areasOfFocus}
              </p>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#999] border-b border-[#d1cdc2] mb-4 pb-1">
                About
              </h3>
              <p className="text-gray-600 leading-relaxed italic">
                {doctor.about}
              </p>
            </section>

            {doctor.education && (
              <section>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#999] border-b border-[#d1cdc2] mb-4 pb-1">
                  Education / Certifications
                </h3>
                <p className="text-gray-600 italic leading-relaxed">
                  {doctor.education}
                </p>
              </section>
            )}
          </div>

          <a
            href="https://karas.viggo.vet/online-booking/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 bg-[#333] text-white py-4 px-10 uppercase text-[10px] tracking-[0.3em] hover:bg-[var(--karas_aubergine)] transition-all self-start"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
