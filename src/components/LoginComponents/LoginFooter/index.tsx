/* eslint-disable @next/next/no-html-link-for-pages */
import { Text } from "components/Text";
import * as Styled from "./styles";
import * as StyledHeader from "../../IntroComponents/IntroHeader/styles";

export const LoginFooter = () => {
  return (
    <Styled.IntroContainerFooter>
      <Styled.Wrapper>
        <Text>
          Dúvidas? Ligue <a href="tel:0800 591 8942">0800 591 8942</a>
        </Text>
        <Styled.LinksContainer>
          <li>
            <a href="/">Perguntas frequentes</a>
          </li>
          <li>
            <a href="/">Central de Ajuda</a>
          </li>
          <li>
            <a href="/">Termos de Uso</a>
          </li>
          <li>
            <a href="/">Privacidade</a>
          </li>
          <li>
            <a href="/">Preferências de cookies</a>
          </li>
          <li>
            <a href="/">Informações Corporativas</a>
          </li>
        </Styled.LinksContainer>
        <StyledHeader.SelectContainer>
          <label htmlFor="language-picker">Selecione o idioma</label>
          <select name="language-picker" id="language-picker">
            <option value="pt-BR">Português</option>
            <option value="en">English</option>
          </select>
        </StyledHeader.SelectContainer>
      </Styled.Wrapper>
    </Styled.IntroContainerFooter>
  );
};
