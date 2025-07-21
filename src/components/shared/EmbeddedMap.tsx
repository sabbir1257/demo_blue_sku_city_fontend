'use client';

import React from "react";
import Image from "next/image";

type EmbeddedMapProps = {
  src: string;
  title?: string;
  className?: string;
  height?: string; // e.g. "h-[500px]", "h-[70vh]"
  imageSrc?: string; // optional image
  imageAlt?: string;
};

const EmbeddedMap: React.FC<EmbeddedMapProps> = ({
  src,
  title = "Embedded Map",
  className = "",
  height = "h-[500px]",
  imageSrc,
  imageAlt = "Project Image",
}) => {
  const withImage = !!imageSrc;

  return (
    <div className={`w-full flex ${withImage ? 'flex-col lg:flex-row' : 'justify-center'} ${className}`}>
      {/* Optional Left Side Image */}
      {withImage && (
        <div className={`relative w-full lg:w-1/2 ${height}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-none lg:rounded-l-lg shadow-lg"
            priority
          />
        </div>
      )}

      {/* Right Side or Full Map */}
      <div className={`${withImage ? 'w-full lg:w-1/2' : 'w-full'} ${height}`}>
        <div className="relative w-full h-full">
          <iframe
            src={src}
            title={title}
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0 rounded-none lg:rounded-r-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EmbeddedMap;
