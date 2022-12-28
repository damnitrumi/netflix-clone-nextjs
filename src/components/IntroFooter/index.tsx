/* eslint-disable @next/next/no-html-link-for-pages */
import { Text } from "components/Text";
import * as Styled from "./styles";
import * as StyledHeader from "../IntroHeader/styles";

export const IntroFooter = () => {
  return (
    <Styled.IntroContainerFooter>
      <Styled.Wrapper>
        <Text>
          Dúvidas? Ligue <a href="tel:0800 591 8942">0800 591 8942</a>
        </Text>
        <Styled.LinksContainer>
          <li>
            <a href="/">Perguntas Frequentes</a>
          </li>
          <li>
            <a href="/">Central de Ajuda</a>
          </li>
          <li>
            <a href="/">Conta</a>
          </li>
          <li>
            <a href="/">Media Center</a>
          </li>
          <li>
            <a href="/">Relações com investidores</a>
          </li>
          <li>
            <a href="/">Carreiras</a>
          </li>
          <li>
            <a href="/">Resgatar cartão pré-pago</a>
          </li>
          <li>
            <a href="/">Comprar cartão pré-pago</a>
          </li>
          <li>
            <a href="/">Formas de assistir</a>
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
          <li>
            <a href="/">Entre em contato</a>
          </li>
          <li>
            <a href="/">Teste de velocidade</a>
          </li>
          <li>
            <a href="/">Avisos legais</a>
          </li>
          <li>
            <a href="/">Só na Netflix</a>
          </li>
        </Styled.LinksContainer>
        <StyledHeader.SelectContainer>
          <label htmlFor="language-picker">Selecione o idioma</label>
          <select name="language-picker" id="language-picker">
            <option value="pt-BR">Português</option>
            <option value="en">English</option>
          </select>
        </StyledHeader.SelectContainer>
        <Text>Netflix Brasil</Text>
      </Styled.Wrapper>
    </Styled.IntroContainerFooter>
  );
};
