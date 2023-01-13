export type MovieRaw = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieMapped = {
  id: number;
  title: string;
  poster: string;
  poster_horizontal: string;
};

export const mapMovies = (moviesJson: MovieRaw[]): MovieMapped[] => {
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
