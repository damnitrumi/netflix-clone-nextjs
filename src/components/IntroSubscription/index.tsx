import { Button } from "components/Button";
import { Heading } from "components/Heading";
import * as Styled from "./styles";

export const IntroSubscription = () => {
  return (
    <Styled.Wrapper>
      <Heading size="6.4rem">Filmes, séries e muito mais. Sem limites.</Heading>
      <Heading size="2.6rem">
        Assista onde quiser. Cancele quando quiser.
      </Heading>
      <Styled.SubsForm>
        <Heading size="1.9rem">
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
  );
};
