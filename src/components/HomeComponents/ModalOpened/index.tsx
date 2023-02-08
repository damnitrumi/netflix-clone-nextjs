import Link from "next/link";
import * as Styled from "./styles";
import { Play } from "@styled-icons/fa-solid";
import { Close } from "@styled-icons/material";
import { Text } from "components/Text";
import { Heading } from "components/Heading";
import { MovieVideoMapped } from "utils/map-movies-videos";
import { TvShowsVideoMapped } from "utils/map-tv-shows-videos";
import { YouMayAlsoLikeModal } from "../YouMayAlsoLikeModal";
import { useRouter } from "next/router";
import { useModalContext } from "components/contexts/ModalContext";
import { FormEvent } from "react";

export type ModalOpenedProps = {
  showModal: boolean;
  id: number;
  title: string;
  posterHorizontal: string;
  videoUrl: string;
  score: string;
  type: string;
  overview: string;
  similar: MovieVideoMapped[] | TvShowsVideoMapped[];
};

export const ModalOpened = () => {
  const router = useRouter();

  const [modalData, showModal, , , handleCloseModalClick] = useModalContext();

  if (!modalData) return null;

  const {
    id,
    title,
    posterHorizontal,
    videoUrl,
    score,
    type,
    overview,
    similar,
  } = modalData;

  const hasVideo = !videoUrl.includes("no-url");

  const handleWatchClick = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    router.push({
      pathname: `watch/${id}`,
      query: { trackId: id, type: type },
    });
  };

  return (
    <Styled.Wrapper showModal={showModal}>
      <Styled.Modal>
        <Styled.VideoContainer posterHorizontal={posterHorizontal}>
          <Styled.CloseOption>
            <button onClick={handleCloseModalClick}>
              <Close size="25px" />
            </button>
          </Styled.CloseOption>
          <Styled.LinkOption>
            <Link href="/" legacyBehavior passHref>
              <a onClick={handleWatchClick}>
                <Play size="25px" />
                Assistir
              </a>
            </Link>
          </Styled.LinkOption>
          {showModal && hasVideo && (
            <iframe src={videoUrl} allow="autoplay"></iframe>
          )}
        </Styled.VideoContainer>
        <Heading size="2.5rem">{title}</Heading>
        <Styled.AgeRatingContainer>
          <Text>{score}</Text>
          <Styled.AgeRating>
            <svg
              id="maturity-rating-24013"
              viewBox="0 0 100 100"
              className="svg-icon svg-icon-maturity-rating-24013 "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M92.3794 0H7.62061C3.41048 0 0 3.41047 0 7.61885V92.3794C0 96.5878 3.41048 100 7.62061 100H92.3794C96.5931 100 100 96.5878 100 92.3794V7.61885C100 3.41047 96.5931 0 92.3794 0Z"
                fill="#D7262D"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M49.6564 26.0213H57.5557V73H48.5455V38.0709C47.7656 38.8842 46.9171 39.5856 46.0016 40.1786C45.0862 40.7717 44.0862 41.2636 43 41.6595V33.2322C44.6091 32.3089 45.9735 31.2453 47.0949 30.0378C48.2163 28.8322 49.0684 27.4933 49.6564 26.0213ZM77.2406 55.0687C77.2406 52.6833 77.0777 51.1317 76.7539 50.4156C76.4319 49.6995 75.8422 49.3414 74.9938 49.3414C74.1418 49.3414 73.552 49.7486 73.2174 50.563C72.8809 51.3757 72.7109 52.8782 72.7109 55.0687V61.5121C72.7109 63.8992 72.8737 65.4508 73.1993 66.1652C73.5231 66.8813 74.1219 67.2394 74.9938 67.2394C75.8205 67.2394 76.403 66.8497 76.7395 66.0686C77.0741 65.2876 77.2406 63.7693 77.2406 61.5121V55.0687ZM86.9331 36.3896V36.8776H77.2406V36.3896C77.2406 34.0043 77.0777 32.4527 76.7539 31.7365C76.4319 31.0204 75.8422 30.6623 74.9938 30.6623C74.1418 30.6623 73.552 31.0748 73.2174 31.898C72.8809 32.7247 72.7109 34.2202 72.7109 36.3896V45.7941C73.5629 44.7094 74.5162 43.9072 75.5799 43.3859C76.6436 42.8646 77.8665 42.6049 79.254 42.6049C81.9367 42.6049 83.8976 43.4351 85.1404 45.0938C86.3813 46.7542 87 49.4063 87 53.0519V58.0631C87 63.7254 86.1226 67.6308 84.3679 69.7774C82.6114 71.9258 79.509 73 75.0607 73C70.5871 73 67.4757 71.9311 65.7192 69.795C63.9627 67.6571 63.0871 63.7465 63.0871 58.0631V39.872C63.0871 34.2096 63.9627 30.3148 65.7192 28.1892C67.4757 26.0637 70.5871 25 75.0607 25C79.5542 25 82.6566 25.8092 84.3679 27.424C86.0774 29.0405 86.9331 32.0297 86.9331 36.3896Z"
                fill="#FFFEFD"
              ></path>
              <path
                d="M35.2049 26L42 73H29.8477L29.2556 64.5522H24.9981L24.2932 73H12L18.0338 26H35.2049ZM28.9173 56.2205C28.3158 50.8983 27.7143 44.3278 27.1128 36.509C25.9098 45.489 25.1579 52.0595 24.8571 56.2205H28.9173Z"
                fill="#FFFEFD"
              ></path>
            </svg>
          </Styled.AgeRating>
        </Styled.AgeRatingContainer>
        <Text>{overview}</Text>
        {similar && (
          <Styled.YouMayAlsoLikeWrapper>
            <Heading as="h2" size="2.2rem">
              Títulos semelhantes
            </Heading>
            <Styled.YouMayAlsoLikeContainer>
              {similar.map((el: MovieVideoMapped | TvShowsVideoMapped) => {
                return (
                  <YouMayAlsoLikeModal
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    voteAverage={el.voteAverage}
                    overview={el.overview}
                    type={el.type}
                    posterHorizontal={el.posterHorizontal}
                  />
                );
              })}
            </Styled.YouMayAlsoLikeContainer>
          </Styled.YouMayAlsoLikeWrapper>
        )}
      </Styled.Modal>
    </Styled.Wrapper>
  );
};
