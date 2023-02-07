import { WatchVideo } from "components/WatchComponents/WatchVideo/Watch";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { VideoRaw } from "utils/map-movies-videos";

type WatchProps = {
  videoUrl: string;
};

export default function Watch({ videoUrl }: WatchProps) {
  return <WatchVideo videoUrl={videoUrl} />;
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

  const id = ctx.query.trackId;
  const type = ctx.query.type;

  const fetchUrl = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US`;

  const rawVideos = await fetch(fetchUrl);
  console.log(rawVideos);
  const videos: VideoRaw = await rawVideos.json();
  const videoUrl = videos.results.length > 0 ? videos.results[0].key : "no-url";

  return {
    props: {
      videoUrl,
    },
  };
};
