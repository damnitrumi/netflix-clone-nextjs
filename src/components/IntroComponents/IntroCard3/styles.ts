import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 0 auto;

    @media ${theme.media.ltaBig}{
      flex-direction: column;
    }
  `}
`;

export const HeadingsContainer = styled.div`
  ${({ theme }) => css`
    max-width: 52%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-right: 20px;

    @media ${theme.media.ltaBig}{
      max-width: 100%;
      text-align: center;
      position: relative;
      z-index: 3;

      padding-right: 0;

      h1{
        font-size: 4.0rem;
      }
      h2{
        font-size: 2.0rem;
      }
    }

    @media ${theme.media.ltaSmall}{
      gap: 12px;
      h1{
        font-size: 2.6rem;
      }
      h2{
        font-size: 1.8rem;
      }
    }

  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    flex-basis: 1140px;
    position: relative;
    img{
      position: relative;
      z-index: 2;
    }

    @media ${theme.media.ltaBig}{
      flex-basis: auto;
    }

  `}
`;
