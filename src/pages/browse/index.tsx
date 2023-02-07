/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetServerSideProps, GetStaticProps } from "next";
import { mapMovies, MovieRaw } from "utils/map-movies";
import { mapSimilar, MoviesComplete } from "utils/map-movies-similar";
import { mapTrending } from "utils/map-trending";
import { mapTvShows, TvShowRaw } from "utils/map-tv-shows";
import { mapTvShowsSimilar, TvShowsComplete } from "utils/map-tv-shows-similar";
import { mapTvShowsVideo } from "utils/map-tv-shows-videos";
import { mapMoviesVideo } from "utils/map-movies-videos";
import Head from "next/head";
import { getSession } from "next-auth/react";

export type MoviesRawData = {
  page: number;
  results: MovieRaw[];
};

export type TvShowsRawData = {
  page: number;
  results: TvShowRaw[];
};

type BrowserProps = {
  session: Response;
  popularMoviesSimilar: MoviesComplete[] | TvShowsComplete[];
  topRatedMoviesSimilar: MoviesComplete[] | TvShowsComplete[];
  popularTvShowsSimilar: MoviesComplete[] | TvShowsComplete[];
  topRatedTvShowsSimilar: MoviesComplete[] | TvShowsComplete[];
  trendingTvShowsFiltered: MoviesComplete[] | TvShowsComplete[];
};

import { Browser } from "templates/Browser";

export default function Browse({
  session,
  popularMoviesSimilar,
  topRatedMoviesSimilar,
  popularTvShowsSimilar,
  topRatedTvShowsSimilar,
  trendingTvShowsFiltered,
}: BrowserProps) {
  if (!session) return <h1>Ta logado não mano</h1>;

  return (
    <>
      <Head>
        <title>Início - Netflix</title>
      </Head>
      <Browser
        popularMoviesSimilar={popularMoviesSimilar}
        topRatedMoviesSimilar={topRatedMoviesSimilar}
        popularTvShowsSimilar={popularTvShowsSimilar}
        topRatedTvShowsSimilar={topRatedTvShowsSimilar}
        trendingTvShowsFiltered={trendingTvShowsFiltered}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  //Popular Movies
  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US&page=1`;
  const popularMoviesDataRaw = await fetch(popularMoviesUrl);
  const popularMoviesDataJson: MoviesRawData =
    await popularMoviesDataRaw.json();
  const popularMoviesData = popularMoviesDataJson.results.slice(0, 18);

  const popularMoviesFiltered = mapMovies(popularMoviesData);

  const popularMoviesWithVideos = await mapMoviesVideo(popularMoviesFiltered);

  const popularMoviesSimilar = await mapSimilar(popularMoviesWithVideos);
  // console.log("Popular Movies");
  // console.log(popularMoviesSimilar);

  //Top Rated Movies
  const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US&page=1`;
  const topRatedMoviesDataRaw = await fetch(topRatedMoviesUrl);
  const topRatedMoviesDataJson: MoviesRawData =
    await topRatedMoviesDataRaw.json();
  const topRatedMoviesData = topRatedMoviesDataJson.results.slice(0, 18);

  const topRatedMoviesFiltered = mapMovies(topRatedMoviesData);

  const topRatedMoviesWithVideos = await mapMoviesVideo(topRatedMoviesFiltered);

  const topRatedMoviesSimilar = await mapSimilar(topRatedMoviesWithVideos);
  // console.log("Top Rated Movies");
  // console.log(topRatedMoviesSimilar);

  //Popular Tv Shows
  const popularTvShowsUrl = `
        https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US&page=1`;
  const popularTvShowsDataRaw = await fetch(popularTvShowsUrl);
  const popularTvShowsDataJson: TvShowsRawData =
    await popularTvShowsDataRaw.json();

  const popularTvShowsData = popularTvShowsDataJson.results.slice(0, 18);

  const popularTvShowsFiltered = mapTvShows(popularTvShowsData);

  const popularTvShowsWithVideos = await mapTvShowsVideo(
    popularTvShowsFiltered,
  );

  const popularTvShowsSimilar = await mapTvShowsSimilar(
    popularTvShowsWithVideos,
  );
  // console.log("Popular Tv Shows");
  // console.log(popularTvShowsSimilar);

  //Top Rated Tv Shows
  const topRatedTvShowsUrl = `
        https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US&page=1`;
  const topRatedTvShowsDataRaw = await fetch(topRatedTvShowsUrl);
  const topRatedTvShowsDataJson: TvShowsRawData =
    await topRatedTvShowsDataRaw.json();

  const topRatedTvShowsData = topRatedTvShowsDataJson.results.slice(0, 18);

  const topRatedTvShowsFiltered = mapTvShows(topRatedTvShowsData);

  const topRatedTvShowsWithVideos = await mapTvShowsVideo(
    topRatedTvShowsFiltered,
  );

  const topRatedTvShowsSimilar = await mapTvShowsSimilar(
    topRatedTvShowsWithVideos,
  );
  // console.log("Top Rated Tv Shows");
  // console.log(topRatedTvShowsSimilar);

  //Trending

  const trendingTvShowsUrl = `
        https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}`;
  const trendingTvShowsDataRaw = await fetch(trendingTvShowsUrl);
  const trendingTvShowsDataJson = await trendingTvShowsDataRaw.json();

  const trendingTvShowsData = trendingTvShowsDataJson.results.slice(0, 10);

  const trendingTvShowsFiltered = await mapTrending(trendingTvShowsData);

  // console.log("Trending");
  // console.log(trendingTvShowsFiltered);
  return {
    props: {
      session,
      popularMoviesSimilar,
      topRatedMoviesSimilar,
      popularTvShowsSimilar,
      topRatedTvShowsSimilar,
      trendingTvShowsFiltered,
    },
  };
};

//Descomentar o useEffect e remover o no unused vars no inicio do file
