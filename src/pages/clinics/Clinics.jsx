import { Phone, MapPin, Clock, ArrowRight, Mail } from "lucide-react";
import img1 from "@/assets/images/business-bay-clinic.jpeg";
import img2 from "@/assets/images/jlt-clinic.jpeg";
import PagesHeader from "../../components/PagesHeader";

const ClinicCard = ({ clinic }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md">
      <div className="relative h-60 sm:h-80 overflow-hidden">
        <img
          src={clinic.image}
          alt={clinic.name}
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute top-4 left-4">
          <span className="bg-[#39164f] text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase">
            {clinic.tag}
          </span>
        </div> */}
      </div>

      <div className="px-4 sm:px-6 py-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#39164f] mb-2">{clinic.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {clinic.description}
        </p>

        <div className="grid grid-cols-1 gap-y-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-slate-50 p-1 rounded">
              <MapPin size={14} className="text-[#39164f]" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Location
              </p>
              <p className="text-xs text-slate-600 font-medium">
                {clinic.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-slate-50 p-1 rounded">
                <Phone size={14} className="text-[#39164f]" />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Contact
                </p>
                <a
                  href={`tel:${clinic.phone}`}
                  className="hover:underline text-xs text-slate-600 font-medium hover:text-[#39164f] transition-colors"
                >
                  {clinic.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-slate-50 p-1 rounded">
                <Clock size={14} className="text-[#39164f]" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Hours Today
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  {clinic.hours}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 bg-slate-50 p-1 rounded">
              <Mail size={14} className="text-[#39164f]" />
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Email
              </p>
              <a
                href={`mailto:${clinic.email}`}
                className="hover:underline text-xs text-slate-600 font-medium hover:text-[#39164f] transition-colors"
              >
                {clinic.email}
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-40 rounded-xl overflow-hidden mb-6 border border-slate-100 shadow-inner">
          <iframe
            title={`Map for ${clinic.name}`}
            src={clinic.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={clinic.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow flex items-center justify-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white py-3 px-4 rounded-lg font-bold text-xs transition-colors group"
          >
            Get Directions{" "}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href={`https://wa.me/${clinic.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-slate-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 transition-colors flex items-center justify-center"
          >
            <div className="w-5 h-5 flex items-center justify-center text-[var(--karas_aubergine_ink)] transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const Clinics = () => {
  const clinics = [
    {
      name: "Karas JLT Clinic",
      tag: "Advanced Diagnostics",
      description:
        "A modern clinic led by senior clinicians, specializing in complex cases and advanced diagnostics with cutting-edge medical technology.",
      address: "Jumeirah Bay X3 - JLT Cluster X - Jumeirah Lakes Towers - Dubai - United Arab Emirates",
      phone: "+04 575 6 444",
      whatsapp: "971557217848",
      email: "care@karasvet.com",
      hours: "09:00 AM - 09:00 PM",
      image: img2,
      googleMapsLink: "https://maps.app.goo.gl/6XvK911EMQ5zTG7W7",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6420767904756!2d55.1533619!3d25.080117700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d92534676a3%3A0xf95cba14b85fdf6c!2sKaras%20Veterinary%20Clinic!5e0!3m2!1sar!2seg!4v1771877275192!5m2!1sar!2seg",
    },
    {
      name: "Karas Downtown Clinic",
      tag: "Comprehensive Care",
      description:
        "A patient-focused clinic offering comprehensive care with experienced specialists in a central, easily accessible location.",
      address: "Bay Avenue Mall Business Bay - Dubai - United Arab Emirates",
      phone: "+04 575 6 444",
      whatsapp: "9715858302178",
      email: "care.downtown@karasvet.com",
      hours: "09:00 AM - 6:00 PM",
      image: img1,
      googleMapsLink: "https://maps.app.goo.gl/VMXz3n2B5joHP68N7",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.231602708951!2d55.2662405!3d25.192837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69e25cbd656d%3A0xb7b6c28d0cec806a!2sKaras%20Veterinary%20Clinic%20-%20Downtown!5e0!3m2!1sen!2seg!4v1771877341615!5m2!1sen!2seg",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--karas_paper)] font-sans text-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-6 ">
        <PagesHeader
          title="Our Locations"
          description="Visit us at our convenient locations in Dubai."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {clinics.map((clinic, index) => (
            <ClinicCard key={index} clinic={clinic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clinics;
