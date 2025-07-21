'use client';
import Image from 'next/image';
import React from 'react';

// Certificate item type
type CertificateItem = {
  title: string;
  image: string;
};

// Example data (you can fetch from API or CMS later)
const certificates: CertificateItem[] = [
  {
    title: "National Housing Authority's Certificate",
    image: "/images/certificate.png",
  },
  {
    title: "Land Ownership Certificate",
    image: "/images/certificate.png",
  },
  {
    title: "Environmental Clearance Certificate",
    image: "/images/certificate.png",
  },
  {
    title: "Fire Safety Certificate",
    image: "/images/certificate.png",
  },
  {
    title: "Building Plan Approval",
    image: "/images/certificate.png",
  },
];

const CertificatePage: React.FC = () => {
  return (
    <div className="px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certificates.map((item, index) => (
          <div
            key={index}
            id={`certificate-${index + 1}`}
            className="relative w-full h-[350px] sm:h-[450px] rounded-lg overflow-hidden group"
          >
            <Image
              width={500}
              height={500}
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 inset-0 bg-blue-900 flex items-center px-6 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 h-14">
              <p className="text-white text-base sm:text-xl font-semibold">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatePage;