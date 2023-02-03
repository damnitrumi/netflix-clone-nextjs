import styled, { css } from "styled-components";
import { HeroPassingProps } from ".";

export const EmptyWrapper = styled.div`
  ${() => css`
    max-width: 100%;
    aspect-ratio: 16 / 9;
    background-color: black;
  `}
`;

export const Wrapper = styled.div<HeroPassingProps>`
  ${({ posterHorizontal }) => css`
    max-width: 100%;
    /* height: 100vh; */
    aspect-ratio: 16 / 9;
    background-image: url(${posterHorizontal});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding-left: 4%;

    iframe{
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: none;
      pointer-events: none;

    }

  `}
`;

export const Options = styled.div`
  ${() => css`
    position: relative;
    z-index: 1;
    display: flex;
    gap: 10px;
  `}
`;

export const LinkOption = styled.div`
  ${({ theme }) => css`
    /* position: absolute;
    bottom: 25%;
    left: 4%;
    z-index: 1; */

    a{
      position: relative;
      align-self: flex-start;
      display: flex;
      max-width: max-content;
      align-items: center;
      gap: 10px;
      min-height: 48px;
      background-color: ${theme.colors.netflixTextColor};
      text-decoration: none;
      color: ${theme.colors.netflixBackGround};
      padding: 8px 25px;
      font-family: Netflix-Medium;
      border-radius: 5px;
      font-size: 2rem;

      &:before{
        content: '';
        display: none;
        border-radius: 5px;
        /* width: 100%;
        height: 100%; */
        background-color: rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      &:hover:before{
        display: block;
      }
    }
  `}
`;

export const MoreInfo = styled.button`
  ${({ theme }) => css`
    border: none;
    outline: none;
    color: ${theme.colors.netflixTextColor};
    background-color: rgba(255, 255, 255, 0.3);
    font-family: Netflix-Medium;
    display: flex;
    align-items: center;
    max-width: max-content;
    min-height: 48px;
    gap: 10px;
    padding: 8px 25px;
    font-size: 2rem;
    border-radius: 5px;
    /* position: absolute;
    bottom: 25%;
    left: 14.5%;
    z-index: 1; */
    cursor: pointer;



    &:hover{
      /* background-color: rgba(255, 255, 255, 0.2); */
      background-color: rgba(0, 0, 0, 0.3);

    }
  `}
`;

export const MovieDetails = styled.div`
  ${() => css`
    position: relative;
    z-index: 1;
    /* max-width: 35%; */
    max-width: 532px;
    /* padding-left: 4%; */
    pointer-events: none;
    h1{
      margin-bottom: 20px;
    }
  `}
`;
