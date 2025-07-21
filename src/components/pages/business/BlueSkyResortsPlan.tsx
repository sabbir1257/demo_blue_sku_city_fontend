import React from "react";
import { MdCheckCircle } from "react-icons/md";

type Section = {
  title: string;
  subtitle?: string;
  items: string[];
};

const planData: Section[] = [
  {
    title: "1. Legal Approval & Compliance",
    items: [
      "Obtain establishment license and official documents",
      "Acquire Z-line clearance",
      "Joint inspection and other necessary permits",
      "Environmental clearance certificates",
      "Fire safety, explosion prevention, and structural inspection approvals",
    ],
  },
  {
    title: "2. Investment & Profit Plan",
    subtitle: "Investment Plan:",
    items: [
      "Investors can purchase shares through a managed portfolio and become part-owners of the institution.",
      "Share prices will be determined stepwise, with special offers for investors.",
      "Investors will use the infrastructure, management, and operational activities of the company.",
    ],
  },
  {
    title: "Profit Distribution:",
    items: [
      "Investors will receive an annual profit distribution proportional to their shares.",
      "40% of net profit will be distributed among shareholders accordingly.",
      "Annual financial reports will be provided, and investors can transfer profits through banks or other means.",
      "Investment protection will be guaranteed for 3 years.",
    ],
  },
  {
    title: "3. Infrastructure Development & Facilities",
    items: [
      "Modern, luxurious rooms and suites equipped with all amenities",
      "Swimming pool, spa, and fitness center",
      "Multi-cuisine restaurant",
      "Conference hall with audiovisual equipment",
      "Water sports and adventure activities",
      "24/7 security and surveillance",
    ],
  },
  {
    title: "4. Marketing & Branding Plan",
    items: [
      "Launch official website and online booking system",
      "Social media marketing (Facebook, Instagram, YouTube)",
      "Promotional campaigns and special discount offers",
      "Collaborations with bloggers and influencers",
      "Contests and giveaways to increase engagement",
    ],
  },
  {
    title: "5. Management & Staffing",
    items: [
      "Recruitment of experienced managers, customer service, and front desk staff",
      "Regular training to maintain service standards",
      "Plan to implement ERP software for management",
    ],
  },
  {
    title: "6. Expansion & Future Plans",
    items: [
      "Initial soft launch phase",
      "Grand opening event",
      "Continuous customer feedback and improvement",
      "5-year plan for business expansion and investment growth",
    ],
  },
];

const BlueSkyResortsPlan: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto p-10 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-lg font-sans text-gray-900">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-800 border-b-4 border-blue-600 pb-4">
        Blue Sky Hotel & Resort Establishment Plan
      </h1>

      {planData.map(({ title, subtitle, items }, index) => (
        <div
          key={index}
          className={`mb-12 ${index === planData.length - 1 ? "mb-0" : ""}`}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-700">{title}</h2>
          {subtitle && <p className="italic mb-4 text-blue-600">{subtitle}</p>}
          <ul className="space-y-3">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <MdCheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1 mr-3" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default BlueSkyResortsPlan;
