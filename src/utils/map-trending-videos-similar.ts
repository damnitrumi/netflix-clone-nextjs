import { mapMovies, MovieRaw } from "./map-movies";
import { mapTvShows, TvShowRaw } from "./map-tv-shows";
import { mapTvShowsVideo } from "./map-tv-shows-videos";
import { mapMoviesVideo, VideoRaw } from "./map-movies-videos";
import { TrendingRaw } from "./map-trending";
import { MoviesRawData, TvShowsRawData } from "../pages/browse/index";

export const mapTrendingVideosAndSimilar = async (
  el: TrendingRaw,
  mediaType: string,
) => {
  const videosUrl = `https://api.themoviedb.org/3/${mediaType}/${el.id}/videos?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US`;

  const videosDataRaw = await fetch(videosUrl);
  const videosDataJson: VideoRaw = await videosDataRaw.json();

  const videoTrailer = videosDataJson.results.filter(
    (el) => el.type == "Trailer",
  )[0];

  const videoUrl = videoTrailer?.key ? videoTrailer.key : "no-url";

  const similarUrl = `https://api.themoviedb.org/3/${mediaType}/${el.id}/similar?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&page=1`;

  const similarDataRaw = await fetch(similarUrl);
  const similarDataJson: MoviesRawData | TvShowsRawData =
    await similarDataRaw.json();

  const similarDataFiltered = similarDataJson.results.slice(0, 6);

  let similarData;

  if (mediaType == "tv") {
    similarData = mapTvShows(similarDataFiltered as TvShowRaw[]);
    similarData = await mapTvShowsVideo(similarData);
  } else {
    similarData = mapMovies(similarDataFiltered as MovieRaw[]);
    similarData = await mapMoviesVideo(similarData);
  }

  return {
    videoUrl,
    similarData,
  };
};
