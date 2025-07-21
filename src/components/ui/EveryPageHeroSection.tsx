import React from 'react';

const EveryPageHeroSection = ({
  title,
  imageUrl = '/images/land.jpg',
}: {
  title: string;
  imageUrl?: string;
}) => {
  return (
    <section
      className="relative h-[60vh] w-full -mt-10 parallax"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute top-0 w-full h-full bg-[#000000af]">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="md:text-5xl text-3xl  uppercase font-bold tracking-wide text-gray-100 ">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default EveryPageHeroSection;
