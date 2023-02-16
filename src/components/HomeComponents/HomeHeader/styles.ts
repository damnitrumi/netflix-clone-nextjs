import styled, { css } from "styled-components";
import { HomeHeaderProps, HomeInputProps } from ".";

export const Wrapper = styled.header<HomeHeaderProps>`
  ${({ theme, navBg, menuVisible }) => css`
    padding: 18px 4% 18px 17%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 300ms ease-in;
    background-color: ${
      navBg ? `${theme.colors.netflixHomeBgColor}` : "transparent"
    };
    ${
      menuVisible &&
      css`
      background-color: black;
    `
    }
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;

    > a{
        display: block;
        width: 100%;
        max-width: 92px;
        max-height: 25px;
        margin-right: 45px;
        span{
          display: block;
          line-height: 1;
        }
      }

    svg{
      fill: ${theme.colors.netflixMainColor};
    }

    > button{
      svg{
        fill: ${theme.colors.netflixTextColor};
      }
      position: absolute;
      left: 4%;
      border: none;
      background-color: transparent;
    }

    @media (max-width: 1150px){

      > a{
          margin-right: 20px;
        }
    }

    @media ${theme.media.ltaBig}{
      > a{
          max-width: 65px;
        }
    }

    @media (max-width: 500px){
      > a{
        margin-top: 4px;
      }

    }

    @media (min-width: 500px){
      padding: 18px 4%;
      > button {
        display: none;
      }
    }
  `}
`;

export const Navbar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -4px;
    svg{
      fill: ${theme.colors.netflixTextColor};
    }

    @media ${theme.media.ltaBig}{
      margin-top: 0px;

    }

    @media (min-width: 500px){
      flex: 1;
    }
  `}
`;

export const DropdownLeftContainer = styled.div`
  ${() => css`
    position: relative;

    &:hover ${LeftListHeaderResponsive}{
      opacity: 1;
      visibility: visible;
    }


    @media (min-width: 500px){
      display: block;
    }
`}
`;

export const DropdownLeftHandler = styled.div`
  ${({ theme }) => css`

      color: ${theme.colors.netflixTextColor};
      font-size: 0.9rem;
      display: none;
      cursor: pointer;



      @media (min-width: 500px) and (max-width: 850px){
        display: block;
      }
  `}
`;

export const LeftList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
    a{
      text-decoration: none;
      color: ${theme.colors.netflixTextColor};
      font-size: 1.4rem;
      transition: all 300ms ease-in;
    }

    a:hover{
      color: ${theme.colors.netflixFooterColor};
    }

    li{
      list-style-type: none;
    }

    @media (max-width: 1200px){
      a{
        font-size: 1.2rem;
      }
    }

    @media (max-width: 1101px){

      a{
        font-size: 1.1rem;
      }
    }

    @media ${theme.media.ltaBig}{
      margin-top: -8px;

      a{
        font-size: 0.9rem;
      }
    }


    @media (max-width: 850px){
      display: none;
    }
  `}
`;

export const RightList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 20px;

    .notifications, .profile{
      display: none;
      position: relative;
    }

    .profile:hover ${DropdownRightMenu}{
      opacity: 1;
      visibility: visible;
    }

    a{
      text-decoration: none;
      color: ${theme.colors.netflixTextColor};
      font-size: 1.4rem;
      transition: all 300ms ease-in;
    }

    li{
        list-style-type: none;
      }

    & > li > button {
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: transparent;
      cursor: pointer;
      border: none;

      &:hover svg{
        transform: rotate(180deg);
      }

      svg{
        flex: 0 0 24px;
        min-width: 24px;
        transition: all 200ms ease-in;
      }

      @media ${theme.media.ltaBig}{
        svg{
          display: none;
        }
      }
    }

    @media (max-width: 1200px){
      a{
        font-size: 1.2rem;
      }
    }

    @media (max-width: 1100px){

      a{
        font-size: 1rem;
      }

      .remove-responsive{
        display: none;
      }
    }

    @media ${theme.media.ltaBig}{
      a{
        font-size: 0.9rem;
      }
    }

    @media (min-width: 500px){
      .notifications, .profile{
          display: block;
      }
    }

  `}
`;

