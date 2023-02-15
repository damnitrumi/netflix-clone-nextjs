import { MoviesRawData } from "../pages/browse/index";
import { mapMovies } from "./map-movies";
import { mapMoviesVideo, MovieVideoMapped } from "./map-movies-videos";

export type MoviesComplete = {
  id: number;
  title: string;
  overview: string;
  poster: string;
  posterHorizontal: string;
  voteAverage: number;
  type: string;
  videoUrl: string;
  similar: MovieVideoMapped[] | null;
};

export const mapSimilar = async (
  movies: MovieVideoMapped[],
): Promise<MoviesComplete[]> => {
  const similarDataWithoutVideos = await Promise.all(
    movies?.map(async (el) => {
      const similarUrl = `https://api.themoviedb.org/3/movie/${el.id}/similar?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&page=1`;

      const similarDataRaw = await fetch(similarUrl);
      const similarDataJson: MoviesRawData = await similarDataRaw.json();

      if (similarDataJson.results.length == 0) {
        return {
          ...el,
          similar: null,
        };
      }

      const similarDataFiltered = similarDataJson.results.slice(0, 6);
      const similarData = mapMovies(similarDataFiltered);
      const similarDataWithVideos = await mapMoviesVideo(similarData);

      return {
        ...el,
        similar: similarDataWithVideos,
      };
    }),
  );

  return similarDataWithoutVideos;
};
