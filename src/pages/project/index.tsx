'use client';

import React from 'react';

import ProjectHeroSection from '@/components/pages/project/ProjectHeroSection';
import Facilities from '@/components/pages/project/Facilities';
import VideoShowSection from '@/components/pages/project/VideoShowSection';
import Living from '@/components/pages/project/Living';
import Gallery from '@/components/shared/Gallery';
import WhyChooseUs from '@/components/pages/home/WhyChooseUs';
import TermsAndConditions from '@/components/pages/project/TermsAndConditions';
import EmbeddedMap from '@/components/shared/EmbeddedMap';
import Image from 'next/image';

// Define the Member type matching GalleryProps
type Member = {
  image: string;
  name?: string;
  position?: string;
};

const Project: React.FC = () => {
  const images: Member[] = [
    { image: '/images/project7.jpg', name: 'Project Image 1' },
    { image: '/images/project2.jpg', name: 'Project Image 2' },
    { image: '/images/project3.jpg', name: 'Project Image 3' },
    { image: '/images/project4.jpg', name: 'Project Image 4' },
    { image: '/images/project5.jpg', name: 'Project Image 5' },
    { image: '/images/project6.jpg', name: 'Project Image 6' },
    { image: '/images/project7.jpg', name: 'Project Image 7' },
    { image: '/images/project8.jpg', name: 'Project Image 8' },
  ];

  return (
    <section>
      <ProjectHeroSection />
      <Facilities />
      <VideoShowSection />
      <Living />
      <Gallery title="Project Gallery" members={images} />
      <div className="w-[1250px] mx-auto p-4">
        <Image
          className="w-full rounded-lg shadow-lg"
          src="/images/blue_sky_city_layout_img.jpg"
          alt="Blue Sky City Layout Plan"
          width={1250}
          height={700}
          priority />
        <div className="mt-6 flex justify-center">
          <a
            href="/images/blue_sky_city_layout_img.jpg"
            download
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-colors duration-300"
          >
            Download Layout Plan
          </a>
        </div>
      </div>

      <WhyChooseUs />
      <TermsAndConditions />
      <div>
        <div className="text-center my-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Blue Sky City Limited Location{' '}
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>
        <EmbeddedMap
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116843.50613203371!2d90.0865884!3d23.770207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebef35f05bfd%3A0x2db6405916fbd940!2sBlue%20Sky%20City%20Limited!5e0!3m2!1sen!2sbd!4v1748670430749!5m2!1sen!2sbd"
          title="Blue Sky City Limited Location"
          height="h-[400px]" // optional
        />
      </div>
    </section>
  );
};

export default Project;
