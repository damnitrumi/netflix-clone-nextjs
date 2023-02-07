import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.netflixMainColor};
    border: none;
    border-radius: 3px;
    padding: 14px;
    cursor: pointer;
    color: ${theme.colors.netflixTextColor};
    font-size: 1.6rem;
    box-shadow: 0 1px 0 rgb(0 0 0 / 45%);
    font-family: Netflix-Medium;
    width: 100%;
    text-align: center;
    position: relative;

    &:disabled{
      background-color: grey;
      cursor: wait;
    }

    .MuiCircularProgress-root{
      position: absolute;
      right: 15px;
      color: red;
    }
  `}
`;
