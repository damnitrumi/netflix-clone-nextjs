import styled, { css } from "styled-components";
import { Wrapper as Text } from "../../Text/styles";
import { Wrapper as IntroContainer } from "../IntroContainer/styles";
import { SelectContainer } from "../IntroHeader/styles";

export const IntroContainerFooter = styled(IntroContainer)`
  ${({ theme }) => css`
    border-bottom: none;
    padding: 70px 45px 25px 50px;

    @media ${theme.media.ltaBig}{
      padding: 70px 45px 25px 90px;

    @media (max-width: 750px){
      padding: 70px 45px 25px 50px;
    }

  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 900px;
    margin: 0 auto;
    color: ${theme.colors.netflixFooterColor};

    ${Text}{
      color: ${theme.colors.netflixFooterColor};
    }

    ${Text}:last-child{
      font-size: 1.3rem;
    }


    a{
      color: ${theme.colors.netflixFooterColor};
      text-decoration: none;
    }

    a:hover{
      text-decoration: underline;
    }

    ${SelectContainer}{
      max-width: max-content;
      border-color: ${theme.colors.netflixFooterColor};
      border-radius: 2px;
      margin-bottom: 20px;
      &::before{
        width: 25px;
        height: 25px;
        left: 12px;
        top: 13px;
      }

      &::after{
        top: 16px;
        color: ${theme.colors.netflixFooterColor};
      }

      select{
        color: ${theme.colors.netflixFooterColor};
        padding: 1.6rem 2.6rem 1.6rem 5rem;
        font-size: 1.6rem;
      }
    }
  `}
`;

export const LinksContainer = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4 ,minmax(100px, 225px));
    row-gap: 15px;
    column-gap: 15px;
    margin: 25px 0;
    li{
      list-style-type: none;
      font-size: 1.3rem;
    }

    @media ${theme.media.ltaBig}{
      column-gap: 5px;
    }

    @media (max-width: 740px){
      grid-template-columns: repeat(3 ,minmax(100px, 225px));
    }

    @media (max-width: 500px){
      grid-template-columns: repeat(2 ,minmax(100px, 225px));
    }
  `}
`;
