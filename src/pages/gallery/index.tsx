'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection';
import Gallery from '@/components/shared/Gallery';

const images: string[] = [
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
  '/images/about.jpg',
];

const boardMembers: { name: string; image: string }[] = [
  { name: 'Tree House', image: '/images/Tree_House.jpeg' },
  { name: 'Cineplex', image: '/images/Cineplex.jpeg' },
  { name: 'Wave Pool', image: '/images/Wave_Pool.jpeg' },
  { name: 'Swimming Pool', image: '/images/Swimming_Pool.jpeg' },
  { name: 'Organic Thai Spa', image: '/images/Organic _Thai_Spa.jpeg' },
  { name: 'Golf Club', image: '/images/Golf_Club.jpeg' },
  { name: 'Aventure Camp', image: '/images/Adventure_Camp.jpeg' },
  { name: 'Kayaking', image: '/images/Kayaking.jpeg' },
  { name: 'Tree House', image: '/images/Tree_House.jpeg' },
  { name: 'Cineplex', image: '/images/Cineplex.jpeg' },
  { name: 'Wave Pool', image: '/images/Wave_Pool.jpeg' },
  { name: 'Swimming Pool', image: '/images/Swimming_Pool.jpeg' },
  { name: 'Organic Thai Spa', image: '/images/Organic _Thai_Spa.jpeg' },
  { name: 'Golf Club', image: '/images/Golf_Club.jpeg' },
  { name: 'Aventure Camp', image: '/images/Adventure_Camp.jpeg' },
  { name: 'Kayaking', image: '/images/Kayaking.jpeg' },
  { name: 'Tree House', image: '/images/Tree_House.jpeg' },
  { name: 'Cineplex', image: '/images/Cineplex.jpeg' },
  { name: 'Wave Pool', image: '/images/Wave_Pool.jpeg' },
  { name: 'Swimming Pool', image: '/images/Swimming_Pool.jpeg' },
  { name: 'Organic Thai Spa', image: '/images/Organic _Thai_Spa.jpeg' },
  { name: 'Golf Club', image: '/images/Golf_Club.jpeg' },
  { name: 'Aventure Camp', image: '/images/Adventure_Camp.jpeg' },
  { name: 'Kayaking', image: '/images/Kayaking.jpeg' },
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
            <EveryPageHeroSection title="Gallery" imageUrl="/images/landing.jpg" />
      
      <Gallery members={boardMembers} />
    </div>
);
};

export default GalleryPage;
