'use client';

import React from 'react';
import HeroSlider from '@/components/shared/HeroSlider';
import CallToAction from '@/components/pages/home/CallToAction';
import TestimonialSlider from '@/components/pages/home/TestimonialSlider';
import Gallery from '@/components/shared/Gallery';
import ActivitiesSection, { Activity } from '@/components/pages/business/Activities';
import Features, { Facility } from '@/components/pages/business/Features';
import EmbeddedMap from '@/components/shared/EmbeddedMap';
import OurServices from '@/components/pages/business/OueService';
import FlowUsSection from '@/components/shared/followUs/FollowUs';
import RoomsAndSuites from '@/components/pages/business/RoomsAndSuites';

const heroSlides = [
  {
    title: 'We IMPROVE YOUR SALES EFFICIENCY',
    subtitle: 'The government they survive article of fortune',
    image: '/images/Hotel-Resorts1.jpg',
    buttonText: 'CONTACT US',
    buttonLink: '/contact',
  },
  {
    title: 'GROW YOUR BUSINESS WITH US',
    subtitle: 'Success is not by chance, it’s by choice',
    image: '/images/Hotel-Resorts2.jpg',
    buttonText: 'GET STARTED',
    buttonLink: '/get-started',
  },
  {
    title: 'EMPOWER YOUR BRAND',
    subtitle: 'Creating strategies that drive results',
    image: '/images/Hotel-Resorts3.jpg',
    buttonText: 'LEARN MORE',
    buttonLink: '/about',
  },
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
];

const roomsData = [
  {
    title: 'Deluxe King Room',
    image: '/images/Deluxe_King_Room.jpeg',
    size: '35 sqm',
    bed: '1 King Bed',
    category: 'Deluxe',
    features: ['Free Wi-Fi', 'City View', 'Ensuite Bathroom', 'Air Conditioning'],
  },
  {
    title: 'Executive Suite',
    image: '/images/Executive_Suite.jpeg',
    size: '50 sqm',
    bed: '1 King Bed + Sofa',
    category: 'Suite',
    features: ['Private Balcony', 'Mini Bar', 'Lounge Area', 'Smart TV'],
  },
  {
    title: 'Family Room',
    image: '/images/Family_Room.jpeg',
    size: '45 sqm',
    bed: '2 Queen Beds',
    category: 'Family',
    features: ['Child Friendly', 'Kitchenette', 'Bathtub', 'Work Desk'],
  },
];

const hotelAndRestaurantFacilities: Facility[] = [
  {
    id: 'airport_pickup',
    image: '/images/Airport_Pick_Up.jpeg',
    title: 'Airport Pick Up',
    description: 'Enjoy seamless airport transfer service for a stress-free trip.',
    category: 'Hotel',
  },
  {
    id: 'fitness_center',
    image: '/images/Fitness_Center.jpeg',
    title: 'Fitness Center',
    description: 'Top-notch gym facilities to keep you fit during your stay.',
    category: 'Hotel',
  },
  {
    id: 'rooftop_pool',
    image: '/images/Rooftop_Swimming_Pool.jpeg',
    title: 'Rooftop Swimming Pool',
    description: 'Swim with skyline views at our stunning rooftop pool.',
    category: 'Hotel',
  },
  {
    id: 'fine_dining',
    image: '/images/Fine_Dining.jpeg',
    title: 'Fine Dining',
    description: 'Enjoy gourmet meals crafted by top chefs.',
    category: 'Restaurant',
  },
  {
    id: 'coffee_lounge',
    image: '/images/Coffee_Lounge.jpeg',
    title: 'Coffee Lounge',
    description: 'Sip premium brews in a cozy, relaxing environment.',
    category: 'Restaurant',
  },
  {
    id: 'live_music',
    image: '/images/Live_Music_Nights.jpg',
    title: 'Live Music Nights',
    description: 'Evenings with live performances and a vibrant ambiance.',
    category: 'Restaurant',
  },
];

const sampleActivities: Activity[] = [
  {
    id: 'morning_yoga',
    image: '/images/Morning_Yoga_Sessions.jpeg',
    title: 'Morning Yoga Sessions',
    description: 'Start your day energized with guided yoga classes in our serene garden.',
    category: 'Hotel',
  },
  {
    id: 'city_tours',
    image: '/images/City_Tours_Excursions.jpeg',
    title: 'City Tours & Excursions',
    description: 'Explore the local culture and attractions with our curated city tours.',
    category: 'Hotel',
  },
  {
    id: 'spa_relaxation',
    image: '/images/Spa_Wellness.jpeg',
    title: 'Spa & Wellness',
    description: 'Unwind with rejuvenating spa treatments designed to relax your body and mind.',
    category: 'Hotel',
  },
  {
    id: 'beach_volleyball',
    image: '/images/Beach_Volleyball.jpeg',
    title: 'Beach Volleyball',
    description: 'Enjoy fun and energetic beach volleyball games with family and friends.',
    category: 'Resort',
  },
  {
    id: 'water_sports',
    image: '/images/Water_Sports.jpeg',
    title: 'Water Sports',
    description: 'Try exciting water sports including jet skiing, kayaking, and paddleboarding.',
    category: 'Resort',
  },
  {
    id: 'sunset_cruise',
    image: '/images/Sunset_Cruise.jpeg',
    title: 'Sunset Cruise',
    description: 'Relax on a scenic sunset cruise offering breathtaking ocean views.',
    category: 'Resort',
  },
];

const BlueSkyCityDreamHotelAndResortDhaka: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSlider slides={heroSlides} heightClass="h-[100vh]" widthClass="w-full" />
      <section className="py-24 px-6 sm:px-10 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6 relative inline-block">
            Welcome to Your Dream Escape
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            At <span className="font-semibold text-blue-600">Blue Sky Dream Hotel & Resorts</span>, we offer the finest
            hospitality experience amid breathtaking nature views. Whether for business or leisure, our world-class
            amenities and tranquil ambiance make every moment unforgettable.
          </p>
        </div>
      </section>
      <RoomsAndSuites rooms={roomsData} />
      <Features facilities={hotelAndRestaurantFacilities} />
      <Gallery title="Features & Amenities" members={boardMembers} />
      <OurServices />
      <ActivitiesSection activities={sampleActivities} />
      <section className="py-20 px-6 md:px-20 bg-white">
        <TestimonialSlider />
      </section>
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Follow Us</h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
      </div>
      <FlowUsSection />
       <EmbeddedMap
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116843.50613203371!2d90.0865884!3d23.770207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebef35f05bfd%3A0x2db6405916fbd940!2sBlue%20Sky%20City%20Limited!5e0!3m2!1sen!2sbd!4v1748670430749!5m2!1sen!2sbd"
      title="Blue Sky City Limited Location"
      height="h-[400px]" // optional
    />
      <CallToAction />
    </div>
  );
};

export default BlueSkyCityDreamHotelAndResortDhaka;