import React from "react";
import Navbar from "@/components/custom/Navbar";
import SortingButtons from "@/components/custom/SortingButtons";
import CardGrid from "@/components/custom/CardGrid";
import Footer from "@/components/custom/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
const MoviesPage = () => {
    // const heading = useSelector((state) => state.navigation)
    const heading = "Upcoming";
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/upcoming?language=en-US`, {
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

        fetchMovies();
    }, []);

    return (
      <div className="container mx-auto p-6">
        <Navbar selected="Upcoming"/>
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-2xl font-bold">{heading} Movies</h2>
          <SortingButtons />
        </div>
        {isLoading ? (
             <div className="flex justify-center items-center h-64">
            <p className="text-xl">Loading movies...</p>
            </div>
            ) : (
            <CardGrid movies={movies} />
        )}
        <Footer />
      </div>
    );
  };
export default MoviesPage;
//top rated movies alignment header
//nav bar needs to cover entire space