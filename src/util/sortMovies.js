export const sortMovies = (movies, sortBy) => {
  const moviesCopy = [...movies];

  switch (sortBy) {
    case "ascending":
      return moviesCopy.sort((a, b) => a.name.localeCompare(b.name));
    case "descending":
      return moviesCopy.sort((a, b) => b.name.localeCompare(a.name));
    case "rating":
      return moviesCopy.sort((a, b) => b.vote_average - a.vote_average);
    case "new":
    default:
      return moviesCopy.sort((a, b) => b.year - a.year);
  }
};