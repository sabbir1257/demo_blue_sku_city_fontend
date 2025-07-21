'use client';

import React from 'react';
import HeroSlider from '@/components/shared/HeroSlider';
import CallToAction from '@/components/pages/home/CallToAction';
import TestimonialSlider from '@/components/pages/home/TestimonialSlider';
import Gallery from '@/components/shared/Gallery';
import ActivitiesSection, {
  Activity,
} from '@/components/pages/business/Activities';
import Features, { Facility } from '@/components/pages/business/Features';
import EmbeddedMap from '@/components/shared/EmbeddedMap';
import OurServices from '@/components/pages/business/OueService';
import FlowUsSection from '@/components/shared/followUs/FollowUs';
import RoomsAndSuites from '@/components/pages/business/RoomsAndSuites';

const heroSlides = [
  {
    title: 'RELAX IN NATURE-RICH SYLHET',
    subtitle: 'Where luxury meets serenity',
    image: '/images/RELAX_IN_NATURE_RICH_SYLHET.jpeg',
    buttonText: 'BOOK NOW',
    buttonLink: '/booking',
  },
  {
    title: 'EXPERIENCE THE ULTIMATE ESCAPE',
    subtitle: 'Indulge in comfort and nature',
    image: '/images/EXPERIENCE_THE_ULTIMATE_ESCAPE.jpeg',
    buttonText: 'EXPLORE ROOMS',
    buttonLink: '/rooms',
  },
  {
    title: 'SYLHET LUXURY REDEFINED',
    subtitle: 'Tailored stays for unforgettable moments',
    image: '/images/SYLHET_LUXURY_REDEFINED.jpeg',
    buttonText: 'CONTACT US',
    buttonLink: '/contact',
  },
];

const boardMembers: { name: string; image: string }[] = [
  { name: 'Rainforest Walkway', image: '/images/Rainforest_Walkway.jpeg' },
  { name: 'Natural Spring Spa', image: '/images/Natural_Spring_Spa.jpeg' },
  { name: 'Floating Restaurant', image: '/images/Floating_Restaurant.jpeg' },
  { name: 'Tea Garden Viewpoint', image: '/images/Tea_Garden_Viewpoint.jpeg' },
];

const roomsData = [
  {
    title: 'Cox Hill View Room',
    image: '/images/Sylhet_Hill_View_Room.jpeg',
    size: '38 sqm',
    bed: '1 King Bed',
    category: 'Scenic',
    features: ['Hill View Balcony', 'Rain Shower', 'Wi-Fi', 'LED TV'],
  },
  {
    title: 'Nature Deluxe Suite',
    image: '/images/Nature_Deluxe_Suite.jpeg',
    size: '52 sqm',
    bed: '1 King Bed + Sofa',
    category: 'Deluxe',
    features: ['Private Deck', 'Jacuzzi', 'Garden View', 'Mini Bar'],
  },
  {
    title: 'Eco Family Room',
    image: '/images/Eco_Family_Room.jpeg',
    size: '47 sqm',
    bed: '2 Double Beds',
    category: 'Family',
    features: ['Child Safe', 'Eco Decor', 'Spacious Bath', 'Workstation'],
  },
];

const hotelAndRestaurantFacilities: Facility[] = [
  {
    id: 'airport_pickup',
    image: '/images/Airport_Pick_Up.jpeg',
    title: 'Airport Pick Up',
    description:
      'Enjoy seamless airport transfer service for a stress-free trip.',
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
    id: 'nature_trail',
    image: '/images/Nature_Trail_Walks.jpeg',
    title: 'Nature Trail Walks',
    description: 'Explore hidden trails and scenic hill routes with a guide.',
    category: 'Hotel',
  },
  {
    id: 'tea_garden_tours',
    image: '/images/Tea_Garden_Tours.jpeg',
    title: 'Tea Garden Tours',
    description: 'Walk through tea estates and learn the art of tea plucking.',
    category: 'Hotel',
  },
  {
    id: 'spring_spa',
    image: '/images/Spring_Spa_Therapy.jpeg',
    title: 'Spring Spa Therapy',
    description: 'Natural hot spring therapy to relax and detox.',
    category: 'Hotel',
  },
  {
    id: 'boat_rides',
    image: '/images/Boat_Rides_in_River_Surma.jpeg',
    title: 'Boat Rides in River Surma',
    description: 'Glide through crystal clear waters in traditional boats.',
    category: 'Resort',
  },
  {
    id: 'hilltop_picnic',
    image: '/images/Hilltop_Picnic_Spot.jpeg',
    title: 'Hilltop Picnic Spot',
    description: 'Perfect family picnic spots with 360° views.',
    category: 'Resort',
  },
  {
    id: 'sunset_viewing',
    image: '/images/Sunset_Viewing_Tower.jpeg',
    title: 'Sunset Viewing Tower',
    description: 'Capture magical sunsets from our elevated towers.',
    category: 'Resort',
  },
];

const BlueSkyCityDreamHotelAndResortSylhet: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSlider
        slides={heroSlides}
        heightClass="h-[100vh]"
        widthClass="w-full"
      />
      <section className="py-24 px-6 sm:px-10 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6 relative inline-block">
            Experience the Beauty of Cox
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Nestled in the heart of Cox,{' '}
            <span className="font-semibold text-blue-600">
              Blue Sky Dream Hotel & Resorts
            </span>{' '}
            offers an escape unlike any other. Surrounded by lush tea gardens,
            pristine nature, and tranquil hill views, our resort is your ideal
            retreat.
          </p>
        </div>
      </section>
      <RoomsAndSuites rooms={roomsData} />
      <Features facilities={hotelAndRestaurantFacilities} />
      <Gallery title="Cox's Finest Attractions" members={boardMembers} />
      <OurServices />
      <ActivitiesSection activities={sampleActivities} />
      <section className="py-20 px-6 md:px-20 bg-white">
        <TestimonialSlider />
      </section>
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Follow Us
        </h2>
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

export default BlueSkyCityDreamHotelAndResortSylhet;
