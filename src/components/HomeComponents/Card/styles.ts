import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    width: 237px;
    aspect-ratio: 16 / 9;
    background-color: yellow;
    transition: all 100ms ease-in;
    position: relative;
    &:hover ${Modal}{
      visibility: visible;
      width: 356px;
      top: -80%;
      height: 371px;
      z-index: 5;
      height: auto;
      ${DataContainer}{
        min-height: 170px;
      }
    }
  `}
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: white;
  visibility: hidden;
  transition: all 300ms ease-in;
`;

export const VideoContainer = styled.div`
  ${() => css`
    aspect-ratio: 16 / 9;
    background-color: beige;
  `}
`;
export const DataContainer = styled.div`
  ${() => css`
    transition: all 300ms ease-in;
    min-height: 0px;
    background-color: green;
  `}
`;
