import React from "react";
import { cn } from "@/lib/utils";
import Logo from "@/assets/ff.svg";
const Footer = () => {
    return (
      <footer className="p-6 text-center text-gray-500 border-t mt-10">
        <img src={Logo} alt="Logo" className="h-8 mx-auto" />
        <div className="flex justify-center space-x-4 mt-2">
          <span className="cursor-pointer">X</span>
          <span className="cursor-pointer">Instagram</span>
          <span className="cursor-pointer">YouTube</span>
          <span className="cursor-pointer">LinkedIn</span>
        </div>
        <p className="mt-2">© 2025 MovieFinder. All Rights Reserved.</p>
      </footer>
    );
  };
  export default Footer;
  //need to import icons