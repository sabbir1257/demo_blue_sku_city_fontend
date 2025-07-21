'use client';

import React from 'react';
import { ShieldCheck, Lightbulb, CheckCircle, Leaf, Users,Globe2, } from 'lucide-react';

type CoreValue = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const coreValues: CoreValue[] = [
    {
    title: 'Integrity & Transparency',
    description:
      'We provide fully legal and verified land documents, with open communication throughout the process.',
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
  },
  {
    title: 'Innovation',
    description:
      'We embrace forward-thinking ideas and modern urban development strategies to meet changing demands.',
    icon: <Lightbulb className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: 'Quality',
    description:
      'We never compromise on construction, infrastructure, or legal integrity—every plot and project meets high standards.',
    icon: <CheckCircle className="w-10 h-10 text-green-600" />,
  },
  {
    title: 'Sustainability',
    description:
      'We plan communities with long-term environmental balance—green spaces, water bodies, and proper zoning.',
    icon: <Leaf className="w-10 h-10 text-emerald-500" />,
  },
  {
    title: 'Community Commitment',
    description:
      'Our goal is to build societies, not just structures. Every development encourages social interaction, harmony, and security.',
    icon: <Users className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: 'Global Standards',
    description:
      'We follow global best practices in planning, development, and legal processes to ensure world-class results.',
    icon: <Globe2 className="w-10 h-10 text-red-500" />,
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Our Core Values
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Our organization is built on strong foundational values that guide
          our work and our promise to clients.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center border-t-4 border-blue-100 hover:border-blue-500"
          >
            <div className="flex justify-center mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600 text-base">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
