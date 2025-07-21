'use client';

import { MedalIcon, StarIcon, TargetIcon } from '@/components/Icons/Icons';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AboutVideo from './AboutVideo';

interface AboutLink {
  icon: React.ReactNode;
  title: string;
  path: string;
}

const aboutLinks: AboutLink[] = [
  {
    icon: <StarIcon />,
    title: 'Vision',
    path: '/about/#OurVision',
  },
  {
    icon: <MedalIcon />,
    title: 'Missions',
    path: '/about/#OurMission',
  },
  {
    icon: <TargetIcon />,
    title: 'Goals',
    path: '/about/#OurStrategicGoals',
  },
];

const AboutCompany: React.FC = () => {
  return (
    <Container className="py-20 flex lg:flex-row flex-col items-center gap-10">
      <div className="flex-1 m-5">
        <Image
          width={600} // increased width for better quality on larger screens
          height={400} // set height to maintain aspect ratio
          className="w-full h-full object-cover rounded-md"
          src="/images/about.jpg"
          alt="land"
          priority
        />
      </div>
      {/* <div className="flex-1 m-5">
        <AboutVideo />
      </div> */}
      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="text-center my-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            About Our Company
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>
        <p className="text-center mt-5 paragraph max-w-xl">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today still wanted by the government they survive as
          soldiers of fortune to a deluxe apartment in the sky moving on up to
          the east side a family.
          <br />
          <br />
          The government they survive as soldiers of fortune baby if you&apos;ve
          ever wondered the east side to a deluxe apartment.
        </p>
        <div className="w-full mt-8">
          <hr />
          <div className="grid mt-5 grid-cols-3 divide-x-2 text-gray-700">
            {aboutLinks.map((data, i) => (
              <Link
                key={i}
                href={data.path}
                className="flex flex-col items-center py-5 group"
              >
                <div className="text-7xl text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                  {data.icon}
                </div>
                <h1 className="text-xl font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  {data.title}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutCompany;
