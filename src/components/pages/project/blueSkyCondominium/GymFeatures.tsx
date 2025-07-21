import React from "react";

const topFeatures = [
  "1 Outdoor Gym",
  "9 Indoor Gyms",
  "Professional Trainer",
  "Laminated Wood Floor",
  "Rubber Floor Area for Free Weights",
  "Locker Space",
];

const bottomFeatures = [
  "Professional Fitness Equipment",
  "State-of-the-art Treadmills",
  "Ellipticals",
  "Cycles",
  "Multi Training Stations",
  "Free Weights",
  "Yoga and Pilates Areas & Equipment",
];

const GymFeatures: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 lg:px-16">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Gym</h2>

      {/* Top Row */}
      <ul className="flex flex-wrap gap-x-8 gap-y-4 border-b pb-6 list-none">
        {topFeatures.map((feature, index) => (
          <li
            key={index}
            className="text-sm text-gray-800 whitespace-nowrap flex items-center gap-2"
          >
            <span className="text-green-600">✅</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Bottom Row */}
      <ul className="flex flex-wrap gap-x-8 gap-y-4 pt-6 list-none">
        {bottomFeatures.map((feature, index) => (
          <li
            key={index}
            className="text-sm text-gray-800 whitespace-nowrap flex items-center gap-2"
          >
            <span className="text-green-600">✅</span>
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GymFeatures;