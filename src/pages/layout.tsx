"use client";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { store } from "@/redux/store";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Provider store={store}>
      {currentPath.startsWith("/admin") || <Navbar />}
      {children}
      {currentPath.startsWith("/admin") || <Footer />}

      <ToastContainer position="bottom-right" />
    </Provider>
  );
};

export default Layout;
