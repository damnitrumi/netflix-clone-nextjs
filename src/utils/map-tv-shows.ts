export type TvShowRaw = {
  adult?: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type TvShowMapped = {
  id: number;
  title: string;
  overview: string;
  poster: string;
  posterHorizontal: string;
  voteAverage: number;
  type: string;
};

export const mapTvShows = (tvShowsJson: TvShowRaw[]): TvShowMapped[] => {
  const popularTvShowsFiltered = tvShowsJson.map((el) => {
    const {
      id,
      name: title,
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
      type: "tv",
    };
  });
  return popularTvShowsFiltered;
};
