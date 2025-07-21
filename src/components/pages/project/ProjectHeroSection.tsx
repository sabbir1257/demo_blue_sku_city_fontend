'use client';

import React, { useEffect, useState } from 'react';
import { FaRoad, FaRulerCombined, FaCogs, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

type InfoItem = {
  title: string;
  value: string;
  icon: JSX.Element;
};

type PlotItem = {
  size: string;
  count: string;
};

const infoItems: InfoItem[] = [
  { title: "Total Area", value: "560", icon: <FaMapMarkedAlt size={28} /> },
  { title: "Total Sector", value: "4", icon: <FaCogs size={28} /> },
  { title: "Inside Road", value: "100ft, 60ft, 40ft, 25ft", icon: <FaRoad size={28} /> },
  { title: "Project Status", value: "Running", icon: <FaRulerCombined size={28} /> },
];

const plotItems: PlotItem[] = [
  { size: "2.5 Katha / 1800 Sq.Ft.", count: "654 Plots" },
  { size: "3.0 Katha / 2160 Sq.Ft.", count: "307 Plots" },
  { size: "4.0 Katha / 2880 Sq.Ft.", count: "200 Plots" },
  { size: "5.0 Katha / 3600 Sq.Ft.", count: "558 Plots" },
  { size: "Inequable", count: "112 Plots" },
];

const backgroundImages = [
  '/images/land.jpg',
  '/images/land1.jpg',
  '/images/land3.jpg',
];

const ProjectHeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slider */}
      {backgroundImages.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 transform ${
            idx === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-white text-center px-6 py-10">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-10"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Blue Sky City
        </motion.h1>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
          {infoItems.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="mb-3 text-blue-300">{item.icon}</div>
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-white text-sm mt-2">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Plot Sizes */}
        <motion.div
          className="mt-48 bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-4xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Plot Sizes & Availability</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plotItems.map((plot, idx) => (
              <div
                key={idx}
                className="border border-blue-300 p-4 rounded-xl text-white text-center bg-white/5 hover:bg-blue-600/20 transition-all"
              >
                <p className="font-bold">{plot.size}</p>
                <p className="text-sm">{plot.count}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHeroSection;
