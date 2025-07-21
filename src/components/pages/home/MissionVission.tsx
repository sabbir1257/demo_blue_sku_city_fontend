'use client';

import Image from 'next/image';
import React from 'react';

const MissionVision: React.FC = () => {
  const missionPoints = [
    'Planned Urbanization – Roads, drainage, playgrounds, markets, schools, mosques, and essential facilities as part of every project.',
    'Affordable Access – Ideal for middle-income families and working professionals through flexible installment options.',
    'Community-Oriented Design – Creating healthy, connected neighborhoods that strengthen social and family ties.',
    'Complete Client Support – End-to-end assistance from plot selection to final ownership, with full legal transparency.',
  ];

  const visionPoints = [
    'Close to Dhaka, Without the Chaos – Strategically located in western Dhaka, just minutes from the city, yet peaceful and spacious.',
    'Emerging Infrastructure Zone – This region is poised for rapid growth due to metro rail, highways, and flyovers under development.',
    'Future-Ready Design – Smart planning with scope for digital utilities, green spaces, and essential urban services.',
    'A Dream Worth Investing In – Whether for living or future resale, your investment today will serve as your legacy tomorrow.',
  ];

  return (
    <section className="py-28 px-4 md:px-12 bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* Section: Mission */}
      <SectionBlock
        id="OurMission"
        title="Our Mission"
        image="/images/land1.jpg"
        quote="To develop smart, sustainable communities that offer a complete and modern urban living experience."
        description="At Blue Sky Dream City Ltd., our mission is to build more than homes—we create connected, safe, and future-ready communities."
        subtext="We deliver legally transparent, accessible residential solutions that ensure long-term value and livability."
        points={missionPoints}
        reverse={false}
      />

      {/* Section: Vision */}
      <SectionBlock
        id="OurVision"
        title="Our Vision"
        image="/images/land1.jpg"
        quote="To become a model of future-ready residential development in Bangladesh, where life is secure, affordable, and fulfilling."
        description="We envision modern townships that balance access, nature, and digital infrastructure."
        subtext="A lifestyle alternative to chaotic urban living, without sacrificing convenience or opportunity."
        points={visionPoints}
        reverse={true}
      />
    </section>
  );
};

// Reusable Section Block
type SectionBlockProps = {
  id: string;
  title: string;
  image: string;
  quote: string;
  description: string;
  subtext: string;
  points: string[];
  reverse?: boolean;
};

const SectionBlock: React.FC<SectionBlockProps> = ({
  id,
  title,
  image,
  quote,
  description,
  subtext,
  points,
  reverse = false,
}) => {
  return (
    <div id={id} className="mb-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">{title}</h2>
        <div className="w-24 h-1 mx-auto mt-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full"></div>
      </div>

      {/* Content */}
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row ${
          reverse ? 'md:flex-row-reverse' : ''
        } items-center gap-10  backdrop-blur-lg  p-6 md:p-12 `}
      >
        {/* Image */}
        <div className="flex-1 overflow-hidden rounded-2xl ">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="object-cover w-full h-full rounded-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-gray-700">
          <blockquote className="text-xl md:text-2xl font-semibold italic text-blue-800 border-l-4 border-blue-500 pl-4 mb-6">
            “{quote}”
          </blockquote>
          <p className="text-base md:text-lg mb-3">{description}</p>
          <p className="text-base md:text-lg mb-6">{subtext}</p>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <FeatureItem key={index} text={point} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Feature Item
type FeatureItemProps = {
  text: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
  <li className="flex items-start gap-3 group">
    <span className="text-blue-500 text-xl mt-1 group-hover:scale-125 transition-transform duration-200">✅</span>
    <span className="text-base md:text-lg group-hover:text-blue-800 transition-colors duration-200">
      {text}
    </span>
  </li>
);

export default MissionVision;