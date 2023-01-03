import { Heading } from "components/Heading";
import { Text } from "components/Text";
import Link from "next/link";
import { LoginBtn } from "../LoginBtn";
import * as Styled from "./styles";

export function LoginArea() {
  return (
    <Styled.Wrapper>
      <Heading size="3.2rem">Entrar</Heading>
      <Styled.LoginForm>
        <Styled.LoginInputContainer>
          <Styled.LoginInput type="email" id="user-input" />
          <label htmlFor="user-input">Email ou número de telefone</label>
        </Styled.LoginInputContainer>
        <Styled.LoginInputContainer>
          <Styled.LoginInput type="password" id="password-input" />
          <label htmlFor="password-input">Senha</label>
        </Styled.LoginInputContainer>
        <LoginBtn>Entrar</LoginBtn>
        <Styled.OptionsContainer>
          <input type="checkbox" id="save-login" defaultChecked />
          <label htmlFor="save-login">Lembre-se de mim</label>
          <Link href="/">Precisa de ajuda?</Link>
        </Styled.OptionsContainer>
      </Styled.LoginForm>
      <Text>
        Novo por aqui? <Link href="/">Assine agora</Link>.
      </Text>
      <Styled.CaptchaText>
        Esta página é protegida pelo Google reCAPTCHA para garantir que você não
        é um robô. <Link href="/">Saiba mais.</Link>
      </Styled.CaptchaText>
    </Styled.Wrapper>
  );
}
