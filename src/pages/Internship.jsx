import PagesHeader from "../components/PagesHeader";
import { ArrowRight } from "lucide-react";

const Internship = () => {
  return (
    <div className="min-h-screen bg-[var(--karas_paper)] py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <PagesHeader
        title="VOLUNTEER OPPORTUNITY"
        description="Every animal needs an extra caring hand"
      />

      <div className="max-w-6xl mx-auto w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 pb-4 text-gray-600 space-y-4 text-sm leading-relaxed border-b border-dashed border-gray-100">
          <p>At Karas clinic, we always welcome all extra caring hands, every sick animal feels the love of each affectionate touch.</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>If you are an animal lover who wants to learn more animal-caring skills.</li>
            <li>If you are a vet student who wants to experience real work-life experience in a vet clinic.</li>
            <li>If you are an animal rescue who is passionate about helping more sick animals.</li>
          </ul>
          <p>We are here to guide you, all you have to do is to fill out the form below and our team will contact you according to the availability of the slot.</p>
        </div>

        <div className="p-8 space-y-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="md:col-span-2">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">Full Name *</label>
              <input type="text" placeholder="First & last names" className="w-full p-4 rounded-lg bg-gray-100 focus:bg-white outline-none focus:ring focus:ring-purple-400 transition duration-300" />
            </div>

            <div>
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">Email *</label>
              <input type="email" placeholder="Email address" className="w-full p-4 rounded-lg bg-gray-100 focus:bg-white outline-none focus:ring focus:ring-purple-400 transition duration-300" />
            </div>
            <div>
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2 opacity-0 hidden md:block">Confirm Email</label>
              <input type="email" placeholder="Confirm your email address" className="w-full p-4 rounded-lg bg-gray-100 focus:bg-white outline-none focus:ring focus:ring-purple-400 transition duration-300" />
            </div>

            <div className="relative">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">Nationality *</label>
              <div className="relative">
                <select className="w-full p-4 rounded-lg bg-gray-100 appearance-none outline-none focus:ring focus:ring-purple-400 cursor-pointer">
                  <option>Select Nationality</option>
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--karas_aubergine)]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                </span>
              </div>
            </div>
            <div>
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">Gender *</label>
              <div className="flex gap-6 p-3">
                <label className="flex items-center space-x-2 cursor-pointer text-gray-700">
                  <input type="radio" name="gender" className="w-4 h-4 text-[var(--karas_aubergine)]" />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer text-gray-700">
                  <input type="radio" name="gender" className="w-4 h-4 text-[var(--karas_aubergine)]" />
                  <span>Female</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">Date of birth *</label>
              <input type="date" className="w-full p-4 rounded-lg bg-gray-100 outline-none focus:ring focus:ring-purple-400 transition" />
            </div>
            <div>
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">Mobile number *</label>
              <input type="text" placeholder="05xxxxxxxx" className="w-full p-4 rounded-lg bg-gray-100 outline-none focus:ring focus:ring-purple-400 transition" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">Tell us about yourself *</label>
              <textarea rows="4" className="w-full p-4 rounded-lg bg-gray-100 outline-none focus:ring focus:ring-purple-400 transition resize-none"></textarea>
            </div>

            <div className="md:col-span-2 pt-4">
              <h3 className="text-xl font-bold text-[var(--karas_aubergine)] border-b pb-2 mb-6 uppercase tracking-wide">General info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-semibold mb-3 text-gray-800">English skills *</label>
                  {['Fair', 'Good', 'Excellent', 'Native'].map(skill => (
                    <label key={skill} className="flex items-center space-x-3 mb-2 cursor-pointer text-gray-600 hover:text-[var(--karas_aubergine)] transition-colors">
                      <input type="radio" name="english" className="w-4 h-4" />
                      <span>{skill}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <label className="block font-semibold mb-3 text-gray-800">Communication skills *</label>
                  {['Good', 'some difficulty', 'sometimes hard to explain'].map(skill => (
                    <label key={skill} className="flex items-center space-x-3 mb-2 cursor-pointer text-gray-600 hover:text-[var(--karas_aubergine)] transition-colors">
                      <input type="radio" name="comm" className="w-4 h-4" />
                      <span className="capitalize">{skill}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <label className="block font-semibold mb-3 text-gray-800">Dogs or Cats *</label>
                  {['I am cat person', 'I am Dog person', 'I love both Dogs & Cats'].map(pref => (
                    <label key={pref} className="flex items-center space-x-3 mb-2 cursor-pointer text-gray-600 hover:text-[var(--karas_aubergine)] transition-colors">
                      <input type="radio" name="animal_pref" className="w-4 h-4" />
                      <span>{pref}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <label className="block font-semibold mb-3 text-gray-800">Rescue experience *</label>
                  {['I am professional animal rescuer', 'I am occasional animal rescuer', 'I never rescue animals'].map(exp => (
                    <label key={exp} className="flex items-center space-x-3 mb-2 cursor-pointer text-gray-600 hover:text-[var(--karas_aubergine)] transition-colors">
                      <input type="radio" name="rescue_exp" className="w-4 h-4" />
                      <span>{exp}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">Availability *</label>
              <textarea 
                placeholder="I am available from DD/MM/YYYY to DD/MM/YYYY&#10;I am available on these days weekly ........&#10;I prefer these timings HH:MM to HH:MM" 
                rows="4" 
                className="w-full p-4 rounded-lg bg-gray-100 outline-none focus:ring focus:ring-purple-400 transition resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 pt-4">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[var(--karas_aubergine)] focus:ring-[var(--karas_aubergine)]" />
                <span className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors">I confirm that I am not afraid of seeing blood and injection needles!</span>
              </label>
            </div>

            <div className="md:col-span-2 pt-6 flex justify-center">
              <button className="cursor-pointer w-full md:w-auto min-w-[200px] flex items-center justify-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white py-4 px-12 rounded-lg font-bold transition-all group">
                Submit
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Internship;