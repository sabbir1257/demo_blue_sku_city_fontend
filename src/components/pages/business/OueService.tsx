'use client';

import React from 'react';
import { Dumbbell, Utensils, Flower, Waves } from 'lucide-react';
import Link from 'next/link';

type Service = {
  title: string;
  icon: JSX.Element;
  description: string;
  link: string;
};

const services: Service[] = [
  {
    title: 'Fitness Center',
    icon: <Dumbbell className="w-8 h-8 text-white" />,
    description:
      "Elevate your workout experience at our hotel's fitness center. Equipped with state-of-the-art facilities and a motivating atmosphere, it's the perfect place to stay active during your stay.",
    link: '#',
  },
  {
    title: 'Restaurant',
    icon: <Utensils className="w-8 h-8 text-white" />,
    description:
      'Delight your taste buds at our hotel restaurants. Whether you crave gourmet cuisine or casual bites, our diverse dining options promise an unforgettable culinary journey for every guest.',
    link: '#',
  },
  {
    title: 'Spa Services',
    icon: <Flower className="w-8 h-8 text-white" />,
    description:
      'Relax at our spa with massages, treatments, and tranquility. Our therapists will melt your stress, leaving you revitalized.',
    link: '#',
  },
  {
    title: 'Swimming',
    icon: <Waves className="w-8 h-8 text-white" />,
    description:
      'Indulge in luxury at our rooftop swimming pool with gorgeous views and cool waters. Relax and rejuvenate while lounging in style high above the city.',
    link: '#',
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="bg-gradient-to-tr from-white via-blue-50 to-white py-24 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-3 relative inline-block">
          Our Services
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></span>
        </h2>
        <p className="text-gray-600 mb-16 text-lg max-w-xl mx-auto">
          Exceptional amenities to elevate your stay.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md border border-blue-200 rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 p-8 flex flex-col"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 flex items-center justify-center shadow-lg mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm flex-grow text-center leading-relaxed">
                {service.description}
              </p>
         
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
