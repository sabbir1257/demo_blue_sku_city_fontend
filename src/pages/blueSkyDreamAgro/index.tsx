// pages/blue-sky-dream-agro.tsx

'use client';

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlueSkyDreamAgro = () => {
  return (
    <>
      <Head>
        <title>Blue Sky Dream Agro | BlueSkyCityLtd</title>
        <meta
          name="description"
          content="Blue Sky Dream Agro is a leading agricultural company under BlueSkyCityLtd focusing on sustainable farming, modern technology, and food security."
        />
      </Head>

      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative bg-green-600 text-white py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blue Sky Dream Agro
            </h1>
            <p className="text-lg md:text-xl">
              Sustainable Agriculture for a Better Tomorrow
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-center">
              About Blue Sky Dream Agro
            </h2>
            <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
              Blue Sky Dream Agro is dedicated to transforming the agricultural
              industry through innovation, sustainable practices, and advanced
              technologies. We focus on organic farming, agri-business
              consulting, crop production, and rural development to ensure food
              security and environmental safety.
            </p>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Key Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Organic Farming',
                  desc: 'We promote eco-friendly farming practices.',
                },
                {
                  title: 'Agri-Tech Solutions',
                  desc: 'Utilizing modern tools for better yield.',
                },
                {
                  title: 'Consulting & Training',
                  desc: 'Support for farmers & agribusinesses.',
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 shadow-md rounded-xl"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Smart Irrigation',
                img: '/images/agro-irrigation.jpg',
              },
              {
                title: 'Eco-Farming Village',
                img: '/images/agro-village.jpg',
              },
              {
                title: 'Vertical Farming Units',
                img: '/images/agro-vertical.jpg',
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-700 text-white py-20 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with Blue Sky Dream Agro
          </h2>
          <p className="text-lg mb-6">
            Join our journey towards sustainable farming and food innovation.
          </p>
          <a
            href="/contact"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
          >
            Contact Us
          </a>
        </section>
      </main>
    </>
  );
};

export default BlueSkyDreamAgro;
