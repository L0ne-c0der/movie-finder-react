import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchSortBar from "@/components/custom/SearchSortBar";
import Navbar from "../components/custom/NavBar";
import Footer from "../components/custom/Footer";
import CardGrid from "../components/custom/CardGrid";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchMovies = async () => {
      if (!searchQuery) return;
      
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}&language=en-US`, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
          }
        });
        
        const formattedMovies = response.data.results.map(movie => ({
          name: movie.title,
          year: new Date(movie.release_date).getFullYear(),
          image: movie.poster_path 
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : null,
          id: movie.id
        }));
        
        setMovies(formattedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    searchMovies();
  }, [searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar selected="Search"/>
      <div className="flex-grow px-6 max-w-7xl mx-auto w-full">
        {/* Search and Sorting Bar */}
        <div className="mt-6">
          <SearchSortBar onSearch={setSearchQuery} />
        </div>

        {/* Movies Grid */}
        <div className="mt-8">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <CardGrid movies={movies} />
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SearchPage;