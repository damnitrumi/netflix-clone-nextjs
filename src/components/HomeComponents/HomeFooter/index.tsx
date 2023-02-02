/* eslint-disable @next/next/no-html-link-for-pages */
import { Text } from "components/Text";
import Link from "next/link";

import * as Styled from "./styles";

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "@styled-icons/boxicons-logos";

export const HomeFooter = () => {
  return (
    <Styled.IntroContainerFooter>
      <Styled.Wrapper>
        <Styled.IconsContainer>
          <a
            href="https://www.facebook.com/netflixbrasil"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook size="30px" />
          </a>
          <a
            href="https://www.instagram.com/NetflixBrasil/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size="30px" />
          </a>
          <a
            href="https://twitter.com/NetflixBrasil"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter size="30px" />
          </a>
          <a
            href="https://www.youtube.com/user/NetflixBRA"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube size="30px" />
          </a>
        </Styled.IconsContainer>
        <Styled.LinksContainer>
          <li>
            <Link href="/">Audiodescrição</Link>
          </li>
          <li>
            <Link href="/">Central de Ajuda</Link>
          </li>
          <li>
            <Link href="/">Cartão pré-pago</Link>
          </li>
          <li>
            <Link href="/">Imprensa</Link>
          </li>
          <li>
            <Link href="/">Relações com investidores</Link>
          </li>
          <li>
            <Link href="/">Carreiras</Link>
          </li>
          <li>
            <Link href="/">Termos de Uso</Link>
          </li>
          <li>
            <Link href="/">Privacidade</Link>
          </li>
          <li>
            <Link href="/">Avisos legais</Link>
          </li>
          <li>
            <Link href="/">Preferências de cookies</Link>
          </li>
          <li>
            <Link href="/">Informações Corporativas</Link>
          </li>
          <li>
            <Link href="/">Entre em contato</Link>
          </li>
        </Styled.LinksContainer>

        <Text>© 1997-2023 Netflix, Inc. </Text>
      </Styled.Wrapper>
    </Styled.IntroContainerFooter>
  );
};
