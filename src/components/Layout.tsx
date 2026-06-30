import type React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideLayoutRoutes = ["/login", "/register"];

  const shouldHide = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      <main>{children}</main>
      <ScrollToTopButton />
      {!shouldHide && <Footer />}
    </>
  );
}

export default Layout;
