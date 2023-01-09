import styled, { css } from "styled-components";
import { HomeHeaderProps, HomeInputProps } from ".";

export const Wrapper = styled.header<HomeHeaderProps>`
  ${({ theme, navBg }) => css`
    padding: 18px 4% 18px 17%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 300ms ease-in;
    background-color: ${
      navBg ? `${theme.colors.netflixHomeBgColor}` : "transparent"
    };
    position: fixed;
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
    display: none;
    &:hover ${LeftList}{
      display: flex;
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



      @media (max-width: 850px){
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

    .left-list-arrow{
      position: absolute;
      left: 50%;
      transform:  translateX(-50%) rotate(180deg);
      top: 10px;
      display: none;
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
      position: absolute;
      top: 30px;
      left: -104px;
      flex-direction: column;
      align-items: stretch;
      /* border-top: 2px solid ${theme.colors.netflixTextColor}; */
      width: 250px;
      gap: 0;
      display: none;
      padding-top: 30px;

      li:first-of-type{
        border-top: 2px solid ${theme.colors.netflixTextColor};
      }

      li{
        background-color: rgba(0, 0, 0, .7);
      }

      a{
        display: block;
        font-size: 1.3rem;
        padding: 15px;
        text-align: center;
      }

      a:hover{
        background-color: rgba(255, 255, 255, 0.1);
        color: ${theme.colors.netflixTextColor};
      }

      .left-list-arrow{
        display: block;
      }
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

    li > button {
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

    /* svg{
        fill: ${theme.colors.netflixTextColor};
    } */

    /* input{
      outline: none;
      border: none;
      background-color: transparent;
      color:  ${theme.colors.netflixTextColor};
      font-size: 1.5rem;
    } */

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
    /* float: right; */
    transition: all 200ms ease-in;
    max-width: ${focused ? "200px" : "0px"};
    margin-left: ${focused ? "15px" : "0px"};

    @media (max-width: 550px){
      font-size: 1.2rem;
    }

  `}
`;
