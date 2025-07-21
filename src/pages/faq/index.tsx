import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'What services does Blue Sky City Ltd provide?',
    answer:
      'Blue Sky City Ltd offers a wide range of real estate development and construction services tailored to client needs.',
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'You can reach our customer support team via email at info@blueskycityltd.com or by phone during business hours.',
  },
  {
    question: 'Where are your office locations?',
    answer:
      'Our main office is located in Dhaka, Bangladesh. For more details, visit the Contact Us page.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'Refund policies vary depending on the service. Please contact us directly for detailed information.',
  },
  {
    question: 'How do I track my project progress?',
    answer:
      'Clients can track their project progress through our client portal or by contacting your project manager directly.',
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>FAQs | Blue Sky City Ltd</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Blue Sky City Ltd"
        />
      </Head>

      <main className="bg-white py-24 text-gray-700">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-center my-4">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about Blue Sky City Ltd
              and our services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 pb-5 text-gray-600 border-t border-gray-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Blue Sky City Ltd. All rights
            reserved. <br />
            Template by{' '}
            <Link
              href="https://paradisesolution.us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Paradise Solution
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default FAQPage;
