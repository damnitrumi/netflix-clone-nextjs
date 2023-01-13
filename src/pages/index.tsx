import { GetServerSideProps } from "next";
import { useEffect } from "react";
// import { useSession } from "next-auth/react";
import { Login } from "templates/Login";
import { mapMovies, MovieRaw } from "utils/map-movies";
import { mapSimilar } from "utils/map-similar";
import { mapVideos } from "utils/map-videos";

export type RawData = {
  page: number;
  results: MovieRaw[];
};

export default function Index() {
  useEffect(() => {
    const load = async () => {
      const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US&page=1`;
      const popularMoviesDataRaw = await fetch(popularMoviesUrl);
      const popularMoviesDataJson: RawData = await popularMoviesDataRaw.json();
      const popularMoviesData = popularMoviesDataJson.results.slice(0, 18);

      const popularMoviesFiltered = mapMovies(popularMoviesData);
      // console.log(popularMoviesFiltered);

      const popularMoviesWithVideos = await mapVideos(popularMoviesFiltered);
      // console.log(popularMoviesWithVideos);

      const popularMoviesSimilar = await mapSimilar(popularMoviesWithVideos);
      console.log(popularMoviesSimilar);
    };

    load();
  }, []);

  return <Login />;
}
// export default function Index() {
//   const { data: session } = useSession();
//   console.log(session);

//   if (!session) {
//     return <p>Você não está logado</p>;
//   }

//   return (
//     <>
//       <h1>Olá mundo</h1>
//       <h2>{session && JSON.stringify(session)}</h2>
//     </>
//   );
// }

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
