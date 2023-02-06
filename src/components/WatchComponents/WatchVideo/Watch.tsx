import * as Styled from "./styles";

export type WatchVideoProps = {
  videoUrl: string;
};

export const WatchVideo = ({ videoUrl }: WatchVideoProps) => {
  const hasVideo = !(videoUrl === "no-url");

  // const videoLink = `http://www.youtube-nocookie.com/embed/${videoUrl}?autoplay=1&mute=1`;
  const videoLink = hasVideo
    ? `http://www.youtube-nocookie.com/embed/${videoUrl}?autoplay=1&mute=1`
    : "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  return (
    <Styled.Wrapper>
      <iframe src={videoLink} allow="autoplay"></iframe>
    </Styled.Wrapper>
  );
};
