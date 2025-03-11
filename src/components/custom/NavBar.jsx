import React from "react";
import NavButton from "./NavButton";
import Logo from "@/assets/ff.svg";
import { useDispatch, useSelector } from "react-redux";
import { toHome, toSearch, toTopRated, toUpcoming } from "../../slices/navigationSlice";

const Navbar = () => {
    const selected = useSelector((state) => state.navigation);
    const dispatch = useDispatch();
    return (
      <nav className="flex justify-between p-4 border-b shadow-sm">
        <img src={Logo} alt="Logo" className="h-8" />
        <div>
        <div>
        <NavButton label="Home" isActive={selected === "Home"} />
        <NavButton label="Top Rated" isActive={selected === "Top Rated"} />
        <NavButton label="Upcoming" isActive={selected === "Upcoming"} />
        <NavButton label="Search" isActive={selected === "Search"} />
      </div>
        </div>
      </nav>
    );
  };
export default Navbar;

//issue with the logo