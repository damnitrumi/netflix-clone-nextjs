import { MovieRaw } from "shared-types/MovieRaw";

export const mapMovies = (moviesJson: MovieRaw[]) => {
  const popularMoviesFiltered = moviesJson.map((el) => {
    const {
      id,
      title,
      poster_path: poster,
      backdrop_path: poster_horizontal,
    } = el;
    return {
      id,
      title,
      poster,
      poster_horizontal,
    };
  });

  return popularMoviesFiltered;
};
