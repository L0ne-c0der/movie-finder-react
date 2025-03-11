import React from "react";
import SearchSortBar from "@/components/custom/SearchSortBar";
import Navbar from "../components/custom/NavBar";
import Footer from "../components/custom/Footer";
import CardGrid from "../components/custom/CardGrid";

const SearchPage = () => {
  const dummyMovies = new Array(8).fill({ name: "Name", year: "Year", image: "path/to/image.jpg" });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow px-6 max-w-7xl mx-auto w-full">
        {/* Search and Sorting Bar */}
        <div className="mt-6">
          <SearchSortBar />
        </div>

        {/* Movies Grid */}
        <div className="mt-8">
          <CardGrid movies={dummyMovies} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SearchPage;