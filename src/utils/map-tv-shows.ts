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
  poster: string;
  poster_horizontal: string;
};

export const mapTvShows = (tvShowsJson: TvShowRaw[]): TvShowMapped[] => {
  const popularTvShowsFiltered = tvShowsJson.map((el) => {
    const {
      id,
      name: title,
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
  return popularTvShowsFiltered;
};
