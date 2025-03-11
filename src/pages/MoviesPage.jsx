import React from "react";
import Navbar from "@/components/custom/Navbar";
import SortingButtons from "@/components/custom/SortingButtons";
import CardGrid from "@/components/custom/CardGrid";
import Footer from "@/components/custom/Footer";
import { head } from "motion/react-client";
import { useSelector } from "react-redux";
const MoviesPage = () => {
    const heading = useSelector((state) => state.navigation)
    const dummyMovies = new Array(12).fill({ name: "Name", year: "Year", image: "path/to/image.jpg" });
  
    return (
      <div className="container mx-auto p-6">
        <Navbar />
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-2xl font-bold">{heading} Movies</h2>
          <SortingButtons />
        </div>
        <CardGrid movies={dummyMovies} />
        <Footer />
      </div>
    );
  };
export default MoviesPage;
//top rated movies alignment header
//nav bar needs to cover entire space