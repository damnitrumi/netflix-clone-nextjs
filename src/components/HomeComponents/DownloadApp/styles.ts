import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.netflixMainColor};
    font-size: ${theme.font.sizes.medium};
    margin-top: 130px;
    padding: 0px 4%;
    justify-content: center;
    align-items: center;
    display: none;

    @media (max-width: 499px){
      display: flex;
    }
  `}
`;
