import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding: 22px 4% 0;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-bottom: 22px;


    > a{
        display: block;
        width: 100%;
        max-width: 92px;
        max-height: 25px;
        margin-right: 45px;
      }

    svg{
      fill: ${theme.colors.netflixMainColor};
    }

    @media ${theme.media.ltaBig}{
      padding-top: 10px;

      > a{
          max-width: 65px;
        }
    }
  `}
`;

export const Navbar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    margin-top: -4px;
    background-color: blue;
  `}
`;

export const LeftList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 20px;

    a{
      text-decoration: none;
      color: ${theme.colors.netflixLightGreyColor};
      font-size: 1.4rem;
      transition: all 300ms ease-in;
    }

    a:hover{
      color: ${theme.colors.netflixFooterColor};
    }

    li{
      list-style-type: none;
    }
  `}
`;
export const RightList = styled.ul`
  ${({ theme }) => css`
  li{
      list-style-type: none;
    }
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: rgba(0, 0, 0, 0.75);
    border: 1px solid white;
    padding: 3px;

    > div{
      line-height: 1;
    }

    button{
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    svg{
        fill: ${theme.colors.netflixTextColor};
        margin-right: 15px;
    }

    /* input{
      outline: none;
      border: none;
      background-color: transparent;
      color:  ${theme.colors.netflixTextColor};
      font-size: 1.5rem;
    } */
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    outline: none;
    border: none;
    background-color: transparent;
    color:  ${theme.colors.netflixTextColor};
    font-size: 1.5rem;
  `}
`;
