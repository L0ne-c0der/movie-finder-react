import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const MovieCard = ({ movie }) => {
    return (
      <Card className="w-48 shadow-lg p-4">
        <CardContent className="p-4">
          <img src={movie.image} alt={movie.name} className="h-48 w-full object-cover rounded-lg" />
          <h3 className="mt-2 font-semibold">{movie.name || "Name"}</h3>
          <p className="text-gray-500">{movie.year || "Year"}</p>
        </CardContent>
      </Card>
    );
  };
export default MovieCard;

//image issue