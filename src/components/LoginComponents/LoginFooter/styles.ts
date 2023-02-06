import styled, { css } from "styled-components";
import { Wrapper as Text } from "../../Text/styles";
import { Wrapper as IntroContainer } from "../../IntroComponents/IntroContainer/styles";
import { SelectContainer } from "../../IntroComponents/IntroHeader/styles";

export const IntroContainerFooter = styled(IntroContainer)`
  ${() => css`
    border-bottom: none;
    padding: 30px 5%;
    background-color: rgba(0 0, 0, 0.75);

    @media (max-width: 740px){
      padding: 25px 5%;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1000px;
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
      background-color: ${theme.colors.netflixBackGround};
      &::before{
        width: 25px;
        height: 25px;
        left: 8px;
        top: 11px;
      }

      &::after{
        top: 15px;
        color: ${theme.colors.netflixFooterColor};
      }

      select{
        color: ${theme.colors.netflixFooterColor};
        padding: 14px 26px 14px 50px;
        font-size: 1.3rem;
      }
    }
  `}
`;

export const LinksContainer = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4 ,minmax(100px, 235px));
    row-gap: 15px;
    column-gap: 15px;
    margin: 25px 0 35px;
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
