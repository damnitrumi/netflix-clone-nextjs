import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.netflixMainColor};
    border: none;
    cursor: pointer;
    color: ${theme.colors.netflixTextColor};
    font-size: 3.0rem;
    padding: 0 30px;
    display: flex;
    align-items: center;
    min-height: 70px;

    &:hover{
      background-color: ${theme.colors.netflixHoverColor};
    }

    span{
      display: flex;
      padding-left: 15px;
    }

    svg{
      height: 25px;
    }

    path{
      fill: white;
    }


  `}
`;
