'use client';

import React from 'react';
import Image from 'next/image';
import { BedDouble, Ruler, Check } from 'lucide-react';

type Room = {
  title: string;
  image: string;
  size: string;
  bed: string;
  category: string;
  features: string[];
};

type RoomsSectionProps = {
  title?: string;
  subtitle?: string;
  rooms: Room[];
};

const RoomsAndSuites: React.FC<RoomsSectionProps> = ({
  title = 'Rooms & Suites',
  subtitle = 'Discover elegance and comfort in every corner. Choose from our exclusive selection of rooms and suites.',
  rooms,
}) => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-900">{title}</h2>
          <div className="w-20 h-1 mt-4 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
            >
              <div className="relative w-full h-60">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-blue-900">{room.title}</h3>
                  <span className="text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {room.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Ruler className="w-4 h-4 text-blue-500" />
                    {room.size}
                  </div>
                  <div className="flex items-center gap-1">
                    <BedDouble className="w-4 h-4 text-blue-500" />
                    {room.bed}
                  </div>
                </div>

                <ul className="text-sm text-gray-500 space-y-1">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsAndSuites;