'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Testimonial = {
  name: string;
  title: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Ajijul Haque',
    title: 'Retired Banker',
    image: '/images/Ajijul_Haque.jpeg',
    quote:
      'With Blue Sky Cit Landmark Limited, innovation and elegance converge seamlessly. Their real estate ventures stand as testaments to their dedication to creating spaces that harmoniously blend luxury, comfort, and functionality.',
  },
  {
    name: 'Farzana Rahman',
    title: 'Interior Designer',
    image: '/images/Farzana_Rahman.jpeg',
    quote:
      'Working with Blue Sky Cit Landmark was a dream. Their understanding of aesthetics and functionality is unmatched. I always recommend them to clients seeking refined living spaces.',
  },
  {
    name: 'Mahmudul Hasan',
    title: 'Corporate Consultant',
    image: '/images/Mahmudul_Hasan.jpeg',
    quote:
      'From the initial consultation to project delivery, Blue Sky Cit Landmark impressed me with their professionalism. Every detail was handled with care and commitment.',
  },
  {
    name: 'Sharmeen Akter',
    title: 'Entrepreneur',
    image: '/images/Sharmeen_Akter.jpeg',
    quote:
      'I invested in a property developed by Blue Sky Cit Landmark and it was one of the best decisions I’ve made. Elegant design, strong infrastructure, and great customer service.',
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-indigo-700 dark:text-indigo-300 mb-16 tracking-wide">
          Hear From Our Clients
        </h2>

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center cursor-default hover:shadow-2xl hover:scale-[1.03] transition-transform"
            >
              <div className="relative w-28 h-28 rounded-full ring-4 ring-indigo-400 ring-opacity-30 overflow-hidden mb-6 drop-shadow-lg">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <blockquote className="text-gray-800 dark:text-gray-200 italic text-lg leading-relaxed mb-8 px-4">
                “{t.quote}”
              </blockquote>

              <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300">
                {t.name}
              </h3>
              <p className="text-indigo-500 dark:text-indigo-400 mt-1 text-sm uppercase tracking-widest">
                {t.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;