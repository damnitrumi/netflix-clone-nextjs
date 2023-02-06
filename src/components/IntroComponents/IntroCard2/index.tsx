import { Heading } from "components/Heading";
import { IntroContainer } from "components/IntroComponents/IntroContainer";
import * as Styled from "./styles";

export const IntroCard2 = () => {
  return (
    <IntroContainer>
      <Styled.Wrapper>
        <Styled.HeadingsContainer>
          <Heading size="5.0rem">Assista quando quiser.</Heading>
          <Heading size="2.6rem" as="h2">
            Assista no celular, tablet, Smart TV ou notebook sem pagar a mais
            por isso.
          </Heading>
        </Styled.HeadingsContainer>
        <Styled.ImageContainer>
          <img src="/assets/images/netflix-devices.png" alt="Netflix Devices" />
          <Styled.VideoContainer>
            <video autoPlay muted loop>
              <source src="/assets/videos/video-devices.m4v" type="video/mp4" />
            </video>
          </Styled.VideoContainer>
        </Styled.ImageContainer>
      </Styled.Wrapper>
    </IntroContainer>
  );
};
