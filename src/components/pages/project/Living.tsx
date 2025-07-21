import Image from "next/image";
import React from "react";

type Facility = {
  title: string;
  img: string;
  alt: string;
};

const facilities: Facility[] = [
  { title: "Mosque", img: "/images/Living/mosque1.png", alt: "Mosque" },
  { title: "School", img: "/images/Living/school.png", alt: "School" },
  {
    title: "Fire Service Station",
    img: "/images/Living/Fire_Service_Station1.png",
    alt: "Fire Service Station",
  },
  { title: "Lake", img: "/images/Living/lake.png", alt: "Lake" },
  { title: "Wasa", img: "/images/Living/Wasa1.png", alt: "Wasa" },
  { title: "Hospital", img: "/images/Living/Hospital.png", alt: "Hospital" },
  { title: "Police Station", img: "/images/Living/police-station.png", alt: "Police Station" },
  { title: "Children Park", img: "/images/Living/Children_Park.png", alt: "Children Park" },
  { title: "PDB Office", img: "/images/Living/PDB1.png", alt: "PDB Office" },
  { title: "Green Road", img: "/images/Living/Green_Road1.png", alt: "Green Road" },
  { title: "Electricity Station", img: "/images/Living/electric-factory.png", alt: "Electricity Station" },
  { title: "Holyday Village", img: "/images/Living/Holyday_Village.png", alt: "Holyday Village" },
  { title: "BTCL", img: "/images/Living/BTCL1.png", alt: "BTCL" },
  { title: "Convention Center", img: "/images/Living/Convention_Center.png", alt: "Convention Center" },
  { title: "Titash Gas", img: "/images/Living/Gas1.png", alt: "Titash Gas" },
  { title: "Graveyard", img: "/images/Living/Graveyard1.png", alt: "Graveyard" },
  { title: "Nursing Home", img: "/images/Living/Nursing_Home.png", alt: "Nursing Home" },
  { title: "Supper Market", img: "/images/Living/supermarket.png", alt: "Supper Market" },
];

const Living: React.FC = () => {
  return (
    <div>
      {/* Heading Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Living Standard in the City
        </h2>
        <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        <p className="text-center max-w-[600px] mx-auto pt-6 pb-20 text-gray-700 text-base md:text-lg leading-relaxed">
          Blue Sky City LTD is the other name of trust, reliability, and a social partnership model. We maintain all the living standards of modern township planning in the capital city Dhaka. We are committed to people, communities, and sustainability.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[1250px] mx-auto px-4">
        {facilities.map((item, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white flex flex-col items-center shadow-xl p-10 rounded-2xl transition-transform transform hover:scale-110"
          >
            <div className="h-[120px] w-[120px] flex justify-center items-center overflow-hidden">
              <Image
                width={80}
                height={80}
                src={item.img}
                alt={item.alt}
                className="object-contain filter invert brightness-0"
                loading="lazy"
              />
            </div>

            <h5 className="text-center text-sm font-bold pt-3">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Living;