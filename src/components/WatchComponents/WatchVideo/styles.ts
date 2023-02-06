import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    position: relative;
    height: 100vh;
    /* aspect-ratio: 16 / 9; */
    iframe{
      position: absolute;
      width: 100%;
      height: 100%;
      border: none;
    }
  `}
`;
