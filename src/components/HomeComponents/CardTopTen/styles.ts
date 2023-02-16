import styled, { css } from "styled-components";
import { CardTopTenProps } from ".";
import { Title as Heading } from "../../Heading/styles";

export const Wrapper = styled.div`
  ${() => css`
    width: 100%;
    aspect-ratio: 1 / 0.7;
    background-size: cover;
    position: relative;
    border-radius: 2px;
    display: flex;

    &:hover ${Modal}{
      visibility: visible;
      width: 356px;
      top: -80%;
      height: auto;
      z-index: 1;
      ${DataContainer}{
        min-height: 170px;
        opacity: 1;
      }
    }

    @media (max-width: 650px){
      &:hover ${Modal}{
       width: 290px;
      }
    }
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    background-color: ${theme.colors.netflixHomeBgColor};
    visibility: hidden;
    transition: all 300ms ease-in;
    box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    border-radius: 2px;
  `}
`;

export const VideoContainer = styled.div<
  Pick<CardTopTenProps, "posterHorizontal">
>`
  ${({ posterHorizontal }) => css`
    aspect-ratio: 16 / 9;
    background-image: url(${posterHorizontal});
    background-size: cover;
    border-radius: 2px 2px 0 0;
    position: relative;
    iframe{
      position: absolute;
      width: 100%;
      height: 100%;
      border: none;
    }
  `}
`;

export const DataContainer = styled.div`
  ${({ theme }) => css`
    transition: all 300ms ease-in;
    opacity: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${Heading}{
      text-align: center;
      pointer-events: none;
    }

    > p{
      color: ${theme.colors.netflixScoreColor};
    }
  `}
`;

export const Controls = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg{
      fill: white;
    }

    a{
      position: relative;
    }

    a:before{
      content: '';
      display: none;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    a:hover:before{
      display: block;
    }

    .chevron-container{
      line-height: 1;
      padding: 8px;
      border-radius: 50%;
      border: 2px solid ${theme.colors.netflixFooterColor};
      background-color: transparent;
      cursor: pointer;
      position: relative;

      &:hover{
        border: 2px solid ${theme.colors.netflixTextColor};
      }

      &:hover + ${Info}{
        display: block;
      }

    }
  `}
`;

export const AgeRating = styled.div`
  width: 30px;
  height: 30px;
`;

export const AgeRatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 2px;
  p{
    line-height: 1;
  }
`;

export const Info = styled.div`
  ${() => css`
      border-radius: 2px;
      padding: 10px 20px;
      background-color: white;
      position: absolute;
      width: max-content;
      top: 45%;
      left: 66%;
      display: none;
      cursor: pointer;
      > svg{
        position: absolute;
        fill: white;
        bottom: -23px;
        left: 50%;
        transform: translateX(-50%);
      }
  `}
`;

export const SvgContainer = styled.div`
  ${() => css`
  flex: 0 1 50%;
  padding-left: 14%;
  `}
`;

export const PosterContainer = styled.div`
  ${() => css`
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
    img{
      width: 100%;
      height: 100%;
    }
  `}
`;
