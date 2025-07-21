'use client';
import React from 'react';
import Image from 'next/image';
import banner from '../../../public/images/land3.jpg';
import EmbeddedMap from '@/components/shared/EmbeddedMap';
import FlowUsSection from '@/components/shared/followUs/FollowUs';
import VideoShowSection from '@/components/pages/project/VideoShowSection';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projects } from 'public/datas/flatProject/projects';

const SwiperComponent = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full md:h-[500px] h-40">
        <Image
          src={banner}
          alt="Blue Sky City"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white md:text-4xl text-3xl font-bold tracking-wider uppercase">
            Blue Sky Flat Project
          </h1>
        </div>
      </div>

      {/* Projects Section */}
      <main className="p-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            My Projects
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden shadow-lg transition group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="w-full h-[420px] object-cover"
                priority={true}
              />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-semibold text-blue-800">
                  {project.title}
                </h2>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-4 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="mb-4">{project.description}</p>
                <Link href={`/flatProject/${project.id}`}>
                  <button
                    aria-label={`Explore details about ${project.title}`}
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
                  >
                    Explore
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      {/* Video Section */}
      <VideoShowSection />
      {/* Follow Us Section */}
      <FlowUsSection />
      {/* Google Map Section */}
      <EmbeddedMap
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116843.50613203371!2d90.0865884!3d23.770207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebef35f05bfd%3A0x2db6405916fbd940!2sBlue%20Sky%20City%20Limited!5e0!3m2!1sen!2sbd!4v1748670430749!5m2!1sen!2sbd"
        title="Blue Sky City Limited Location"
        height="h-[400px]"
        imageSrc='/images/land.jpg'
      />
    </div>
  );
};

export default SwiperComponent;
