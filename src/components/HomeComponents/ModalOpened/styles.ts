import styled, { css } from "styled-components";
import { CardProps } from "../Card";

export const Wrapper = styled.div`
  ${() => css`
    padding: 30px 15px;
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    max-width: 850px;
    margin: 0 auto;
    background-color: ${theme.colors.netflixHomeBgColor};
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    border-radius: 5px ;

    > p{
      padding: 0 50px;
      margin-bottom: 10px;
    }

    > h1{
      padding: 0 50px;
      margin-bottom: 10px;
    }
  `}
`;

export const VideoContainer = styled.div<Pick<CardProps, "posterHorizontal">>`
  ${({ theme, posterHorizontal }) => css`
    aspect-ratio: 16 / 9;
    background-image: url(${posterHorizontal});
    /* background: linear-gradient(rgba(0, 0, 0, 0) 70%, ${theme.colors.netflixHomeBgColor}), url(${posterHorizontal}); */
    background-size: cover;
    position: relative;
    border-radius: 5px 5px 0 0;
    margin-bottom: 20px;
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

export const CloseOption = styled.div`
  ${({ theme }) => css`
  position: absolute;
  right: 10px;
  /* right: 5%; */
  top: 10px;
  /* top: 5%; */
  z-index: 2;
  button{
    display: block;
    border: none;
    background-color: ${theme.colors.netflixHomeBgColor};
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    svg{
      fill: ${theme.colors.netflixTextColor};
    }
  }

  `}
`;

export const LinkOption = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 15%;
    left: 50px;
    /* left: 3%; */
    z-index: 2;
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

export const AgeRatingContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0 50px;
    margin-bottom: 10px;

    p{
      line-height: 1;
      color: ${theme.colors.netflixScoreColor};
      font-family: Netflix-Medium;
    }
  `}
`;

export const AgeRating = styled.div`
  width: 30px;
  height: 30px;
`;

export const YouMayAlsoLikeWrapper = styled.div`
  ${() => css`
    padding: 0 50px;
    margin-bottom: 10px;

    h2{
      font-family: Netflix-Medium;
      font-weight: 500;
    }
  `}
`;
export const YouMayAlsoLike = styled.div`
  ${() => css`
    padding: 0 50px;
  `}
`;
