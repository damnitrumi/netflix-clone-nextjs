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
  overview: string;
  poster: string;
  posterHorizontal: string;
  voteAverage: number;
  type: string;
};

export const mapMovies = (moviesJson: MovieRaw[]): MovieMapped[] => {
  const popularMoviesFiltered = moviesJson.map((el) => {
    const {
      id,
      title,
      overview,
      poster_path: poster,
      backdrop_path: posterHorizontal,
      vote_average: voteAverage,
    } = el;
    return {
      id,
      title,
      overview,
      poster,
      posterHorizontal,
      voteAverage,
      type: "movie",
    };
  });

  return popularMoviesFiltered;
};
