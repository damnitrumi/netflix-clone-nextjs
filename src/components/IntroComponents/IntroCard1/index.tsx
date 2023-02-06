import { Heading } from "components/Heading";
import { IntroContainer } from "components/IntroComponents/IntroContainer";
import * as Styled from "./styles";

export const IntroCard1 = () => {
  return (
    <IntroContainer>
      <Styled.Wrapper>
        <Styled.HeadingsContainer>
          <Heading size="5.0rem">Aproveite na TV.</Heading>
          <Heading size="2.6rem" as="h2">
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </Heading>
        </Styled.HeadingsContainer>
        <Styled.ImageContainer>
          <img src="/assets/images/netflix-tv.png" alt="Netflix Tv" />
          <Styled.VideoContainer>
            <video autoPlay muted loop>
              <source src="/assets/videos/video-tv-0819.m4v" type="video/mp4" />
            </video>
          </Styled.VideoContainer>
        </Styled.ImageContainer>
      </Styled.Wrapper>
    </IntroContainer>
  );
};
