import styled, { css } from "styled-components";
import { YouMayAlsoLikeModalProps } from ".";

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: block;
    max-width: 240px;
    background-color: ${theme.colors.netflixMayLikeBg};
    text-decoration: none;
    border-radius: 5px;
    &:hover{
      ${PlayContainer}{
        opacity: 1;
      }
    }
  `}
`;

export const ImageContainer = styled.div<
  Pick<YouMayAlsoLikeModalProps, "posterHorizontal">
>`
${({ posterHorizontal }) => css`
  background-image: url(${posterHorizontal});
  background-size: cover;
  aspect-ratio: 16 / 9;
  border-radius: 5px 5px 0 0;
  position: relative;
  `}

`;

export const DataContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    p{
      font-family: Netflix-Medium;
    }
    p:first-of-type{
      color: ${theme.colors.netflixScoreColor};
    }
  `}
`;

export const AgeRating = styled.div`
  width: 30px;
  height: 30px;
`;

export const PlayContainer = styled.div`
  ${({ theme }) => css`
      border: 1px solid ${theme.colors.netflixTextColor};
      padding: 7px 6px 7px 9px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      color: white;
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: opacity 200ms ease-in;
  `}
`;
