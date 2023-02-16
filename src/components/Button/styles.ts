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
    border-left: 1px solid #333;
    box-shadow: 0 1px 0 rgb(0 0 0 / 45%);


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