export const DropdownRightMenu = styled.ul`
  ${({ theme }) => css`
    list-style-type: none;
    position: absolute;
    top: 30px;
    right: 0;
    color: ${theme.colors.netflixTextColor};
    width: 218px;
    padding-top: 30px;
    background-color: transparent;
    border-bottom: 1px solid ${theme.colors.netflixBorderBottom};
    opacity: 0;
    visibility: hidden;
    transition: all 100ms ease-in;

    a{
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 10px 15px;
      font-size: 1.3rem;

      &:hover{
        text-decoration: underline;
      }
    }

    button{
      background-color: transparent;
      display: block;
      width: 100%;
      padding: 15px;
      color: ${theme.colors.netflixTextColor};
      border: none;
      text-align: center;
      cursor: pointer;
      border-top: 1px solid ${theme.colors.netflixBorderBottom};

      &:hover{
        text-decoration: underline;
      }
    }

    li{
      background-color: rgba(0, 0, 0, .8);
      border-right: 1px solid ${theme.colors.netflixBorderBottom};
      border-left: 1px solid ${theme.colors.netflixBorderBottom};
    }

    li:first-of-type{
      border-top: 1px solid ${theme.colors.netflixBorderBottom};
    }

    .right-list-arrow{
      position: absolute;
      left: 80%;
      transform:  translateX(-50%) rotate(180deg);
      top: 9px;

      @media ${theme.media.ltaBig}{
        left: 92.5%;
      }
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

export const InputContainer = styled.div<HomeInputProps>`
  ${({ theme, focused }) => css`
    display: flex;

    padding: 5px;
    background-color: ${focused ? "rgba(0, 0, 0, 0.75)" : "transparent"};
    border: ${
      focused
        ? `1px solid ${theme.colors.netflixTextColor}`
        : "1px solid transparent"
    };

    > div{
      line-height: 1;
    }

    button{
      background-color: transparent;
      cursor: pointer;
      border: none;
    }


    @media ${theme.media.ltaBig}{
      padding: 3px;
    }

    @media (max-width: 550px){
      max-width: auto;
    }

  `}
`;

export const SearchInput = styled.input<HomeInputProps>`
  ${({ theme, focused }) => css`
    outline: none;
    border: none;
    background-color: transparent;
    color:  ${theme.colors.netflixTextColor};
    font-size: 1.5rem;
    overflow: hidden;
    transition: all 200ms ease-in;
    max-width: ${focused ? "200px" : "0px"};
    margin-left: ${focused ? "15px" : "0px"};

    @media (max-width: 550px){
      font-size: 1.2rem;
    }

  `}
`;

export const LeftListHeaderResponsive = styled.ul`
  ${({ theme }) => css`
    display: none;
    position: absolute;
    top: 30px;
    left: -104px;
    flex-direction: column;
    align-items: stretch;
    width: 250px;
    gap: 0;
    padding-top: 30px;
    opacity: 0;
    visibility: hidden;
    transition: all 100ms ease-in;
    border-bottom: 1px solid ${theme.colors.netflixBorderBottom};
    a{
      text-decoration: none;
      color: ${theme.colors.netflixTextColor};
      transition: all 300ms ease-in;
      display: block;
      font-size: 1.3rem;
      padding: 15px;
      text-align: center;

    }

    a:hover{
      background-color: rgba(255, 255, 255, 0.1);
      color: ${theme.colors.netflixTextColor};

    }

    li{
      list-style-type: none;
      background-color: rgba(0, 0, 0, .7);
      border-right: 1px solid ${theme.colors.netflixBorderBottom};
      border-left: 1px solid ${theme.colors.netflixBorderBottom};
    }

    li:first-of-type{
        border-top: 2px solid ${theme.colors.netflixTextColor};
    }

    .left-list-arrow{
      position: absolute;
      left: 50%;
      transform:  translateX(-50%) rotate(180deg);
      top: 10px;
      display: block;
    }

    @media (max-width: 850px){
      display: flex;
    }
  `}
`;

export const bg = styled.div`
  ${() => css`
    position: fixed;
    top: 68px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
  `}
`;
