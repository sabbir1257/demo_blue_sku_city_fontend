'use client';

import React, { useState, FormEvent } from 'react';

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
    setEmail('');
  };

  return (
    <section className="relative bg-white text-blue-900 py-24 px-6 overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-[100px] z-0 pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-blue-200 opacity-10 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug tracking-tight">
          Are You Ready to Invest?
          <br />
          <span className="text-blue-600">Let’s Work Together!</span>
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Our Team is ready to guide you to invest— we are just a click away.
        </p>

        {/* Email input form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:flex-1 px-5 py-3 rounded-full text-blue-900 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;