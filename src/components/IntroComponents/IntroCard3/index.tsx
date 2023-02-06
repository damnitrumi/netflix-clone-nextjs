import { Heading } from "components/Heading";
import { IntroContainer } from "components/IntroComponents/IntroContainer";
import * as Styled from "./styles";

export const IntroCard3 = () => {
  return (
    <IntroContainer>
      <Styled.Wrapper>
        <Styled.HeadingsContainer>
          <Heading size="5.0rem">Crie perfis para crianças.</Heading>
          <Heading size="2.6rem" as="h2">
            Deixe as crianças se aventurarem com seus personagens favoritos em
            um espaço feito só para elas, sem pagar a mais por isso.
          </Heading>
        </Styled.HeadingsContainer>
        <Styled.ImageContainer>
          <img
            src="/assets/images/netflix-for-kids.png"
            alt="Netflix for Kids"
          />
        </Styled.ImageContainer>
      </Styled.Wrapper>
    </IntroContainer>
  );
};
