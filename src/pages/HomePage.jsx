import React from "react";
import HeroSection from "../components/custom/HeroSection";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar selected="Home"/>
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-4xl">
          <HeroSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;