import styled, { css } from "styled-components";
import { HeroPassingProps } from ".";

export const Wrapper = styled.div<HeroPassingProps>`
  ${({ posterHorizontal }) => css`
    max-width: 100%;
    /* height: 100vh; */
    aspect-ratio: 16 / 9;
    background-image: url(${posterHorizontal});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    iframe{
      position: absolute;
      /* top: 0;
      left: 0;
      bottom: 0;
      right: 0; */
      width: 100%;
      height: 100%;
      border: none;
    }

  `}
`;

export const LinkOption = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 25%;
    left: 50px;
    /* left: 3%; */
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;

    a{
      position: relative;
      align-self: flex-start;
      display: flex;
      max-width: max-content;
      align-items: center;
      gap: 10px;
      min-height: 32px;
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
    background-color: rgba(0, 0, 0, 0.5);
    font-family: Netflix-Medium;
    display: flex;
    align-items: center;
    max-width: max-content;
    min-height: 32px;
    gap: 10px;
    padding: 8px 25px;
    font-size: 2rem;
    border-radius: 5px;
    position: absolute;
    bottom: 25%;
    left: 215px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    cursor: pointer;

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
  `}
`;
