import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding-top: 28px;
    span{
      display: block;
      flex: 1;
      max-width: 167px;
      max-height: 45px;
    }
    svg{
      fill: ${theme.colors.netflixMainColor};
    }
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 56px;
    margin-bottom: 102px;

    @media ${theme.media.ltaLarge}{
    span{
      max-width: 134px;
      max-height: 36px;
    }

    @media ${theme.media.ltaBig}{

      margin: 0 45px;

      span{
        max-width: 108px;
        max-height: 32px;
      }
    }

    @media ${theme.media.ltaSmall}{
      margin: 0 26px;
      span{
        max-width: 89px;
        max-height: 24px;
      }
    }

    @media ${theme.media.ltaTiny}{
      margin: 0 19px;

    }

  `}
`;

export const OptionsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 30px;

    > a{
      color: ${theme.colors.netflixTextColor};
      background-color: ${theme.colors.netflixMainColor};
      &:hover{
        background-color: ${theme.colors.netflixHoverColor};
      }
      border: none;
      padding: 0.7rem 1.7rem;
      border-radius: 3px;
      text-decoration: none;
    }

    @media ${theme.media.ltaSmall}{
      gap: 12px;

    }
  `}
`;

export const SelectContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: 2px;
    border: 1px solid rgba(170,170,170);



    label{
      width: 1px;
      height: 1px;
      overflow: hidden;
      display: none;
    }

    &::before{
      content: '';
      width: 18px;
      height: 18px;
      background-image: url("assets/images/world-logo-netlix.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      position: absolute;
      left: 5px;
      top: 8px;
      pointer-events: none;
    }



    &::after{
      content: "\\27A7";
      color: white;
      transform: rotate(90deg);
      position: absolute;
      right: 7px;
      top: 7px;
      pointer-events: none;
    }

    select{
      color: ${theme.colors.netflixTextColor};
      background-color: rgba(0,0,0,0.4);
      border: none;
      padding: 0.7rem 2.2rem;
      appearance: none;
      outline: none;
      border-radius: 5px;
      font-size: 1.4rem;
      line-height: 20px;
      font-family: Netflix-Medium;
    }

    @media ${theme.media.ltaSmall}{
      select{
        padding: 0.7rem 2.15rem;
      }

      &::before{
        left: 3px;
        top: 8px;
      }

      &::after{
        right: 7px;
        top: 7px;
      }

    }
  `}
`;
