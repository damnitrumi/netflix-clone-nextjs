import { Carousel } from "components/HomeComponents/Carousel";
import { CarouselTopTen } from "components/HomeComponents/CarouselTopTen";
import { DownloadApp } from "components/HomeComponents/DownloadApp";
import { Hero } from "components/HomeComponents/Hero";
import { HomeFooter } from "components/HomeComponents/HomeFooter";
import { HomeHeader } from "components/HomeComponents/HomeHeader";
import { ModalOpened } from "components/HomeComponents/ModalOpened";
import Head from "next/head";
import { MoviesComplete } from "utils/map-movies-similar";
import { TvShowsComplete } from "utils/map-tv-shows-similar";

type BrowserProps = {
  popularMoviesSimilar: MoviesComplete[] | TvShowsComplete[];
  topRatedMoviesSimilar: MoviesComplete[] | TvShowsComplete[];
  popularTvShowsSimilar: MoviesComplete[] | TvShowsComplete[];
  topRatedTvShowsSimilar: MoviesComplete[] | TvShowsComplete[];
  trendingTvShowsFiltered: MoviesComplete[] | TvShowsComplete[];
};

export const Browser = ({
  popularMoviesSimilar,
  topRatedMoviesSimilar,
  popularTvShowsSimilar,
  topRatedTvShowsSimilar,
  trendingTvShowsFiltered,
}: BrowserProps) => {
  return (
    <>
      <Head>
        <title>Início - Netflix</title>
      </Head>
      <HomeHeader />
      <Hero dataArray={popularMoviesSimilar} />
      <Carousel title="Popular Movies" dataArray={popularMoviesSimilar} />
      <CarouselTopTen title="Top 10" dataArray={trendingTvShowsFiltered} />
      <Carousel title="Popular Tv Shows" dataArray={popularTvShowsSimilar} />
      <Carousel title="Top Rated Movies" dataArray={topRatedMoviesSimilar} />
      <Carousel title="Top Rated Tv Shows" dataArray={topRatedTvShowsSimilar} />
      <DownloadApp />
      <HomeFooter />
      <ModalOpened />
    </>
  );
};
