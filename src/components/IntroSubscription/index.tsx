import { Button } from "components/Button";
import { Heading } from "components/Heading";
import { IntroContainer } from "components/IntroContainer";
import * as Styled from "./styles";

export const IntroSubscription = () => {
  return (
    <IntroContainer>
      <Styled.Wrapper>
        <Heading size="6.4rem">
          Filmes, séries e muito mais. Sem limites.
        </Heading>
        <Heading size="2.6rem" as="h2">
          Assista onde quiser. Cancele quando quiser.
        </Heading>
        <Styled.SubsForm>
          <Heading size="1.9rem" as="h3">
            Pronto para assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </Heading>
          <Styled.SubsWrapper>
            <Styled.SubsContainer>
              <Styled.SubsInput type="email" id="subs-input" />
              <label className="teste" htmlFor="subs-input">
                Email
              </label>
            </Styled.SubsContainer>
            <Button>Vamos lá</Button>
          </Styled.SubsWrapper>
        </Styled.SubsForm>
      </Styled.Wrapper>
    </IntroContainer>
  );
};
