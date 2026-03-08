import PagesHeader from "../components/PagesHeader";
import { ArrowRight } from "lucide-react";
import stripe from "../assets/images/secure-stripe.png";
const OnlinePayment = () => {
  return (
    <div className="min-h-screen bg-[var(--karas_paper)] py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <PagesHeader
        title="Online Payment"
        description="To pay for an adoption package or any animal or owner or carer invoices Please fill the below form."
      />
      <div className="max-w-6xl mx-auto w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 pb-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            <span className="font-medium">Note:</span> Karas Veterinary Clinic
            does NOT store your payment card details; all payments are processed
            through an authorised gateway.
          </p>
        </div>

        <div className="p-8 pt-0 space-y-6">
          <hr className="border-dashed border-gray-200 mb-8" />

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative md:col-span-2 group">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2 transition-colors">
                Toward branch *
              </label>

              <div className="relative">
                <select className="w-full p-4  rounded-lg  bg-gray-100 focus:bg-gray-50 outline-none focus:ring focus:ring-purple-400 transition duration-300 appearance-none">
                  <option>JLT Branch</option>
                  <option>Business Bay Branch</option>
                </select>

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--karas_aubergine)]">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                  </svg>
                </span>
              </div>

              <p className="text-xs text-gray-400 mt-2 ml-1">
                If you are not sure then leave it as Default
              </p>
            </div>

            <div>
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                First Name *
              </label>
              <input
                type="text"
                placeholder="First"
                className="w-full p-4  rounded-lg  bg-gray-100 focus:bg-gray-50 outline-none focus:ring focus:ring-purple-400 transition duration-300"
              />
            </div>
            <div>
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="Last"
                className="w-full p-4  rounded-lg  bg-gray-100 focus:bg-gray-50 outline-none focus:ring focus:ring-purple-400 transition duration-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Your Email *
              </label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full p-4  rounded-lg  bg-gray-100 focus:bg-gray-50 outline-none focus:ring focus:ring-purple-400 transition duration-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Payment reason *
              </label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="reason"
                    className="w-4 h-4 text-[var(--karas_aubergine)] focus:ring-[var(--karas_aubergine)]"
                  />
                  <span className="text-gray-700">Adoption package</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="reason"
                    className="w-4 h-4 text-[var(--karas_aubergine)] focus:ring-[var(--karas_aubergine)]"
                  />
                  <span className="text-gray-700">Invoice of animal</span>
                </label>
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Reference *
              </label>
              <input
                type="text"
                className="w-full p-4  rounded-lg  bg-gray-100 focus:bg-gray-50 outline-none focus:ring focus:ring-purple-400 transition duration-300"
              />
              <p className="text-xs text-gray-400 mt-1">
                Please specify the name of the animal or owner or invoice number
              </p>
            </div>

            <div className="md:col-span-2">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Reference Email
              </label>
              <input
                type="email"
                className="w-full p-4  rounded-lg  bg-gray-100 focus:bg-gray-50 outline-none focus:ring focus:ring-purple-400 transition duration-300"
              />
              <p className="text-xs text-gray-400 mt-1">
                Please enter your reference email in case of payment for the
                organisation adoption package
              </p>
            </div>

            <div className="md:col-span-2">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Any additional comment
              </label>
              <textarea
                rows="4"
                className="w-full p-4  rounded-lg  bg-gray-100 focus:bg-gray-50 outline-none focus:ring focus:ring-purple-400 transition duration-300"
              ></textarea>
            </div>

            <div className="md:col-span-2 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <label className="block text-red-500 font-semibold mb-2">
                Amount to pay *
              </label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  className="w-full p-4 pr-16 bg-white border border-gray-200 rounded-lg outline-none focus:ring focus:ring-purple-400 transition duration-300"
                />
                <span className="absolute right-4 text-gray-500 font-medium">
                  AED
                </span>
              </div>
            </div>

            <div className="md:col-span-2 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <label className="block text-[var(--karas_aubergine)] font-semibold mb-2">
                Bank Card *
              </label>
              <div className="bg-white p-4 border border-gray-200 rounded-lg flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Card number"
                  className="flex-1 outline-none"
                />
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded">
                    Link
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <img src={stripe} className="w-48" alt="" />
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow flex items-center justify-center gap-2 bg-[var(--karas_aubergine)] hover:bg-[var(--karas_aubergine_ink)] text-white py-4 px-4 rounded-lg font-bold text-sm transition-colors group"
              >
                Proceed with payment{" "}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OnlinePayment;
