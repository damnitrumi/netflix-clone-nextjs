import styled, { css } from "styled-components";
import { Title as Heading } from "../../Heading/styles";
import { Wrapper as Button } from "../../Button/styles";
import { Wrapper as IntroContainer } from "../IntroContainer/styles";

export const SubsIntroContainer = styled(IntroContainer)`
  ${({ theme }) => css`
    background-color: transparent;
    @media ${theme.media.ltaSmall}{
      padding: 70px 26px;
    }

    @media ${theme.media.ltaTiny}{
      padding: 70px 26px 70px 26px;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 950px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    padding-bottom: 86px;


    ${Heading}{
      margin: 0 auto;
      line-height: 1.1;
    };

    > ${Heading}:first-child{
      max-width: 800px;
      padding: 0 50px;
      font-family: Netflix-Medium;
    };

    ${Button}{
      &:hover{
      background-color: ${theme.colors.netflixHoverColor};
    }
    }

    @media ${theme.media.ltaLarge} {
      h1{
        font-size: 5.0rem;
      }
    }

    @media ${theme.media.ltaBig} {
      gap: 10px;
      > ${Heading}:first-child{
        max-width: 100%;
      };
    };

    @media ${theme.media.ltaSmall} {
      > ${Heading}:first-child{
        font-size: 2.8rem;
        padding: 0;
      };

      h2{
        font-size: 1.8rem;
      }
    };

    @media ${theme.media.ltaTiny}{
      padding-bottom: 0;
    }
    }

  `}
`;

export const SubsForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 12px;

    @media ${theme.media.ltaLarge} {
      h3{
        font-size: 2.3rem;
        max-width: 450px;
      }
    }

    @media ${theme.media.ltaBig} {
      gap: 10px;
    }

    @media ${theme.media.ltaMedium} {
      h3{
        font-size: 1.8rem;
      }
    }

  `}
`;

export const SubsInput = styled.input`
  ${({ theme }) => css`
    outline: none;
    flex: 1;
    border: 1px solid #8c8c8c;
    font-size: 1.6rem;
    padding: 10px 10px 0 10px;

    @media ${theme.media.ltaBig} {
        min-height: 60px;
    }

    @media ${theme.media.ltaMedium} {
        min-height: 48px;
    }
  `}

`;

export const SubsContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  label{
    position: absolute;
    left: 10px;
    color: #8c8c8c;
    top: 50%;
    transform: translateY(-50%);
    transition: all .1s ease-in-out;
    pointer-events: none;
  }

  > ${SubsInput}:focus{
    border-color: #0071eb;
  }

  > ${SubsInput}:focus + label{
    transform: translateY(0);
    top: 6px;
    font-family: Netflix-Medium;
    font-size: 1.3rem;
  }
`;

export const SubsWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 710px;
    margin: 0 auto;
    display: flex;
    width: 100%;

    @media ${theme.media.ltaLarge} {
      max-width: 630px;
      ${Button}{
        font-size: 2.6rem;
        padding: 0 24px;
        min-height: 60px;
      }
    }
    @media ${theme.media.ltaBig} {
      max-width: 500px;
      flex-direction: column;
      /* align-items: center; */
      gap: 15px;

      ${Button}{
        align-self: center;
        min-height: 40px;
        font-size: 1.6rem;
        padding: 0 16px;

        span{
          padding-left: 10px;
        }

        svg{
          height: 10px;
        }
      }
    }
  `}

`;
