import { MovieMapped } from "shared-types/MovieMapped";

export const mapVideos = async (movies: MovieMapped[]) => {
  const moviesWithVideos = await Promise.all(
    movies.map(async (el) => {
      const videosUrl = `https://api.themoviedb.org/3/movie/${el.id}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US`;

      const videosDataRaw = await fetch(videosUrl);
      const videosDataJson = await videosDataRaw.json();

      const videoTrailer = videosDataJson.results.filter(
        (el) => el.type == "Trailer",
      )[0];

      const { key: videoUrl } = videoTrailer;

      return {
        ...el,
        videoUrl,
      };
    }),
  );

  return moviesWithVideos;
};
