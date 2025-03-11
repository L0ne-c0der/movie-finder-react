import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import UpcomingPage from "./pages/UpcomingPage";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
