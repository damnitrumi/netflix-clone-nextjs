import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
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
    align-items: center;
    margin: 0 5.6rem;
  `}
`;

export const OptionsContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: flex-start;
    gap: 30px;
  `}
`;

export const SelectContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

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
      left: .4px;
      top: 9px;
      pointer-events: none;
    }



    &::after{
      content: "\\27A7";
      color: white;
      transform: rotate(90deg);
      position: absolute;
      right: .7rem;
      top: .8rem;
      pointer-events: none;
    }

    select{
      color: ${theme.colors.netflixTextColor};
      background-color: rgba(0,0,0,0.4);
      border: none;
      padding: 0.7rem 2.2rem;
      appearance: none;
      border: 1px solid rgba(170,170,170);
      outline: none;
      border-radius: 3px;
      font-size: 1.4rem;
      line-height: 20px;
      font-family: Netflix-Medium;



      /* -moz-appearance: none;
      -webkit-appearance: none; */
    }
    /* select::-ms-expand{
      display: none;
    } */
  `}
`;
