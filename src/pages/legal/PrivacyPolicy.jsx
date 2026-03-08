import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[var(--karas_paper)] min-h-screen pt-[79.05px] px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto py-16">
        <header className="mb-10 border-b pb-6">
          <h1 className="text-4xl font-bold text-[var(--karas_aubergine)] mb-4">Privacy Policy</h1>
        </header>

        <section className="mb-8 leading-relaxed">
          <p className="mb-4">
            Welcome to <strong>Karasvet</strong> ("us", "we", or "our"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>
          <p>
            We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Information Collection And Use</h2>
          <p className="mb-4">We collect several different types of information for various purposes to provide and improve our Service to you.</p>

          <h3 className="text-xl font-medium mb-3">Types of Data Collected</h3>
          
          <div className="pl-4 border-l-4 border-[var(--karas_aubergine)]">
            <h4 className="font-bold mb-2 underline">Personal Data</h4>
            <p className="mb-2 text-gray-700">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
            <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-medium mb-3">Usage Data</h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Use of Data</h2>
          <p className="mb-3">Karasvet uses the collected data for various purposes:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Transfer Of Data</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
          </p>
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 italic text-sm">
            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Analytics</h2>
          <p className="mb-4">We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
          <div className="pl-4">
            <h4 className="font-bold mb-2">Google Analytics</h4>
            <p className="text-gray-700">Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services.</p>
          </div>
        </section>

        <section className="mb-8 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="font-bold w-20">By email:</span> 
                <a href="mailto:support@karasvet.com" className="text-[var(--karas_aubergine)] hover:underline">support@karasvet.com</a>
              </li>
              <li className="flex items-center">
                <span className="font-bold w-20">Website:</span>
                <a href="https://karasvet.com" className="text-[var(--karas_aubergine)] hover:underline">www.karasvet.com</a>
              </li>
            </ul>
          </div>
        </section>

        <footer className="mt-12 text-center text-gray-400 text-xs">
          <p>&copy; 2026 Karasvet. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;