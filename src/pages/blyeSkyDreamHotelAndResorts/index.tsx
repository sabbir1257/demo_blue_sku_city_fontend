'use client';

import CallToAction from '@/components/pages/home/CallToAction';
import TestimonialSlider from '@/components/pages/home/TestimonialSlider';
import FlowUsSection from '@/components/shared/followUs/FollowUs';
import HeroSlider from '@/components/shared/HeroSlider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

type CardItem = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const BlueSkyCityDreamHotelAndResort: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const heroSlides = [
    {
      title: 'We IMPROVE YOUR SALES EFFICIENCY',
      subtitle: 'The government they survive article of fortune',
      image: '/images/Hotel-Resorts1.jpg',
      buttonText: 'CONTACT US',
      buttonLink: '/contact',
    },
    {
      title: 'GROW YOUR BUSINESS WITH US',
      subtitle: 'Success is not by chance, it’s by choice',
      image: '/images/Hotel-Resorts2.jpg',
      buttonText: 'GET STARTED',
      buttonLink: '/get-started',
    },
    {
      title: 'EMPOWER YOUR BRAND',
      subtitle: 'Creating strategies that drive results',
      image: '/images/Hotel-Resorts3.jpg',
      buttonText: 'LEARN MORE',
      buttonLink: '/about',
    },
  ];

  const cards: CardItem[] = [
    {
      title: 'Dhaka Hotel And Resort',
      description: 'Enjoy our premium rooms with scenic views.',
      image: '/images/Dhaka_hotel_and_resort.jpeg',
      link: '/blyeSkyDreamHotelAndResorts/HotelAndResortDhaka',
    },
    {
      title: "Cox Hotel And Resort",
      description: 'Relax with our spa and wellness packages.',
      image: '/images/shilet_hotel_and_RESORT.jpeg',
      link: '/blyeSkyDreamHotelAndResorts/HotelAndResortSylhet',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSlider
        slides={heroSlides}
        heightClass="h-[100vh]"
        widthClass="w-full"
      />
      {/* Resorts Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={600}
              height={400}
              className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 w-full px-6 py-6 text-white z-10">
              <h3 className="text-2xl font-bold drop-shadow-md">
                {card.title}
              </h3>
              <p className="text-sm mt-2 drop-shadow-sm">{card.description}</p>
              <button
                onClick={() => handleNavigate(card.link)}
                className="mt-4 bg-white text-blue-600 px-5 py-2 rounded-full font-medium hover:bg-blue-100 transition"
              >
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-20 px-6 text-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Choose Blue Sky Dream Hotel And Resorts ?
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Scenic Locations', 'Luxury Facilities', 'Unmatched Service'].map(
            (title, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600">
                  {idx === 0
                    ? 'Relax in nature-rich surroundings perfect for peace and beauty.'
                    : idx === 1
                    ? 'Infinity pools, spa, fine dining, and world-class service await you.'
                    : 'Our attentive staff ensure every moment of your stay is exceptional.'}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white px-6">
        <TestimonialSlider />
      </section>

      {/* Follow + CTA */}
      <FlowUsSection />
      <CallToAction />
    </>
  );
};

export default BlueSkyCityDreamHotelAndResort;
