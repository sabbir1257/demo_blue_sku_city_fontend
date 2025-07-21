import { PlayIcon } from '@/components/Icons/Icons';
import Image from 'next/image';
import React, { useState } from 'react';

const AboutVideo: React.FC = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };

  const handleClose = () => {
    setIsVideoVisible(false);
  };

  return (
    <section className="py-16 text-white mx-4 lg:mx-0">
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Video Thumbnail */}
        <div className="relative w-full h-[480px] md:h-[500px] bg-gray-300 rounded-lg overflow-hidden">
          <Image
            src="https://yt3.googleusercontent.com/KADBiqHNFunhKFi2PHYEFGN4j68nDvao4JPUFaEnZyULuIqrgD1G83CgtsM1yiUAkJ-n7zlSoJk=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            alt="Video Thumbnail"
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            className="object-cover rounded-lg filter blur-sm transition-all duration-300"
            priority
          />
          <button
            aria-label="Play video"
            onClick={handlePlayClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-4 text-white hover:bg-opacity-70 transition"
          >
            <PlayIcon className="w-14 h-14" />
          </button>
        </div>

        {/* Modal Video Player */}
        {isVideoVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/kkRh0QlCEA0?autoplay=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Why Choose Blue Sky City"
              />
              <button
                aria-label="Close video"
                onClick={handleClose}
                className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutVideo;
