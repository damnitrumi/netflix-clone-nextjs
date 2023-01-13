import { MovieVideoMapped } from "shared-types/MovieVideoMapped";
import { RawData } from "shared-types/RawData";
import { mapMovies } from "./map-movies";
import { mapVideos } from "./map-videos";

export const mapSimilar = async (movies: MovieVideoMapped[]) => {
  const similarDataWithoutVideos = await Promise.all(
    movies.map(async (el) => {
      const similarUrl = `https://api.themoviedb.org/3/movie/${el.id}/similar?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US&page=1`;

      const similarDataRaw = await fetch(similarUrl);
      const similarDataJson: RawData = await similarDataRaw.json();
      const similarDataFiltered = similarDataJson.results.slice(0, 6);
      const similarData = mapMovies(similarDataFiltered);
      const similarDataWithVideos = await mapVideos(similarData);

      return {
        ...el,
        similar: similarDataWithVideos,
      };
    }),
  );

  return similarDataWithoutVideos;
};
