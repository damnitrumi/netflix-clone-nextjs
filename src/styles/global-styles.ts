import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: Netflix;
    font-weight: 400;
    /* background-color: black; */
    background-color: ${theme.colors.netflixHomeBgColor};
    overflow-x: hidden;
  }

  img{
    display: block;
    max-width: 100%;
    object-fit: cover;
}
`;
