'use client';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Separator from '@/components/ui/Separator';
import Image from 'next/image';
import React from 'react';

const OurHistories: React.FC = () => {
  return (
    <Container className="my-10">
      <div className="flex items-center lg:flex-row flex-col gap-10">
        <h1 className="title1 font-bold w-[25ch] md:text-end text-center">
          High-Quality Market Experinces
        </h1>
        <div className="w-1 h-[100px] rounded-md bg-gray-400 lg:block hidden"></div>
        <p className="paragraph lg:w-[90ch] text-justify">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today still wanted by the government they survive as
          soldiers of fortune to ever wondered the east side to a deluxe
          apartment.
        </p>
        <Button className="bg-blue-800 text-white py-3 rounded-md w-[200px]">
          CONTACT US
        </Button>
      </div>

      <div className="my-10 items-center flex lg:flex-row flex-col gap-8">
        <div className="relative w-full max-h-[410px] h-full rounded-md overflow-hidden">
          <Image
            src="/images/land1.jpg"
            alt="land"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="title">SHORT HISTORY</h1>
          <Separator />
          <p className="paragraph mt-5 text-justify">
            Our journey started by Mr. Harun-Nur-Rashid, Managing Director of Blue Sky Dream City Limited, in 2022 as a housing company. We have a vision to provide the best planned urban living near Dhaka with full support & facilities. Our thought process to create a dream address near Dhaka, which is now very tough for many inside Dhaka for many of us. The west part of Dhaka is the next one to develop, mostly with the latest infrastructure in Bangladesh. So we picked the opportunity to build such a great housing project and build a better society.
          </p>
          <Button className="bg-gray-100 border px-8 py-3 shadow-sm mt-10 w-fit rounded-md">
            LEARN MORE
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default OurHistories;