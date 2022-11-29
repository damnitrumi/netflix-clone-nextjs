import styled, { css } from "styled-components";

export const Wrapper = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.netflixTextColor};
    background-color: ${theme.colors.netflixMainColor};
    &:hover{
      background-color: ${theme.colors.netflixHoverColor};
    }
    border: none;
    padding: 0.7rem 1.7rem;
    border-radius: 3px;
    text-decoration: none;
  `}
`;
