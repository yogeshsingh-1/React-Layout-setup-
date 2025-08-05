import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      
        <Outlet /> {/* This renders the child route component */}
 
      <Footer />
    </>
  );
};

export default MainLayout;
