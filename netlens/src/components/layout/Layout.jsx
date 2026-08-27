import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import RouteScrollReset from "./RouteScrollReset";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-white overflow-x-hidden">
      <RouteScrollReset />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
