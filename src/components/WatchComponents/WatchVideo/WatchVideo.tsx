import * as Styled from "./styles";

export type WatchVideoProps = {
  videoUrl: string;
};

export const WatchVideo = ({ videoUrl }: WatchVideoProps) => {
  const hasVideo = !(videoUrl === "no-url");

  const videoLink = hasVideo
    ? `http://www.youtube-nocookie.com/embed/${videoUrl}?autoplay=1&mute=1`
    : "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1";

  return (
    <Styled.Wrapper>
      <iframe src={videoLink} allow="autoplay"></iframe>
    </Styled.Wrapper>
  );
};
