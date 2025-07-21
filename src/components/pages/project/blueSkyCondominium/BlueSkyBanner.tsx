import React from "react";
import Image from "next/image";
import banner from "../../../../../public/images/land3.jpg";

const BlueSkyBanner: React.FC = () => {
  return (
    <section className="relative w-full md:h-[500px] h-40">
      {/* Background Image */}
      <Image
        src={banner}
        alt="Blue Sky City"
        fill
        className="object-cover brightness-50" // dark overlay
        priority
      />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white md:text-4xl text-3xl font-bold uppercase text-center">
          Blue Sky Condominium
        </h1>
      </div>
    </section>
  );
};

export default BlueSkyBanner;