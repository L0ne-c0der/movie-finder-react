import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import Logo from "@/assets/ff.svg";
import { useDispatch, useSelector } from "react-redux";
import { toHome, toSearch, toTopRated, toUpcoming } from "../../slices/navigationSlice";

const Navbar = ({selected}) => {
    const dispatch = useDispatch();
    return (
      <nav className="flex justify-between p-4 border-b shadow-sm">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-8" />
        </Link>
        <div>
          <Link to="/"><NavButton label="Home" isActive={selected === "Home"} /></Link>
          <Link to="/movies"><NavButton label="Top Rated" isActive={selected === "Top Rated"} /></Link>
          <Link to="/upcoming"><NavButton label="Upcoming" isActive={selected === "Upcoming"} /></Link>
          <Link to="/search"><NavButton label="Search" isActive={selected === "Search"} /></Link>
        </div>
      </nav>
    );
  };
export default Navbar;