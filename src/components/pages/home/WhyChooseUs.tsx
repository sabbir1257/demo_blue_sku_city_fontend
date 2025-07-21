const WhyChooseUs: React.FC = () => {
  const points = [
    "Blue Sky City is set to be one of the most planned cities outside Dhaka City Corporation.",
    "Branches of renowned educational institutes and hospitals will exist in this city, In shā Allāh.",
    "Connected to the Dhaka-Mawa bypass—no more traffic-jam woes.",
    "Enjoy fresh, natural air next to the 300-ft-wide bypass.",
    "Pollution-free, well-planned, and aesthetically charming.",
    "Only 20 minutes from the Prime Minister’s residence.",
    "Designed by skilled planners in line with authority guidelines.",
    "Any kind of vehicle can reach the project with ease.",
    "Easy terms and long-term installment plans available.",
    "Ideal high-ground location—outside flood, DAP & flying zones.",
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Why Choose Blue Sky City
          </h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
        </div>

        {/* Grid List */}
        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800"
        >
          {points.map((point, index) => (
            <li
              key={index}
              role="listitem"
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <span
                aria-hidden="true"
                className="text-blue-600 text-xl mt-1"
              >
                ✅
              </span>
              <p className="text-sm md:text-base">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;