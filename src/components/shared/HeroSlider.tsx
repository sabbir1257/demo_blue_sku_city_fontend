/* eslint-disable @next/next/no-img-element */
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';

type Slide = {
  title?: string;
  subtitle?: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
};

type HeroSliderProps = {
  slides: Slide[];
  heightClass?: string;
  widthClass?: string;
  overlayOpacity?: string;
};

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  heightClass = 'h-[75vh] md:h-[60vh] lg:h-[95vh]',
  widthClass = 'w-full',
  overlayOpacity = 'bg-black/30',
}) => {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [50, 0],
      transition: { duration: 0.8, ease: 'easeOut' },
    });
  }, [activeIndex, controls]);

  return (
    <section className={`relative ${widthClass} -mt-10`}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={`w-full ${heightClass}`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={`Slide ${index}`}
                width={1920}
                height={1080}
                className="object-cover w-full h-full"
                priority={index === 0}
              />

              <div
                className={`absolute h-full w-full ${overlayOpacity} top-0 right-0`}
              >
                <Container className="flex justify-start items-center w-full h-full">
                  <motion.div
                    className="flex flex-col gap-2 max-w-xl"
                    animate={controls}
                    initial={{ opacity: 0, y: 50 }}
                    key={
                      index === activeIndex
                        ? `active-${index}`
                        : `inactive-${index}`
                    }
                  >
                    {slide.subtitle && (
                      <h4 className="text-3xl text-gray-300 tracking-wide font-light">
                        {slide.subtitle}
                      </h4>
                    )}
                    {slide.title && (
                      <h1 className="lg:text-6xl text-3xl font-bold text-blue-800 mb-8 mt-3 uppercase">
                        {slide.title}
                      </h1>
                    )}
                    {slide.buttonLink && (
                      <Link href={slide.buttonLink}>
                        <Button className="bg-white rounded-md w-fit px-8 py-3">
                          {slide.buttonText || 'Learn More'}
                        </Button>
                      </Link>
                    )}
                  </motion.div>
                </Container>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
