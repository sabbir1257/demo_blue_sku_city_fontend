import AdminLayout from "@/components/layouts/AdminLayout";
import React from "react";
import {
  UsersIcon,
  BriefcaseIcon,
  ImageIcon,
  FileTextIcon,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Team Member",
      value: 1200,
      icon: <UsersIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Active Projects",
      value: 45,
      icon: <BriefcaseIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Gallery Total Images",
      value: 320,
      icon: <ImageIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Blog Total Posts",
      value: 85,
      icon: <FileTextIcon className="w-8 h-8 text-blue-500" />,
    },
  ];

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md flex items-center gap-4 bg-blue-100"
            >
              <div className="p-3 rounded-full bg-white shadow-md">
                {stat.icon}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {stat.title}
                </h2>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
