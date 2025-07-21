'use client';

import {
  CustomerCareIcon,
  PresentationIcon,
  PuzzleIcon,
} from '@/components/Icons/Icons';
import Container from '@/components/ui/Container';
import Separator from '@/components/ui/Separator';
import Image from 'next/image';
import React from 'react';

const WeAreBestSection: React.FC = () => {
  return (
    <div
      className="relative w-full h-[75vh] mb-[850px] md:mb-72 parallax"
      style={{
        backgroundImage: "url('/images/land3.jpg')",
      }}
    >
      <div className="absolute top-0 w-full h-full bg-[#203e7fd6]">
        <Container className="w-full h-full flex justify-center flex-col gap-5 items-center">
          <div className="text-white mt-10 flex flex-col items-center gap-5">
            <h1 className="text-4xl font-bold text-center">
              WE ARE ALWAYS BEST
            </h1>
            <Separator />
            <p className="text-xl text-gray-300">
              Our commitment to innovation, quality, and transparency defines
              our legacy at Blue Sky City.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md lg:-mb-64 -mb-[800px] my-10 w-full h-auto">
            <div className="flex lg:flex-row flex-col gap-5 justify-between w-full h-full">
              <div className="lg:flex-1 flex justify-center lg:items-center h-full">
                <div className="flex-1 p-5 flex flex-col items-center gap-8">
                  <div className="flex gap-5 items-start">
                    <PuzzleIcon className="text-6xl text-[#1e3a8a]" />
                    <div>
                      <h2 className="text-2xl font-semibold">
                        Innovative Planning
                      </h2>
                      <p className="paragraph mt-1">
                        We design future-forward communities that blend nature,
                        modernity, and sustainability.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-start">
                    <PresentationIcon className="text-6xl text-[#1e3a8a]" />
                    <div>
                      <h2 className="text-2xl font-semibold">
                        Transparent Process
                      </h2>
                      <p className="paragraph mt-1">
                        Every step of our development process is open, honest,
                        and community-focused.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-start">
                    <CustomerCareIcon className="text-6xl text-[#1e3a8a]" />
                    <div>
                      <h2 className="text-2xl font-semibold">
                        Client-First Approach
                      </h2>
                      <p className="paragraph mt-1">
                        We value trust and long-term relationships with all our
                        landowners, clients, and investors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full relative lg:rounded-r-md rounded-md overflow-hidden">
                <Image
                  src="/images/about.jpg"
                  alt="Chairman and Team at Blue Sky City site"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WeAreBestSection;