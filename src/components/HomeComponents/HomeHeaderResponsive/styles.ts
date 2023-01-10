import styled, { css } from "styled-components";
import { HomeHeaderResponsiveProps } from ".";

export const Wrapper = styled.nav<HomeHeaderResponsiveProps>`
  ${({ theme, visible }) => css`
    background-color: black;
    width: 100%;
    max-width: 250px;
    padding: 15px 0;
    position: fixed;
    z-index: 2;
    left: ${visible ? "0" : "-250px"};
    top: 68px;
    bottom: 0;
    overflow: auto;
    transition: left 300ms ease-in;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    a{
      color: ${theme.colors.netflixFooterColor};
      text-decoration: none;
      font-family: Netflix-Medium;
      font-size: 1.6rem;
    }

    button{
      color: ${theme.colors.netflixFooterColor};
      font-family: Netflix-Medium;
      font-size: 1.6rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    @media (min-width: 500px){
      display: none;
    }
  `}
`;

export const MainOptions = styled.ul`
  ${({ theme }) => css`
    list-style-type: none;
    border-bottom: 1px solid ${theme.colors.netflixBorderBottom};
    padding-bottom: 15px;

    li:first-child{
      display: flex;
      align-items: center;
      gap: 5px;
    }

    li{
      padding: 3px 15px;
    }

  `}
`;

export const Categories = styled.ul`
  ${() => css`
    list-style-type: none;
    padding-top: 15px;
    li{
      padding: 3px 15px;
    }

  `}
`;

export const ImgContainer = styled.div`
  ${() => css`
    max-width: 32px;
    border-radius: 5px;
    img{
      border-radius: 5px;
    }
  `}
`;

export const DataContainer = styled.div`
  ${() => css`
    a{
      display: block;
      line-height: 1;
    };

    a:last-of-type{
      font-size: 1rem;
    }
  `}
`;
