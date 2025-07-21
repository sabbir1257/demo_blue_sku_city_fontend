'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HeroSlider from '@/components/shared/HeroSlider';
import CallToAction from '@/components/pages/home/CallToAction';
import MissionVision from '@/components/pages/home/MissionVission';
import { Building, Users, Leaf, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import WhyChooseUs from '@/components/pages/business/WhyChooseUs';
import TestimonialSlider from '@/components/pages/home/TestimonialSlider';
import Gallery from '@/components/shared/Gallery';
import ProductSection from '@/components/pages/home/ProductSection';
import FlowUsSection from '@/components/shared/followUs/FollowUs';

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

const boardMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: '/images/Managing-directing.jpeg',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: '/images/Managing-directing.jpeg',
  },
  {
    name: 'David Johnson',
    position: 'CFO',
    image: '/images/Managing-directing.jpeg',
  },
  {
    name: 'Emily Davis',
    position: 'COO',
    image: '/images/Managing-directing.jpeg',
  },
];

const BlueSkyDreamSociety: React.FC = () => {
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const goals = [120, 25, 98];
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => (val < goals[i] ? val + 1 : val))
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Hero */}
      <HeroSlider
        slides={heroSlides}
        heightClass="h-[70vh] md:h-[90vh] lg:h-[100vh]"
        widthClass="w-full"
      />

      {/* About */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Blue Sky Dream Society
        </motion.h2>
        <motion.p
          className="mt-6 text-gray-600 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We are a visionary real estate brand building modern, eco-conscious
          communities across Bangladesh. We don’t just sell land—we design
          thriving ecosystems for people and their dreams.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Impact Stats */}
      <section className="bg-blue-800 py-20 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="text-5xl font-bold">{counts[0]}</div>
            <p className="mt-2 text-lg">Communities Impacted</p>
          </div>
          <div>
            <div className="text-5xl font-bold">{counts[1]}</div>
            <p className="mt-2 text-lg">Awards Won</p>
          </div>
          <div>
            <div className="text-5xl font-bold">{counts[2]}%</div>
            <p className="mt-2 text-lg">Sustainability Score</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-3xl font-bold text-center text-blue-800">
          Our Core Values
        </h3>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Integrity', icon: '💼' },
            { title: 'Sustainability', icon: '🌱' },
            { title: 'Innovation', icon: '💡' },
            { title: 'Community', icon: '🏘️' },
          ].map(({ title, icon }) => (
            <div
              key={title}
              className="bg-white text-center p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition"
            >
              <div className="text-4xl">{icon}</div>
              <h4 className="mt-4 text-xl font-semibold text-blue-700">
                {title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <ProductSection />

      {/* Team */}
      <Gallery title="Meet Our Team" members={boardMembers} />

      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* Testimonials */}
      <TestimonialSlider />
      {/* Follow Us */}
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Follow Us
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
      </div>
      <FlowUsSection />
      {/* call and action */}
      <CallToAction />
    </div>
  );
};

export default BlueSkyDreamSociety;
