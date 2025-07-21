import React from "react";
import flat from "../../../../public/images/flat_img.jpg";
import { FaFileDownload } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { BiCopy } from "react-icons/bi";
import Image from "next/image";
type ApartmentInfo = {
  type: string;
  size: string;
};

const details = [
  { label: "Nature", value: "Residential" },
  {
    label: "Address",
    value: "Plot#91, Block# C, Nolvog, Nishatnagar-1711, Turag, Dhaka.",
  },
  { label: "Storey", value: "G+9 Living Floors" },
  { label: "Land Area", value: "10.98 Katha" },
  { label: "No. of Apartments", value: "28 Nos." },
  {
    label: "Apartment size",
    value: (
      <>
        TYPE A – 1357 sft.
        <br />
        TYPE B – 1357 sft.
        <br />
        TYPE C – 1800 sft.
      </>
    ),
  },
  { label: "No. of Car Parking", value: "28 Nos." },
  { label: "No. of elevators/lifts", value: "2 Nos." },
  {
    label: "Common features",
    value: (
      <>
        Reception Desk, Guard Post, Electro-Mechanical Room, Guard & Caretaker
        Accommodation at Ground Floor, Plantation, Children Play Area, Community
        Space, Machine Room & Cloth Drying Area at Roof Top
      </>
    ),
  },
];

const ApartmentSection = () => {
  return (
    <div className="gap-10 grid md:grid-cols-2 grid-cols-1 my-10 justify-between mx-2">
      <div>
        <Image
          className="w-full h-auto max-w-[600px] max-h-[650px] rounded-lg"
          src={flat}
          alt=""
        />
        <div className="p-5 rounded-xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-between mt-8">
            {" "}
            <button className="flex text-lg p-3 hover:bg-[#2546a0]  gap-3 rounded-xl bg-[#1e3a8a] text-white items-center">
              <FaFileDownload />
              Download Brochure
            </button>
            <button className="flex border-2 text-lg p-3 gap-3 jus rounded-xl items-center">
              <GrSchedules />
              Schedule a Meeting
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {details.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <BiCopy className="w-5 h-5 text-blue-800 mt-1" />
            <div className="flex flex-col sm:flex-row sm:items-start w-full">
              <span className="font-semibold text-blue-900 min-w-[140px] sm:min-w-[180px]">
                {item.label}
              </span>
              <span className="text-gray-700 sm:ml-2">: {item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApartmentSection;
