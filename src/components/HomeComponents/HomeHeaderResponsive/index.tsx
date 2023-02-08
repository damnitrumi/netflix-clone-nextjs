import { signOut } from "next-auth/react";
import Link from "next/link";
import * as Styled from "./styles";

export type HomeHeaderResponsiveProps = {
  visible: boolean;
};

export const HomeHeaderResponsive = ({
  visible,
}: HomeHeaderResponsiveProps) => {
  return (
    <Styled.Wrapper visible={visible}>
      <Styled.MainOptions>
        <li>
          <Styled.ImgContainer>
            <img
              src="assets/images/netflix-user-icon.jpg"
              alt="Sunder Muthukumaran on Unsplash.com"
            />
          </Styled.ImgContainer>
          <Styled.DataContainer>
            <Link href="/">Usuário</Link>
            <Link href="/">Trocar de perfil</Link>
          </Styled.DataContainer>
        </li>
        <li>
          <Link href="/">Conta</Link>
        </li>
        <li>
          <Link href="/">Central de Ajuda</Link>
        </li>
        <li>
          <button onClick={() => signOut()}>Sair da Netflix</button>
        </li>
      </Styled.MainOptions>
      <Styled.Categories>
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/">Minha lista</Link>
        </li>
        <li>
          <Link href="/">Suspenses</Link>
        </li>
        <li>
          <Link href="/">Para toda a família</Link>
        </li>
        <li>
          <Link href="/">Filmes e séries estrangeiros</Link>
        </li>
        <li>
          <Link href="/">Reality shows</Link>
        </li>
        <li>
          <Link href="/">Histórias LGBTQ</Link>
        </li>
        <li>
          <Link href="/">Anime</Link>
        </li>
        <li>
          <Link href="/">Ação</Link>
        </li>
        <li>
          <Link href="/">Comédia</Link>
        </li>
        <li>
          <Link href="/">Fantasia</Link>
        </li>
        <li>
          <Link href="/">Ficção científica</Link>
        </li>
        <li>
          <Link href="/">Terror</Link>
        </li>
        <li>
          <Link href="/">Comédia stand-up</Link>
        </li>
        <li>
          <Link href="/">Filmes e séries brasileiros</Link>
        </li>
        <li>
          <Link href="/">Documentários</Link>
        </li>
        <li>
          <Link href="/">Música e musicais</Link>
        </li>
        <li>
          <Link href="/">Romance</Link>
        </li>
        <li>
          <Link href="/">Dramas</Link>
        </li>
      </Styled.Categories>
    </Styled.Wrapper>
  );
};
