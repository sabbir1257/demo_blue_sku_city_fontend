'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Product = {
  title: string;
  image: string;
  description: string;
  link: string;
};

const products: Product[] = [
  {
    title: 'Blue Sky City',
    image: '/images/blue_sky_city.jpg',
    description:
      'Discover premium plots located in prime areas, perfect for both residential and commercial development.',
    link: '/project',
  },
  {
    title: 'Blue Sky Flat Project',
    image: '/images/flat_project.png',
    description:
      'Experience luxurious living with modern apartments featuring top-tier amenities. potential',
    link: '/flatProject',
  },
  {
    title: 'Blue Sky Condominium',
    image: '/images/condominium.jpeg',
    description:
      'Invest in the stock market with expert insights and maximize your financial potential.',
    link: '/project/blueSkyCondominium',
  },
];

const ProductSection: React.FC = () => {
  return (
    <div className="py-16 px-6 max-w-[1250px] mx-auto">
      <div className="text-center my-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Explore Our Projects
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 group"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Hover Button */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <Link href={product.link}>
                <span className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                  View Details
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;