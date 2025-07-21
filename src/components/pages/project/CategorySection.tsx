'use client';

import React, { useState } from 'react';

type Category = {
  title: string;
  description: string;
};

const categories: Category[] = [
  { title: 'Bedroom', description: '3 spacious bedrooms in each unit' },
  { title: 'Dining Space', description: 'Dining & Family Living' },
  { title: 'Drawing Room', description: 'Multipurpose and stylish' },
  { title: 'Guest Bed', description: 'Enough balcony for fresh air' },
  { title: 'Kitchen', description: 'Well ventilated kitchen area' },
];

const CategorySection: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="p-6">
      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`border p-4 cursor-pointer transition ${
              selected === index ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-100'
            }`}
            onClick={() => setSelected(index)}
          >
            <h3 className="text-lg font-bold">{cat.title}</h3>
            <p className="text-sm text-gray-600">{cat.description}</p>
          </div>
        ))}
      </div>

      {/* Conditional Section */}
      {selected !== null && (
        <div className="mt-8 p-6 border rounded-lg shadow bg-white">
          <h2 className="text-xl font-semibold mb-4">
            Actions for: <span className="text-blue-600">{categories[selected].title}</span>
          </h2>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Edit</button>
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">View Details</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
