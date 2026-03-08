import React from "react";
import PagesHeader from "../components/PagesHeader";
import { ArrowRight, Plus, Minus } from "lucide-react";

const OpenVacancies = () => {
  return (
    <div className="min-h-screen bg-[var(--karas_paper)] py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <PagesHeader
        title="Open vacancies"
        description="Please check below, our open vacancies if you are interested to join our family."
      />

      <div className="max-w-6xl mx-auto w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 space-y-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative md:col-span-2">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                I am applying for *
              </label>
              <div className="relative">
                <select className="w-full p-4 rounded-lg bg-gray-100 focus:bg-gray-50 outline-none focus:ring focus:ring-purple-400 transition duration-300 appearance-none">
                  <option>Please choose from open vacancies</option>
                  <option>Veterinary Surgeon</option>
                  <option>Vet Nurse</option>
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--karas_aubergine)]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512">
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="First & last names"
                className="w-full p-4 rounded-lg bg-gray-100 focus:bg-gray-50 outline-none focus:ring focus:ring-purple-400 transition duration-300"
              />
            </div>

            <div>
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-4 rounded-lg bg-gray-100 focus:bg-gray-50 outline-none focus:ring focus:ring-purple-400 transition duration-300"
              />
            </div>
            <div>
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2 opacity-0 hidden md:block">
                Confirm Email
              </label>
              <input
                type="email"
                placeholder="Confirm your email address"
                className="w-full p-4 rounded-lg bg-gray-100 focus:bg-gray-50 outline-none focus:ring focus:ring-purple-400 transition duration-300"
              />
            </div>

            <div className="relative">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Nationality *
              </label>
              <select className="w-full p-4 rounded-lg bg-gray-100 appearance-none outline-none focus:ring focus:ring-purple-400">
                <option>Select Nationality</option>
              </select>
            </div>
            <div>
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Gender *
              </label>
              <div className="flex gap-6 p-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    className="w-4 h-4 text-[var(--karas_aubergine)]"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    className="w-4 h-4 text-[var(--karas_aubergine)]"
                  />
                  <span>Female</span>
                </label>
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Mobile number *
              </label>
              <input
                type="text"
                placeholder="05xxxxxxxx"
                className="w-full p-4 rounded-lg bg-gray-100 outline-none focus:ring focus:ring-purple-400 transition"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Current job notice period *
              </label>
              <input
                type="text"
                className="w-full p-4 rounded-lg bg-gray-100 outline-none focus:ring focus:ring-purple-400 transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                If you are currently working, why do you want to leave your
                current job
              </label>
              <input
                type="text"
                className="w-full p-4 rounded-lg bg-gray-100 outline-none focus:ring focus:ring-purple-400 transition"
              />
            </div>

            <div className="md:col-span-2 pt-4">
              <h3 className="text-xl font-bold text-[var(--karas_aubergine)] border-b pb-2 mb-6">
                Personal skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-semibold mb-3">
                    English skills *
                  </label>
                  {["Fair", "Good", "Excellent", "Native"].map((skill) => (
                    <label
                      key={skill}
                      className="flex items-center space-x-3 mb-2 cursor-pointer text-gray-600"
                    >
                      <input type="radio" name="english" className="w-4 h-4" />
                      <span>{skill}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <label className="block font-semibold mb-3">
                    Communication skills *
                  </label>
                  {["Good", "some difficulty", "sometimes hard to explain"].map(
                    (skill) => (
                      <label
                        key={skill}
                        className="flex items-center space-x-3 mb-2 cursor-pointer text-gray-600"
                      >
                        <input type="radio" name="comm" className="w-4 h-4" />
                        <span className="capitalize">{skill}</span>
                      </label>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <h3 className="text-xl font-bold text-[var(--karas_aubergine)] border-b pb-2 mb-6">
                Previous experience
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Position"
                  className="p-4 rounded-lg bg-gray-100 outline-none"
                />
                <input
                  type="text"
                  placeholder="From"
                  className="p-4 rounded-lg bg-gray-100 outline-none"
                />
                <input
                  type="text"
                  placeholder="To"
                  className="p-4 rounded-lg bg-gray-100 outline-none"
                />
              </div>
              <textarea
                placeholder="Any relevant details"
                rows="4"
                className="w-full p-4 rounded-lg bg-gray-100 outline-none mb-4 resize-none"
              ></textarea>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition"
                >
                  <Plus size={16} /> Add more experience
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
                >
                  <Minus size={16} /> Remove
                </button>
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-[var(--karas_aubergine)] focus:ring-[var(--karas_aubergine)]"
                />
                <span className="text-sm text-gray-600 font-medium">
                  I confirm that the above details are accurate
                </span>
              </label>
            </div>

            <div className="md:col-span-2 pt-6 flex justify-center">
              <button className="cursor-pointer w-full md:w-auto min-w-[200px] flex items-center justify-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white py-4 px-12 rounded-lg font-bold transition-all group">
                Submit
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OpenVacancies;
