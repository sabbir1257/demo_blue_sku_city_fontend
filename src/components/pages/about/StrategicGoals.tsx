'use client';

import React from 'react';
import {
  FaHome,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaCity,
  FaBullhorn,
  FaGlobe,
} from 'react-icons/fa';

type Goal = {
  icon: React.ReactNode;
  title: string;
  points: string[];
};

const goals: Goal[] = [
  {
    icon: <FaHome className="text-blue-600 text-3xl" />,
    title: 'Develop Model Residential Communities',
    points: [
      'Establish integrated housing projects in key growth areas near Dhaka.',
      'Design planned layouts with roads, utilities, parks, markets, and social facilities.',
      'Include eco-friendly features like green zones, water reservoirs, and waste systems.',
    ],
  },
  {
    icon: <FaChartLine className="text-green-600 text-3xl" />,
    title: 'Deliver Sustainable Investment Growth',
    points: [
      'Ensure land value appreciation of 2–3x in 5–7 years.',
      'Provide high-return investment opportunities for individuals and institutions.',
      'Strengthen resale and rental value through consistent infrastructure and service delivery.',
    ],
  },
  {
    icon: <FaShieldAlt className="text-yellow-600 text-3xl" />,
    title: 'Ensure 100% Legal and Transparent Transactions',
    points: [
      'Maintain strict compliance with all legal documentation standards.',
      'Offer clients full legal support and due diligence services.',
      'Build trust through transparency and verified legal processes.',
    ],
  },
  {
    icon: <FaUsers className="text-pink-600 text-3xl" />,
    title: 'Make Land Ownership Accessible',
    points: [
      'Introduce affordable pricing plans for middle-class and salaried families.',
      'Offer easy EMI plans, low down payments, and flexible financing options.',
      'Simplify the land buying process for first-time buyers with personalized help.',
    ],
  },
  {
    icon: <FaCity className="text-purple-600 text-3xl" />,
    title: 'Become a Leader in Satellite Township Development',
    points: [
      'Lead the creation of future-ready suburbs with metro and highway connectivity.',
      'Implement balanced township plans that blend affordability with livability.',
      'Include mixed-use zones with housing, schools, healthcare, and businesses.',
    ],
  },
  {
    icon: <FaBullhorn className="text-red-600 text-3xl" />,
    title: 'Build a Recognizable and Respected Brand',
    points: [
      'Position Blue Sky Dream City Ltd. as a trusted real estate name.',
      'Grow visibility through strong online and offline marketing.',
      'Foster client loyalty via events, support services, and consistent communication.',
    ],
  },
  {
    icon: <FaGlobe className="text-indigo-600 text-3xl" />,
    title: 'Contribute to National Urban Growth',
    points: [
      "Support 'Smart Bangladesh' and regional development initiatives.",
      'Create jobs in real estate, construction, and support services.',
      'Promote modern, sustainable, and inclusive urban development.',
    ],
  },
];

const StrategicGoals: React.FC = () => {
  return (
    <section
      id="OurStrategicGoals"
      className="py-16 px-4 md:px-20 bg-gray-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Our Strategic Goals{' '}
        </h2>
        <div className="w-20 h-1 mx-auto my-4 bg-blue-600 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At Blue Sky Dream City Ltd., our mission goes beyond construction—we
          aim to build lasting trust, sustainable growth, and empowered
          communities.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] w-full mx-auto">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 border border-gray-200 space-y-4"
          >
            <div className="flex justify-center">{goal.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800 text-center">
              {goal.title}
            </h3>
            <ul className="text-gray-700 text-sm space-y-2 list-disc list-outside pl-5">
              {goal.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategicGoals;