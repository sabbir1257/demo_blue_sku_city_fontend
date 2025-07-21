import AdminLayout from "@/components/layouts/AdminLayout";
import Image from "next/image";
import React, { useState } from "react";
import {
  ImageIcon,
  GlobeIcon,
  FileTextIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

const SettingPage = () => {
  const [settings, setSettings] = useState({
    logo: "",
    siteName: "",
    siteDescription: "",
    facebook: "",
    twitter: "",
    youtube: "",
    supportEmail: "",
    address: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSettings((prev) => ({ ...prev, logo: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., API call)
    alert("Settings updated successfully!");
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Settings</h1>
        <div className="space-y-6">
          {/* Website Logo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website Logo
            </label>
            <div className="flex items-center gap-4">
              {settings.logo && (
                <Image
                  width={100}
                  height={100}
                  src={settings.logo}
                  alt="Website Logo"
                  className="w-16 h-16 object-cover rounded-lg border"
                />
              )}
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ImageIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Website Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="siteName"
                placeholder="Enter website name"
                value={settings.siteName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <GlobeIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Website Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website Description
            </label>
            <div className="relative">
              <textarea
                name="siteDescription"
                placeholder="Enter website description"
                value={settings.siteDescription}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FileTextIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Social Links */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Facebook Link
            </label>
            <div className="relative">
              <input
                type="text"
                name="facebook"
                placeholder="Enter Facebook link"
                value={settings.facebook}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FacebookIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Twitter Link
            </label>
            <div className="relative">
              <input
                type="text"
                name="twitter"
                placeholder="Enter Twitter link"
                value={settings.twitter}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <TwitterIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              YouTube Link
            </label>
            <div className="relative">
              <input
                type="text"
                name="youtube"
                placeholder="Enter YouTube link"
                value={settings.youtube}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <YoutubeIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Support Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Support Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="supportEmail"
                placeholder="Enter support email"
                value={settings.supportEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MailIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <div className="relative">
              <textarea
                name="address"
                placeholder="Enter address"
                value={settings.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MapPinIcon className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SettingPage;
