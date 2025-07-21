'use client';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/components/Icons/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useRef } from 'react';
import { Autoplay } from 'swiper/modules';

// Social platforms data
const platforms = [
  {
    name: 'Blue Sky City',
    url: 'https://www.facebook.com/blueskycityltd',
    Icon: FacebookIcon,
    size: 'text-4xl',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/blueskycityltd/#',
    Icon: InstagramIcon,
    size: 'text-3xl',
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@BlueSkyCityLtd',
    Icon: YoutubeIcon,
    size: 'text-4xl',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/blueskycityltd',
    Icon: TwitterIcon,
    size: 'text-3xl',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/company/blueskycityltd',
    Icon: LinkedinIcon,
    size: 'text-4xl',
  },
];

const FlowUsSection = () => {
  const swiperRef = useRef<any>(null);

  // Function to get hover color class based on platform name
  const getHoverColorClass = (name: string) => {
    switch (name) {
      case 'Blue Sky City':
        return 'group-hover:text-blue-600';
      case 'Instagram':
        return 'group-hover:text-pink-500';
      case 'Youtube':
        return 'group-hover:text-red-600';
      case 'Twitter':
        return 'group-hover:text-sky-500';
      case 'Linkedin':
        return 'group-hover:text-blue-700';
      default:
        return '';
    }
  };

  return (
    <>
      {/* Desktop view */}
      <div className="hidden lg:block my-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 w-[80%] mx-auto">
          {platforms.map(({ name, url, Icon, size }, index) => (
            <a
              key={index}
              href={url}
              className="group bg-white py-8 rounded-2xl drop-shadow-2xl h-[150px] w-full flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div
                className={`${size} drop-shadow-lg transition duration-300 ${getHoverColorClass(
                  name
                )}`}
              >
                <Icon />
              </div>
              <h5 className="font-semibold pt-4 italic">{name}</h5>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile swiper view */}
      <div className="lg:hidden">
        <Swiper
          onSwiper={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          speed={1500}
          loop={true}
          spaceBetween={10}
          slidesPerView={2}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {platforms.map(({ name, url, Icon, size }, index) => (
            <SwiperSlide key={index} className="pb-20 pt-5">
              <a
                href={url}
                className="group bg-white py-8 rounded-2xl drop-shadow-xl h-[150px] w-full flex flex-col justify-center items-center"
              >
                <div
                  className={`${size} drop-shadow-lg transition duration-300 ${getHoverColorClass(
                    name
                  )}`}
                >
                  <Icon />
                </div>
                <h5 className="font-semibold pt-4 italic">{name}</h5>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FlowUsSection;
