import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CrossIcon, StarIcon } from "../Icons/Icons";
import {
  GalleryThumbnails,
  LayoutDashboardIcon,
  LucideTableProperties,
  NewspaperIcon,
  SettingsIcon,
  UserCogIcon,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboardIcon, label: "Dashboard", href: "/admin/dashboard" },
  { icon: LucideTableProperties, label: "Projects", href: "/admin/projects" },
  { icon: UserCogIcon, label: "Teams", href: "/admin/teams" },
  { icon: NewspaperIcon, label: "Blog", href: "/admin/blog" },
  { icon: GalleryThumbnails, label: "Gallery", href: "/admin/gallery" },
  { icon: SettingsIcon, label: "Settings", href: "/admin/settings" },
];

const SideBar = ({
  sidebarOpen,
  isMobileMenuOpen,
  setSidebarOpen,
  path,
}: any) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } ${isMobileMenuOpen ? "block" : "hidden"} md:block`}
    >
      <div className="h-full px-4 py-6 overflow-y-auto bg-gradient-to-br from-blue-800 to-blue-900 shadow-lg w-64">
        <div className="flex items-center justify-between mb-4 px-2">
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src="/images/Logo_PNG.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-auto h-10"
            />
            <h2 className="text-lg font-bold text-white mb-2">Blue Sky City</h2>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-white hover:text-gray-200"
          >
            <CrossIcon />
          </button>
        </div>

        <nav className="space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${
                path === item?.href && "bg-blue-700"
              } flex items-center px-4 py-3 text-gray-100 hover:bg-blue-700 rounded-lg transition-all duration-200 group`}
            >
              <item.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium group-hover:text-white">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
