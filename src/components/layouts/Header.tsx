import Image from "next/image";
import React from "react";
import { MenuIcon } from "../Icons/Icons";
import { useLogOutMutation } from "@/redux/api/authApi/authApi";
import { toast } from "react-toastify";

const Header = ({
  setSidebarOpen,
  setIsMobileMenuOpen,
  sidebarOpen,
  isMobileMenuOpen,
  user,
}: any) => {
  const [logOut, { isLoading }] = useLogOutMutation();
  const handleLogout = async () => {
    const res: any = await logOut({});
    if ("error" in res) {
      toast.error(res?.error?.data?.message || "Some Wrong!");
      return;
    }
    localStorage.removeItem("auth_token");
    window.location.href = "/admin/login";
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className="text-gray-500 hover:text-gray-600 focus:outline-none"
        >
          <MenuIcon />
        </button>

        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <Image
              src="/images/man1.jpg"
              alt="User"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              {user?.name || "User Name"}
            </span>
          </div>
          <button
            disabled={isLoading}
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          >
            {isLoading ? "Loading..." : "Logout"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
