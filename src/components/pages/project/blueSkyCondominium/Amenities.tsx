import Image from "next/image";
import React from "react";
import banner from "../../../../../public/images/gym_imag.jpeg";
import resortStyle from "../../../../../public/images/condominium/first1.jpg";
import Amenities1 from "../../../../../public/images/condominium/Second.jpg";
import Amenities2 from "../../../../../public/images/condominium/Amenities33.jpg";
import Amenities3 from "../../../../../public/images/condominium/gym.jpg";
import parking from "../../../../../public/images/condominium/parking1.jpg";
import card1 from "../../../../../public/images/condominium/card11.jpg";
import card2 from "../../../../../public/images/condominium/card22.jpg";
import card3 from "../../../../../public/images/condominium/caed33.jpg";
import live from "../../../../../public/images/condominium/live1.jpg";
import GymFeatures from "./GymFeatures";

const Amenities: React.FC = () => {
  const amenityStats = [
    { number: "1", label: "Club House" },
    { number: "9", label: "Heated Swimming Pools" },
    { number: "2", label: "Squash Courts" },
    { number: "1", label: "Tennis Court" },
    { number: "1", label: "Basketball Court" },
    { number: "840m", label: "Jogging Track" },
  ];

  return (
    <section className="overflow-hidden">
      <div className="relative w-full md:h-[500px] h-40">
        <Image
          src={banner}
          alt="Blue Sky City aerial view"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white md:text-4xl text-3xl font-bold tracking-wider uppercase">
            Amenities
          </h1>
        </div>
      </div>

      <div className="grid md:grid-cols-2 w-full max-w-[1200px] mx-auto gap-10 md:gap-20 px-4 py-12">
        <div>
          <h1 className="md:text-4xl text-3xl font-semibold py-3">
            Superior Resort-Style Blue Sky City
          </h1>
          <p>
            Manicured landscaping, curated flora and fauna, movie theatres, fine
            dining, prayer halls, restrooms, grand function halls, laundry,
            housekeeping, children’s play areas, steam rooms, saunas, and
            peaceful bodies of water. These are just some of the stunning
            resort-style Blue Sky City and services that inspire residents to
            experience an unprecedented life of luxurious wellbeing at Ananta
            Terraces.
          </p>
        </div>
        <div>
          <Image
            src={resortStyle}
            alt="Resort Style amenities at Blue Sky City"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center px-4 py-12 md:py-28 bg-blue-500 text-white">
        {amenityStats.map(({ number, label }, i) => (
          <div key={i} className="text-center">
            <h1 className="text-3xl font-semibold">{number}</h1>
            <p>{label}</p>
          </div>
        ))}
      </div>

      <Image src={Amenities1} alt="Club house amenities" className="w-full h-auto" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 items-center justify-items-center px-4 py-12 md:text-center text-left">
        <h1 className="col-span-2 text-3xl font-semibold">Club House</h1>
        <p>Cafe</p>
        <p>Pool Table</p>
        <p>Table Tennis</p>
        <p>Sports Lounge</p>
        <p>2 Squash Courts</p>
      </div>

      <Image src={Amenities2} alt="Swimming Pool amenities" className="w-full h-auto" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-items-center px-4 py-12 ">
        <h1 className="col-span-2 text-3xl font-semibold ">Swimming Pool</h1>
        <p>
          1 Heated Swimming Pool <br /> in every residential tower
        </p>
        <p>9 pools in total</p>
        <p>
          Each pool is <br /> 50 feet long
        </p>
        <p>
          Sauna & <br /> Steam Sauna
        </p>
      </div>

      <Image src={Amenities3} alt="Gym amenities" className="w-full h-auto" />
      <GymFeatures />

      <Image src={parking} alt="Parking facilities" className="w-full h-auto" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 md:items-center md:justify-items-center px-4 py-12">
        <h1 className="col-span-2 text-3xl font-semibold">Parking</h1>
        <p>
          4 Basement <br /> Parking Facilities
        </p>
        <p>
          Capacity to house <br /> 2,500 vehicles
        </p>
        <p>
          1 Basement <br /> Carwash
        </p>
        <p>
          Zero traffic on Ground Floor level,
          <br /> keeping the residential area safe for children and
          <br /> vehicle-free for the entire community
        </p>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-12">
        <h1 className="text-4xl font-semibold mb-4">A La Carte Service</h1>
        <p className="mb-8">
          Ananta Terraces offers high-quality on-site services which <br />{" "}
          ensure a stress-free and balanced lifestyle.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          <Image src={card1} alt="Childcare service card" className="w-full h-auto" />
          <Image src={card2} alt="Business equipment card" className="w-full h-auto" />
          <Image src={card3} alt="Laundry services card" className="w-full h-auto" />
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-sm list-disc p-5 gap-4 leading-snug">
          <li>Childcare Services</li>
          <li>Rentable Business Equipment</li>
          <li>Laundry Services</li>
          <li>Housekeeping Services</li>
          <li>Pest Control</li>
          <li>Grocery Delivery Services</li>
          <li>Catering Services</li>
          <li>Membership Discount Card</li>
          <li>Personal Shopper</li>
          <li>Personal Assistant</li>
          <li>Dry-Cleaning Services</li>
          <li>Handyman Services</li>
          <li>Postal Service</li>
          <li>Conference Room Rental</li>
          <li>Personal Trainer</li>
        </ul>
      </div>

      <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-16 md:py-32 gap-10">
        <Image src={live} alt="Live and secure at Ananta Terraces" className="w-full h-auto" />
        <div>
          <h1 className="text-4xl font-semibold mb-6">Live and Feel Secure</h1>
          <p className="text-xl">
            At Ananta Terraces’ Central Administration Office, a professional,
            highly-qualified management team leverages advanced technologies and
            systems to ensure that all utilities, facilities, and amenities
            function around the clock. This includes garbage collection and fire
            equipment that meets fire-safety standards in all buildings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Amenities;