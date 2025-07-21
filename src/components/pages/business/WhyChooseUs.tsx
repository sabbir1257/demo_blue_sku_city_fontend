'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building, Leaf, ShieldCheck, Users } from 'lucide-react';

type Metric = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const metrics: Metric[] = [
  {
    icon: <Building className="w-8 h-8 text-blue-600" />,
    title: '20+ Completed Projects',
    desc: 'Delivered sustainable housing and urban infrastructures.',
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: '1,200+ Happy Clients',
    desc: 'Our customers trust us with their dreams and investments.',
  },
  {
    icon: <Leaf className="w-8 h-8 text-blue-600" />,
    title: 'Eco-Friendly Designs',
    desc: 'We’re committed to green, smart, and sustainable solutions.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: '15 Years of Trust',
    desc: 'A legacy of excellence and uncompromising values.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Here’s what makes Blue Sky Dream Society the top choice for investors
          and families alike.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">{icon}</div>
              <h4 className="text-xl font-semibold text-blue-700">{title}</h4>
              <p className="text-sm text-gray-600 mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;