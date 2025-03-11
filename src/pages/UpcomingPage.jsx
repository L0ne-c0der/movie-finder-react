import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/custom/Navbar";
import SortingButtons from "@/components/custom/SortingButtons";
import CardGrid from "@/components/custom/CardGrid";
import Footer from "@/components/custom/Footer";
import { useSelector } from "react-redux";
import { sortMovies } from "../util/sortMovies";

const UpcomingPage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const heading = "Upcoming";
    const sortBy = useSelector(state => state.filter.sortBy);

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

    const sortedMovies = sortMovies(movies, sortBy);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar selected="Upcoming"/>
            <div className="flex-grow px-6 max-w-7xl mx-auto w-full">
                <div className="flex justify-between items-center mt-6">
                    <h2 className="text-2xl font-bold">{heading} Movies</h2>
                    <SortingButtons />
                </div>
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <p className="text-xl">Loading movies...</p>
                    </div>
                ) : (
                    <div className="mt-8">
                        <CardGrid movies={sortedMovies} />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default UpcomingPage;