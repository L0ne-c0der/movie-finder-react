import React from "react";
import Navbar from "@/components/custom/Navbar";
import SortingButtons from "@/components/custom/SortingButtons";
import CardGrid from "@/components/custom/CardGrid";
import Footer from "@/components/custom/Footer";
const TopRatedMovies = () => {
    const dummyMovies = new Array(12).fill({ name: "Name", year: "Year", image: "path/to/image.jpg" });
  
    return (
      <div className="container mx-auto p-6">
        <Navbar />
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-2xl font-bold">Top Rated Movies</h2>
          <SortingButtons />
        </div>
        <CardGrid movies={dummyMovies} />
        <Footer />
      </div>
    );
  };
export default TopRatedMovies;
//top rated movies alignment header
//nav bar needs to cover entire space