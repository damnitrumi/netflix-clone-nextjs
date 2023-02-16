import styled, { css } from "styled-components";
import { AnswerProps } from ".";
import { Wrapper as Button } from "../../Button/styles";
import { Wrapper as Text } from "../../Text/styles";

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    max-width: 815px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 50px;

    a{
      color: ${theme.colors.netflixTextColor}
    }

    li{
      list-style-type: none;
      display: block;
      width: 100%;
      margin-bottom: 1px;
    }

    @media ${theme.media.ltaBig}{
      margin-bottom: 15px;
    }


  `}
`;

export const FrequentlyAskedBtn = styled(Button)`
  ${({ theme }) => css`
    background-color: #303030;
    width: 100%;
    justify-content: space-between;
    font-size: 2.6rem;
    span{
      display: none;
    }
    svg{
      height: 35px;
    }

    @media ${theme.media.ltaBig}{
      font-size: 2.0rem;
      min-height: 57px;
      padding: 0 20px;
      svg{
        height: 25px;
      }
    }

    @media ${theme.media.ltaSmall}{
      font-size: 1.8rem;
      min-height: 51px;
      text-align: start;
    }
  `}
`;

export const OptionContainer = styled.div``;

export const Answer = styled.div<AnswerProps>`
  ${({ tab, index }) => css`
    background-color: #303030;
    max-height: 0;
    overflow: hidden;
    transition: all .5s ease-in;

    ${
      tab == index &&
      css`
      max-height: 1200px;
      `
    };

    ${Text}{
      padding: 30px;
    }
  `}

`;
