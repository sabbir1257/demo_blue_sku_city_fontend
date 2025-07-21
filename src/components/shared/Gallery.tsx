'use client';
import Image from 'next/image';
import React from 'react';
import Container from '@/components/ui/Container';

type Member = {
  name?: string;
  image: string;
  position?: string;
};

type GalleryProps = {
  title?: string; // ✅ Optional title
  members: Member[];
};

const Gallery: React.FC<GalleryProps> = ({ title, members }) => {
  return (
    <Container>
      <div className="py-6 text-gray-900">
        {/* ✅ Conditional Title Section */}
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              {title}
            </h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full" />
          </div>
        )}

        {/* ✅ Reverse for Latest Image on Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden h-80 md:h-[320px] rounded-xl"
            >
              <Image
                src={member.image}
                alt={member.name || 'Gallery image'}
                width={400}
                height={320}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white text-lg font-bold">{member.name}</h3>
                {member.position && (
                  <p className="text-white">{member.position}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
