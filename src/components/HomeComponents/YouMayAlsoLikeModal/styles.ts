import styled, { css } from "styled-components";
import { YouMayAlsoLikeModalProps } from ".";

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: block;
    max-width: 240px;
    margin: 0 auto;
    background-color: ${theme.colors.netflixHomeBgColor};
  `}
`;

export const ImageContainer = styled.div<YouMayAlsoLikeModalProps>`
${({ theme, posterHorizontal }) => css`
  background-image: url(${posterHorizontal});
  background-size: cover;
  aspect-ratio: 16 / 9;
  border-radius: 5px 5px 0 0;
`}

`;
