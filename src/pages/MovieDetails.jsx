import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "@/components/custom/NavBar";
import Footer from "@/components/custom/Footer";
import CardGrid from "@/components/custom/CardGrid";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Star } from "lucide-react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieResponse, recommendationsResponse] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
            }
          }),
          axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
            }
          })
        ]);

        setMovie(movieResponse.data);
        
        // Format and limit recommendations to 4 movies
        const formattedRecommendations = recommendationsResponse.data.results
          .slice(0, 4) // Take only first 4 items
          .map(movie => ({
            name: movie.title,
            year: new Date(movie.release_date).getFullYear(),
            image: movie.poster_path 
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : null,
            id: movie.id
          }));
        
        setRecommendations(formattedRecommendations);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading movie details</div>;
  if (!movie) return <div>No movie found</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto p-6 flex flex-col gap-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Updated Movie Poster styling */}
          <div className="w-full max-w-sm mx-auto flex items-center justify-center"> 
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg"
              />
            ) : (
              <div className="w-full h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
          </div>

          {/* Movie Info with increased spacing */}
          <div className="space-y-6"> {/* Increased from space-y-4 to space-y-6 */}
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <div className="flex items-center space-x-3"> {/* Increased from space-x-2 */}
              <span className="text-sm">{movie.vote_average.toFixed(1)}</span>
              <Star className="w-4 h-4 text-yellow-500" />
              <Badge variant="secondary">{movie.original_language.toUpperCase()}</Badge>
              <Badge variant="outline">{movie.release_date.split('-')[0]}</Badge>
            </div>

            <Accordion type="single" collapsible className="space-y-4"> {/* Added spacing */}
              <AccordionItem value="plot" trigger="Plot">
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{movie.overview}</p>
                <hr />
                <hr />
              </AccordionItem>
              <AccordionItem value="details" trigger="Details">
                <div className="space-y-4 text-sm text-gray-500 mt-2"> {/* Increased from space-y-2 */}
                  <p className="flex justify-between border-b pb-2">
                    <span className="font-medium">Runtime:</span> 
                    <span>{movie.runtime} minutes</span>
                  </p>
                  <p className="flex justify-between border-b pb-2">
                    <span className="font-medium">Genres:</span> 
                    <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
                  </p>
                  <p className="flex justify-between border-b pb-2">
                    <span className="font-medium">Status:</span> 
                    <span>{movie.status}</span>
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Recommendations section */}
        <section className="mt-12"> {/* Increased from mt-8 */}
          <h2 className="text-xl font-semibold mb-6">Recommendations</h2>
          {recommendations.length > 0 ? (
            <CardGrid movies={recommendations} />
          ) : (
            <p className="text-gray-500">No recommendations available</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MovieDetails;