export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  details: {
    label: string;
    value: string | JSX.Element;
  }[];
}


export const projects: Project[] = [
  {
    id: "blue-sky-homes-turag",
    title: "Blue Sky Dream Apartments – Turag, Dhaka",
    description: "A G+9 premium apartment building offering modern flats in the growing Turag residential zone.",
    image: "/images/blue-sky-homes-turag.jpeg",
    details: [
      { label: "Nature", value: "High-Rise Residential" },
      { label: "Address", value: "Plot #91, Block C, Nolvog, Nishatnagar, Turag, Dhaka-1711" },
      { label: "Storey", value: "G+9 Floors" },
      { label: "Land Area", value: "10.98 Katha" },
      { label: "No. of Apartments", value: "28 Units" },
      {
        label: "Apartment Sizes",
        value: (
          <>
            Type A – 1,357 sft<br />
            Type B – 1,357 sft<br />
            Type C – 1,800 sft
          </>
        ),
      },
      { label: "Parking", value: "28 Covered Spots" },
      { label: "Lifts", value: "2 Nos." },
      {
        label: "Features",
        value: (
          <>
            Guard Room, Reception Lobby, Roof-top Drying Area, Childrens Play Zone, 
            Generator, CCTV Monitoring, Community Space
          </>
        ),
      },
    ],
  },

  {
    id: "blue-sky-homes-bashundhara",
    title: "Blue Sky Homes – Bashundhara R/A",
    description: "Stylish and secure 3-bedroom apartments in Bashundhara Residential Area with top-tier amenities.",
    image: "/images/blue-sky-homes-bashundhara.jpeg",
    details: [
      { label: "Nature", value: "Luxury Apartment Complex" },
      { label: "Address", value: "Plot #263, Road #4A, Block F, Bashundhara R/A, Dhaka" },
      { label: "Storey", value: "G+9 Floors" },
      { label: "Apartment Size", value: "1,941 sft" },
      { label: "No. of Units", value: "18 Units" },
      {
        label: "Layout",
        value: (
          <>
            3 Bedrooms, 3 Bathrooms, Living + Dining, Kitchen, Balcony, Lift Lobby
          </>
        ),
      },
      { label: "Lifts", value: "1 Lift" },
      {
        label: "Features",
        value: (
          <>
            CCTV Surveillance, Generator, Machine Room, Sub-Station, Rooftop Garden, 
            Concierge & Intercom System
          </>
        ),
      },
    ],
  },

  {
    id: "blue-sky-homes-mirpur",
    title: "Blue Sky Heights – Mirpur DOHS",
    description: "A well-designed apartment block near Mirpur DOHS, combining affordability and smart living.",
    image: "/images/blue-sky-homes-mirpur.jpeg",
    details: [
      { label: "Nature", value: "Mid-Rise Residential" },
      { label: "Address", value: "Plot #A-12, Road #3, Mirpur DOHS, Dhaka" },
      { label: "Storey", value: "G+7 Floors" },
      { label: "Apartment Size", value: "1,250 – 1,600 sft" },
      { label: "No. of Apartments", value: "24 Units" },
      { label: "Parking", value: "22 Spaces" },
      {
        label: "Layout",
        value: (
          <>
            2 or 3 Bedrooms, Dining + Living, Kitchen, 2–3 Bathrooms, Balcony
          </>
        ),
      },
      {
        label: "Features",
        value: (
          <>
            Intercom, Rooftop Utility Space, Guard Room, Rainwater Drainage, Community Area
          </>
        ),
      },
    ],
  },
];