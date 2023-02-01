import * as Styled from "./styles";
import { Play } from "@styled-icons/fa-solid";
import { InfoCircle } from "@styled-icons/boxicons-regular";
import Link from "next/link";
import { MoviesComplete } from "utils/map-movies-similar";
import { TvShowsComplete } from "utils/map-tv-shows-similar";

export type HeroProps = {
  dataArray: MoviesComplete[] | TvShowsComplete[];
};

export type HeroPassingProps = {
  posterHorizontal: string;
};

export const Hero = ({ dataArray }: HeroProps) => {
  const selectedIndex = Math.floor(Math.random() * 18);
  const selectedObject = { ...dataArray[selectedIndex] };

  // const hasVideo = Math.floor(Math.random() * 2);

  const {
    id,
    title,
    posterHorizontal,
    videoUrl,
    voteAverage,
    overview,
    similar,
  } = selectedObject;

  const imgUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}${posterHorizontal}`;
  const score =
    voteAverage.toFixed(1).toString().replace(".", "") + "% relevante";
  const videoLink = `http://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=1&fs=0&controls=0`;

  // console.log(hasVideo);

  const ModalData = {
    id,
    title,
    posterHorizontal: imgUrl,
    videoUrl: videoLink,
    score,
    overview,
    similar,
  };

  return (
    <Styled.Wrapper posterHorizontal={imgUrl}>
      <Styled.LinkOption>
        <Link href="/" legacyBehavior passHref>
          <a>
            <Play size="25px" />
            Assistir
          </a>
        </Link>
      </Styled.LinkOption>
      <Styled.MoreInfo>
        <InfoCircle size="25px" />
        Mais Informações
      </Styled.MoreInfo>
      <iframe src={videoLink} allow="autoplay"></iframe>
    </Styled.Wrapper>
  );
};
