import Image from 'next/image';
import React from 'react';

const facilityList = [
  {
    title: 'Electric',
    img: '/images/Living/electric-factory.png',
    alt: 'electric',
  },
  { title: 'Gas', img: '/images/Living/Gas1.png', alt: 'gas' },
  { title: 'Water', img: '/images/Living/Wasa1.png', alt: 'water' },
  { title: 'Call', img: '/images/Living/BTCL1.png', alt: 'call' },
];

const Facilities: React.FC = () => {
  return (
    <div>
      {/* Heading Section */}
      <div className="text-center my-12 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Our Facilities
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        <p className="text-center max-w-3xl mx-auto pt-6 pb-20 text-gray-700">
          Electricity, gas, water, telephone, sewerage system, police station
          and other needs will be met as per the company’s and the government
          rules and regulations. The company will be responsible for the
          completion of these tasks in contact with the authority concerned.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {facilityList.map((facility, index) => (
          <div
            key={index}
            className="flex flex-col items-center shadow-xl p-10 rounded-2xl transition-transform transform hover:scale-110 bg-white"
          >
            <div className="bg-blue-300 rounded-full h-[120px] w-[120px] flex justify-center items-center">
              <Image
                width={60}
                height={60}
                src={facility.img}
                alt={facility.alt}
                priority={index === 0} // optionally prioritize first image
              />
            </div>
            <h5 className="text-center text-2xl font-bold pt-3">{facility.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;