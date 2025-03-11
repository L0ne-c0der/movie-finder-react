import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    return (
      <Card 
        className="w-48 shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer" 
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        <CardContent className="p-4">
          {movie.image ? (
            <img 
              src={movie.image} 
              alt={movie.name} 
              className="h-48 w-full object-cover rounded-lg" 
            />
          ) : (
            <div className="h-48 w-full bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">{movie.name}</span>
            </div>
          )}
          <h3 className="mt-2 font-semibold">{movie.name || "Name"}</h3>
          <p className="text-gray-500">{movie.year || "Year"}</p>
        </CardContent>
      </Card>
    );
};

export default MovieCard;