import { PlayIcon } from '@/components/Icons/Icons';
import Image from 'next/image';
import React, { useState } from 'react';

const VideoShowSection: React.FC = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <section className="py-16 text-white mx-4 lg:mx-0">
      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
             Blue Sky City
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full" />
        </div>

        {/* Video Container */}
        <div className="relative">
          {!isVideoVisible ? (
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
          ) : (
            <div className="relative w-full h-[480px] md:h-[500px] rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
 src="https://www.youtube.com/embed/kkRh0QlCEA0?si=FlZCQntO9lKFN4s3"
                 frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Why Choose Blue Sky City"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoShowSection;
