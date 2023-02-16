import styled, { css } from "styled-components";
import { Title as Heading } from "../../Heading/styles";
import { SubsForm } from "../IntroSubscription/styles";
import { Wrapper as IntroContainer } from "../IntroContainer/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: 0 auto;
    padding: 0 106px;

    > ${Heading}{
        margin-bottom: 50px;
      }

    @media ${theme.media.ltaBig} {
      padding: 0 42px;
      > h1{
        font-size: 4.0rem;
      }
    }

    @media (max-width: 650px) {
      padding: 0 23px;
    }

    @media ${theme.media.ltaSmall} {
      padding: 0 ;
      > ${Heading}{
        font-size: 2.6rem;
        margin-bottom: 20px;
      }

    }
  `}
`;

export const IntroSubsForm = styled(SubsForm)`
${({ theme }) => css`
  @media ${theme.media.ltaLarge} {
    h3{
      max-width: max-content;
      margin: 0 auto;
      font-size: 1.9rem;
    }
  }


  @media ${theme.media.ltaBig} {
    h3{
      max-width: 450px;
      font-size: 2.3rem;
    }
  }

  @media (max-width: 740px) {
    h3{
      font-size: 1.8rem;
    }
  }

  @media ${theme.media.ltaTiny} {
    padding: 0 15px;
  }


  `}
`;

export const FifthIntroContainer = styled(IntroContainer)`
  ${({ theme }) => css`
    @media ${theme.media.ltaSmall}{
      padding: 70px 0px;
    }
  `}
`;
