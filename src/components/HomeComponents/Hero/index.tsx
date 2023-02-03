import * as Styled from "./styles";
import { Play } from "@styled-icons/fa-solid";
import { InfoCircle } from "@styled-icons/boxicons-regular";
import Link from "next/link";
import { MoviesComplete } from "utils/map-movies-similar";
import { TvShowsComplete } from "utils/map-tv-shows-similar";
import { useModalContext } from "components/contexts/ModalContext";

import { useEffect, useState } from "react";

export type HeroProps = {
  dataArray: MoviesComplete[] | TvShowsComplete[];
};

export type HeroPassingProps = {
  posterHorizontal: string;
};

export const Hero = ({ dataArray }: HeroProps) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const selectedIndex = Math.floor(Math.random() * 18);
    setSelectedIndex(selectedIndex);
  }, []);

  const [, showModal, handleModalData, handleOpenBiggerModalClick] =
    useModalContext();

  if (!selectedIndex) return <Styled.EmptyWrapper />;

  const {
    id,
    title,
    posterHorizontal,
    videoUrl,
    voteAverage,
    overview,
    similar,
  } = dataArray[selectedIndex];

  const imgUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}${posterHorizontal}`;
  const score =
    voteAverage.toFixed(1).toString().replace(".", "") + "% relevante";
  const videoLink = `http://www.youtube-nocookie.com/embed/${videoUrl}?autoplay=1&mute=1&fs=0&controls=0`;
  const videoLinkModal = `http://www.youtube-nocookie.com/embed/${videoUrl}?autoplay=1&mute=1&fs=0`;

  const hasVideo = !videoLink.includes("no-url");

  const modalData = {
    id,
    title,
    posterHorizontal: imgUrl,
    videoUrl: videoLinkModal,
    score,
    overview,
    similar,
  };

  const handleModalClick = () => {
    handleModalData(modalData);
    handleOpenBiggerModalClick();
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
      <Styled.MoreInfo onClick={handleModalClick}>
        <InfoCircle size="25px" />
        Mais Informações
      </Styled.MoreInfo>
      {!showModal && hasVideo && (
        <iframe src={videoLink} allow="autoplay"></iframe>
      )}
    </Styled.Wrapper>
  );
};
