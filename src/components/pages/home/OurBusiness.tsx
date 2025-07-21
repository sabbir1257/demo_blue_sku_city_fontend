/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';

type Business = {
  title: string;
  description: string;
  image: string;
  points: string[];
  link: string;
};

const businesses: Business[] = [
  {
    title: 'Blue Sky Dream Hotel and Resorts',
    description:
      'We help clients identify, acquire, and develop properties tailored to their goals. From urban planning to final delivery, we manage the full lifecycle.',
    image: '/images/gallery2.jpg',
    points: [
      'Full property lifecycle management',
      'Zoning and permit handling',
      'Risk mitigation and environmental planning',
    ],
    link: '/blyeSkyDreamHotelAndResorts',
  },
  {
    title: 'Blue Sky Dream Society',
    description:
      'Maximize returns with expert insights on real estate trends, risks, and capital allocation. We help you build a sustainable investment portfolio.',
    image: '/images/blue_sky_city_dream_socity.jpg',
    points: [
      'Market trend analysis',
      'Capital allocation strategies',
      'Performance tracking and adaptation',
    ],
    link: '/blyeSkyDreamSociety',
  },
];

const OurBusiness: React.FC = () => {
  return (
    <Container className="my-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-blue-900">Our Business</h2>
        <div className="w-20 h-1 mx-auto mt-3 bg-blue-600 rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We offer a range of real estate and business services tailored to help
          you grow, invest, and build smarter.
        </p>
      </div>

      <div className="space-y-20">
        {businesses.map((biz, index) => (
          <div
            key={biz.title}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-8`}
          >
            <Image
              width={500}
              height={300}
              src={biz.image}
              alt={biz.title}
              className="md:w-[500px] w-full h-[350px] md:h-[500px] object-cover rounded-lg shadow transform transition duration-500 hover:scale-105"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-blue-800">
                {biz.title}
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {biz.description}
              </p>

              {biz.points.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
                  {biz.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              <Link href={biz.link} passHref>
                <p className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-all duration-300">
                  Explore
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OurBusiness;
