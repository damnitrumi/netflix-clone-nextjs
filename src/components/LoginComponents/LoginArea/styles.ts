import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 450px;
    margin: 0 auto;
    min-height: 660px;
    background-color: rgba(0 0, 0, 0.75);
    padding: 60px 68px 40px;
    border-radius: 5px;
    margin-bottom: 90px;

    >h1{
      margin-bottom: 28px;
    }

    > p{
      color: ${theme.colors.netflixFooterColor};
      margin-bottom: 8px;
      a{
        color: ${theme.colors.netflixTextColor};
        text-decoration: none;
      }
    }

    a:hover{
      text-decoration: underline;
    }

    @media (max-width: 740px){
      width: 100%;
      border-bottom: 1px solid ${theme.colors.netflixFooterColor};
      padding: 12px 5% 99px;
      min-height: auto;
      margin-bottom: 0;
    }

  `}
`;

export const LoginInput = styled.input`
  ${({ theme }) => css`
    outline: none;
    font-size: 1.6rem;
    padding: 16px 20px 5px ;
    display: block;
    width: 100%;
    border: none;
    background-color: ${theme.colors.netflixInputBgColor};
    border-radius: 3px;
    height: 50px;
    font-family: Netflix-Medium;

    &.has-error{
      border-bottom: 2px solid ${theme.colors.netflixErrorColor};
    }

    &:focus{
      border: ${theme.colors.netflixErrorColor};
    }
  `}
`;

export const LoginForm = styled.form`
    ${() => css`
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-height: 313px;

      @media (max-width: 740px){
        min-height: 285px;
      }

  `}
`;
export const LoginInputContainer = styled.div`
  ${({ theme }) => css`
    position: relative;

    label{
      position: absolute;
      left: 20px;
      color: #8c8c8c;
      top: 25px;
      transform: translateY(-50%);
      transition: all .1s ease-in-out;
      pointer-events: none;
    }

  > ${LoginInput}{
    color: white;
  }

  > ${LoginInput}:focus{
    border-color: #0071eb;
  }

  > ${LoginInput}:focus + label{
    transform: translateY(0);
    top: 6px;
    font-family: Netflix-Medium;
    font-size: 1.1rem;
  }

  label.has-data{
    transform: translateY(0);
    top: 6px;
    font-family: Netflix-Medium;
    font-size: 1.1rem;
  }

  & + &{
    margin-bottom: 24px;
  }

  p{
    color: ${theme.colors.netflixErrorColor};
    font-size: 1.3rem;
    padding-left: 3px;
    line-height: 1;
    margin-top: 8px;
  }

  @media (max-width: 740px){
    label{
      font-size: 1.4rem;
    }
  }

  `}
`;

export const OptionsContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.netflixLightGreyColor};
    font-size: 1.3rem;
    position: relative;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: -2px;

    input{
      position: absolute;
      left: 1px;
      top: 1px;
    }

    label::before{
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      background-color: ${theme.colors.netflixTextColor};
      border-radius: 2px;
      position: absolute;
      pointer-events: none;
      left: 0px;
    }

    input:checked + label::before{
      display: none;
    }

    input:checked + label::after{
      content: '\\2714';
      color: black;
      display: flex;
      justify-content: center;
      width: 16px;
      height: 16px;
      background-color: ${theme.colors.netflixFooterColor};
      border-radius: 2px;
      position: absolute;
      pointer-events: none;
      left: 0px;
      top: 0;
      z-index: 2;
    }

    a{
      color: ${theme.colors.netflixLightGreyColor};
      text-decoration: none;
    }

  `}
`;

export const CaptchaText = styled.p`
  ${({ theme }) => css`
    font-size: 1.3rem;
    a{
      color: ${theme.colors.netflixMainBlue} !important;
    }
  `}
`;

export const LoginError = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.netflixErrorColor};
    padding: 10px 20px;
    border-radius: 3px;

    p{
      font-size: 1.4rem;
      line-height: 1.3;
    }

    a{
      color: ${theme.colors.netflixTextColor};
    }
  `}
`;
