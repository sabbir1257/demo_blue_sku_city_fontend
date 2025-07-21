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

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          What Our Clients Say
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 relative mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {testimonial.title}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                “{testimonial.quote}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;