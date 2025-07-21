import React from "react";
import Image from "next/image";
import soldout from "../../../../public/images/condominium/soldout.webp";
import tower from "../../../../public/images/condominium/tower-2.jpg";
import BlueSkyBanner from "@/components/pages/project/blueSkyCondominium/BlueSkyBanner";
import Amenities from "@/components/pages/project/blueSkyCondominium/Amenities";
import FloorPlan from "@/components/pages/project/blueSkyCondominium/FloorPlan";
// import CategorySection from "@/components/pages/project/CategorySection";

const BlueSkyCondominium = () => {
  return (
    <>
      <BlueSkyBanner />
      <div className="lg:w-[1200px] p-4 mx-auto md:my-20">
        <p className="text-justify">
          Blue Sky City Limited is a prominent land development company
          dedicated to shaping the future of real estate through innovative and
          sustainable projects. One of their flagship ventures, the Blue Sky Tower
          Project, stands as a testament to their commitment to excellence. This
          ambitious undertaking combines the elements of modern urban living
          with thriving commercial spaces. Blue Sky Tower is a symbol of
          architectural brilliance where individuals can experience the best of
          both worlds, offering a harmonious blend of residential and commercial
          areas. Here, they create not just apartments but thriving communities,
          providing people with the opportunity to own a piece of a dynamic,
          interconnected world.  Blue Sky City Limiteds Blue Sky Tower Project
          redefines urban living, promising a lifestyle that is both convenient
          and luxurious.
        </p>
       
      </div>
      {/* <CategorySection/> */}
      <Amenities/>
      <FloorPlan/>
    </>
  );
};

export default BlueSkyCondominium;