import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchSortBar from "@/components/custom/SearchSortBar";
import Navbar from "../components/custom/NavBar";
import Footer from "../components/custom/Footer";
import CardGrid from "../components/custom/CardGrid";
import { useSelector } from "react-redux";
import { sortMovies } from "../util/sortMovies";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = useSelector(state => state.filter.sortBy);
  const query = searchParams.get('q');

  const searchMovies = async (searchQuery) => {
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

  // Handle initial URL query
  useEffect(() => {
    if (query) {
      searchMovies(query);
    }
  }, [query]);

  // Handle search from SearchSortBar
  const handleSearch = (newQuery) => {
    setSearchParams({ q: newQuery });
  };

  const sortedMovies = sortMovies(movies, sortBy);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar selected="Search"/>
      <div className="flex-grow px-6 max-w-7xl mx-auto w-full">
        <div className="mt-6">
          <SearchSortBar onSearch={handleSearch} initialQuery={query} />
        </div>

        <div className="mt-8">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <CardGrid movies={sortedMovies} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;