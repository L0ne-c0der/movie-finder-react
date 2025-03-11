import React from "react";
import NavButton from "./NavButton";
import Logo from "@/assets/ff.svg";


const Navbar = () => {
    return (
      <nav className="flex justify-between p-4 border-b shadow-sm">
        <img src={Logo} alt="Logo" className="h-8" />
        <div>
          <NavButton label="Home" />
          <NavButton label="Genres" />
          <NavButton label="Top Rated" active />
          <NavButton label="Upcoming" />
          <NavButton label="Search" />
        </div>
      </nav>
    );
  };
export default Navbar;

//issue with the logo