import { Heading } from "components/Heading";
import { IntroContainer } from "components/IntroComponents/IntroContainer";
import * as Styled from "./styles";

export const IntroCard4 = () => {
  return (
    <IntroContainer>
      <Styled.Wrapper>
        <Styled.HeadingsContainer>
          <Heading size="5.0rem">Baixe séries para assistir offline.</Heading>
          <Heading size="2.6rem" as="h2">
            Disponível em todos os planos, exceto no Básico com anúncios.
          </Heading>
        </Styled.HeadingsContainer>
        <Styled.ImageContainer>
          <img
            src="/assets/images/netflix-mobile.jpg"
            alt="Netflix Mobile/Offline"
          />
          <Styled.DownloadContainer>
            <div className="image-snippet">
              <img
                src="/assets/images/boxshot-stranger-things.png"
                alt="Boxshot"
              />
            </div>
            <Styled.DownloadContainerInfo>
              <p>Stranger Things</p>
              <p>Download em andamento...</p>
            </Styled.DownloadContainerInfo>
            <div className="image-snippet">
              <img src="/assets/images/download-icon.gif" alt="Download Icon" />
            </div>
          </Styled.DownloadContainer>
        </Styled.ImageContainer>
      </Styled.Wrapper>
    </IntroContainer>
  );
};
