'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MissionVision from '@/components/pages/home/MissionVission';
import CoreValues from '@/components/pages/about/CoreValues';
import StrategicGoals from '@/components/pages/about/StrategicGoals';
import HeroSlider from '@/components/shared/HeroSlider';

const heroSlides = [
  {
    image: '/images/landing.jpg',
  },
  {
    image: '/images/landing.jpg',
  },
  {
    image: '/images/landing.jpg',
  },
];

const AboutUs: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider
        slides={heroSlides}
        heightClass="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh]"
        widthClass="w-full"
      />

      <main className="bg-white text-gray-800">
        {/* Short History Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Image Slider */}
          <div className="w-full h-full rounded-xl overflow-hidden shadow-md">
            <HeroSlider
              slides={heroSlides}
              heightClass="h-full"
              widthClass="w-full"
            />
          </div>

          {/* Right - Text Content */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
                Our Story
              </h2>
              <div className="w-20 h-1 mt-3 mx-auto md:mx-0 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Founded by Mr. Harun-Nur-Rashid in 2022, Blue Sky City Ltd. began with a mission to create livable, well-planned communities near Dhaka. From humble beginnings, our vision grew into an ambitious housing movement backed by infrastructure, technology, and people-first values. Today, we are shaping better futures through sustainable urban development.
            </p>
            <div className="mt-6">
              <Link
                href="/project"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <MissionVision />
        <CoreValues />
        <StrategicGoals />
      </main>
    </>
  );
};

export default AboutUs;
