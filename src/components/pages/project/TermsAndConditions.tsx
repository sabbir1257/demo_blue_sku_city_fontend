import React from 'react';
import { ShieldCheck } from 'lucide-react';

const terms: string[] = [
  'Allotment of plots is on a first come, first served basis.',
  'Submit a signed application with 3 applicant photos, 2 nominee photos, and booking money.',
  'Provide National ID/Passport/Citizenship certificate.',
  'Booking money must be paid with the application.',
  'For full or installment payment, contract signing follows down payment.',
  'Individuals may own multiple plots and vice versa.',
  'Overseas Bangladeshis may send payment via TT/Bank draft.',
  'Payments must be via Pay Order, cash, cheque, or Bank Draft to Blue Sky City Limited.',
  'Main utilities are set by the company; charges billed proportionately.',
  'The allottee handles plot-specific utility connections.',
  'Registration and transfer occur after full construction and payment.',
  "A plot owners' committee (Blue Sky City Society) will be formed post-transfer.",
  'Welfare fund contributions are required as per society decision.',
  'On refund request, 20% is deducted; balance paid by cheque within 3 months.',
  'Blue Sky City is not liable for delays due to natural disasters or unrest.',
];

const TermsAndConditions: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-24 px-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Plot Allotment Terms & Conditions
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full" />
          <p className="mt-4 text-gray-600 text-lg">
            Please read carefully before proceeding with any bookings or payments.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {terms.map((term, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-blue-200 border-l-4 border-blue-600 p-6 transition-shadow group relative"
              aria-label={`Term ${index + 1}`}
            >
              <div className="absolute -top-5 -left-5 bg-blue-600 text-white p-2 rounded-full shadow-md group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed mt-2">{term}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;