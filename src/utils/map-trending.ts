import { MovieVideoMapped } from "./map-movies-videos";
import { mapTrendingVideosAndSimilar } from "./map-trending-videos-similar";
import { TvShowsVideoMapped } from "./map-tv-shows-videos";

export type TrendingRaw = {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name?: string;
  title?: string;
  origin_country?: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  media_type: string;
};

export type TrendingMapped = {
  id: number;
  name?: string;
  title?: string;
  overview: string;
  poster: string;
  posterHorizontal: string;
  voteAverage: number;
  type: string;
  videoUrl: string;
  similar: MovieVideoMapped[] | TvShowsVideoMapped[];
};

export const mapTrending = async (
  trendingJson: TrendingRaw[],
): Promise<TrendingMapped[]> => {
  const trendingFiltered = await Promise.all(
    trendingJson.map(async (el) => {
      const {
        id,
        overview,
        poster_path: poster,
        backdrop_path: posterHorizontal,
        vote_average: voteAverage,
        media_type,
      } = el;

      const title = el.title ? el.title : el.name;

      const { videoUrl, similarData: similar } =
        await mapTrendingVideosAndSimilar(el, media_type);

      return {
        id,
        title,
        overview,
        poster,
        posterHorizontal,
        voteAverage,
        type: media_type,
        videoUrl,
        similar,
      };
    }),
  );
  return trendingFiltered;
};
// export const mapTrending = (trendingJson: TrendingRaw[]): TrendingMapped[] => {
//   const trendingFiltered = trendingJson.map((el) => {
//     const {
//       id,
//       poster_path: poster,
//       backdrop_path: poster_horizontal,
//       media_type,
//     } = el;

//     const title = el.title ? el.title : el.name;

//     const teste = mapTrendingVideosAndSimilar(el, media_type);

//     return {
//       id,
//       title,
//       poster,
//       poster_horizontal,
//       teste,
//     };
//   });
//   return trendingFiltered;
// };
