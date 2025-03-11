import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const getRandomMovie = async () => {
    setIsLoading(true);
    try {
      // Get trending movies first
      const response = await axios.get(
        'https://api.themoviedb.org/3/trending/movie/week', {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
        }
      });

      // Get a random movie from the results
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      
      // Navigate to the movie details page
      navigate(`/movie/${randomMovie.id}`);
    } catch (error) {
      console.error("Error fetching random movie:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center py-16 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold">Film Finder</h1>
      <p className="text-gray-500 mt-2">Find the next thing to watch</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex gap-2 mt-4">
          <Input
            placeholder="Search for a film or TV show"
            className="w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </div>
        <Button 
          variant="secondary" 
          className="mt-4"
          onClick={getRandomMovie}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Get Random"}
        </Button>
      </form>
    </section>
  );
};

export default HeroSection;