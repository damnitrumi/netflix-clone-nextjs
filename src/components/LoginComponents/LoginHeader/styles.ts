import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding: 24px 3% 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 22px;

    span{
      display: block;
      flex: 1;
      max-width: 167px;
      max-height: 45px;
    }
    svg{
      fill: ${theme.colors.netflixMainColor};
    }

    @media (max-width: 740px){
      padding-left: 5%;
    }


    @media (max-width: 620px){
      padding-top: 16px;
    }

    @media (max-width: 440px){
      span{
        max-width: 74px;
        max-height: 20px;
      }
    }

  `}
`;
