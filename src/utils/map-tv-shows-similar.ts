import { TvShowsRawData } from "pages";
import { mapTvShows } from "./map-tv-shows";
import { mapTvShowsVideo, TvShowsVideoMapped } from "./map-tv-shows-videos";

type TvShowsComplete = {
  id: number;
  title: string;
  poster: string;
  poster_horizontal: string;
  videoUrl: string;
  similar: TvShowsVideoMapped[] | string;
};

export const mapTvShowsSimilar = async (
  tvShowsWithVideos: TvShowsVideoMapped[],
): Promise<TvShowsComplete[]> => {
  const similarDataWithoutVideos = await Promise.all(
    tvShowsWithVideos.map(async (el) => {
      const similarUrl = `https://api.themoviedb.org/3/tv/${el.id}/similar?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US&page=1`;

      const similarDataRaw = await fetch(similarUrl);
      const similarDataJson: TvShowsRawData = await similarDataRaw.json();

      if (similarDataJson.results.length == 0) {
        return {
          ...el,
          similar: "no-similar",
        };
      }

      const similarDataFiltered = similarDataJson.results.slice(0, 6);
      const similarData = mapTvShows(similarDataFiltered);
      const similarDataWithVideos = await mapTvShowsVideo(similarData);

      return {
        ...el,
        similar: similarDataWithVideos,
      };
    }),
  );

  return similarDataWithoutVideos;
};