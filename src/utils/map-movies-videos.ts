import { MovieMapped } from "./map-movies";

export type VideoRaw = {
  id: number;
  results: {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }[];
};

export type MovieVideoMapped = {
  id: number;
  title: string;
  overview: string;
  poster: string;
  posterHorizontal: string;
  voteAverage: number;
  type: string;
  videoUrl: string;
};

export const mapMoviesVideo = async (
  movies: MovieMapped[],
): Promise<MovieVideoMapped[]> => {
  const moviesWithVideos = await Promise.all(
    movies?.map(async (el) => {
      const videosUrl = `https://api.themoviedb.org/3/movie/${el.id}/videos?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US`;

      const videosDataRaw = await fetch(videosUrl);
      const videosDataJson: VideoRaw = await videosDataRaw.json();

      const videoTrailer = videosDataJson.results.filter(
        (el) => el.type == "Trailer",
      )[0];

      const videoUrl = videoTrailer?.key ? videoTrailer.key : "no-url";

      return {
        ...el,
        videoUrl,
      };
    }),
  );

  return moviesWithVideos;
};
