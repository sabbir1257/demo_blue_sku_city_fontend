'use client';

import React from 'react';
import Image from 'next/image';

export type Facility = {
  id: string;
  image: string;
  title: string;
  description: string;
  category: 'Hotel' | 'Restaurant';
};

type FacilitiesSectionProps = {
  title?: string;
  subtitle?: string;
  facilities: Facility[];
};

const HotelFacilities: React.FC<FacilitiesSectionProps> = ({
  title = 'Our Facilities',
  subtitle = 'Discover the exceptional services and amenities we offer to make your stay unforgettable.',
  facilities,
}) => {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-[1250px] mx-auto text-center">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-900">{title}</h2>
          <div className="w-20 h-1 mt-4 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {facilities.map(({ id, image, title, description, category }) => (
            <div
              key={id}
              className="bg-white/80 backdrop-blur-md border border-blue-200 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6 flex flex-col"
            >
              <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-md mb-5">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
                  priority
                />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
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
              <p className="text-gray-700 text-sm flex-grow">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelFacilities;
