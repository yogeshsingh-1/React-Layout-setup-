import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      
        <Outlet /> {/* This renders the child route component
        <Outlet /> उस जगह होता है जहां nested routes का UI दिखाई देगा। */}
 
      <Footer />
    </>
  );
};

export default MainLayout;
