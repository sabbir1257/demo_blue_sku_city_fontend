import Image from 'next/image';
import React from 'react';

const points = [
  'Blue Sky City is set to be one of the most planned cities outside Dhaka City Corporation.',
  'Branches of renowned educational institutes and hospitals will exist in this city, In shā Allāh.',
  'Connected to the Dhaka-Mawa bypass—no more traffic-jam woes.',
  'Enjoy fresh, natural air next to the 300-ft-wide bypass.',
  'Pollution-free, well-planned, and aesthetically charming.',
  'Only 20 minutes from the Prime Minister’s residence.',
  'Designed by skilled planners in line with authority guidelines.',
  'Any kind of vehicle can reach the project with ease.',
  'Easy terms and long-term installment plans available.',
  'Ideal high-ground location—outside flood, DAP & flying zones.',
];

const ProjectLocation: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16">
      {/* subtle dotted texture behind everything */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/images/pattern-dots.svg')] opacity-10"
      />

      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* ---------- SECTION HEADING ---------- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Project Location</h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full" />
        </div>

        {/* ---------- MAIN GRID ---------- */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/land3.jpg"
              alt="Project land"
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              priority
            />
          </div>

          {/* TEXT + LIST */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-blue-800 md:text-3xl">Why Choose Blue Sky City</h2>

            <ul role="list" className="mt-6 space-y-3 text-sm leading-relaxed text-gray-700 md:text-base">
              {points.map((point, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLocation;
