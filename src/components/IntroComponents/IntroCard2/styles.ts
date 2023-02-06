import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    gap: 20px;
    margin: 0 auto;

    @media ${theme.media.ltaBig}{
      flex-direction: column;
      gap: 0;
    }

  `}
`;

export const HeadingsContainer = styled.div`
  ${({ theme }) => css`
    max-width: 52%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 4px;
    padding-left: 25px;

    @media ${theme.media.ltaBig}{
      max-width: 100%;
      text-align: center;
      position: relative;
      z-index: 3;
      padding-left: 0;

      h1{
        font-size: 4.0rem;
      }
      h2{
        font-size: 2.0rem;
      }
    }

    @media ${theme.media.ltaSmall}{
      h1{
        font-size: 2.6rem;
      }
      h2{
        font-size: 1.75rem;
      }
    }

  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    margin-left: -4.6%;
    margin-top: -2.2%;
    flex-basis: 555px;
    position: relative;
    img{
      position: relative;
      z-index: 2;
    }

    @media ${theme.media.ltaBig}{
      margin-left:0;
      flex-basis: auto;
      max-width: 600px;
    }

  `}
`;

export const VideoContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    max-height: 70%;
    max-width: 61%;
    position: absolute;
    top: 34%;
    left: 49.4%;
    transform: translate(-50%,-50%);
    z-index: 1;

    video{
      width: 100%;
      height: 100%;
    }

    @media ${theme.media.ltaBig}{
      top: 34%;
    }

  `}
`;
