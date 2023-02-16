import styled, { css } from "styled-components";
import { HeroPassingProps } from ".";

export const EmptyWrapper = styled.div`
  ${() => css`
    max-width: 100%;
    aspect-ratio: 16 / 9;
    background-color: black;

    @media (max-width: 499px){
      display: none;
    }
  `}
`;

export const Wrapper = styled.div<HeroPassingProps>`
  ${({ posterHorizontal }) => css`
    max-width: 100%;
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

    @media (max-width: 499px){
      display: none;
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

      @media ${theme.media.ltaBig}{
        font-size: 1.5rem;
        padding: 8px 12px;
        min-height: auto;
        svg{
          width: 20px;
          height: 20px;
        }
      }

      @media (max-width: 650px){
      font-size: 1.2rem;
      padding: 8px 12px;
      min-height: auto;
      gap: 5px;
      svg{
        width: 15px;
        height: 15px;
      }
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
    cursor: pointer;



    &:hover{
      background-color: rgba(0, 0, 0, 0.3);
    }

    @media ${theme.media.ltaBig}{
      font-size: 1.5rem;
      padding: 8px 12px;
      min-height: auto;
      svg{
        width: 20px;
        height: 20px;
      }
    }

    @media (max-width: 650px){
      font-size: 1.2rem;
      padding: 8px 12px;
      min-height: auto;
      gap: 5px;

      svg{
        width: 15px;
        height: 15px;
      }
    }
  `}
`;

export const MovieDetails = styled.div`
  ${() => css`
    position: relative;
    z-index: 1;
    max-width: 35%;
    pointer-events: none;
    h1{
      margin-bottom: 20px;
    }

    @media (max-width: 750px){
      font-size: 1rem;
      h1{
      margin-bottom: 10px;
    }

      p{
        font-size: 1.5rem;
      }
    }

    @media (max-width: 650px){
      font-size: 0.8rem;
      p{
        font-size: 1.2rem;
      }
    }
  `}
`;
