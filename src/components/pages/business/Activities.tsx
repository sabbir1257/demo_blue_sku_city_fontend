'use client';

import React from 'react';
import Image from 'next/image';

export type Activity = {
  id: string;
  image: string;
  title: string;
  description: string;
  category: 'Hotel' | 'Resort';
};

type ActivitiesSectionProps = {
  title?: string;
  subtitle?: string;
  activities: Activity[];
};

const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  title = 'Guest Activities',
  subtitle = 'Discover a variety of engaging activities designed to enhance your stay.',
  activities,
}) => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-tr from-white via-blue-50 to-white">
      <div className="max-w-[1250px] mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-8 relative inline-block">
          {title}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full" />
        </h2>
        <p className="text-blue-700 mb-14 max-w-xl mx-auto">{subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {activities.map(({ id, image, title, description, category }) => (
            <div
              key={id}
              className="bg-white/90 backdrop-blur-sm border border-blue-200 rounded-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 hover:scale-[1.03] p-6 flex flex-col"
            >
              <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-sm mb-5">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
                  priority
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    category === 'Hotel'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-800 text-white'
                  }`}
                >
                  {category}
                </span>
              </div>
              <p className="text-blue-800 text-sm flex-grow">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
