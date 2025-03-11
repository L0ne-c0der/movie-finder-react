import { motion } from "framer-motion";
import MovieCard from "./MovieCard";
import React from "react";

const CardGrid = ({ movies, onMovieSelect }) => {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="grid grid-cols-4 gap-6 p-4"
      >
        {movies.map((movie, index) => (
          <MovieCard 
            key={index} 
            movie={movie} 
            onCardClick={onMovieSelect}
          />
        ))}
      </motion.div>
    );
};

export default CardGrid;