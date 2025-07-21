'use client';

import Image from 'next/image';
import React from 'react';

type TeamMember = {
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedin?: string;
};

const team: TeamMember[] = [
  {
    name: 'Md. Abdur Rahim',
    title: 'Chairman',
    image: '/images/man1.jpg',
    bio: 'Over 25 years in real estate leadership, committed to legal transparency and community building.',
    linkedin: 'https://linkedin.com/in/mdabdurrahim',
  },
  {
    name: 'Sharmin Akter Joty',
    title: 'Managing Director',
    image: '/images/man2.jpg',
    bio: 'Visionary leader focused on sustainable development and affordable housing models.',
    linkedin: 'https://linkedin.com/in/sharminjoty',
  },
  {
    name: 'Kamrul Hasan',
    title: 'Director, Operations',
    image: '/images/man3.jpg',
    bio: 'Expert in project management, infrastructure planning, and operational excellence.',
    linkedin: 'https://linkedin.com/in/kamrulhasan',
  },
  {
    name: 'Nusrat Jahan',
    title: 'Head of Marketing',
    image: '/images/man4.jpg',
    bio: 'Brand strategist with a decade of experience in real estate marketing and communications.',
    linkedin: 'https://linkedin.com/in/nusratjahan',
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <div className="my-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Management Team
          </h2>
          <div className="w-20 h-1 my-4 mx-auto bg-blue-600 rounded-full"></div>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Meet the leadership team shaping the vision and progress of Blue Sky
            Dream City Ltd.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 overflow-hidden"
            >
              {/* Image with overlay */}
              <div className="relative w-full h-64 mb-5 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-top transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center px-4 text-sm text-center">
                  <p className="mb-2">{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-300 hover:text-white mt-2"
                    >
                      <svg
                        className="w-5 h-5 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.271c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.271h-3v-4.5c0-1.084-.916-2-2-2s-2 .916-2 2v4.5h-3v-9h3v1.271c.553-.839 1.482-1.271 2.5-1.271 1.933 0 3.5 1.567 3.5 3.5v5.5z" />
                      </svg>
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-blue-700 font-medium mt-1">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
