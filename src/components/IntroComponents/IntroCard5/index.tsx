import { Button } from "components/Button";
import { FrequentlyAsked } from "components/IntroComponents/FrequentlyAsked";
import { Heading } from "components/Heading";
import * as Styled from "./styles";
import * as StyledSubs from "../IntroSubscription/styles";

export const IntroCard5 = () => {
  return (
    <Styled.FifthIntroContainer>
      <Styled.Wrapper>
        <Heading size="5.0rem">Perguntas Frequentes</Heading>
        <FrequentlyAsked />
        <Styled.IntroSubsForm>
          <Heading size="1.9rem" as="h3">
            Quer assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </Heading>
          <StyledSubs.SubsWrapper>
            <StyledSubs.SubsContainer>
              <StyledSubs.SubsInput type="email" id="subs-input" />
              <label className="teste" htmlFor="subs-input">
                Email
              </label>
            </StyledSubs.SubsContainer>
            <Button>Vamos lá</Button>
          </StyledSubs.SubsWrapper>
        </Styled.IntroSubsForm>
      </Styled.Wrapper>
    </Styled.FifthIntroContainer>
  );
};
