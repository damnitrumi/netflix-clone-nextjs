import { Heading } from "components/Heading";
import { Text } from "components/Text";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { LoginBtn } from "../LoginBtn";
import * as Styled from "./styles";

export function LoginArea() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (loginError) {
      setLoginError(false);
    }

    if (username && password) {
      console.log("entrei no if pois tem valor");
      const response = await signIn("credentials", {
        username: username,
        password: password,
        redirect: false,
      });

      if (!response.ok) {
        console.log("entrei no if mas não loguei pois a senha ta errada");

        setLoginError(true);
        setLoading(false);
        return;
      }

      console.log("entrei no if e loguei");
      console.log(response.ok);
    } else {
      console.log("settei pelo else que não tem valores");
      setLoginError(true);
    }

    setLoading(false);
  };

  const handleUserChange = (e: React.FormEvent<HTMLInputElement>) => {
    const userData = e.currentTarget.value;
    setUsername(userData);
  };

  const handleUserError = (e: React.FormEvent<HTMLInputElement>) => {
    const userData = e.currentTarget.value;
    if (userData.length > 0) {
      const containsData = userData.includes("@");
      setUsernameError(!containsData);
    }
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    const passwordData = e.currentTarget.value;
    setPassword(passwordData);
  };

  const handlePasswordError = (e: React.FormEvent<HTMLInputElement>) => {
    const passwordData = e.currentTarget.value;
    if (passwordData.length <= 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <Styled.Wrapper>
      <Heading size="3.2rem">Entrar</Heading>
      <Styled.LoginForm onSubmit={handleSubmit}>
        {loginError && (
          <Styled.LoginError>
            <Text>
              Desculpe, não encontramos uma conta com esse endereço de email.
              Tente novamente ou <Link href="/">crie uma nova conta</Link>.
            </Text>
          </Styled.LoginError>
        )}

        <Styled.LoginInputContainer>
          <Styled.LoginInput
            type="email"
            id="user-input"
            onChange={handleUserChange}
            value={username}
            onBlur={handleUserError}
            className={usernameError ? "has-error" : ""}
          />
          <label
            htmlFor="user-input"
            className={username.length > 0 ? "has-data" : ""}
          >
            Email ou número de telefone
          </label>
          {usernameError && <Text>Informe um email válido.</Text>}
        </Styled.LoginInputContainer>
        <Styled.LoginInputContainer>
          <Styled.LoginInput
            type="password"
            id="password-input"
            onChange={handlePasswordChange}
            value={password}
            onBlur={handlePasswordError}
            className={passwordError ? "has-error" : ""}
          />
          <label
            htmlFor="password-input"
            className={password.length > 0 ? "has-data" : ""}
          >
            Senha
          </label>
          {passwordError && (
            <Text>A senha deve ter entre 4 e 60 caracteres.</Text>
          )}
        </Styled.LoginInputContainer>
        <LoginBtn disabled={loading}>Entrar</LoginBtn>
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
