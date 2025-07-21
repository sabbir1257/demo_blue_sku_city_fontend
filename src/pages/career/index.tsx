'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection';
import { motion } from 'framer-motion';

interface CareerItem {
  id: number;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  applyUrl: string;
}

const CareerPage = () => {
  const [careers, setCareers] = useState<CareerItem[]>([]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await fetch('/datas/career/careerData.json');
        const json = await res.json();
        setCareers(json.careers || []);
      } catch (error) {
        console.error('Failed to load career data:', error);
      }
    };

    fetchCareers();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <EveryPageHeroSection
        title="Explore Exciting Careers"
        imageUrl="/images/career-banner.jpg"
      />

      <Container className="py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {careers.map((career) => (
            <motion.div
              key={career.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative w-full h-60">
                <Image
                  src={career.imageUrl}
                  alt={career.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {career.title}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2 font-medium">
                  📍 {career.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {career.description}
                </p>
                <Link
                  href={career.applyUrl}
                  target="_blank"
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CareerPage;