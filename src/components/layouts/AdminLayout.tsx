import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SideBar from "./SideBar";
import Header from "./Header";
import { useUserDataQuery } from "@/redux/api/authApi/authApi";
import env from "@/config/env/env";
import NextNProgress from "nextjs-progressbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading } = useUserDataQuery(undefined);
  const router = useRouter();
  const path = router?.pathname;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Redirect to login if user is not authenticated and not loading
  useEffect(() => {
    if (!isLoading && !user) {
      localStorage.removeItem(env.auth_token as string);
      router.replace("/admin/login");
    }
  }, [isLoading, user, router]);

  // Show a loading state while fetching user data
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <SideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        path={path}
      />

      {/* Main Content */}
      <div
        className={`${
          sidebarOpen ? "md:ml-64" : "md:ml-0"
        } transition-margin duration-200`}
      >
        {/* Header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          user={user}
        />

        {/* Main Content Area */}
        <main className="p-6">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>

      <NextNProgress color="#1E3E9E" />
    </div>
  );
};

export default AdminLayout;
